(function () {
  function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderTable(table, lang) {
    if (!table) return '';
    return `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead><tr>${table.headers[lang].map((h) => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${table.rows[lang].map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
    `;
  }

  function initHomePage() {
    const root = document.getElementById('home-root');
    if (!root) return;

    const { getLang, t, renderChrome, getCompletedTopics, getQuizScores, INDEPENDENT_PROJECTS, REFERENCES } = window.DM_APP;
    const allTopics = window.DM_TOPICS;
    let searchTerm = '';

    function draw() {
      const lang = getLang();
      const completed = getCompletedTopics();
      const scores = getQuizScores();
      const mandatory = allTopics.filter((tp) => !tp.isBonus);
      const bonus = allTopics.filter((tp) => tp.isBonus);

      const doneMand = mandatory.filter((tp) => completed.includes(tp.id)).length;
      const pct = mandatory.length ? Math.round((doneMand / mandatory.length) * 100) : 0;
      const totalExercises = allTopics.reduce((sum, tp) => {
        return sum + (tp.quiz ? tp.quiz.length : 0) + (tp.matching ? tp.matching.length : 0) + (tp.fillGap ? tp.fillGap.length : 0);
      }, 0);

      const matchesSearch = (tp) => {
        if (!searchTerm) return true;
        const q = searchTerm.toLowerCase();
        return (
          (tp.code || '').toLowerCase().includes(q) ||
          (tp.labCode || '').toLowerCase().includes(q) ||
          tp.title.uz.toLowerCase().includes(q) ||
          tp.title.en.toLowerCase().includes(q) ||
          tp.description.uz.toLowerCase().includes(q) ||
          tp.description.en.toLowerCase().includes(q) ||
          tp.keywords.some((k) => k.toLowerCase().includes(q))
        );
      };

      const renderCard = (tp) => {
        const isDone = completed.includes(tp.id);
        const qScore = scores['topic-' + tp.id];
        const tag = tp.code || (tp.isBonus ? `B${tp.id - 15}` : `M${tp.id}`);
        const labTag = tp.labCode || `L${tp.id}`;
        const slideCount = tp.slides.length + (tp.lab && tp.lab.steps ? tp.lab.steps.length : 1) + 4;
        return `
          <article class="topic-card">
            <div class="topic-card-top">
              <div class="topic-num ${isDone ? 'done' : ''}" style="font-size:0.85rem;">${isDone ? '✓' : tag}</div>
              <div>
                <div class="topic-title">${tp.title[lang]}</div>
                <div class="topic-subtitle">${tp.title[lang === 'uz' ? 'en' : 'uz']}</div>
              </div>
            </div>
            <p class="topic-desc">${tp.description[lang]}</p>
            <div class="topic-meta">
              ${tp.isBonus ? `<span class="tag badge-bonus">Bonus</span>` : `<span class="tag">⏱ 2 ${t('hoursUnit')}</span><span class="tag">🧪 ${labTag} (2 ${t('hoursUnit')})</span>`}
              <span class="tag">📊 ${slideCount} slides</span>
              ${qScore ? `<span class="tag" style="color:var(--emerald);">★ ${qScore.score}/${qScore.total}</span>` : ''}
            </div>
            <div class="topic-actions">
              <a href="topic.html?id=${tp.id}" class="btn btn-primary btn-sm">${t('btnStudy')}</a>
              <a href="slides.html?topic=${tp.id}" class="btn btn-secondary btn-sm">${t('btnSlides')}</a>
              ${!tp.isBonus ? `<a href="labs.html?id=${tp.id}" class="btn btn-secondary btn-sm">${t('btnLab')}</a>` : ''}
              <a href="topic.html?id=${tp.id}#topic-quiz" class="btn btn-secondary btn-sm">${t('btnQuiz')}</a>
            </div>
          </article>
        `;
      };

      const filtMand = mandatory.filter(matchesSearch);
      const filtBonus = bonus.filter(matchesSearch);

      root.innerHTML = `
        <section class="hero">
          <div class="pill">${t('heroPill')}</div>
          <h1>${t('heroTitle1')}<br><span>${t('heroTitle2')}</span></h1>
          <p class="hero-subtitle">${t('heroSubtitle')}</p>
          <div class="hero-meta">${t('heroMeta')}</div>

          <div class="hero-actions">
            <a href="slides.html?topic=1" class="btn btn-primary">${t('btnStartSlides')}</a>
            <a href="labs.html?id=1" class="btn btn-secondary">${t('btnOpenLabs')}</a>
            <a href="practice.html" class="btn btn-secondary">${t('btnPractice')}</a>
            <a href="quiz.html" class="btn btn-secondary">${t('btnStartQuiz')}</a>
          </div>

          <div class="stats-grid">
            <div class="stat-card"><div class="stat-value">${mandatory.length}</div><div class="stat-label">${t('statTopics')}</div></div>
            <div class="stat-card"><div class="stat-value">${mandatory.length}</div><div class="stat-label">${t('statLabs')}</div></div>
            <div class="stat-card"><div class="stat-value">7</div><div class="stat-label">${t('statPractice')}</div></div>
            <div class="stat-card"><div class="stat-value">${totalExercises}</div><div class="stat-label">${t('statQuestions')}</div></div>
          </div>

          <div class="progress-box">
            <div class="progress-header">
              <span>${t('progressLabel')}</span>
              <span style="color:var(--accent); font-family:var(--font-mono);">${doneMand}/${mandatory.length} ${t('progressTopicsDone')} (${pct}%)</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          </div>
        </section>

        <div class="section-header">
          <h2 class="section-title">${t('topicsHeading')}</h2>
          <input type="search" id="topic-search" class="search-input" placeholder="${t('searchPlaceholder')}" value="${escapeHtml(searchTerm)}">
        </div>

        <div class="topics-grid">${filtMand.map(renderCard).join('')}</div>

        ${filtBonus.length ? `
          <div class="section-header"><h2 class="section-title" style="color:#c084fc;">✨ ${t('bonusHeading')}</h2></div>
          <div class="topics-grid">${filtBonus.map(renderCard).join('')}</div>
        ` : ''}

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

        <div class="panel" style="margin-top:1.5rem;">
          <h3>${t('indepTitle')}</h3>
          <p style="font-size:0.84rem; color:var(--accent); margin-top:0;">${t('indepNote')}</p>
          <div class="data-table-wrap">
            <table class="data-table">
              <thead><tr><th>#</th><th>${lang === 'uz' ? 'Topshiriq mavzusi' : 'Independent Project'}</th><th>${t('hoursUnit')}</th></tr></thead>
              <tbody>
                ${INDEPENDENT_PROJECTS.map((p) => `
                  <tr>
                    <td><strong>${p.id}</strong></td>
                    <td>${p[lang]} ${p.group ? `<span class="badge badge-topic" style="margin-left:6px;">${lang === 'uz' ? 'Guruh (1–3)' : 'Team'}</span>` : ''}</td>
                    <td>${p.hrs}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel" style="margin-top:1.5rem;">
          <h3>${t('refsTitle')}</h3>
          <ul style="margin:0; padding-left:1.2rem; color:var(--text-secondary); font-size:0.86rem;">
            ${REFERENCES.map((r) => `<li style="margin-bottom:0.35rem;">${r}</li>`).join('')}
          </ul>
        </div>
      `;

      const searchInput = document.getElementById('topic-search');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          searchTerm = e.target.value;
          const pos = e.target.selectionStart;
          draw();
          const next = document.getElementById('topic-search');
          if (next) { next.focus(); next.setSelectionRange(pos, pos); }
        });
      }
    }

    renderChrome('home');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  function renderSidebar(allTopics, completed, activeId, mode) {
    const { t, getLang } = window.DM_APP;
    const lang = getLang();
    const mandatory = allTopics.filter((tp) => !tp.isBonus);
    const bonus = allTopics.filter((tp) => tp.isBonus);

    const itemLink = (tp) => {
      const code = mode === 'labs' ? `L${tp.id}` : (tp.code || (tp.isBonus ? `B${tp.id - 15}` : `M${tp.id}`));
      const href = mode === 'labs' ? `labs.html?id=${tp.id}` : `topic.html?id=${tp.id}`;
      const title = mode === 'labs' && tp.lab ? tp.lab.title[lang] : tp.title[lang];
      return `
        <a href="${href}" class="sidebar-item ${tp.id === activeId ? 'active' : ''}">
          <span style="font-weight:700; min-width:30px;">${completed.includes(tp.id) ? '✓' : code}</span>
          <span>${title}</span>
        </a>`;
    };

    if (mode === 'labs') {
      return `
        <aside class="sidebar">
          <div class="sidebar-title">${t('sidebarLabs')}</div>
          ${mandatory.map(itemLink).join('')}
        </aside>`;
    }

    return `
      <aside class="sidebar">
        <div class="sidebar-title">${t('sidebarTopics')}</div>
        ${mandatory.map(itemLink).join('')}
        ${bonus.length ? `<div class="sidebar-divider">${t('sidebarBonus')}</div>${bonus.map(itemLink).join('')}` : ''}
      </aside>`;
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
      const tag = topic.code || (topic.isBonus ? `B${topic.id - 15}` : `M${topic.id}`);

      document.title = `${tag}. ${topic.title[lang]} — ${t('brandTitle')}`;

      root.innerHTML = `
        <div class="topic-layout">
          ${renderSidebar(topics, completed, topic.id, 'topic')}

          <div>
            <div class="hero" style="padding:1.6rem; margin-bottom:1.5rem;">
              <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:0.75rem; align-items:center; margin-bottom:0.75rem;">
                <span class="pill" style="margin:0;">${topic.isBonus ? `Bonus · ${tag}` : `Ma'ruza / Lecture ${tag}`}</span>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                  ${!topic.isBonus ? `<span class="tag">⏱ 2 ${t('hoursUnit')}</span><span class="tag">🧪 L${topic.id}</span>` : `<span class="badge badge-bonus">Bonus</span>`}
                </div>
              </div>
              <h1 style="font-size:1.85rem; margin-bottom:0.35rem;">${topic.title[lang]}</h1>
              <div style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">${topic.title[lang === 'uz' ? 'en' : 'uz']}</div>
              <p style="margin:0 0 1.2rem; color:var(--text-secondary);">${topic.description[lang]}</p>

              <div style="display:flex; flex-wrap:wrap; gap:0.65rem;">
                <a href="slides.html?topic=${topic.id}" class="btn btn-primary btn-sm">${t('openSlidesFull')}</a>
                ${!topic.isBonus ? `<a href="labs.html?id=${topic.id}" class="btn btn-secondary btn-sm">${t('openLabPage')}${topic.id})</a>` : ''}
                <button type="button" id="toggle-complete-btn" class="btn btn-sm ${isDone ? 'btn-emerald' : 'btn-secondary'}">
                  ${isDone ? t('markedDone') : t('markDone')}
                </button>
              </div>
            </div>

            <article class="lecture-card" id="lecture-article">
              ${topic.sections.map((sec) => `
                <section class="lecture-section">
                  <h2>${sec.heading[lang]}</h2>
                  <div>${sec.bodyHtml[lang]}</div>
                  ${sec.latex ? `<div class="formula-box">$$${sec.latex}$$</div>` : (sec.formula ? `<div class="formula-box">${sec.formula}</div>` : '')}
                  ${renderTable(sec.table, lang)}
                  ${sec.widget ? `<div class="widget-wrap" data-widget="${sec.widget}"></div>` : ''}
                  ${sec.callout ? `<div class="callout ${sec.callout.type === 'warn' ? 'warn' : ''}">${sec.callout[lang]}</div>` : ''}
                  ${sec.discussion ? `
                    <div class="discussion-box">
                      <div><strong>💬 ${lang === 'uz' ? 'Tekshirish savoli:' : 'Self-Check Question:'}</strong> ${sec.discussion.q[lang]}</div>
                      <button type="button" class="btn btn-primary btn-sm reveal-topic-ans" style="margin-top:0.55rem;">${lang === 'uz' ? 'Javobni ko\'rsatish' : 'Reveal Answer'}</button>
                      <div class="collapsible-body" style="margin-top:0.6rem;">${sec.discussion.a[lang]}</div>
                    </div>` : ''}
                </section>
              `).join('')}

              ${topic.glossary && topic.glossary.length ? `
                <section class="lecture-section">
                  <h2>${t('glossaryTitle')}</h2>
                  <div class="data-table-wrap">
                    <table class="data-table">
                      <thead><tr><th>O'zbekcha</th><th>English</th><th>${t('defCol')}</th></tr></thead>
                      <tbody>
                        ${topic.glossary.map((g) => `<tr><td><strong>${g.uz}</strong></td><td>${g.en}</td><td>${lang === 'uz' ? g.defUz : g.defEn}</td></tr>`).join('')}
                      </tbody>
                    </table>
                  </div>
                </section>` : ''}

              ${topic.lab ? `
                <section class="lecture-section">
                  <h2>${t('labTitle')}</h2>
                  <h3 style="margin-top:0.25rem;">${topic.lab.title[lang]}</h3>
                  ${topic.lab.objective ? `<div class="callout"><strong>🎯 ${lang === 'uz' ? 'Maqsad:' : 'Objective:'}</strong> ${topic.lab.objective[lang]}</div>` : ''}
                  ${topic.lab.steps ? topic.lab.steps.map((st, idx) => `
                    <div class="lab-step">
                      <div class="lab-step-title">${lang === 'uz' ? `${idx + 1}-bosqich` : `Step ${idx + 1}`}: ${st.title[lang]}</div>
                      <p style="margin:0.25rem 0 0.65rem; font-size:0.9rem; color:var(--text-secondary);">${st.desc[lang]}</p>
                      <div class="code-wrap" style="margin:0;">
                        <div class="code-header">
                          <span>python · lab_${topic.id}_step${idx + 1}.py</span>
                          <button type="button" class="btn btn-secondary btn-sm copy-step-btn" data-step-idx="${idx}">${t('copyCode')}</button>
                        </div>
                        <pre><code>${escapeHtml(st.code)}</code></pre>
                      </div>
                    </div>`).join('') : ''}
                  ${topic.lab.variants ? `
                    <h3>${lang === 'uz' ? '📝 Mustaqil topshiriq variantlari' : '📝 Student Variant Assignments'}</h3>
                    <ul>${topic.lab.variants[lang].map((v) => `<li>${v}</li>`).join('')}</ul>` : ''}
                </section>` : ''}
            </article>

            <div id="topic-quiz"></div>
            <div id="topic-matching"></div>
            <div id="topic-fillgap"></div>

            <div style="display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-top:1.5rem;">
              ${prev ? `<a href="topic.html?id=${prev.id}" class="btn btn-secondary">${t('prevTopic')}: ${prev.code || 'M' + prev.id}</a>` : '<span></span>'}
              ${next ? `<a href="topic.html?id=${next.id}" class="btn btn-primary">${t('nextTopic')}: ${next.code || 'B' + (next.id - 15)}</a>` : ''}
            </div>
          </div>
        </div>
      `;

      root.querySelectorAll('[data-widget]').forEach((slot) => {
        if (window.DM_WIDGETS) window.DM_WIDGETS.renderWidget(slot, slot.getAttribute('data-widget'));
      });
      root.querySelectorAll('.reveal-topic-ans').forEach((btn) => {
        btn.addEventListener('click', () => {
          const box = btn.nextElementSibling;
          if (box) box.classList.toggle('open');
        });
      });
      root.querySelectorAll('.copy-step-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-step-idx'));
          navigator.clipboard.writeText(topic.lab.steps[idx].code).then(() => {
            btn.textContent = t('copied');
            setTimeout(() => { btn.textContent = t('copyCode'); }, 1500);
          });
        });
      });

      const completeBtn = document.getElementById('toggle-complete-btn');
      if (completeBtn) completeBtn.addEventListener('click', () => { toggleTopicCompleted(topic.id); draw(); });

      if (window.DM_QUIZ) {
        window.DM_QUIZ.renderQuizWidget(document.getElementById('topic-quiz'), {
          questions: topic.quiz,
          scoreKey: `topic-${topic.id}`,
          title: `${t('quizTitle')} (${tag})`
        });
        if (topic.matching) window.DM_QUIZ.renderMatchingWidget(document.getElementById('topic-matching'), topic.matching);
        if (topic.fillGap) window.DM_QUIZ.renderFillGapWidget(document.getElementById('topic-fillgap'), topic.fillGap);
      }

      const articleEl = document.getElementById('lecture-article');
      if (articleEl && window.renderMathInElement) {
        window.renderMathInElement(articleEl, {
          delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
          throwOnError: false
        });
      }
    }

    renderChrome('home');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  function initLabsPage() {
    const root = document.getElementById('labs-root');
    if (!root) return;

    const { getLang, t, renderChrome, getCompletedTopics } = window.DM_APP;
    const mandatory = window.DM_TOPICS.filter((tp) => !tp.isBonus);
    const params = new URLSearchParams(window.location.search);
    const labId = Math.min(mandatory.length, Math.max(1, Number(params.get('id')) || 1));
    const topic = mandatory.find((tp) => tp.id === labId) || mandatory[0];

    function draw() {
      const lang = getLang();
      const completed = getCompletedTopics();
      const prev = mandatory.find((tp) => tp.id === topic.id - 1);
      const next = mandatory.find((tp) => tp.id === topic.id + 1);
      const lab = topic.lab;

      document.title = `L${topic.id}. ${lab ? lab.title[lang] : topic.title[lang]} — ${t('brandTitle')}`;

      root.innerHTML = `
        <div class="topic-layout">
          ${renderSidebar(window.DM_TOPICS, completed, topic.id, 'labs')}
          <div>
            <div class="hero" style="padding:1.6rem; margin-bottom:1.5rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
                <span class="pill" style="margin:0;">🧪 Laboratoriya L${topic.id} (2 soat) · Ma'ruza M${topic.id}</span>
                <div style="display:flex; gap:0.5rem;">
                  <a href="topic.html?id=${topic.id}" class="btn btn-secondary btn-sm">📖 M${topic.id} Nazariya</a>
                  <a href="slides.html?topic=${topic.id}" class="btn btn-primary btn-sm">🎬 M${topic.id} Slaydlar</a>
                </div>
              </div>
              <h1 style="font-size:1.8rem; margin-bottom:0.4rem;">${lab ? lab.title[lang] : topic.title[lang]}</h1>
              ${lab && lab.objective ? `<p style="margin:0; color:var(--text-secondary);">${lab.objective[lang]}</p>` : ''}
            </div>

            <div class="lecture-card">
              ${lab && lab.steps ? lab.steps.map((st, idx) => `
                <div class="lab-step">
                  <div class="lab-step-title">${lang === 'uz' ? `${idx + 1}-bosqich` : `Step ${idx + 1}`}: ${st.title[lang]}</div>
                  <p style="margin:0.25rem 0 0.65rem; font-size:0.9rem; color:var(--text-secondary);">${st.desc[lang]}</p>
                  <div class="code-wrap" style="margin:0;">
                    <div class="code-header">
                      <span>python · L${topic.id}_step${idx + 1}.py</span>
                      <button type="button" class="btn btn-secondary btn-sm copy-lab-step" data-idx="${idx}">${t('copyCode')}</button>
                    </div>
                    <pre><code>${escapeHtml(st.code)}</code></pre>
                  </div>
                </div>
              `).join('') : ''}

              ${lab && lab.variants ? `
                <div class="panel" style="margin-top:1.25rem;">
                  <h3>${lang === 'uz' ? '📝 Mustaqil topshiriq variantlari (Talabalar uchun)' : '📝 Student Variant Assignments'}</h3>
                  <ul style="margin:0; padding-left:1.2rem;">
                    ${lab.variants[lang].map((v) => `<li style="margin-bottom:0.4rem;">${v}</li>`).join('')}
                  </ul>
                </div>` : ''}
            </div>

            <div style="display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-top:1.5rem;">
              ${prev ? `<a href="labs.html?id=${prev.id}" class="btn btn-secondary">← L${prev.id}</a>` : '<span></span>'}
              ${next ? `<a href="labs.html?id=${next.id}" class="btn btn-primary">L${next.id} →</a>` : ''}
            </div>
          </div>
        </div>
      `;

      root.querySelectorAll('.copy-lab-step').forEach((btn) => {
        btn.addEventListener('click', () => {
          const code = lab.steps[Number(btn.dataset.idx)].code;
          navigator.clipboard.writeText(code).then(() => {
            btn.textContent = t('copied');
            setTimeout(() => { btn.textContent = t('copyCode'); }, 1500);
          });
        });
      });
    }

    renderChrome('labs');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
    initTopicPage();
    initLabsPage();
    if (window.DM_QUIZ) window.DM_QUIZ.initQuizArena();
    if (window.DM_PRACTICE_ENGINE) window.DM_PRACTICE_ENGINE.initPracticePage();
  });
})();
