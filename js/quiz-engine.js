(function () {
  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderQuizWidget(container, config) {
    const { getLang, t, saveQuizScore } = window.DM_APP;
    const questions = config.questions || [];
    const scoreKey = config.scoreKey || 'default';
    const titleText = config.title || t('quizTitle');
    const state = { answers: {} };

    function draw() {
      const lang = getLang();
      const total = questions.length;
      const answeredCount = Object.keys(state.answers).length;
      const correctCount = questions.reduce((acc, q, idx) => acc + (state.answers[idx] === q.answer ? 1 : 0), 0);

      if (answeredCount === total && total > 0) saveQuizScore(scoreKey, correctCount, total);

      container.innerHTML = `
        <div class="quiz-box">
          <div class="quiz-header">
            <div>
              <h2 style="margin:0; font-size:1.18rem;">${titleText}</h2>
              <p style="margin:0.2rem 0 0; font-size:0.82rem; color:var(--text-muted);">${t('quizSubtitle')}</p>
            </div>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="tag" style="font-weight:700; color:var(--accent); font-family:var(--font-mono);">
                ${t('scoreLabel')}: ${correctCount}/${total}
              </span>
              ${answeredCount > 0 ? `<button type="button" class="btn btn-secondary btn-sm" id="quiz-reset-btn">${t('resetQuiz')}</button>` : ''}
            </div>
          </div>
          <div>
            ${questions.map((q, idx) => {
              const selected = state.answers[idx];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.answer;
              const topicBadge = q._topicLabel ? `<span class="badge badge-topic" style="margin-bottom:0.45rem; display:inline-block;">${q._topicLabel}</span>` : '';
              return `
                <div class="quiz-question">
                  ${topicBadge}
                  <div class="quiz-q-title"><span style="color:var(--accent); margin-right:0.35rem;">${idx + 1}.</span>${q.q[lang]}</div>
                  <div class="quiz-options">
                    ${q.options.map((opt) => {
                      let cls = 'quiz-option';
                      if (isAnswered) {
                        if (opt.label === q.answer) cls += ' correct';
                        else if (opt.label === selected) cls += ' wrong';
                      }
                      return `
                        <button type="button" class="${cls}" data-q-idx="${idx}" data-opt="${opt.label}" ${isAnswered ? 'disabled' : ''}>
                          <span class="opt-letter">${opt.label}</span>
                          <span style="flex:1;">${opt[lang]}</span>
                          ${isAnswered && opt.label === q.answer ? '<span style="color:var(--emerald); font-weight:800;">✓</span>' : ''}
                          ${isAnswered && opt.label === selected && opt.label !== q.answer ? '<span style="color:var(--red); font-weight:800;">✗</span>' : ''}
                        </button>`;
                    }).join('')}
                  </div>
                  ${isAnswered ? `<div class="quiz-feedback ${isCorrect ? 'ok' : 'bad'}"><strong>${isCorrect ? t('correctMsg') : `${t('wrongMsg')} ${q.answer}.`}</strong> ${q.explanation && q.explanation[lang] ? q.explanation[lang] : ''}</div>` : ''}
                </div>`;
            }).join('')}
          </div>
        </div>`;

      container.querySelectorAll('.quiz-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-q-idx'));
          const opt = btn.getAttribute('data-opt');
          if (state.answers[idx] === undefined) { state.answers[idx] = opt; draw(); }
        });
      });
      const resetBtn = container.querySelector('#quiz-reset-btn');
      if (resetBtn) resetBtn.addEventListener('click', () => { state.answers = {}; draw(); });
    }

    draw();
    window.addEventListener('dm:langchange', draw);
  }

  function renderMatchingWidget(container, pairs) {
    if (!container || !pairs || !pairs.length) return;
    const { getLang, t } = window.DM_APP;
    let rightOrder = shuffle(pairs.map((_, i) => i));
    let selectedLeft = null;
    let matched = new Set();
    let wrongFlash = null;

    function draw() {
      const lang = getLang();
      container.innerHTML = `
        <div class="exercise-box">
          <div class="quiz-header">
            <div>
              <h2 style="margin:0; font-size:1.18rem;">${t('matchTitle')}</h2>
              <p style="margin:0.2rem 0 0; font-size:0.82rem; color:var(--text-muted);">${t('matchSubtitle')}</p>
            </div>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="tag" style="font-weight:700; color:var(--emerald); font-family:var(--font-mono);">${matched.size}/${pairs.length}</span>
              <button type="button" class="btn btn-secondary btn-sm" id="match-reset">${t('resetQuiz')}</button>
            </div>
          </div>
          <div class="match-grid">
            <div class="match-col">
              ${pairs.map((p, idx) => {
                const isDone = matched.has(idx);
                const cls = `match-btn ${isDone ? 'matched' : selectedLeft === idx ? 'selected' : ''}`;
                return `<button type="button" class="${cls}" data-left="${idx}" ${isDone ? 'disabled' : ''}>${idx + 1}. ${p.left[lang]}</button>`;
              }).join('')}
            </div>
            <div class="match-col">
              ${rightOrder.map((origIdx) => {
                const isDone = matched.has(origIdx);
                const cls = `match-btn ${isDone ? 'matched' : wrongFlash === origIdx ? 'wrong-flash' : ''}`;
                return `<button type="button" class="${cls}" data-right="${origIdx}" ${isDone ? 'disabled' : ''}>${pairs[origIdx].right[lang]}</button>`;
              }).join('')}
            </div>
          </div>
        </div>`;

      container.querySelectorAll('[data-left]').forEach((b) => {
        b.onclick = () => { selectedLeft = Number(b.dataset.left); draw(); };
      });
      container.querySelectorAll('[data-right]').forEach((b) => {
        b.onclick = () => {
          if (selectedLeft === null) return;
          const rightIdx = Number(b.dataset.right);
          if (rightIdx === selectedLeft) {
            matched.add(selectedLeft);
            selectedLeft = null;
            wrongFlash = null;
          } else {
            wrongFlash = rightIdx;
            setTimeout(() => { wrongFlash = null; draw(); }, 500);
          }
          draw();
        };
      });
      container.querySelector('#match-reset').onclick = () => {
        matched.clear(); selectedLeft = null; rightOrder = shuffle(pairs.map((_, i) => i)); draw();
      };
    }
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  function renderFillGapWidget(container, items) {
    if (!container || !items || !items.length) return;
    const { getLang, t } = window.DM_APP;
    let userInputs = items.map(() => '');
    let checked = false;

    function normalize(s) {
      return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
    }

    function isMatch(userVal, accepted) {
      const u = normalize(userVal);
      if (!u) return false;
      const list = Array.isArray(accepted) ? accepted : [accepted];
      return list.some((a) => normalize(a) === u);
    }

    function draw() {
      const lang = getLang();
      const score = checked ? items.reduce((s, it, i) => s + (isMatch(userInputs[i], it.answer) ? 1 : 0), 0) : 0;
      const bank = shuffle(items.map((it) => (Array.isArray(it.answer) ? it.answer[0] : it.answer)));

      container.innerHTML = `
        <div class="exercise-box">
          <div class="quiz-header">
            <div>
              <h2 style="margin:0; font-size:1.18rem;">${t('gapTitle')}</h2>
              <p style="margin:0.2rem 0 0; font-size:0.82rem; color:var(--text-muted);">${t('gapSubtitle')}</p>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              ${checked ? `<span class="tag" style="color:var(--accent); font-weight:700;">${t('scoreLabel')}: ${score}/${items.length}</span>` : ''}
              <button type="button" class="btn btn-primary btn-sm" id="gap-check">${t('checkGaps')}</button>
              ${checked ? `<button type="button" class="btn btn-secondary btn-sm" id="gap-reset">${t('resetQuiz')}</button>` : ''}
            </div>
          </div>
          <div style="margin-bottom:0.85rem; font-size:0.82rem; color:var(--text-muted);">
            <strong>${lang === 'uz' ? 'Yordamchi so\'zlar:' : 'Word Bank:'}</strong>
            ${bank.map((w) => `<span class="tag" style="margin-left:4px;">${w}</span>`).join('')}
          </div>
          ${items.map((it, idx) => {
            const ok = checked && isMatch(userInputs[idx], it.answer);
            const bad = checked && !ok;
            const ansText = Array.isArray(it.answer) ? it.answer[0] : it.answer;
            const inputHtml = `<input type="text" class="gap-input ${ok ? 'ok' : bad ? 'bad' : ''}" data-gap="${idx}" value="${userInputs[idx].replace(/"/g, '&quot;')}" placeholder="...">`;
            const promptHtml = it.text[lang].replace('___', inputHtml);
            return `
              <div class="gap-item">
                <div><strong>${idx + 1}.</strong> ${promptHtml}</div>
                ${bad ? `<div style="margin-top:0.4rem; font-size:0.8rem; color:var(--emerald);">✓ ${t('wrongMsg')} <strong>${ansText}</strong></div>` : ''}
              </div>`;
          }).join('')}
        </div>`;

      container.querySelectorAll('[data-gap]').forEach((inp) => {
        inp.oninput = (e) => { userInputs[Number(inp.dataset.gap)] = e.target.value; };
      });
      container.querySelector('#gap-check').onclick = () => { checked = true; draw(); };
      const resetBtn = container.querySelector('#gap-reset');
      if (resetBtn) resetBtn.onclick = () => { userInputs = items.map(() => ''); checked = false; draw(); };
    }
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  // Render interactive MCQ / Matching / Fill-in-Gap directly inside Reveal.js slides
  function renderSlideExercise(slot, ex) {
    const lang = window.DM_APP.getLang();
    if (!ex || !slot) return;
    if (ex.type === 'mcq') {
      slot.innerHTML = `
        <div class="slide-ex-card">
          <div class="slide-ex-title">${ex.q[lang]}</div>
          <div class="slide-ex-options">
            ${ex.options.map((o) => `<button type="button" class="slide-ex-opt" data-o="${o.label}"><strong>${o.label})</strong> ${o[lang]}</button>`).join('')}
          </div>
          <div class="slide-ex-fb" id="sl-mcq-fb"></div>
        </div>`;
      slot.querySelectorAll('[data-o]').forEach((b) => {
        b.onclick = () => {
          const ok = b.dataset.o === ex.answer;
          slot.querySelectorAll('[data-o]').forEach((x) => {
            x.classList.remove('correct', 'wrong');
            if (x.dataset.o === ex.answer) x.classList.add('correct');
            else if (x === b && !ok) x.classList.add('wrong');
          });
          slot.querySelector('#sl-mcq-fb').innerHTML = `<span class="${ok ? 'fb-ok' : 'fb-bad'}">${ok ? '✓ ' : '✗ '}${ex.explanation[lang]}</span>`;
        };
      });
    } else if (ex.type === 'matching') {
      const pairs = ex.pairs;
      const rightOrder = shuffle(pairs.map((_, i) => i));
      let sel = null, done = new Set();
      function drawM() {
        slot.innerHTML = `
          <div class="slide-ex-card">
            <div class="slide-ex-title">🔗 ${lang === 'uz' ? 'Moslashtiring' : 'Match Pairs'} (${done.size}/${pairs.length})</div>
            <div class="slide-match-grid">
              <div class="slide-match-col">
                ${pairs.map((p, i) => `<button type="button" class="slide-ex-opt ${done.has(i) ? 'correct' : sel === i ? 'selected' : ''}" data-ml="${i}" ${done.has(i) ? 'disabled' : ''}>${p.left[lang]}</button>`).join('')}
              </div>
              <div class="slide-match-col">
                ${rightOrder.map((oi) => `<button type="button" class="slide-ex-opt ${done.has(oi) ? 'correct' : ''}" data-mr="${oi}" ${done.has(oi) ? 'disabled' : ''}>${pairs[oi].right[lang]}</button>`).join('')}
              </div>
            </div>
          </div>`;
        slot.querySelectorAll('[data-ml]').forEach((b) => b.onclick = () => { sel = Number(b.dataset.ml); drawM(); });
        slot.querySelectorAll('[data-mr]').forEach((b) => b.onclick = () => {
          if (sel !== null && Number(b.dataset.mr) === sel) { done.add(sel); sel = null; drawM(); }
        });
      }
      drawM();
    } else if (ex.type === 'fillGap') {
      const items = ex.items;
      slot.innerHTML = `
        <div class="slide-ex-card">
          <div class="slide-ex-header">
            <span class="slide-ex-title" style="margin:0;">✍️ ${lang === 'uz' ? 'Bo\'shliqni to\'ldiring' : 'Fill in the Gap'}</span>
            <button type="button" class="slide-ex-btn" id="sl-gap-btn">${lang === 'uz' ? 'Tekshirish' : 'Check'}</button>
          </div>
          ${items.map((it, i) => {
            const inp = `<input type="text" class="slide-ex-input" data-sg="${i}" placeholder="...">`;
            return `<div class="slide-gap-row">${i + 1}. ${it.text[lang].replace('___', inp)} <span data-sfb="${i}" class="slide-ex-fb-inline"></span></div>`;
          }).join('')}
        </div>`;
      slot.querySelector('#sl-gap-btn').onclick = () => {
        items.forEach((it, i) => {
          const inpEl = slot.querySelector(`[data-sg="${i}"]`);
          const v = inpEl.value.trim().toLowerCase();
          const ansList = (Array.isArray(it.answer) ? it.answer : [it.answer]).map((a) => a.toLowerCase());
          const ok = ansList.includes(v);
          inpEl.classList.remove('correct', 'wrong');
          inpEl.classList.add(ok ? 'correct' : 'wrong');
          const fb = slot.querySelector(`[data-sfb="${i}"]`);
          fb.innerHTML = ok ? '<span class="fb-ok">✓</span>' : `<span class="fb-bad">✗ (${ansList[0]})</span>`;
        });
      };
    }
  }

  function initQuizArena() {
    const arenaEl = document.getElementById('quiz-arena-root');
    if (!arenaEl) return;

    const { getLang, renderChrome, getQuizScores } = window.DM_APP;
    const topics = window.DM_TOPICS;
    let currentMode = 'mixed-15';

    function buildQuestions(mode) {
      const lang = getLang();
      if (mode === 'mixed-15' || mode === 'mixed-all') {
        const pool = [];
        topics.filter((tp) => !tp.isBonus).forEach((tp) => {
          tp.quiz.forEach((q) => pool.push(Object.assign({}, q, { _topicLabel: `${tp.code || 'M' + tp.id}: ${tp.title[lang]}` })));
        });
        const shuffled = shuffle(pool);
        return mode === 'mixed-15' ? shuffled.slice(0, 15) : shuffled;
      }
      const topicId = Number(mode);
      const found = topics.find((x) => x.id === topicId) || topics[0];
      return found.quiz.map((q) => Object.assign({}, q, { _topicLabel: `${found.code || 'M' + found.id}: ${found.title[lang]}` }));
    }

    function renderArena() {
      const lang = getLang();
      const scores = getQuizScores();
      const mandatoryTopics = topics.filter((tp) => !tp.isBonus);
      const totalMandatoryQ = mandatoryTopics.reduce((s, tp) => s + tp.quiz.length, 0);
      const selectedTopicObj = !String(currentMode).startsWith('mixed') ? topics.find((x) => x.id === Number(currentMode)) : null;

      arenaEl.innerHTML = `
        <div class="hero" style="padding:1.6rem;">
          <span class="pill">📝 ${lang === 'uz' ? 'Testlar, Moslashtirish & Bo\'shliqni to\'ldirish' : 'Quizzes, Matching & Fill-the-Gap Arena'}</span>
          <h1 style="font-size:1.85rem; margin-bottom:0.4rem;">
            ${lang === 'uz' ? 'Bilimingizni Sinab Ko\'ring' : 'Test Your Data Mining Mastery'}
          </h1>
          <p class="hero-subtitle" style="margin-bottom:1rem;">
            ${lang === 'uz'
              ? `Majburiy M1–M15 mavzular bo'yicha ${totalMandatoryQ} ta test + har mavzuda Moslashtirish (Matching) va Bo'shliq to'ldirish (Fill-in-Gap) mashqlari.`
              : `${totalMandatoryQ} MCQs across M1–M15 plus per-topic Matching and Fill-in-the-Gap exercises grounded strictly in lecture theory.`}
          </p>
          <div style="display:flex; flex-wrap:wrap; gap:0.7rem; align-items:center;">
            <select id="quiz-mode-select" class="search-input" style="min-width:290px;">
              <option value="mixed-15" ${currentMode === 'mixed-15' ? 'selected' : ''}>🎲 ${lang === 'uz' ? 'Aralash Imtihon (15 ta tasodifiy savol)' : 'Mixed Exam (15 Random Questions)'}</option>
              <option value="mixed-all" ${currentMode === 'mixed-all' ? 'selected' : ''}>🏆 ${lang === 'uz' ? `To'liq M1–M15 Marafon (${totalMandatoryQ} ta savol)` : `Full M1–M15 Marathon (${totalMandatoryQ} Questions)`}</option>
              ${topics.map((tp) => {
                const sc = scores['topic-' + tp.id];
                const badge = sc ? ` [${sc.score}/${sc.total}]` : '';
                const tag = tp.code || (tp.isBonus ? `B${tp.id - 15}` : `M${tp.id}`);
                return `<option value="${tp.id}" ${String(currentMode) === String(tp.id) ? 'selected' : ''}>${tag}. ${tp.title[lang]}${badge}</option>`;
              }).join('')}
            </select>
            <button type="button" class="btn btn-primary btn-sm" id="quiz-reshuffle-btn">🔄 ${lang === 'uz' ? 'Yangilash' : 'Refresh'}</button>
          </div>
        </div>
        <div id="quiz-arena-widget"></div>
        <div id="quiz-arena-matching"></div>
        <div id="quiz-arena-gap"></div>
      `;

      const select = document.getElementById('quiz-mode-select');
      const reshuffleBtn = document.getElementById('quiz-reshuffle-btn');

      const loadSelected = () => {
        const qs = buildQuestions(currentMode);
        const key = String(currentMode).startsWith('mixed') ? currentMode : `topic-${currentMode}`;
        const label = selectedTopicObj ? `${selectedTopicObj.code || 'M' + selectedTopicObj.id}. ${selectedTopicObj.title[lang]}` : (currentMode === 'mixed-15' ? (lang === 'uz' ? 'Aralash Imtihon' : 'Mixed Exam') : (lang === 'uz' ? 'To\'liq Marafon' : 'Full Marathon'));
        renderQuizWidget(document.getElementById('quiz-arena-widget'), { questions: qs, scoreKey: key, title: label });

        const matchEl = document.getElementById('quiz-arena-matching');
        const gapEl = document.getElementById('quiz-arena-gap');
        if (selectedTopicObj && selectedTopicObj.matching) renderMatchingWidget(matchEl, selectedTopicObj.matching);
        else matchEl.innerHTML = '';
        if (selectedTopicObj && selectedTopicObj.fillGap) renderFillGapWidget(gapEl, selectedTopicObj.fillGap);
        else gapEl.innerHTML = '';
      };

      select.addEventListener('change', () => { currentMode = select.value; loadSelected(); });
      reshuffleBtn.addEventListener('click', loadSelected);
      loadSelected();
    }

    renderChrome('quiz');
    renderArena();
    window.addEventListener('dm:langchange', renderArena);
  }

  window.DM_QUIZ = {
    renderQuizWidget,
    renderMatchingWidget,
    renderFillGapWidget,
    renderSlideExercise,
    initQuizArena
  };
})();
