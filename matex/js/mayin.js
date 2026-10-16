// mayın tarlası
(function () {
    'use strict';
    const myEl = function (id) { return document.getElementById(id); };

    const MY_LEVELS = [
        { rows: 8, cols: 8, mines: 10, time: 120 },
        { rows: 9, cols: 9, mines: 14, time: 135 },
        { rows: 10, cols: 10, mines: 18, time: 150 },
        { rows: 11, cols: 11, mines: 24, time: 170 },
        { rows: 12, cols: 12, mines: 30, time: 190 }
    ];
    const MY_MAX_LEVEL = MY_LEVELS.length;

    const MY = {
        on: false, level: 1, score: 0, best: 0,
        cells: [], rows: 0, cols: 0, mines: 0,
        revealed: 0, safeTotal: 0, flags: 0, combo: 0,
        firstClick: true, dead: false, started: false,
        timeLeft: 0, timeMax: 0, levelStart: 0, levelPts: 0,
        correctFlags: 0, wrongFlags: 0,
        flagMode: false, lpFired: false, lpTimer: null,
        muted: false, ctx: null, raf: null,
        cdTimer: null, scored: false
    };
    try { MY.best = parseInt(localStorage.getItem('mayin_best') || '0', 10) || 0; } catch (e) { MY.best = 0; }

    function myTone(freq, dur, type, gain, delay) {
        if (MY.muted) return;
        try {
            if (!MY.ctx) {
                const AC = window.AudioContext || window.webkitAudioContext;
                if (!AC) return;
                MY.ctx = new AC();
            }
            if (MY.ctx.state === 'suspended') MY.ctx.resume();
            const o = MY.ctx.createOscillator();
            const g = MY.ctx.createGain();
            o.type = type || 'sine';
            o.frequency.value = freq;
            const t0 = MY.ctx.currentTime + (delay || 0);
            g.gain.setValueAtTime(0.0001, t0);
            g.gain.exponentialRampToValueAtTime(gain || 0.1, t0 + 0.012);
            g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
            o.connect(g); g.connect(MY.ctx.destination);
            o.start(t0); o.stop(t0 + dur + 0.03);
        } catch (e) { }
    }
    const MY_SFX = {
        open: function (n) { myTone(420 + Math.min(n, 12) * 28, 0.07, 'triangle', 0.09); },
        flag: function () { myTone(760, 0.08, 'square', 0.07); },
        unflag: function () { myTone(300, 0.07, 'square', 0.06); },
        boom: function () {
            myTone(160, 0.5, 'sawtooth', 0.18);
            myTone(80, 0.7, 'sine', 0.2, 0.03);
        },
        wrong: function () { myTone(180, 0.18, 'sawtooth', 0.1); },
        levelUp: function () {
            [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) { myTone(f, 0.14, 'triangle', 0.11, i * 0.09); });
        },
        win: function () {
            [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach(function (f, i) { myTone(f, 0.2, 'triangle', 0.12, i * 0.11); });
        },
        tick: function () { myTone(880, 0.05, 'sine', 0.06); }
    };
    window.myToggleMute = function () {
        MY.muted = !MY.muted;
        const b = myEl('myMuteBtn');
        if (b) b.textContent = MY.muted ? '🔇' : '🔊';
        if (!MY.muted) MY_SFX.flag();
    };

    function myIdx(r, c) { return r * MY.cols + c; }
    function myNeighbors(i) {
        const r = Math.floor(i / MY.cols), c = i % MY.cols, out = [];
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (!dr && !dc) continue;
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < MY.rows && nc >= 0 && nc < MY.cols) out.push(myIdx(nr, nc));
            }
        }
        return out;
    }
    function myComboTier() { return 1 + Math.min(3, Math.floor(MY.combo / 10)); }

    window.startMayinFromMode = function () {
        try { isInTest = true; stopBgMusic(); } catch (e) { }
        hideAllMainScreens();
        myEl('mayinGameScreen').style.display = 'block';
        MY.score = 0; MY.level = 1; MY.scored = false;
        myStartLevel();
    };

    function myStartLevel() {
        const cfg = MY_LEVELS[Math.min(MY.level, MY_MAX_LEVEL) - 1];
        MY.rows = cfg.rows; MY.cols = cfg.cols; MY.mines = cfg.mines;
        MY.timeMax = cfg.time; MY.timeLeft = cfg.time;
        MY.firstClick = true; MY.dead = false; MY.started = false;
        MY.revealed = 0; MY.flags = 0; MY.combo = 0;
        MY.levelPts = 0; MY.correctFlags = 0; MY.wrongFlags = 0;
        MY.safeTotal = cfg.rows * cfg.cols - cfg.mines;
        MY.levelStart = 0;

        MY.cells = [];
        for (let i = 0; i < cfg.rows * cfg.cols; i++) {
            MY.cells.push({ i: i, mine: false, adj: 0, state: 'hidden' });
        }
        myBuildBoard();
        myUpdateUI();
        myEl('myLevelOverlay').classList.remove('show');
        myEl('myGameOverOverlay').classList.remove('show');
        myEl('myExplode').classList.remove('show');
        myCountdown();
    }

    function myCountdown() {
        const cd = myEl('myCountdown');
        let n = 3;
        cd.style.display = 'flex';
        cd.textContent = n;
        myTone(523.25, 0.1, 'triangle', 0.08);
        clearInterval(MY.cdTimer);
        MY.cdTimer = setInterval(function () {
            n--;
            if (n <= 0) {
                clearInterval(MY.cdTimer);
                cd.style.display = 'none';
                MY.started = true;
                MY.levelStart = performance.now();
                myStartLoop();
                myTone(880, 0.16, 'triangle', 0.1);
            } else {
                cd.textContent = n;
                myTone(523.25, 0.1, 'triangle', 0.08);
            }
        }, 700);
    }

    function myBuildBoard() {
        const board = myEl('myBoard');
        board.innerHTML = '';
        board.style.gridTemplateColumns = 'repeat(' + MY.cols + ', 1fr)';
        MY.cells.forEach(function (cell) {
            const b = document.createElement('button');
            b.className = 'my-cell';
            b.type = 'button';
            b.setAttribute('data-i', String(cell.i));
            b.setAttribute('aria-label', 'Kutu ' + (cell.i + 1));
            b.addEventListener('click', function () { myOnCellClick(cell.i); });
            b.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                myToggleFlag(cell.i);
            });
            b.addEventListener('pointerdown', function (e) {
                if (e.button === 2) return;
                MY.lpFired = false;
                clearTimeout(MY.lpTimer);
                MY.lpTimer = setTimeout(function () {
                    MY.lpFired = true;
                    myToggleFlag(cell.i);
                }, 380);
            });
            ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
                b.addEventListener(ev, function () { clearTimeout(MY.lpTimer); });
            });
            cell.el = b;
            board.appendChild(b);
        });
    }

    function myPlaceMines(safeIdx) {
        const banned = { };
        banned[safeIdx] = true;
        myNeighbors(safeIdx).forEach(function (n) { banned[n] = true; });

        const free = [];
        for (let i = 0; i < MY.cells.length; i++) if (!banned[i]) free.push(i);
        for (let i = free.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const t = free[i]; free[i] = free[j]; free[j] = t;
        }
        const need = Math.min(MY.mines, free.length);
        for (let k = 0; k < need; k++) MY.cells[free[k]].mine = true;

        MY.cells.forEach(function (cell) {
            cell.adj = myNeighbors(cell.i).filter(function (n) { return MY.cells[n].mine; }).length;
        });
    }

    function myOnCellClick(i) {
        if (!MY.on || !MY.started || MY.dead) return;
        if (MY.lpFired) { MY.lpFired = false; return; }
        const cell = MY.cells[i];
        if (MY.flagMode) { myToggleFlag(i); return; }
        if (cell.state === 'flag') return;
        if (cell.state === 'open') { myChord(i); return; }
        myReveal(i);
    }

    function myToggleFlag(i) {
        if (!MY.on || !MY.started || MY.dead) return;
        const cell = MY.cells[i];
        if (cell.state === 'open') return;
        if (cell.state === 'flag') {
            cell.state = 'hidden';
            cell.el.classList.remove('flag');
            cell.el.textContent = '';
            MY.flags--;
            MY_SFX.unflag();
        } else {
            cell.state = 'flag';
            cell.el.classList.add('flag');
            cell.el.textContent = '🚩';
            MY.flags++;
            MY_SFX.flag();
        }
        myUpdateUI();
    }
    window.myToggleFlagMode = function () {
        MY.flagMode = !MY.flagMode;
        const b = myEl('myFlagBtn');
        if (b) {
            b.textContent = MY.flagMode ? '🚩 Bayrak Modu: AÇIK' : '🚩 Bayrak Modu: KAPALI';
            b.classList.toggle('active', MY.flagMode);
        }
    };

    function myReveal(i) {
        const cell = MY.cells[i];
        if (cell.state !== 'hidden') return;
        if (MY.firstClick) { myPlaceMines(i); MY.firstClick = false; }

        if (cell.mine) { myDie(i); return; }

        let opened = 0;
        const stack = [i];
        while (stack.length) {
            const cur = stack.pop();
            const c = MY.cells[cur];
            if (c.state !== 'hidden' || c.mine) continue;
            c.state = 'open';
            MY.revealed++;
            opened++;
            if (c.adj > 0) {
                c.el.textContent = String(c.adj);
                c.el.classList.add('open', 'my-n' + c.adj, 'justopened');
            } else {
                c.el.textContent = '';
                c.el.classList.add('open', 'justopened');
                myNeighbors(cur).forEach(function (n) {
                    if (MY.cells[n].state === 'hidden') stack.push(n);
                });
            }
        }
        MY.combo += opened;
        const pts = opened * (3 + myComboTier());
        MY.score += pts; MY.levelPts += pts;
        MY_SFX.open(opened);
        myUpdateUI();
        if (MY.revealed >= MY.safeTotal) myLevelComplete();
    }

    function myChord(i) {
        const cell = MY.cells[i];
        if (cell.state !== 'open' || cell.adj === 0) return;
        const nb = myNeighbors(i);
        const flagged = nb.filter(function (n) { return MY.cells[n].state === 'flag'; }).length;
        if (flagged !== cell.adj) { MY_SFX.wrong(); return; }
        const hidden = nb.filter(function (n) { return MY.cells[n].state === 'hidden'; });
        hidden.forEach(function (n) {
            if (!MY.dead) myReveal(n);
        });
    }

    function myTimeUp() {
        MY.dead = true;
        MY.started = false;
        cancelAnimationFrame(MY.raf);
        MY.timeLeft = 0;
        MY_SFX.boom();
        myEl('myExplode').classList.add('show');
        MY.cells.forEach(function (c) {
            if (c.mine) {
                c.el.classList.remove('flag');
                c.el.classList.add('mine');
                c.el.textContent = '💣';
            } else if (c.state === 'flag') {
                c.el.classList.remove('flag');
                c.el.classList.add('wrong');
                c.el.textContent = '❌';
            }
        });
        setTimeout(function () { myGameOver(false); }, 900);
    }

    function myDie(i) {
        MY.dead = true;
        MY.started = false;
        cancelAnimationFrame(MY.raf);
        const boomCell = MY.cells[i];
        boomCell.state = 'open';
        boomCell.el.classList.add('boom');
        boomCell.el.textContent = '💣';
        MY_SFX.boom();
        myEl('myExplode').classList.add('show');

        MY.cells.forEach(function (c) {
            if (c.mine && c.i !== i) {
                c.el.classList.remove('flag');
                c.el.classList.add('mine');
                c.el.textContent = '💣';
            } else if (c.state === 'flag' && !c.mine) {
                c.el.classList.remove('flag');
                c.el.classList.add('wrong');
                c.el.textContent = '❌';
            }
        });
        setTimeout(function () { myGameOver(false); }, 900);
    }

    function myLevelComplete() {
        MY.started = false;
        cancelAnimationFrame(MY.raf);

        let correct = 0, wrong = 0;
        MY.cells.forEach(function (c) {
            if (c.state === 'flag') { if (c.mine) correct++; else wrong++; }
        });
        MY.correctFlags = correct; MY.wrongFlags = wrong;

        const used = Math.max(0, (performance.now() - MY.levelStart) / 1000);
        const timeBonus = Math.max(0, Math.floor(MY.timeLeft)) * 2;
        const levelBonus = 30 * MY.level;
        const flagPts = correct * 6 - wrong * 12;
        const total = timeBonus + levelBonus + flagPts;
        MY.score += total; MY.levelPts += total;

        MY_SFX.levelUp();
        myUpdateUI();

        myEl('myLvOvEmoji').textContent = MY.level >= MY_MAX_LEVEL ? '👑' : '🎉';
        myEl('myLvOvTitle').textContent = 'Seviye ' + MY.level + ' Tamamlandı!';
        myEl('myLvOvSub').textContent =
            'Tüm güvenli kutuları açtın!' +
            (timeBonus > 0 ? ' ⏱️ Süre bonusu: +' + timeBonus : '') +
            (levelBonus > 0 ? ' 🏁 Seviye bonusu: +' + levelBonus : '') +
            (flagPts !== 0 ? ' 🚩 Bayrak: ' + (flagPts > 0 ? '+' : '') + flagPts : '');
        myEl('myLvOvTime').textContent = used.toFixed(1) + 's';
        myEl('myLvOvFlags').textContent = correct + '/' + MY.mines;
        myEl('myLvOvPts').textContent = MY.levelPts;
        myEl('myLevelOverlay').classList.add('show');
    }

    window.myNextLevel = function () {
        myEl('myLevelOverlay').classList.remove('show');
        if (MY.level >= MY_MAX_LEVEL) { myGameOver(true); return; }
        MY.level++;
        myStartLevel();
    };

    window.myRestartLevel = function () {
        if (!MY.on) return;
        MY.score = Math.max(0, MY.score - MY.levelPts);
        myStartLevel();
    };

    window.myRestartGame = function () {
        myEl('myGameOverOverlay').classList.remove('show');
        MY.score = 0; MY.level = 1; MY.scored = false;
        myStartLevel();
    };

    function myGameOver(allClear) {
        MY.on = false;
        MY.started = false;
        cancelAnimationFrame(MY.raf);
        clearInterval(MY.cdTimer);

        const isRecord = MY.score > MY.best && MY.score > 0;
        if (isRecord) {
            MY.best = MY.score;
            try { localStorage.setItem('mayin_best', String(MY.best)); } catch (e) { }
        }
        if (!MY.scored) {
            MY.scored = true;
            try { if (MY.score > 0 && typeof addPoints === 'function') addPoints(MY.score); } catch (e) { }
        }
        if (allClear) MY_SFX.win();

        myEl('myGoEmoji').textContent = allClear ? '👑' : (MY.timeLeft <= 0 ? '⏰' : '💥');
        myEl('myGoTitle').textContent = allClear ? 'TARLAYI TEMİZLEDİN!'
            : (MY.timeLeft <= 0 ? 'Süre Doldu!' : 'Mayına Bastın!');
        myEl('myGoSub').textContent = allClear
            ? 'Tüm ' + MY_MAX_LEVEL + ' seviyeyi temizledin. Efsane bir mayın avcısı!'
            : 'Ulaştığın seviye: ' + MY.level + ' / ' + MY_MAX_LEVEL;
        myEl('myGoLevel').textContent = MY.level;
        myEl('myGoScore').textContent = MY.score;
        myEl('myGoBest').textContent = MY.best;
        myEl('myGoRecord').style.display = isRecord ? 'block' : 'none';
        myEl('myGameOverOverlay').classList.add('show');
    }

    function myStartLoop() { cancelAnimationFrame(MY.raf); MY.raf = requestAnimationFrame(myLoop); }
    function myLoop(t) {
        if (!MY.on || !MY.started) return;
        const used = (t - MY.levelStart) / 1000;
        MY.timeLeft = Math.max(0, MY.timeMax - used);
        const pct = MY.timeLeft / MY.timeMax;
        const bar = myEl('myTimerBar');
        if (bar) {
            bar.style.transform = 'scaleX(' + pct + ')';
            bar.classList.toggle('low', pct < 0.25);
        }
        myUpdateUI();
        if (MY.timeLeft <= 0) { myTimeUp(); return; }
        MY.raf = requestAnimationFrame(myLoop);
    }

    function myUpdateUI() {
        const lv = myEl('myLevel'); if (lv) lv.textContent = 'SEVİYE ' + MY.level;
        const sc = myEl('myScore'); if (sc) sc.textContent = '⭐ ' + MY.score;
        const fl = myEl('myFlags'); if (fl) fl.textContent = '🚩 ' + MY.flags + '/' + MY.mines;
        const tm = myEl('myTime'); if (tm) tm.textContent = '⏱ ' + Math.ceil(MY.timeLeft) + 's';
        const st = myEl('myStreak');
        if (st) {
            if (MY.combo >= 10) { st.style.display = ''; st.textContent = '🔥 x' + myComboTier(); }
            else st.style.display = 'none';
        }
    }

    window.myRequestExit = function () {
        if (!MY.on) return;
        myEl('myExitInfo').textContent =
            'Seviye ' + MY.level + ' • ' + MY.score + ' puanın kaydedilecek.';
        myEl('myExitModal').style.display = 'flex';
    };
    window.myCancelExit = function () { myEl('myExitModal').style.display = 'none'; };
    window.myConfirmExit = function () {
        myEl('myExitModal').style.display = 'none';
        if (!MY.scored) {
            MY.scored = true;
            try { if (MY.score > 0 && typeof addPoints === 'function') addPoints(MY.score); } catch (e) { }
            if (MY.score > MY.best) {
                MY.best = MY.score;
                try { localStorage.setItem('mayin_best', String(MY.best)); } catch (e) { }
            }
        }
        myLeaveTo('modeScreen');
    };
    window.myBackToMode = function () { myLeaveTo('modeScreen'); };
    window.myGoProfile = function () { myLeaveTo('profileScreen'); };
    function myLeaveTo(screenId) {
        myStop();
        try { isInTest = false; if (typeof soundEnabled !== 'undefined' && soundEnabled) startBgMusic(); } catch (e) { }
        hideAllMainScreens();
        const s = myEl(screenId); if (s) s.style.display = 'block';
        try { changeTheme('space'); } catch (e) { }
    }
    function myStop() {
        MY.on = false; MY.started = false; MY.dead = false;
        cancelAnimationFrame(MY.raf);
        clearInterval(MY.cdTimer);
        clearTimeout(MY.lpTimer);
        myEl('myExitModal').style.display = 'none';
        myEl('myLevelOverlay').classList.remove('show');
        myEl('myGameOverOverlay').classList.remove('show');
    }

    document.addEventListener('keydown', function (e) {
        if (!MY.on) return;
        if (e.key === 'Escape') {
            if (myEl('myExitModal').style.display === 'flex') window.myCancelExit();
            else window.myRequestExit();
            return;
        }
        const k = (e.key || '').toLowerCase();
        if (k === 'm') { e.preventDefault(); window.myToggleMute(); }
        else if (k === 'f') { e.preventDefault(); window.myToggleFlagMode(); }
        else if (k === 'r') { e.preventDefault(); window.myRestartLevel(); }
        else if (e.key === 'Enter' && myEl('myLevelOverlay').classList.contains('show')) {
            e.preventDefault(); window.myNextLevel();
        }
    });

    const _myStartLevel = myStartLevel;
    myStartLevel = function () { MY.on = true; _myStartLevel(); };
})();
