// Global i18n, theme, progress state & official MITQ2506 syllabus metadata
(function () {
  const STORAGE_LANG = 'dm_course_lang';
  const STORAGE_THEME = 'dm_course_theme';
  const STORAGE_COMPLETED = 'dm_course_completed';
  const STORAGE_QUIZ_SCORES = 'dm_course_quiz_scores';

  window.DM_TOPICS = window.DM_TOPICS || [];

  const UI_STRINGS = {
    uz: {
      brandTitle: "Data Mining Kursi",
      brandSub: "MITQ2506 · ADTI · O'zbekcha & English",
      navHome: "Bosh sahifa",
      navSlides: "Slaydlar (Reveal.js)",
      navLabs: "Laboratoriyalar (L1–L15)",
      navPractice: "Amaliy (A1–A7)",
      navQuiz: "Viktorina & Mashqlar",
      heroPill: "MITQ2506 — 6 ECTS — 5-semestr · 180 soat (30M · 14A · 30L · 106MT)",
      heroTitle1: "Ma'lumotlarni",
      heroTitle2: "Intellektual Tahlil Qilish",
      heroSubtitle: "Andijon Davlat Texnika Instituti 2026-yil o'quv dasturi asosida: 15 ta ma'ruza (M1–M15), 15 ta laboratoriya (L1–L15), 7 ta amaliy mashg'ulot (A1–A7) va Tan darsligi asosidagi interaktiv slaydlar.",
      heroMeta: "Tuzuvchilar: S. Atajonova, O. Atabayev · Axborot texnologiyalari kafedrasi · 2026-2027 o'quv yili",
      btnStartSlides: "🎬 M1 Slaydlarni ochish",
      btnOpenLabs: "🧪 Laboratoriyalar (L1–L15)",
      btnPractice: "✏️ Amaliy mashg'ulotlar (A1–A7)",
      btnStartQuiz: "📝 Testlar, Moslashtirish & Bo'shliq",
      statTopics: "Majburiy Ma'ruza (M1–M15)",
      statLabs: "Laboratoriya (L1–L15)",
      statPractice: "Amaliy (A1–A7)",
      statQuestions: "Interaktiv Mashqlar",
      progressLabel: "Majburiy dastur o'zlashtirish darajasi (M1–M15)",
      progressTopicsDone: "mavzu tugallandi",
      topicsHeading: "Majburiy Ma'ruza va Laboratoriyalar (M1–M15 / L1–L15)",
      bonusHeading: "Qo'shimcha Boblar / Bonus Modullar (B1–B4)",
      searchPlaceholder: "Mavzu, L#, yoki kalit so'z bo'yicha qidirish...",
      hoursUnit: "soat",
      labsUnit: "lab",
      btnStudy: "📖 Ma'ruza (M)",
      btnSlides: "🎬 Slayd",
      btnLab: "🧪 Lab (L)",
      btnQuiz: "📝 Mashqlar",
      prereqTitle: "📋 Zarur boshlang'ich bilimlar",
      prereqs: [
        "(DAS1110) Dasturlash 1, 2 (Python)",
        "(MAB1306) Ma'lumotlar bazasi (SQL)",
        "(CHA1306) Chiziqli algebra",
        "(EVS1406) Ehtimollik va statistika"
      ],
      rubricTitle: "🎯 Baholash mezoni (HEMIS — 100 ball)",
      rubricItems: [
        "Dastlabki baholash: 50 ball (Ma'ruza, Amaliy A1–A7, Lab L1–L15, Mustaqil ta'lim)",
        "Asosiy baholash (Yakuniy nazorat): 50 ball",
        "5 baho (A'lo): 90–100 ball | 4 baho (Yaxshi): 70–89.9 ball",
        "3 baho (Qoniqarli): 60–69.9 ball | 2 baho: 0–59.9 ball"
      ],
      indepTitle: "📚 Mustaqil ta'lim topshiriqlari (1–11, jami 104 soat)",
      indepNote: "Izoh: 1–3-topshiriqlar kichik guruhlarda hamkorlikda (kooperativ) bajariladi.",
      refsTitle: "📖 Asosiy adabiyotlar va Xorijiy manbalar",
      sidebarTopics: "Majburiy (M1–M15)",
      sidebarBonus: "Bonus Boblar (B1–B4)",
      sidebarLabs: "Laboratoriyalar (L1–L15)",
      markDone: "✓ Mavzuni tugallangan deb belgilash",
      markedDone: "✅ Mavzu tugallangan",
      prevTopic: "← Oldingi mavzu",
      nextTopic: "Keyingi mavzu →",
      openSlidesFull: "🎬 Reveal.js Slaydlarni ochish",
      openLabPage: "🧪 Alohida Lab sahifasi (L",
      labTitle: "💻 Laboratoriya mashg'uloti (Python)",
      copyCode: "Nusxalash",
      copied: "Nusxalandi!",
      glossaryTitle: "📖 Asosiy atamalar (Glossary)",
      termCol: "Atama",
      defCol: "Ta'rif",
      quizTitle: "📝 1-qism: Test savollari (Multiple Choice)",
      quizSubtitle: "Barcha savollarning javobi yuqoridagi nazariy ma'ruza matnida berilgan.",
      matchTitle: "🔗 2-qism: Moslashtirish mashqi (Matching)",
      matchSubtitle: "Chap ustundagi tushunchani tanlang va o'ng ustundan uning mos ta'rifini bosing.",
      gapTitle: "✍️ 3-qism: Bo'shliqni to'ldiring (Fill in the Gap)",
      gapSubtitle: "Nazariya asosida bo'sh joylarga mos atama yoki qiymatni yozing va tekshiring.",
      checkGaps: "Tekshirish",
      scoreLabel: "Natija",
      resetQuiz: "Qayta boshlash",
      correctMsg: "To'g'ri!",
      wrongMsg: "Noto'g'ri. To'g'ri javob:",
      footerText: "ADTI · MITQ2506 Data Mining O'quv Platformasi (Tan darsligi va 2026 o'quv dasturi asosida)"
    },
    en: {
      brandTitle: "Data Mining Course",
      brandSub: "MITQ2506 · ASTI · Uzbek & English",
      navHome: "Home",
      navSlides: "Slides (Reveal.js)",
      navLabs: "Labs (L1–L15)",
      navPractice: "Practice (A1–A7)",
      navQuiz: "Quiz & Exercises",
      heroPill: "MITQ2506 — 6 ECTS — Semester 5 · 180 hrs (30M · 14A · 30L · 106MT)",
      heroTitle1: "Data Mining &",
      heroTitle2: "Knowledge Discovery",
      heroSubtitle: "1-to-1 aligned with the 2026 ASTI Syllabus & Tan's Introduction to Data Mining: 15 Lectures (M1–M15), 15 Labs (L1–L15), 7 Practice Seminars (A1–A7), interactive Reveal.js slides, Matching & Fill-the-Gap exercises.",
      heroMeta: "Authors: S. Atajonova, O. Atabayev · Department of Information Technologies · 2026-2027",
      btnStartSlides: "🎬 Launch M1 Slides",
      btnOpenLabs: "🧪 Lab Pages (L1–L15)",
      btnPractice: "✏️ Practice Seminars (A1–A7)",
      btnStartQuiz: "📝 Quiz, Matching & Fill-Gap",
      statTopics: "Mandatory Lectures (M1–M15)",
      statLabs: "Lab Modules (L1–L15)",
      statPractice: "Practice Seminars (A1–A7)",
      statQuestions: "Interactive Exercises",
      progressLabel: "Mandatory Syllabus Progress (M1–M15)",
      progressTopicsDone: "topics completed",
      topicsHeading: "Mandatory Lectures & Labs (M1–M15 / L1–L15)",
      bonusHeading: "Bonus / Extended Chapters (B1–B4)",
      searchPlaceholder: "Search topics, L#, or keywords...",
      hoursUnit: "hrs",
      labsUnit: "lab",
      btnStudy: "📖 Lecture (M)",
      btnSlides: "🎬 Slides",
      btnLab: "🧪 Lab (L)",
      btnQuiz: "📝 Exercises",
      prereqTitle: "📋 Prerequisites",
      prereqs: [
        "(DAS1110) Programming 1, 2 (Python)",
        "(MAB1306) Databases (SQL)",
        "(CHA1306) Linear Algebra",
        "(EVS1406) Probability & Statistics"
      ],
      rubricTitle: "🎯 Grading Criteria (HEMIS — 100 pts)",
      rubricItems: [
        "Initial Assessment (Dastlabki): 50 pts (Lectures, A1–A7, L1–L15, Self-Study)",
        "Final Assessment (Asosiy): 50 pts (Written / Test Exam)",
        "Grade 5: 90–100 pts | Grade 4: 70–89.9 pts",
        "Grade 3: 60–69.9 pts | Grade 2 (Fail): 0–59.9 pts"
      ],
      indepTitle: "📚 Independent Study Projects (1–11, 104 hrs)",
      indepNote: "Note: Projects 1–3 are designed for cooperative small-group teamwork.",
      refsTitle: "📖 Core Textbooks & Syllabus References",
      sidebarTopics: "Mandatory (M1–M15)",
      sidebarBonus: "Bonus Chapters (B1–B4)",
      sidebarLabs: "Lab Modules (L1–L15)",
      markDone: "✓ Mark Topic as Completed",
      markedDone: "✅ Topic Completed",
      prevTopic: "← Previous",
      nextTopic: "Next →",
      openSlidesFull: "🎬 Open Reveal.js Slides",
      openLabPage: "🧪 Dedicated Lab Page (L",
      labTitle: "💻 Laboratory Exercise (Python)",
      copyCode: "Copy Code",
      copied: "Copied!",
      glossaryTitle: "📖 Key Terminology (Glossary)",
      termCol: "Term",
      defCol: "Definition",
      quizTitle: "📝 Part 1: Multiple-Choice Quiz",
      quizSubtitle: "Every answer is explicitly covered in the lecture theory section above.",
      matchTitle: "🔗 Part 2: Matching Exercise",
      matchSubtitle: "Click an item on the left, then click its matching description on the right.",
      gapTitle: "✍️ Part 3: Fill in the Gap",
      gapSubtitle: "Type the missing concept or value from the lecture theory and click Check.",
      checkGaps: "Check Answers",
      scoreLabel: "Score",
      resetQuiz: "Reset",
      correctMsg: "Correct!",
      wrongMsg: "Incorrect. Correct answer:",
      footerText: "ASTI · MITQ2506 Data Mining Learning Platform (Tan Textbook & 2026 Syllabus)"
    }
  };

  const INDEPENDENT_PROJECTS = [
    { id: 1, hrs: 10, group: true, uz: "Mijozlar segmentatsiyasi va xulq-atvor tahlili (RFM + Klasterlash)", en: "Customer Segmentation & Behavioral Analysis (RFM Clustering)" },
    { id: 2, hrs: 10, group: true, uz: "Elektron tijoratda tavsiya etish tizimi (Market Basket: Apriori/FP-Growth)", en: "E-Commerce Recommender System (Apriori / FP-Growth)" },
    { id: 3, hrs: 10, group: true, uz: "Bank tranzaksiyalarida firibgarlikni aniqlash (Isolation Forest / LOF)", en: "Bank Fraud Detection on Imbalanced Data (Isolation Forest / LOF)" },
    { id: 4, hrs: 10, group: false, uz: "Tibbiy tashxisni bashorat qilish tizimi (Feature Importance, SVM/RF)", en: "Medical Diagnosis Prediction (Feature Selection, SVM / Random Forest)" },
    { id: 5, hrs: 10, group: false, uz: "Ijtimoiy tarmoqlar matnlarini hissiy tahlil qilish (TF-IDF / Word2Vec)", en: "Social Media Sentiment Analysis (TF-IDF / Word2Vec)" },
    { id: 6, hrs: 10, group: false, uz: "Talabni bashorat qilish (Time Series trend va mavsumiylik)", en: "Retail Demand Forecasting (Time Series Trend & Seasonality)" },
    { id: 7, hrs: 10, group: false, uz: "Korxona xodimlarining ishdan ketish ehtimoli (HR Churn Prediction)", en: "Employee Attrition / HR Churn Prediction" },
    { id: 8, hrs: 10, group: false, uz: "Ko'chmas mulk narxlarini bashorat qilish (Regressiya, MSE/MAE)", en: "Real Estate Price Prediction (Regression, MSE / MAE)" },
    { id: 9, hrs: 10, group: false, uz: "Talabalarning o'zlashtirish darajasini bashorat qilish (At-risk talabalar)", en: "Student Academic Performance & At-Risk Prediction" },
    { id: 10, hrs: 10, group: false, uz: "Katta ma'lumotlar oqimida vizualizatsiya (PowerBI / Plotly Dash)", en: "Big Data Streaming Visualization Dashboard (PowerBI / Plotly Dash)" },
    { id: 11, hrs: 4, group: false, uz: "Avtomatik hujjatlarni tasniflash tizimi (TF-IDF / LDA mavzu modellashtirish)", en: "Automated Document Classification & Topic Modeling (LDA)" }
  ];

  const REFERENCES = [
    "Tan P.-N., Steinbach M., Karpatne A., Kumar V., \"Introduction to Data Mining\" (2nd Ed.) — Main Course Textbook (umn.edu/~kumar001/dmbook)",
    "Han J., Pei J., Tong H., \"Data Mining: Concepts and Techniques\" (4th Ed.), Morgan Kaufmann, 2023",
    "Leskovec J., Rajaraman A., Ullman J.D., \"Mining of Massive Datasets\", Cambridge Univ. Press / Stanford CS246, 2019",
    "Charu C. Aggarwal, \"Data Mining: The Textbook\", Springer / UIUC CS 412, 2015",
    "Witten I.H., Frank E., \"Data Mining: Practical ML Tools and Techniques\", Purdue CS 490D",
    "Xazratov F.X., Atamuradov J.J., Eshonqulov H.I., \"Big data va ma'lumotlar tahlili\", Buxoro, 2021",
    "O'zR Prezidenti qaror va farmonlari: PQ-4996 (2021), PQ-358 (2024), PF-189 (2025), PQ-320 (2025)"
  ];

  const memoryStore = {};
  function readStore(key) {
    try { return localStorage.getItem(key); } catch (e) { return memoryStore[key] || null; }
  }
  function writeStore(key, val) {
    memoryStore[key] = val;
    try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
  }

  function getLang() {
    return readStore(STORAGE_LANG) === 'en' ? 'en' : 'uz';
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
    } catch (e) { return []; }
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
    try { return JSON.parse(readStore(STORAGE_QUIZ_SCORES) || '{}'); } catch (e) { return {}; }
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
            <a href="labs.html?id=1" class="nav-link ${activeNav === 'labs' ? 'active' : ''}">${t('navLabs')}</a>
            <a href="practice.html" class="nav-link ${activeNav === 'practice' ? 'active' : ''}">${t('navPractice')}</a>
            <a href="quiz.html" class="nav-link ${activeNav === 'quiz' ? 'active' : ''}">${t('navQuiz')}</a>
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
    if (footerEl) footerEl.innerHTML = `<div>${t('footerText')}</div>`;
  }

  window.DM_APP = {
    getLang, setLang, getTheme, toggleTheme,
    getCompletedTopics, toggleTopicCompleted,
    saveQuizScore, getQuizScores, t, renderChrome,
    INDEPENDENT_PROJECTS, REFERENCES
  };
})();
