window.DM_PRACTICE = [
  {
    id: 'p1',
    topicId: 1,
    difficulty: 'easy',
    type: { uz: 'Konseptual', en: 'Conceptual' },
    title: {
      uz: "CRISP-DM bosqichlarini real loyiha misolida loyihalash",
      en: "Map CRISP-DM Phases to a Bank Churn Prediction Project"
    },
    question: {
      uz: "Bank mijozlari boshqa bankka o'tib ketishini (churn) oldindan aniqlash loyihasi uchun CRISP-DM ning 6 bosqichini qisqacha yozib chiqing: har bosqichda aniq nima qilinadi?",
      en: "Outline what specific actions take place in each of the 6 CRISP-DM phases for a telecom/bank customer churn prediction project."
    },
    hint: {
      uz: "Biznesni tushunish → Ma'lumotni tushunish → Tayyorlash → Modellash → Baholash → Joriy etish ketma-ketligini saqlang.",
      en: "Follow: Business Understanding → Data Understanding → Data Preparation → Modeling → Evaluation → Deployment."
    },
    solution: {
      uz: "<ol><li><strong>Biznesni tushunish:</strong> Maqsad — 30 kun ichida ketishi mumkin bo'lgan mijozlarni aniqlab, saqlab qolish xarajatini kamaytirish.</li><li><strong>Ma'lumotni tushunish:</strong> Mijoz yoshi, tranzaksiya soni, qo'llab-quvvatlash murojaatlarini EDA qilish.</li><li><strong>Tayyorlash:</strong> NaN larni to'ldirish, One-Hot Encoding, so'nggi 3 oylik faollik xususiyatlarini yaratish.</li><li><strong>Modellash:</strong> Logistic Regression, Random Forest, Gradient Boosting o'qitish.</li><li><strong>Baholash:</strong> Recall va ROC-AUC orqali tekshirish (ketadigan mijozni o'tkazib yubormaslik muhim).</li><li><strong>Joriy etish:</strong> CRM tizimiga har hafta xavfli mijozlar ro'yxatini uzatish.</li></ol>",
      en: "<ol><li><strong>Business Understanding:</strong> Define churn window (e.g., 30 days) and retention ROI target.</li><li><strong>Data Understanding:</strong> Explore demographics, transaction frequency, and support tickets (EDA).</li><li><strong>Data Preparation:</strong> Impute missing values, encode categories, engineer recency/frequency features.</li><li><strong>Modeling:</strong> Train Decision Tree, Random Forest, and XGBoost classifiers.</li><li><strong>Evaluation:</strong> Measure Recall and ROC-AUC (missing a churner is costly).</li><li><strong>Deployment:</strong> Schedule weekly batch scoring into the CRM retention workflow.</li></ol>"
    }
  },
  {
    id: 'p2',
    topicId: 2,
    difficulty: 'easy',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "Min-Max va Z-score normallashtirishni qo'lda hisoblash",
      en: "Compute Min-Max & Z-Score Normalization by Hand"
    },
    question: {
      uz: "Talabalar baholari to'plami berilgan: <code>X = [40, 60, 80, 100]</code>. Ushbu to'plamdagi <code>x = 60</code> qiymati uchun:<br>1) Min-Max normallashtirilgan qiymatni toping.<br>2) Z-score standartlashtirilgan qiymatni toping (aholi standart og'ishi σ ≈ 22.36).",
      en: "Given dataset <code>X = [40, 60, 80, 100]</code>, compute for <code>x = 60</code>:<br>1) Min-Max normalized value.<br>2) Z-score standardized value (population std σ ≈ 22.36)."
    },
    hint: {
      uz: "Min-Max = (x - min)/(max - min). Z-score uchun avval o'rtacha μ = (40+60+80+100)/4 = 70 ni toping.",
      en: "Min-Max = (x - min)/(max - min). For Z-score, first compute mean μ = 70."
    },
    solution: {
      uz: "<p><strong>1) Min-Max:</strong> min = 40, max = 100<br><code>x' = (60 - 40) / (100 - 40) = 20 / 60 = 0.333</code></p><p><strong>2) Z-score:</strong> μ = 70, σ = √[((40-70)² + (60-70)² + (80-70)² + (100-70)²)/4] = √500 ≈ 22.36<br><code>z = (60 - 70) / 22.36 ≈ -0.447</code></p>",
      en: "<p><strong>1) Min-Max:</strong> min = 40, max = 100<br><code>x' = (60 - 40) / (100 - 40) = 20 / 60 = 0.333</code></p><p><strong>2) Z-score:</strong> μ = 70, σ = √500 ≈ 22.36<br><code>z = (60 - 70) / 22.36 ≈ -0.447</code></p>"
    }
  },
  {
    id: 'p3',
    topicId: 2,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "IQR usuli yordamida outlierlarni aniqlash",
      en: "Detect Outliers Using the IQR Rule"
    },
    question: {
      uz: "Maoshlar (mln so'm): <code>[3.2, 3.5, 4.0, 4.1, 4.5, 5.0, 5.2, 18.0]</code>. Agar Q1 = 3.75 va Q3 = 5.10 bo'lsa, <code>18.0</code> qiymati outlier hisoblanadimi?",
      en: "Salaries: <code>[3.2, 3.5, 4.0, 4.1, 4.5, 5.0, 5.2, 18.0]</code>. Given Q1 = 3.75 and Q3 = 5.10, verify mathematically whether <code>18.0</code> is an outlier."
    },
    hint: {
      uz: "IQR = Q3 - Q1 va yuqori chegara = Q3 + 1.5 × IQR.",
      en: "Compute IQR = Q3 - Q1 and upper fence = Q3 + 1.5 × IQR."
    },
    solution: {
      uz: "<p><code>IQR = 5.10 - 3.75 = 1.35</code><br>Pastki chegara: <code>3.75 - 1.5 × 1.35 = 1.725</code><br>Yuqori chegara: <code>5.10 + 1.5 × 1.35 = 7.125</code><br><code>18.0 &gt; 7.125</code> bo'lgani uchun <strong>18.0 aniq outlier</strong>.</p>",
      en: "<p><code>IQR = 5.10 - 3.75 = 1.35</code><br>Lower fence: <code>3.75 - 1.5 × 1.35 = 1.725</code><br>Upper fence: <code>5.10 + 1.5 × 1.35 = 7.125</code><br>Since <code>18.0 &gt; 7.125</code>, <strong>18.0 is a statistical outlier</strong>.</p>"
    }
  },
  {
    id: 'p4',
    topicId: 3,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "Entropiya, Information Gain va Gini indeksini hisoblash",
      en: "Compute Entropy, Information Gain & Gini Impurity"
    },
    question: {
      uz: "10 ta mijozdan 6 tasi kreditni qaytardi (Ha), 4 tasi qaytarmadi (Yo'q).<br>1) Boshlang'ich Entropiya H(S) va Gini(S) ni hisoblang.<br>2) \"Daromad = Yuqori\" bo'linishi chap shoxda (4 Ha, 0 Yo'q) va o'ng shoxda (2 Ha, 4 Yo'q) bersa, Information Gain qancha?",
      en: "Out of 10 loan applicants, 6 repaid (Yes) and 4 defaulted (No).<br>1) Compute root Entropy H(S) and Gini(S).<br>2) Splitting on 'Income=High' produces Left=(4 Yes, 0 No) and Right=(2 Yes, 4 No). Compute Information Gain."
    },
    hint: {
      uz: "H(6/10, 4/10) = -(0.6·log2(0.6) + 0.4·log2(0.4)) ≈ 0.971. Chap shox sof: H(Left) = 0.",
      en: "H(0.6, 0.4) ≈ 0.971. Notice Left branch is completely pure so H(Left) = 0."
    },
    solution: {
      uz: "<p><strong>1) Ildiz:</strong><br><code>H(S) = -(0.6·log₂(0.6) + 0.4·log₂(0.4)) ≈ 0.971</code><br><code>Gini(S) = 1 - (0.6² + 0.4²) = 1 - (0.36 + 0.16) = 0.48</code></p><p><strong>2) Ajralish:</strong><br><code>H(Left) = 0</code> (4/4 sof)<br><code>H(Right) = -(2/6·log₂(2/6) + 4/6·log₂(4/6)) ≈ 0.918</code><br><code>IG = 0.971 - [0.4·0 + 0.6·0.918] = 0.971 - 0.551 = 0.420</code></p>",
      en: "<p><strong>1) Root:</strong><br><code>H(S) = -(0.6·log₂(0.6) + 0.4·log₂(0.4)) ≈ 0.971</code><br><code>Gini(S) = 1 - (0.6² + 0.4²) = 0.48</code></p><p><strong>2) Split:</strong><br><code>H(Left) = 0</code> (pure)<br><code>H(Right) = -(1/3·log₂(1/3) + 2/3·log₂(2/3)) ≈ 0.918</code><br><code>IG = 0.971 - (0.4×0 + 0.6×0.918) = 0.420</code></p>"
    }
  },
  {
    id: 'p5',
    topicId: 4,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "k-NN da Evklid va Manhattan masofalari bilan tasniflash",
      en: "Classify a Query Point with k-NN (k=3)"
    },
    question: {
      uz: "O'quv nuqtalari: A(1,2)=Sinf 0, B(2,3)=Sinf 0, C(5,4)=Sinf 1, D(6,5)=Sinf 1. Yangi nuqta P(3,3) k=3 bilan Evklid masofasida qaysi sinfga tushadi?",
      en: "Training points: A(1,2)=Class 0, B(2,3)=Class 0, C(5,4)=Class 1, D(6,5)=Class 1. Predict the class of P(3,3) using k=3 Euclidean k-NN."
    },
    hint: {
      uz: "Har bir nuqtadan (3,3) gacha √((x1-3)² + (x2-3)²) ni hisoblang va eng kichik 3 tasini tanlang.",
      en: "Compute √((x1-3)² + (x2-3)²) to each point and take majority vote of the 3 closest."
    },
    solution: {
      uz: "<p>d(P,A) = √((1-3)²+(2-3)²) = √5 ≈ <strong>2.24</strong> (Sinf 0)<br>d(P,B) = √((2-3)²+(3-3)²) = <strong>1.00</strong> (Sinf 0)<br>d(P,C) = √((5-3)²+(4-3)²) = √5 ≈ <strong>2.24</strong> (Sinf 1)<br>d(P,D) = √((6-3)²+(5-3)²) = √13 ≈ 3.61 (Sinf 1)<br>Eng yaqin 3 ta: B(0), A(0), C(1) → ko'pchilik ovozi = <strong>Sinf 0</strong>.</p>",
      en: "<p>d(P,A) = √5 ≈ <strong>2.24</strong> (Class 0)<br>d(P,B) = <strong>1.00</strong> (Class 0)<br>d(P,C) = √5 ≈ <strong>2.24</strong> (Class 1)<br>d(P,D) = √13 ≈ 3.61 (Class 1)<br>3 nearest neighbors: B(0), A(0), C(1) → Majority vote = <strong>Class 0</strong>.</p>"
    }
  },
  {
    id: 'p6',
    topicId: 5,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "Confusion Matrixdan Precision, Recall va F1-score topish",
      en: "Calculate Accuracy, Precision, Recall & F1 from Confusion Matrix"
    },
    question: {
      uz: "Kredit firibgarligini aniqlash modelida: <code>TP = 40, FP = 10, FN = 20, TN = 930</code>. Accuracy, Precision, Recall va F1-score ni hisoblang.",
      en: "A fraud detector yields: <code>TP = 40, FP = 10, FN = 20, TN = 930</code>. Compute Accuracy, Precision, Recall, and F1-score."
    },
    hint: {
      uz: "Jami N = 1000. Precision = TP/(TP+FP), Recall = TP/(TP+FN).",
      en: "Total N = 1000. Precision = TP/(TP+FP), Recall = TP/(TP+FN)."
    },
    solution: {
      uz: "<p><code>Accuracy = (40 + 930) / 1000 = 0.97 (97%)</code><br><code>Precision = 40 / (40 + 10) = 40 / 50 = 0.80 (80%)</code><br><code>Recall = 40 / (40 + 20) = 40 / 60 ≈ 0.667 (66.7%)</code><br><code>F1 = 2 × (0.80 × 0.667) / (0.80 + 0.667) ≈ 0.727 (72.7%)</code></p>",
      en: "<p><code>Accuracy = (40 + 930) / 1000 = 0.97 (97%)</code><br><code>Precision = 40 / (40 + 10) = 0.80 (80%)</code><br><code>Recall = 40 / (40 + 20) ≈ 0.667 (66.7%)</code><br><code>F1 = 2 × (0.80 × 0.667) / (0.80 + 0.667) ≈ 0.727 (72.7%)</code></p>"
    }
  },
  {
    id: 'p7',
    topicId: 6,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "Savat tahlilida Support, Confidence va Lift hisoblash",
      en: "Compute Support, Confidence & Lift for Market Basket Rules"
    },
    question: {
      uz: "1000 ta chekdan: 400 tasida <strong>Choy</strong>, 300 tasida <strong>Shakar</strong>, 240 tasida esa <strong>Choy va Shakar</strong> birga bor. <code>{Choy} → {Shakar}</code> qoidasining Support, Confidence va Lift qiymatlarini toping.",
      en: "Among 1000 receipts: 400 contain <strong>Tea</strong>, 300 contain <strong>Sugar</strong>, and 240 contain <strong>both Tea & Sugar</strong>. Find Support, Confidence, and Lift for <code>{Tea} → {Sugar}</code>."
    },
    hint: {
      uz: "Lift = Confidence(Choy→Shakar) / Support(Shakar).",
      en: "Lift = Confidence(Tea→Sugar) / Support(Sugar)."
    },
    solution: {
      uz: "<p><code>Support(Choy, Shakar) = 240 / 1000 = 0.24 (24%)</code><br><code>Confidence(Choy → Shakar) = 0.24 / 0.40 = 0.60 (60%)</code><br><code>Support(Shakar) = 300 / 1000 = 0.30</code><br><code>Lift = 0.60 / 0.30 = 2.0</code> (Lift &gt; 1 → juda kuchli ijobiy bog'liqlik!)</p>",
      en: "<p><code>Support(Tea, Sugar) = 240 / 1000 = 0.24 (24%)</code><br><code>Confidence(Tea → Sugar) = 0.24 / 0.40 = 0.60 (60%)</code><br><code>Support(Sugar) = 0.30</code><br><code>Lift = 0.60 / 0.30 = 2.0</code> (Strong positive association!)</p>"
    }
  },
  {
    id: 'p8',
    topicId: 7,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "K-Means algoritmining 1 ta iteratsiyasini qo'lda bajarish",
      en: "Trace One Full Iteration of K-Means (1D)"
    },
    question: {
      uz: "Nuqtalar: <code>[2, 4, 10, 12, 3, 20, 30, 11, 25]</code>. K=2 va boshlang'ich markazlar <code>m1 = 3</code>, <code>m2 = 20</code>. Birinchi iteratsiyadan keyingi yangi markazlarni toping.",
      en: "Points: <code>[2, 4, 10, 12, 3, 20, 30, 11, 25]</code>. With K=2 and initial centroids <code>m1 = 3</code>, <code>m2 = 20</code>, find the updated centroids after 1 iteration."
    },
    hint: {
      uz: "O'rta nuqta (3 + 20)/2 = 11.5: 11.5 dan kichiklar m1 ga, kattalar m2 ga tushadi.",
      en: "Midpoint is (3 + 20)/2 = 11.5: points < 11.5 join C1; points > 11.5 join C2."
    },
    solution: {
      uz: "<p>C1 (m1=3 ga yaqin): <code>[2, 4, 10, 3, 11]</code> → yangi <code>m1 = (2+4+10+3+11)/5 = 6.0</code><br>C2 (m2=20 ga yaqin): <code>[12, 20, 30, 25]</code> → yangi <code>m2 = (12+20+30+25)/4 = 21.75</code></p>",
      en: "<p>C1 (closer to 3): <code>[2, 4, 10, 3, 11]</code> → new <code>m1 = 30 / 5 = 6.0</code><br>C2 (closer to 20): <code>[12, 20, 30, 25]</code> → new <code>m2 = 87 / 4 = 21.75</code></p>"
    }
  },
  {
    id: 'p9',
    topicId: 8,
    difficulty: 'medium',
    type: { uz: 'Konseptual', en: 'Conceptual' },
    title: {
      uz: "K-Means vs DBSCAN vs Hierarchical tanlash",
      en: "Choosing Between K-Means, DBSCAN & Hierarchical Clustering"
    },
    question: {
      uz: "GPS koordinatalar bo'yicha shahardagi tirbandlik va yo'l bo'ylab cho'zilgan avariya nuqtalarini (ba'zi nuqtalar yolg'iz shovqin) klasterlash uchun qaysi algoritm eng mos va nima uchun?",
      en: "To cluster elongated urban traffic accident hotspots from GPS logs containing isolated noise points, which clustering algorithm is best suited and why?"
    },
    hint: {
      uz: "Ko'chalar bo'ylab cho'zilgan shakl (sferik emas) va shovqin mavjudligini hisobga oling.",
      en: "Think about non-spherical road shapes and isolated outlier coordinates."
    },
    solution: {
      uz: "<p><strong>DBSCAN</strong> eng mos tanlov: 1) ko'cha bo'ylab cho'zilgan ixtiyoriy shakldagi zich hududlarni topa oladi (K-Means faqat sferik klaster qiladi); 2) klasterlar soni K ni oldindan bilish shart emas; 3) yakka tasodifiy nuqtalarni <code>Noise (-1)</code> deb ajratadi.</p>",
      en: "<p><strong>DBSCAN</strong> is ideal: 1) it discovers arbitrarily shaped, elongated street clusters unlike spherical K-Means; 2) no need to pre-specify K; 3) isolated random incidents are cleanly flagged as <code>Noise (-1)</code>.</p>"
    }
  },
  {
    id: 'p10',
    topicId: 10,
    difficulty: 'hard',
    type: { uz: 'Kodlash', en: 'Python Lab' },
    title: {
      uz: "Data Leakage siz Sklearn Pipeline tuzish",
      en: "Build a Leak-Free Scikit-Learn Pipeline"
    },
    question: {
      uz: "k-NN yoki Random Forest bilan 5-katlamli Cross-Validation o'tkazishda <code>StandardScaler</code> dan foydalanishda Data Leakage ga yo'l qo'ymaslik uchun Python kodini yozing.",
      en: "Write a Python snippet using <code>sklearn.pipeline.Pipeline</code> with <code>StandardScaler</code> and <code>KNeighborsClassifier</code> inside 5-fold CV so zero test-fold data leaks."
    },
    hint: {
      uz: "<code>make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))</code> dan foydalaning.",
      en: "Use <code>make_pipeline(StandardScaler(), KNeighborsClassifier(...))</code> passed directly to <code>cross_val_score</code>."
    },
    solution: {
      uz: "<pre>from sklearn.datasets import load_wine\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import cross_val_score\n\nX, y = load_wine(return_X_y=True)\npipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))\nscores = cross_val_score(pipe, X, y, cv=5)\nprint('Leak-free CV:', scores.mean().round(3))</pre>",
      en: "<pre>from sklearn.datasets import load_wine\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import cross_val_score\n\nX, y = load_wine(return_X_y=True)\npipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))\nscores = cross_val_score(pipe, X, y, cv=5)\nprint('Leak-free CV:', scores.mean().round(3))</pre>"
    }
  },
  {
    id: 'p11',
    topicId: 11,
    difficulty: 'medium',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "TF-IDF qiymatini qo'lda hisoblash",
      en: "Compute TF-IDF Weight Manually"
    },
    question: {
      uz: "Korpusda jami <code>N = 100</code> ta hujjat bor. <code>\"algoritm\"</code> so'zi jami <code>10</code> ta hujjatda uchraydi. 50 ta so'zdan iborat 1-hujjatda <code>\"algoritm\"</code> so'zi <code>3</code> marta kelgan. TF-IDF qiymatini toping (log10 asosida).",
      en: "In a corpus of <code>N = 100</code> documents, the word <code>\"algorithm\"</code> appears in <code>10</code> documents. In Document 1 (50 words total), it appears <code>3</code> times. Compute TF-IDF using log10."
    },
    hint: {
      uz: "TF = 3/50 = 0.06, IDF = log10(100/10) = log10(10) = 1.",
      en: "TF = 3/50 = 0.06, IDF = log10(100/10) = 1."
    },
    solution: {
      uz: "<p><code>TF = 3 / 50 = 0.06</code><br><code>IDF = log₁₀(100 / 10) = log₁₀(10) = 1.0</code><br><code>TF-IDF = 0.06 × 1.0 = 0.06</code></p>",
      en: "<p><code>TF = 3 / 50 = 0.06</code><br><code>IDF = log₁₀(100 / 10) = log₁₀(10) = 1.0</code><br><code>TF-IDF = 0.06 × 1.0 = 0.06</code></p>"
    }
  },
  {
    id: 'p12',
    topicId: 12,
    difficulty: 'hard',
    type: { uz: 'Hisoblash', en: 'Numerical' },
    title: {
      uz: "PageRank bir qadamli yangilanishini hisoblash",
      en: "Compute One Step of PageRank"
    },
    question: {
      uz: "3 ta sahifa (N=3, d=0.85): boshlang'ich PageRank hammasi uchun <code>1/3 ≈ 0.333</code>. A sahifaga B (2 ta chiquvchi havolasi bor) va C (1 ta chiquvchi havolasi bor) dan havola keladi. PR(A) ning yangi qiymatini hisoblang.",
      en: "With N=3 pages and d=0.85, all start at <code>PR = 1/3</code>. Page A receives links from B (out-degree 2) and C (out-degree 1). Compute the updated PR(A)."
    },
    hint: {
      uz: "PR(A) = (1 - 0.85)/3 + 0.85 × (PR(B)/2 + PR(C)/1).",
      en: "PR(A) = (1 - 0.85)/3 + 0.85 × (PR(B)/2 + PR(C)/1)."
    },
    solution: {
      uz: "<p><code>(1 - 0.85)/3 = 0.15/3 = 0.05</code><br><code>PR(B)/2 + PR(C)/1 = (1/3)/2 + (1/3)/1 = 1/6 + 1/3 = 0.5</code><br><code>PR(A) = 0.05 + 0.85 × 0.5 = 0.05 + 0.425 = 0.475</code></p>",
      en: "<p><code>(1 - 0.85)/3 = 0.05</code><br><code>PR(B)/2 + PR(C)/1 = (1/3)/2 + (1/3)/1 = 0.5</code><br><code>PR(A) = 0.05 + 0.85 × 0.5 = 0.475</code></p>"
    }
  },
  {
    id: 'p13',
    topicId: 14,
    difficulty: 'medium',
    type: { uz: 'Konseptual', en: 'Conceptual' },
    title: {
      uz: "k-Anonymity jadvalida Homogenlik hujumini tahlil qilish",
      en: "Analyze a Homogeneity Attack on a 3-Anonymous Table"
    },
    question: {
      uz: "Jadvalda [20-30 yosh, Erkak] guruhida 3 ta bemor bor va uchalasida ham kasallik = \"Diabet\". Bu jadval 3-Anonymity ni qanoatlantiradimi? U qanday xavfga ega va qaysi model uni tuzatadi?",
      en: "An equivalence class [Age 20–30, Male] contains 3 patients, and all 3 have Disease = 'Diabetes'. Does this satisfy 3-Anonymity? What attack breaks it and which model fixes it?"
    },
    hint: {
      uz: "k-Anonymity faqat quasi-identifierlarni sanaydi, sezgir ustun xilma-xilligini emas.",
      en: "k-Anonymity checks group size on quasi-identifiers, not diversity of the sensitive column."
    },
    solution: {
      uz: "<p>Ha, <strong>3-Anonymity</strong> bajariladi (3 ta bir xil quasi-identifier bor), ammo <strong>Homogenlik hujumi</strong>ga ochiq: agar Ali [20-30, Erkak] guruhida ekanini bilsak, uning kasalligi 100% Diabet ekanini bilib olamiz. Buni <strong>l-Diversity</strong> (kamida l ta turli sezgir qiymat) tuzatadi.</p>",
      en: "<p>Yes, it satisfies <strong>3-Anonymity</strong>, but fails against a <strong>Homogeneity Attack</strong>: knowing Ali falls in [20–30, Male] reveals his Diabetes diagnosis with 100% certainty. <strong>l-Diversity</strong> fixes this by requiring at least l distinct sensitive values per class.</p>"
    }
  },
  {
    id: 'p14',
    topicId: 13,
    difficulty: 'medium',
    type: { uz: 'Konseptual', en: 'Conceptual' },
    title: {
      uz: "Real-time firibgarlik tizimi uchun oqim arxitekturasi",
      en: "Designing a Stream Pipeline for Fraud Detection"
    },
    question: {
      uz: "Soniyasiga 50 000 ta bank tranzaksiyasi keladigan tizimda takroriy o'g'irlangan karta raqamlarini millisekundlarda tekshirish va oxirgi 10 daqiqalik sarfni kuzatish uchun qanday tuzilmalardan foydalanasiz?",
      en: "At 50,000 card transactions/sec, which stream structures would you combine to check blacklisted cards in RAM and track rolling 10-minute spend?"
    },
    hint: {
      uz: "Mavjudlik testi uchun ehtimoliy tuzilma + vaqtli oyna (Sliding Window) + Kafka/Flink.",
      en: "Combine a probabilistic membership filter + Time-based Sliding Window + Kafka/Flink."
    },
    solution: {
      uz: "<p>1) <strong>Apache Kafka</strong> oqimni qabul qiladi. 2) <strong>Bloom Filter</strong> qora ro'yxatdagi kartalarni O(1) da va minimal xotirada tekshiradi (shubhali chiqsa bazadan tasdiqlanadi). 3) <strong>Apache Flink</strong> da 10 daqiqalik <em>Time-based Sliding Window</em> har karta bo'yicha summani hisoblaydi.</p>",
      en: "<p>1) <strong>Apache Kafka</strong> buffers incoming events. 2) A <strong>Bloom Filter</strong> checks stolen cards in O(1) RAM (exact DB lookup only on positives). 3) <strong>Apache Flink</strong> computes rolling spend using a 10-minute <em>Time-based Sliding Window</em>.</p>"
    }
  }
];
