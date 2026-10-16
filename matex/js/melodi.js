// melodi
const MD = {
    on: false, paused: false, muted: false,
    level: 1, maxLevel: 20, round: 1,
    score: 0, best: 0, exacts: 0, scored: false,
    seq: [], mine: [], phase: 'idle',
    gap: 560, noteMs: 320, playToken: 0,
    timers: [], vt: [], lastPct: 0, lastPts: 0
};
try { MD.best = parseInt(localStorage.getItem('melodi_best') || '0') || 0; } catch (e) { MD.best = 0; }

const MD_PADS = [
    { name: 'DO', f: 261.63, color: '#ef4444', wave: 'sine' },
    { name: 'RE', f: 293.66, color: '#f59e0b', wave: 'sine' },
    { name: 'Mİ', f: 329.63, color: '#22c55e', wave: 'triangle' },
    { name: 'FA', f: 392.00, color: '#06b6d4', wave: 'triangle' },
    { name: 'SOL', f: 440.00, color: '#818cf8', wave: 'triangle' },
    { name: 'LA', f: 523.25, color: '#e879f9', wave: 'sine' }
];

const MD_BUCKETS = [[100, 500], [90, 400], [80, 300], [70, 200], [60, 100], [50, 50]];

const mdEl = s => document.getElementById(s);
const mdClamp = (v, a, b) => Math.min(b, Math.max(a, v));

function mdLevelConfig(lvl) {
    const notes = Math.min(14, 2 + lvl);
    const gap = Math.max(280, 560 - (lvl - 1) * 15);
    const noteMs = Math.max(170, 320 - (lvl - 1) * 8);
    return { notes: notes, gap: gap, noteMs: noteMs };
}

