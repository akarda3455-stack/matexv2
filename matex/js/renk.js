// renk oyunu
const RK = {
    on: false, paused: false, muted: false,
    level: 1, maxLevel: 20, score: 0, streak: 0, best: 0,
    exacts: 0, round: 1,
    target: null, user: { h: 0, s: 0, l: 100 },
    showSec: 5, time: 5, phase: 'idle',
    timer: null, timers: []
};
try { RK.best = parseInt(localStorage.getItem('renk_best') || '0') || 0; } catch (e) { RK.best = 0; }

const RK_EXACT_DE = 2;
const RK_EXACT_PTS = 500;
const RK_STREAK_BONUS = 100;
const RK_STREAK_MAX = 500;
const RK_CURVE_K = 22;
const RK_BUCKETS = [[90, 400], [80, 300], [70, 200], [60, 100], [50, 50]];

const rkEl = s => document.getElementById(s);
const rkClamp = (v, a, b) => Math.min(b, Math.max(a, v));
const rkNorm360 = a => ((a % 360) + 360) % 360;

function rkGauss(mu, sd) { // box-muller
    if (!sd || sd <= 0) return mu;
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    return mu + z * sd;
}
function rkHslToRgb(h, s, l) {
    h = rkNorm360(h); s = rkClamp(s, 0, 100) / 100; l = rkClamp(l, 0, 100) / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; } else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; } else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; } else { r = c; b = x; }
    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}
