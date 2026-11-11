window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  {
    id: 1,
    slug: '01-kirish',
    hours: 2,
    labs: 1,
    keywords: ['Data Mining', 'KDD', 'CRISP-DM', 'Classification', 'Clustering'],
    title: {
      uz: "Ma'lumotlarni intellektual tahlil qilish va KDD jarayoni",
      en: "Introduction to Data Mining & KDD Process"
    },
    description: {
      uz: "Data Mining tushunchasi, KDD bosqichlari, CRISP-DM standarti va Data Mining masalalarining tasnifi.",
      en: "Core concepts of Data Mining, 7 stages of KDD, CRISP-DM industry standard, and taxonomy of mining tasks."
    },
    sections: [
      {
        heading: {
          uz: "1.1. Data Mining tushunchasi va fanning predmeti",
          en: "1.1. What is Data Mining?"
        },
        bodyHtml: {
          uz: "<p>Hozirgi davrda sensorlar, bank kartalari, mobil ilovalar va ijtimoiy tarmoqlar har soniyada ulkan hajmda ma'lumot hosil qiladi. Omborlarda ma'lumot ko'paygani sari, fanda <strong>\"Data Rich, Information Poor\"</strong> — <em>\"ma'lumotga boy, ammo bilimi kam\"</em> paradoksi yuzaga keldi.</p><p><strong>Data Mining</strong> — katta hajmdagi ma'lumotlardan ilgari noma'lum, trivial bo'lmagan, amalda foydali va inson tushuna oladigan <strong>naqshlarni (patterns)</strong> avtomatik yoki yarim avtomatik ajratib olish jarayonidir.</p><ul><li><strong>Yangi (Novel):</strong> tahlilchi oldindan bilmagan bilimni ochib berishi kerak.</li><li><strong>Trivial bo'lmagan:</strong> oddiy SQL so'rovi bilan topib bo'lmaydigan qonuniyat.</li><li><strong>Amalda foydali (Actionable):</strong> qaror qabul qilishga asos bo'ladi.</li><li><strong>Tushunarli (Understandable):</strong> mutaxassis mantiqiy asosini anglay oladi.</li></ul>",
          en: "<p>Modern sensors, bank transactions, mobile apps, and social media generate massive volumes of data every second. This created the classic <strong>\"Data Rich, Information Poor\"</strong> paradox.</p><p><strong>Data Mining</strong> is the automatic or semi-automatic process of discovering previously unknown, non-trivial, actionable, and human-understandable <strong>patterns</strong> in large datasets.</p><ul><li><strong>Novel:</strong> reveals knowledge not previously known to the analyst.</li><li><strong>Non-trivial:</strong> cannot be extracted with a simple SQL aggregation.</li><li><strong>Actionable:</strong> directly supports business or scientific decisions.</li><li><strong>Understandable:</strong> domain experts can interpret and verify the pattern.</li></ul>"
        },
        callout: {
          type: 'warn',
          uz: "<strong>Real misol (Google Flu Trends):</strong> 2008-yilda Google qidiruv so'rovlari orqali gripp epidemiyasini rasmiy hisobotlardan 1–2 hafta oldin bashorat qildi. Ammo 2015-yilda model tasodifiy korrelyatsiyalarga ortiqcha tayanganligi sababli xato bera boshladi. Xulosa: naqsh topishning o'zi yetarli emas, uni validatsiya qilish shart!",
          en: "<strong>Real Case (Google Flu Trends):</strong> In 2008, Google predicted flu outbreaks 1–2 weeks ahead of official reports using search queries. By 2015, it overpredicted because search behavior shifted and the model relied on spurious correlations. Takeaway: discovering a pattern is not enough—rigorous validation is essential!"
        }
      },
      {
        heading: {
          uz: "1.2. KDD jarayoni va CRISP-DM standarti",
          en: "1.2. KDD Process & CRISP-DM Standard"
        },
        bodyHtml: {
          uz: "<p><strong>KDD (Knowledge Discovery in Databases)</strong> — xom ma'lumotdan boshlab foydali bilim taqdim etishgacha bo'lgan butun ko'p bosqichli, iterativ jarayon. <strong>Data Mining</strong> esa KDD konveyerining markaziy (algoritmik) bosqichidir.</p><p>Sanoatda eng keng tarqalgan metodologiya — <strong>CRISP-DM</strong> (1999): <em>Biznesni tushunish → Ma'lumotni tushunish → Ma'lumotni tayyorlash → Modellash → Baholash → Joriy etish</em>.</p>",
          en: "<p><strong>KDD (Knowledge Discovery in Databases)</strong> is the end-to-end iterative pipeline from raw data to actionable knowledge. <strong>Data Mining</strong> is the central algorithmic step inside KDD.</p><p>The leading industry methodology is <strong>CRISP-DM</strong> (1999): <em>Business Understanding → Data Understanding → Data Preparation → Modeling → Evaluation → Deployment</em>.</p>"
        },
        table: {
          headers: {
            uz: ["#", "KDD bosqichi", "Inglizcha nomi", "Vazifasi"],
            en: ["#", "KDD Stage", "Focus", "Description"]
          },
          rows: {
            uz: [
              ["1", "Ma'lumot to'plash", "Data Collection", "Turli manbalardan xom ma'lumot yig'ish"],
              ["2", "Tanlash", "Selection", "Tahlil uchun kerakli atribut va satrlarni ajratish"],
              ["3", "Tozalash", "Preprocessing", "Shovqin va yetishmayotgan qiymatlarni tuzatish"],
              ["4", "O'zgartirish", "Transformation", "Normallashtirish, kodlash, o'lchamni qisqartirish"],
              ["5", "Data Mining", "Data Mining", "Naqsh topuvchi algoritmlarni qo'llash"],
              ["6", "Baholash", "Evaluation", "Topilgan naqshlarning sifatini tekshirish"],
              ["7", "Taqdim etish", "Presentation", "Vizualizatsiya va hisobot shaklida yetkazish"]
            ],
            en: [
              ["1", "Data Collection", "Acquisition", "Gather raw data from heterogeneous sources"],
              ["2", "Selection", "Target Data", "Select relevant attributes and records"],
              ["3", "Preprocessing", "Cleaning", "Handle missing values, noise, and duplicates"],
              ["4", "Transformation", "Feature Eng.", "Normalize, encode, and reduce dimensionality"],
              ["5", "Data Mining", "Modeling", "Apply algorithms to extract hidden patterns"],
              ["6", "Evaluation", "Interpretation", "Validate patterns against domain metrics"],
              ["7", "Presentation", "Knowledge", "Visualize and deploy insights to stakeholders"]
            ]
          }
        }
      },
      {
        heading: {
          uz: "1.3. Data Mining masalalarining tasnifi",
          en: "1.3. Taxonomy of Data Mining Tasks"
        },
        bodyHtml: {
          uz: "<ul><li><strong>Bashoratlovchi (Predictive):</strong> <em>Tasniflash (Classification)</em> — diskret sinf (spam/spam emas); <em>Regressiya (Regression)</em> — uzluksiz son (uy narxi, harorat).</li><li><strong>Tasvirlovchi (Descriptive):</strong> <em>Klasterlash (Clustering)</em> — o'xshash obyektlarni guruhlash; <em>Assotsiativ qoidalar</em> — birga uchraydigan tovarlar; <em>Anomaliya aniqlash</em> — g'ayritabiiy nuqtalarni topish.</li></ul>",
          en: "<ul><li><strong>Predictive Tasks:</strong> <em>Classification</em> — discrete target label (spam vs ham); <em>Regression</em> — continuous numerical target (house price, temperature).</li><li><strong>Descriptive Tasks:</strong> <em>Clustering</em> — grouping similar objects; <em>Association Rules</em> — co-occurring items; <em>Anomaly Detection</em> — identifying rare/suspicious records.</li></ul>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "1-mavzu: Data Mining va KDD jarayoni", en: "Topic 1: Intro to Data Mining & KDD" },
        subtitle: { uz: "MITQ2506 · Ma'lumotlarni intellektual tahlil qilish", en: "MITQ2506 · Knowledge Discovery in Databases" },
        points: {
          uz: ["\"Data Rich, Information Poor\" paradoksi", "Data Mining ning 4 ta asosiy sharti", "KDD 7 bosqichi va CRISP-DM", "Predictive vs Descriptive masalalar"],
          en: ["The \"Data Rich, Information Poor\" paradox", "4 core criteria for valid Data Mining", "7 stages of KDD & CRISP-DM cycle", "Predictive vs Descriptive mining tasks"]
        }
      },
      {
        title: { uz: "Data Mining nima?", en: "What is Data Mining?" },
        points: {
          uz: ["Katta hajmdagi ma'lumotlardan yashirin naqshlarni ajratish", "1. Yangi — ilgari noma'lum bilim", "2. Trivial emas — oddiy SQL bilan chiqmaydi", "3. Foydali — qaror qabul qilishga xizmat qiladi", "4. Tushunarli — mutaxassis izohlay oladi"],
          en: ["Extracting hidden, actionable patterns from large datasets", "1. Novel — previously unknown insights", "2. Non-trivial — beyond basic SQL queries", "3. Useful — drives real-world decisions", "4. Understandable — interpretable by humans"]
        },
        note: { uz: "Tog'-kon o'xshatishi: tonnalab xom ma'lumotdan bir necha gramm oltin ajratish.", en: "Mining analogy: sifting through tons of raw ore to extract precious gold nuggets." }
      },
      {
        title: { uz: "KDD vs Data Mining", en: "KDD vs Data Mining" },
        points: {
          uz: ["KDD = Butun konveyer (yig'ishdan taqdimotgacha)", "Data Mining = KDD ning 5-bosqichi (algoritmlar)", "KDD chiziqli emas: xato chiqsa oldingi bosqichga qaytiladi", "CRISP-DM: Biznes → Ma'lumot → Tayyorlash → Model → Baho → Joriy etish"],
          en: ["KDD = Full pipeline from collection to knowledge presentation", "Data Mining = Stage 5 of KDD (pattern extraction algorithms)", "KDD is iterative: feedback loops back to earlier stages", "CRISP-DM: Business → Data → Prep → Modeling → Eval → Deploy"]
        }
      },
      {
        title: { uz: "Data Mining masalalari", en: "Taxonomy of Data Mining Tasks" },
        table: {
          headers: { uz: ["Guruh", "Masala", "Misol"], en: ["Category", "Task", "Example"] },
          rows: {
            uz: [
              ["Predictive", "Tasniflash", "Kredit riski (Ha/Yo'q)"],
              ["Predictive", "Regressiya", "Uy narxini bashoratlash"],
              ["Descriptive", "Klasterlash", "Mijoz segmentatsiyasi"],
              ["Descriptive", "Assotsiatsiya", "Non → Sut savat tahlili"],
              ["Descriptive", "Anomaliya", "Karta firibgarligini topish"]
            ],
            en: [
              ["Predictive", "Classification", "Credit default (Yes/No)"],
              ["Predictive", "Regression", "Forecasting house prices"],
              ["Descriptive", "Clustering", "Customer segmentation"],
              ["Descriptive", "Association", "Bread → Milk basket rules"],
              ["Descriptive", "Anomaly", "Credit card fraud detection"]
            ]
          }
        }
      },
      {
        title: { uz: "SQL, Statistika va Data Mining", en: "SQL vs Statistics vs Data Mining" },
        table: {
          headers: { uz: ["Mezon", "SQL", "Statistika", "Data Mining"], en: ["Criteria", "SQL", "Statistics", "Data Mining"] },
          rows: {
            uz: [
              ["Maqsad", "Aniq yozuv topish", "Gipoteza tekshirish", "Yashirin naqsh kashf etish"],
              ["Yondashuv", "Qat'iy so'rov", "Eksperiment", "Ma'lumotga asoslangan"],
              ["Natija", "Ma'lum faktlar", "p-qiymat / tasdiq", "Yangi qonuniyatlar"]
            ],
            en: [
              ["Goal", "Retrieve known facts", "Test hypothesis", "Discover hidden patterns"],
              ["Approach", "Deterministic query", "Theory-driven", "Data-driven discovery"],
              ["Output", "Exact rows/sums", "Confirmed theory", "Predictive/descriptive models"]
            ]
          }
        }
      },
      {
        title: { uz: "L1 Laboratoriya (Python EDA)", en: "Lab 1: First Look with Pandas" },
        code: `import pandas as pd
df = pd.read_csv("titanic.csv")
print("Shape:", df.shape)
print(df.isnull().sum())
print(df.describe().round(2))`
      }
    ],
    lab: {
      title: { uz: "L1: Python va Pandas da dastlabki tahlil (Titanic)", en: "L1: Exploratory Data Analysis on Titanic Dataset" },
      tasks: {
        uz: [
          "Kodni ishga tushiring va qator/ustunlar sonini aniqlang",
          "Qaysi ustunda eng ko'p yetishmayotgan qiymat borligini toping",
          "Yo'lovchilarning o'rtacha yoshini hisoblang",
          "Pclass ustuni qiymatlarini value_counts() bilan chiqaring"
        ],
        en: [
          "Run the script and inspect dataset dimensions (df.shape)",
          "Identify which column has the highest count of missing values",
          "Compute the mean passenger age from df.describe()",
          "Display class counts for Pclass using value_counts()"
        ]
      },
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

print("Shape:", df.shape)
print("\\nColumns:", df.columns.tolist())
print("\\nFirst 5 rows:")
print(df.head())

print("\\nSummary statistics:")
print(df.describe())

print("\\nMissing values:")
print(df.isnull().sum())

fig, axes = plt.subplots(1, 2, figsize=(12, 4))
df['Survived'].value_counts().plot(kind='bar', ax=axes[0], color=['#ef4444', '#22c55e'])
axes[0].set_title("Survived (0=No, 1=Yes)")
df['Age'].dropna().hist(bins=20, ax=axes[1], color='#f59e0b', edgecolor='black')
axes[1].set_title("Age Distribution")
plt.tight_layout()
plt.savefig('l1-result.png', dpi=150)
print("Saved l1-result.png")`
    },
    glossary: [
      { uz: "Naqsh", en: "Pattern", defUz: "Ma'lumotdagi takrorlanuvchi foydali qonuniyat", defEn: "A recurring, meaningful regularity in data" },
      { uz: "KDD", en: "KDD", defUz: "Ma'lumotlar bazasidan bilim kashf etishning to'liq jarayoni", defEn: "Knowledge Discovery in Databases end-to-end process" },
      { uz: "Tasniflash", en: "Classification", defUz: "Obyektni oldindan berilgan sinflardan biriga ajratish", defEn: "Assigning an instance to a predefined discrete class" },
      { uz: "Klasterlash", en: "Clustering", defUz: "O'xshash obyektlarni belgisiz guruhlarga ajratish", defEn: "Grouping similar unlabeled instances together" }
    ],
    quiz: [
      {
        q: { uz: "Data Mining natijasi bo'lishi uchun qaysi shart MAJBURIY EMAS?", en: "Which condition is NOT strictly required for a valid Data Mining pattern?" },
        options: [
          { label: 'A', uz: "Yangi bilim bo'lishi", en: "Being novel knowledge" },
          { label: 'B', uz: "Amalda foydali bo'lishi", en: "Being actionable/useful" },
          { label: 'C', uz: "Faqat milliardlab qatordan iborat bo'lishi", en: "Coming strictly from billion-row datasets" },
          { label: 'D', uz: "Inson tushuna olishi", en: "Being human-understandable" }
        ],
        answer: 'C',
        explanation: { uz: "Data Mining kichik va o'rta hajmdagi jadvallarda ham muvaffaqiyatli qo'llanilishi mumkin.", en: "Data Mining can also discover valid patterns in small or medium-sized datasets." }
      },
      {
        q: { uz: "KDD va Data Mining orasidagi to'g'ri munosabat qaysi?", en: "What is the relationship between KDD and Data Mining?" },
        options: [
          { label: 'A', uz: "Ular mutlaqo bir xil tushuncha", en: "They are identical synonyms" },
          { label: 'B', uz: "Data Mining = KDD jarayonining markaziy bosqichi", en: "Data Mining is the central modeling step inside KDD" },
          { label: 'C', uz: "KDD = Data Mining ning kichik qismi", en: "KDD is a sub-step of Data Mining" },
          { label: 'D', uz: "Ular bir-biriga bog'liq emas", en: "They are completely unrelated fields" }
        ],
        answer: 'B',
        explanation: { uz: "KDD ma'lumot yig'ishdan taqdimotgacha bo'lgan butun jarayon, Data Mining esa uning 5-bosqichidir.", en: "KDD covers the full pipeline from collection to presentation; Data Mining is stage 5." }
      },
      {
        q: { uz: "CRISP-DM standartining birinchi bosqichi qaysi?", en: "What is the very first phase of the CRISP-DM standard?" },
        options: [
          { label: 'A', uz: "Ma'lumotni tayyorlash", en: "Data Preparation" },
          { label: 'B', uz: "Modellash", en: "Modeling" },
          { label: 'C', uz: "Biznesni tushunish", en: "Business Understanding" },
          { label: 'D', uz: "Baholash", en: "Evaluation" }
        ],
        answer: 'C',
        explanation: { uz: "Har qanday loyiha avvalo biznes maqsadi va muammoni tushunishdan boshlanadi.", en: "Every CRISP-DM project begins by clarifying business objectives and requirements." }
      },
      {
        q: { uz: "\"Mijozlarni xarid odatiga ko'ra guruhlash\" — bu qaysi masala?", en: "\"Grouping customers by purchasing habits\" is an example of which task?" },
        options: [
          { label: 'A', uz: "Tasniflash (Classification)", en: "Classification" },
          { label: 'B', uz: "Regressiya", en: "Regression" },
          { label: 'C', uz: "Klasterlash (Clustering)", en: "Clustering" },
          { label: 'D', uz: "Assotsiatsiya", en: "Association" }
        ],
        answer: 'C',
        explanation: { uz: "Oldindan berilgan sinf yorliqlari yo'q bo'lsa, o'xshash obyektlarni guruhlash klasterlash deyiladi.", en: "Grouping similar objects without predefined labels is Clustering." }
      },
      {
        q: { uz: "Google Flu Trends 2015-yilda nima sababdan xato bashorat bera boshladi?", en: "Why did Google Flu Trends begin overpredicting in 2015?" },
        options: [
          { label: 'A', uz: "Serverlar ishdan chiqdi", en: "Google servers went offline" },
          { label: 'B', uz: "Model tasodifiy naqshlarga tayandi va qidiruv xulq-atvori o'zgardi", en: "Over-reliance on spurious correlations and shifting search behavior" },
          { label: 'C', uz: "SQL so'rovlari sekinlashdi", en: "SQL queries became too slow" },
          { label: 'D', uz: "Gripp butunlay yo'qoldi", en: "Influenza ceased to exist" }
        ],
        answer: 'B',
        explanation: { uz: "Validatsiyasiz korrelyatsiyalarga tayanish va konsepsiya o'zgarishi modelni buzdi.", en: "Spurious correlations and concept drift caused the model to fail without continuous validation." }
      }
    ]
  },

  {
    id: 2,
    slug: '02-preprocessing',
    hours: 4,
    labs: 4,
    keywords: ['Preprocessing', 'Imputation', 'Normalization', 'Encoding', 'PCA'],
    title: {
      uz: "Ma'lumotlarni dastlabki qayta ishlash",
      en: "Data Preprocessing & Dimensionality Reduction"
    },
    description: {
      uz: "Ma'lumotlarni tozalash, yetishmayotgan qiymatlar, normallashtirish, kodlash va PCA yordamida o'lchamni qisqartirish.",
      en: "Handling missing data, outlier detection, Min-Max & Z-score scaling, categorical encoding, and PCA."
    },
    sections: [
      {
        heading: { uz: "2.1. Preprocessing nima va nega kerak?", en: "2.1. Why Data Preprocessing Matters" },
        bodyHtml: {
          uz: "<p>Haqiqiy dunyo ma'lumotlari shovqinli, to'liq emas va nomuvofiq bo'ladi. Data Mining loyihalarining <strong>60–80% vaqti</strong> ma'lumotni tayyorlashga ketadi (<em>\"Garbage in, garbage out\"</em>).</p><p>Asosiy bosqichlar: 1) Tozalash, 2) Integratsiya, 3) Tanlash, 4) O'zgartirish, 5) O'lchamni qisqartirish.</p>",
          en: "<p>Real-world data is dirty: incomplete, noisy, and inconsistent. Roughly <strong>60–80% of Data Mining effort</strong> goes into preparation (<em>\"Garbage in, garbage out\"</em>).</p><p>Core stages: 1) Cleaning, 2) Integration, 3) Selection, 4) Transformation, 5) Dimensionality Reduction.</p>"
        }
      },
      {
        heading: { uz: "2.2. Yetishmayotgan qiymatlar va Outlierlar", en: "2.2. Missing Values & Outliers" },
        bodyHtml: {
          uz: "<p>Yetishmovchilik turlari: <strong>MCAR</strong> (butunlay tasodifiy), <strong>MAR</strong> (boshqa ustunga bog'liq), <strong>MNAR</strong> (o'ziga bog'liq). Usullar: o'chirish, Mean/Median (raqamli), Mode (kategorik), KNN/Regression imputation.</p><p>Outlierlarni aniqlash: <strong>IQR usuli</strong> ([Q1 - 1.5·IQR, Q3 + 1.5·IQR] tashqarisida) va <strong>Z-score</strong> (|z| &gt; 3).</p>",
          en: "<p>Missingness mechanisms: <strong>MCAR</strong> (Completely at Random), <strong>MAR</strong> (At Random), <strong>MNAR</strong> (Not at Random). Remedies: deletion, Mean/Median (numeric), Mode (categorical), KNN/Regression imputation.</p><p>Outlier detection: <strong>IQR rule</strong> (outside [Q1 - 1.5·IQR, Q3 + 1.5·IQR]) and <strong>Z-score</strong> (|z| &gt; 3).</p>"
        }
      },
      {
        heading: { uz: "2.3. Normallashtirish va Kodlash", en: "2.3. Normalization & Categorical Encoding" },
        bodyHtml: {
          uz: "<p>Masofaga asoslangan algoritmlar (k-NN, K-Means, SVM) katta masshtabli ustunlarga og'ib ketmasligi uchun normallashtirish shart. Kategorik ustunlar uchun <strong>Label Encoding</strong> (tartibli) va <strong>One-Hot Encoding</strong> (tartibsiz) qo'llaniladi.</p>",
          en: "<p>Distance-based algorithms (k-NN, K-Means, SVM) require feature scaling so large-range features do not dominate. Categorical columns use <strong>Label Encoding</strong> (ordinal) or <strong>One-Hot Encoding</strong> (nominal).</p>"
        },
        formula: "Min-Max: x' = (x - x_min) / (x_max - x_min)   |   Z-score: x' = (x - μ) / σ"
      },
      {
        heading: { uz: "2.4. PCA (Asosiy Komponentlar Tahlili)", en: "2.4. Principal Component Analysis (PCA)" },
        bodyHtml: {
          uz: "<p><strong>PCA</strong> — korrelyatsiyalashgan o'zgaruvchilarni bir-biriga ortogonal bo'lgan kamroq sondagi asosiy komponentlarga proyeksiya qiladi va maksimal dispersiyani (odatda 95%) saqlab qoladi.</p>",
          en: "<p><strong>PCA</strong> projects correlated features onto fewer orthogonal principal components while preserving maximum variance (typically ≥ 95% cumulative variance).</p>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "2-mavzu: Ma'lumotlarni qayta ishlash", en: "Topic 2: Data Preprocessing" },
        subtitle: { uz: "Garbage in → Garbage out", en: "Data Cleaning, Scaling, Encoding & PCA" },
        points: {
          uz: ["Loyiha vaqtining 60–80% qismi", "MCAR, MAR, MNAR va Imputation", "Min-Max vs Z-score normallashtirish", "One-Hot Encoding va PCA"],
          en: ["60–80% of project time spent here", "MCAR, MAR, MNAR & Imputation", "Min-Max vs Z-score Standardization", "One-Hot Encoding & PCA"]
        }
      },
      {
        title: { uz: "Yetishmayotgan qiymatlarni to'ldirish", en: "Handling Missing Values" },
        table: {
          headers: { uz: ["Usul", "Qachon ishlatiladi", "Kamchiligi"], en: ["Method", "When to Use", "Limitation"] },
          rows: {
            uz: [
              ["O'chirish", "<5% yetishmovchilik", "Foydali ma'lumot yo'qoladi"],
              ["Mean (O'rtacha)", "Normal taqsimot", "Outlierlarga sezgir"],
              ["Median", "Qiyshiq taqsimot", "Korrelyatsiyani e'tiborsiz qoldiradi"],
              ["Mode (Moda)", "Kategorik ustunlar", "Chastotani oshirib yuboradi"]
            ],
            en: [
              ["Deletion", "<5% missing rows", "Reduces sample size"],
              ["Mean", "Symmetric numeric", "Sensitive to outliers"],
              ["Median", "Skewed numeric", "Ignores feature correlations"],
              ["Mode", "Categorical columns", "Biases toward dominant class"]
            ]
          }
        }
      },
      {
        title: { uz: "Outlierlarni aniqlash", en: "Outlier Detection Rules" },
        formula: "IQR = Q3 - Q1  →  Chegaralar / Bounds: [Q1 - 1.5·IQR, Q3 + 1.5·IQR]",
        points: {
          uz: ["IQR usuli: qiyshiq ma'lumotlar uchun chidamli", "Z-score: |z| > 3 bo'lsa outlier", "Vizual: Boxplot va Scatter plot"],
          en: ["IQR rule: robust for skewed distributions", "Z-score: flag points with |z| > 3", "Visual: Boxplot and Scatter plots"]
        }
      },
      {
        title: { uz: "Normallashtirish formulalari", en: "Feature Scaling Methods" },
        formula: "Min-Max: (x - min) / (max - min) ∈ [0,1]   |   Z-score: (x - μ) / σ",
        points: {
          uz: ["Min-Max: piksellar, neyron tarmoqlar (chegaralangan)", "Z-score: SVM, k-NN, PCA (μ=0, σ=1)", "RobustScaler: outlier ko'p bo'lganda (Mediana/IQR)"],
          en: ["Min-Max: bounded [0,1] for images & neural nets", "Z-score: μ=0, σ=1 for SVM, k-NN, PCA", "RobustScaler: uses median & IQR when outliers exist"]
        }
      },
      {
        title: { uz: "PCA Bosqichlari", en: "PCA Pipeline Steps" },
        points: {
          uz: ["1. Ma'lumotni Z-score bilan standartlashtirish", "2. Kovariatsiya matritsasini hisoblash", "3. Eigenvalue va Eigenvector topish", "4. 95% dispersiya saqlovchi K ta komponent tanlash"],
          en: ["1. Standardize features (Z-score)", "2. Compute covariance matrix", "3. Extract eigenvalues & eigenvectors", "4. Project onto top K components (≥95% variance)"]
        }
      }
    ],
    lab: {
      title: { uz: "L2–L4: Imputation, Scaling va PCA", en: "L2–L4: Imputation, Scaling & PCA in Scikit-Learn" },
      tasks: {
        uz: [
          "Median imputation bilan NaN qiymatlarni to'ldiring",
          "Min-Max va Z-score natijalarini taqqoslang",
          "4 o'lchamli ma'lumotni PCA orqali 2D ga tushiring"
        ],
        en: [
          "Impute missing NaN values using median strategy",
          "Compare MinMaxScaler and StandardScaler outputs",
          "Reduce 4D data to 2D with PCA and check explained variance"
        ]
      },
      code: `import pandas as pd, numpy as np
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from sklearn.decomposition import PCA

np.random.seed(42)
df = pd.DataFrame({
    'Age': np.random.randint(18, 65, 100).astype(float),
    'Income': np.random.randint(1000, 10000, 100).astype(float),
    'Experience': np.random.randint(0, 40, 100).astype(float),
    'Score': np.random.randint(0, 100, 100).astype(float)
})
for col in df.columns:
    df.loc[np.random.choice(df.index, 10, replace=False), col] = np.nan

df_clean = pd.DataFrame(SimpleImputer(strategy='median').fit_transform(df), columns=df.columns)
df_z = StandardScaler().fit_transform(df_clean)
pca = PCA(n_components=2)
components = pca.fit_transform(df_z)
print(f"Explained variance: {pca.explained_variance_ratio_.sum()*100:.1f}%")`
    },
    glossary: [
      { uz: "Normallashtirish", en: "Normalization", defUz: "Qiymatlarni yagona shkalaga keltirish ([0,1] yoki μ=0, σ=1)", defEn: "Scaling numeric features to a standard range" },
      { uz: "One-Hot Encoding", en: "One-Hot Encoding", defUz: "Har bir kategoriya uchun alohida 0/1 ustun yaratish", defEn: "Converting categories into binary indicator columns" },
      { uz: "PCA", en: "PCA", defUz: "Dispersiyani saqlab o'lchamni kamaytiruvchi chiziqli usul", defEn: "Linear projection reducing dimensionality while keeping variance" }
    ],
    quiz: [
      {
        q: { uz: "Haqiqiy loyihalarda preprocessing odatda qancha vaqt oladi?", en: "What share of time does data preprocessing typically take?" },
        options: [
          { label: 'A', uz: "10–20%", en: "10–20%" },
          { label: 'B', uz: "30–40%", en: "30–40%" },
          { label: 'C', uz: "60–80%", en: "60–80%" },
          { label: 'D', uz: "95–100%", en: "95–100%" }
        ],
        answer: 'C',
        explanation: { uz: "Ma'lumotni yig'ish, tozalash va tayyorlash loyihaning 60-80% vaqtini oladi.", en: "Cleaning, imputing, and transforming data consumes 60–80% of real-world DM projects." }
      },
      {
        q: { uz: "Z-score standartlashtirish natijasida qanday statistika hosil bo'ladi?", en: "What are the mean and standard deviation after Z-score standardization?" },
        options: [
          { label: 'A', uz: "Barcha qiymatlar [0, 1] da", en: "All values bounded in [0, 1]" },
          { label: 'B', uz: "O'rtacha = 0, standart og'ish = 1", en: "Mean = 0, Standard Deviation = 1" },
          { label: 'C', uz: "Faqat [-1, 1] oraliqda", en: "Strictly bounded in [-1, 1]" },
          { label: 'D', uz: "Logarifmik shkala", en: "Logarithmic scale" }
        ],
        answer: 'B',
        explanation: { uz: "x' = (x - μ)/σ formulasi o'rtachani 0 ga, dispersiyani 1 ga tenglashtiradi.", en: "Subtracting the mean and dividing by std produces mean=0 and std=1." }
      },
      {
        q: { uz: "PCA ning asosiy maqsadi nima?", en: "What is the primary goal of PCA?" },
        options: [
          { label: 'A', uz: "Yetishmayotgan qiymatlarni to'ldirish", en: "Impute missing values" },
          { label: 'B', uz: "Maksimal ma'lumotni saqlab o'lchamni qisqartirish", en: "Reduce dimensionality while preserving maximum variance" },
          { label: 'C', uz: "Anomaliyalarni o'chirish", en: "Delete outliers" },
          { label: 'D', uz: "Sinflarni tasniflash", en: "Classify labeled samples" }
        ],
        answer: 'B',
        explanation: { uz: "PCA xususiyatlar sonini kamaytirib, ma'lumotdagi asosiy dispersiyani saqlab qoladi.", en: "PCA compresses features into fewer orthogonal components preserving variance." }
      },
      {
        q: { uz: "Kategorik ustun uchun qaysi imputation usuli to'g'ri?", en: "Which imputation strategy suits a categorical column?" },
        options: [
          { label: 'A', uz: "O'rtacha (Mean)", en: "Mean" },
          { label: 'B', uz: "Mediana", en: "Median" },
          { label: 'C', uz: "Moda (eng ko'p uchragan qiymat)", en: "Mode (most frequent value)" },
          { label: 'D', uz: "Z-score", en: "Z-score" }
        ],
        answer: 'C',
        explanation: { uz: "Kategorik matnlarda o'rtacha yoki mediana hisoblab bo'lmaydi, shu sabab moda ishlatiladi.", en: "Mode replaces missing categories with the most frequent label." }
      },
      {
        q: { uz: "MCAR qisqartmasi nimani anglatadi?", en: "What does MCAR stand for?" },
        options: [
          { label: 'A', uz: "Missing Completely At Random", en: "Missing Completely At Random" },
          { label: 'B', uz: "Missing Conditionally At Random", en: "Missing Conditionally At Random" },
          { label: 'C', uz: "Multiple Classification And Regression", en: "Multiple Classification And Regression" },
          { label: 'D', uz: "Mean Centered Attribute Reduction", en: "Mean Centered Attribute Reduction" }
        ],
        answer: 'A',
        explanation: { uz: "MCAR — qiymatning yo'qolishi boshqa hech qanday o'zgaruvchiga bog'liq bo'lmagan tasodifiy holat.", en: "MCAR means missingness is completely independent of any observed or unobserved data." }
      }
    ]
  },

  {
    id: 3,
    slug: '03-classification-dt',
    hours: 2,
    labs: 2,
    keywords: ['Decision Tree', 'Entropy', 'Information Gain', 'Gini', 'Pruning'],
    title: {
      uz: "Qaror daraxti yordamida tasniflash",
      en: "Classification with Decision Trees"
    },
    description: {
      uz: "Qaror daraxti tuzilishi, Entropiya, Information Gain, Gini indeksi, ID3/C4.5/CART va Pruning usullari.",
      en: "Decision tree structure, Entropy, Information Gain, Gini impurity, ID3/C4.5/CART comparison, and pruning."
    },
    sections: [
      {
        heading: { uz: "3.1. Tasniflash va Qaror daraxti tuzilishi", en: "3.1. Classification & Tree Anatomy" },
        bodyHtml: {
          uz: "<p><strong>Qaror daraxti (Decision Tree)</strong> — if-else qoidalar ierarxiyasidan tashkil topgan intuitiv tasniflagich:</p><ul><li><strong>Ildiz tugun (Root):</strong> birinchi va eng muhim bo'linish.</li><li><strong>Ichki tugun (Internal):</strong> atribut bo'yicha test sharti.</li><li><strong>Shox (Branch):</strong> test natijasi.</li><li><strong>Barg (Leaf):</strong> yakuniy sinf bashorati.</li></ul>",
          en: "<p>A <strong>Decision Tree</strong> classifies instances via a hierarchy of interpretable if-else rules:</p><ul><li><strong>Root Node:</strong> the top-level most informative split.</li><li><strong>Internal Node:</strong> attribute test condition.</li><li><strong>Branch:</strong> outcome of a test.</li><li><strong>Leaf Node:</strong> final predicted class label.</li></ul>"
        }
      },
      {
        heading: { uz: "3.2. Entropiya, Information Gain va Gini indeksi", en: "3.2. Entropy, Information Gain & Gini Impurity" },
        bodyHtml: {
          uz: "<p><strong>Entropiya H(S)</strong> — tugundagi tartibsizlik (aralashganlik) o'lchovi. H=0 (butunlay sof), H=1 (ikkilik sinflar teng 50/50). <strong>Information Gain</strong> ajralishdan keyin entropiya qanchalik kamayganini ko'rsatadi.</p><p><strong>CART</strong> algoritmi esa tezroq hisoblanadigan <strong>Gini indeksini</strong> ishlatadi.</p>",
          en: "<p><strong>Entropy H(S)</strong> measures node impurity: H=0 means pure (one class), H=1 means 50/50 split. <strong>Information Gain</strong> selects the attribute maximizing entropy reduction.</p><p><strong>CART</strong> uses <strong>Gini Impurity</strong>, avoiding logarithms for faster computation.</p>"
        },
        formula: "H(S) = -Σ p_i · log₂(p_i)   |   IG(S,A) = H(S) - Σ (|S_v|/|S|)·H(S_v)   |   Gini(S) = 1 - Σ p_i²"
      },
      {
        heading: { uz: "3.3. ID3, C4.5, CART va Pruning", en: "3.3. ID3, C4.5, CART & Overfitting Control" },
        bodyHtml: {
          uz: "<p>Chuqur daraxt o'quv ma'lumotini yodlab olib <strong>overfitting</strong>ga tushadi (train 99%, test 65%). Buni oldini olish uchun <strong>Pre-pruning</strong> (<code>max_depth</code>, <code>min_samples_leaf</code>) va <strong>Post-pruning</strong> (ortiqcha shoxlarni qirqish) qo'llaniladi.</p>",
          en: "<p>Overly deep trees memorize noise causing <strong>overfitting</strong> (99% train, 65% test). Prevent it with <strong>Pre-pruning</strong> (<code>max_depth</code>, <code>min_samples_leaf</code>) or <strong>Post-pruning</strong> (cost-complexity pruning).</p>"
        },
        table: {
          headers: { uz: ["Algoritm", "Mezon", "Xususiyat"], en: ["Algorithm", "Split Criterion", "Key Feature"] },
          rows: {
            uz: [
              ["ID3", "Information Gain", "Faqat kategorik atributlar"],
              ["C4.5", "Gain Ratio", "Raqamli atribut va NaN qo'llab-quvvatlaydi"],
              ["CART", "Gini Index", "Ikkilik daraxt, klassifikatsiya va regressiya"]
            ],
            en: [
              ["ID3", "Information Gain", "Categorical attributes only"],
              ["C4.5", "Gain Ratio", "Supports continuous features & missing values"],
              ["CART", "Gini Index", "Binary splits; classification & regression"]
            ]
          }
        }
      }
    ],
    slides: [
      {
        title: { uz: "3-mavzu: Qaror daraxtlari", en: "Topic 3: Decision Trees" },
        subtitle: { uz: "Entropiya, Information Gain va Gini indeksi", en: "Entropy, Information Gain, Gini & Pruning" },
        points: {
          uz: ["Daraxt tuzilishi: Root, Node, Branch, Leaf", "Entropiya va Information Gain formulalari", "ID3, C4.5 va CART farqlari", "Overfitting va Pruning (Budash)"],
          en: ["Tree anatomy: Root, Internal, Branch, Leaf", "Entropy & Information Gain math", "ID3 vs C4.5 vs CART", "Overfitting & Pre/Post-Pruning"]
        }
      },
      {
        title: { uz: "Entropiya va Gini indeksi", en: "Impurity Measures: Entropy vs Gini" },
        formula: "H(S) = -Σ p_i log₂(p_i)    |    Gini(S) = 1 - Σ p_i²",
        points: {
          uz: ["H=0 (Gini=0): tugun mutlaqo sof (bitta sinf)", "H=1 (Gini=0.5): ikki sinf teng 50/50 aralashgan", "Information Gain = ajralishdan oldingi H - keyingi o'rtacha H"],
          en: ["H=0 (Gini=0): completely pure node", "H=1 (Gini=0.5): maximum impurity (50/50 binary split)", "Information Gain chooses the split with largest impurity drop"]
        }
      },
      {
        title: { uz: "Algoritmlar taqqoslash", en: "ID3 vs C4.5 vs CART" },
        table: {
          headers: { uz: ["Algoritm", "Mezon", "Daraxt turi"], en: ["Algorithm", "Metric", "Tree Structure"] },
          rows: {
            uz: [
              ["ID3", "Information Gain", "Ko'p shoxli"],
              ["C4.5", "Gain Ratio", "Ko'p shoxli + uzluksiz"],
              ["CART", "Gini / MSE", "Doimo ikkilik (Binary)"]
            ],
            en: [
              ["ID3", "Information Gain", "Multi-way splits"],
              ["C4.5", "Gain Ratio", "Multi-way + continuous"],
              ["CART", "Gini / MSE", "Always binary splits"]
            ]
          }
        }
      },
      {
        title: { uz: "Overfitting va Budash (Pruning)", en: "Overfitting & Pruning" },
        points: {
          uz: ["Belgi: Train aniqlik 99%, Test aniqlik 65%", "Pre-pruning: max_depth, min_samples_split bilan cheklash", "Post-pruning: to'liq daraxtdan kuchsiz shoxlarni kesish"],
          en: ["Symptom: 99% train accuracy vs 65% test accuracy", "Pre-pruning: stop early via max_depth / min_samples_leaf", "Post-pruning: grow full tree then trim weak branches"]
        }
      }
    ],
    lab: {
      title: { uz: "L3: Iris datasetida Decision Tree", en: "L3: Decision Tree on Iris Dataset" },
      tasks: {
        uz: [
          "max_depth=3 va criterion='gini' bilan model o'qiting",
          "export_text() yordamida qoidalarni chop eting",
          "max_depth ni 1 dan 10 gacha o'zgartirib test aniqlikni kuzating"
        ],
        en: [
          "Train DecisionTreeClassifier with max_depth=3 and criterion='gini'",
          "Print human-readable rules using export_text()",
          "Vary max_depth from 1 to 10 and observe overfitting"
        ]
      },
      code: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3, random_state=42
)
dt = DecisionTreeClassifier(max_depth=3, criterion='gini', random_state=42)
dt.fit(X_train, y_train)
print(f"Test Accuracy: {accuracy_score(y_test, dt.predict(X_test)):.3f}")
print(export_text(dt, feature_names=list(iris.feature_names)))`
    },
    glossary: [
      { uz: "Entropiya", en: "Entropy", defUz: "Tugundagi sinflar noaniqligi o'lchovi", defEn: "Measure of class uncertainty or impurity in a node" },
      { uz: "Gini indeksi", en: "Gini Index", defUz: "Tasodifiy elementni noto'g'ri tasniflash ehtimoli", defEn: "Probability of misclassifying a randomly chosen element" },
      { uz: "Pruning (Budash)", en: "Pruning", defUz: "Overfittingni kamaytirish uchun ortiqcha shoxlarni qisqartirish", defEn: "Trimming tree branches to prevent overfitting" }
    ],
    quiz: [
      {
        q: { uz: "Qaror daraxtida \"barg\" (leaf node) nima?", en: "What does a leaf node represent in a Decision Tree?" },
        options: [
          { label: 'A', uz: "Birinchi ajralish nuqtasi", en: "First splitting attribute" },
          { label: 'B', uz: "Yakuniy sinf bashorati", en: "Final predicted class label" },
          { label: 'C', uz: "Atribut testi", en: "Attribute test condition" },
          { label: 'D', uz: "Ortiqcha tugun", en: "A redundant branch" }
        ],
        answer: 'B',
        explanation: { uz: "Barg tugunlar daraxtning oxirgi nuqtasi bo'lib, yakuniy sinfni qaytaradi.", en: "Leaf nodes are terminal nodes outputting the final class prediction." }
      },
      {
        q: { uz: "Entropiya H=0 bo'lsa, bu nimani anglatadi?", en: "What does Entropy H = 0 mean?" },
        options: [
          { label: 'A', uz: "Obyektlar teng taqsimlangan", en: "Classes are equally mixed" },
          { label: 'B', uz: "Barcha obyektlar bir xil sinfda (sof)", en: "All instances belong to a single class (pure)" },
          { label: 'C', uz: "Ma'lumot yetishmaydi", en: "Missing data exists" },
          { label: 'D', uz: "Daraxt juda chuqur", en: "The tree is too deep" }
        ],
        answer: 'B',
        explanation: { uz: "Noaniqlik nolga teng bo'lganda barcha namunalar bitta sinfga tegishli bo'ladi.", en: "Zero entropy means zero impurity — 100% of samples belong to one class." }
      },
      {
        q: { uz: "ID3 algoritmi qaysi mezondan foydalanadi?", en: "Which split criterion does ID3 use?" },
        options: [
          { label: 'A', uz: "Gini indeksi", en: "Gini Index" },
          { label: 'B', uz: "Information Gain", en: "Information Gain" },
          { label: 'C', uz: "MSE", en: "MSE" },
          { label: 'D', uz: "Silhouette", en: "Silhouette Score" }
        ],
        answer: 'B',
        explanation: { uz: "ID3 Information Gain asosida, CART esa Gini indeksi asosida bo'ladi.", en: "ID3 splits by maximizing Information Gain; CART uses Gini Impurity." }
      },
      {
        q: { uz: "Overfitting (ortiqcha o'rganish) belgilari qaysi?", en: "Which pattern clearly signals overfitting?" },
        options: [
          { label: 'A', uz: "O'quv past, test yuqori", en: "Low train, high test accuracy" },
          { label: 'B', uz: "O'quv juda yuqori, test past", en: "Very high train accuracy, much lower test accuracy" },
          { label: 'C', uz: "Ikkalasi ham past", en: "Both train and test are low" },
          { label: 'D', uz: "Ikkalasi ham yuqori", en: "Both train and test are high" }
        ],
        answer: 'B',
        explanation: { uz: "Model o'quv ma'lumotini yodlab olgan, lekin yangi ma'lumotga umumlashtira olmayapti.", en: "Memorizing training noise yields high train score but poor generalization on unseen test data." }
      },
      {
        q: { uz: "CART algoritmi qaysi mezondan foydalanadi?", en: "Which impurity metric does CART use by default?" },
        options: [
          { label: 'A', uz: "Gain Ratio", en: "Gain Ratio" },
          { label: 'B', uz: "Information Gain", en: "Information Gain" },
          { label: 'C', uz: "Gini Index", en: "Gini Index" },
          { label: 'D', uz: "Cosine Similarity", en: "Cosine Similarity" }
        ],
        answer: 'C',
        explanation: { uz: "CART ikkilik daraxt qurishda Gini indeksini minimallaydi.", en: "CART builds binary trees using the Gini Impurity criterion." }
      }
    ]
  },

  {
    id: 4,
    slug: '04-classification-bayes',
    hours: 2,
    labs: 1,
    keywords: ['Naive Bayes', 'k-NN', 'Bayes Theorem', 'Euclidean', 'Distance'],
    title: {
      uz: "Naive Bayes va k-NN algoritmlari",
      en: "Naive Bayes & k-Nearest Neighbors"
    },
    description: {
      uz: "Bayes teoremasi, shartli mustaqillik taxmini, Gaussian/Multinomial Naive Bayes hamda k-NN masofa o'lchovlari.",
      en: "Bayes' theorem, conditional independence assumption, Gaussian & Multinomial NB, and distance-based k-NN."
    },
    sections: [
      {
        heading: { uz: "4.1. Naive Bayes tasniflagichi", en: "4.1. Naive Bayes Classifier" },
        bodyHtml: {
          uz: "<p><strong>Naive Bayes</strong> — Bayes teoremasiga asoslangan ehtimollik modeli. \"Naive\" deyilishiga sabab: barcha xususiyatlar sinf berilganda o'zaro <strong>mustaqil</strong> deb faraz qilinadi.</p><ul><li><strong>Gaussian NB:</strong> uzluksiz normal taqsimlangan sonlar.</li><li><strong>Multinomial NB:</strong> so'z chastotalari (spam filtri, matn).</li><li><strong>Bernoulli NB:</strong> ikkilik (0/1) belgilar.</li></ul>",
          en: "<p><strong>Naive Bayes</strong> is a probabilistic classifier grounded in Bayes' Theorem. It is called \"naive\" because it assumes features are conditionally <strong>independent</strong> given the class.</p><ul><li><strong>Gaussian NB:</strong> continuous normally distributed features.</li><li><strong>Multinomial NB:</strong> word count vectors (spam filtering, text).</li><li><strong>Bernoulli NB:</strong> binary (0/1) feature presence.</li></ul>"
        },
        formula: "P(C|X) = [ P(X|C) · P(C) ] / P(X)   where   P(X|C) ≈ Π P(x_i | C)"
      },
      {
        heading: { uz: "4.2. k-NN (k-Eng Yaqin Qo'shni)", en: "4.2. k-Nearest Neighbors (k-NN)" },
        bodyHtml: {
          uz: "<p><strong>k-NN</strong> — o'qitish davri bo'lmagan (lazy learner) algoritm. Yangi obyektga eng yaqin <em>k</em> ta qo'shni topiladi va ko'pchilik ovozi bilan sinf belgilanadi.</p><p><strong>Muhim:</strong> k-NN masofa hisoblagani uchun normallashtirish majburiy! Kichik k (k=1) overfittingga, juda katta k underfittingga olib keladi.</p>",
          en: "<p><strong>k-NN</strong> is a non-parametric lazy learner. At prediction time, it finds the <em>k</em> closest training points and assigns the majority class.</p><p><strong>Crucial:</strong> Feature scaling is mandatory for k-NN! Small k (k=1) risks overfitting to noise; overly large k causes underfitting.</p>"
        },
        formula: "Euclidean: d = √Σ(x_i - y_i)²   |   Manhattan: d = Σ|x_i - y_i|"
      }
    ],
    slides: [
      {
        title: { uz: "4-mavzu: Naive Bayes va k-NN", en: "Topic 4: Naive Bayes & k-NN" },
        subtitle: { uz: "Ehtimollik va masofaga asoslangan tasniflash", en: "Probabilistic & Instance-Based Learning" },
        points: {
          uz: ["Bayes teoremasi va mustaqillik taxmini", "Gaussian, Multinomial, Bernoulli NB", "k-NN algoritmi va Evklid/Manhattan masofasi", "k ni tanlash va normallashtirish zarurati"],
          en: ["Bayes' Theorem & independence assumption", "Gaussian, Multinomial & Bernoulli NB", "k-NN voting & Euclidean/Manhattan distance", "Choosing optimal k & feature scaling"]
        }
      },
      {
        title: { uz: "Bayes Teoremasi", en: "Bayes' Theorem" },
        formula: "P(C|X) = P(X|C) · P(C) / P(X)",
        points: {
          uz: ["Posterior: P(C|X) — izlanayotgan ehtimol", "Likelihood: P(X|C) — sinf ichidagi belgilar ehtimoli", "Prior: P(C) — sinfning boshlang'ich ulushi"],
          en: ["Posterior P(C|X): updated probability of class C given X", "Likelihood P(X|C): probability of features X under class C", "Prior P(C): baseline class frequency"]
        }
      },
      {
        title: { uz: "k-NN Ishlash Tartibi va k qiymati", en: "How k-NN Works & Choosing k" },
        points: {
          uz: ["1. Barcha nuqtalargacha masofani hisoblash", "2. Eng yaqin k ta qo'shnini saralash", "3. Ko'pchilik ovozi bilan bashorat berish", "k=1: shovqinga sezgir (overfitting)", "Optimal k: Cross-Validation orqali topiladi (odatda toq son)"],
          en: ["1. Compute distance to every training sample", "2. Pick the k nearest neighbors", "3. Predict majority class vote", "k=1: sensitive to noise (overfitting)", "Select optimal k via Cross-Validation"]
        }
      }
    ],
    lab: {
      title: { uz: "L4: Wine datasetida Naive Bayes va k-NN", en: "L4: GaussianNB & k-NN Tuning on Wine Dataset" },
      tasks: {
        uz: [
          "StandardScaler bilan ma'lumotni normallashtiring",
          "GaussianNB va k-NN aniqligini solishtiring",
          "k=1..20 uchun 5-fold CV bilan optimal k ni toping"
        ],
        en: [
          "Standardize features with StandardScaler before k-NN",
          "Compare GaussianNB vs KNeighborsClassifier accuracy",
          "Sweep k=1..20 with 5-fold cross-validation to find optimal k"
        ]
      },
      code: `from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
import numpy as np

wine = load_wine()
X_train, X_test, y_train, y_test = train_test_split(wine.data, wine.target, test_size=0.3, random_state=42)
scaler = StandardScaler()
X_tr_s = scaler.fit_transform(X_train)
X_te_s = scaler.transform(X_test)

nb = GaussianNB().fit(X_train, y_train)
print("GaussianNB:", round(nb.score(X_test, y_test), 3))

scores = [cross_val_score(KNeighborsClassifier(k), X_tr_s, y_train, cv=5).mean() for k in range(1, 21)]
best_k = int(np.argmax(scores)) + 1
knn = KNeighborsClassifier(best_k).fit(X_tr_s, y_train)
print(f"Best k={best_k}, k-NN:", round(knn.score(X_te_s, y_test), 3))`
    },
    glossary: [
      { uz: "Posterior ehtimol", en: "Posterior Probability", defUz: "X belgilari kuzatilgandan keyingi C sinf ehtimoli P(C|X)", defEn: "Updated probability of class C after observing features X" },
      { uz: "Lazy Learner", en: "Lazy Learner", defUz: "O'qitish bosqichisiz faqat bashorat paytida hisoblovchi model (k-NN)", defEn: "Algorithm deferring computation until query time (e.g., k-NN)" }
    ],
    quiz: [
      {
        q: { uz: "Naive Bayesda \"naive\" (soddadil) so'zi nimani anglatadi?", en: "Why is Naive Bayes called \"naive\"?" },
        options: [
          { label: 'A', uz: "Algoritm juda eski", en: "The algorithm is outdated" },
          { label: 'B', uz: "Atributlar o'zaro mustaqil deb taxmin qilinadi", en: "It assumes features are conditionally independent" },
          { label: 'C', uz: "Faqat ikki sinf uchun ishlaydi", en: "It only supports binary classes" },
          { label: 'D', uz: "O'qitish talab qilmaydi", en: "It requires no training" }
        ],
        answer: 'B',
        explanation: { uz: "Atributlar bir-biridan mustaqil degan kuchli soddalashtirish sababli shunday nomlangan.", en: "It makes the simplifying assumption that predictors are independent given the class." }
      },
      {
        q: { uz: "k-NN da k=1 bo'lsa qanday xavf kuchayadi?", en: "What happens in k-NN when k=1?" },
        options: [
          { label: 'A', uz: "Underfitting", en: "Severe underfitting" },
          { label: 'B', uz: "Overfitting va shovqinga sezgirlik", en: "Overfitting and high sensitivity to noise" },
          { label: 'C', uz: "Normallashtirish kerak bo'lmaydi", en: "Scaling is no longer needed" },
          { label: 'D', uz: "Barcha nuqtalar bir sinfga tushadi", en: "All points collapse to one class" }
        ],
        answer: 'B',
        explanation: { uz: "k=1 faqat bitta eng yaqin nuqtaga qaraydi, shuning uchun bitta shovqin nuqta qarorni buzadi.", en: "With k=1, a single noisy neighbor dictates the prediction." }
      },
      {
        q: { uz: "k-NN da normallashtirish nima uchun zarur?", en: "Why is feature scaling critical for k-NN?" },
        options: [
          { label: 'A', uz: "Katta diapazonli ustunlar masofani bosib ketmasligi uchun", en: "So large-scale features don't dominate distance calculations" },
          { label: 'B', uz: "Kategorik ustunlarni o'chirish uchun", en: "To remove categorical columns" },
          { label: 'C', uz: "Prior ehtimollarni topish uchun", en: "To compute prior probabilities" },
          { label: 'D', uz: "Daraxt chuqurligini kamaytirish uchun", en: "To prune tree depth" }
        ],
        answer: 'A',
        explanation: { uz: "Masalan, 0–10000 daromad ustuni 0–100 yosh ustunidan masofani butunlay ustun qilib qo'yadi.", en: "Unscaled features with large magnitudes overwhelm smaller-scale attributes in Euclidean distance." }
      },
      {
        q: { uz: "Gaussian Naive Bayes qaysi ma'lumotlar uchun mos?", en: "When is Gaussian Naive Bayes most appropriate?" },
        options: [
          { label: 'A', uz: "Faqat matn so'z chastotalari", en: "Only text word counts" },
          { label: 'B', uz: "Uzluksiz, normal taqsimotga yaqin raqamli belgilar", en: "Continuous numeric features following roughly normal distributions" },
          { label: 'C', uz: "Faqat 0/1 ikkilik belgilar", en: "Only binary 0/1 flags" },
          { label: 'D', uz: "Tranzaksiya savatlari", en: "Market basket transactions" }
        ],
        answer: 'B',
        explanation: { uz: "Gaussian NB har bir uzluksiz atribut uchun o'rtacha va dispersiya bo'yicha normal taqsimot quradi.", en: "Gaussian NB models continuous features using class-conditional Gaussian distributions." }
      },
      {
        q: { uz: "k-NN ning katta datasetlardagi asosiy kamchiligi nima?", en: "What is the main drawback of k-NN on massive datasets?" },
        options: [
          { label: 'A', uz: "O'qitish vaqti juda sekin", en: "Extremely slow training phase" },
          { label: 'B', uz: "Bashorat paytida barcha nuqtalarga masofa hisoblash sekin (O(n))", en: "Slow prediction time O(n) and high memory storage" },
          { label: 'C', uz: "Ko'p sinflarni ajrata olmaydi", en: "Cannot handle multi-class problems" },
          { label: 'D', uz: "Chiziqsiz chegaralar qura olmaydi", en: "Cannot form non-linear decision boundaries" }
        ],
        answer: 'B',
        explanation: { uz: "k-NN barcha o'quv ma'lumotini saqlaydi va har so'rovda masofalarni hisoblaydi.", en: "Because k-NN is lazy, query inference scales linearly with dataset size." }
      }
    ]
  },

  {
    id: 5,
    slug: '05-evaluation',
    hours: 2,
    labs: 1,
    keywords: ['Confusion Matrix', 'Precision', 'Recall', 'F1-score', 'ROC', 'AUC'],
    title: {
      uz: "Tasniflash modellarini baholash",
      en: "Model Evaluation Metrics & Validation"
    },
    description: {
      uz: "Confusion Matrix, Accuracy tuzog'i, Precision, Recall, F1-score, ROC-AUC va K-katlamli Cross-Validation.",
      en: "Confusion Matrix, the accuracy paradox, Precision, Recall, F1-score, ROC-AUC curves, and K-Fold CV."
    },
    sections: [
      {
        heading: { uz: "5.1. Accuracy tuzog'i va Confusion Matrix", en: "5.1. The Accuracy Paradox & Confusion Matrix" },
        bodyHtml: {
          uz: "<p>Agar 100 ta tranzaksiyadan 95 tasi oddiy, 5 tasi firibgar bo'lsa, hammani \"oddiy\" deydigan foydasiz model ham <strong>95% Accuracy</strong> beradi! Shuning uchun <strong>Confusion Matrix</strong> (TP, TN, FP, FN) tahlili zarur.</p>",
          en: "<p>If 95% of transactions are legitimate and 5% are fraud, a useless dummy model predicting \"legit\" achieves <strong>95% Accuracy</strong>! Thus we inspect the <strong>Confusion Matrix</strong> (TP, TN, FP, FN).</p>"
        },
        table: {
          headers: { uz: ["", "Bashorat: Musbat", "Bashorat: Manfiy"], en: ["", "Predicted Positive", "Predicted Negative"] },
          rows: {
            uz: [
              ["Haqiqiy: Musbat", "TP (To'g'ri musbat)", "FN (2-tur xato — o'tkazib yuborish)"],
              ["Haqiqiy: Manfiy", "FP (1-tur xato — yolg'on signal)", "TN (To'g'ri manfiy)"]
            ],
            en: [
              ["Actual Positive", "TP (True Positive)", "FN (False Negative / Type II)"],
              ["Actual Negative", "FP (False Positive / Type I)", "TN (True Negative)"]
            ]
          }
        }
      },
      {
        heading: { uz: "5.2. Precision, Recall, F1-score va ROC-AUC", en: "5.2. Precision, Recall, F1-score & ROC-AUC" },
        bodyHtml: {
          uz: "<ul><li><strong>Precision:</strong> spam filtri uchun muhim (muhim xatni spamga tashlamaslik — FP kam bo'lishi).</li><li><strong>Recall:</strong> tibbiy diagnostika va firibgarlikda muhim (kasalni o'tkazib yubormaslik — FN kam bo'lishi).</li><li><strong>F1-score:</strong> Precision va Recall ning garmonik o'rtachasi.</li><li><strong>ROC-AUC:</strong> AUC=1.0 mukammal, AUC=0.5 tasodifiy model.</li></ul>",
          en: "<ul><li><strong>Precision:</strong> crucial when False Positives are costly (e.g., spam filtering).</li><li><strong>Recall:</strong> crucial when False Negatives are dangerous (e.g., cancer screening, fraud).</li><li><strong>F1-score:</strong> harmonic mean balancing Precision and Recall.</li><li><strong>ROC-AUC:</strong> AUC=1.0 is ideal; AUC=0.5 equals random guessing.</li></ul>"
        },
        formula: "Precision = TP/(TP+FP)  |  Recall = TP/(TP+FN)  |  F1 = 2·P·R/(P+R)"
      }
    ],
    slides: [
      {
        title: { uz: "5-mavzu: Modellarni baholash", en: "Topic 5: Model Evaluation Metrics" },
        subtitle: { uz: "Confusion Matrix, Precision/Recall, ROC-AUC, CV", en: "Beyond Accuracy: Imbalanced Data & Validation" },
        points: {
          uz: ["Accuracy paradoksi (noteng sinflar)", "Confusion Matrix: TP, FP, FN, TN", "Precision vs Recall vs F1-score", "ROC egri chizig'i, AUC va K-Fold CV"],
          en: ["The Accuracy Paradox on imbalanced classes", "Confusion Matrix: TP, FP, FN, TN", "Precision vs Recall vs F1-score", "ROC Curve, AUC & K-Fold Cross-Validation"]
        }
      },
      {
        title: { uz: "Baholash formulalari", en: "Core Evaluation Formulas" },
        formula: "Accuracy = (TP+TN)/N  |  P = TP/(TP+FP)  |  R = TP/(TP+FN)  |  F1 = 2PR/(P+R)",
        points: {
          uz: ["Spam filtri → Precision muhim (FP kamaytirish)", "Saraton diagnostikasi → Recall muhim (FN kamaytirish)", "Noteng sinflar muvozanati → F1-score"],
          en: ["Spam filter → optimize Precision (avoid false alarms)", "Disease screening → optimize Recall (catch every patient)", "Balanced trade-off → F1-score"]
        }
      },
      {
        title: { uz: "ROC-AUC va K-Fold Cross-Validation", en: "ROC-AUC & K-Fold Cross-Validation" },
        points: {
          uz: ["ROC: barcha thresholdlarda TPR (y) va FPR (x) grafigi", "AUC = 1.0 mukammal | AUC = 0.5 tasodifiy", "K-Fold CV (k=5 yoki 10): ma'lumotni k qismga bo'lib har birini navbat bilan test qilish"],
          en: ["ROC plots TPR vs FPR across all probability thresholds", "AUC = 1.0 perfect | AUC = 0.5 random coin flip", "K-Fold CV: average score across k rotating validation folds"]
        }
      }
    ],
    lab: {
      title: { uz: "L5: Breast Cancer datasetida ROC-AUC va CV", en: "L5: Confusion Matrix, ROC-AUC & 5-Fold CV" },
      tasks: {
        uz: [
          "Confusion Matrixdan TP, FN, FP, TN qiymatlarini ajrating",
          "Precision, Recall va F1 ni qo'lda ham hisoblang",
          "ROC egri chizig'i va 5-katlamli CV o'rtachasini chiqaring"
        ],
        en: [
          "Extract TP, FN, FP, TN from confusion_matrix()",
          "Verify Precision, Recall, and F1 against classification_report()",
          "Compute ROC-AUC and 5-fold cross-validation mean ± std"
        ]
      },
      code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix, roc_auc_score, classification_report

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.3, random_state=42)
clf = DecisionTreeClassifier(max_depth=5, random_state=42).fit(X_tr, y_tr)
y_pred = clf.predict(X_te)
y_prob = clf.predict_proba(X_te)[:, 1]

print("Confusion Matrix:\\n", confusion_matrix(y_te, y_pred))
print("ROC AUC:", round(roc_auc_score(y_te, y_prob), 3))
cv = cross_val_score(clf, data.data, data.target, cv=5)
print(f"5-Fold CV: {cv.mean():.3f} ± {cv.std():.3f}")`
    },
    glossary: [
      { uz: "Precision", en: "Precision", defUz: "Musbat deb bashorat qilinganlar orasida haqiqiy musbatlar ulushi", defEn: "Share of predicted positives that are truly positive" },
      { uz: "Recall", en: "Recall", defUz: "Barcha haqiqiy musbatlarning model topa olgan ulushi", defEn: "Share of actual positives successfully detected" },
      { uz: "AUC", en: "AUC", defUz: "ROC egri chizig'i ostidagi maydon (0.5–1.0)", defEn: "Area Under the ROC Curve measuring class separation" }
    ],
    quiz: [
      {
        q: { uz: "Tibbiy diagnostikada (kasallikni aniqlash) qaysi ko'rsatkich muhimroq?", en: "Which metric is most critical in medical disease screening?" },
        options: [
          { label: 'A', uz: "Precision", en: "Precision" },
          { label: 'B', uz: "Recall", en: "Recall" },
          { label: 'C', uz: "Accuracy", en: "Accuracy" },
          { label: 'D', uz: "Support", en: "Support" }
        ],
        answer: 'B',
        explanation: { uz: "Kasallikni o'tkazib yubormaslik (FN ni minimallashtirish) hayotiy muhim, shuning uchun Recall ustun.", en: "Missing a sick patient (False Negative) is dangerous, so maximizing Recall is vital." }
      },
      {
        q: { uz: "AUC = 0.5 nimani anglatadi?", en: "What does AUC = 0.5 indicate?" },
        options: [
          { label: 'A', uz: "Mukammal model", en: "A perfect classifier" },
          { label: 'B', uz: "Tasodifiy taxmin bilan teng model", en: "No better than random guessing" },
          { label: 'C', uz: "50% overfitting", en: "50% overfitting" },
          { label: 'D', uz: "Hisoblash xatosi", en: "Calculation error" }
        ],
        answer: 'B',
        explanation: { uz: "AUC=0.5 ROC grafigida diagonal chiziqqa to'g'ri keladi — model sinflarni ajrata olmaydi.", en: "AUC=0.5 sits on the diagonal line representing pure random chance." }
      },
      {
        q: { uz: "Spam filtri uchun (muhim xatni bloklamaslik) qaysi ko'rsatkich muhimroq?", en: "For an email spam filter (avoiding blocking important mail), which matters more?" },
        options: [
          { label: 'A', uz: "Recall", en: "Recall" },
          { label: 'B', uz: "Precision", en: "Precision" },
          { label: 'C', uz: "WCSS", en: "WCSS" },
          { label: 'D', uz: "Lift", en: "Lift" }
        ],
        answer: 'B',
        explanation: { uz: "Oddiy xatni spamga tashlash (FP) zararli, shuning uchun Precision yuqori bo'lishi kerak.", en: "Minimizing False Positives (good emails marked spam) requires high Precision." }
      },
      {
        q: { uz: "Confusion matrisada FN (False Negative) nima?", en: "What is a False Negative (FN)?" },
        options: [
          { label: 'A', uz: "Musbatni musbat deb topish", en: "Predicting positive for actual positive" },
          { label: 'B', uz: "Manfiyni manfiy deb topish", en: "Predicting negative for actual negative" },
          { label: 'C', uz: "Haqiqiy musbatni manfiy deb o'tkazib yuborish", en: "Predicting negative when actual class is positive" },
          { label: 'D', uz: "Manfiyni musbat deyish", en: "Predicting positive when actual is negative" }
        ],
        answer: 'C',
        explanation: { uz: "FN — musbat holatni sezmay qolish (2-tur xato).", en: "FN is a Type II error where a true positive case is missed." }
      },
      {
        q: { uz: "5-katlamli cross-validation da ma'lumot necha marta test sifatida ishlatiladi?", en: "In 5-fold cross-validation, how many times is each fold used as test data?" },
        options: [
          { label: 'A', uz: "1 marta (umumiy 5 ta iteratsiyada)", en: "Once per fold across 5 total iterations" },
          { label: 'B', uz: "Faqat bitta tasodifiy bo'linishda", en: "Only once on a single fixed split" },
          { label: 'C', uz: "10 marta", en: "10 times" },
          { label: 'D', uz: "Hech qachon", en: "Never" }
        ],
        answer: 'A',
        explanation: { uz: "5 ta teng qismning har biri 5 ta iteratsiya davomida aniq 1 martadan test to'plami bo'ladi.", en: "Across 5 iterations, each of the 5 folds serves once as the validation set." }
      }
    ]
  }
);