function mdSimilarity(target, mine) {
    const n = target.length, m = mine.length;
    if (!n || !m) return 0;
    const dp = [];
    for (let i = 0; i <= n; i++) dp.push(new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = (target[i - 1] === mine[j - 1])
                ? dp[i - 1][j - 1] + 1
                : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    const matched = dp[n][m];
    return Math.round(100 * matched / Math.max(n, m));
}
function mdPoints(pct) {
    for (let i = 0; i < MD_BUCKETS.length; i++) {
        if (pct >= MD_BUCKETS[i][0]) return MD_BUCKETS[i][1];
    }
    return 0;
}

let MD_AC = null;
function mdInitAudio() {
    if (MD.muted) return;
    try {
        MD_AC = MD_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (MD_AC.state === 'suspended') MD_AC.resume();
    } catch (e) { MD_AC = null; }
}
function mdTonePad(padIndex, dur, vol, when) {
    if (!MD_AC || MD.muted) return;
    const pad = MD_PADS[padIndex];
    if (!pad) return;
    try {
        const t0 = MD_AC.currentTime + (when || 0);
        const d = dur || 0.3, v = vol || 0.18;
        const o = MD_AC.createOscillator(), g = MD_AC.createGain();
        o.type = pad.wave; o.frequency.setValueAtTime(pad.f, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(v, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
        o.connect(g); g.connect(MD_AC.destination);
        o.start(t0); o.stop(t0 + d + 0.05);

        const o2 = MD_AC.createOscillator(), g2 = MD_AC.createGain();
        o2.type = 'sine'; o2.frequency.setValueAtTime(pad.f * 2, t0);
        g2.gain.setValueAtTime(0.0001, t0);
        g2.gain.exponentialRampToValueAtTime(v * 0.2, t0 + 0.02);
        g2.gain.exponentialRampToValueAtTime(0.0001, t0 + d * 0.8);
        o2.connect(g2); g2.connect(MD_AC.destination);
        o2.start(t0); o2.stop(t0 + d + 0.05);
    } catch (e) { }
}
function mdBeep(freq, dur, type, vol) {
    if (!MD_AC || MD.muted) return;
    try {
        const t0 = MD_AC.currentTime;
        const o = MD_AC.createOscillator(), g = MD_AC.createGain();
        o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.1, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(MD_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const MD_SFX = {
    exact() { mdBeep(659, .12, 'sine', .12); mdBeep(880, .12, 'sine', .12); mdBeep(1047, .22, 'sine', .13); },
    good() { mdBeep(660, .1, 'sine', .11); mdBeep(880, .14, 'sine', .11); },
    miss() { mdBeep(220, .22, 'sawtooth', .1); mdBeep(160, .28, 'sawtooth', .09); },
    levelUp() { mdBeep(523, .12, 'sine', .12); mdBeep(659, .12, 'sine', .12); mdBeep(784, .12, 'sine', .12); mdBeep(1047, .26, 'sine', .14); },
    over() { mdBeep(392, .18, 'sawtooth', .08); mdBeep(294, .18, 'sawtooth', .08); mdBeep(196, .35, 'sawtooth', .09); },
    click() { mdBeep(700, .05, 'square', .06); },
    start() { mdBeep(520, .1, 'sine', .09); }
};
window.mdToggleMute = function () {
    MD.muted = !MD.muted;
    mdEl('mdMuteBtn').textContent = MD.muted ? '🔇' : '🔊';
    if (!MD.muted) mdInitAudio();
};

function mdClearTimers() { MD.timers.forEach(id => clearTimeout(id)); MD.timers = []; }
function mdLater(fn, ms) { const id = setTimeout(fn, ms); MD.timers.push(id); return id; }
function mdClearVisuals() { MD.vt.forEach(id => clearTimeout(id)); MD.vt = []; }
function mdFlash(i, cls, ms) {
    const el = mdEl('mdPad' + i);
    if (!el) return;
    el.classList.add(cls);
    MD.vt.push(setTimeout(() => el.classList.remove(cls), ms || 260));
}
function mdClearPads() {
    mdClearVisuals();
    MD_PADS.forEach((p, i) => { const el = mdEl('mdPad' + i); if (el) el.className = 'md-pad'; });
}

function mdBuildPads() {
    const wrap = mdEl('mdPads');
    if (!wrap) return;
    let html = '';
    MD_PADS.forEach((p, i) => {
        html += '<button class="md-pad" id="mdPad' + i + '" style="--c:' + p.color + '" onclick="mdTap(' + i + ')">' +
            '<span class="md-doticon"></span><span class="md-keynum">' + (i + 1) + '</span></button>';
    });
    wrap.innerHTML = html;
}
function mdSetPadsActive(on) { MD_PADS.forEach((p, i) => { const el = mdEl('mdPad' + i); if (el) el.disabled = !on; }); }
function mdSetStatus(title, sub, cls) {
    mdEl('mdStatusTitle').textContent = title;
    mdEl('mdStatusTitle').className = 'md-status-title' + (cls ? ' ' + cls : '');
    mdEl('mdStatusSub').textContent = sub || '';
}
function mdEq(on) { mdEl('mdEq').classList[on ? 'add' : 'remove']('on'); }
function mdRenderDots() {
    let html = '';
    for (let i = 1; i <= MD.maxLevel; i++) {
        const cls = i < MD.level ? 'md-dot done' : (i === MD.level ? 'md-dot cur' : 'md-dot');
        html += '<div class="' + cls + '"></div>';
    }
    mdEl('mdDots').innerHTML = html;
}
function mdUpdateHUD() {
    const cfg = mdLevelConfig(MD.level);
    mdEl('mdLevelPill').textContent = 'SEVİYE ' + Math.min(MD.level, MD.maxLevel);
    mdEl('mdNotesPill').textContent = '🎵 ' + Math.min(cfg.notes, MD.seq.length || cfg.notes) + ' NOTA';
    mdEl('mdScorePill').textContent = '⭐ ' + MD.score;
    mdEl('mdMuteBtn').textContent = MD.muted ? '🔇' : '🔊';
    mdEl('mdMineCount').textContent = MD.mine.length + ' / ' + (MD.seq.length || cfg.notes) + ' nota';
    mdEl('mdOkBtn').disabled = !(MD.on && MD.phase === 'build' && MD.mine.length > 0 && !MD.paused);
    mdEl('mdUndoBtn').disabled = !(MD.on && MD.phase === 'build' && MD.mine.length > 0);
    mdEl('mdClearBtn').disabled = !(MD.on && MD.phase === 'build' && MD.mine.length > 0);
    if (mdEl('mdDots').innerHTML === '') mdRenderDots();
}
function mdRenderMine() {
    const box = mdEl('mdMine');
    if (!MD.mine.length) {
        box.innerHTML = '<span class="md-empty">Pad\'lere basarak duyduğun sesi oluştur...</span>';
        return;
    }
    box.innerHTML = MD.mine.map(function (i) {
        return '<span class="md-chip" style="--c:' + MD_PADS[i].color + '">' + MD_PADS[i].name + '</span>';
    }).join('');
}

window.startMelodiFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    mdEl('mdGameScreen').style.display = 'block';
    mdBuildPads();
    mdStartGame();
};
window.mdGoCategories = function () {
    mdStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    try {
        if (typeof goToCategorySelect === 'function') { goToCategorySelect(); return; }
    } catch (e) { }
    mdEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.mdBackToMode = function () {
    mdStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    mdEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.mdGoProfile = function () {
    mdFinishSession();
    mdStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    mdEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
window.mdGoModes = function () {
    mdFinishSession();
    mdStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    mdEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
function mdStopAll() {
    MD.on = false; MD.paused = false; MD.phase = 'idle';
    MD.playToken++;
    mdClearTimers(); mdClearPads(); mdEq(false);
    mdEl('mdExitModal').style.display = 'none';
    mdEl('mdResOv').classList.remove('show');
    mdEl('mdGoOv').classList.remove('show');
}
window.mdRequestExit = function () {
    MD.paused = true;
    if (mdEl('mdExitInfo')) {
        mdEl('mdExitInfo').textContent = 'Puanın: ' + MD.score +
            ' | Çıkarsan puanların rütbene işlenir ve kategorilere dönersin.';
    }
    mdEl('mdExitModal').style.display = 'flex';
};
window.mdCancelExit = function () { mdEl('mdExitModal').style.display = 'none'; MD.paused = false; mdUpdateHUD(); };
window.mdConfirmExit = function () { mdEl('mdExitModal').style.display = 'none'; mdFinishSession(); };

function mdFinishSession() {
    const isRecord = MD.score > MD.best && MD.score > 0;
    if (isRecord) {
        MD.best = MD.score;
        try { localStorage.setItem('melodi_best', String(MD.best)); } catch (e) { }
    }
    if (!MD.scored && MD.score > 0) {
        MD.scored = true;
        try { if (typeof addPoints === 'function') addPoints(MD.score); } catch (e) { }
    }
    mdGoCategories();
}
window.mdFinishSession = mdFinishSession;

function mdStartGame() {
    mdInitAudio();
    MD.playToken++;
    mdClearTimers(); mdClearPads();
    MD.on = true; MD.paused = false;
    MD.level = 1; MD.round = 1; MD.score = 0; MD.exacts = 0; MD.mine = []; MD.scored = false;
    MD.best = parseInt(localStorage.getItem('melodi_best') || '0') || 0;
    mdEl('mdResOv').classList.remove('show');
    mdEl('mdGoOv').classList.remove('show');
    mdRenderDots();
    mdRenderMine();
    mdUpdateHUD();
    mdStartRound();
}
window.mdStartGame = mdStartGame;
window.mdRestartGame = function () { mdStartGame(); };

function mdStartRound() {
    mdClearTimers(); mdClearPads();
    const cfg = mdLevelConfig(MD.level);
    MD.gap = cfg.gap; MD.noteMs = cfg.noteMs;
    MD.mine = [];
    MD.phase = 'listen';
    MD.seq = [];
    for (let i = 0; i < cfg.notes; i++) {
        let n = Math.floor(Math.random() * MD_PADS.length);
        if (i > 0 && n === MD.seq[i - 1]) n = (n + 1 + Math.floor(Math.random() * (MD_PADS.length - 1))) % MD_PADS.length;
        MD.seq.push(n);
    }
    mdRenderMine();
    mdUpdateHUD();
    mdPlaySequence(MD.seq, function () { mdBeginBuild(); });
}
window.mdStartRound = mdStartRound;

function mdPlaySequence(seq, done) {
    const token = ++MD.playToken;
    mdClearTimers(); mdClearPads();
    mdSetPadsActive(false);
    mdEq(true);
    MD_SFX.start();
    seq.forEach(function (padIndex, i) {
        mdLater(function () {
            if (!MD.on || token !== MD.playToken) return;
            mdTonePad(padIndex, MD.noteMs / 1000, 0.19);
        }, i * MD.gap);
    });
    mdLater(function () {
        if (!MD.on || token !== MD.playToken) return;
        mdEq(false);
        if (done) done();
    }, seq.length * MD.gap + 140);
}

function mdBeginBuild() {
    if (!MD.on || MD.paused) return;
    MD.phase = 'build';
    mdSetPadsActive(true);
    mdSetStatus('👆 SIRA SENDE', 'Duyduğun sesi pad\'lere basarak oluştur. Notalar gizli, kulağınla bul!', 'md-build');
    mdUpdateHUD();
}
window.mdBeginBuild = mdBeginBuild;

window.mdTap = function (i) {
    if (!MD.on || MD.paused) return;
    if (MD.phase !== 'build') return;
    mdInitAudio();
    mdFlash(i, 'md-on', 200);
    mdTonePad(i, 0.26, 0.19);
    MD.mine.push(i);
    mdRenderMine();
    mdUpdateHUD();
};
window.mdUndo = function () {
    if (!MD.on || MD.paused || MD.phase !== 'build' || !MD.mine.length) return;
    MD_SFX.click();
    MD.mine.pop();
    mdRenderMine();
    mdUpdateHUD();
};
window.mdClear = function () {
    if (!MD.on || MD.paused || MD.phase !== 'build' || !MD.mine.length) return;
    MD_SFX.click();
    MD.mine = [];
    mdRenderMine();
    mdUpdateHUD();
};

window.mdSubmit = function () {
    if (!MD.on || MD.paused) return;
    if (MD.phase !== 'build' || !MD.mine.length) return;
    MD.phase = 'result';
    MD.playToken++;
    mdSetPadsActive(false);
    mdEq(false);

    const pct = mdSimilarity(MD.seq, MD.mine);
    const pts = mdPoints(pct);
    MD.lastPct = pct; MD.lastPts = pts;
    MD.score += pts;

    const exact = pct >= 100;
    if (exact) MD.exacts++;
    const isRecord = MD.score > MD.best && MD.score > 0;
    if (isRecord) {
        MD.best = MD.score;
        try { localStorage.setItem('melodi_best', String(MD.best)); } catch (e) { }
    }

    const chip = (i, cls) => '<span class="md-chip ' + (cls || '') + '" style="--c:' + MD_PADS[i].color + '">' + MD_PADS[i].name + '</span>';
    mdEl('mdCmpTarget').innerHTML = MD.seq.map(i => chip(i, 'small')).join('');
    mdEl('mdCmpMine').innerHTML = MD.mine.length
        ? MD.mine.map(i => chip(i, 'small')).join('')
        : '<span class="md-empty">Boş</span>';
    const matched = Math.round(pct / 100 * Math.max(MD.seq.length, MD.mine.length));
    mdEl('mdCmpTargetInfo').textContent = MD.seq.length + ' nota';
    mdEl('mdCmpMineInfo').textContent = MD.mine.length + ' nota | ' + matched + ' tuttu';

    mdEl('mdPctValue').textContent = '%' + pct;
    mdEl('mdPctFill').style.width = pct + '%';
    mdEl('mdPctFill').style.background = exact
        ? 'linear-gradient(90deg,#22c55e,#06b6d4)'
        : pct >= 90 ? 'linear-gradient(90deg,#f59e0b,#eab308)'
            : pct >= 70 ? 'linear-gradient(90deg,#ef4444,#f59e0b)'
                : 'linear-gradient(90deg,#7f1d1d,#ef4444)';

    if (exact) {
        mdEl('mdResEmoji').textContent = '🎯';
        mdEl('mdResTitle').textContent = 'BİREBİR!';
        mdEl('mdResSub').textContent = 'Sesi birebir tutturdun, 500 puan! Kulakların efsane.';
    } else if (pct >= 90) {
        mdEl('mdResEmoji').textContent = '🔥';
        mdEl('mdResTitle').textContent = '%' + pct + ' YAKLAŞTIN';
        mdEl('mdResSub').textContent = 'Çok yaklaştın! Ama tam eşleşme değil, 500 puan sadece birebirde.';
    } else if (pct >= 70) {
        mdEl('mdResEmoji').textContent = '🙂';
        mdEl('mdResTitle').textContent = '%' + pct + ' YAKLAŞTIN';
        mdEl('mdResSub').textContent = 'Melodiyi andırıyor ama notaların bir kısmı kaymış. Seviye tekrar ediyor.';
    } else if (pct >= 50) {
        mdEl('mdResEmoji').textContent = '😬';
        mdEl('mdResTitle').textContent = '%' + pct + ' YAKLAŞTIN';
        mdEl('mdResSub').textContent = 'Az bir yakınlık, en düşük puan dilimi.';
    } else {
        mdEl('mdResEmoji').textContent = '💤';
        mdEl('mdResTitle').textContent = '%' + pct + ' YAKLAŞTIN';
        mdEl('mdResSub').textContent = '%50 altı: puan yok. Seviye tekrar ediyor.';
    }

    mdEl('mdBigPoints').textContent = '+' + pts;
    mdEl('mdBigPoints').className = 'md-big-points' + (pts === 0 ? ' zero' : '');
    mdEl('mdTable').innerHTML = MD_BUCKETS.map(function (b) {
        const hit = pts === b[1] && ((b[0] === 100 && exact) || (!exact && pct >= b[0]));
        return '<span class="' + (hit ? 'hit' : '') + '">%' + b[0] + ' → ' + b[1] + 'p</span>';
    }).join('');

    mdEl('mdStLevel').textContent = Math.min(MD.level, MD.maxLevel);
    mdEl('mdStScore').textContent = MD.score;
    mdEl('mdStBest').textContent = MD.best;
    mdEl('mdRecordBadge').style.display = isRecord ? 'block' : 'none';
    mdEl('mdNextBtn').textContent = exact ? '➡️ Devam Et' : '🔁 Aynı Seviye - Tekrar Dene';

    if (exact) MD.level++;
    mdUpdateHUD();
    mdEl('mdResOv').classList.add('show');
    exact ? MD_SFX.exact() : (pct >= 60 ? MD_SFX.good() : MD_SFX.miss());
    if (exact && MD.level > MD.maxLevel) mdLater(function () { MD_SFX.levelUp(); }, 500);
};

window.mdPlayTarget = function () {
    mdInitAudio();
    mdPlaySequence(MD.seq, function () { mdSetStatus('🎯 Hedef ses çalındı', 'Şimdi kendi sesini dinleyip karşılaştır.', ''); });
};
window.mdPlayMine = function () {
    if (!MD.mine.length) return;
    mdInitAudio();
    mdPlaySequence(MD.mine, function () { mdSetStatus('🧑 Senin sesin çalındı', 'İki sesi tekrar tekrar karşılaştırabilirsin.', ''); });
};

window.mdNextRound = function () {
    mdEl('mdResOv').classList.remove('show');
    if (!MD.on) return;
    if (MD.level > MD.maxLevel) { mdShowGameOver(true); return; }
    MD.round++;
    mdStartRound();
};

function mdShowGameOver(allClear) {
    const isRecord = MD.score > MD.best && MD.score > 0;
    if (isRecord) {
        MD.best = MD.score;
        try { localStorage.setItem('melodi_best', String(MD.best)); } catch (e) { }
    }
    try { if (MD.score > 0 && typeof addPoints === 'function') addPoints(MD.score); } catch (e) { }
    MD.scored = true;
    MD_SFX.over();
    mdEl('mdGoEmoji').textContent = allClear ? '👑' : '🏁';
    mdEl('mdGoTitle').textContent = allClear ? 'MÜKEMMEL!' : 'Oyun Bitti!';
    mdEl('mdGoSub').textContent = allClear
        ? 'Tüm ' + MD.maxLevel + ' seviyeyi birebir tutturdun! Kulakların efsane.'
        : 'Birebir tutturulan seviye: ' + MD.exacts;
    mdEl('mdGoLevel').textContent = Math.min(MD.level, MD.maxLevel);
    mdEl('mdGoScore').textContent = MD.score;
    mdEl('mdGoBest').textContent = MD.best;
    mdEl('mdGoRecord').style.display = isRecord ? 'block' : 'none';
    mdEl('mdGoOv').classList.add('show');
    MD.playToken++;
    mdClearTimers();
    MD.on = false;
}
window.mdShowGameOver = mdShowGameOver;

document.addEventListener('keydown', function (e) {
    if (!MD.on) return;
    if (e.key === 'Escape') {
        if (mdEl('mdExitModal').style.display === 'flex') window.mdCancelExit();
        else window.mdRequestExit();
        return;
    }
    if (e.key === 'Backspace') { e.preventDefault(); window.mdUndo(); return; }
    if (e.key === 'Enter') { e.preventDefault(); if (mdEl('mdOkBtn').disabled === false) window.mdSubmit(); return; }
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= MD_PADS.length) { e.preventDefault(); window.mdTap(n - 1); }
});
