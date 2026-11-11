window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== M1 / L1 ====================
  {
    id: 1,
    code: 'M1',
    labCode: 'L1',
    slug: '01-kirish',
    hours: 2,
    labs: 1,
    keywords: ['Data Mining', 'KDD', 'CRISP-DM', 'Tan', 'Predictive', 'Descriptive'],
    title: {
      uz: "Ma'lumotlarni intellektual tahlil qilish va KDD jarayoni",
      en: "Introduction to Data Mining & KDD Process"
    },
    description: {
      uz: "Data Mining tushunchasi (Tan 1-bob), 4 ta mezon, KDD 7 bosqichi, CRISP-DM, SQL/Statistika farqi va Predictive/Descriptive masalalar.",
      en: "Data Mining foundations (Tan Ch. 1), 4 criteria, 7-stage KDD, CRISP-DM, SQL vs Statistics, and task taxonomy."
    },
    sections: [
      {
        heading: { uz: "1.1. Data Mining tushunchasi va DRIP paradoksi (Tan, 1-bob)", en: "1.1. What is Data Mining & DRIP Paradox (Tan Ch. 1)" },
        bodyHtml: {
          uz: "<p>Zamonaviy banklar, sensorlar va veb-platformalar har soniyada terabaytlab ma'lumot yig'adi, ammo ulardan qaror chiqarish qiyin. Fanda bu <strong>DRIP — \"Data Rich, Information Poor\"</strong> (ma'lumotga boy, bilimi kam) paradoksi deyiladi.</p><p><strong>Data Mining</strong> (Tan, Steinbach, Karpatne, Kumar bo'yicha) — katta ma'lumotlar omboridan <em>foydali axborotni avtomatik kashf etish</em> jarayonidir. Natija haqiqiy Data Mining bo'lishi uchun 4 ta shart bajarilishi kerak: <strong>Yangi (Novel)</strong>, <strong>Trivial bo'lmagan</strong> (oddiy SQL <code>SUM/COUNT</code> bilan topilmaydigan), <strong>Amalda foydali (Actionable)</strong> va <strong>Tushunarli (Understandable)</strong>.</p>",
          en: "<p>Modern systems suffer from the <strong>DRIP (\"Data Rich, Information Poor\")</strong> paradox. Following <em>Tan, Steinbach, Karpatne &amp; Kumar</em>, <strong>Data Mining</strong> is the automatic discovery of useful patterns in large data repositories satisfying 4 criteria: <strong>Novel</strong>, <strong>Non-trivial</strong> (beyond SQL queries), <strong>Actionable</strong>, and <strong>Understandable</strong>.</p>"
        },
        callout: {
          type: 'warn',
          uz: "<strong>Real misol (Google Flu Trends, 2008–2015):</strong> Google qidiruv so'rovlari orqali gripp to'lqinini 1–2 hafta oldin bashorat qildi, ammo 2015-yilda model xato bera boshladi, chunki qidiruv xulqi o'zgardi (Concept Drift) va model tasodifiy korrelyatsiyalarga tayangan edi.",
          en: "<strong>Real Case (Google Flu Trends):</strong> Search trends beat CDC reports by 1–2 weeks in 2008, but overpredicted by 2015 due to shifted search habits and spurious correlations."
        }
      },
      {
        heading: { uz: "1.2. KDD ning 7 bosqichi va CRISP-DM standarti", en: "1.2. The 7 Stages of KDD & CRISP-DM" },
        bodyHtml: {
          uz: "<p><strong>KDD (Knowledge Discovery in Databases)</strong> — xom ma'lumot yig'ishdan boshlab bilimni taqdim etishgacha bo'lgan butun <strong>7 bosqichli</strong> iterativ jarayon: (1) Ma'lumot to'plash (Collection), (2) Tanlash (Selection), (3) Oldindan tozalash (Preprocessing), (4) O'zgartirish (Transformation), (5) <strong>Data Mining</strong> (algoritmlar qo'llash — markaziy 5-bosqich), (6) Naqshni baholash (Evaluation), (7) Bilimni taqdim etish (Presentation).</p><p>Sanoatda eng mashhur 6 fazali standart <strong>CRISP-DM</strong> bo'lib, uning birinchi bosqichi <strong>Biznesni tushunish (Business Understanding)</strong> hisoblanadi.</p>",
          en: "<p><strong>KDD</strong> is the full <strong>7-stage</strong> iterative pipeline: (1) Collection, (2) Selection, (3) Preprocessing, (4) Transformation, (5) <strong>Data Mining</strong> (the core 5th stage), (6) Evaluation, and (7) Presentation. The leading industry methodology is 6-phase <strong>CRISP-DM</strong>, starting with <strong>Business Understanding</strong>.</p>"
        },
        widget: 'kdd-pipeline'
      },
      {
        heading: { uz: "1.3. Data Mining masalalari tasnifi (Predictive vs Descriptive)", en: "1.3. Predictive vs Descriptive Tasks (Tan Ch. 1.4)" },
        bodyHtml: {
          uz: "<p>Tan darsligiga ko'ra Data Mining masalalari ikki asosiy sinfga bo'linadi:</p><ul><li><strong>Bashoratlovchi (Predictive):</strong> Maqsadli o'zgaruvchi qiymatini topish — <em>Tasniflash (Classification)</em> diskret sinf uchun (spam/spam emas), <em>Regressiya (Regression)</em> uzluksiz son uchun (uy narxi).</li><li><strong>Tasvirlovchi (Descriptive):</strong> Ichki tuzilishni ochish — <em>Klasterlash (Clustering)</em> yorliqsiz o'xshash obyektlarni guruhlash, <em>Assotsiativ qoidalar</em> birga uchraydigan elementlar, <em>Anomaliya aniqlash</em> noyob chetlanishlar.</li></ul>",
          en: "<p>Per Tan Ch. 1.4: <strong>Predictive tasks</strong> predict target attributes (<em>Classification</em> = discrete label; <em>Regression</em> = continuous value). <strong>Descriptive tasks</strong> summarize underlying structure (<em>Clustering</em>, <em>Association Rules</em>, <em>Anomaly Detection</em>).</p>"
        },
        table: {
          headers: { uz: ["Mezon", "SQL", "Statistika", "Data Mining"], en: ["Criteria", "SQL", "Statistics", "Data Mining"] },
          rows: {
            uz: [
              ["Maqsad", "Aniq faktni chiqarish", "Gipotezani tekshirish", "Yashirin naqsh kashf etish"],
              ["Yondashuv", "Deterministik so'rov", "Nazariya → Eksperiment", "Ma'lumotga asoslangan qidiruv"],
              ["Natija", "Ma'lum jadval yig'indisi", "p-qiymat va tasdiq", "Umumlashtiruvchi model"]
            ],
            en: [
              ["Goal", "Retrieve known facts", "Test hypothesis", "Discover hidden patterns"],
              ["Method", "Deterministic query", "Theory-driven test", "Data-driven algorithm search"],
              ["Output", "Exact rows/sums", "p-value confirmation", "Predictive/descriptive models"]
            ]
          }
        }
      },
      {
        heading: { uz: "1.4. Katta Ma'lumotlar Davridagi Muammolar (Tan Ch. 1.3)", en: "1.4. Motivating Challenges of Data Mining" },
        bodyHtml: {
          uz: "<p>Data Mining rivojiga turtki bo'lgan asosiy qiyinchiliklar: <strong>Scalability</strong> (gigabayt/terabayt jadvallarda ishlash), <strong>High Dimensionality</strong> (minglab atributlar), <strong>Heterogeneous &amp; Complex Data</strong> (matn, graf, vaqtli qatorlar), <strong>Data Ownership &amp; Privacy</strong> (maxfiylik) va <strong>Non-traditional Analysis</strong>.</p>",
          en: "<p>Key challenges highlighted in Tan Ch. 1.3: <strong>Scalability</strong>, <strong>High Dimensionality</strong>, <strong>Heterogeneous/Complex Data</strong> (text, graphs, streams), and <strong>Data Privacy</strong>.</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "M1: Data Mining va KDD jarayoni", en: "M1: Intro to Data Mining & KDD" }, subtitle: { uz: "Tan Darsligi 1-bob · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 1 · MITQ2506 · 80 min" }, points: { uz: ["Ma'lumot portlashi va DRIP paradoksi", "Data Mining ta'rifi va 4 ta mezon", "KDD 7 bosqichi va CRISP-DM", "Predictive vs Descriptive masalalar", "L1 Python & Jupyter EDA"], en: ["Data explosion & DRIP paradox", "Definition & 4 validity criteria", "7-stage KDD & CRISP-DM", "Predictive vs Descriptive taxonomy", "L1 Python & Jupyter EDA"] } },
      { title: { uz: "DRIP Paradoksi (Data Rich, Information Poor)", en: "The DRIP Paradox" }, points: { uz: ["Sensorlar, bank kartalari va veb-loglar har soniyada ma'lumot yaratadi", "Omborlar to'la, lekin boshqaruv qarorlari uchun bilim yetishmaydi", "Data Mining xom jadvallardan yashirin va foydali naqshlarni chiqaradi"], en: ["Every swipe, click, and sensor ping creates raw logs", "Storage is cheap; actionable knowledge is scarce", "Data Mining bridges raw data to decisions"] } },
      { title: { uz: "Data Mining bo'lishi uchun 4 ta Shart", en: "4 Criteria for Data Mining Results" }, points: { uz: ["1. Yangi (Novel) — oldindan noma'lum bilim", "2. Trivial emas — oddiy SQL SELECT bilan chiqmaydi", "3. Amalda foydali (Actionable) — qarorga asos bo'ladi", "4. Tushunarli (Understandable) — mutaxassis izohlay oladi"], en: ["1. Novel — previously unknown", "2. Non-trivial — beyond simple SQL queries", "3. Actionable — drives real decisions", "4. Understandable — domain-interpretable"] } },
      { title: { uz: "Case Study: Google Flu Trends (2008–2015)", en: "Case Study: Google Flu Trends" }, points: { uz: ["2008: qidiruv so'rovlari orqali grippni 1–2 hafta oldin bashorat qildi", "2015: model haqiqiy ko'rsatkichni 2 baravar oshirib yubordi", "Sabab: qidiruv xulqi o'zgardi va model tasodifiy naqshlarga tayandi"], en: ["2008: predicted outbreaks 1–2 weeks ahead of CDC", "2015: failed due to changing user behavior & spurious correlations"] } },
      { title: { uz: "Talabalarga savol (SQL vs Data Mining)", en: "Class Discussion" }, discussion: { q: { uz: "Do'kondagi 'O'tgan oyda jami 120 mln so'mlik non sotildi' hisoboti Data Mining mi?", en: "Is 'Last month bread revenue totaled \$12,000' considered Data Mining?" }, a: { uz: "Yo'q — bu trivial SQL <code>SUM()</code> so'rovi. Data Mining esa 'Juma kuni sut olganlarning 78% sariyog' ham oladi' kabi yashirin bog'liqlikni topadi.", en: "No — that is a trivial SQL aggregation. Data Mining discovers hidden rules like '78% of milk buyers also buy butter'." } } },
      { title: { uz: "KDD (Knowledge Discovery in Databases) 7 bosqichi", en: "7 Stages of KDD" }, points: { uz: ["1. Data Collection → 2. Selection → 3. Preprocessing → 4. Transformation", "5. Data Mining (markaziy algoritmik bosqich!)", "6. Pattern Evaluation → 7. Knowledge Presentation", "KDD chiziqli emas: xato chiqsa oldingi bosqichga qaytiladi"], en: ["1. Collection → 2. Selection → 3. Preprocessing → 4. Transformation", "5. Data Mining (core algorithmic step)", "6. Evaluation → 7. Presentation", "Iterative feedback loops back to earlier stages"] } },
      { title: { uz: "Interaktiv KDD Konveyeri", en: "Interactive KDD Explorer" }, widget: 'kdd-pipeline' },
      { title: { uz: "CRISP-DM Sanoat Standarti (1999)", en: "CRISP-DM Standard (6 Phases)" }, points: { uz: ["1. Biznesni tushunish (Business Understanding) — birinchi qadam!", "2. Ma'lumotni tushunish → 3. Ma'lumotni tayyorlash", "4. Modellash → 5. Baholash → 6. Joriy etish (Deployment)"], en: ["1. Business Understanding (first phase!)", "2. Data Understanding → 3. Data Preparation", "4. Modeling → 5. Evaluation → 6. Deployment"] } },
      { title: { uz: "SQL, Statistika va Data Mining", en: "SQL vs Statistics vs Data Mining" }, table: { headers: { uz: ["Mezon", "SQL", "Statistika", "Data Mining"], en: ["Criteria", "SQL", "Statistics", "Data Mining"] }, rows: { uz: [["Maqsad", "Fakt topish", "Gipoteza tekshirish", "Naqsh kashf etish"], ["Yondashuv", "So'rov", "Eksperiment", "Ma'lumotga asoslangan"], ["Natija", "Ma'lum fakt", "p-qiymat", "Yangi qonuniyat"]], en: [["Goal", "Retrieve facts", "Test hypothesis", "Discover patterns"], ["Approach", "Query", "Experiment", "Data-driven"], ["Output", "Known facts", "p-value", "Hidden models"]] } } },
      { title: { uz: "Bashoratlovchi (Predictive) Masalalar", en: "Predictive Tasks (Tan Ch. 1.4)" }, points: { uz: ["Tasniflash (Classification): diskret sinflar ('spam' / 'oddiy', 'xavfli' / 'xavfsiz')", "Regressiya (Regression): uzluksiz sonlar (ertangi harorat, uy narxi)"], en: ["Classification: discrete target categories", "Regression: continuous numerical target values"] } },
      { title: { uz: "Tasvirlovchi (Descriptive) Masalalar", en: "Descriptive Tasks (Tan Ch. 1.4)" }, points: { uz: ["Klasterlash (Clustering): o'xshash obyektlarni yorliqsiz guruhlash", "Assotsiatsiya (Association Rules): birga uchraydigan elementlar", "Anomaliya aniqlash (Anomaly Detection): g'ayritabiiy og'ishlar"], en: ["Clustering: grouping similar unlabeled objects", "Association Rules: co-occurring items", "Anomaly Detection: rare abnormal observations"] } },
      { title: { uz: "Katta Ma'lumotlar Muammolari (Tan 1.3)", en: "Data Mining Challenges (Tan Ch. 1.3)" }, points: { uz: ["Scalability: terabayt ma'lumotlarda tez ishlash", "High Dimensionality: yuzlab/minglab atributlar", "Complex Data: matn, rasm, graf va vaqtli oqimlar", "Maxfiylik (Privacy) va Etika"], en: ["Scalability on massive tables", "High dimensionality", "Heterogeneous complex data", "Privacy & ethical governance"] } }
    ],
    lab: {
      title: { uz: "L1: Python va Jupyter muhitida ma'lumotlarni yuklash va dastlabki tahlil", en: "L1: Loading & Exploratory Analysis in Python/Jupyter" },
      objective: { uz: "Titanic datasetini Pandas bilan yuklash, o'lchamlarni, yetishmayotgan qiymatlarni va dastlabki taqsimotlarni tahlil qilish.", en: "Load Titanic dataset in Pandas and inspect shape, missing counts, and survival distributions." },
      steps: [
        {
          title: { uz: "Datasetni yuklash va dastlabki ko'rish", en: "Load CSV & Inspect First Rows" },
          desc: { uz: "df.shape, columns va head() bilan jadval strukturasini tekshiring.", en: "Check dimensions, column names, and sample rows." },
          code: `import pandas as pd
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)
print("Shape:", df.shape)
print("Columns:", df.columns.tolist())
print(df.head(5))`
        },
        {
          title: { uz: "Statistik tavsif va Yetishmayotgan qiymatlar", en: "Summary Statistics & Missingness" },
          desc: { uz: "describe(), isnull().sum() va Pclass.value_counts() ni chiqaring.", en: "Inspect quartiles, missing counts, and Pclass breakdown." },
          code: `print(df.describe().round(2))
print("\\nMissing values:\\n", df.isnull().sum())
print("\\nPclass counts:\\n", df['Pclass'].value_counts().sort_index())`
        },
        {
          title: { uz: "Vizualizatsiya (Survived & Age)", en: "Basic Exploratory Plots" },
          desc: { uz: "Omon qolish ustunli grafigi va yosh gistogrammasini saqlang.", en: "Plot Survived bar chart and Age histogram." },
          code: `import matplotlib.pyplot as plt
fig, ax = plt.subplots(1, 2, figsize=(11, 4))
df['Survived'].value_counts().plot(kind='bar', ax=ax[0], color=['#ef4444', '#22c55e'])
ax[0].set_title("Survived (0=No, 1=Yes)")
df['Age'].dropna().hist(bins=20, ax=ax[1], color='#f59e0b', edgecolor='black')
ax[1].set_title("Age Distribution")
plt.tight_layout(); plt.savefig("l1_eda.png", dpi=150)`
        }
      ],
      variants: {
        uz: [
          "1-variant: Embarked ustuni bo'yicha omon qolish foizini groupby() bilan toping.",
          "2-variant: Sex va Pclass kesimida pivot_table yarating.",
          "3-variant: Eng qimmat 5 ta chipta (Fare) egasini chiqaring."
        ],
        en: [
          "Variant 1: Compute survival rate grouped by Embarked.",
          "Variant 2: Build a pivot_table across Sex and Pclass.",
          "Variant 3: Display the top 5 highest Fare rows."
        ]
      }
    },
    glossary: [
      { uz: "DRIP paradoksi", en: "DRIP Paradox", defUz: "Ma'lumot ko'p, lekin foydali bilim kam bo'lgan holat", defEn: "Data Rich, Information Poor paradox" },
      { uz: "KDD", en: "KDD", defUz: "Ma'lumotdan bilim kashf etishning 7 bosqichli jarayoni", defEn: "Knowledge Discovery in Databases 7-stage pipeline" },
      { uz: "CRISP-DM", en: "CRISP-DM", defUz: "Biznesni tushunishdan boshlanuvchi 6 fazali sanoat standarti", defEn: "6-phase Cross-Industry Standard Process" },
      { uz: "Tasniflash", en: "Classification", defUz: "Diskret sinf yorliqlarini bashoratlash (Predictive)", defEn: "Predicting discrete class labels" },
      { uz: "Klasterlash", en: "Clustering", defUz: "O'xshash obyektlarni yorliqsiz guruhlash (Descriptive)", defEn: "Grouping unlabeled similar objects" }
    ],
    quiz: [
      { q: { uz: "Data Mining natijasi bo'lishi uchun qaysi shart MAJBURIY EMAS?", en: "Which condition is NOT mandatory for Data Mining?" }, options: [{ label: 'A', uz: "Ilgari noma'lum yangi bilim", en: "Previously unknown novel pattern" }, { label: 'B', uz: "Amaliy qarorlar uchun foydali", en: "Practically useful for decisions" }, { label: 'C', uz: "Kamida bir terabayt hajm", en: "Minimum one-terabyte dataset" }, { label: 'D', uz: "Mutaxassisga tushunarli naqsh", en: "Human-understandable pattern" }], answer: 'C', explanation: { uz: "Nazariyada 4 shart: Yangi, Trivial emas, Foydali, Tushunarli — terabayt shart emas.", en: "The 4 criteria are Novel, Non-trivial, Actionable, and Understandable." } },
      { q: { uz: "KDD va Data Mining orasidagi munosabat qaysi?", en: "How are KDD and Data Mining related?" }, options: [{ label: 'A', uz: "Ikkalasi ham bir xil atamaning sinonimi", en: "Both are exact synonyms for the process" }, { label: 'B', uz: "Data Mining bu KDD ning markaziy 5-bosqichi", en: "Data Mining is Stage 5 of KDD" }, { label: 'C', uz: "KDD esa Data Mining ichidagi kichik qism", en: "KDD is a minor sub-step inside Mining" }, { label: 'D', uz: "Ular turli soha atamalari, bog'liq emas", en: "Unrelated terms from separate domains" }], answer: 'B', explanation: { uz: "KDD 7 bosqichli to'liq jarayon, Data Mining esa uning 5-bosqichidir.", en: "KDD has 7 stages; Data Mining is stage 5." } },
      { q: { uz: "CRISP-DM standartining birinchi bosqichi qaysi?", en: "What is Phase 1 of CRISP-DM?" }, options: [{ label: 'A', uz: "Ma'lumotni tayyorlash", en: "Data Preparation step" }, { label: 'B', uz: "Algoritmni modellash", en: "Algorithmic Modeling step" }, { label: 'C', uz: "Biznesni tushunish", en: "Business Understanding" }, { label: 'D', uz: "Natijani baholash", en: "Result Evaluation step" }], answer: 'C', explanation: { uz: "CRISP-DM Biznesni tushunishdan boshlanadi.", en: "CRISP-DM starts with Business Understanding." } },
      { q: { uz: "\"Mijozlarni xarid odatiga ko'ra guruhlash\" qaysi masala?", en: "\"Grouping customers by buying habits\" is which task?" }, options: [{ label: 'A', uz: "Tasniflash (Classification)", en: "Classification task" }, { label: 'B', uz: "Regressiya (Regression)", en: "Regression modeling" }, { label: 'C', uz: "Klasterlash (Clustering)", en: "Clustering discovery" }, { label: 'D', uz: "SQL agregatsiya", en: "SQL aggregation query" }], answer: 'C', explanation: { uz: "Yorliqsiz guruhlash Descriptive klasterlash masalasidir.", en: "Unlabeled grouping is Clustering." } },
      { q: { uz: "Google Flu Trends 2015-yilda nima sababdan xato bera boshladi?", en: "Why did Google Flu Trends err in 2015?" }, options: [{ label: 'A', uz: "Asosiy ma'lumotlar markazi elektrdan uzilib qolgani uchun", en: "Major data center outages corrupted the historical search logs" }, { label: 'B', uz: "Qidiruv xulqi o'zgargani va tasodifiy bog'liqliklarga tayangan", en: "Search habits shifted while relying on spurious correlations" }, { label: 'C', uz: "SQL so'rovlarida jadval indekslari noto'g'ri tuzilgani uchun", en: "Corrupted SQL database indexes dropped seasonal records" }, { label: 'D', uz: "Epidemiya ma'lumotlari to'liq shifrlanib yashirilgani uchun", en: "Hospital epidemic reports were fully encrypted offline" }], answer: 'B', explanation: { uz: "Nazariyada keltirilganidek, qidiruv xulqi o'zgarishi va tasodifiy korrelyatsiyalar xatoga olib keldi.", en: "Changing search behavior broke spurious correlations." } }
    ],
    matching: [
      { left: { uz: "DRIP paradoksi", en: "DRIP Paradox" }, right: { uz: "Ma'lumotga boy, ammo bilimi kam holat", en: "Data Rich, Information Poor state" } },
      { left: { uz: "Data Mining (KDD 5-bosqich)", en: "Data Mining (KDD Stage 5)" }, right: { uz: "Naqsh topuvchi algoritmlarni qo'llash", en: "Applying pattern-discovery algorithms" } },
      { left: { uz: "Tasniflash (Classification)", en: "Classification" }, right: { uz: "Diskret sinfni bashorat qilish", en: "Predicting discrete target labels" } },
      { left: { uz: "Klasterlash (Clustering)", en: "Clustering" }, right: { uz: "Yorliqsiz o'xshash obyektlarni guruhlash", en: "Grouping unlabeled similar objects" } }
    ],
    fillGap: [
      { text: { uz: "KDD jarayoni jami ___ ta bosqichdan iborat.", en: "The KDD pipeline consists of ___ total stages." }, answer: "7" },
      { text: { uz: "CRISP-DM standartining birinchi bosqichi ___ ni tushunishdir.", en: "The first phase of CRISP-DM is ___ Understanding." }, answer: ["Biznes", "Biznesni", "Business"] },
      { text: { uz: "Uzluksiz sonli qiymatni bashorat qiluvchi masala ___ deyiladi.", en: "Predicting a continuous numeric target is called ___." }, answer: ["Regressiya", "Regression"] }
    ]
  },

  // ==================== M2 / L2 ====================
  {
    id: 2,
    code: 'M2',
    labCode: 'L2',
    slug: '02-data-types',
    hours: 2,
    labs: 1,
    keywords: ['Nominal', 'Ordinal', 'Interval', 'Ratio', 'Mean', 'Median', 'Variance', 'Jaccard', 'Cosine', 'Tan Ch.2'],
    title: {
      uz: "Ma'lumotlar turlari va atributlar xususiyatlari",
      en: "Data Types & Attribute Characteristics"
    },
    description: {
      uz: "Nominal, Ordinal, Interval, Ratio shkalalari (Tan 2-bob); diskret/uzluksiz/asimetrik atributlar; o'rtacha, dispersiya, standart og'ish; ma'lumot sifati va yaqinlik (SMC, Jaccard, Cosine).",
      en: "Nominal, Ordinal, Interval, Ratio scales (Tan Ch. 2); discrete/continuous; descriptive statistics; data quality; and proximity measures."
    },
    sections: [
      {
        heading: { uz: "2.1. Ma'lumot obyekti va Atributlar (Tan, 2.1-bo'lim)", en: "2.1. Data Objects & Attributes (Tan Ch. 2.1)" },
        bodyHtml: {
          uz: "<p>Dataset — <strong>ma'lumot obyektlari</strong> (qatorlar, yozuvlar, namunalar) to'plamidan iborat bo'lib, har bir obyekt <strong>atributlar</strong> (ustunlar, xususiyatlar) bilan tavsiflanadi. Atribut qiymatlarining matematik xossalariga ko'ra Stevens shkalasi bo'yicha <strong>4 ta asosiy tur</strong> ajratiladi:</p>",
          en: "<p>A dataset consists of <strong>data objects</strong> (rows) described by <strong>attributes</strong> (columns). Based on permissible mathematical operations, attributes fall into <strong>4 measurement scales</strong> (Tan Ch. 2.1):</p>"
        },
        widget: 'data-types-sim',
        table: {
          headers: { uz: ["Atribut turi", "Ruxsat etilgan amallar", "Statistika", "Misol"], en: ["Attribute Type", "Permissible Ops", "Valid Statistics", "Examples"] },
          rows: {
            uz: [
              ["<strong>Nominal</strong>", "$=, \\neq$ (faqat farqlash)", "Moda (Mode), Entropiya", "ZIP kod, Ko'z rangi, Jins"],
              ["<strong>Ordinal</strong>", "$=, \\neq, <, >$ (tartiblash)", "Mediana, Kvartillar", "Baholar (A,B,C), O'lcham (S,M,L)"],
              ["<strong>Interval</strong>", "$+, -$ (farq ma'noli, 0 shartli)", "O'rtacha (Mean), Std Dev", "Harorat (°C, °F), Kalendar yili"],
              ["<strong>Ratio</strong>", "$\\times, \\div$ (haqiqiy mutlaq 0 bor!)", "Barchasi + Geometriya o'rtacha", "Yosh, Maosh, Masofa, Kelvin (°K)"]
            ],
            en: [
              ["<strong>Nominal</strong>", "$=, \\neq$ (distinctness)", "Mode, Entropy", "ZIP code, Eye color, Gender"],
              ["<strong>Ordinal</strong>", "$=, \\neq, <, >$ (order)", "Median, Percentiles", "Grades, Sizes (S,M,L)"],
              ["<strong>Interval</strong>", "$+, -$ (meaningful differences)", "Mean, Std Dev", "Temp (°C, °F), Calendar Year"],
              ["<strong>Ratio</strong>", "$\\times, \\div$ (true absolute zero!)", "All + Geometric Mean", "Age, Salary, Distance, Kelvin (°K)"]
            ]
          }
        },
        callout: {
          type: 'info',
          uz: "<strong>Muhim farq:</strong> 20°C harorat 10°C dan \"2 baravar issiq\" emas, chunki 0°C mutlaq nol (issiqlik yo'qligi) emas — Selsiy <strong>Interval</strong> shkalasi. <strong>Kelvin (°K)</strong> esa 0°K mutlaq nol bo'lgani uchun <strong>Ratio</strong> shkalasidir!",
          en: "<strong>Key Distinction:</strong> 20°C is NOT 'twice as hot' as 10°C because 0°C is arbitrary (<strong>Interval</strong>). <strong>Kelvin</strong> has an absolute zero so it is a <strong>Ratio</strong> scale!"
        }
      },
      {
        heading: { uz: "2.2. Diskret, Uzluksiz va Asimetrik Atributlar", en: "2.2. Discrete, Continuous & Asymmetric Attributes" },
        bodyHtml: {
          uz: "<ul><li><strong>Diskret (Discrete):</strong> chekli yoki sanaladigan qiymatlar to'plami (farzandlar soni, ZIP kod, so'zlar soni).</li><li><strong>Uzluksiz (Continuous):</strong> haqiqiy sonlar oralig'idagi ixtiyoriy qiymat (vazn, harorat, kuchlanish).</li><li><strong>Asimetrik ikkilik (Asymmetric Binary):</strong> faqat <code>1</code> (mavjudlik) qiymati muhim bo'lgan holat! Masalan, supermarket chekida 10,000 tovardan mijoz faqat 5 tasini oladi — qolgan 9,995 ta <code>0</code> (olmagan) qiymatining mos tushishi ikki mijozni o'xshash qilmaydi!</li></ul>",
          en: "<ul><li><strong>Discrete:</strong> finite or countably infinite values (counts, ZIP codes).</li><li><strong>Continuous:</strong> real-valued measurements (weight, voltage).</li><li><strong>Asymmetric Binary:</strong> only presence (<code>1</code>) is informative (e.g., market baskets or document words where <code>0-0</code> matches are uninformative).</li></ul>"
        }
      },
      {
        heading: { uz: "2.3. Statistik Ko'rsatkichlar: O'rta qiymat, Dispersiya va Standart og'ish", en: "2.3. Descriptive Statistics: Mean, Variance & Std Dev" },
        bodyHtml: {
          uz: "<p>Ma'lumotning markaziy tendensiyasini <strong>O'rtacha ($\\bar{x}$)</strong>, <strong>Mediana</strong> (outlierlarga chidamli!) va <strong>Moda</strong>; tarqalishini esa <strong>Dispersiya ($s^2$)</strong> va <strong>Standart og'ish ($s$)</strong> o'lchaydi. Agar taqsimot o'ngga qiyshiq (right-skewed, masalan ish haqi) bo'lsa, o'rtacha medianadan katta bo'ladi ($\\bar{x} > \\text{Median}$).</p>",
          en: "<p>Central tendency uses <strong>Mean ($\\bar{x}$)</strong>, <strong>Median</strong> (outlier-robust), and <strong>Mode</strong>; spread uses <strong>Variance ($s^2$)</strong> and <strong>Standard Deviation ($s$)</strong>. In right-skewed data, $\\bar{x} > \\text{Median}$.</p>"
        },
        latex: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i, \\qquad s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})^2, \\qquad s = \\sqrt{s^2}"
      },
      {
        heading: { uz: "2.4. Ma'lumotlar Sifatini Baholash Mezonlari va Yaqinlik O'lchovlari", en: "2.4. Data Quality & Proximity Measures (Tan Ch. 2.4)" },
        bodyHtml: {
          uz: "<p><strong>Sifat mezonlari (Tan Ch. 2.2):</strong> <em>Aniqlik (Accuracy)</em>, <em>To'liqlik (Completeness)</em>, <em>Izchillik (Consistency)</em>, <em>Dolzarblik (Timeliness)</em> va <em>Ishonchlilik (Believability)</em>.</p><p><strong>Yaqinlik (Similarity) o'lchovlari:</strong> Ikkilik simmetrik atributlar uchun <strong>SMC (Simple Matching Coefficient)</strong> $(f_{11}+f_{00})/(f_{11}+f_{10}+f_{01}+f_{00})$ ishlatiladi; asimetrik (savat/matn) uchun esa <code>0-0</code> ni tashlab yuboradigan <strong>Jaccard koeffitsienti</strong> qo'llaniladi!</p>",
          en: "<p><strong>Data Quality Dimensions:</strong> Accuracy, Completeness, Consistency, Timeliness, Believability. <strong>Proximity:</strong> symmetric binary attributes use <strong>SMC</strong>, while asymmetric sparse attributes drop <code>0-0</code> matches via the <strong>Jaccard Coefficient</strong>.</p>"
        },
        latex: "\\text{SMC} = \\frac{f_{11} + f_{00}}{f_{11}+f_{10}+f_{01}+f_{00}}, \\qquad J = \\frac{f_{11}}{f_{11} + f_{10} + f_{01}}"
      }
    ],
    slides: [
      { title: { uz: "M2: Ma'lumotlar turlari va atributlar", en: "M2: Data Types & Attribute Properties" }, subtitle: { uz: "Tan Darsligi 2-bob · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 2 · MITQ2506 · 80 min" }, points: { uz: ["Ma'lumot obyektlari va Atributlar tushunchasi", "4 ta shkala: Nominal, Ordinal, Interval, Ratio", "Diskret, Uzluksiz va Asimetrik ikkilik atributlar", "Markaziy tendensiya va Tarqalish (Dispersiya, Std)", "Ma'lumot sifati, SMC vs Jaccard va Lab 2"], en: ["Data objects & attributes", "Nominal, Ordinal, Interval, Ratio scales", "Discrete, Continuous & Asymmetric binary", "Mean, Median, Variance & Std Dev", "Data quality, SMC vs Jaccard & Lab 2"] } },
      { title: { uz: "Obyektlar va Atributlar", en: "Data Objects & Attributes (Tan 2.1)" }, points: { uz: ["Ma'lumot obyekti (Record/Sample) — jadvaldagi bitta qator (talaba, bemor, chek)", "Atribut (Feature/Dimension) — obyektning xossasi (yosh, GPA, harorat)", "Bir atribut turli o'lchov shkalasida bo'lishi mumkin"], en: ["Data object = entity/row (patient, student, transaction)", "Attribute = property/column describing an object"] } },
      { title: { uz: "4 ta O'lchov Shkalasi (Stevens / Tan 2.1)", en: "The 4 Attribute Measurement Scales" }, table: { headers: { uz: ["Shkala", "Amallar", "Misol"], en: ["Scale", "Operations", "Example"] }, rows: { uz: [["Nominal", "= , ≠", "ZIP kod, Rang"], ["Ordinal", "= , ≠ , < , >", "Baho (A,B,C), S/M/L"], ["Interval", "+ , - (0 shartli)", "°C, °F, Yil"], ["Ratio", "× , ÷ (mutlaq 0)", "Yosh, Maosh, °K"]], en: [["Nominal", "= , ≠", "ZIP code, Color"], ["Ordinal", "= , ≠ , < , >", "Grades, S/M/L"], ["Interval", "+ , -", "°C, °F, Year"], ["Ratio", "× , ÷ (true 0)", "Age, Salary, °K"]] } } },
      { title: { uz: "Interaktiv Shkala Tadqiqotchisi", en: "Interactive Attribute Scale Explorer" }, widget: 'data-types-sim' },
      { title: { uz: "Talabalarga savol (Interval vs Ratio)", en: "Class Discussion: °C vs Kelvin" }, discussion: { q: { uz: "Bugun havo +20°C, kecha +10°C edi. 'Bugun kechagidan 2 baravar issiq' deyish matematik jihatdan to'g'rimi?", en: "Today is 20°C and yesterday was 10°C. Is it mathematically valid to say 'Today is twice as hot as yesterday'?" }, a: { uz: "<strong>YO'Q!</strong> Selsiy (°C) shkalasida 0°C issiqlik yo'qligini bildirmaydi (u <strong>Interval</strong> shkala, ko'paytirish/bo'lish ma'nosiz). Faqat mutlaq noli bor <strong>Kelvin (°K — Ratio)</strong> da nisbat olish mumkin!", en: "<strong>NO!</strong> 0°C is an arbitrary zero (<strong>Interval</strong> scale). Only <strong>Kelvin (Ratio)</strong> has an absolute zero permitting ratios!" } } },
      { title: { uz: "Diskret vs Uzluksiz va Asimetrik Atributlar", en: "Discrete, Continuous & Asymmetric Binary" }, points: { uz: ["Diskret: sanash mumkin bo'lgan qiymatlar (farzand soni, ZIP kod)", "Uzluksiz: haqiqiy son (bo'y, vazn, bosim)", "Asimetrik ikkilik: faqat '1' (bor) muhim, '0-0' mosligi ahamiyatsiz (savat va matn)"], en: ["Discrete: finite/countable values", "Continuous: real numbers", "Asymmetric binary: 1 is rare & informative; 0-0 match is ignored"] } },
      { title: { uz: "Markaziy Tendensiya: Mean, Median, Mode", en: "Central Tendency Measures" }, latex: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i", points: { uz: ["O'rtacha (Mean): Interval va Ratio uchun, lekin outlierlarga juda sezgir", "Mediana: Ordinal, Interval, Ratio uchun — outlierlarga chidamli!", "Moda: Nominal (va barcha turlar) uchun eng ko'p uchragan qiymat"], en: ["Mean: sensitive to extreme outliers", "Median: outlier-resistant middle value", "Mode: only central measure valid for Nominal"] } },
      { title: { uz: "Dispersiya va Standart Og'ish", en: "Variance & Standard Deviation" }, latex: "s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})^2, \\qquad s = \\sqrt{s^2}", points: { uz: ["Dispersiya (s²): ma'lumotning o'rtacha atrofida tarqalishi (kvadrat birlikda)", "Standart og'ish (s): asl birlikdagi tarqalish (talqin qilish qulay)", "Qiyshiqlik (Skewness): o'ngga qiyshiq taqsimotda Mean > Median"], en: ["Variance (s²): squared spread around mean", "Std Dev (s): spread in original units", "Right-skewed data has Mean > Median"] } },
      { title: { uz: "Qo'lda hisoblash misoli: Mean va Std Dev", en: "Worked Example: Mean & Variance" }, points: { uz: ["Qiymatlar: [2, 4, 4, 4, 5, 5, 7, 9] (n = 8)", "Mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5.0", "Kvadrat og'ishlar yig'indisi = 9+1+1+1+0+0+4+16 = 32", "Namuna dispersiyasi s² = 32 / (8 - 1) = 4.57 → s ≈ 2.14"], en: ["Data: [2,4,4,4,5,5,7,9] (n=8), Mean = 5.0", "Sum of squared deviations = 32", "Sample Variance s² = 32 / 7 = 4.57 → s ≈ 2.14"] } },
      { title: { uz: "Ma'lumot Sifati Mezonlari (Tan 2.2)", en: "Data Quality Dimensions (Tan Ch. 2.2)" }, points: { uz: ["Aniqlik (Accuracy) — o'lchov xatolari yo'qligi", "To'liqlik (Completeness) — NaN qiymatlar kamligi", "Izchillik (Consistency) — bir-biriga zid yozuvlar yo'qligi (Yosh=5, Kasb=Professor ✗)", "Dolzarblik (Timeliness) — ma'lumot eskirib qolmaganligi"], en: ["Accuracy, Completeness, Consistency (no contradictions like Age=5 & Job=CEO), and Timeliness"] } },
      { title: { uz: "Yaqinlik O'lchovlari: SMC vs Jaccard (Tan 2.4)", en: "Binary Similarity: SMC vs Jaccard" }, latex: "\\text{SMC}=\\frac{f_{11}+f_{00}}{f_{11}+f_{10}+f_{01}+f_{00}}, \\qquad J=\\frac{f_{11}}{f_{11}+f_{10}+f_{01}}", points: { uz: ["SMC (Simple Matching): simmetrik ikkilikda (Ha/Yo'q test savollari)", "Jaccard: asimetrikda (2 ta do'kon savatida ikkalasi ham olmagan 9990 ta tovarni hisobga olmaslik uchun!)"], en: ["SMC counts 0-0 matches (symmetric traits)", "Jaccard ignores 0-0 matches (essential for sparse baskets/text)"] } }
    ],
    lab: {
      title: { uz: "L2: Ma'lumotlar turlari va atributlarning statistik xususiyatlarini tahlil qilish", en: "L2: Programmatic Attribute Types & Statistical Profiling" },
      objective: { uz: "Pandas da Nominal, Ordinal, Interval va Ratio ustunlarini ajratish, statistik ko'rsatkichlar (Mean, Median, Variance, Skewness) va SMC/Jaccard hisoblash.", en: "Profile Nominal/Ordinal/Numeric columns, compute variance/skewness, and calculate SMC vs Jaccard." },
      steps: [
        {
          title: { uz: "Atribut turlarini yaratish va Statistik profil", en: "Create Mixed-Type Dataset & Descriptive Stats" },
          desc: { uz: "Nominal, Ordinal (Categorical ordered) va Ratio ustunlarni Pandas da tekshiring.", en: "Construct Nominal, Ordinal, and Ratio columns and inspect statistics." },
          code: `import pandas as pd
df = pd.DataFrame({
    'Shahar': pd.Series(['Andijon','Toshkent','Andijon','Buxoro','Toshkent'], dtype='category'),
    'Daraja': pd.Categorical(['Past','O\\'rta','Yuqori','O\\'rta','Yuqori'], categories=['Past','O\\'rta','Yuqori'], ordered=True),
    'Harorat_C': [12.0, 18.5, 15.0, 22.0, 20.5],
    'Maosh_mln': [4.2, 8.5, 5.0, 6.1, 25.0]
})
print(df.dtypes)
print("\\nMaosh Mean vs Median:", df['Maosh_mln'].mean(), "vs", df['Maosh_mln'].median())
print("Variance:", round(df['Maosh_mln'].var(), 2), "| Std:", round(df['Maosh_mln'].std(), 2))`
        },
        {
          title: { uz: "Ma'lumot Sifati Auditi (Dublikat, Ziddiyat, Skewness)", en: "Data Quality & Skewness Audit" },
          desc: { uz: "Har raqamli ustun uchun skewness va outlier ta'sirini tekshiring.", en: "Compute skewness and check uniqueness across columns." },
          code: `print("Skewness (Maosh):", round(df['Maosh_mln'].skew(), 3))
print("Harorat Skewness:", round(df['Harorat_C'].skew(), 3))
print("Nominal Moda:", df['Shahar'].mode()[0])
print("Ordinal Tartib Min/Max:", df['Daraja'].min(), "->", df['Daraja'].max())`
        },
        {
          title: { uz: "SMC vs Jaccard O'xshashlik Koeffitsientlari", en: "Compute SMC vs Jaccard on Binary Vectors" },
          desc: { uz: "Ikki siyrak xarid vektori uchun SMC va Jaccard farqini kodda ko'ring.", en: "Contrast SMC and Jaccard on sparse binary baskets." },
          code: `import numpy as np
x = np.array([1, 0, 0, 0, 0, 0, 0, 0, 1, 0])
y = np.array([1, 0, 0, 0, 0, 0, 0, 1, 0, 0])
f11 = np.sum((x == 1) & (y == 1))
f00 = np.sum((x == 0) & (y == 0))
smc = (f11 + f00) / len(x)
jaccard = f11 / np.sum((x == 1) | (y == 1))
print(f"SMC = {smc:.2f} (0-0 chalg'itadi!) | Jaccard = {jaccard:.2f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: Titanic datasetidagi barcha ustunlarni Nominal, Ordinal, Interval, Ratio guruhlariga ajratib dict ko'rinishida chop eting.",
          "2-variant: Maosh ustuniga scipy.stats.trim_mean(0.1) (trimmed mean) qo'llab oddiy mean bilan taqqoslang.",
          "3-variant: Ikki vektor orasida Cosine Similarity funksiyasini NumPy da yozing."
        ],
        en: [
          "Variant 1: Classify every column of Titanic into Nominal, Ordinal, Interval, or Ratio.",
          "Variant 2: Compare regular mean vs 10% trimmed mean on right-skewed income.",
          "Variant 3: Implement Cosine Similarity in pure NumPy."
        ]
      }
    },
    glossary: [
      { uz: "Nominal / Ordinal", en: "Nominal / Ordinal", defUz: "Faqat nomlash (=,≠) va tartiblash (<,>) shkalalari", defEn: "Qualitative scales supporting equality (=) and order (<)" },
      { uz: "Interval / Ratio", en: "Interval / Ratio", defUz: "Shartli nol (+,-) va mutlaq nol (×,÷) ga ega miqdoriy shkalalar", defEn: "Numeric scales with arbitrary zero vs true zero" },
      { uz: "SMC / Jaccard", en: "SMC / Jaccard", defUz: "Simmetrik (0-0 bilan) va asimetrik (0-0 siz) ikkilik o'xshashlik", defEn: "Symmetric vs asymmetric binary similarity coefficients" },
      { uz: "Dispersiya", en: "Variance", defUz: "O'rtachadan kvadratik chetlanishlar o'rtachasi (s²)", defEn: "Average squared deviation from the mean (s²)" }
    ],
    quiz: [
      { q: { uz: "Selsiy (°C) harorat shkalasi qaysi atribut turiga kiradi?", en: "Which attribute scale does Celsius (°C) belong to?" }, options: [{ label: 'A', uz: "Nominal shkala", en: "Nominal scale" }, { label: 'B', uz: "Ordinal shkala", en: "Ordinal scale" }, { label: 'C', uz: "Interval shkala", en: "Interval scale" }, { label: 'D', uz: "Ratio shkala", en: "Ratio scale" }], answer: 'C', explanation: { uz: "Nazariyada keltirilganidek, 0°C mutlaq nol emas, shuning uchun Selsiy Interval shkaladir.", en: "0°C is arbitrary, making Celsius an Interval scale." } },
      { q: { uz: "Qaysi o'lchov shkalasida mutlaq nol (true zero) mavjud va ×, ÷ amallari ma'noli?", en: "Which scale has a true absolute zero allowing ratios (×, ÷)?" }, options: [{ label: 'A', uz: "Nominal shkala", en: "Nominal scale" }, { label: 'B', uz: "Ordinal shkala", en: "Ordinal scale" }, { label: 'C', uz: "Interval shkala", en: "Interval scale" }, { label: 'D', uz: "Ratio shkala", en: "Ratio scale" }], answer: 'D', explanation: { uz: "Ratio shkalasida (Yosh, Maosh, Kelvin) haqiqiy nol mavjud.", en: "Ratio scales possess an absolute zero." } },
      { q: { uz: "O'ngga qiyshiq (right-skewed) taqsimotda O'rtacha va Mediana munosabati qanday?", en: "In a right-skewed distribution, how do Mean and Median compare?" }, options: [{ label: 'A', uz: "O'rtacha Medianadan katta", en: "Mean exceeds Median" }, { label: 'B', uz: "O'rtacha Medianadan kichik", en: "Mean trails Median" }, { label: 'C', uz: "Ikkalasi doim teng bo'ladi", en: "Both remain equal" }, { label: 'D', uz: "Ular solishtirib bo'lmaydi", en: "Scale is undefined" }], answer: 'A', explanation: { uz: "Katta qiymatlar o'rtachani o'ngga tortadi, shu sabab Mean > Median.", en: "Right tail pulls Mean above Median." } },
      { q: { uz: "Asimetrik ikkilik ma'lumotda (masalan, supermarket savatida) '0-0' mosligini tashlaydigan ko'rsatkich qaysi?", en: "Which binary similarity drops uninformative '0-0' matches in asymmetric data?" }, options: [{ label: 'A', uz: "SMC koeffitsienti", en: "SMC coefficient" }, { label: 'B', uz: "Jaccard koeffitsienti", en: "Jaccard coefficient" }, { label: 'C', uz: "Moda ko'rsatkichi", en: "Mode statistic" }, { label: 'D', uz: "Dispersiya qiymati", en: "Variance measure" }], answer: 'B', explanation: { uz: "Jaccard = f11 / (f11 + f10 + f01) — f00 ni hisobga olmaydi.", en: "Jaccard excludes f00 (0-0) matches." } },
      { q: { uz: "Nominal atributlar uchun ruxsat etilgan yagona markaziy tendensiya o'lchovi qaysi?", en: "Which central tendency measure is valid for Nominal attributes?" }, options: [{ label: 'A', uz: "Arifmetik o'rtacha", en: "Arithmetic Mean" }, { label: 'B', uz: "Tartiblangan Mediana", en: "Ranked Median" }, { label: 'C', uz: "Eng ko'p Moda", en: "Frequent Mode" }, { label: 'D', uz: "Standart og'ish", en: "Std Deviation" }], answer: 'C', explanation: { uz: "Nominal qiymatlarni tartiblash yoki qo'shish mumkin emas, faqat eng ko'p uchraganini (Moda) topish mumkin.", en: "Only Mode (most frequent value) is valid for Nominal data." } }
    ],
    matching: [
      { left: { uz: "Nominal (ZIP kod, Jins)", en: "Nominal (ZIP, Gender)" }, right: { uz: "Faqat = va ≠ amallari, Moda", en: "Only =, ≠ operations; Mode" } },
      { left: { uz: "Ordinal (Baholar, S/M/L)", en: "Ordinal (Grades, S/M/L)" }, right: { uz: "Tartiblash (<, >), Mediana", en: "Ordering (<, >); Median" } },
      { left: { uz: "Interval (°C, Yil)", en: "Interval (°C, Year)" }, right: { uz: "Farq (+, -) ma'noli, 0 shartli", en: "Differences (+, -), arbitrary 0" } },
      { left: { uz: "Ratio (Yosh, Kelvin)", en: "Ratio (Age, Kelvin)" }, right: { uz: "Mutlaq 0 bor, × va ÷ ma'noli", en: "True 0; × and ÷ valid" } }
    ],
    fillGap: [
      { text: { uz: "Haroratning ___ shkalasida mutlaq nol bo'lgani uchun u Ratio turiga kiradi.", en: "Because ___ temperature has an absolute zero, it is a Ratio scale." }, answer: ["Kelvin", "°K", "K"] },
      { text: { uz: "Asimetrik ikkilik vektorlarda 0-0 mosligini tashlab yuboruvchi koeffitsient ___ deyiladi.", en: "The binary similarity that ignores 0-0 matches is the ___ coefficient." }, answer: "Jaccard" },
      { text: { uz: "Standart og'ish s dispersiya s² ning kvadrat ___ ga teng.", en: "Standard deviation s is the square ___ of variance s²." }, answer: ["ildizi", "root"] }
    ]
  },

  // ==================== M3 / L3 ====================
  {
    id: 3,
    code: 'M3',
    labCode: 'L3',
    slug: '03-data-cleaning',
    hours: 2,
    labs: 1,
    keywords: ['Data Cleaning', 'Missing Values', 'MCAR', 'MAR', 'MNAR', 'Imputation', 'Noise', 'Outliers', 'IQR', 'MAD', 'Binning'],
    title: {
      uz: "Ma'lumotlarni tozalash va yetishmayotgan qiymatlarni tiklash usullari",
      en: "Data Cleaning & Missing Value Imputation"
    },
    description: {
      uz: "Ma'lumot tozalash (Tan 2.3): MCAR/MAR/MNAR, Deletion vs Mean/Median/Mode/KNN/Regression Imputation, shovqinni silliqlash (Binning) va dublikatlarni yo'qotish.",
      en: "Data cleaning (Tan Ch. 2.3): missingness mechanisms, imputation methods, duplicate & contradiction removal, and smoothing noisy values."
    },
    sections: [
      {
        heading: { uz: "3.1. Ma'lumotlarni Tozalash Nima va Nega Muhim?", en: "3.1. Why Data Cleaning Matters (Garbage In, Garbage Out)" },
        bodyHtml: {
          uz: "<p>Data Mining loyihalarining <strong>60–80% vaqti</strong> ma'lumotlarni tayyorlashga ketadi (<em>\"Garbage In, Garbage Out\"</em>). Ma'lumotlarni tozalash to'rtta muammoni hal qiladi: (1) <strong>Yetishmayotgan qiymatlar (NaN)</strong>, (2) <strong>Shovqin (Noise)</strong> — tasodifiy xato yoki sensor buzilishi, (3) <strong>Dublikatlar (Duplicates)</strong> va (4) <strong>Mantiqiy ziddiyatlar</strong> (Yosh=4, Haydovchilik guvohnomasi=Ha).</p>",
          en: "<p>Data preparation consumes <strong>60–80%</strong> of project time (<em>Garbage In, Garbage Out</em>). Cleaning resolves 4 defects: missing values (NaN), random noise, duplicate rows, and logical contradictions.</p>"
        }
      },
      {
        heading: { uz: "3.2. Yetishmayotgan Qiymatlarning 3 Mexanizmi: MCAR, MAR, MNAR", en: "3.2. Missingness Mechanisms: MCAR, MAR, MNAR" },
        bodyHtml: {
          uz: "<ul><li><strong>MCAR (Missing Completely At Random):</strong> Yo'qolish mutlaqo tasodifiy (masalan, pochta serveri tasodifan 2% so'rovnomani yo'qotdi). O'chirish xavfsiz.</li><li><strong>MAR (Missing At Random):</strong> Yo'qolish boshqa kuzatilgan ustunga bog'liq (masalan, ayollar yoshini kamroq yozadi). Boshqa ustunlar orqali (KNN/Regression) tiklash mumkin.</li><li><strong>MNAR (Missing Not At Random):</strong> Yo'qolish qiymatning o'ziga bog'liq (juda boy odamlar daromadini yashiradi) — oddiy o'chirish kuchli <strong>siljish (bias)</strong> beradi!</li></ul>",
          en: "<ul><li><strong>MCAR:</strong> Missingness is purely random and independent of all variables.</li><li><strong>MAR:</strong> Missingness depends on other observed columns (recoverable via KNN/Regression).</li><li><strong>MNAR:</strong> Missingness depends on the missing value itself (highest bias risk!).</li></ul>"
        }
      },
      {
        heading: { uz: "3.3. Yetishmayotgan Qiymatlarni To'ldirish (Imputation) Usullari", en: "3.3. Missing Value Imputation Strategies" },
        bodyHtml: {
          uz: "<p>Yetishmayotgan qiymatlarni tiklash (<strong>Imputation</strong>) usuli ma'lumotning mexanizmiga (MCAR/MAR/MNAR), atribut turiga (raqamli/kategorik) va taqsimot qiyshiqligiga qarab tanlanadi:</p>",
          en: "<p>Choosing an <strong>imputation strategy</strong> depends on the missingness mechanism (MCAR/MAR/MNAR), attribute type, and distribution skewness:</p>"
        },
        widget: 'cleaning-sim',
        table: {
          headers: { uz: ["Usul", "Qachon ishlatiladi", "Afzalligi va Kamchiligi"], en: ["Method", "When to Use", "Pros & Cons"] },
          rows: {
            uz: [
              ["O'chirish (Deletion)", "MCAR va <5% satr bo'lsa", "Oson, lekin MNAR da bias keltiradi va hajmni kamaytiradi"],
              ["O'rtacha (Mean)", "Simmetrik raqamli ustun", "Outlierlar mean ni buzadi; dispersiyani sun'iy kamaytiradi"],
              ["Mediana (Median)", "Qiyshiq / outlierli raqamli", "Outlierlarga chidamli, ammo ustunlararo bog'liqlikni hisobga olmaydi"],
              ["Moda (Mode)", "Kategorik matn ustunlar", "Faqat toifali ustunlar uchun to'g'ri usul"],
              ["KNN / MICE Imputation", "Ustunlar kuchli korrelyatsiyalashgan", "Aniqroq, lekin hisoblash jihatdan sekinroq"],
              ["Missingness Indicator", "MNAR holatida", "<code>col_is_missing</code> 0/1 ustun qo'shib yo'qolish faktini saqlaydi"]
            ],
            en: [
              ["Deletion", "MCAR & <5% rows", "Simple, loses samples & biases MNAR"],
              ["Mean", "Symmetric numeric", "Distorted by outliers; shrinks variance"],
              ["Median", "Skewed numeric", "Robust to outliers; ignores feature correlations"],
              ["Mode", "Categorical columns", "Standard choice for nominal text"],
              ["KNN / MICE", "Correlated columns", "More accurate; slower O(n²)"],
              ["Missing Indicator", "MNAR data", "Adds binary flag preserving missingness signal"]
            ]
          }
        }
      },
      {
        heading: { uz: "3.4. Shovqinni Silliqlash (Smoothing) va Dublikatlarni Tozalash", en: "3.4. Noise Smoothing (Binning) & Deduplication" },
        bodyHtml: {
          uz: "<p><strong>Shovqin (Noise)</strong> — ma'lumotdagi tasodifiy xato (masalan, sensor -999°C berishi). Uni yumshatish uchun:</p><ul><li><strong>Binning (Savatlab silliqlash):</strong> Qiymatlarni saralab teng sonli savatlarga bo'lish va har bir savatni o'z <em>o'rtachasi (smoothing by bin means)</em> yoki <em>medianasi</em> bilan almashtirish.</li><li><strong>IQR va MAD:</strong> Chegaradan tashqaridagi xato qiymatlarni aniqlash ($[Q_1 - 1.5\\cdot IQR,\\; Q_3 + 1.5\\cdot IQR]$).</li><li><strong>Deduplication:</strong> <code>df.drop_duplicates()</code> bilan aniq dublikatlarni va matn strip/lowercase bilan yaqin-dublikatlarni (<code>\"Toshkent \"</code> vs <code>\"toshkent\"</code>) birlashtirish.</li></ul>",
          en: "<p><strong>Noise Smoothing:</strong> Sort values into equal-frequency bins and smooth by <em>bin means</em> or <em>bin medians</em>. Combine with IQR/MAD outlier checks and string normalization + <code>drop_duplicates()</code>.</p>"
        },
        latex: "IQR = Q_3 - Q_1, \\qquad \\text{Bounds} = [Q_1 - 1.5\\cdot IQR,\\; Q_3 + 1.5\\cdot IQR]"
      }
    ],
    slides: [
      { title: { uz: "M3: Ma'lumotlarni tozalash va tiklash", en: "M3: Data Cleaning & Imputation" }, subtitle: { uz: "Tan Darsligi 2.3-bo'lim · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 2.3 · MITQ2506 · 80 min" }, points: { uz: ["Nega tozalash 60–80% vaqt oladi?", "MCAR, MAR, MNAR yetishmovchilik mexanizmlari", "Deletion vs Mean, Median, Mode, KNN Imputation", "Shovqinni silliqlash: Binning va IQR", "Dublikat/Ziddiyatlarni tozalash va Lab 3"], en: ["Why cleaning takes 60–80% effort", "MCAR, MAR, MNAR missingness types", "Imputation strategies & trade-offs", "Noise smoothing by binning & IQR", "Deduplication & Lab 3"] } },
      { title: { uz: "Nopok Ma'lumotlarning 4 Ko'rinishi", en: "4 Types of Dirty Data" }, points: { uz: ["Yetishmayotgan qiymatlar: NaN, None, bo'sh katak", "Shovqin (Noise): sensor xatosi (-999), noto'g'ri yozuv (yosh=350)", "Dublikatlar: bir mijoz ikki marta kiritilgan", "Ziddiyatlar (Inconsistent): Toshkent / Tashkent / t.shahar"], en: ["Missing values: NaN / blanks", "Noise: sensor faults (-999), typos", "Duplicates: repeated entities", "Inconsistencies: casing, unit mismatch, contradictions"] } },
      { title: { uz: "MCAR, MAR va MNAR Farqlari", en: "Missingness Mechanisms" }, points: { uz: ["MCAR: Mutlaqo tasodifiy — o'chirish xavfsiz", "MAR: Boshqa ustunga bog'liq — KNN/Regression bilan tiklash mumkin", "MNAR: Qiymatning o'ziga bog'liq — o'chirilsa jiddiy bias chiqadi!"], en: ["MCAR: independent of everything", "MAR: predictable from other observed columns", "MNAR: depends on the hidden value itself (add indicator flag!)"] } },
      { title: { uz: "Talabalarga savol (MNAR)", en: "Class Discussion: MNAR Bias" }, discussion: { q: { uz: "Kredit so'rovnomasida daromadi 30 mln dan oshganlar 'Daromad' ustunini bo'sh qoldirgan. Agar biz NaN qatorlarni shunchaki o'chirib tashlasak nima bo'ladi?", en: "In a survey, high earners (> \$100k) leave 'Income' blank. What happens if we simply drop rows with missing Income?" }, a: { uz: "Bu <strong>MNAR</strong> holati! Bo'sh qatorlarni o'chirish o'rtacha daromadni keskin kamaytirib ko'rsatadi (Sampling Bias). Yechim: <code>daromad_bosh</code> indikator ustuni qo'shish.", en: "This is <strong>MNAR</strong>! Dropping rows severely underestimates mean income. Add a binary missingness indicator instead." } } },
      { title: { uz: "Imputation Usullari Taqqoslash", en: "Imputation Methods Compared" }, table: { headers: { uz: ["Usul", "Ustun turi", "Kamchilik"], en: ["Method", "Data Type", "Limitation"] }, rows: { uz: [["Mean", "Normal raqamli", "Outlier buzadi"], ["Median", "Qiyshiq raqamli", "Korrelyatsiyani yo'qotadi"], ["Mode", "Kategorik", "Ko'p sinfni oshiradi"], ["KNNImputer", "Bog'liq raqamli", "Sekin O(n²)"]], en: [["Mean", "Symmetric numeric", "Skewed by outliers"], ["Median", "Skewed numeric", "Ignores relations"], ["Mode", "Categorical", "Over-represents majority"], ["KNNImputer", "Correlated numeric", "Slow on large tables"]] } } },
      { title: { uz: "Interaktiv Imputation Demo (Outlier Ta'siri)", en: "Interactive Imputation: Mean vs Median" }, widget: 'cleaning-sim' },
      { title: { uz: "Data Leakage Ogohlantirishi (SimpleImputer)", en: "Preventing Leakage in Imputation" }, points: { uz: ["Median yoki Mean ni FAQAT X_train ustida hisoblang (fit_transform)!", "X_test dagi NaN larni X_train ning medianasi bilan to'ldiring (transform)"], en: ["Always fit SimpleImputer ONLY on X_train", "Transform X_test using training median/mean"] } },
      { title: { uz: "Shovqinni Silliqlash: Binning (Tan 2.3)", en: "Noise Smoothing by Binning" }, points: { uz: ["Qiymatlar: [4, 8, 15, 21, 21, 24, 25, 28, 34] → 3 ta savat (har biri 3 tadan)", "Savat 1: [4, 8, 15] → Bin Mean = [9, 9, 9]", "Savat 2: [21, 21, 24] → Bin Mean = [22, 22, 22]", "Savat 3: [25, 28, 34] → Bin Mean = [29, 29, 29]"], en: ["Sorted: [4,8,15, 21,21,24, 25,28,34]", "Bin 1 mean=[9,9,9]; Bin 2=[22,22,22]; Bin 3=[29,29,29]"] } },
      { title: { uz: "IQR Usuli bilan Xato Outlierlarni Tutish", en: "IQR Rule for Noisy Outliers" }, latex: "[Q_1 - 1.5\\,IQR,\\; Q_3 + 1.5\\,IQR]", points: { uz: ["Shovqin (yosh=-5) → o'chiriladi yoki NaN qilinib tiklanadi", "Haqiqiy anomaliya (fraud) → o'chirilmaydi, alohida o'rganiladi!"], en: ["Erroneous noise (age=-5) → fix or drop", "Genuine anomaly (fraud) → preserve!"] } },
      { title: { uz: "Dublikatlar va Matn Izchilligi", en: "Deduplication & String Standardization" }, points: { uz: ["df.drop_duplicates(subset=['id']) bilan takroriy yozuvlarni o'chirish", "str.strip().str.lower() bilan 'Andijon ', 'andijon' ni birlashtirish", "Mantiqiy qoidalar: tug'ilgan yil > joriy yil bo'lsa xato"], en: ["Remove duplicates via drop_duplicates()", "Normalize casing & whitespace before grouping", "Assert domain constraints (e.g. Age ≥ 0)"] } }
    ],
    lab: {
      title: { uz: "L3: Yetishmayotgan qiymatlarni to'ldirish va shovqinli ma'lumotlarni tozalash", en: "L3: Missing Value Imputation & Noise Cleaning" },
      objective: { uz: "SimpleImputer (Median/Mode), KNNImputer, Missingness Indicator, Dublikat va IQR shovqin tozalashni amalga oshirish.", en: "Clean duplicates, inconsistent strings, IQR noise, and impute missing values with SimpleImputer and KNNImputer." },
      steps: [
        {
          title: { uz: "Shovqinli, dublikatli va bo'sh jadvalni tozalash", en: "Deduplicate & Fix Text Inconsistencies" },
          desc: { uz: "Matn formatlarini birxillashtirib dublikatlarni olib tashlang.", en: "Strip/lowercase cities, fix impossible negative ages, and drop duplicates." },
          code: `import pandas as pd, numpy as np
df = pd.DataFrame({
    'ID': [1, 2, 2, 3, 4, 5],
    'Shahar': ['Andijon', ' toshkent ', 'toshkent', 'Buxoro', 'ANDIJON', None],
    'Yosh': [22, 35, 35, -5, 29, np.nan],
    'Maosh': [4.5, 8.0, 8.0, 6.2, 120.0, 5.1]
})
df = df.drop_duplicates(subset=['ID'])
df['Shahar'] = df['Shahar'].str.strip().str.capitalize()
df.loc[df['Yosh'] < 0, 'Yosh'] = np.nan
print(df)`
        },
        {
          title: { uz: "SimpleImputer (Median/Mode) va Missingness Indicator", en: "Impute Numeric & Categorical Columns" },
          desc: { uz: "Raqamli ustunni Median, kategorikni Moda bilan to'ldiring.", en: "Apply SimpleImputer(median) and SimpleImputer(most_frequent)." },
          code: `from sklearn.impute import SimpleImputer
df['Yosh_bosh_edi'] = df['Yosh'].isnull().astype(int)
df[['Yosh']] = SimpleImputer(strategy='median').fit_transform(df[['Yosh']])
df[['Shahar']] = SimpleImputer(strategy='most_frequent').fit_transform(df[['Shahar']])
print(df)`
        },
        {
          title: { uz: "KNNImputer va IQR Outlier Cheklash (Clipping)", en: "KNNImputer & IQR Winsorization" },
          desc: { uz: "IQR chegarasidan chiqqan ekstremal qiymatni clip() qiling.", en: "Clip extreme outliers using IQR bounds and test KNNImputer." },
          code: `from sklearn.impute import KNNImputer
Q1, Q3 = df['Maosh'].quantile([0.25, 0.75])
IQR = Q3 - Q1
df['Maosh_clipped'] = df['Maosh'].clip(lower=Q1 - 1.5*IQR, upper=Q3 + 1.5*IQR)
print(df[['Maosh', 'Maosh_clipped']])`
        }
      ],
      variants: {
        uz: [
          "1-variant: Titanic datasetida Age ni Pclass va Sex bo'yicha guruh medianasi (groupby.transform) bilan to'ldiring.",
          "2-variant: KNNImputer(n_neighbors=3) natijasini SimpleImputer(median) bilan taqqoslang.",
          "3-variant: Binning (pd.qcut / rolling mean) yordamida shovqinli vektorning silliqlangan ko'rinishini chop eting."
        ],
        en: [
          "Variant 1: Impute Titanic Age using group median by Pclass and Sex.",
          "Variant 2: Compare KNNImputer(n_neighbors=3) vs SimpleImputer(median).",
          "Variant 3: Smooth a noisy array via equal-frequency binning."
        ]
      }
    },
    glossary: [
      { uz: "MCAR / MAR / MNAR", en: "MCAR / MAR / MNAR", defUz: "Yetishmayotgan qiymatlarning tasodifiy, bog'liq va o'z-o'ziga bog'liq turlari", defEn: "Three mechanisms of missing data" },
      { uz: "Imputation", en: "Imputation", defUz: "Bo'sh (NaN) qiymatlarni statistik yoki model asosida to'ldirish", defEn: "Replacing missing values with estimated substitutes" },
      { uz: "Binning", en: "Binning", defUz: "Qiymatlarni savatlarga bo'lib shovqinni silliqlash usuli", defEn: "Smoothing noisy values by local bin mean/median" },
      { uz: "Deduplication", en: "Deduplication", defUz: "Takroriy qatorlarni aniqlash va olib tashlash", defEn: "Removing duplicate records" }
    ],
    quiz: [
      { q: { uz: "MCAR nimani anglatadi?", en: "What does MCAR stand for?" }, options: [{ label: 'A', uz: "Missing Completely At Random", en: "Missing Completely At Random" }, { label: 'B', uz: "Missing Conditionally At Random", en: "Missing Conditionally At Random" }, { label: 'C', uz: "Mean Centered Attribute Rule", en: "Mean Centered Attribute Rule" }, { label: 'D', uz: "Multivariate Correlation Ratio", en: "Multivariate Correlation Ratio" }], answer: 'A', explanation: { uz: "Yo'qolish boshqa hech bir o'zgaruvchiga bog'liq bo'lmagan tasodifiy holat.", en: "Missingness is completely independent of all variables." } },
      { q: { uz: "Kategorik (matnli) ustun uchun qaysi imputation usuli to'g'ri?", en: "Which imputation method suits a categorical column?" }, options: [{ label: 'A', uz: "O'rtacha (Mean)", en: "Column Mean" }, { label: 'B', uz: "Mediana (Median)", en: "Sorted Median" }, { label: 'C', uz: "Moda (Mode)", en: "Frequent Mode" }, { label: 'D', uz: "IQR kengligi", en: "IQR Range" }], answer: 'C', explanation: { uz: "Kategoriyalarda faqat eng ko'p uchraydigan qiymat — Moda olinadi.", en: "Mode replaces missing categories with the most frequent value." } },
      { q: { uz: "Qiyshiq va outlierlar mavjud raqamli ustunda Mean o'rniga nima ishlatgan ma'qul?", en: "For a skewed numeric column with outliers, what is preferred over Mean?" }, options: [{ label: 'A', uz: "Mediana qiymati", en: "Sample Median" }, { label: 'B', uz: "Moda qiymati", en: "Sample Mode" }, { label: 'C', uz: "Maksimal qiymat", en: "Maximum value" }, { label: 'D', uz: "Nol bilan to'ldirish", en: "Zero constant" }], answer: 'A', explanation: { uz: "Mediana ekstremal outlierlarga chidamli.", en: "Median resists distortion from extreme outliers." } },
      { q: { uz: "MNAR holatida bo'sh qatorlarni shunchaki o'chirish qanday xavf tug'diradi?", en: "What risk arises from dropping rows under MNAR?" }, options: [{ label: 'A', uz: "Kuchli statistik siljish (Bias)", en: "Severe statistical bias" }, { label: 'B', uz: "Hisoblash tezligining oshishi", en: "Faster model inference" }, { label: 'C', uz: "Dispersiyaning aniq barqarorlashuvi", en: "Exact variance stability" }, { label: 'D', uz: "Avtomatik normal taqsimot hosili", en: "Gaussian normality gain" }], answer: 'A', explanation: { uz: "MNAR da o'z qiymati sabab yashirilgan satrlar o'chib natijani buzadi.", en: "Dropping self-selected missing rows introduces severe bias." } },
      { q: { uz: "Qiymatlarni saralab savatlarga bo'lish orqali shovqinni kamaytirish usuli nima deyiladi?", en: "What is smoothing noisy data via sorted local buckets called?" }, options: [{ label: 'A', uz: "Savatlash (Binning)", en: "Binning smoothing" }, { label: 'B', uz: "Asosiy komponenta (PCA)", en: "PCA projection" }, { label: 'C', uz: "Apriori qoidalari", en: "Apriori pruning" }, { label: 'D', uz: "Gradient Boosting", en: "Gradient Boosting" }], answer: 'A', explanation: { uz: "Binning savat o'rtachasi/medianasi bilan shovqinni silliqlaydi.", en: "Binning smooths local noise using bin means or medians." } }
    ],
    matching: [
      { left: { uz: "MCAR", en: "MCAR" }, right: { uz: "Hech narsaga bog'liq bo'lmagan tasodifiy yo'qolish", en: "Purely random missingness" } },
      { left: { uz: "MNAR", en: "MNAR" }, right: { uz: "Qiymatning o'ziga bog'liq (eng xavfli bias)", en: "Depends on hidden value itself" } },
      { left: { uz: "Mode Imputation", en: "Mode Imputation" }, right: { uz: "Kategorik ustunni eng ko'p qiymat bilan to'ldirish", en: "Fill categorical column with most frequent label" } },
      { left: { uz: "Binning", en: "Binning" }, right: { uz: "Savat o'rtachasi bilan shovqinni silliqlash", en: "Smooth noise using sorted bucket means" } }
    ],
    fillGap: [
      { text: { uz: "Data Mining loyihalarining taxminan ___ foiz vaqti ma'lumotni tayyorlashga ketadi.", en: "Roughly ___ percent of a Data Mining project is spent preparing data." }, answer: ["60-80", "60–80", "70", "80"] },
      { text: { uz: "Outlierlarga chidamli markaziy to'ldirish usuli ___ dir.", en: "The outlier-resistant numeric imputation statistic is the ___." }, answer: ["Median", "Mediana"] },
      { text: { uz: "IQR usulida yuqori chegara Q3 + ___ × IQR ga teng.", en: "The upper IQR fence equals Q3 + ___ × IQR." }, answer: "1.5" }
    ]
  }
);
