(function () {
  function initHomePage() {
    const root = document.getElementById('home-root');
    if (!root) return;

    const { getLang, t, renderChrome, getCompletedTopics, getQuizScores } = window.DM_APP;
    const topics = window.DM_TOPICS;
    const practiceCount = (window.DM_PRACTICE || []).length;
    let searchTerm = '';

    function draw() {
      const lang = getLang();
      const completed = getCompletedTopics();
      const scores = getQuizScores();
      const totalQ = topics.reduce((sum, tp) => sum + tp.quiz.length, 0);
      const pct = Math.round((completed.length / topics.length) * 100);

      const filtered = topics.filter((tp) => {
        if (!searchTerm) return true;
        const q = searchTerm.toLowerCase();
        return (
          tp.title.uz.toLowerCase().includes(q) ||
          tp.title.en.toLowerCase().includes(q) ||
          tp.description.uz.toLowerCase().includes(q) ||
          tp.description.en.toLowerCase().includes(q) ||
          tp.keywords.some((k) => k.toLowerCase().includes(q))
        );
      });

      root.innerHTML = `
        <section class="hero">
          <div class="pill">${t('heroPill')}</div>
          <h1>${t('heroTitle1')}<br><span>${t('heroTitle2')}</span></h1>
          <p class="hero-subtitle">${t('heroSubtitle')}</p>
          <div class="hero-meta">${t('heroMeta')}</div>

          <div class="hero-actions">
            <a href="slides.html?topic=1" class="btn btn-primary">${t('btnStartSlides')}</a>
            <a href="quiz.html" class="btn btn-secondary">${t('btnStartQuiz')}</a>
            <a href="practice.html" class="btn btn-secondary">${t('btnPractice')}</a>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${topics.length}</div>
              <div class="stat-label">${t('statTopics')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${topics.length}</div>
              <div class="stat-label">${t('statSlides')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${totalQ}</div>
              <div class="stat-label">${t('statQuestions')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${practiceCount}</div>
              <div class="stat-label">${t('statPractice')}</div>
            </div>
          </div>

          <div class="progress-box">
            <div class="progress-header">
              <span>${t('progressLabel')}</span>
              <span style="color:var(--accent); font-family:var(--font-mono);">${completed.length}/${topics.length} ${t('progressTopicsDone')} (${pct}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
        </section>

        <div class="section-header">
          <h2 class="section-title">${t('topicsHeading')}</h2>
          <input type="search" id="topic-search" class="search-input" placeholder="${t('searchPlaceholder')}" value="${searchTerm}">
        </div>

        <div class="topics-grid">
          ${filtered.map((tp) => {
            const isDone = completed.includes(tp.id);
            const qScore = scores['topic-' + tp.id];
            return `
              <article class="topic-card">
                <div class="topic-card-top">
                  <div class="topic-num ${isDone ? 'done' : ''}">${isDone ? '✓' : tp.id}</div>
                  <div>
                    <div class="topic-title">${tp.title[lang]}</div>
                    <div class="topic-subtitle">${tp.title[lang === 'uz' ? 'en' : 'uz']}</div>
                  </div>
                </div>
                <p class="topic-desc">${tp.description[lang]}</p>
                <div class="topic-meta">
                  ${tp.hours > 0 ? `<span class="tag">⏱ ${tp.hours} ${t('hoursUnit')}</span>` : ''}
                  ${tp.labs > 0 ? `<span class="tag">🧪 ${tp.labs} ${t('labsUnit')}</span>` : ''}
                  <span class="tag">📊 ${tp.slides.length} slides</span>
                  ${qScore ? `<span class="tag" style="color:var(--emerald);">★ ${qScore.score}/${qScore.total}</span>` : ''}
                </div>
                <div class="topic-actions">
                  <a href="topic.html?id=${tp.id}" class="btn btn-primary btn-sm">${t('btnStudy')}</a>
                  <a href="slides.html?topic=${tp.id}" class="btn btn-secondary btn-sm">${t('btnSlides')}</a>
                  <a href="topic.html?id=${tp.id}#topic-quiz" class="btn btn-secondary btn-sm">${t('btnQuiz')}</a>
                </div>
              </article>
            `;
          }).join('')}
        </div>

        <div class="info-grid">
          <div class="panel">
            <h3>${t('prereqTitle')}</h3>
            <ul style="margin:0; padding-left:1.2rem; color:var(--text-secondary);">
              ${t('prereqs').map((item) => `<li style="margin-bottom:0.35rem;">${item}</li>`).join('')}
            </ul>
          </div>
          <div class="panel">
            <h3>${t('rubricTitle')}</h3>
            <ul style="margin:0; padding-left:1.2rem; color:var(--text-secondary);">
              ${t('rubricItems').map((item) => `<li style="margin-bottom:0.35rem;">${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;

      const searchInput = document.getElementById('topic-search');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          searchTerm = e.target.value;
          const pos = e.target.selectionStart;
          draw();
          const next = document.getElementById('topic-search');
          if (next) {
            next.focus();
            next.setSelectionRange(pos, pos);
          }
        });
      }
    }

    renderChrome('home');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  function renderTable(table, lang) {
    if (!table) return '';
    return `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>${table.headers[lang].map((h) => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${table.rows[lang].map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function initTopicPage() {
    const root = document.getElementById('topic-root');
    if (!root) return;

    const { getLang, t, renderChrome, getCompletedTopics, toggleTopicCompleted } = window.DM_APP;
    const topics = window.DM_TOPICS;
    const params = new URLSearchParams(window.location.search);
    const topicId = Math.min(topics.length, Math.max(1, Number(params.get('id')) || 1));
    const topic = topics.find((tp) => tp.id === topicId) || topics[0];

    function draw() {
      const lang = getLang();
      const completed = getCompletedTopics();
      const isDone = completed.includes(topic.id);
      const prev = topics.find((tp) => tp.id === topic.id - 1);
      const next = topics.find((tp) => tp.id === topic.id + 1);

      document.title = `${topic.id}. ${topic.title[lang]} — ${t('brandTitle')}`;

      root.innerHTML = `
        <div class="topic-layout">
          <aside class="sidebar">
            <div class="sidebar-title">${t('sidebarTopics')}</div>
            ${topics.map((tp) => `
              <a href="topic.html?id=${tp.id}" class="sidebar-item ${tp.id === topic.id ? 'active' : ''}">
                <span style="font-weight:700; min-width:20px;">${completed.includes(tp.id) ? '✓' : tp.id + '.'}</span>
                <span>${tp.title[lang]}</span>
              </a>
            `).join('')}
          </aside>

          <div>
            <div class="hero" style="padding:1.6rem; margin-bottom:1.5rem;">
              <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:0.75rem; align-items:center; margin-bottom:0.75rem;">
                <span class="pill" style="margin:0;">Mavzu / Topic ${topic.id}</span>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                  ${topic.hours > 0 ? `<span class="tag">⏱ ${topic.hours} ${t('hoursUnit')}</span>` : ''}
                  ${topic.labs > 0 ? `<span class="tag">🧪 ${topic.labs} ${t('labsUnit')}</span>` : ''}
                </div>
              </div>
              <h1 style="font-size:1.9rem; margin-bottom:0.35rem;">${topic.title[lang]}</h1>
              <div style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">${topic.title[lang === 'uz' ? 'en' : 'uz']}</div>
              <p style="margin:0 0 1.2rem; color:var(--text-secondary);">${topic.description[lang]}</p>

              <div style="display:flex; flex-wrap:wrap; gap:0.65rem;">
                <a href="slides.html?topic=${topic.id}" class="btn btn-primary btn-sm">${t('openSlidesFull')}</a>
                <button type="button" id="toggle-complete-btn" class="btn btn-sm ${isDone ? 'btn-emerald' : 'btn-secondary'}">
                  ${isDone ? t('markedDone') : t('markDone')}
                </button>
              </div>
            </div>

            <article class="lecture-card">
              ${topic.sections.map((sec) => `
                <section class="lecture-section">
                  <h2>${sec.heading[lang]}</h2>
                  <div>${sec.bodyHtml[lang]}</div>
                  ${sec.formula ? `<div class="formula-box">${sec.formula}</div>` : ''}
                  ${renderTable(sec.table, lang)}
                  ${sec.callout ? `<div class="callout ${sec.callout.type === 'warn' ? 'warn' : ''}">${sec.callout[lang]}</div>` : ''}
                </section>
              `).join('')}

              ${topic.glossary && topic.glossary.length ? `
                <section class="lecture-section">
                  <h2>${t('glossaryTitle')}</h2>
                  <div class="data-table-wrap">
                    <table class="data-table">
                      <thead>
                        <tr><th>O'zbekcha</th><th>English</th><th>${t('defCol')}</th></tr>
                      </thead>
                      <tbody>
                        ${topic.glossary.map((g) => `
                          <tr>
                            <td><strong>${g.uz}</strong></td>
                            <td>${g.en}</td>
                            <td>${lang === 'uz' ? g.defUz : g.defEn}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                </section>
              ` : ''}

              ${topic.lab ? `
                <section class="lecture-section">
                  <h2>${t('labTitle')}</h2>
                  <h3 style="margin-top:0.25rem;">${topic.lab.title[lang]}</h3>
                  <ul>
                    ${topic.lab.tasks[lang].map((tsk) => `<li>${tsk}</li>`).join('')}
                  </ul>
                  <div class="code-wrap">
                    <div class="code-header">
                      <span>python · lab_${topic.id}.py</span>
                      <button type="button" class="btn btn-secondary btn-sm" id="copy-lab-btn">${t('copyCode')}</button>
                    </div>
                    <pre><code id="lab-code-block"></code></pre>
                  </div>
                </section>
              ` : ''}
            </article>

            <div id="topic-quiz"></div>

            <div style="display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-top:1.5rem;">
              ${prev ? `<a href="topic.html?id=${prev.id}" class="btn btn-secondary">${t('prevTopic')}: ${prev.id}. ${prev.title[lang]}</a>` : '<span></span>'}
              ${next ? `<a href="topic.html?id=${next.id}" class="btn btn-primary">${t('nextTopic')}: ${next.id}. ${next.title[lang]}</a>` : ''}
            </div>
          </div>
        </div>
      `;

      const codeEl = document.getElementById('lab-code-block');
      if (codeEl && topic.lab) codeEl.textContent = topic.lab.code;

      const copyBtn = document.getElementById('copy-lab-btn');
      if (copyBtn && topic.lab) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(topic.lab.code).then(() => {
            copyBtn.textContent = t('copied');
            setTimeout(() => { copyBtn.textContent = t('copyCode'); }, 1500);
          });
        });
      }

      const completeBtn = document.getElementById('toggle-complete-btn');
      if (completeBtn) {
        completeBtn.addEventListener('click', () => {
          toggleTopicCompleted(topic.id);
          draw();
        });
      }

      const quizContainer = document.getElementById('topic-quiz');
      if (quizContainer && window.DM_QUIZ) {
        window.DM_QUIZ.renderQuizWidget(quizContainer, {
          questions: topic.quiz,
          scoreKey: `topic-${topic.id}`,
          title: `${t('quizTitle')} — ${topic.id}. ${topic.title[lang]}`
        });
      }
    }

    renderChrome('home');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
    initTopicPage();
    if (window.DM_QUIZ) window.DM_QUIZ.initQuizArena();
    if (window.DM_PRACTICE_ENGINE) window.DM_PRACTICE_ENGINE.initPracticePage();
  });
})();
