window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== B1: WEB & SOCIAL NETWORK MINING ====================
  {
    id: 16,
    code: 'B1',
    isBonus: true,
    slug: 'b1-web-mining',
    hours: 2,
    labs: 0,
    keywords: ['Web Mining', 'PageRank', 'Centrality', 'Betweenness', 'Community Detection', 'Recommender'],
    title: {
      uz: "Bonus B1: Veb va ijtimoiy tarmoqlar tahlili",
      en: "Bonus B1: Web & Social Network Mining"
    },
    description: {
      uz: "Stanford CS246 qo'shimcha bob: Web Content/Structure/Usage mining, PageRank Power Iteration, Betweenness Centrality va Tavsiya tizimlari.",
      en: "Extended CS246 module: Web Content/Structure/Usage mining, PageRank teleportation, Graph Centralities, and Recommenders."
    },
    sections: [
      {
        heading: { uz: "B1.1. Veb-Mining va PageRank Algoritmi", en: "B1.1. Web Mining & PageRank" },
        bodyHtml: {
          uz: "<p>Veb-mining uch yo'nalishga bo'linadi: <strong>Web Content</strong>, <strong>Web Structure</strong> (havolalar grafi) va <strong>Web Usage</strong> (klik loglari). <strong>PageRank</strong> (Page &amp; Brin, 1998) sahifa nufuzini kiruvchi havolalar soni va sifati orqali o'lchaydi; <strong>Dead Ends</strong> va <strong>Spider Traps</strong> muammosini $d=0.85$ damping factor va $(1-d)/N$ teleportation bilan yechadi.</p>",
          en: "<p>Web Mining covers Content, Structure, and Usage. <strong>PageRank</strong> propagates link authority while escaping Dead Ends and Spider Traps via damping factor $d=0.85$ teleportation.</p>"
        },
        latex: "PR(A) = \\frac{1-d}{N} + d \\sum_{T_i \\to A} \\frac{PR(T_i)}{C(T_i)}",
        widget: 'pagerank-sim'
      },
      {
        heading: { uz: "B1.2. Graf Markazligi va Tavsiya Tizimlari", en: "B1.2. Graph Centralities & Recommender Systems" },
        bodyHtml: {
          uz: "<p><strong>Degree Centrality</strong> (aloqalar soni), <strong>Betweenness Centrality</strong> (eng qisqa yo'llar o'tuvchi ko'prik tugun) va <strong>Closeness</strong> (o'rtacha masofa). Tavsiya tizimlarida <strong>Collaborative Filtering</strong> (o'xshash foydalanuvchilar — <em>Cold Start</em> muammosi bor) va <strong>Content-Based Filtering</strong> qo'llaniladi.</p>",
          en: "<p>Graph centralities include Degree, <strong>Betweenness</strong> (bridge nodes on shortest paths), and Closeness. <strong>Collaborative Filtering</strong> recommends items liked by similar users (subject to <em>Cold Start</em>).</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "B1: Veb va Ijtimoiy Tarmoqlar Tahlili", en: "B1: Web & Social Network Mining" }, subtitle: { uz: "Qo'shimcha Bob (Stanford CS246 / Mustaqil ta'lim #2)", en: "Bonus Chapter · Link Graphs & Recommenders" }, points: { uz: ["Web Content, Structure, Usage", "PageRank va Teleportation (d=0.85)", "Degree vs Betweenness vs Closeness", "Collaborative Filtering & Cold Start"], en: ["Content, Structure & Usage mining", "PageRank & Teleportation", "Graph Centralities", "Recommender Systems"] } },
      { title: { uz: "Interaktiv PageRank Power Iteration", en: "Interactive PageRank Simulator" }, widget: 'pagerank-sim' },
      { title: { uz: "Talabalarga savol (Betweenness)", en: "Class Discussion: Bridge Nodes" }, discussion: { q: { uz: "Epidemiyani ikki shahar orasida to'xtatish uchun eng katta Degree li tugunni izolyatsiya qilasizmi yoki eng katta Betweenness li tugunni?", en: "To halt spread between two clusters, isolate highest Degree or highest Betweenness?" }, a: { uz: "<strong>Highest Betweenness!</strong> Chunki u ikki jamoani bog'lab turuvchi asosiy ko'prik tugundir.", en: "<strong>Highest Betweenness!</strong> It acts as the critical bridge between communities." } } }
    ],
    lab: {
      title: { uz: "Bonus Lab B1: NetworkX Karate Club PageRank va Jamoalar", en: "Bonus Lab B1: NetworkX PageRank & Communities" },
      objective: { uz: "Karate Club grafida PageRank, Betweenness va Modularity jamoalarni topish.", en: "Compute PageRank, Betweenness, and greedy modularity communities on Karate Club." },
      steps: [{
        title: { uz: "PageRank va Betweenness Top-5", en: "Compute PageRank & Betweenness" },
        desc: { uz: "NetworkX bilan eng muhim tugunlarni chiqaring.", en: "Rank top 5 nodes in Karate Club." },
        code: `import networkx as nx
G = nx.karate_club_graph()
pr = nx.pagerank(G, alpha=0.85)
bet = nx.betweenness_centrality(G)
for n, s in sorted(pr.items(), key=lambda x: x[1], reverse=True)[:5]:
    print(f"Node {n:2d}: PR={s:.4f} | Bet={bet[n]:.4f}")`
      }]
    },
    glossary: [
      { uz: "PageRank", en: "PageRank", defUz: "Kiruvchi havolalar nufuzi bilan sahifani baholash", defEn: "Authority score over hyperlink graph" },
      { uz: "Betweenness", en: "Betweenness", defUz: "Eng qisqa yo'llarning qanchasi tugundan o'tishi", defEn: "Fraction of shortest paths crossing a node" }
    ],
    quiz: [
      { q: { uz: "PageRank da teleportation (1-d=0.15) nima muammoni hal qiladi?", en: "What does PageRank teleportation fix?" }, options: [{ label: 'A', uz: "Dead Ends va Spider Traps", en: "Dead Ends and Spider Traps" }, { label: 'B', uz: "Overfitting", en: "Overfitting" }, { label: 'C', uz: "Scaling", en: "Scaling" }, { label: 'D', uz: "Stop-so'zlar", en: "Stop words" }], answer: 'A', explanation: { uz: "Tasodifiy sakrash yopiq halqa va boshi berk tugunlardan chiqaradi.", en: "Random jump prevents rank sinks and traps." } },
      { q: { uz: "Betweenness centrality nimani o'lchaydi?", en: "What does Betweenness Centrality measure?" }, options: [{ label: 'A', uz: "Tugun nechta eng qisqa yo'l (ko'prik) ustida joylashganini", en: "How often a node sits on shortest paths between nodes" }, { label: 'B', uz: "So'zlar sonini", en: "Word count" }, { label: 'C', uz: "Support ni", en: "Support" }, { label: 'D', uz: "WCSS ni", en: "WCSS" }], answer: 'A', explanation: { uz: "Yuqori betweenness jamoalararo ko'prik tugunni bildiradi.", en: "Identifies bridge nodes." } }
    ],
    matching: [
      { left: { uz: "PageRank", en: "PageRank" }, right: { uz: "Kiruvchi havolalar nufuzi (d=0.85)", en: "Incoming link authority (d=0.85)" } },
      { left: { uz: "Betweenness", en: "Betweenness" }, right: { uz: "Jamoalararo ko'prik tugun", en: "Bridge node on shortest paths" } },
      { left: { uz: "Cold Start", en: "Cold Start" }, right: { uz: "Yangi foydalanuvchida tarix yo'qligi", en: "No history for new users" } }
    ],
    fillGap: [
      { text: { uz: "PageRank da standart damping factor d = ___ ga teng.", en: "The standard PageRank damping factor d equals ___." }, answer: "0.85" }
    ]
  },

  // ==================== B2: STREAM MINING ====================
  {
    id: 17,
    code: 'B2',
    isBonus: true,
    slug: 'b2-stream-mining',
    hours: 2,
    labs: 0,
    keywords: ['Stream Mining', 'Sliding Window', 'Bloom Filter', 'HyperLogLog', 'Concept Drift', 'Kafka'],
    title: {
      uz: "Bonus B2: Oqimli ma'lumotlar tahlili (Stream Mining)",
      en: "Bonus B2: Data Stream Mining"
    },
    description: {
      uz: "Cheksiz oqimlar, Sliding Window, Reservoir Sampling, Bloom Filter (0% FN), HyperLogLog, Concept Drift va Kafka/Flink.",
      en: "Unbounded data streams, Sliding Window, Reservoir Sampling, Bloom Filter, HyperLogLog, and Concept Drift."
    },
    sections: [
      {
        heading: { uz: "B2.1. Oqimli Ma'lumotlar, Sliding Window va Sketchlar", en: "B2.1. Streams, Sliding Window & Sketches" },
        bodyHtml: {
          uz: "<p>Cheksiz oqimda har element faqat 1 marta ko'riladi. <strong>Sliding Window</strong> so'nggi $N$ ta elementni saqlaydi. <strong>Bloom Filter</strong> mavjudlikni tekshiradi (False Positive mumkin, <strong>False Negative = 0%</strong>). <strong>Flajolet-Martin / HyperLogLog</strong> noyob elementlar sonini kilobayt xotirada taxminlaydi. <strong>Concept Drift</strong> — vaqt o'tishi bilan taqsimot o'zgarishi.</p>",
          en: "<p>Streams enforce single-pass bounded memory: <strong>Sliding Window</strong> keeps latest $N$ items; <strong>Bloom Filter</strong> has 0% False Negatives; <strong>HyperLogLog</strong> estimates cardinality; <strong>Concept Drift</strong> tracks shifting distributions.</p>"
        },
        widget: 'stream-sim'
      }
    ],
    slides: [
      { title: { uz: "B2: Oqimli Ma'lumotlar Tahlili", en: "B2: Data Stream Mining" }, subtitle: { uz: "Qo'shimcha Bob (TN10 & Mustaqil ta'lim #10)", en: "Bonus Chapter · Real-Time Streaming" }, points: { uz: ["Single-Pass cheklovi va Sliding Window", "Bloom Filter (0% FN) va HyperLogLog", "Concept Drift va Kafka / Flink"], en: ["Single-pass limits & Sliding Window", "Bloom Filter & HyperLogLog", "Concept Drift & Kafka/Flink"] } },
      { title: { uz: "Interaktiv Sliding Window va Concept Drift", en: "Interactive Stream Drift Demo" }, widget: 'stream-sim' }
    ],
    lab: {
      title: { uz: "Bonus Lab B2: Sliding Window va Concept Drift Detektori", en: "Bonus Lab B2: Sliding Window & Drift Detection" },
      objective: { uz: "deque(maxlen=30) bilan sirpanuvchi o'rtacha va 3σ anomaliyalarni kuzatish.", en: "Track rolling mean & 3σ anomalies using deque(maxlen=30)." },
      steps: [{
        title: { uz: "Concept Drift Oqim Simulyatsiyasi", en: "Stream Drift Detection" },
        desc: { uz: "t=150 da o'rtacha siljishini aniqlang.", en: "Detect 3σ spikes and mean drift." },
        code: `import numpy as np
from collections import deque
np.random.seed(42)
stream = np.concatenate([np.random.normal(50, 4, 150), np.random.normal(75, 4, 150)])
win = deque(maxlen=30)
for t, v in enumerate(stream):
    if len(win) >= 15 and abs(v - np.mean(win)) / (np.std(win)+1e-9) > 3.2:
        print("Spike at t=", t, "val=", round(v, 1))
    win.append(v)`
      }]
    },
    glossary: [
      { uz: "Bloom Filter", en: "Bloom Filter", defUz: "0% False Negative bilan to'plamga tegishlilikni tekshiruvchi bit massivi", defEn: "Probabilistic membership filter (0% FN)" },
      { uz: "Concept Drift", en: "Concept Drift", defUz: "Vaqt o'tishi bilan ma'lumot taqsimotining o'zgarishi", defEn: "Shift in stream distribution over time" }
    ],
    quiz: [
      { q: { uz: "Bloom Filter qaysi turdagi xatoga yo'l qo'ymaydi (0%)?", en: "Which error NEVER occurs (0%) in a Bloom Filter?" }, options: [{ label: 'A', uz: "False Negative", en: "False Negative" }, { label: 'B', uz: "False Positive", en: "False Positive" }, { label: 'C', uz: "Concept Drift", en: "Concept Drift" }, { label: 'D', uz: "Masking", en: "Masking" }], answer: 'A', explanation: { uz: "Agar Bloom Filter 'yo'q' desa, element 100% yo'q (0% FN).", en: "Bloom filters never produce False Negatives." } },
      { q: { uz: "Vaqt o'tishi bilan ma'lumot taqsimotining o'zgarishi nima deyiladi?", en: "What is a shift in data distribution over time called?" }, options: [{ label: 'A', uz: "Concept Drift", en: "Concept Drift" }, { label: 'B', uz: "Pruning", en: "Pruning" }, { label: 'C', uz: "Bagging", en: "Bagging" }, { label: 'D', uz: "Binning", en: "Binning" }], answer: 'A', explanation: { uz: "Oqimdagi taqsimot o'zgarishi Concept Drift deyiladi.", en: "Distribution shift is Concept Drift." } }
    ],
    matching: [
      { left: { uz: "Bloom Filter", en: "Bloom Filter" }, right: { uz: "0% False Negative bilan mavjudlik testi", en: "Membership check with 0% FN" } },
      { left: { uz: "HyperLogLog", en: "HyperLogLog" }, right: { uz: "Noyob elementlar sonini taxminlash", en: "Distinct cardinality estimation" } },
      { left: { uz: "Sliding Window", en: "Sliding Window" }, right: { uz: "So'nggi N ta elementni saqlash", en: "Retains most recent N events" } }
    ],
    fillGap: [
      { text: { uz: "Vaqt o'tishi bilan oqim taqsimoti o'zgarishi Concept ___ deyiladi.", en: "Stream distribution change over time is called Concept ___." }, answer: "Drift" }
    ]
  },

  // ==================== B3: PRIVACY-PRESERVING DM ====================
  {
    id: 18,
    code: 'B3',
    isBonus: true,
    slug: 'b3-privacy',
    hours: 2,
    labs: 0,
    keywords: ['Privacy', 'GDPR', 'k-Anonymity', 'l-Diversity', 'Differential Privacy', 'Laplace'],
    title: {
      uz: "Bonus B3: Maxfiylikni saqlash (Privacy-Preserving DM)",
      en: "Bonus B3: Privacy-Preserving Data Mining"
    },
    description: {
      uz: "Re-identification (Sweeney 87%), GDPR unutilish huquqi, k-Anonymity, l-Diversity va Differential Privacy (ε byudjeti).",
      en: "Re-identification risks, GDPR right to be forgotten, k-Anonymity, l-Diversity, and Differential Privacy."
    },
    sections: [
      {
        heading: { uz: "B3.1. k-Anonymity, l-Diversity va Differential Privacy", en: "B3.1. Anonymization & Differential Privacy" },
        bodyHtml: {
          uz: "<p>Latanya Sweeney ZIP + Tug'ilgan sana + Jins orqali 87% aholini aniqlash mumkinligini ko'rsatdi. <strong>GDPR</strong> foydalanuvchiga <em>\"unutilish huquqi\"</em>ni beradi. <strong>k-Anonymity</strong> har QI guruhida kamida $k$ ta yozuv saqlaydi, <strong>l-Diversity</strong> esa homogenlik hujumini to'sish uchun kamida $l$ ta turli sezgir qiymat talab qiladi. <strong>Differential Privacy</strong> $\\Delta f / \\varepsilon$ masshtabli Laplace shovqini qo'shadi.</p>",
          en: "<p><strong>k-Anonymity</strong> groups ≥k identical QIs; <strong>l-Diversity</strong> prevents homogeneity attacks with ≥l distinct sensitive values; <strong>Differential Privacy</strong> adds $\\text{Lap}(\\Delta f/\\varepsilon)$ noise.</p>"
        },
        widget: 'privacy-sim'
      }
    ],
    slides: [
      { title: { uz: "B3: Maxfiylikni saqlash", en: "B3: Privacy-Preserving Data Mining" }, subtitle: { uz: "Qo'shimcha Bob · GDPR & Differential Privacy", en: "Bonus Chapter · Privacy Guarantees" }, points: { uz: ["Re-identification xavfi (Sweeney 87%, Netflix)", "k-Anonymity va Homogenlik hujumi", "l-Diversity va Differential Privacy (ε byudjeti)"], en: ["Re-identification risks", "k-Anonymity & l-Diversity", "Differential Privacy (ε budget)"] } },
      { title: { uz: "Interaktiv Differential Privacy (ε) Slayderi", en: "Interactive Differential Privacy Slider" }, widget: 'privacy-sim' }
    ],
    lab: {
      title: { uz: "Bonus Lab B3: k-Anonymity va Laplace Shovqini", en: "Bonus Lab B3: k-Anonymity & Laplace DP" },
      objective: { uz: "Yosh va Shahar umumlashtirish orqali min k ni tekshirish va Laplace mexanizmini sinash.", en: "Check group size k after generalization and evaluate Laplace noise." },
      steps: [{
        title: { uz: "Differential Privacy ε Tajribasi", en: "Laplace Noise vs ε" },
        desc: { uz: "epsilon = 0.2, 1.0, 5.0 uchun shovqin xatosini o'lchang.", en: "Measure mean absolute error across ε." },
        code: `import numpy as np
np.random.seed(42)
true_cnt = 50
for eps in [0.2, 1.0, 5.0]:
    err = np.mean([abs(np.random.laplace(0, 1.0/eps)) for _ in range(500)])
    print(f"eps={eps} -> Mean Noise Error = {err:.2f}")`
      }]
    },
    glossary: [
      { uz: "k-Anonymity", en: "k-Anonymity", defUz: "Har guruhda kamida k ta farqlanmas yozuv", defEn: "≥ k indistinguishable records per QI group" },
      { uz: "Differential Privacy", en: "Differential Privacy", defUz: "ε byudjeti bilan boshqariluvchi matematik maxfiylik", defEn: "Formal ε-bounded privacy via calibrated noise" }
    ],
    quiz: [
      { q: { uz: "Differential Privacy da ε (epsilon) kichik bo'lsa nima kuchayadi?", en: "What strengthens when ε is small in Differential Privacy?" }, options: [{ label: 'A', uz: "Maxfiylik (Privacy) kuchayadi, shovqin ortadi", en: "Privacy strengthens and noise increases" }, { label: 'B', uz: "Aniqlik oshadi", en: "Accuracy rises" }, { label: 'C', uz: "Shovqin yo'q", en: "Zero noise" }, { label: 'D', uz: "Overfitting", en: "Overfitting" }], answer: 'A', explanation: { uz: "Shovqin Δf/ε ga teng: kichik ε → katta shovqin → kuchli maxfiylik.", en: "Smaller ε increases noise Δf/ε and strengthens privacy." } },
      { q: { uz: "l-Diversity k-Anonymity ning qaysi hujumini yopadi?", en: "Which attack does l-Diversity prevent?" }, options: [{ label: 'A', uz: "Homogenlik hujumi", en: "Homogeneity attack" }, { label: 'B', uz: "SQL injection", en: "SQL injection" }, { label: 'C', uz: "Masking", en: "Masking" }, { label: 'D', uz: "Chaining", en: "Chaining" }], answer: 'A', explanation: { uz: "Barcha k yozuvda bir xil kasallik bo'lishini taqiqlaydi.", en: "Ensures diverse sensitive values inside each class." } }
    ],
    matching: [
      { left: { uz: "k-Anonymity", en: "k-Anonymity" }, right: { uz: "Kamida k ta bir xil quasi-identifier", en: "At least k identical QIs" } },
      { left: { uz: "l-Diversity", en: "l-Diversity" }, right: { uz: "Kamida l ta turli sezgir qiymat", en: "At least l distinct sensitive values" } },
      { left: { uz: "Differential Privacy", en: "Differential Privacy" }, right: { uz: "ε byudjetli Laplace shovqini", en: "Laplace noise scaled by ε" } }
    ],
    fillGap: [
      { text: { uz: "GDPR foydalanuvchiga o'z ma'lumotlarini o'chirtirish — ___ huquqini beradi.", en: "GDPR grants users the Right to be ___." }, answer: ["unutilish", "Forgotten"] }
    ]
  },

  // ==================== B4: CAPSTONE & INDEPENDENT STUDY GUIDE ====================
  {
    id: 19,
    code: 'B4',
    isBonus: true,
    slug: 'b4-capstone-guide',
    hours: 0,
    labs: 0,
    keywords: ['Capstone', 'Mustaqil talim', 'Pipeline', 'Data Leakage', 'HEMIS'],
    title: {
      uz: "Bonus B4: Mustaqil ta'lim (1–11) va Yakuniy loyiha shabloni",
      en: "Bonus B4: Independent Study (1–11) & Capstone Pipeline"
    },
    description: {
      uz: "11 ta mustaqil ta'lim loyihasi (104 soat) uchun End-to-End leak-free Python Pipeline shabloni va Error Analysis qo'llanmasi.",
      en: "End-to-end leak-free Python Pipeline template for all 11 Independent Study projects (104 hrs)."
    },
    sections: [
      {
        heading: { uz: "B4.1. Mustaqil Ta'lim Loyihalari Uchun 4 ta Oltin Qoida", en: "B4.1. Four Golden Rules for Independent Projects" },
        bodyHtml: {
          uz: "<p>O'quv dasturidagi <strong>11 ta Mustaqil ta'lim topshirig'ini</strong> (RFM, Recommender, Fraud, Medical, Sentiment, Demand Forecasting, HR Churn, Real Estate, Student Performance, Dashboard, LDA) bajarishda: (1) Avval Baseline model oling; (2) <code>train_test_split(..., stratify=y)</code> dan keyin <code>Pipeline</code> ishlating (Data Leakage = 0!); (3) <code>random_state=42</code> qo'ying; (4) Xato misollarini (Error Analysis) tahlil qiling.</p>",
          en: "<p>For the <strong>11 Independent Projects</strong>: (1) Start with a Baseline; (2) Split first with <code>stratify=y</code> and wrap transforms in <code>Pipeline</code>; (3) Fix <code>random_state=42</code>; (4) Inspect misclassified cases.</p>"
        },
        widget: 'capstone-sim'
      }
    ],
    slides: [
      { title: { uz: "B4: Mustaqil Ta'lim va Yakuniy Loyiha Shablon", en: "B4: Capstone & Independent Study Guide" }, subtitle: { uz: "Qo'shimcha Bob · 11 ta Mustaqil Ta'lim Topshirig'i (104 soat)", en: "Bonus Chapter · 11 Projects (104 hrs)" }, points: { uz: ["1–3-topshiriqlar: Guruhda hamkorlikda (RFM, Recommender, Fraud)", "4–11-topshiriqlar: Individual loyihalar", "Leak-Free Pipeline + Stratified CV + Error Analysis"], en: ["Projects 1–3: Cooperative group projects", "Projects 4–11: Individual ML/DM tracks", "Leak-Free Pipeline + Error Analysis"] } },
      { title: { uz: "Model Benchmarking Natijalari", en: "Capstone Model Benchmark" }, widget: 'capstone-sim' }
    ],
    lab: {
      title: { uz: "Bonus Lab B4: Leak-Free End-to-End Sklearn Pipeline", en: "Bonus Lab B4: End-to-End Leak-Free Pipeline" },
      objective: { uz: "Mustaqil ta'lim loyihalarida qo'llash uchun tayyor 5-modelli benchmark konveyeri.", en: "Reusable 5-model Stratified CV template for Independent Study projects." },
      steps: [{
        title: { uz: "Pipeline + Stratified CV Benchmark", en: "Run 5-Model Leak-Free Benchmark" },
        desc: { uz: "Impute + Scale + Model zanjirini Stratified CV da solishtiring.", en: "Compare 5 models safely inside make_pipeline." },
        code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier

X, y = load_breast_cancer(return_X_y=True)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)
for name, m in [('LogReg', LogisticRegression(max_iter=1000)), ('RF', RandomForestClassifier(100, random_state=42)), ('GB', GradientBoostingClassifier(100, random_state=42))]:
    pipe = make_pipeline(StandardScaler(), m)
    print(name, "CV:", round(cross_val_score(pipe, X_tr, y_tr, cv=5, scoring='f1').mean(), 3))`
      }]
    },
    glossary: [
      { uz: "Data Leakage", en: "Data Leakage", defUz: "Test ma'lumotining o'qitish/scaling ga sizib kirishi", defEn: "Test info leaking into training" },
      { uz: "Baseline", en: "Baseline", defUz: "Taqqoslash uchun olingan sodda boshlang'ich model", defEn: "Simple benchmark floor model" }
    ],
    quiz: [
      { q: { uz: "Data Leakage ning oldini olishning eng ishonchli usuli qaysi?", en: "What is the safest way to prevent Data Leakage?" }, options: [{ label: 'A', uz: "Avval train_test_split qilib, scaler ni Pipeline ichida qo'llash", en: "Split first and wrap transforms inside Pipeline" }, { label: 'B', uz: "Butun X ni scaling qilish", en: "Scale full X first" }, { label: 'C', uz: "random_state o'chirish", en: "Drop seed" }, { label: 'D', uz: "Testni o'chirish", en: "Drop test" }], answer: 'A', explanation: { uz: "Pipeline faqat o'quv qatlamida fit qiladi.", en: "Pipeline fits preprocessing strictly on training folds." } }
    ],
    matching: [
      { left: { uz: "stratify=y", en: "stratify=y" }, right: { uz: "Train/Test da sinf nisbatini saqlaydi", en: "Preserves class balance" } },
      { left: { uz: "Pipeline", en: "Pipeline" }, right: { uz: "Data Leakage ni oldini oladi", en: "Prevents Data Leakage" } }
    ],
    fillGap: [
      { text: { uz: "Natijalarni qayta takrorlanuvchan qilish uchun barcha modellarga ___ = 42 beriladi.", en: "To ensure reproducibility, set ___ = 42 across splits and models." }, answer: "random_state" }
    ]
  }
);
