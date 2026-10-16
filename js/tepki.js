// hızlı tepki
const TP = {
    on: false, paused: false, muted: false,
    phase: 'idle',
    turn: 1, score: 0, streak: 0, tricks: 0,
    bestMs: 0, bestScore: 0,
    ms: 0, t0: 0, times: [], scored: false,
    countIv: null, darkTm: null, errTm: null, raf: 0,
    delayTo: 0, debugDelay: null
};
try { TP.bestMs = parseInt(localStorage.getItem('tepki_best') || '0') || 0; } catch (e) { TP.bestMs = 0; }
try { TP.bestScore = parseInt(localStorage.getItem('tepki_bestscore') || '0') || 0; } catch (e) { TP.bestScore = 0; }

const TP_AVG_HUMAN = 273; // ortalama insan tepki süresi (ms)
const TP_SCALE_MAX = 600;

const TP_TIERS = [
    { max: 150, pts: 500, label: 'İNANILMAZ!', emoji: '⚡', msg: 'Bu hız gerçek mi?! Neredeyse senkron.' },
    { max: 200, pts: 400, label: 'EFSANE', emoji: '🔥', msg: 'Yıldırım gibisin!' },
    { max: 250, pts: 300, label: 'ÇOK İYİ', emoji: '😎', msg: 'Ortalamanın çok üstünde bir tepki.' },
    { max: 300, pts: 200, label: 'İYİ', emoji: '👍', msg: 'Sağlam bir tepki.' },
    { max: 400, pts: 100, label: 'NORMAL', emoji: '🙂', msg: 'Fena değil, biraz daha hızlanabilirsin.' },
    { max: 500, pts: 50, label: 'YAVAŞ', emoji: '🐢', msg: 'Ağır kaldın, yeşili geç gördün sanki.' },
    { max: 999999, pts: 0, label: 'ÇOK YAVAŞ', emoji: '💤', msg: 'Yeşili kaçırdın! Bir dahaki sefere hazır ol.' }
];
function tpTierFor(ms) {
    for (let i = 0; i < TP_TIERS.length; i++) if (ms <= TP_TIERS[i].max) return TP_TIERS[i];
    return TP_TIERS[TP_TIERS.length - 1];
}
const TP_SERI_LIMIT = 250;
const TP_SERI_BONUS = 50;
const TP_SERI_MAX = 250;

function tpDelay() {
    if (TP.debugDelay !== null && TP.debugDelay !== undefined) return TP.debugDelay;
    const r = Math.random();
    if (r < 0.15) return 0;
    if (r < 0.45) return 0.3 + Math.random() * 1.2;
    if (r < 0.75) return 1.5 + Math.random() * 2.5;
    return 4 + Math.random() * 3;
}

const tpEl = s => document.getElementById(s);
const tpClamp = (v, a, b) => Math.min(b, Math.max(a, v));
const tpFmt = ms => (ms / 1000).toFixed(3);

