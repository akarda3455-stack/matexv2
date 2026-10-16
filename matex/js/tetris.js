// tetris
(function () {
    'use strict';
    const ttEl = function (id) { return document.getElementById(id); };

    const TT_COLS = 10, TT_ROWS = 20;
    const TT_TYPES = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    const TT_SHAPES = {
        I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        O: [[1, 1], [1, 1]],
        T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
        S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
        Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
        J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
        L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]]
    };
    const TT_COLORS = {
        I: '#22d3ee', O: '#facc15', T: '#c084fc',
        S: '#4ade80', Z: '#f87171', J: '#60a5fa', L: '#fb923c'
    };
    const TT_LINE_SCORE = [0, 100, 300, 500, 800];
    const TT_LINE_NAMES = ['', 'TEK!', 'ÇİFT!', 'ÜÇLÜ!', 'TETRİS!'];

    const TT = {
        on: false, paused: false, over: false, started: false,
        grid: [], cur: null, queue: [], bag: [],
        score: 0, lines: 0, level: 1, best: 0,
        dropAcc: 0, dropInt: 1000, lastTs: 0, raf: null,
        clearing: [], clearTimer: 0,
        muted: false, ctx: null, nctx: null,
        block: 28, ox: 0, oy: 0,
        cdTimer: null, toastTimer: null, scored: false,
        pieces: 0, tetrises: 0
    };
    try { TT.best = parseInt(localStorage.getItem('tetris_best') || '0', 10) || 0; } catch (e) { TT.best = 0; }

    function ttTone(freq, dur, type, gain, delay) {
        if (TT.muted) return;
        try {
            if (!TT.ctx2) {
                const AC = window.AudioContext || window.webkitAudioContext;
                if (!AC) return;
                TT.ctx2 = new AC();
            }
            if (TT.ctx2.state === 'suspended') TT.ctx2.resume();
            const o = TT.ctx2.createOscillator(), g = TT.ctx2.createGain();
            o.type = type || 'square';
            o.frequency.value = freq;
            const t0 = TT.ctx2.currentTime + (delay || 0);
            g.gain.setValueAtTime(0.0001, t0);
            g.gain.exponentialRampToValueAtTime(gain || 0.07, t0 + 0.01);
            g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
            o.connect(g); g.connect(TT.ctx2.destination);
            o.start(t0); o.stop(t0 + dur + 0.03);
        } catch (e) { }
    }
    const TT_SFX = {
        move: function () { ttTone(240, 0.04, 'square', 0.05); },
        rotate: function () { ttTone(420, 0.05, 'square', 0.06); },
        lock: function () { ttTone(150, 0.07, 'triangle', 0.08); },
        drop: function () { ttTone(120, 0.1, 'sawtooth', 0.09); },
        clear: function (n) {
            const base = n >= 4 ? 523.25 : 392;
            for (let i = 0; i < n + 1; i++) ttTone(base * (1 + i * 0.25), 0.1, 'triangle', 0.1, i * 0.06);
        },
        levelUp: function () {
            [523.25, 659.25, 783.99].forEach(function (f, i) { ttTone(f, 0.12, 'triangle', 0.1, i * 0.08); });
        },
        over: function () {
            [392, 311.13, 261.63, 196].forEach(function (f, i) { ttTone(f, 0.25, 'sawtooth', 0.1, i * 0.14); });
        },
        tick: function () { ttTone(700, 0.05, 'sine', 0.06); }
    };
    window.ttToggleMute = function () {
        TT.muted = !TT.muted;
        const b = ttEl('ttMuteBtn');
        if (b) b.textContent = TT.muted ? '🔇' : '🔊';
        if (!TT.muted) TT_SFX.rotate();
    };

    function ttEmptyGrid() {
        const g = [];
        for (let r = 0; r < TT_ROWS; r++) g.push(new Array(TT_COLS).fill(null));
        return g;
    }
    function ttRotCW(m) {
        const n = m.length, out = [];
        for (let c = 0; c < n; c++) {
            const row = [];
            for (let r = n - 1; r >= 0; r--) row.push(m[r][c]);
            out.push(row);
        }
        return out;
    }
    function ttRotCCW(m) {
        const n = m.length, out = [];
        for (let c = n - 1; c >= 0; c--) {
            const row = [];
            for (let r = 0; r < n; r++) row.push(m[r][c]);
            out.push(row);
        }
        return out;
    }
    function ttCollide(m, x, y, grid) {
        const g = grid || TT.grid;
        for (let r = 0; r < m.length; r++) {
            for (let c = 0; c < m[r].length; c++) {
                if (!m[r][c]) continue;
                const nx = x + c, ny = y + r;
                if (nx < 0 || nx >= TT_COLS || ny >= TT_ROWS) return true;
                if (ny >= 0 && g[ny][nx]) return true;
            }
        }
        return false;
    }
    function ttFullRows(grid) {
        const g = grid || TT.grid, rows = [];
        for (let r = 0; r < TT_ROWS; r++) {
            let full = true;
            for (let c = 0; c < TT_COLS; c++) if (!g[r][c]) { full = false; break; }
            if (full) rows.push(r);
        }
        return rows;
    }
    function ttRemoveRows(rows, grid) {
        const g = grid || TT.grid;
        rows.slice().sort(function (a, b) { return a - b; }).forEach(function (r) {
            g.splice(r, 1);
            g.unshift(new Array(TT_COLS).fill(null));
        });
        return rows.length;
    }
    function ttScoreForLines(n, level) { return (TT_LINE_SCORE[n] || 0) * level; }
    function ttDropInterval(level) { return Math.max(70, Math.round(1000 * Math.pow(0.85, level - 1))); }

    // 7'li torba
    function ttBagRefill() {
        const b = TT_TYPES.slice();
        for (let i = b.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const t = b[i]; b[i] = b[j]; b[j] = t;
        }
        TT.bag = b;
    }
    function ttNextType() {
        if (!TT.bag.length) ttBagRefill();
        return TT.bag.pop();
    }
    function ttFillQueue() {
        while (TT.queue.length < 4) TT.queue.push(ttNextType());
    }

    function ttSpawn() {
        ttFillQueue();
        const type = TT.queue.shift();
        ttFillQueue();
        const m = TT_SHAPES[type].map(function (r) { return r.slice(); });
        const x = Math.floor((TT_COLS - m[0].length) / 2);
        const y = type === 'I' ? -1 : 0;
        TT.cur = { type: type, m: m, x: x, y: y };
        TT.pieces++;
        if (ttCollide(m, x, y)) { ttGameOver(); return false; }
        ttDrawNext();
        return true;
    }
    function ttMove(dx) {
        if (!TT.on || !TT.started || TT.paused || TT.over || !TT.cur || TT.clearing.length) return false;
        if (ttCollide(TT.cur.m, TT.cur.x + dx, TT.cur.y)) return false;
        TT.cur.x += dx;
        TT_SFX.move();
        return true;
    }
    function ttRotate(dir) {
        if (!TT.on || !TT.started || TT.paused || TT.over || !TT.cur || TT.clearing.length) return false;
        const rotated = dir < 0 ? ttRotCCW(TT.cur.m) : ttRotCW(TT.cur.m);
        // wall kick
        const kicks = [[0, 0], [-1, 0], [1, 0], [-2, 0], [2, 0], [0, -1], [-1, -1], [1, -1]];
        for (let i = 0; i < kicks.length; i++) {
            const nx = TT.cur.x + kicks[i][0], ny = TT.cur.y + kicks[i][1];
            if (!ttCollide(rotated, nx, ny)) {
                TT.cur.m = rotated; TT.cur.x = nx; TT.cur.y = ny;
                TT_SFX.rotate();
                return true;
            }
        }
        return false;
    }
    function ttSoftDrop() {
        if (!TT.on || !TT.started || TT.paused || TT.over || !TT.cur || TT.clearing.length) return false;
        if (ttCollide(TT.cur.m, TT.cur.x, TT.cur.y + 1)) { ttLock(); return true; }
        TT.cur.y++;
        TT.score += 1;
        TT.dropAcc = 0;
        ttUpdateUI();
        return true;
    }
    function ttHardDrop() {
        if (!TT.on || !TT.started || TT.paused || TT.over || !TT.cur || TT.clearing.length) return false;
        let d = 0;
        while (!ttCollide(TT.cur.m, TT.cur.x, TT.cur.y + 1)) { TT.cur.y++; d++; }
        TT.score += d * 2;
        TT_SFX.drop();
        ttLock();
        return true;
    }
    function ttGhostY() {
        if (!TT.cur) return 0;
        let y = TT.cur.y;
        while (!ttCollide(TT.cur.m, TT.cur.x, y + 1)) y++;
        return y;
    }

    function ttLock() {
        if (!TT.cur) return;
        const m = TT.cur.m, type = TT.cur.type;
        for (let r = 0; r < m.length; r++) {
            for (let c = 0; c < m[r].length; c++) {
                if (!m[r][c]) continue;
                const ny = TT.cur.y + r, nx = TT.cur.x + c;
                if (ny >= 0 && ny < TT_ROWS && nx >= 0 && nx < TT_COLS) TT.grid[ny][nx] = type;
            }
        }
        TT.cur = null;
        TT_SFX.lock();

        const rows = ttFullRows();
        if (rows.length) {
            TT.clearing = rows;
            TT.clearTimer = 200;
            TT_SFX.clear(rows.length);
            if (rows.length === 4) TT.tetrises++;
            ttShowToast(TT_LINE_NAMES[rows.length] || (rows.length + ' SATIR!'));
        } else {
            ttAfterLock();
        }
    }
    function ttFinishClear() {
        const n = ttRemoveRows(TT.clearing);
        TT.clearing = [];
        TT.clearTimer = 0;
        TT.lines += n;
        TT.score += ttScoreForLines(n, TT.level);
        const newLevel = Math.floor(TT.lines / 10) + 1;
        if (newLevel > TT.level) {
            TT.level = newLevel;
            TT.dropInt = ttDropInterval(TT.level);
            TT_SFX.levelUp();
            ttShowToast('SEVİYE ' + TT.level);
        }
        ttUpdateUI();
        ttAfterLock();
    }
    function ttAfterLock() {
        if (!TT.on || TT.over) return;
        ttSpawn();
    }

    function ttLoop(ts) {
        if (!TT.on) return;
        if (!TT.lastTs) TT.lastTs = ts;
        const dt = Math.min(100, ts - TT.lastTs);
        TT.lastTs = ts;

        if (TT.started && !TT.paused && !TT.over) {
            if (TT.clearing.length) {
                TT.clearTimer -= dt;
                if (TT.clearTimer <= 0) ttFinishClear();
            } else if (TT.cur) {
                TT.dropAcc += dt;
                if (TT.dropAcc >= TT.dropInt) {
                    TT.dropAcc = 0;
                    if (!ttCollide(TT.cur.m, TT.cur.x, TT.cur.y + 1)) TT.cur.y++;
                    else ttLock();
                }
            }
        }
        ttDraw();
        TT.raf = requestAnimationFrame(ttLoop);
    }

    function ttResizeCanvas() {
        const cv = ttEl('ttCanvas');
        if (!cv) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = cv.clientWidth || 280, h = cv.clientHeight || 560;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        try { TT.ctx = cv.getContext('2d'); } catch (e) { TT.ctx = null; }
        if (TT.ctx) TT.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        TT.block = Math.min(w / TT_COLS, h / TT_ROWS);
        TT.ox = (w - TT.block * TT_COLS) / 2;
        TT.oy = (h - TT.block * TT_ROWS) / 2;

        const nv = ttEl('ttNext');
        if (nv) {
            const nw = nv.clientWidth || 108, nh = nv.clientHeight || 216;
            nv.width = Math.round(nw * dpr);
            nv.height = Math.round(nh * dpr);
            try { TT.nctx = nv.getContext('2d'); } catch (e) { TT.nctx = null; }
            if (TT.nctx) TT.nctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
    }
    function ttCell(ctx, px, py, size, color, ghost) {
        if (ghost) {
            ctx.strokeStyle = color;
            ctx.globalAlpha = 0.35;
            ctx.lineWidth = 2;
            ctx.strokeRect(px + 2, py + 2, size - 4, size - 4);
            ctx.globalAlpha = 1;
            return;
        }
        ctx.fillStyle = color;
        ctx.fillRect(px + 1, py + 1, size - 2, size - 2);
        ctx.fillStyle = 'rgba(255,255,255,0.28)';
        ctx.fillRect(px + 1, py + 1, size - 2, Math.max(2, size * 0.18));
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.fillRect(px + 1, py + size - Math.max(2, size * 0.18), size - 2, Math.max(2, size * 0.18));
    }
    function ttDraw() {
        const ctx = TT.ctx;
        if (!ctx) return;
        const cv = ttEl('ttCanvas');
        const w = cv.clientWidth || 280, h = cv.clientHeight || 560;
        ctx.clearRect(0, 0, w, h);
        const b = TT.block;

        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        for (let r = 0; r <= TT_ROWS; r++) {
            ctx.beginPath();
            ctx.moveTo(TT.ox, TT.oy + r * b);
            ctx.lineTo(TT.ox + TT_COLS * b, TT.oy + r * b);
            ctx.stroke();
        }
        for (let c = 0; c <= TT_COLS; c++) {
            ctx.beginPath();
            ctx.moveTo(TT.ox + c * b, TT.oy);
            ctx.lineTo(TT.ox + c * b, TT.oy + TT_ROWS * b);
            ctx.stroke();
        }

        for (let r = 0; r < TT_ROWS; r++) {
            const isClearing = TT.clearing.indexOf(r) !== -1;
            for (let c = 0; c < TT_COLS; c++) {
                const t = TT.grid[r][c];
                if (!t) continue;
                if (isClearing) {
                    ctx.fillStyle = '#ffffff';
                    ctx.globalAlpha = 0.85;
                    ctx.fillRect(TT.ox + c * b + 1, TT.oy + r * b + 1, b - 2, b - 2);
                    ctx.globalAlpha = 1;
                } else {
                    ttCell(ctx, TT.ox + c * b, TT.oy + r * b, b, TT_COLORS[t], false);
                }
            }
        }

        if (TT.cur && !TT.over) {
            const gy = ttGhostY();
            const m = TT.cur.m;
            for (let r = 0; r < m.length; r++) {
                for (let c = 0; c < m[r].length; c++) {
                    if (!m[r][c]) continue;
                    const py = gy + r;
                    if (py >= 0) ttCell(ctx, TT.ox + (TT.cur.x + c) * b, TT.oy + py * b, b, TT_COLORS[TT.cur.type], true);
                }
            }
            for (let r = 0; r < m.length; r++) {
                for (let c = 0; c < m[r].length; c++) {
                    if (!m[r][c]) continue;
                    const py = TT.cur.y + r;
                    if (py >= 0) ttCell(ctx, TT.ox + (TT.cur.x + c) * b, TT.oy + py * b, b, TT_COLORS[TT.cur.type], false);
                }
            }
        }
    }
    function ttDrawNext() {
        const ctx = TT.nctx;
        if (!ctx) return;
        const nv = ttEl('ttNext');
        const w = nv.clientWidth || 108, h = nv.clientHeight || 216;
        ctx.clearRect(0, 0, w, h);
        const slot = h / 3;
        const b = Math.min(slot / 5, w / 6);
        for (let i = 0; i < 3; i++) {
            const type = TT.queue[i];
            if (!type) continue;
            const m = TT_SHAPES[type];
            const mw = m[0].length * b, mh = m.length * b;
            const ox = (w - mw) / 2, oy = slot * i + (slot - mh) / 2;
            for (let r = 0; r < m.length; r++) {
                for (let c = 0; c < m[r].length; c++) {
                    if (m[r][c]) ttCell(ctx, ox + c * b, oy + r * b, b, TT_COLORS[type], false);
                }
            }
        }
    }
    function ttShowToast(txt) {
        const el = ttEl('ttToast');
        if (!el) return;
        el.textContent = txt;
        el.classList.add('show');
        clearTimeout(TT.toastTimer);
        TT.toastTimer = setTimeout(function () { el.classList.remove('show'); }, 900);
    }

    function ttUpdateUI() {
        const lv = ttEl('ttLevel'); if (lv) lv.textContent = 'SEVİYE ' + TT.level;
        const sc = ttEl('ttScore'); if (sc) sc.textContent = '⭐ ' + TT.score;
        const ln = ttEl('ttLines'); if (ln) ln.textContent = '📏 ' + TT.lines + ' SATIR';
        const bs = ttEl('ttBest'); if (bs) bs.textContent = '🏆 ' + TT.best;
        const bv = ttEl('ttBestVal'); if (bv) bv.textContent = TT.best;
    }

    window.startTetrisFromMode = function () {
        try { isInTest = true; stopBgMusic(); } catch (e) { }
        hideAllMainScreens();
        ttEl('tetrisGameScreen').style.display = 'block';
        ttResizeCanvas();
        ttReset();
    };
    function ttReset() {
        TT.grid = ttEmptyGrid();
        TT.queue = []; TT.bag = [];
        TT.score = 0; TT.lines = 0; TT.level = 1;
        TT.dropInt = ttDropInterval(1); TT.dropAcc = 0;
        TT.over = false; TT.paused = false; TT.started = false;
        TT.clearing = []; TT.clearTimer = 0;
        TT.pieces = 0; TT.tetrises = 0; TT.scored = false;
        TT.lastTs = 0;
        TT.on = true;
        ttEl('ttGameOverOverlay').classList.remove('show');
        ttEl('ttPauseVeil').style.display = 'none';
        ttUpdateUI();
        ttCountdown();
        cancelAnimationFrame(TT.raf);
        TT.raf = requestAnimationFrame(ttLoop);
    }
    function ttCountdown() {
        const cd = ttEl('ttCountdown');
        let n = 3;
        cd.style.display = 'flex';
        cd.textContent = n;
        ttTone(523.25, 0.1, 'triangle', 0.08);
        clearInterval(TT.cdTimer);
        TT.cdTimer = setInterval(function () {
            n--;
            if (n <= 0) {
                clearInterval(TT.cdTimer);
                cd.style.display = 'none';
                TT.started = true;
                ttSpawn();
                ttTone(880, 0.16, 'triangle', 0.1);
            } else {
                cd.textContent = n;
                ttTone(523.25, 0.1, 'triangle', 0.08);
            }
        }, 650);
    }
    function ttGameOver() {
        if (TT.over) return;
        TT.over = true;
        TT.started = false;
        clearInterval(TT.cdTimer);
        TT_SFX.over();

        const isRecord = TT.score > TT.best;
        if (isRecord) {
            TT.best = TT.score;
            try { localStorage.setItem('tetris_best', String(TT.best)); } catch (e) { }
        }
        if (!TT.scored) {
            TT.scored = true;
            try { if (TT.score > 0 && typeof addPoints === 'function') addPoints(TT.score); } catch (e) { }
        }
        ttUpdateUI();
        ttEl('ttGoEmoji').textContent = TT.lines >= 40 ? '👑' : '🧱';
        ttEl('ttGoTitle').textContent = TT.lines >= 40 ? 'TETRİS USTASI!' : 'Oyun Bitti!';
        ttEl('ttGoSub').textContent = TT.pieces + ' parça yerleştirdin' +
            (TT.tetrises ? ' • ' + TT.tetrises + ' Tetris (4\'lü)' : '') + '.';
        ttEl('ttGoScore').textContent = TT.score;
        ttEl('ttGoLines').textContent = TT.lines;
        ttEl('ttGoLevel').textContent = TT.level;
        ttEl('ttGoRecord').style.display = isRecord ? 'block' : 'none';
        ttEl('ttGameOverOverlay').classList.add('show');
    }
    window.ttRestartGame = function () {
        ttEl('ttGameOverOverlay').classList.remove('show');
        ttReset();
    };
    window.ttTogglePause = function () {
        if (!TT.on || !TT.started || TT.over) return;
        TT.paused = !TT.paused;
        ttEl('ttPauseVeil').style.display = TT.paused ? 'flex' : 'none';
    };

    window.ttRequestExit = function () {
        if (!TT.on) return;
        TT.paused = true;
        ttEl('ttExitInfo').textContent =
            TT.score + ' puan • ' + TT.lines + ' satır, puanın kaydedilecek.';
        ttEl('ttExitModal').style.display = 'flex';
    };
    window.ttCancelExit = function () {
        ttEl('ttExitModal').style.display = 'none';
        TT.paused = false;
        ttEl('ttPauseVeil').style.display = 'none';
    };
    window.ttConfirmExit = function () {
        ttEl('ttExitModal').style.display = 'none';
        if (!TT.scored) {
            TT.scored = true;
            try { if (TT.score > 0 && typeof addPoints === 'function') addPoints(TT.score); } catch (e) { }
            if (TT.score > TT.best) {
                TT.best = TT.score;
                try { localStorage.setItem('tetris_best', String(TT.best)); } catch (e) { }
            }
        }
        ttLeaveTo('modeScreen');
    };
    window.ttBackToMode = function () { ttLeaveTo('modeScreen'); };
    window.ttGoProfile = function () { ttLeaveTo('profileScreen'); };
    function ttLeaveTo(screenId) {
        ttStop();
        try { isInTest = false; if (typeof soundEnabled !== 'undefined' && soundEnabled) startBgMusic(); } catch (e) { }
        hideAllMainScreens();
        const s = ttEl(screenId); if (s) s.style.display = 'block';
        try { changeTheme('space'); } catch (e) { }
    }
    function ttStop() {
        TT.on = false; TT.started = false; TT.paused = false;
        cancelAnimationFrame(TT.raf);
        clearInterval(TT.cdTimer);
        clearTimeout(TT.toastTimer);
        ttEl('ttExitModal').style.display = 'none';
        ttEl('ttGameOverOverlay').classList.remove('show');
    }

    document.addEventListener('keydown', function (e) {
        if (!TT.on) return;
        if (e.key === 'Escape') {
            e.preventDefault();
            if (ttEl('ttExitModal').style.display === 'flex') window.ttCancelExit();
            else window.ttRequestExit();
            return;
        }
        const k = e.key;
        if (k === 'ArrowLeft') { e.preventDefault(); ttMove(-1); }
        else if (k === 'ArrowRight') { e.preventDefault(); ttMove(1); }
        else if (k === 'ArrowDown') { e.preventDefault(); ttSoftDrop(); }
        else if (k === 'ArrowUp' || k === 'x' || k === 'X') { e.preventDefault(); ttRotate(1); }
        else if (k === 'z' || k === 'Z') { e.preventDefault(); ttRotate(-1); }
        else if (k === ' ' || k === 'Spacebar') { e.preventDefault(); ttHardDrop(); }
        else if (k === 'p' || k === 'P') { e.preventDefault(); window.ttTogglePause(); }
        else if (k === 'm' || k === 'M') { e.preventDefault(); window.ttToggleMute(); }
        else if (k === 'r' || k === 'R') { e.preventDefault(); window.ttRestartGame(); }
        else if (k === 'Enter' && ttEl('ttGameOverOverlay').classList.contains('show')) {
            e.preventDefault(); window.ttRestartGame();
        }
    });

    (function bindPad() {
        const repeat = { left: 130, right: 130, down: 70 };
        const btns = document.querySelectorAll('.tt-btn');
        for (let i = 0; i < btns.length; i++) {
            (function (btn) {
                const act = btn.getAttribute('data-act');
                let timer = null;
                function once() {
                    if (act === 'left') ttMove(-1);
                    else if (act === 'right') ttMove(1);
                    else if (act === 'down') ttSoftDrop();
                    else if (act === 'rot') ttRotate(1);
                    else if (act === 'drop') ttHardDrop();
                    else if (act === 'pause') window.ttTogglePause();
                }
                function stop() { clearInterval(timer); timer = null; }
                btn.addEventListener('pointerdown', function (e) {
                    e.preventDefault();
                    once();
                    if (repeat[act]) { stop(); timer = setInterval(once, repeat[act]); }
                });
                ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
                    btn.addEventListener(ev, stop);
                });
            })(btns[i]);
        }
    })();

    window.addEventListener('resize', function () {
        if (TT.on) { ttResizeCanvas(); ttDrawNext(); }
    });
})();
