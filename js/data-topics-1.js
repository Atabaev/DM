window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== TOPIC 1 ====================
  {
    id: 1,
    slug: '01-kirish',
    hours: 2,
    labs: 1,
    keywords: ['Data Mining', 'KDD', 'CRISP-DM', 'Classification', 'Clustering', 'Regression'],
    title: {
      uz: "Ma'lumotlarni intellektual tahlil qilish va KDD jarayoni",
      en: "Introduction to Data Mining & KDD Process"
    },
    description: {
      uz: "Data Mining tushunchasi, 4 ta asosiy mezon, KDD 7 bosqichi, CRISP-DM standarti, SQL/Statistika farqlari va masalalar tasnifi.",
      en: "Core concepts of Data Mining, 4 validity criteria, 7-stage KDD pipeline, CRISP-DM standard, and task taxonomy."
    },
    sections: [
      {
        heading: { uz: "1.1. Ma'lumotlar portlashi va DRIP paradoksi", en: "1.1. Data Explosion & the DRIP Paradox" },
        bodyHtml: {
          uz: "<p>Zamonaviy raqamli iqtisodiyotda har bir bank o'tkazmasi, tibbiy tahlil, GPS signal, IoT sensor va veb-klik log bazalariga yoziladi. Biroq katta hajmdagi jadvallarga ega bo'lish ulardan avtomatik foyda olishni anglatmaydi. Fanda bu holat <strong>DRIP — \"Data Rich, Information Poor\"</strong> (ma'lumotga boy, ammo bilimi kam) paradoksi deb ataladi.</p><p><strong>Data Mining</strong> (Ma'lumotlarni intellektual tahlil qilish) — katta hajmdagi ma'lumotlardan inson uchun oldindan noma'lum bo'lgan, amaliy ahamiyatga ega, trivial bo'lmagan va tushunarli <strong>yashirin naqshlarni (patterns)</strong> kashf etish jarayonidir.</p><ul><li><strong>1. Yangi (Novel):</strong> Mutaxassis avvaldan bilgan oddiy faktni emas, kutilmagan qonuniyatni ochishi kerak.</li><li><strong>2. Trivial bo'lmagan (Non-trivial):</strong> Oddiy <code>SELECT COUNT(*) GROUP BY</code> so'rovi Data Mining emas.</li><li><strong>3. Amalda foydali (Actionable):</strong> Biznes yoki ilmiy qaror qabul qilishga xizmat qilishi zarur.</li><li><strong>4. Tushunarli (Understandable):</strong> Mutaxassis naqshning mantiqiy asosini tekshira olishi kerak.</li></ul>",
          en: "<p>Every banking transaction, medical lab result, IoT sensor ping, and clickstream event feeds massive databases. Yet storing terabytes does not automatically produce insight—known as the <strong>DRIP (\"Data Rich, Information Poor\")</strong> paradox.</p><p><strong>Data Mining</strong> is the non-trivial extraction of implicit, previously unknown, actionable, and human-understandable <strong>patterns</strong> from large datasets.</p><ul><li><strong>1. Novel:</strong> Uncovers patterns unknown beforehand.</li><li><strong>2. Non-trivial:</strong> Goes beyond basic SQL <code>GROUP BY</code> aggregations.</li><li><strong>3. Actionable:</strong> Drives concrete business or clinical decisions.</li><li><strong>4. Understandable:</strong> Domain experts can interpret and validate findings.</li></ul>"
        },
        callout: {
          type: 'warn',
          uz: "<strong>Case Study (Google Flu Trends, 2008–2015):</strong> Google \"isitma\", \"yo'tal\" kabi qidiruv so'rovlari chastotasi orqali gripp to'lqinini sog'liqni saqlash markazlaridan 1–2 hafta oldin bashorat qildi. Lekin 2015-yilda model epidemiyani 2 baravar oshirib yubordi — chunki OAV vahimasi odamlarning qidiruv xulqini o'zgartirgan edi. <em>Xulosa:</em> Korrelyatsiya sababiyat emas; modellar doimiy validatsiyani talab qiladi!",
          en: "<strong>Case Study (Google Flu Trends, 2008–2015):</strong> Google predicted flu spikes 1–2 weeks ahead of CDC reports via search logs. By 2015 it overestimated outbreaks by 2x because media panic altered search behavior. <em>Lesson:</em> Correlation is not causation—models require continuous validation."
        }
      },
      {
        heading: { uz: "1.2. KDD jarayonining 7 bosqichi (Fayyad, 1996)", en: "1.2. The 7 Stages of KDD (Fayyad et al., 1996)" },
        bodyHtml: {
          uz: "<p>Talabalar ko'pincha <strong>KDD (Knowledge Discovery in Databases)</strong> va <strong>Data Mining</strong> atamalarini aralashtirib yuborishadi. <strong>KDD</strong> — xom ma'lumot yig'ishdan boshlab tayyor bilimgacha bo'lgan butun konveyer; <strong>Data Mining</strong> esa shu konveyerning 5-bosqichidir.</p><p>Muhim jihati: KDD <strong>chiziqli emas</strong>! Baholash bosqichida natija yomon chiqsa, 2- yoki 3-bosqichga qaytib ma'lumotni qayta tozalashga to'g'ri keladi.</p>",
          en: "<p><strong>KDD</strong> encompasses the entire iterative knowledge pipeline from raw sources to deployed insights, whereas <strong>Data Mining</strong> is strictly stage 5 (applying pattern-discovery algorithms). If evaluation fails in stage 6, analysts loop back to selection or cleaning.</p>"
        },
        widget: 'kdd-pipeline',
        table: {
          headers: { uz: ["#", "Bosqich", "Inglizcha", "Asosiy natija (Artefakt)"], en: ["#", "Stage", "Focus", "Key Deliverable"] },
          rows: {
            uz: [
              ["1", "Ma'lumot to'plash", "Data Collection", "Integratsiyalashgan xom ma'lumotlar ombori"],
              ["2", "Tanlash", "Selection", "Maqsadli o'quv jadvali (Target Dataset)"],
              ["3", "Tozalash", "Preprocessing", "NaN va shovqinsiz toza ma'lumot"],
              ["4", "O'zgartirish", "Transformation", "Normallashgan va PCA/kodlangan xususiyatlar"],
              ["5", "Data Mining", "Modeling", "Topilgan daraxtlar, klasterlar yoki qoidalar"],
              ["6", "Baholash", "Evaluation", "CV/ROC/Silhouette bo'yicha tekshirilgan model"],
              ["7", "Taqdim etish", "Presentation", "Dashboard, API yoki ilmiy hisobot"]
            ],
            en: [
              ["1", "Collection", "Acquisition", "Unified raw data warehouse"],
              ["2", "Selection", "Target Data", "Relevant feature & time slice"],
              ["3", "Cleaning", "Preprocessing", "Imputed, de-duplicated dataset"],
              ["4", "Transformation", "Feature Eng.", "Scaled, encoded & reduced features"],
              ["5", "Data Mining", "Pattern Search", "Trained trees, clusters, or rules"],
              ["6", "Evaluation", "Validation", "Verified CV/ROC/Silhouette metrics"],
              ["7", "Presentation", "Deployment", "Actionable dashboards & reports"]
            ]
          }
        }
      },
      {
        heading: { uz: "1.3. CRISP-DM sanoat standarti", en: "1.3. CRISP-DM Industry Methodology" },
        bodyHtml: {
          uz: "<p>1999-yilda ishlab chiqilgan <strong>CRISP-DM (Cross-Industry Standard Process for Data Mining)</strong> sanoat loyihalarining ~50% qismida qo'llaniladi. U 6 fazadan iborat:</p><ol><li><strong>Business Understanding:</strong> Biznes muammo, KPI va cheklovlarni aniqlash.</li><li><strong>Data Understanding:</strong> Dastlabki EDA, sifat auditini o'tkazish.</li><li><strong>Data Preparation:</strong> Tozalash, integratsiya, feature engineering (vaqtning 60–80%!).</li><li><strong>Modeling:</strong> Algoritm tanlash va giperparametrlarni sozlash.</li><li><strong>Evaluation:</strong> Biznes maqsadiga mosligini tekshirish.</li><li><strong>Deployment:</strong> Ishlab chiqarishga chiqarish va monitoring.</li></ol>",
          en: "<p><strong>CRISP-DM</strong> structures real-world analytics projects across 6 iterative phases: (1) Business Understanding, (2) Data Understanding, (3) Data Preparation (60–80% of effort), (4) Modeling, (5) Evaluation, and (6) Deployment & Monitoring.</p>"
        },
        discussion: {
          q: { uz: "Bank kredit berish tizimida model 94% aniqlik ko'rsatdi, lekin regulyatorlar nima uchun kredit rad etilganini izohlashni talab qilmoqda. CRISP-DM ning qaysi bosqichiga qaytish kerak?", en: "A bank loan model hits 94% accuracy, but regulators require transparent explanations for every rejection. Which CRISP-DM phase needs revisiting?" },
          a: { uz: "<strong>Business Understanding va Modeling:</strong> Biznes talablarida talqin qilinuvchanlik (interpretability) cheklovi e'tibordan chetda qolgan. Qora quti modeli o'rniga Decision Tree yoki SHAP izohli modelga qaytish zarur.", en: "<strong>Business Understanding & Modeling:</strong> Regulatory explainability was missed in requirements; switch from black-box models to Decision Trees or SHAP-explained models." }
        }
      },
      {
        heading: { uz: "1.4. SQL, Statistika, Machine Learning va Data Mining farqi", en: "1.4. SQL vs Statistics vs ML vs Data Mining" },
        bodyHtml: {
          uz: "<p>Bu to'rt yo'nalish bir-birini to'ldiradi, lekin maqsadi va yondashuvi bilan farqlanadi:</p>",
          en: "<p>These four disciplines complement one another while differing in goals, scale, and assumptions:</p>"
        },
        table: {
          headers: { uz: ["Mezon", "SQL / OLAP", "Klassik Statistika", "Data Mining / ML"], en: ["Dimension", "SQL / OLAP", "Classical Statistics", "Data Mining / ML"] },
          rows: {
            uz: [
              ["Asosiy savol", "\"Kecha nechta sotildi?\"", "\"Gipoteza p < 0.05 mi?\"", "\"Keyingi oy kim ketadi?\""],
              ["Yondashuv", "Deterministik so'rov", "Nazariya → Gipoteza → Test", "Ma'lumot → Naqsh → Umumlashtirish"],
              ["O'lcham", "Aniq jadvallar", "Odatda kichik tanlanma", "Millionlab qator, yuqori o'lcham"]
            ],
            en: [
              ["Core Question", "\"What happened yesterday?\"", "\"Is hypothesis H₀ rejected?\"", "\"Who will churn next month?\""],
              ["Paradigm", "Deterministic retrieval", "Theory-driven inference", "Data-driven discovery"],
              ["Scale", "Structured tables", "Smaller controlled samples", "Massive, noisy, high-dimensional"]
            ]
          }
        }
      },
      {
        heading: { uz: "1.5. Data Mining masalalari tasnifi (Predictive vs Descriptive)", en: "1.5. Predictive vs Descriptive Data Mining Tasks" },
        bodyHtml: {
          uz: "<ul><li><strong>Bashoratlovchi (Predictive / Supervised):</strong> Belgilangan maqsad ustuni ($y$) mavjud. <em>Classification</em> (diskret sinflar: spam/ham), <em>Regression</em> (uzluksiz son: uy narxi, harorat).</li><li><strong>Tasvirlovchi (Descriptive / Unsupervised):</strong> Maqsad ustuni yo'q, ma'lumotning ichki tuzilishi ochiladi. <em>Clustering</em> (mijoz segmentlari), <em>Association Rules</em> (savat tahlili), <em>Anomaly Detection</em> (firibgarlik).</li></ul>",
          en: "<ul><li><strong>Predictive (Supervised):</strong> Target label $y$ is known. Includes <em>Classification</em> (discrete categories) and <em>Regression</em> (continuous values).</li><li><strong>Descriptive (Unsupervised):</strong> No target label; discovers hidden structure via <em>Clustering</em>, <em>Association Rules</em>, and <em>Anomaly Detection</em>.</li></ul>"
        }
      }
    ],
    slides: [
      { title: { uz: "1-mavzu: Data Mining va KDD jarayoni", en: "Topic 1: Intro to Data Mining & KDD" }, subtitle: { uz: "MITQ2506 · 80 daqiqalik ma'ruza va seminar", en: "MITQ2506 · 80-Minute Lecture & Seminar" }, points: { uz: ["Ma'lumot portlashi va DRIP paradoksi", "Data Mining ning 4 ta fundamental sharti", "KDD 7 bosqichi va CRISP-DM metodologiyasi", "SQL, Statistika va Data Mining taqqoslash", "Predictive vs Descriptive masalalar va Laboratoriya"], en: ["Data explosion & DRIP paradox", "4 validity criteria of Data Mining", "7-stage KDD & CRISP-DM lifecycle", "SQL vs Statistics vs Data Mining", "Predictive vs Descriptive taxonomy & Lab 1"] }, speakerNote: { uz: "0–5 min: Kurs bilan tanishuv va maqsadlarni tushuntirish.", en: "0–5 min: Course introduction and syllabus goals." } },
      { title: { uz: "Muammo: Data Rich, Information Poor (DRIP)", en: "The DRIP Paradox" }, points: { uz: ["Har daqiqada millionlab tranzaksiya, IoT va veb-loglar yoziladi", "Ma'lumotni saqlash arzonlashdi, lekin undan qaror chiqarish qiyin", "Oddiy hisobotlar faqat o'tmishni ko'rsatadi", "Data Mining xom ma'lumotni strategik bilimga aylantiradi"], en: ["Millions of events logged every minute", "Storage is cheap; actionable insight is scarce", "Dashboards summarize the past; Data Mining uncovers hidden laws", "Turns raw records into strategic knowledge"] } },
      { title: { uz: "Data Mining ta'rifi", en: "Defining Data Mining" }, points: { uz: ["Katta hajmdagi ma'lumotlardan yashirin naqshlarni avtomatik ajratish", "Tog'-kon analogiyasi: tonnalab rudadan gramm oltin olish", "Statistika + Machine Learning + Ma'lumotlar bazasi kesishmasi"], en: ["Automatic discovery of hidden patterns in large datasets", "Mining analogy: extracting gold nuggets from tons of ore", "Intersection of Databases, Statistics & Machine Learning"] } },
      { title: { uz: "Haqiqiy Data Mining uchun 4 ta shart", en: "4 Criteria for Valid Data Mining" }, points: { uz: ["1. Yangi (Novel) — tahlilchi oldindan bilmagan", "2. Trivial emas — oddiy SQL AVG/SUM bilan chiqmaydi", "3. Foydali (Actionable) — qaror va foydaga olib keladi", "4. Tushunarli (Understandable) — mantiqiy asosga ega"], en: ["1. Novel — previously unknown pattern", "2. Non-trivial — cannot be answered by simple SQL", "3. Actionable — leads to measurable value", "4. Understandable — domain experts can interpret it"] } },
      { title: { uz: "Case Study: Google Flu Trends (2008–2015)", en: "Case Study: Google Flu Trends" }, points: { uz: ["2008: Qidiruv so'rovlari grippni CDC dan 2 hafta oldin topdi", "2015: Model real kasallanishni 2 baravar oshirib yubordi", "Sabab: yangiliklar ta'sirida qidiruv xulqi o'zgardi (Concept Drift)", "Dars: Tasodifiy korrelyatsiya ≠ sababiyat!"], en: ["2008: Search trends beat CDC reports by 2 weeks", "2015: Predictions overshot reality by 2x", "Cause: media hype shifted search behavior", "Lesson: Spurious correlation requires continuous validation"] } },
      { title: { uz: "Talabalarga savol (Muhokama)", en: "Class Discussion" }, discussion: { q: { uz: "\"Do'kon direktorining 'O'tgan oyda jami 120 mln so'mlik non sotildi' degan hisoboti Data Mining hisoblanadimi?\" Nima uchun?", en: "\"Is a report stating 'Last month bread sales totaled \$12,000' considered Data Mining?\" Why or why not?" }, a: { uz: "Yo'q! Bu oddiy SQL <code>SUM()</code> agregatsiyasi (trivial fakt). Data Mining esa \"Juma kechqurun sut olganlarning 78% sariyog' ham oladi\" kabi yashirin qonuniyatni topadi.", en: "No! That is a trivial SQL aggregation. Data Mining discovers non-obvious patterns like '78% of Friday milk buyers also purchase butter'." } } },
      { title: { uz: "KDD (Knowledge Discovery in Databases)", en: "KDD vs Data Mining" }, points: { uz: ["KDD — xom ma'lumotdan bilim taqdimotigacha 7 bosqichli jarayon", "Data Mining — KDD ning faqat 5-bosqichi (algoritmik qism)", "KDD iterativ: har qanday bosqichdan orqaga qaytish mumkin"], en: ["KDD = full 7-stage pipeline from raw data to knowledge", "Data Mining = Stage 5 (pattern extraction algorithms)", "Iterative feedback loops connect later stages back to earlier ones"] } },
      { title: { uz: "Interaktiv KDD Konveyerini Tekshiring", en: "Interactive KDD Pipeline Explorer" }, widget: 'kdd-pipeline' },
      { title: { uz: "CRISP-DM Sanoat Standarti (1999)", en: "CRISP-DM Standard (1999)" }, points: { uz: ["1. Business Understanding — muammo va KPI", "2. Data Understanding — EDA va ma'lumot sifati", "3. Data Preparation — 60–80% vaqt shu yerda ketadi!", "4. Modeling — algoritm tanlash", "5. Evaluation — biznes mezoniga tekshirish", "6. Deployment — tizimga joriy etish"], en: ["1. Business Understanding — goals & KPIs", "2. Data Understanding — EDA & data audit", "3. Data Preparation — consumes 60–80% of effort", "4. Modeling — training & tuning", "5. Evaluation — business & metric validation", "6. Deployment — production integration"] } },
      { title: { uz: "SQL, Statistika va Data Mining farqi", en: "SQL vs Statistics vs Data Mining" }, table: { headers: { uz: ["Mezon", "SQL", "Statistika", "Data Mining"], en: ["Criteria", "SQL", "Statistics", "Data Mining"] }, rows: { uz: [["Maqsad", "Fakt topish", "Gipoteza tekshirish", "Naqsh kashf etish"], ["Yondashuv", "So'rov", "Nazariy model", "Ma'lumotga tayangan"], ["Hajm", "Aniq jadval", "Tanlanma", "Katta / Big Data"]], en: [["Goal", "Retrieve facts", "Test hypotheses", "Discover patterns"], ["Method", "Query", "Probabilistic test", "Algorithmic search"], ["Scale", "Structured", "Sampled", "Massive & noisy"]] } } },
      { title: { uz: "Data Mining Masalalari: Bashoratlovchi (Predictive)", en: "Predictive Tasks (Supervised)" }, points: { uz: ["Tasniflash (Classification): diskret sinf yorlig'i (Spam / Spam emas)", "Regressiya (Regression): uzluksiz sonli bashorat (Uy narxi, Talab)", "O'quv to'plamida to'g'ri javob (y) oldindan ma'lum bo'ladi"], en: ["Classification: discrete label (Fraud / Legit)", "Regression: continuous quantity (House Price, Demand)", "Requires labeled historical examples (X, y)"] } },
      { title: { uz: "Data Mining Masalalari: Tasvirlovchi (Descriptive)", en: "Descriptive Tasks (Unsupervised)" }, points: { uz: ["Klasterlash (Clustering): o'xshash obyektlarni guruhlash", "Assotsiatsiya (Association Rules): birga uchraydigan elementlar", "Anomaliya aniqlash (Outlier Detection): kamyob og'ishlar", "Oldindan belgilangan sinf yorliqlari yo'q"], en: ["Clustering: segment similar objects", "Association Rules: co-occurring items", "Anomaly Detection: rare deviations", "No predefined target label y"] } },
      { title: { uz: "Qaysi masala qaysi turga kiradi? (Mashq)", en: "Identify the Task Type" }, discussion: { q: { uz: "Quyidagilarni tasniflang: (a) Kartadan 03:00 da 50 mln yechilishini tutish; (b) Talabalarni GPA va davomatga ko'ra 3 guruhga bo'lish; (c) Ertangi elektr sarfini kVt da bashoratlash.", en: "Classify: (a) Flagging a 3 AM \$5,000 card swipe; (b) Segmenting students into 3 behavioral groups; (c) Predicting tomorrow's kWh load." }, a: { uz: "(a) Anomaly Detection (yoki imbalanced Classification); (b) Clustering (Unsupervised); (c) Regression (Continuous Predictive).", en: "(a) Anomaly Detection; (b) Clustering (Unsupervised); (c) Regression (Predictive)." } } },
      { title: { uz: "Data Mining dagi asosiy xavflar", en: "Common Pitfalls in Data Mining" }, points: { uz: ["Data Leakage: test ma'lumoti o'qitishga sizib kirishi", "Overfitting: model shovqinni yodlab olishi", "Sampling Bias: tanlanma real populyatsiyani aks ettirmasligi", "Etika va Maxfiylik: shaxsiy ma'lumotlarni oshkor qilish"], en: ["Data Leakage: future/test data leaking into training", "Overfitting: memorizing noise instead of signal", "Sampling Bias: non-representative training set", "Privacy & Bias: discriminatory or leaky models"] } },
      { title: { uz: "Python Data Mining Ekotizimi", en: "Python Data Mining Stack" }, points: { uz: ["NumPy & Pandas — jadvallar va vektorli hisoblash", "Matplotlib & Seaborn — vizual EDA", "Scikit-Learn — tasniflash, klasterlash, preprocessing", "mlxtend / NetworkX — assotsiativ qoidalar va graflar"], en: ["NumPy & Pandas — tabular manipulation", "Matplotlib & Seaborn — exploratory visualization", "Scikit-Learn — unified ML & preprocessing API", "mlxtend / NetworkX — association rules & graphs"] } }
    ],
    lab: {
      title: { uz: "L1: Titanic datasetida to'liq EDA va gipoteza tekshiruvi", en: "L1: Full Exploratory Data Analysis on Titanic" },
      objective: { uz: "Pandas yordamida real datasetni yuklash, ma'lumot turlari, yetishmayotgan qiymatlar va sinflar kesimidagi qonuniyatlarni aniqlash.", en: "Load a real dataset in Pandas, audit missing values and types, and uncover initial survival patterns." },
      steps: [
        {
          title: { uz: "Datasetni yuklash va struktura auditi", en: "Load Dataset & Inspect Schema" },
          desc: { uz: "O'lcham, ustun turlari va dastlabki 5 qatorni tekshiring.", en: "Load CSV and inspect shape, dtypes, and missing counts." },
          code: `import pandas as pd
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)
print("Shape:", df.shape)
print(df.info())
print("\\nMissing values:\\n", df.isnull().sum()[df.isnull().sum() > 0])`
        },
        {
          title: { uz: "Statistik tavsif va kategorik taqsimot", en: "Summary Statistics & Class Breakdown" },
          desc: { uz: "Raqamli va matnli ustunlarni alohida tahlil qiling.", en: "Compute numeric quartiles and categorical frequencies." },
          code: `print(df.describe().round(2))
print("\\nPclass distribution:\\n", df['Pclass'].value_counts().sort_index())
print("\\nSurvival rate by Sex:\\n", df.groupby('Sex')['Survived'].mean().round(3))
print("\\nSurvival rate by Pclass:\\n", df.groupby('Pclass')['Survived'].mean().round(3))`
        },
        {
          title: { uz: "Vizual EDA (Matplotlib)", en: "Visualizing Survival Patterns" },
          desc: { uz: "Omon qolish va yosh taqsimotini grafikda chiqaring.", en: "Plot survival bar chart and age histogram." },
          code: `import matplotlib.pyplot as plt
fig, axes = plt.subplots(1, 2, figsize=(12, 4))
df['Survived'].value_counts().plot(kind='bar', ax=axes[0], color=['#ef4444', '#22c55e'])
axes[0].set_title("Survived (0=No, 1=Yes)")
df['Age'].dropna().hist(bins=25, ax=axes[1], color='#f59e0b', edgecolor='black')
axes[1].set_title("Passenger Age Distribution")
plt.tight_layout()
plt.savefig("l1_eda.png", dpi=150)`
        }
      ],
      variants: {
        uz: [
          "1-variant: Embarked (port) ustuni bo'yicha omon qolish foizini hisoblang.",
          "2-variant: SibSp + Parch + 1 orqali FamilySize ustunini yarating va omon qolishga ta'sirini tekshiring.",
          "3-variant: Fare (chipta narxi) ustunidagi eng katta 5 ta qiymatni va outlierlarni toping."
        ],
        en: [
          "Variant 1: Compute survival rate grouped by Embarked port.",
          "Variant 2: Engineer FamilySize = SibSp + Parch + 1 and analyze survival by family size.",
          "Variant 3: Inspect the top 5 highest Fare values and check for extreme outliers."
        ]
      }
    },
    glossary: [
      { uz: "DRIP paradoksi", en: "DRIP Paradox", defUz: "Ma'lumot ko'p, lekin foydali bilim kam bo'lgan holat", defEn: "Data Rich, Information Poor paradox" },
      { uz: "KDD", en: "KDD", defUz: "Ma'lumotdan bilim kashf etishning 7 bosqichli jarayoni", defEn: "Knowledge Discovery in Databases 7-stage process" },
      { uz: "CRISP-DM", en: "CRISP-DM", defUz: "Data Mining loyihalarining 6 fazali sanoat standarti", defEn: "6-phase Cross-Industry Standard Process for Data Mining" },
      { uz: "Tasniflash", en: "Classification", defUz: "Diskret sinf yorliqlarini bashoratlash (Supervised)", defEn: "Predicting discrete class labels (Supervised)" },
      { uz: "Klasterlash", en: "Clustering", defUz: "Yorliqsiz obyektlarni o'xshash guruhlarga ajratish", defEn: "Grouping unlabeled objects by similarity" }
    ],
    quiz: [
      { q: { uz: "Data Mining natijasi bo'lishi uchun qaysi shart MAJBURIY EMAS?", en: "Which condition is NOT strictly required for a valid Data Mining pattern?" }, options: [{ label: 'A', uz: "Yangi bilim bo'lishi", en: "Being novel" }, { label: 'B', uz: "Amalda foydali bo'lishi", en: "Being actionable" }, { label: 'C', uz: "Faqat milliardlab qatordan iborat bo'lishi", en: "Requiring billion-row datasets" }, { label: 'D', uz: "Tushunarli bo'lishi", en: "Being understandable" }], answer: 'C', explanation: { uz: "Data Mining kichik va o'rta jadvallarda ham qo'llaniladi.", en: "Data Mining applies to small and medium datasets as well." } },
      { q: { uz: "KDD va Data Mining orasidagi to'g'ri munosabat qaysi?", en: "What is the relationship between KDD and Data Mining?" }, options: [{ label: 'A', uz: "Sinonimlar", en: "Exact synonyms" }, { label: 'B', uz: "Data Mining = KDD ning markaziy 5-bosqichi", en: "Data Mining is Stage 5 inside KDD" }, { label: 'C', uz: "KDD = Data Mining ning bir qismi", en: "KDD is a sub-step" }, { label: 'D', uz: "Bog'liq emas", en: "Unrelated" }], answer: 'B', explanation: { uz: "KDD butun konveyer, Data Mining esa modellashtirish bosqichidir.", en: "KDD covers the full pipeline; Data Mining is the core modeling stage." } },
      { q: { uz: "CRISP-DM standartining birinchi bosqichi qaysi?", en: "What is Phase 1 of CRISP-DM?" }, options: [{ label: 'A', uz: "Ma'lumot tayyorlash", en: "Data Preparation" }, { label: 'B', uz: "Modellash", en: "Modeling" }, { label: 'C', uz: "Biznesni tushunish", en: "Business Understanding" }, { label: 'D', uz: "Baholash", en: "Evaluation" }], answer: 'C', explanation: { uz: "Har bir loyiha biznes maqsadi va KPI ni aniqlashdan boshlanadi.", en: "Projects begin by defining business objectives and success criteria." } },
      { q: { uz: "\"Mijozlarni xarid odatiga ko'ra guruhlash\" — bu qaysi masala?", en: "\"Segmenting customers by buying habits\" is which task?" }, options: [{ label: 'A', uz: "Tasniflash", en: "Classification" }, { label: 'B', uz: "Regressiya", en: "Regression" }, { label: 'C', uz: "Klasterlash", en: "Clustering" }, { label: 'D', uz: "Regulyarizatsiya", en: "Regularization" }], answer: 'C', explanation: { uz: "Oldindan sinf bo'lmaganda o'xshashlarni guruhlash klasterlashdir.", en: "Unsupervised grouping without predefined labels is Clustering." } },
      { q: { uz: "Google Flu Trends 2015-yilda nima uchun xato bera boshladi?", en: "Why did Google Flu Trends fail by 2015?" }, options: [{ label: 'A', uz: "Server o'chdi", en: "Server crash" }, { label: 'B', uz: "Qidiruv xulqi o'zgardi va model tasodifiy korrelyatsiyalarga tayandi", en: "Search behavior shifted & spurious correlations broke the model" }, { label: 'C', uz: "SQL xato", en: "SQL error" }, { label: 'D', uz: "Gripp tugadi", en: "Flu vanished" }], answer: 'B', explanation: { uz: "Concept drift va validatsiyasiz korrelyatsiyalar natijani buzdi.", en: "Concept drift and unvalidated correlations caused overprediction." } }
    ]
  },

  // ==================== TOPIC 2 ====================
  {
    id: 2,
    slug: '02-preprocessing',
    hours: 4,
    labs: 4,
    keywords: ['Preprocessing', 'MCAR', 'MAR', 'IQR', 'Min-Max', 'Z-score', 'One-Hot', 'PCA'],
    title: {
      uz: "Ma'lumotlarni dastlabki qayta ishlash",
      en: "Data Preprocessing & Dimensionality Reduction"
    },
    description: {
      uz: "Ma'lumotlarni tozalash, MCAR/MAR/MNAR, outlierlar (IQR & Z-score), Min-Max/Z-score/Robust scaling, kodlash va PCA.",
      en: "Data cleaning, missingness types, IQR & Z-score outliers, scaling methods, encoding, and PCA."
    },
    sections: [
      {
        heading: { uz: "2.1. Nega Preprocessing loyihaning 60–80% qismini oladi?", en: "2.1. Why Preprocessing Takes 60–80% of Project Time" },
        bodyHtml: {
          uz: "<p>Real hayotdagi jadvallar hech qachon ideal bo'lmaydi. Ularda 3 ta asosiy nuqson uchraydi: <strong>Incomplete</strong> (yetishmayotgan qiymatlar), <strong>Noisy</strong> (xato va outlierlar: masalan, yosh = -5 yoki 250) va <strong>Inconsistent</strong> (\"Toshkent\", \"toshkent\", \"Tashkent\").</p><p><strong>\"Garbage In, Garbage Out\"</strong> tamoyiliga ko'ra, tozalanmagan ma'lumotga eng zamonaviy algoritmni qo'llasangiz ham noto'g'ri natija olasiz. Preprocessing 5 bosqichdan iborat: <em>Tozalash → Integratsiya → Tanlash → Transformatsiya → O'lchamni qisqartirish</em>.</p>",
          en: "<p>Real-world tables suffer from <strong>incompleteness</strong> (NaNs), <strong>noise</strong> (sensor errors, outliers like age=-5), and <strong>inconsistency</strong> (\"Tashkent\" vs \"toshkent\"). Preprocessing follows 5 stages: Cleaning, Integration, Selection, Transformation, and Dimensionality Reduction.</p>"
        }
      },
      {
        heading: { uz: "2.2. Yetishmayotgan qiymatlar mexanizmlari va Imputation", en: "2.2. Missing Data Mechanisms & Imputation" },
        bodyHtml: {
          uz: "<p>Yetishmovchilik sababini bilmay turib to'ldirish xato xulosaga olib keladi:</p><ul><li><strong>MCAR (Missing Completely At Random):</strong> So'rovnoma varaqasi tasodifan yo'qolgan — boshqa hech bir ustunga bog'liq emas.</li><li><strong>MAR (Missing At Random):</strong> Boshqa kuzatilgan ustunga bog'liq (masalan, yosh o'tgan sari odamlar daromadni kamroq yozadi).</li><li><strong>MNAR (Missing Not At Random):</strong> Qiymatning o'ziga bog'liq (juda yuqori daromadlilar buni yashiradi) — eng xavfli tur!</li></ul>",
          en: "<ul><li><strong>MCAR:</strong> Missingness is completely independent of all variables.</li><li><strong>MAR:</strong> Missingness depends on other observed columns.</li><li><strong>MNAR:</strong> Missingness depends on the unobserved value itself (hardest bias!).</li></ul>"
        },
        table: {
          headers: { uz: ["Usul", "Qachon qo'llaniladi", "Afzalligi / Kamchiligi"], en: ["Method", "Best For", "Trade-off"] },
          rows: {
            uz: [
              ["O'chirish (Drop)", "MCAR va <5% satr bo'lsa", "Oddiy, lekin ma'lumot yo'qoladi"],
              ["Mean (O'rtacha)", "Simmetrik raqamli ustun", "Outlierlarga sezgir, dispersiyani pasaytiradi"],
              ["Median (Mediana)", "Qiyshiq (skewed) raqamli", "Outlierlarga chidamli"],
              ["Mode (Moda)", "Kategorik matn ustunlar", "Eng ko'p uchragan sinfni kuchaytiradi"],
              ["KNN / Iterative", "Ustunlar kuchli bog'liq bo'lsa", "Aniqroq, lekin sekinroq"]
            ],
            en: [
              ["Listwise Deletion", "MCAR & <5% rows", "Simple, shrinks sample size"],
              ["Mean Imputation", "Symmetric numeric", "Distorted by outliers; shrinks variance"],
              ["Median Imputation", "Skewed numeric", "Robust against extreme values"],
              ["Mode Imputation", "Categorical text", "Inflates majority category"],
              ["KNN / MICE", "Correlated features", "Accurate, higher compute cost"]
            ]
          }
        }
      },
      {
        heading: { uz: "2.3. Shovqin va Outlierlarni aniqlash (IQR va Z-score)", en: "2.3. Outlier Detection: IQR vs Z-Score" },
        bodyHtml: {
          uz: "<p><strong>IQR (Interquartile Range) usuli</strong> taqsimot shakliga bog'liq emas va ekstremal qiymatlarga chidamli. <strong>Z-score</strong> esa normal (Gaussian) taqsimotni talab qiladi, aks holda katta outlier o'rtacha $\\mu$ va $\\sigma$ ni o'ziga tortib <em>masking</em> effektini keltirib chiqaradi.</p>",
          en: "<p>The <strong>IQR fence</strong> is distribution-free and outlier-resistant, whereas <strong>Z-score</strong> assumes normality and suffers from <em>masking</em> when extreme outliers inflate $\\mu$ and $\\sigma$.</p>"
        },
        latex: "IQR = Q_3 - Q_1, \\quad [Q_1 - 1.5\\cdot IQR,\\; Q_3 + 1.5\\cdot IQR] \\qquad | \\qquad z = \\frac{x - \\mu}{\\sigma},\\; |z| > 3"
      },
      {
        heading: { uz: "2.4. Normallashtirish (Min-Max, Z-Score, RobustScaler)", en: "2.4. Feature Scaling: Min-Max, Z-Score & RobustScaler" },
        bodyHtml: {
          uz: "<p>Agar <em>Yosh</em> [18..65] va <em>Daromad</em> [1,000,000..50,000,000] bir jadvalda bo'lsa, Evklid masofasi faqat Daromadga qarab qoladi. Shu sabab k-NN, K-Means, SVM va Neyron tarmoqlar oldidan scaling majburiy! (Decision Tree va Random Forest uchun esa shart emas).</p>",
          en: "<p>Distance-based models (k-NN, K-Means, SVM) break if Income ($10^7$) overwhelms Age ($10^1$). Tree models are scale-invariant.</p>"
        },
        latex: "x'_{\\text{minmax}} = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} \\qquad x'_{\\text{z}} = \\frac{x - \\mu}{\\sigma} \\qquad x'_{\\text{robust}} = \\frac{x - \\text{Median}}{IQR}",
        widget: 'scaling-demo'
      },
      {
        heading: { uz: "2.5. Kategorik kodlash va O'lcham la'nati", en: "2.5. Categorical Encoding & Curse of Dimensionality" },
        bodyHtml: {
          uz: "<ul><li><strong>Ordinal / Label Encoding:</strong> Tartibli kategoriyalar uchun (\"Past\"=0, \"O'rta\"=1, \"Yuqori\"=2). Shahar nomlariga qo'llash xato (Toshkent &lt; Andijon ma'nosi chiqadi!).</li><li><strong>One-Hot Encoding:</strong> Tartibsiz (nominal) kategoriyalarni alohida 0/1 ustunlarga ajratadi. Xavf: 1000 ta noyob shahar bo'lsa 1000 ta ustun paydo bo'ladi.</li><li><strong>Target / Frequency Encoding:</strong> Yuqori kardinalitetli ustunlarda ustunlar sonini portlatmaslik uchun ishlatiladi.</li></ul>",
          en: "<ul><li><strong>Ordinal Encoding:</strong> Only for ordered levels (Low=0, Med=1, High=2).</li><li><strong>One-Hot Encoding:</strong> Nominal categories → binary columns (watch out for high cardinality!).</li><li><strong>Frequency / Target Encoding:</strong> Compact alternative for hundreds of categories.</li></ul>"
        }
      },
      {
        heading: { uz: "2.6. PCA (Principal Component Analysis)", en: "2.6. Dimensionality Reduction with PCA" },
        bodyHtml: {
          uz: "<p>Ko'p o'lchovli fazoda (masalan, 500 ustun) nuqtalar orasidagi masofa ma'nosini yo'qotadi (<em>Curse of Dimensionality</em>). <strong>PCA</strong> korrelyatsiyalashgan belgilarni o'zaro ortogonal <strong>Asosiy Komponentlarga (PC1, PC2, ...)</strong> aylantiradi:</p><ol><li>Ma'lumotni Z-score bilan standartlashtirish (majburiy!).</li><li>Kovariatsiya matritsasi $\\Sigma = \\frac{1}{n-1}X^T X$ ni hisoblash.</li><li>Eigenvalue $\\lambda_i$ va Eigenvector $v_i$ larni topish.</li><li>Kumulativ dispersiyaning 95% ini qoplaydigan $k$ ta komponentni tanlash.</li></ol>",
          en: "<p><strong>PCA</strong> mitigates the Curse of Dimensionality by projecting standardized data onto orthogonal Principal Components maximizing variance: (1) Z-score standardize, (2) Compute covariance matrix $\\Sigma$, (3) Eigendecomposition, (4) Keep top $k$ components explaining ≥95% variance.</p>"
        },
        latex: "\\text{Explained Variance Ratio}_j = \\frac{\\lambda_j}{\\sum_{i=1}^d \\lambda_i}"
      }
    ],
    slides: [
      { title: { uz: "2-mavzu: Ma'lumotlarni qayta ishlash", en: "Topic 2: Data Preprocessing" }, subtitle: { uz: "Tozalash · Normallashtirish · Kodlash · PCA (80 daqiqa)", en: "Cleaning · Scaling · Encoding · PCA (80 min)" }, points: { uz: ["Real ma'lumotlar nuqsonlari va 5 bosqich", "Yetishmayotgan qiymatlar: MCAR, MAR, MNAR", "Outlierlar: IQR vs Z-Score (Masking)", "Min-Max, Z-Score va RobustScaler", "Encoding va PCA o'lcham qisqartirish"], en: ["Dirty data types & 5-stage pipeline", "Missingness: MCAR, MAR, MNAR", "Outliers: IQR vs Z-score masking", "Min-Max, Z-score & RobustScaler", "Categorical Encoding & PCA math"] } },
      { title: { uz: "Nega Preprocessing shuncha ko'p vaqt oladi?", en: "Why Preprocessing Takes 60–80% Effort" }, points: { uz: ["Incomplete: sensor uzilishi, foydalanuvchi to'ldirmagan maydonlar", "Noisy: -999 harorat, 250 yosh, matn xatolari", "Inconsistent: sana formatlari (DD/MM vs MM/DD), valyuta farqi", "\"Garbage In, Garbage Out\" — yomon ma'lumot yaxshi modelni ham buzadi"], en: ["Incomplete: blank fields, dropped sensor packets", "Noisy: age=250, temp=-999, typos", "Inconsistent: mixed date formats, units, casing", "Garbage In, Garbage Out"] } },
      { title: { uz: "Yetishmayotgan qiymatlarning 3 mexanizmi", en: "3 Mechanisms of Missingness" }, points: { uz: ["MCAR: Butunlay tasodifiy (server tasodifan paket tushirib qoldirdi)", "MAR: Boshqa ustunga bog'liq (yosh/jinsga qarab bo'sh qoldirilgan)", "MNAR: Qiymatning o'ziga bog'liq (eng boylar daromadini yashiradi)", "MNAR da oddiy o'chirish natijani keskin siljitadi!"], en: ["MCAR: Missing Completely At Random (safe to drop if <5%)", "MAR: Depends on observed columns (recoverable via KNN/MICE)", "MNAR: Depends on missing value itself (highest bias risk)"] } },
      { title: { uz: "Imputation usullarini tanlash", en: "Choosing an Imputation Strategy" }, table: { headers: { uz: ["Usul", "Qachon", "Xavf"], en: ["Strategy", "When", "Pitfall"] }, rows: { uz: [["Mean", "Normal taqsimot", "Outlier buzadi"], ["Median", "Qiyshiq taqsimot", "Korrelyatsiyani yo'qotadi"], ["Mode", "Kategorik matn", "Disbalans"], ["KNN Imputer", "Bog'liq ustunlar", "Sekin (O(n²))"]], en: [["Mean", "Symmetric", "Outlier sensitive"], ["Median", "Skewed", "Ignores relations"], ["Mode", "Categorical", "Skews dominant class"], ["KNN Imputer", "Correlated", "Slow on huge data"]] } } },
      { title: { uz: "Outlierlarni aniqlash: IQR va Z-Score", en: "Outlier Detection: IQR vs Z-Score" }, latex: "IQR = Q_3 - Q_1, \\quad [Q_1 - 1.5\\,IQR,\\; Q_3 + 1.5\\,IQR] \\qquad z = \\frac{x-\\mu}{\\sigma}", points: { uz: ["IQR usuli: 25% va 75% kvartillar orasiga tayanadi (chidamli)", "Z-score: |z| > 3 bo'lgan nuqtalar (~99.7% normal qoida)", "Masking muammosi: 1 ta ulkan outlier o'rtachani buzib, kichik outlierni yashiradi"], en: ["IQR fences are robust to extreme values", "Z-score flags |z| > 3 assuming Gaussian spread", "Masking effect: one huge outlier inflates σ hiding others"] } },
      { title: { uz: "Qo'lda hisoblash misoli (IQR)", en: "Worked Example: IQR Outlier Check" }, points: { uz: ["Maoshlar: [3.2, 3.5, 4.0, 4.1, 4.5, 5.0, 5.2, 18.0]", "Q1 = 3.75, Q3 = 5.10 → IQR = 1.35", "Yuqori chegara = 5.10 + 1.5 × 1.35 = 7.125", "18.0 > 7.125 → 18.0 aniq outlier!"], en: ["Salaries: [3.2, 3.5, 4.0, 4.1, 4.5, 5.0, 5.2, 18.0]", "Q1 = 3.75, Q3 = 5.10 → IQR = 1.35", "Upper fence = 5.10 + 1.5 × 1.35 = 7.125", "18.0 > 7.125 → confirmed outlier!"] } },
      { title: { uz: "Normallashtirish: Min-Max, Z-Score, Robust", en: "Feature Scaling Formulas" }, latex: "x'_{mm} = \\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}}, \\quad x'_z = \\frac{x-\\mu}{\\sigma}, \\quad x'_{rob} = \\frac{x-\\text{Med}}{IQR}", points: { uz: ["Min-Max [0, 1]: tasvirlar va neyron tarmoqlar", "Z-score (μ=0, σ=1): SVM, PCA, LogReg, k-NN", "RobustScaler: outlierlar o'chirilmagan bo'lsa eng xavfsiz"], en: ["Min-Max [0, 1]: images & neural networks", "Z-score (μ=0, σ=1): SVM, PCA, k-NN", "RobustScaler: safest when outliers remain"] } },
      { title: { uz: "Interaktiv Scaling Lab: Outlier ta'sirini ko'ring", en: "Interactive Scaling Lab: Outlier Impact" }, widget: 'scaling-demo' },
      { title: { uz: "Talabalarga savol (Scaling & Tree)", en: "Class Discussion: Scaling" }, discussion: { q: { uz: "Random Forest va k-NN modellarini bir datasetda o'qityapsiz. Qaysi birida StandardScaler majburiy va nima uchun?", en: "You train Random Forest and k-NN on the same unscaled dataset. Which strictly requires StandardScaler and why?" }, a: { uz: "<strong>k-NN</strong> da majburiy, chunki u Evklid masofasini hisoblaydi. Random Forest esa faqat har bir ustunni o'z chegarasi bilan solishtiradi (<code>Yosh > 30</code>), shu sabab masshtabga befarq.", en: "<strong>k-NN</strong> requires scaling because Euclidean distance is scale-sensitive. Decision trees/Random Forest split single features monotonically and are scale-invariant." } } },
      { title: { uz: "Kategorik o'zgaruvchilarni kodlash", en: "Categorical Variable Encoding" }, points: { uz: ["Label Encoding: 'Andijon'=0, 'Buxoro'=1, 'Toshkent'=2 → XATO tartib yaratadi!", "One-Hot Encoding: har kategoriya uchun alohida 0/1 ustun", "Dummy Variable Trap: chiziqli modellar uchun drop_first=True"], en: ["Label Encoding imposes false numerical order on cities", "One-Hot Encoding creates clean binary indicator columns", "Drop one column (drop_first=True) for linear regression"] } },
      { title: { uz: "Diskretizatsiya (Binning)", en: "Discretization / Binning" }, points: { uz: ["Uzluksiz yoshni guruhlarga bo'lish: 0–18, 19–35, 36–60, 60+", "Equal-Width (teng oraliq): outlierlarga sezgir", "Equal-Frequency / Quantile (teng sonli): har savatda N/k ta element"], en: ["Converting continuous features into ordinal intervals", "Equal-Width: uniform step size (sensitive to outliers)", "Equal-Frequency (Quantile): equal sample counts per bin"] } },
      { title: { uz: "O'lcham la'nati (Curse of Dimensionality)", en: "The Curse of Dimensionality" }, points: { uz: ["Ustunlar soni d oshgan sari fazoning hajmi eksponensial kengayadi", "Yuqori o'lchamda barcha nuqtalar bir-biridan deyarli bir xil uzoqlashadi", "Overfitting kuchayadi va hisoblash vaqti keskin ortadi"], en: ["Volume grows exponentially with dimension d", "Nearest & farthest neighbor distances converge", "Increases sparsity, overfitting, and compute cost"] } },
      { title: { uz: "PCA — Asosiy Komponentlar Tahlili", en: "PCA: Principal Component Analysis" }, latex: "\\Sigma = \\frac{1}{n-1}X^T X, \\quad \\Sigma v_j = \\lambda_j v_j", points: { uz: ["Maqsad: ma'lumot dispersiyasini maksimal saqlab kam o'lchamga o'tish", "Yangi o'qlar (PC1, PC2) bir-biriga perpendikulyar (korrelyatsiyasiz)", "PC1 eng ko'p dispersiyani, PC2 qolgan eng ko'p dispersiyani tushuntiradi"], en: ["Projects correlated features onto orthogonal axes of maximum variance", "PC1 captures largest variance; PC2 captures next largest orthogonal variance"] } },
      { title: { uz: "PCA 5 ta qadami va Scree Plot", en: "5 Steps of PCA & Choosing K" }, points: { uz: ["1. Z-score standartlashtirish (SHART!)", "2. Kovariatsiya matritsasini qurish", "3. Eigenvalue (λ) va Eigenvector (v) hisoblash", "4. λ larni kamayish tartibida saralash", "5. ≥95% kumulativ dispersiya yoki Elbow (Scree plot) bo'yicha k tanlash"], en: ["1. Standardize to μ=0, σ=1", "2. Covariance matrix", "3. Eigendecomposition", "4. Sort eigenvalues descending", "5. Keep k components covering ≥95% variance"] } },
      { title: { uz: "Muhim ogohlantirish: Data Leakage!", en: "Critical Rule: Prevent Data Leakage!" }, points: { uz: ["Imputer, Scaler va PCA ni FAQAT X_train ustida fit() qiling!", "X_test ustida faqat transform() ishlatiladi", "Aks holda test ma'lumoti statistikasi o'qitishga sizib kiradi"], en: ["Always call fit_transform() ONLY on X_train", "Only call transform() on X_test", "Use sklearn.pipeline.Pipeline inside Cross-Validation"] } }
    ],
    lab: {
      title: { uz: "L2–L4: Imputation, Scaling, One-Hot Encoding va PCA", en: "L2–L4: Full Preprocessing Pipeline & PCA" },
      objective: { uz: "Yetishmayotgan qiymatlarni to'ldirish, IQR outlierlarni tekshirish, StandardScaler/RobustScaler solishtirish va PCA bilan 95% dispersiyani saqlash.", en: "Impute missing data, detect IQR outliers, compare scalers, and apply PCA." },
      steps: [
        {
          title: { uz: "Shovqinli va bo'sh ma'lumot generatsiyasi + Imputation", en: "Create Dirty Data & Impute Missing Values" },
          desc: { uz: "10% NaN qo'shib SimpleImputer(median) bilan to'ldiring.", en: "Inject 10% NaNs and impute safely with SimpleImputer." },
          code: `import pandas as pd, numpy as np
from sklearn.impute import SimpleImputer

np.random.seed(42)
df = pd.DataFrame({
    'Yosh': np.random.randint(18, 65, 120).astype(float),
    'Daromad': np.random.randint(2000, 15000, 120).astype(float),
    'Tajriba': np.random.randint(0, 35, 120).astype(float),
    'Ball': np.random.randint(40, 100, 120).astype(float)
})
for c in df.columns:
    df.loc[np.random.choice(df.index, 12, replace=False), c] = np.nan

df_clean = pd.DataFrame(SimpleImputer(strategy='median').fit_transform(df), columns=df.columns)
print("Remaining NaNs:", df_clean.isnull().sum().sum())`
        },
        {
          title: { uz: "IQR Outlier tahlili va Scalerlar taqqoslash", en: "IQR Outlier Check & Scaler Comparison" },
          desc: { uz: "MinMaxScaler, StandardScaler va RobustScaler natijalarini solishtiring.", en: "Compare MinMax, Standard, and Robust scaling on df_clean." },
          code: `from sklearn.preprocessing import MinMaxScaler, StandardScaler, RobustScaler

Q1, Q3 = df_clean['Daromad'].quantile([0.25, 0.75])
IQR = Q3 - Q1
outliers = df_clean[(df_clean['Daromad'] < Q1 - 1.5*IQR) | (df_clean['Daromad'] > Q3 + 1.5*IQR)]
print("Outliers count:", len(outliers))

z_scaled = StandardScaler().fit_transform(df_clean)
print("Z-score mean:", z_scaled.mean(axis=0).round(2), "std:", z_scaled.std(axis=0).round(2))`
        },
        {
          title: { uz: "PCA bilan o'lchamni qisqartirish (4D → 2D)", en: "PCA Projection (4D → 2D)" },
          desc: { uz: "Standartlashtirilgan ma'lumotga PCA qo'llab saqlangan dispersiyani tekshiring.", en: "Apply PCA to standardized data and inspect variance ratio." },
          code: `from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

pca = PCA(n_components=2)
comp = pca.fit_transform(z_scaled)
print("Variance ratios:", pca.explained_variance_ratio_.round(3))
print(f"Total kept: {pca.explained_variance_ratio_.sum()*100:.1f}%")

plt.scatter(comp[:, 0], comp[:, 1], c='#f59e0b', alpha=0.7)
plt.xlabel("PC1"); plt.ylabel("PC2"); plt.title("PCA 4D -> 2D")
plt.savefig("l2_pca.png", dpi=150)`
        }
      ],
      variants: {
        uz: [
          "1-variant: Daromad ustuniga sun'iy 2 ta outlier (500000) qo'shib MinMaxScaler vs RobustScaler farqini grafikda ko'rsating.",
          "2-variant: Kategorik 'Shahar' ustunini qo'shib OneHotEncoder bilan pipeline tuzing.",
          "3-variant: PCA(n_components=0.95) parametrini berib 95% dispersiya uchun nechta komponent qolishini aniqlang."
        ],
        en: [
          "Variant 1: Inject two extreme outliers (500000) into Daromad and compare MinMax vs RobustScaler.",
          "Variant 2: Add a categorical City column and process it with ColumnTransformer + OneHotEncoder.",
          "Variant 3: Run PCA(n_components=0.95) on Wine dataset and report retained components."
        ]
      }
    },
    glossary: [
      { uz: "MCAR / MAR / MNAR", en: "MCAR / MAR / MNAR", defUz: "Ma'lumot yetishmasligining tasodifiy va bog'liq mexanizmlari", defEn: "Mechanisms describing why data values are missing" },
      { uz: "IQR", en: "IQR", defUz: "Q3 - Q1 kvartillararo kenglik (outlier aniqlash mezoni)", defEn: "Interquartile range Q3 - Q1 used for robust outlier bounds" },
      { uz: "RobustScaler", en: "RobustScaler", defUz: "Mediana va IQR asosida masshtablovchi outlierga chidamli usul", defEn: "Scaler using median and IQR, resistant to outliers" },
      { uz: "PCA", en: "PCA", defUz: "Dispersiyani saqlab o'lchamni qisqartiruvchi chiziqli transformatsiya", defEn: "Orthogonal projection reducing dimensionality while maximizing variance" }
    ],
    quiz: [
      { q: { uz: "Haqiqiy loyihalarda preprocessing odatda qancha vaqt oladi?", en: "What fraction of time does preprocessing take in real projects?" }, options: [{ label: 'A', uz: "10–20%", en: "10–20%" }, { label: 'B', uz: "30–40%", en: "30–40%" }, { label: 'C', uz: "60–80%", en: "60–80%" }, { label: 'D', uz: "95–100%", en: "95–100%" }], answer: 'C', explanation: { uz: "Tozalash, kodlash va tayyorlash 60–80% vaqtni oladi.", en: "Data preparation consumes 60–80% of real Data Mining projects." } },
      { q: { uz: "Z-score standartlashtirish natijasida qanday statistika hosil bo'ladi?", en: "What are the mean and std after Z-score scaling?" }, options: [{ label: 'A', uz: "[0, 1] chegara", en: "Bounded [0, 1]" }, { label: 'B', uz: "O'rtacha = 0, standart og'ish = 1", en: "Mean = 0, Std = 1" }, { label: 'C', uz: "[-1, 1] chegara", en: "Bounded [-1, 1]" }, { label: 'D', uz: "Logarifmik", en: "Logarithmic" }], answer: 'B', explanation: { uz: "x' = (x - μ)/σ o'rtachani 0 va std ni 1 qiladi.", en: "Centering by mean and dividing by std produces μ=0, σ=1." } },
      { q: { uz: "PCA dan oldin qaysi amal MAJBURIY bajariladi?", en: "Which step is MANDATORY right before PCA?" }, options: [{ label: 'A', uz: "Z-score standartlashtirish", en: "Z-score standardization" }, { label: 'B', uz: "Label encoding", en: "Label encoding" }, { label: 'C', uz: "Budash (Pruning)", en: "Pruning" }, { label: 'D', uz: "Apriori", en: "Apriori" }], answer: 'A', explanation: { uz: "Aks holda katta diapazonli ustunlar PC1 ni egallab oladi.", en: "Without standardization, large-variance units dominate PC1." } },
      { q: { uz: "Kategorik ustun uchun qaysi imputation usuli to'g'ri?", en: "Which imputation fits a categorical column?" }, options: [{ label: 'A', uz: "Mean", en: "Mean" }, { label: 'B', uz: "Median", en: "Median" }, { label: 'C', uz: "Mode (Moda)", en: "Mode" }, { label: 'D', uz: "Z-score", en: "Z-score" }], answer: 'C', explanation: { uz: "Matnli kategoriyada faqat eng ko'p uchraydigan qiymat (Mode) olinadi.", en: "Categories cannot be averaged, so Mode is used." } },
      { q: { uz: "MCAR nimani anglatadi?", en: "What does MCAR stand for?" }, options: [{ label: 'A', uz: "Missing Completely At Random", en: "Missing Completely At Random" }, { label: 'B', uz: "Missing Conditionally At Random", en: "Missing Conditionally At Random" }, { label: 'C', uz: "Multiple Class Regression", en: "Multiple Class Regression" }, { label: 'D', uz: "Mean Centered Reduction", en: "Mean Centered Reduction" }], answer: 'A', explanation: { uz: "MCAR — boshqa o'zgaruvchilarga mutlaqo bog'liq bo'lmagan tasodifiy yo'qolish.", en: "Missingness is completely independent of observed or hidden values." } }
    ]
  },

  // ==================== TOPIC 3 ====================
  {
    id: 3,
    slug: '03-classification-dt',
    hours: 2,
    labs: 2,
    keywords: ['Decision Tree', 'Entropy', 'Information Gain', 'Gain Ratio', 'Gini', 'ID3', 'CART', 'Pruning'],
    title: {
      uz: "Qaror daraxti yordamida tasniflash",
      en: "Classification with Decision Trees"
    },
    description: {
      uz: "Daraxt tuzilishi, Entropiya, Information Gain, Gain Ratio, Gini indeksi, qo'lda daraxt qurish misoli, ID3/C4.5/CART va Pruning.",
      en: "Tree anatomy, Entropy, Information Gain, Gain Ratio, Gini Impurity, step-by-step hand example, ID3/C4.5/CART, and pruning."
    },
    sections: [
      {
        heading: { uz: "3.1. Tasniflash va Qaror daraxti tuzilishi", en: "3.1. Supervised Classification & Tree Anatomy" },
        bodyHtml: {
          uz: "<p><strong>Qaror daraxti (Decision Tree)</strong> — ma'lumotlar fazosini ketma-ket to'g'ri burchakli hududlarga bo'luvchi, oq-quti (white-box) modelidir. Har bir yo'l bitta <code>IF ... AND ... THEN ...</code> qoidasiga ekvivalent.</p><ul><li><strong>Ildiz tugun (Root):</strong> butun datasetni birinchi bo'luvchi eng kuchli atribut.</li><li><strong>Ichki tugun (Internal Node):</strong> atribut testi (masalan, <code>Yosh ≤ 30</code>).</li><li><strong>Shox (Branch):</strong> test natijasi (Ha/Yo'q).</li><li><strong>Barg (Leaf Node):</strong> yakuniy sinf yorlig'i.</li></ul>",
          en: "<p>A <strong>Decision Tree</strong> recursively partitions feature space into axis-aligned regions. Every root-to-leaf path forms an interpretable <code>IF-THEN</code> rule.</p>"
        }
      },
      {
        heading: { uz: "3.2. Nopoklik mezonlari: Entropiya, Information Gain va Gini", en: "3.2. Impurity Criteria: Entropy, IG & Gini" },
        bodyHtml: {
          uz: "<p>Har bir tugunda eng yaxshi atributni tanlash uchun bo'linishdan keyingi <strong>\"soflik\" (purity)</strong> o'lchanadi:</p><ul><li><strong>Entropiya H(S):</strong> Shennon axborot nazariyasidan olingan tartibsizlik o'lchovi ($0 \\le H(S) \\le \\log_2 C$). Ikkilik sinfda $H=0$ (sof), $H=1$ (50/50 teng aralash).</li><li><strong>Information Gain:</strong> bo'linish natijasida entropiya qanchalik kamaygani.</li><li><strong>Gini indeksi:</strong> CART algoritmi ishlatadigan logarifmsiz tez mezon ($0 \\le \\text{Gini} \\le 0.5$ ikkilikda).</li></ul>",
          en: "<p>We select splits maximizing node purity via <strong>Entropy / Information Gain</strong> (ID3, C4.5) or minimizing <strong>Gini Impurity</strong> (CART, avoids logarithms for speed).</p>"
        },
        latex: "H(S) = -\\sum_{i=1}^{C} p_i \\log_2(p_i), \\quad IG(S, A) = H(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} H(S_v), \\quad \\text{Gini}(S) = 1 - \\sum_{i=1}^{C} p_i^2",
        widget: 'dt-split'
      },
      {
        heading: { uz: "3.3. Qo'lda hisoblash misoli: Kredit ma'qullash", en: "3.3. Step-by-Step Hand Example: Loan Approval" },
        bodyHtml: {
          uz: "<p>Faraz qilaylik, 10 ta mijoz: <strong>6 ta Ha</strong>, <strong>4 ta Yo'q</strong>. Boshlang'ich entropiya:</p><p>$H(S) = -(0.6\\log_2 0.6 + 0.4\\log_2 0.4) = -(0.6(-0.737) + 0.4(-1.322)) = 0.971$</p><p>Agar <em>\"Daromad = Yuqori\"</em> (4 Ha, 0 Yo'q) va <em>\"Past\"</em> (2 Ha, 4 Yo'q) bo'lsa: $H(\\text{Yuqori}) = 0$, $H(\\text{Past}) = 0.918$. Unda:</p><p>$IG(S, \\text{Daromad}) = 0.971 - (0.4 \\cdot 0 + 0.6 \\cdot 0.918) = 0.420$ bit!</p>",
          en: "<p>For 10 applicants (6 Yes, 4 No): $H(S) = 0.971$. Splitting on Income yields High=(4 Yes, 0 No; $H=0$) and Low=(2 Yes, 4 No; $H=0.918$), giving $IG = 0.971 - 0.6(0.918) = 0.420$ bits.</p>"
        }
      },
      {
        heading: { uz: "3.4. ID3, C4.5 (Gain Ratio) va CART taqqoslash", en: "3.4. ID3 vs C4.5 vs CART Comparison" },
        bodyHtml: {
          uz: "<p><strong>ID3 muammosi:</strong> ko'p noyob qiymatli ustunni (masalan, <em>Talaba_ID</em>) tanlab yuboradi, chunki har bir ID uchun $H=0$ bo'ladi! <strong>C4.5</strong> buni <strong>Gain Ratio = IG / SplitInfo</strong> orqali jazolaydi.</p>",
          en: "<p><strong>ID3 bias:</strong> favors high-cardinality IDs since each unique ID yields $H=0$. <strong>C4.5</strong> fixes this via <strong>Gain Ratio = IG / SplitInfo</strong>.</p>"
        },
        table: {
          headers: { uz: ["Algoritm", "Mezon", "Uzluksiz ustun / NaN", "Daraxt turi"], en: ["Algorithm", "Criterion", "Continuous / NaN", "Tree Shape"] },
          rows: {
            uz: [
              ["ID3 (1986)", "Information Gain", "Yo'q (faqat kategorik)", "Ko'p shoxli"],
              ["C4.5 (1993)", "Gain Ratio", "Ha (threshold + vaznli NaN)", "Ko'p shoxli"],
              ["CART (1984)", "Gini / MSE", "Ha (tasniflash & regressiya)", "Faqat ikkilik (Binary)"]
            ],
            en: [
              ["ID3 (1986)", "Information Gain", "No (categorical only)", "Multi-way"],
              ["C4.5 (1993)", "Gain Ratio", "Yes (thresholds & NaNs)", "Multi-way"],
              ["CART (1984)", "Gini / MSE", "Yes (classification & reg.)", "Strictly Binary"]
            ]
          }
        }
      },
      {
        heading: { uz: "3.5. Overfitting va Budash (Pre- & Post-Pruning)", en: "3.5. Overfitting & Tree Pruning" },
        bodyHtml: {
          uz: "<p>Cheklanmagan daraxt har bir shovqinli nuqta uchun alohida barg yaratib, Train da 100%, Test da esa past natija beradi. Yechimlar:</p><ul><li><strong>Pre-pruning:</strong> daraxt o'sishini oldindan to'xtatish (<code>max_depth</code>, <code>min_samples_split</code>, <code>min_samples_leaf</code>).</li><li><strong>Post-pruning (Cost-Complexity Pruning):</strong> avval to'liq daraxt qurib, so'ngra <code>ccp_alpha</code> mezoni bilan kuchsiz shoxlarni qirqib tashlash.</li></ul>",
          en: "<p>Unconstrained trees memorize training noise (100% train, poor test). Mitigate via <strong>Pre-pruning</strong> (<code>max_depth</code>, <code>min_samples_leaf</code>) or <strong>Post-pruning</strong> (<code>ccp_alpha</code> cost-complexity pruning).</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "3-mavzu: Qaror daraxtlari", en: "Topic 3: Decision Trees" }, subtitle: { uz: "Entropiya · Information Gain · Gini · Pruning (80 daqiqa)", en: "Entropy · Info Gain · Gini · Pruning (80 min)" }, points: { uz: ["Qaror daraxti tuzilishi va IF-THEN qoidalar", "Entropiya, Information Gain va Gini formulalari", "Qo'lda daraxt qurish misoli (Kredit)", "ID3, C4.5 (Gain Ratio) va CART farqlari", "Overfitting, Pre/Post-Pruning va Laboratoriya"], en: ["Tree anatomy & IF-THEN rules", "Entropy, Information Gain & Gini math", "Step-by-step worked loan example", "ID3 vs C4.5 vs CART", "Overfitting, Pruning & Lab 3"] } },
      { title: { uz: "Qaror Daraxti Tuzilishi", en: "Anatomy of a Decision Tree" }, points: { uz: ["Ildiz tugun (Root): eng yaxshi dastlabki ajralish", "Ichki tugun (Internal Node): bitta atribut testi", "Shox (Branch): test javobiga ko'ra yo'l", "Barg (Leaf): yakuniy bashorat sinfi"], en: ["Root Node: best top-level split", "Internal Node: single attribute test", "Branch: test outcome path", "Leaf Node: final class label"] } },
      { title: { uz: "Nega Qaror Daraxti Mashhur?", en: "Strengths of Decision Trees" }, points: { uz: ["White-box model: shifokor va bankirga tushunarli", "Normallashtirish (Scaling) talab qilmaydi", "Chiziqsiz chegaralarni ham ajrata oladi", "Ham raqamli, ham kategorik belgilar bilan ishlaydi"], en: ["White-box interpretability for finance & healthcare", "No feature scaling required", "Learns non-linear decision boundaries", "Handles mixed numeric and categorical features"] } },
      { title: { uz: "Entropiya H(S) Tushunchasi", en: "Understanding Entropy H(S)" }, latex: "H(S) = -\\sum_{i=1}^C p_i \\log_2(p_i)", points: { uz: ["p_i — tugundagi i-sinfning ulushi", "H = 0: barcha obyektlar 1 ta sinfda (mutlaqo sof)", "H = 1: ikki sinf teng 50% / 50% aralashgan (maksimal noaniqlik)", "Konvensiya: 0 · log₂(0) = 0"], en: ["p_i = fraction of class i in node S", "H = 0: completely pure node", "H = 1: 50/50 binary split (maximum uncertainty)", "By convention, 0 · log₂(0) = 0"] } },
      { title: { uz: "Information Gain (Axborot Ortishi)", en: "Information Gain Formula" }, latex: "IG(S, A) = H(S) - \\sum_{v} \\frac{|S_v|}{|S|} H(S_v)", points: { uz: ["Bo'linishdan oldingi entropiya minus shoxlarning vaznli o'rtacha entropiyasi", "ID3 har qadamda eng katta IG beradigan atributni tanlaydi"], en: ["Entropy before split minus weighted average entropy of children", "Greedy top-down search picks attribute maximizing IG"] } },
      { title: { uz: "Gini Indeksi (CART Algoritmi)", en: "Gini Impurity (CART)" }, latex: "\\text{Gini}(S) = 1 - \\sum_{i=1}^C p_i^2", points: { uz: ["Gini = 0: sof tugun; Gini = 0.5: teng 50/50 aralash", "Logarifm hisoblanmagani uchun Entropiyadan tezroq", "Scikit-Learn da default criterion='gini'"], en: ["Gini = 0 pure; Gini = 0.5 max binary impurity", "Faster than Entropy (no log computations)", "Default in Scikit-Learn DecisionTreeClassifier"] } },
      { title: { uz: "Interaktiv Lab: Chegarani siljiting va Entropiya/Gini ni kuzating!", en: "Interactive Split Lab: Slide Threshold" }, widget: 'dt-split' },
      { title: { uz: "Qo'lda hisoblash misoli: Kredit", en: "Worked Example: Credit Scoring" }, points: { uz: ["Jami 10 ta mijoz: 6 Ha, 4 Yo'q → H(S) = 0.971", "Daromad=Yuqori: (4 Ha, 0 Yo'q) → H = 0", "Daromad=Past: (2 Ha, 4 Yo'q) → H = 0.918", "IG = 0.971 - [0.4(0) + 0.6(0.918)] = 0.420 bit"], en: ["10 applicants: 6 Yes, 4 No → H(S) = 0.971", "Income=High: (4 Yes, 0 No) → H = 0", "Income=Low: (2 Yes, 4 No) → H = 0.918", "IG = 0.971 - 0.6(0.918) = 0.420 bits"] } },
      { title: { uz: "ID3 Tuzog'i: Noyob ID ustuni muammosi", en: "The ID3 Trap: High-Cardinality Bias" }, discussion: { q: { uz: "Talaba_ID ustuni bo'yicha bo'lsak, har bir talaba alohida bargga tushib Entropiya = 0 bo'ladi va IG maksimal chiqadi. Nima uchun ID3 bu ustunni tanlashi falokat?", en: "Splitting on Student_ID gives Entropy=0 in every leaf and maximum Information Gain. Why is choosing Student_ID catastrophic?" }, a: { uz: "Daraxt yangi talaba uchun umuman umumlashtira olmaydi (100% Overfitting)! C4.5 buni <strong>Gain Ratio = IG / SplitInfo</strong> orqali hal qiladi.", en: "It memorizes IDs with zero generalization to unseen students! C4.5 fixes this using <strong>Gain Ratio = IG / SplitInfo</strong>." } } },
      { title: { uz: "ID3 vs C4.5 vs CART Taqqoslash", en: "Comparing ID3, C4.5 & CART" }, table: { headers: { uz: ["Algoritm", "Mezon", "Daraxt"], en: ["Algorithm", "Metric", "Split"] }, rows: { uz: [["ID3", "Information Gain", "Ko'p shoxli"], ["C4.5", "Gain Ratio", "Ko'p shoxli"], ["CART", "Gini / MSE", "Ikkilik (Binary)"]], en: [["ID3", "Info Gain", "Multi-way"], ["C4.5", "Gain Ratio", "Multi-way"], ["CART", "Gini / MSE", "Binary"]] } } },
      { title: { uz: "Uzluksiz atributlar bilan bo'lish (CART)", en: "Splitting Continuous Features" }, points: { uz: ["Qiymatlar saralanadi va qo'shni o'rta nuqtalar (x ≤ t) tekshiriladi", "Masalan: Harorat = [18, 22, 28, 35] → nomzodlar: 20, 25, 31.5", "Eng katta Gini pasayishi bergan t tanlanadi"], en: ["Sort unique values and test midpoints (x ≤ t)", "Pick threshold t yielding highest impurity reduction"] } },
      { title: { uz: "Overfitting: Train 99% vs Test 65%", en: "Overfitting in Deep Trees" }, points: { uz: ["Daraxt chuqurlashgan sari faqat 1–2 ta namunadan iborat shovqinli barglar hosil bo'ladi", "Model yuqori dispersiyaga (High Variance) tushadi", "Ma'lumotdagi kichik o'zgarish butun daraxtni o'zgartirib yuboradi"], en: ["Deep trees create tiny leaves fitting random noise", "High variance: small data perturbations drastically alter the tree"] } },
      { title: { uz: "Budash (Pruning): Pre-Pruning vs Post-Pruning", en: "Pre-Pruning vs Post-Pruning" }, points: { uz: ["Pre-pruning: max_depth=4, min_samples_leaf=5, min_samples_split=10", "Post-pruning: to'liq daraxt qurib ccp_alpha orqali kuchsiz shoxlarni qirqish", "Validation egri chizig'i orqali optimal chuqurlik topiladi"], en: ["Pre-pruning: early stopping via max_depth, min_samples_leaf", "Post-pruning: cost-complexity trimming with ccp_alpha", "Pick optimal depth using Cross-Validation curve"] } },
      { title: { uz: "Muhokama: Chuqurlik (max_depth) tanlash", en: "Class Discussion: Tree Depth" }, discussion: { q: { uz: "Iris datasetida max_depth=1, 3, 15 lar uchun Train/Test aniqligi mos ravishda: (67%/64%), (97%/96%), (100%/87%). Qaysi holat Underfitting va qaysi biri Overfitting?", en: "On a dataset, max_depth=1, 3, 15 yield Train/Test accuracies: (67%/64%), (97%/96%), (100%/87%). Which is Underfitting and which is Overfitting?" }, a: { uz: "<strong>max_depth=1:</strong> Underfitting (ikkalasi ham past). <strong>max_depth=15:</strong> Overfitting (Train 100%, Test tushib ketgan). <strong>max_depth=3:</strong> Optimal muvozanat!", en: "<strong>max_depth=1:</strong> Underfitting. <strong>max_depth=15:</strong> Overfitting. <strong>max_depth=3:</strong> Sweet spot!" } } }
    ],
    lab: {
      title: { uz: "L3: Iris va Breast Cancer da Qaror Daraxti va Pruning", en: "L3: Decision Trees & Cost-Complexity Pruning" },
      objective: { uz: "Gini vs Entropy solishtirish, max_depth ta'sirini o'rganish va ccp_alpha orqali post-pruning bajarish.", en: "Compare Gini vs Entropy, sweep max_depth, and apply ccp_alpha pruning." },
      steps: [
        {
          title: { uz: "Bazaviy daraxt va Qoidalarni chiqarish", en: "Train Baseline Tree & Export Rules" },
          desc: { uz: "Iris datasetida max_depth=3 daraxt o'qiting.", en: "Train max_depth=3 tree on Iris and inspect text rules." },
          code: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

iris = load_iris()
X_tr, X_te, y_tr, y_te = train_test_split(iris.data, iris.target, test_size=0.3, random_state=42)
dt = DecisionTreeClassifier(max_depth=3, criterion='gini', random_state=42).fit(X_tr, y_tr)
print("Test Accuracy:", round(accuracy_score(y_te, dt.predict(X_te)), 3))
print(export_text(dt, feature_names=list(iris.feature_names)))`
        },
        {
          title: { uz: "Overfitting egri chizig'i (max_depth = 1..12)", en: "Depth Sweep: Underfitting vs Overfitting" },
          desc: { uz: "Breast Cancer datasetida Train va Test aniqligini taqqoslang.", en: "Plot train vs test accuracy across depths 1..12 on Breast Cancer." },
          code: `from sklearn.datasets import load_breast_cancer
bc = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(bc.data, bc.target, test_size=0.3, random_state=42)
for d in [1, 2, 3, 5, 8, None]:
    m = DecisionTreeClassifier(max_depth=d, random_state=42).fit(X_tr, y_tr)
    print(f"depth={str(d):4s} | train={m.score(X_tr, y_tr):.3f} | test={m.score(X_te, y_te):.3f}")`
        },
        {
          title: { uz: "Post-Pruning (ccp_alpha)", en: "Cost-Complexity Post-Pruning" },
          desc: { uz: "cost_complexity_pruning_path orqali optimal alpha ni toping.", en: "Evaluate pruned subtrees across ccp_alpha values." },
          code: `path = DecisionTreeClassifier(random_state=42).cost_complexity_pruning_path(X_tr, y_tr)
for alpha in path.ccp_alphas[::4]:
    clf = DecisionTreeClassifier(random_state=42, ccp_alpha=alpha).fit(X_tr, y_tr)
    print(f"alpha={alpha:.4f} | nodes={clf.tree_.node_count:3d} | test={clf.score(X_te, y_te):.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: criterion='entropy' va criterion='gini' ni 5-fold CV bilan solishtiring.",
          "2-variant: plot_tree() bilan daraxt rasmini chizing va eng muhim 2 ta ildiz atributni yozing.",
          "3-variant: min_samples_leaf=10 qo'yib barg tugunlar soni qanchaga kamayganini tekshiring."
        ],
        en: [
          "Variant 1: Compare criterion='entropy' vs 'gini' using 5-fold cross-validation.",
          "Variant 2: Plot the tree with plot_tree() and document the top 2 splitting features.",
          "Variant 3: Set min_samples_leaf=10 and report leaf count reduction."
        ]
      }
    },
    glossary: [
      { uz: "Entropiya", en: "Entropy", defUz: "Tugundagi sinflar tartibsizligi o'lchovi", defEn: "Information-theoretic measure of node impurity" },
      { uz: "Information Gain", en: "Information Gain", defUz: "Bo'linishdan keyingi entropiya kamayishi", defEn: "Reduction in entropy achieved by a split" },
      { uz: "Gain Ratio", en: "Gain Ratio", defUz: "Ko'p qiymatli atributlarni jazolovchi normallashgan IG", defEn: "Normalized IG penalizing high-cardinality splits" },
      { uz: "Gini indeksi", en: "Gini Impurity", defUz: "CART algoritmi ishlatadigan kvadratik nopoklik o'lchovi", defEn: "Quadratic impurity criterion used by CART" },
      { uz: "Pruning", en: "Pruning", defUz: "Overfittingni oldini olish uchun daraxtni qirqish", defEn: "Trimming weak branches to prevent overfitting" }
    ],
    quiz: [
      { q: { uz: "Qaror daraxtida \"barg\" (leaf node) nima?", en: "What is a leaf node in a Decision Tree?" }, options: [{ label: 'A', uz: "Ildiz ajralish", en: "Root split" }, { label: 'B', uz: "Yakuniy sinf bashorati", en: "Final predicted class label" }, { label: 'C', uz: "Atribut testi", en: "Attribute test" }, { label: 'D', uz: "Shox", en: "Branch" }], answer: 'B', explanation: { uz: "Barg tugun yakuniy bashoratni qaytaradi.", en: "Leaf nodes represent terminal class predictions." } },
      { q: { uz: "Entropiya H=0 nimani bildiradi?", en: "What does Entropy H = 0 mean?" }, options: [{ label: 'A', uz: "50/50 teng aralash", en: "50/50 split" }, { label: 'B', uz: "Barcha obyektlar bir sinfda (sof)", en: "All instances share one class (pure)" }, { label: 'C', uz: "Bo'sh tugun", en: "Empty node" }, { label: 'D', uz: "Xato", en: "Error" }], answer: 'B', explanation: { uz: "Noaniqlik nolga teng — tugun sof.", en: "Zero uncertainty means 100% single-class purity." } },
      { q: { uz: "ID3 ning ko'p qiymatli ustunga og'ib ketish muammosini C4.5 qanday hal qiladi?", en: "How does C4.5 fix ID3's bias toward many-valued attributes?" }, options: [{ label: 'A', uz: "Gini indeksi bilan", en: "With Gini Index" }, { label: 'B', uz: "Gain Ratio bilan", en: "With Gain Ratio" }, { label: 'C', uz: "PCA bilan", en: "With PCA" }, { label: 'D', uz: "K-Means bilan", en: "With K-Means" }], answer: 'B', explanation: { uz: "Gain Ratio IG ni SplitInfo ga bo'lib ko'p shoxli ustunlarni jazolaydi.", en: "Gain Ratio divides IG by SplitInfo." } },
      { q: { uz: "Overfitting belgilari qaysi?", en: "Which metric pattern shows overfitting?" }, options: [{ label: 'A', uz: "Train past, Test yuqori", en: "Low train, high test" }, { label: 'B', uz: "Train 99%, Test 65%", en: "Train 99%, Test 65%" }, { label: 'C', uz: "Ikkalasi 65%", en: "Both 65%" }, { label: 'D', uz: "Ikkalasi 98%", en: "Both 98%" }], answer: 'B', explanation: { uz: "O'quv ma'lumotini yodlab olgan model testda yomon natija beradi.", en: "Large gap between high train accuracy and low test accuracy." } },
      { q: { uz: "CART algoritmi qaysi mezon va tuzilmani ishlatadi?", en: "Which metric and tree structure does CART use?" }, options: [{ label: 'A', uz: "Information Gain, ko'p shoxli", en: "IG, multi-way" }, { label: 'B', uz: "Gini indeksi, ikkilik (binary) daraxt", en: "Gini Index, strictly binary tree" }, { label: 'C', uz: "Gain Ratio, ko'p shoxli", en: "Gain Ratio, multi-way" }, { label: 'D', uz: "Z-score", en: "Z-score" }], answer: 'B', explanation: { uz: "CART har tugunda Gini bilan ikkilik bo'linish qiladi.", en: "CART splits every node into 2 children using Gini impurity." } }
    ]
  }
);