let TP_AC = null;
function tpInitAudio() {
    if (TP.muted) return;
    try {
        TP_AC = TP_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (TP_AC.state === 'suspended') TP_AC.resume();
    } catch (e) { TP_AC = null; }
}
function tpTone(freq, dur, type, vol, delay) {
    if (!TP_AC || TP.muted) return;
    try {
        const t0 = TP_AC.currentTime + (delay || 0);
        const o = TP_AC.createOscillator(), g = TP_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(TP_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const TP_SFX = {
    beep(step) { tpTone(420 + (3 - step) * 130, .12, 'sine', .11); },
    go() { tpTone(880, .09, 'square', .12); tpTone(1320, .14, 'square', .1, .05); },
    early() { tpTone(150, .28, 'sawtooth', .14); tpTone(96, .34, 'sawtooth', .12, .06); },
    great() { tpTone(880, .1, 'sine', .12); tpTone(1174, .1, 'sine', .12, .08); tpTone(1568, .22, 'sine', .13, .16); },
    ok() { tpTone(660, .1, 'sine', .11); tpTone(880, .14, 'sine', .11, .08); },
    slow() { tpTone(320, .16, 'triangle', .1); tpTone(240, .22, 'triangle', .09, .1); },
    over() { tpTone(392, .18, 'sawtooth', .08); tpTone(294, .18, 'sawtooth', .08, .16); tpTone(196, .35, 'sawtooth', .09, .32); },
    click() { tpTone(700, .05, 'square', .07); }
};
window.tpToggleMute = function () {
    TP.muted = !TP.muted;
    tpEl('tpMuteBtn').textContent = TP.muted ? '🔇' : '🔊';
    if (!TP.muted) tpInitAudio();
};

function tpClearAll() {
    if (TP.countIv) { clearInterval(TP.countIv); TP.countIv = null; }
    if (TP.darkTm) { clearTimeout(TP.darkTm); TP.darkTm = null; }
    if (TP.errTm) { clearTimeout(TP.errTm); TP.errTm = null; }
    if (TP.raf) { cancelAnimationFrame(TP.raf); TP.raf = 0; }
}

function tpSetPhase(p) {
    TP.phase = p;
    const s = tpEl('tepkiGameScreen');
    s.classList.remove('tp-ready', 'tp-count', 'tp-dark', 'tp-go', 'tp-error');
    if (p === 'ready' || p === 'count') s.classList.add('tp-' + (p === 'ready' ? 'ready' : 'count'));
    if (p === 'dark') s.classList.add('tp-dark');
    if (p === 'go') s.classList.add('tp-go');
    if (p === 'error') s.classList.add('tp-error');
    tpEl('tpDots').style.display = (p === 'dark') ? 'flex' : 'none';
    tpEl('tpStartBtn').style.display = (p === 'ready') ? '' : 'none';
}

window.startTepkiFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    tpEl('tepkiGameScreen').style.display = 'block';
    tpStartGame();
};
window.tpGoCategories = function () {
    tpStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    try {
        if (typeof goToCategorySelect === 'function') { goToCategorySelect(); return; }
    } catch (e) { }
    tpEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.tpBackToMode = function () {
    tpStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    tpEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.tpGoProfile = function () {
    tpFinishSession();
    tpStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    tpEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
window.tpGoModes = function () {
    tpFinishSession();
    tpStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    tpEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
function tpStopAll() {
    TP.on = false; TP.paused = false;
    tpClearAll();
    tpEl('tpExitModal').style.display = 'none';
    tpEl('tpResultOv').classList.remove('show');
    tpSetPhase('idle');
}
window.tpRequestExit = function () {
    if (TP.phase === 'go') return;
    TP.paused = true;
    if (tpEl('tpExitInfo')) {
        tpEl('tpExitInfo').textContent = 'Puanın: ' + TP.score +
            (TP.bestMs ? ' | En hızlı tepkin: ' + TP.bestMs + ' ms' : '') +
            ' | Çıkarsan puanların rütbene işlenir ve kategorilere dönersin.';
    }
    tpEl('tpExitModal').style.display = 'flex';
};
window.tpCancelExit = function () { tpEl('tpExitModal').style.display = 'none'; TP.paused = false; };
window.tpConfirmExit = function () {
    tpEl('tpExitModal').style.display = 'none';
    tpFinishSession();
};

function tpUpdateHUD() {
    tpEl('tpTurnPill').textContent = 'TUR ' + TP.turn;
    tpEl('tpScorePill').textContent = '⭐ ' + TP.score;
    tpEl('tpBestPill').style.display = TP.bestMs > 0 ? '' : 'none';
    tpEl('tpBestPill').textContent = '⚡ ' + TP.bestMs + ' ms';
    tpEl('tpMuteBtn').textContent = TP.muted ? '🔇' : '🔊';
}
function tpAvg() {
    if (!TP.times.length) return 0;
    return Math.round(TP.times.reduce((a, b) => a + b, 0) / TP.times.length);
}

function tpStartGame() {
    tpInitAudio();
    tpClearAll();
    TP.on = true; TP.paused = false;
    TP.turn = 1; TP.score = 0; TP.streak = 0; TP.tricks = 0; TP.times = [];
    TP.bestMs = parseInt(localStorage.getItem('tepki_best') || '0') || 0;
    TP.bestScore = parseInt(localStorage.getItem('tepki_bestscore') || '0') || 0;
    tpEl('tpResultOv').classList.remove('show');
    TP.scored = false;
    tpUpdateHUD();
    tpReady();
}
window.tpStartGame = tpStartGame;

function tpReady() {
    tpSetPhase('ready');
    tpEl('tpBig').textContent = '🚦';
    tpEl('tpBig').className = 'tp-big';
    tpEl('tpMsg').textContent = 'HAZIR MISIN?';
    tpEl('tpSub').textContent = '3-2-1 sayılacak... ama yeşil ışık hemen yanmaz. Sabırlı ol, hazır ol!';
    tpEl('tpHint').textContent = 'Klavye: BOŞLUK / ENTER ile de basabilirsin | ESC = çıkış';
}

function tpBeginRound() {
    if (!TP.on || TP.paused) return;
    tpInitAudio(); TP_SFX.click();
    tpCountdown(3);
}
window.tpStart = function () {
    if (!TP.on || TP.paused) return;
    if (TP.phase !== 'ready') return;
    tpBeginRound();
};

function tpCountdown(n) {
    tpSetPhase('count');
    let step = n;
    tpEl('tpBig').className = 'tp-big tp-pulse';
    tpEl('tpBig').textContent = step;
    tpEl('tpMsg').textContent = 'Yeşile hazır ol...';
    tpEl('tpSub').textContent = 'Yeşil ne zaman yanacak belli değil! 👀';
    tpEl('tpHint').textContent = 'Erken basarsan yakalanırsın, kandırılmaya hazır ol 🎭';
    TP_SFX.beep(step);
    if (TP.countIv) clearInterval(TP.countIv);
    TP.countIv = setInterval(function () {
        step--;
        if (step > 0) {
            tpEl('tpBig').textContent = step;
            TP_SFX.beep(step);
        } else {
            clearInterval(TP.countIv); TP.countIv = null;
            tpEnterDark();
        }
    }, 1000);
}

function tpEnterDark() {
    if (!TP.on || TP.paused) return;
    TP.delayTo = tpDelay();
    tpSetPhase('dark');
    tpEl('tpBig').textContent = '...';
    tpEl('tpBig').className = 'tp-big';
    tpEl('tpMsg').textContent = 'BEKLE...';
    tpEl('tpSub').textContent = TP.delayTo === 0
        ? 'Sayı bitti ama yeşil gelmedi! Sabır...'
        : 'Yeşil geliyor ama ne zaman? 1 saniye de olabilir, 10 saniye de!';
    tpEl('tpHint').textContent = 'Şimdi basarsan "erken bastın" olur 🎭';
    if (TP.darkTm) clearTimeout(TP.darkTm);
    TP.darkTm = setTimeout(tpGo, Math.round(TP.delayTo * 1000));
}

function tpGo() {
    if (!TP.on || TP.paused) return;
    if (TP.darkTm) { clearTimeout(TP.darkTm); TP.darkTm = null; }
    tpSetPhase('go');
    tpEl('tpBig').textContent = 'BAS!';
    tpEl('tpBig').className = 'tp-big tp-go-text';
    tpEl('tpMsg').textContent = '🟢 ŞİMDİ!';
    tpEl('tpMsg').className = 'tp-msg tp-go-text';
    tpEl('tpSub').textContent = 'Hemen bas! Süre arka planda işliyor...';
    tpEl('tpHint').textContent = '⌛ ölçülüyor...';
    TP_SFX.go();
    TP.t0 = 0;
    TP.raf = requestAnimationFrame(function () { TP.t0 = performance.now(); });
}

function tpHit() {
    if (TP.phase !== 'go') return;
    const now = performance.now();
    const ms = Math.max(1, Math.round(now - (TP.t0 || now)));
    TP.ms = ms;
    TP.raf && cancelAnimationFrame(TP.raf);
    TP.raf = 0;
    tpSetPhase('result');
    tpEl('tpMsg').className = 'tp-msg';

    const tier = tpTierFor(ms);
    let pts = tier.pts;
    if (ms <= TP_SERI_LIMIT) {
        TP.streak++;
        if (TP.streak > 1) pts += Math.min(TP_SERI_MAX, TP_SERI_BONUS * (TP.streak - 1));
    } else {
        TP.streak = 0;
    }
    TP.score += pts;
    TP.times.push(ms);

    const isRecord = (TP.bestMs === 0 || ms < TP.bestMs);
    if (isRecord) {
        TP.bestMs = ms;
        try { localStorage.setItem('tepki_best', String(ms)); } catch (e) { }
    }

    tpEl('tpResEmoji').textContent = tier.emoji;
    tpEl('tpResMs').textContent = tpFmt(ms);
    tpEl('tpResMsSub').textContent = 'saniye | ' + ms + ' ms';
    tpEl('tpResTitle').textContent = tier.label;
    tpEl('tpResSub').textContent = tier.msg;
    tpEl('tpBigPoints').textContent = '+' + pts;
    tpEl('tpBigPoints').className = 'tp-big-points' + (pts === 0 ? ' zero' : '');

    const diff = TP_AVG_HUMAN - ms;
    tpEl('tpCmp').innerHTML = diff >= 0
        ? 'İnsan ortalamasından <b>' + diff + ' ms daha hızlı</b> ⚡'
        : 'İnsan ortalamasından <b>' + Math.abs(diff) + ' ms daha yavaş</b> 🐢';

    const pct = tpClamp(ms / TP_SCALE_MAX * 100, 1, 100);
    tpEl('tpScaleFill').style.width = pct + '%';
    tpEl('tpScaleAvg').style.left = (TP_AVG_HUMAN / TP_SCALE_MAX * 100) + '%';
    tpEl('tpScaleAvgLbl').style.left = (TP_AVG_HUMAN / TP_SCALE_MAX * 100) + '%';
    tpEl('tpScaleMark').style.left = pct + '%';

    tpEl('tpStatNote').textContent = 'Puan tablosu: ≤150ms 500 | ≤200 400 | ≤250 300 | ≤300 200 | ≤400 100 | ≤500 50 | üstü 0' +
        (TP.streak > 1 ? ' | 🔥 seri x' + TP.streak : '') +
        (TP.tricks > 0 ? ' | 🎭 ' + TP.tricks + ' kez kandırıldın' : '');
    tpEl('tpStTurn').textContent = TP.turn;
    tpEl('tpStBest').textContent = TP.bestMs + ' ms';
    tpEl('tpStAvg').textContent = TP.times.length > 1 ? tpAvg() + ' ms' : '-';
    tpEl('tpRecordBadge').style.display = isRecord ? 'block' : 'none';

    tpUpdateHUD();
    tpEl('tpResultOv').classList.add('show');
    if (ms <= 200) TP_SFX.great();
    else if (ms <= 400) TP_SFX.ok();
    else TP_SFX.slow();
}

function tpEarly() {
    if (TP.phase !== 'count' && TP.phase !== 'dark') return;
    tpClearAll();
    TP.tricks++;
    TP.streak = 0;
    TP_SFX.early();
    tpSetPhase('error');
    tpEl('tpBig').textContent = '🎭';
    tpEl('tpBig').className = 'tp-big';
    tpEl('tpMsg').className = 'tp-msg';
    tpEl('tpMsg').textContent = 'ERKEN BASTIN! KANDIRILDIN';
    tpEl('tpSub').textContent = 'Yeşil daha yanmamıştı. Bu tur puan yok, tekrar sayılıyor!';
    tpEl('tpHint').textContent = TP.tricks === 1 ? '🎭 1 kez kandırıldın' : '🎭 ' + TP.tricks + ' kez kandırıldın';
    TP.errTm = setTimeout(function () {
        if (!TP.on) return;
        tpCountdown(3);
    }, 1200);
}
window.tpTap = function () {
    if (!TP.on || TP.paused) return;
    if (TP.phase === 'go') tpHit();
    else if (TP.phase === 'count' || TP.phase === 'dark') tpEarly();
};

window.tpNextTurn = function () {
    tpEl('tpResultOv').classList.remove('show');
    if (!TP.on) return;
    TP.turn++;
    tpUpdateHUD();
    tpBeginRound();
};
window.tpRestartGame = function () { tpStartGame(); };

function tpFinishSession() {
    const isRecord = TP.score > TP.bestScore && TP.score > 0;
    if (isRecord) {
        TP.bestScore = TP.score;
        try { localStorage.setItem('tepki_bestscore', String(TP.bestScore)); } catch (e) { }
    }
    if (!TP.scored && TP.score > 0) {
        TP.scored = true;
        try { if (typeof addPoints === 'function') addPoints(TP.score); } catch (e) { }
    }
    tpClearAll();
    TP.on = false;
    tpGoCategories();
}
window.tpFinishSession = tpFinishSession;

(function () {
    const stage = tpEl('tpStage');
    if (!stage) return;
    stage.addEventListener('pointerdown', function (e) {
        if (e.isPrimary === false) return;
        if (TP.phase === 'ready' || TP.phase === 'result' || TP.phase === 'error' || TP.phase === 'idle') return;
        e.preventDefault();
        window.tpTap();
    }, { passive: false });
})();

document.addEventListener('keydown', function (e) {
    if (!TP.on) return;
    if (e.key === 'Escape') {
        if (tpEl('tpExitModal').style.display === 'flex') window.tpCancelExit();
        else window.tpRequestExit();
        return;
    }
    if (e.key === ' ' || e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (TP.phase === 'ready') window.tpStart();
        else window.tpTap();
    }
});