function rkHex(rgb) { return '#' + rgb.map(v => rkClamp(v, 0, 255).toString(16).padStart(2, '0')).join('').toUpperCase(); }
function rkRgbToLab(rgb) {
    let [r, g, b] = rgb.map(v => { v = v / 255; return v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92; });
    let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    const f = t => t > 0.008856 ? Math.cbrt(t) : (7.787 * t + 16 / 116);
    x = f(x); y = f(y); z = f(z);
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}
function rkDeltaE(a, b) {
    const x = rkRgbToLab(a), y = rkRgbToLab(b);
    return Math.sqrt((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2);
}

function rkPercent(dE) {
    if (dE <= RK_EXACT_DE) return 100;
    return rkClamp(Math.round(100 * Math.exp(-Math.pow(dE / RK_CURVE_K, 1.5))), 0, 100);
}
function rkEvaluate(dE) {
    const exact = dE <= RK_EXACT_DE;
    const pct = rkPercent(dE);
    let pts = 0;
    if (exact) {
        pts = RK_EXACT_PTS;
    } else {
        for (let i = 0; i < RK_BUCKETS.length; i++) {
            if (pct >= RK_BUCKETS[i][0]) { pts = RK_BUCKETS[i][1]; break; }
        }
    }
    return { exact: exact, pct: pct, pts: pts };
}

let RK_AC = null;
function rkInitAudio() {
    if (RK.muted) return;
    try {
        RK_AC = RK_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (RK_AC.state === 'suspended') RK_AC.resume();
    } catch (e) { RK_AC = null; }
}
function rkTone(freq, dur, type, vol, delay) {
    if (!RK_AC || RK.muted) return;
    try {
        const t0 = RK_AC.currentTime + (delay || 0);
        const o = RK_AC.createOscillator(), g = RK_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(RK_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const RK_SFX = {
    show() { rkTone(520, .1, 'sine', .09); },
    hide() { rkTone(300, .16, 'triangle', .09); },
    tick() { rkTone(1200, .04, 'sine', .05); },
    exact() { rkTone(880, .1, 'sine', .12); rkTone(1174, .1, 'sine', .12, .08); rkTone(1568, .22, 'sine', .13, .16); },
    close() { rkTone(660, .09, 'sine', .1); rkTone(880, .12, 'sine', .1, .07); },
    miss() { rkTone(240, .22, 'sawtooth', .1); rkTone(170, .28, 'sawtooth', .09, .06); },
    levelUp() { rkTone(523, .12, 'sine', .12); rkTone(659, .12, 'sine', .12, .1); rkTone(784, .12, 'sine', .12, .2); rkTone(1047, .25, 'sine', .14, .3); },
    gameOver() { rkTone(392, .18, 'sawtooth', .08); rkTone(294, .18, 'sawtooth', .08, .16); rkTone(196, .35, 'sawtooth', .09, .32); }
};
window.rkToggleMute = function () {
    RK.muted = !RK.muted;
    rkEl('rkMuteBtn').textContent = RK.muted ? '🔇' : '🔊';
    if (!RK.muted) rkInitAudio();
};

function rkLevelConfig(lvl) {
    const show = Math.max(2.5, 5 - (lvl - 1) * 0.15);
    const shrink = Math.max(0.15, Math.pow(0.5, (lvl - 1) / 4));
    return { show: show, sH: 45 * shrink, sS: 25 * shrink, sL: 22 * shrink };
}
function rkPickHue() {
    const centers = [0, 30, 55, 110, 170, 220, 285, 330];
    return centers[Math.floor(Math.random() * centers.length)] + (Math.random() * 24 - 12);
}
function rkMakeTarget(cfg) {
    return {
        h: rkNorm360(rkGauss(rkPickHue(), cfg.sH)),
        s: rkClamp(rkGauss(60, cfg.sS), 28, 100),
        l: rkClamp(rkGauss(58, cfg.sL), 25, 88)
    };
}
window.rkLevelConfig = rkLevelConfig;

function rkClearTimers() { RK.timers.forEach(id => clearTimeout(id)); RK.timers = []; }
function rkLater(fn, ms) { const id = setTimeout(fn, ms); RK.timers.push(id); return id; }

window.startRenkFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    rkEl('renkGameScreen').style.display = 'block';
    rkStartGame();
};
window.rkBackToMode = function () {
    rkStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    rkEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.rkGoProfile = function () {
    rkStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    rkEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
function rkStopAll() {
    RK.on = false; RK.paused = false; RK.phase = 'idle';
    clearInterval(RK.timer);
    rkClearTimers();
    rkEl('rkExitModal').style.display = 'none';
    rkEl('rkResultOv').classList.remove('show');
    rkEl('rkGoOv').classList.remove('show');
}
window.rkRequestExit = function () {
    if (!RK.on) { rkBackToMode(); return; }
    RK.paused = true;
    rkEl('rkExitModal').style.display = 'flex';
};
window.rkConfirmExit = function () { rkEl('rkExitModal').style.display = 'none'; rkBackToMode(); };
window.rkCancelExit = function () { rkEl('rkExitModal').style.display = 'none'; RK.paused = false; };

function rkRenderPalette() {
    const h = Math.round(RK.user.h), s = Math.round(RK.user.s), l = Math.round(RK.user.l);
    const rgb = rkHslToRgb(h, s, l);
    rkEl('rkChip').style.background = 'hsl(' + h + ',' + s + '%,' + l + '%)';
    rkEl('rkHexTxt').textContent = rkHex(rgb);
    rkEl('rkRgbTxt').textContent = 'hsl(' + h + ', ' + s + '%, ' + l + '%) | rgb(' + rgb.join(', ') + ')';
    rkEl('rkHueVal').textContent = h + '°';
    rkEl('rkSatVal').textContent = s + '%';
    rkEl('rkLightVal').textContent = l + '%';
    rkEl('rkHue').value = h; rkEl('rkSat').value = s; rkEl('rkLight').value = l;
    rkEl('rkHue').style.background = 'linear-gradient(to right,#ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)';
    rkEl('rkSat').style.background = 'linear-gradient(to right, hsl(' + h + ',0%,' + l + '%), hsl(' + h + ',100%,' + l + '%), hsl(' + h + ',100%,' + Math.max(20, l - 18) + '%))';
    rkEl('rkLight').style.background = 'linear-gradient(to right,#000, hsl(' + h + ',' + s + '%,50%), #fff)';

    const warn = rkEl('rkWarnLine');
    if (warn) {
        if (s === 0) warn.textContent = '💧 Doygunluk %0 olunca kare bembeyaz kalır. Sağdaki kaydırıcıyı sağa çek.';
        else if (s < 12) warn.textContent = '💧 Doygunluk çok düşük, renk neredeyse beyaz görünür.';
        else if (l >= 97) warn.textContent = '⚪ Açıklık çok yüksek, renk beyaza kaçıyor. Koyulaştır.';
        else if (l <= 4) warn.textContent = '⚫ Açıklık çok düşük, renk siyaha kaçıyor. Aç.';
        else warn.textContent = '';
    }

    if (RK.phase === 'adjust') rkEl('rkSquare').style.background = 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
['rkHue', 'rkSat', 'rkLight'].forEach(id => {
    rkEl(id).addEventListener('input', function () {
        if (RK.phase !== 'adjust' || RK.paused) return;
        rkInitAudio();
        RK.user.h = +rkEl('rkHue').value;
        RK.user.s = +rkEl('rkSat').value;
        RK.user.l = +rkEl('rkLight').value;
        rkRenderPalette();
    });
});
window.rkResetWhite = function () {
    if (RK.phase !== 'adjust' || RK.paused) return;
    rkInitAudio(); RK_SFX.tick();
    RK.user = { h: 0, s: 0, l: 100 };
    rkRenderPalette();
};

function rkSetControls(on) {
    ['rkHue', 'rkSat', 'rkLight', 'rkWhiteBtn'].forEach(id => rkEl(id).disabled = !on);
    rkEl('rkOkBtn').disabled = !on;
}
function rkUpdateHUD() {
    rkEl('rkLevelPill').textContent = 'SEVİYE ' + RK.level;
    rkEl('rkRoundPill').textContent = 'TUR ' + RK.round;
    rkEl('rkScorePill').textContent = '⭐ ' + RK.score;
    rkEl('rkStreakPill').style.display = RK.streak >= 2 ? '' : 'none';
    rkEl('rkStreakPill').textContent = '🔥 x' + RK.streak;
    rkEl('rkMuteBtn').textContent = RK.muted ? '🔇' : '🔊';
}
function rkRenderDots() {
    let html = '';
    for (let i = 1; i <= RK.maxLevel; i++) {
        const cls = i < RK.level ? 'rk-dot done' : (i === RK.level ? 'rk-dot cur' : 'rk-dot');
        html += '<div class="' + cls + '"></div>';
    }
    rkEl('rkDots').innerHTML = html;
}

function rkStartGame() {
    rkInitAudio();
    RK.on = true; RK.paused = false;
    RK.level = 1; RK.score = 0; RK.streak = 0; RK.exacts = 0; RK.round = 1;
    RK.best = parseInt(localStorage.getItem('renk_best') || '0') || 0;
    rkEl('rkExitModal').style.display = 'none';
    rkEl('rkResultOv').classList.remove('show');
    rkEl('rkGoOv').classList.remove('show');
    rkUpdateHUD();
    rkRenderDots();
    rkStartRound();
}
window.rkStartGame = rkStartGame;
window.rkRestartGame = function () { rkStartGame(); };

function rkStartRound() {
    const cfg = rkLevelConfig(RK.level);
    RK.showSec = cfg.show;
    RK.time = cfg.show;
    RK.phase = 'show';
    RK.target = rkMakeTarget(cfg);

    RK.user = { h: 0, s: 0, l: 100 };

    rkEl('rkResultOv').classList.remove('show');
    rkEl('rkPhaseNote').className = 'rk-phase-note rk-warn';
    rkEl('rkPhaseNote').textContent = '👀 Hedef rengi ezberle!';
    rkEl('rkHint').textContent = cfg.show.toFixed(1) + ' saniye sonra kare kaybolacak';
    rkEl('rkSquare').classList.add('rk-memorize');
    rkEl('rkSquare').style.background = 'hsl(' + RK.target.h.toFixed(1) + ',' + RK.target.s.toFixed(1) + '%,' + RK.target.l.toFixed(1) + '%)';
    rkSetControls(false);
    rkRenderDots();
    rkUpdateHUD();
    rkInitAudio(); RK_SFX.show();

    let left = Math.ceil(cfg.show);
    rkEl('rkCountNum').textContent = left;
    clearInterval(RK.timer);
    RK.timer = setInterval(function () {
        left--;
        if (left > 0) {
            rkEl('rkCountNum').textContent = left;
            RK_SFX.tick();
        } else {
            clearInterval(RK.timer);
            rkBeginAdjust();
        }
    }, 1000);
}

function rkBeginAdjust() {
    RK.phase = 'adjust';
    RK.user = { h: 0, s: 0, l: 100 };
    rkEl('rkSquare').classList.remove('rk-memorize');
    rkEl('rkPhaseNote').className = 'rk-phase-note';
    rkEl('rkPhaseNote').textContent = '⬜ Kare beyaz! Kaydırıcılarla hedef rengi oluştur';
    rkEl('rkHint').textContent = 'Önce RENK TONU\'nu seç, sonra DOYGUNLUK ve AÇIKLIK ile tonu tuttur';
    rkSetControls(true);
    rkRenderPalette();
    RK_SFX.hide();
}

window.rkSubmit = function () {
    if (RK.phase !== 'adjust' || RK.paused) return;
    RK.phase = 'result';
    clearInterval(RK.timer);

    const tRgb = rkHslToRgb(RK.target.h, RK.target.s, RK.target.l);
    const uRgb = rkHslToRgb(RK.user.h, RK.user.s, RK.user.l);
    const dE = rkDeltaE(tRgb, uRgb);
    const r = rkEvaluate(dE);

    let pts = r.pts;
    if (r.exact) {
        RK.streak++;
        RK.exacts++;
        pts += Math.min(RK_STREAK_MAX, RK_STREAK_BONUS * (RK.streak - 1));
    } else {
        RK.streak = 0;
    }
    RK.score += pts;

    const isRecord = RK.score > RK.best && RK.score > 0;
    if (isRecord) {
        RK.best = RK.score;
        try { localStorage.setItem('renk_best', String(RK.best)); } catch (e) { }
    }

    rkEl('rkCmpTarget').style.background = 'hsl(' + RK.target.h.toFixed(1) + ',' + RK.target.s.toFixed(1) + '%,' + RK.target.l.toFixed(1) + '%)';
    rkEl('rkCmpUser').style.background = 'hsl(' + Math.round(RK.user.h) + ',' + Math.round(RK.user.s) + '%,' + Math.round(RK.user.l) + '%)';
    rkEl('rkCmpTgtHex').textContent = rkHex(tRgb) + ' | hsl(' + Math.round(RK.target.h) + ',' + Math.round(RK.target.s) + '%,' + Math.round(RK.target.l) + '%)';
    rkEl('rkCmpUsrHex').textContent = rkHex(uRgb) + ' | hsl(' + Math.round(RK.user.h) + ',' + Math.round(RK.user.s) + '%,' + Math.round(RK.user.l) + '%)';

    rkEl('rkPctValue').textContent = '%' + r.pct;
    rkEl('rkPctFill').style.width = r.pct + '%';
    rkEl('rkPctFill').style.background = r.exact
        ? 'linear-gradient(90deg,#22c55e,#06b6d4)'
        : r.pct >= 90 ? 'linear-gradient(90deg,#f59e0b,#eab308)'
            : r.pct >= 70 ? 'linear-gradient(90deg,#ef4444,#f59e0b)'
                : 'linear-gradient(90deg,#7f1d1d,#ef4444)';

    if (r.exact) {
        rkEl('rkResEmoji').textContent = '🎯';
        rkEl('rkResTitle').textContent = 'BİREBİR!';
        rkEl('rkResSub').textContent = 'Mükemmel eşleşme, 500 puan!' + (pts > RK_EXACT_PTS ? ' (+' + (pts - RK_EXACT_PTS) + ' seri bonusu)' : '');
    } else if (r.pct >= 90) {
        rkEl('rkResEmoji').textContent = '🔥';
        rkEl('rkResTitle').textContent = '%' + r.pct + ' YAKLAŞTIN';
        rkEl('rkResSub').textContent = 'Neredeyse birebir ama değil! Tam puan sadece birebirde.';
    } else if (r.pct >= 70) {
        rkEl('rkResEmoji').textContent = '🙂';
        rkEl('rkResTitle').textContent = '%' + r.pct + ' YAKLAŞTIN';
        rkEl('rkResSub').textContent = 'Tonu andırıyor ama yeterince değil. Seviye tekrar ediyor.';
    } else if (r.pct >= 50) {
        rkEl('rkResEmoji').textContent = '😬';
        rkEl('rkResTitle').textContent = '%' + r.pct + ' YAKLAŞTIN';
        rkEl('rkResSub').textContent = 'Az bir yakınlık, en düşük puan dilimi.';
    } else {
        rkEl('rkResEmoji').textContent = '💤';
        rkEl('rkResTitle').textContent = '%' + r.pct + ' YAKLAŞTIN';
        rkEl('rkResSub').textContent = '%50 altı: puan yok. Seviye tekrar ediyor.';
    }

    rkEl('rkBigPoints').textContent = '+' + pts;
    rkEl('rkBigPoints').className = 'rk-big-points' + (pts === 0 ? ' zero' : '');
    rkEl('rkDeNote').textContent = 'Renk farkı (ΔE): ' + dE.toFixed(1) +
        ' | birebir sınırı ΔE ≤ ' + RK_EXACT_DE;

    const rows = [[100, 500]].concat(RK_BUCKETS);
    rkEl('rkTable').innerHTML = rows.map(function (x) {
        const hit = (x[0] === 100 && r.exact) || (!r.exact && r.pct >= x[0] && pts === x[1]);
        return '<span class="' + (hit ? 'hit' : '') + '">%' + x[0] + ' → ' + x[1] + 'p</span>';
    }).join('');

    rkEl('rkStLevel').textContent = RK.level;
    rkEl('rkStScore').textContent = RK.score;
    rkEl('rkStBest').textContent = RK.best;
    rkEl('rkRecordBadge').style.display = isRecord ? 'block' : 'none';
    rkEl('rkNextBtn').textContent = r.exact ? '➡️ Devam Et' : '🔁 Aynı Seviye - Tekrar Dene';

    rkUpdateHUD();
    rkEl('rkResultOv').classList.add('show');

    if (r.exact) {
        RK.level++;
        RK_SFX.exact();
        if (RK.level > RK.maxLevel) rkLater(function () { RK_SFX.levelUp(); }, 500);
    } else { RK_SFX.miss(); }
    rkRenderDots();
};

window.rkNextRound = function () {
    rkEl('rkResultOv').classList.remove('show');
    if (!RK.on) return;
    if (RK.level > RK.maxLevel) { rkShowGameOver(true); return; }
    RK.round++;
    rkStartRound();
};

function rkShowGameOver(allClear) {
    const isRecord = RK.score > RK.best && RK.score > 0;
    const prevBest = RK.best;
    if (isRecord) {
        RK.best = RK.score;
        try { localStorage.setItem('renk_best', String(RK.best)); } catch (e) { }
    }
    try { if (RK.score > 0 && typeof addPoints === 'function') addPoints(RK.score); } catch (e) { }
    RK_SFX.gameOver();

    rkEl('rkGoEmoji').textContent = allClear ? '👑' : '🏁';
    rkEl('rkGoTitle').textContent = allClear ? 'MÜKEMMEL!' : 'Oyun Bitti!';
    rkEl('rkGoSub').textContent = allClear
        ? 'Tüm ' + RK.maxLevel + ' seviyeyi birebir tutturdun! Renk ustasısın.'
        : 'Birebir tutturulan seviye: ' + RK.exacts;
    rkEl('rkGoLevel').textContent = RK.level;
    rkEl('rkGoScore').textContent = RK.score;
    rkEl('rkGoBest').textContent = RK.best;
    rkEl('rkGoRecord').style.display = isRecord ? 'block' : 'none';
    rkEl('rkGoOv').classList.add('show');
    RK.on = false;
}
window.rkShowGameOver = rkShowGameOver;

document.addEventListener('keydown', function (e) {
    if (!RK.on) return;
    if (e.key === 'Escape') {
        if (rkEl('rkExitModal').style.display === 'flex') rkCancelExit(); else rkRequestExit();
        return;
    }
    if (e.key === 'Enter' && RK.phase === 'adjust' && !RK.paused) { e.preventDefault(); window.rkSubmit(); }
});
