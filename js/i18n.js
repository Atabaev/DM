// Global i18n, theme, progress state & shared UI chrome
(function () {
  const STORAGE_LANG = 'dm_course_lang';
  const STORAGE_THEME = 'dm_course_theme';
  const STORAGE_COMPLETED = 'dm_course_completed';
  const STORAGE_QUIZ_SCORES = 'dm_course_quiz_scores';

  window.DM_TOPICS = window.DM_TOPICS || [];

  const UI_STRINGS = {
    uz: {
      brandTitle: "Data Mining Kursi",
      brandSub: "MITQ2506 · O'zbekcha & English",
      navHome: "Bosh sahifa",
      navSlides: "Slaydlar (Reveal.js)",
      navQuiz: "Viktorina (Quiz)",
      navPractice: "Amaliy mashqlar",
      heroPill: "MITQ2506 — 6 ECTS — 5-semestr · Interaktiv o'quv platformasi",
      heroTitle1: "Ma'lumotlarni",
      heroTitle2: "Intellektual Tahlil Qilish",
      heroSubtitle: "Ma'ruza slaydlar (Reveal.js), laboratoriya mashg'ulotlari, interaktiv viktorinalar va amaliy masalalar — O'zbek va Ingliz tillarida.",
      heroMeta: "Andijon Davlat Texnika Instituti · Axborot texnologiyalari kafedrasi · 2026-2027 o'quv yili",
      btnStartSlides: "🎬 Slaydlarni ochish (Reveal.js)",
      btnStartQuiz: "📝 Viktorinani boshlash",
      btnPractice: "🧪 Amaliy mashqlar",
      statTopics: "Mavzu",
      statSlides: "Slayd to'plami",
      statQuestions: "Test savoli",
      statPractice: "Amaliy masala",
      progressLabel: "Kurs o'zlashtirish darajasi",
      progressTopicsDone: "mavzu tugallandi",
      topicsHeading: "Kurs mavzulari (1–15)",
      searchPlaceholder: "Mavzu yoki kalit so'z bo'yicha qidirish...",
      hoursUnit: "soat",
      labsUnit: "lab",
      btnStudy: "📖 O'qish",
      btnSlides: "🎬 Slaydlar",
      btnQuiz: "📝 Test",
      prereqTitle: "📋 Zarur bilimlar (Prerequisites)",
      prereqs: ["Python dasturlash", "Ma'lumotlar bazasi (SQL)", "Chiziqli algebra", "Ehtimollik va statistika"],
      rubricTitle: "🎯 Baholash tuzilmasi",
      rubricItems: [
        "Ma'ruza va testlar (Quiz): 30%",
        "Laboratoriya mashg'ulotlari: 35%",
        "Amaliy mashqlar va faollik: 15%",
        "Yakuniy loyiha (Capstone): 20%"
      ],
      sidebarTopics: "Barcha mavzular",
      markDone: "✓ Mavzuni tugallangan deb belgilash",
      markedDone: "✅ Mavzu tugallangan",
      prevTopic: "← Oldingi mavzu",
      nextTopic: "Keyingi mavzu →",
      openSlidesFull: "🎬 To'liq ekranli Reveal.js slaydlarni ochish",
      labTitle: "💻 Laboratoriya mashg'uloti (Python)",
      copyCode: "Nusxalash",
      copied: "Nusxalandi!",
      glossaryTitle: "📖 Asosiy atamalar (Glossary)",
      termCol: "Atama",
      defCol: "Ta'rif",
      quizTitle: "📝 Bilimni tekshirish (Quiz)",
      quizSubtitle: "To'g'ri javobni tanlang va darhol izohli natijani ko'ring.",
      scoreLabel: "Natija",
      resetQuiz: "Qayta boshlash",
      correctMsg: "To'g'ri!",
      wrongMsg: "Noto'g'ri. To'g'ri javob:",
      footerText: "Data Mining O'quv Platformasi (MITQ2506) · Standalone HTML/CSS/JS + Reveal.js CDN"
    },
    en: {
      brandTitle: "Data Mining Course",
      brandSub: "MITQ2506 · Uzbek & English",
      navHome: "Home",
      navSlides: "Slides (Reveal.js)",
      navQuiz: "Quiz Arena",
      navPractice: "Practice Labs",
      heroPill: "MITQ2506 — 6 ECTS — Semester 5 · Interactive Learning Platform",
      heroTitle1: "Data Mining &",
      heroTitle2: "Knowledge Discovery",
      heroSubtitle: "Interactive Reveal.js lecture slides, Python laboratory guides, bilingual quizzes, and hands-on practice calculators in Uzbek & English.",
      heroMeta: "Andijan State Technical Institute · Department of Information Technologies · 2026-2027",
      btnStartSlides: "🎬 Launch Reveal.js Slides",
      btnStartQuiz: "📝 Start Quiz Arena",
      btnPractice: "🧪 Practice & Calculators",
      statTopics: "Topics",
      statSlides: "Slide Decks",
      statQuestions: "Quiz Questions",
      statPractice: "Practice Problems",
      progressLabel: "Course Completion Progress",
      progressTopicsDone: "topics completed",
      topicsHeading: "Course Curriculum (Topics 1–15)",
      searchPlaceholder: "Search topics or keywords...",
      hoursUnit: "hrs",
      labsUnit: "labs",
      btnStudy: "📖 Study",
      btnSlides: "🎬 Slides",
      btnQuiz: "📝 Quiz",
      prereqTitle: "📋 Prerequisites",
      prereqs: ["Python Programming", "Databases (SQL)", "Linear Algebra", "Probability & Statistics"],
      rubricTitle: "🎯 Assessment Breakdown",
      rubricItems: [
        "Lectures & Interactive Quizzes: 30%",
        "Laboratory Assignments: 35%",
        "Practice Exercises & Participation: 15%",
        "Final Capstone Project: 20%"
      ],
      sidebarTopics: "All Topics",
      markDone: "✓ Mark Topic as Completed",
      markedDone: "✅ Topic Completed",
      prevTopic: "← Previous Topic",
      nextTopic: "Next Topic →",
      openSlidesFull: "🎬 Open Full-Screen Reveal.js Slides",
      labTitle: "💻 Laboratory Exercise (Python)",
      copyCode: "Copy Code",
      copied: "Copied!",
      glossaryTitle: "📖 Key Terminology (Glossary)",
      termCol: "Term",
      defCol: "Definition",
      quizTitle: "📝 Knowledge Check (Quiz)",
      quizSubtitle: "Select an answer to see instant feedback and explanation.",
      scoreLabel: "Score",
      resetQuiz: "Reset Quiz",
      correctMsg: "Correct!",
      wrongMsg: "Incorrect. Correct answer:",
      footerText: "Data Mining Learning Platform (MITQ2506) · Standalone HTML/CSS/JS + Reveal.js CDN"
    }
  };

  const memoryStore = {};
  function readStore(key) {
    try { return localStorage.getItem(key); } catch (e) { return memoryStore[key] || null; }
  }
  function writeStore(key, val) {
    memoryStore[key] = val;
    try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
  }

  function getLang() {
    const saved = readStore(STORAGE_LANG);
    return saved === 'en' ? 'en' : 'uz';
  }

  function setLang(lang) {
    writeStore(STORAGE_LANG, lang === 'en' ? 'en' : 'uz');
    document.documentElement.lang = lang === 'en' ? 'en' : 'uz';
    window.dispatchEvent(new CustomEvent('dm:langchange', { detail: { lang } }));
  }

  function getTheme() {
    return readStore(STORAGE_THEME) === 'light' ? 'light' : 'dark';
  }

  function setTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    writeStore(STORAGE_THEME, next);
    document.documentElement.setAttribute('data-theme', next);
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    renderChrome(window.DM_ACTIVE_NAV || 'home');
  }

  function getCompletedTopics() {
    try {
      const raw = readStore(STORAGE_COMPLETED);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleTopicCompleted(topicId) {
    const list = getCompletedTopics();
    const idx = list.indexOf(topicId);
    if (idx >= 0) list.splice(idx, 1);
    else list.push(topicId);
    writeStore(STORAGE_COMPLETED, JSON.stringify(list));
    return list.includes(topicId);
  }

  function saveQuizScore(key, score, total) {
    try {
      const scores = JSON.parse(readStore(STORAGE_QUIZ_SCORES) || '{}');
      const prev = scores[key];
      if (!prev || score >= prev.score) {
        scores[key] = { score, total, updatedAt: new Date().toISOString() };
        writeStore(STORAGE_QUIZ_SCORES, JSON.stringify(scores));
      }
    } catch (e) { /* ignore */ }
  }

  function getQuizScores() {
    try {
      return JSON.parse(readStore(STORAGE_QUIZ_SCORES) || '{}');
    } catch (e) {
      return {};
    }
  }

  function t(key) {
    const lang = getLang();
    return (UI_STRINGS[lang] && UI_STRINGS[lang][key]) || UI_STRINGS.uz[key] || key;
  }

  function renderChrome(activeNav) {
    window.DM_ACTIVE_NAV = activeNav;
    const lang = getLang();
    const theme = getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang;

    const headerEl = document.getElementById('site-header');
    if (headerEl) {
      headerEl.innerHTML = `
        <div class="header-inner">
          <a href="index.html" class="brand">
            <span class="brand-badge">DM</span>
            <span>
              ${t('brandTitle')}
              <span class="brand-sub">${t('brandSub')}</span>
            </span>
          </a>
          <nav class="nav-links" aria-label="Main navigation">
            <a href="index.html" class="nav-link ${activeNav === 'home' ? 'active' : ''}">${t('navHome')}</a>
            <a href="slides.html?topic=1" class="nav-link ${activeNav === 'slides' ? 'active' : ''}">${t('navSlides')}</a>
            <a href="quiz.html" class="nav-link ${activeNav === 'quiz' ? 'active' : ''}">${t('navQuiz')}</a>
            <a href="practice.html" class="nav-link ${activeNav === 'practice' ? 'active' : ''}">${t('navPractice')}</a>
          </nav>
          <div class="header-controls">
            <div class="lang-toggle" role="group" aria-label="Language switch">
              <button type="button" class="lang-btn ${lang === 'uz' ? 'active' : ''}" data-set-lang="uz">O'Z</button>
              <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-set-lang="en">EN</button>
            </div>
            <button type="button" class="icon-btn" id="theme-toggle-btn" title="Theme">
              ${theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      `;

      headerEl.querySelectorAll('[data-set-lang]').forEach((btn) => {
        btn.addEventListener('click', () => {
          setLang(btn.getAttribute('data-set-lang'));
          renderChrome(activeNav);
        });
      });

      const themeBtn = document.getElementById('theme-toggle-btn');
      if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    }

    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.innerHTML = `<div>${t('footerText')}</div>`;
    }
  }

  window.DM_APP = {
    getLang,
    setLang,
    getTheme,
    toggleTheme,
    getCompletedTopics,
    toggleTopicCompleted,
    saveQuizScore,
    getQuizScores,
    t,
    renderChrome
  };
})();
