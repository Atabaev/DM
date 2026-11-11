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
      const correctCount = questions.reduce((acc, q, idx) => {
        return acc + (state.answers[idx] === q.answer ? 1 : 0);
      }, 0);

      if (answeredCount === total && total > 0) {
        saveQuizScore(scoreKey, correctCount, total);
      }

      container.innerHTML = `
        <div class="quiz-box">
          <div class="quiz-header">
            <div>
              <h2 style="margin:0; font-size:1.2rem;">${titleText}</h2>
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
                  <div class="quiz-q-title">
                    <span style="color:var(--accent); margin-right:0.35rem;">${idx + 1}.</span>
                    ${q.q[lang]}
                  </div>
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
                        </button>
                      `;
                    }).join('')}
                  </div>
                  ${isAnswered ? `
                    <div class="quiz-feedback ${isCorrect ? 'ok' : 'bad'}">
                      <strong>${isCorrect ? t('correctMsg') : `${t('wrongMsg')} ${q.answer}.`}</strong>
                      ${q.explanation && q.explanation[lang] ? ` ${q.explanation[lang]}` : ''}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      container.querySelectorAll('.quiz-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-q-idx'));
          const opt = btn.getAttribute('data-opt');
          if (state.answers[idx] === undefined) {
            state.answers[idx] = opt;
            draw();
          }
        });
      });

      const resetBtn = container.querySelector('#quiz-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.answers = {};
          draw();
        });
      }
    }

    draw();
    window.addEventListener('dm:langchange', draw);
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
        topics.forEach((tp) => {
          tp.quiz.forEach((q) => {
            pool.push(Object.assign({}, q, {
              _topicLabel: `${tp.id}. ${tp.title[lang]}`
            }));
          });
        });
        const shuffled = shuffle(pool);
        return mode === 'mixed-15' ? shuffled.slice(0, 15) : shuffled;
      }
      const topicId = Number(mode);
      const found = topics.find((x) => x.id === topicId) || topics[0];
      return found.quiz.map((q) => Object.assign({}, q, {
        _topicLabel: `${found.id}. ${found.title[lang]}`
      }));
    }

    function renderArena() {
      const lang = getLang();
      const scores = getQuizScores();
      const totalQuestions = topics.reduce((s, tp) => s + tp.quiz.length, 0);

      arenaEl.innerHTML = `
        <div class="hero" style="padding:1.6rem;">
          <span class="pill">📝 ${lang === 'uz' ? 'Interaktiv Viktorina Markazi' : 'Interactive Quiz Arena'}</span>
          <h1 style="font-size:1.9rem; margin-bottom:0.4rem;">
            ${lang === 'uz' ? 'Bilimingizni Sinab Ko\'ring' : 'Test Your Data Mining Mastery'}
          </h1>
          <p class="hero-subtitle" style="margin-bottom:1rem;">
            ${lang === 'uz'
              ? `15 ta mavzu bo'yicha jami ${totalQuestions} ta ikki tilli test savoli. Mavzuni tanlang yoki aralash imtihon topshiring.`
              : `Total ${totalQuestions} bilingual quiz questions across all 15 topics. Pick a single topic or take a randomized mixed exam.`}
          </p>
          <div style="display:flex; flex-wrap:wrap; gap:0.7rem; align-items:center;">
            <select id="quiz-mode-select" class="search-input" style="min-width:280px;">
              <option value="mixed-15" ${currentMode === 'mixed-15' ? 'selected' : ''}>
                🎲 ${lang === 'uz' ? 'Aralash Imtihon (15 ta tasodifiy savol)' : 'Mixed Exam (15 Random Questions)'}
              </option>
              <option value="mixed-all" ${currentMode === 'mixed-all' ? 'selected' : ''}>
                🏆 ${lang === 'uz' ? `To'liq Marafon (${totalQuestions} ta savol)` : `Full Marathon (${totalQuestions} Questions)`}
              </option>
              ${topics.map((tp) => {
                const sc = scores['topic-' + tp.id];
                const badge = sc ? ` [${sc.score}/${sc.total}]` : '';
                return `<option value="${tp.id}" ${String(currentMode) === String(tp.id) ? 'selected' : ''}>${tp.id}. ${tp.title[lang]}${badge}</option>`;
              }).join('')}
            </select>
            <button type="button" class="btn btn-primary btn-sm" id="quiz-reshuffle-btn">
              🔄 ${lang === 'uz' ? 'Savollarni yangilash' : 'New Attempt'}
            </button>
          </div>
        </div>
        <div id="quiz-arena-widget"></div>
      `;

      const select = document.getElementById('quiz-mode-select');
      const reshuffleBtn = document.getElementById('quiz-reshuffle-btn');

      const loadSelected = () => {
        const widgetEl = document.getElementById('quiz-arena-widget');
        const qs = buildQuestions(currentMode);
        const key = String(currentMode).startsWith('mixed') ? currentMode : `topic-${currentMode}`;
        const label = currentMode === 'mixed-15'
          ? (lang === 'uz' ? 'Aralash Imtihon (15 savol)' : 'Mixed Exam (15 Questions)')
          : currentMode === 'mixed-all'
            ? (lang === 'uz' ? 'To\'liq Marafon' : 'Full Marathon')
            : `${topics.find((x) => x.id === Number(currentMode)).title[lang]}`;
        renderQuizWidget(widgetEl, {
          questions: qs,
          scoreKey: key,
          title: label
        });
      };

      select.addEventListener('change', () => {
        currentMode = select.value;
        loadSelected();
      });
      reshuffleBtn.addEventListener('click', loadSelected);

      loadSelected();
    }

    renderChrome('quiz');
    renderArena();
    window.addEventListener('dm:langchange', renderArena);
  }

  window.DM_QUIZ = { renderQuizWidget, initQuizArena };
})();
