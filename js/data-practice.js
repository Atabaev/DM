// 7 Mandatory Practice Seminars (A1-A7) aligned 1-to-1 with MITQ2506 Syllabus + Worked Exercises
window.DM_PRACTICE = [
  {
    id: 'A1',
    code: 'A1',
    topicId: 1,
    hours: 2,
    difficulty: 'easy',
    type: { uz: 'A1 · Amaliy (2 soat)', en: 'A1 · Practice (2 hrs)' },
    title: {
      uz: "A1: Data Mining masalasini qo'yish, KDD bosqichlari va dastlabki tahlil",
      en: "A1: Framing Data Mining Tasks, KDD Stages & Initial Audit"
    },
    question: {
      uz: "<strong>A1 Seminar Topshirig'i:</strong> Bank mijozlari kreditni qaytarmaslik riskini aniqlash va mijozlarni segmentlash loyihasi uchun:<br>1) Qaysi masala Predictive (Classification/Regression) va qaysi biri Descriptive (Clustering/Association)?<br>2) KDD ning 7 bosqichi va CRISP-DM ning 6 bosqichida aniq qaysi ishlar bajariladi?<br>3) Datasetdagi ustunlarni Nominal, Ordinal, Interval, Ratio turlariga ajrating (<code>Shahar, Kredit_reytingi [A,B,C], Tug'ilgan_yil, Daromad_mln</code>).",
      en: "<strong>A1 Seminar Task:</strong> For a bank credit-risk & customer-segmentation project:<br>1) Classify which sub-tasks are Predictive vs Descriptive.<br>2) Map concrete deliverables across the 7 KDD stages and 6 CRISP-DM phases.<br>3) Categorize <code>City, Credit_Tier [A,B,C], Birth_Year, Income</code> into Nominal, Ordinal, Interval, Ratio."
    },
    hint: {
      uz: "Kreditni qaytarmaslik (Ha/Yo'q) = Classification; Mijozlarni guruhlash = Clustering. Tug'ilgan_yil — Interval (0 shartli); Daromad — Ratio.",
      en: "Default (Yes/No) = Classification; Segmenting = Clustering. Birth_Year = Interval; Income = Ratio."
    },
    solution: {
      uz: "<ol><li><strong>Masalalar:</strong> Kredit riski (Ha/Yo'q) → <em>Tasniflash (Predictive)</em>; Mijoz segmentatsiyasi → <em>Klasterlash (Descriptive)</em>; G'ayritabiiy tranzaksiya → <em>Anomaliya</em>.</li><li><strong>KDD 7 bosqich:</strong> To'plash → Tanlash → Tozalash (NaN/shovqin) → Transformatsiya (Scaling/One-Hot) → Data Mining (Daraxt/K-Means) → Baholash (ROC-AUC/Silhouette) → Taqdimot.</li><li><strong>Atribut turlari:</strong> <code>Shahar</code> = Nominal; <code>Kredit_reytingi</code> = Ordinal; <code>Tug'ilgan_yil</code> = Interval; <code>Daromad_mln</code> = Ratio.</li></ol>",
      en: "<ol><li><strong>Tasks:</strong> Default = Classification (Predictive); Segmentation = Clustering (Descriptive).</li><li><strong>KDD:</strong> Collect → Select → Clean → Transform → Mine → Evaluate → Present Insights.</li><li><strong>Scales:</strong> City=Nominal, Credit_Tier=Ordinal, Birth_Year=Interval, Income=Ratio.</li></ol>"
    }
  },
  {
    id: 'A2',
    code: 'A2',
    topicId: 3,
    hours: 2,
    difficulty: 'medium',
    type: { uz: 'A2 · Amaliy (2 soat)', en: 'A2 · Practice (2 hrs)' },
    title: {
      uz: "A2: Ma'lumotlarni tozalash, normallashtirish va tayyorlash usullarini tanlash",
      en: "A2: Choosing Data Cleaning, Imputation & Scaling Methods"
    },
    question: {
      uz: "<strong>A2 Seminar Topshirig'i:</strong> To'plam berilgan: <code>X = [40, 60, 80, 100, 320]</code>.<br>1) IQR usuli (Q1=50, Q3=200) yoki oddiy ko'rinishda 320 outlier ekanini tahlil qiling (yoki <code>X₀ = [40, 60, 80, 100]</code> da μ=70, σ=22.36 uchun <code>x=60</code> ga Min-Max va Z-score hisoblang).<br>2) Agar jadvalda <code>Yosh</code> [NaN], <code>Shahar</code> [NaN], va <code>Daromad</code> [outlierli NaN] bo'lsa, har biri uchun qaysi Imputer va Scaler tanlaysiz?",
      en: "<strong>A2 Seminar Task:</strong> Given <code>X₀ = [40, 60, 80, 100]</code> (μ=70, σ=22.36):<br>1) Compute Min-Max and Z-Score for <code>x = 60</code>.<br>2) Recommend the best Imputer & Scaler for: (a) symmetric Age, (b) Nominal City, (c) right-skewed Income with outliers."
    },
    hint: {
      uz: "Min-Max = (x - min)/(max - min). Z-score = (x - μ)/σ. Outlierli ustunda Median + RobustScaler eng xavfsiz.",
      en: "Min-Max = (60-40)/(100-40). Outlier-heavy columns need Median + RobustScaler."
    },
    solution: {
      uz: "<p><strong>1) Hisoblash (x=60):</strong><br><code>Min-Max = (60 - 40) / (100 - 40) = 20/60 = 0.333</code><br><code>Z-score = (60 - 70) / 22.36 = -0.447</code></p><p><strong>2) Usul tanlash:</strong> (a) Yosh → Mean/Median + StandardScaler; (b) Shahar → Mode + One-Hot Encoding; (c) Outlierli Daromad → Median Imputer + RobustScaler.</p>",
      en: "<p><strong>1) Scaling (x=60):</strong> Min-Max = <code>0.333</code>, Z-Score = <code>-0.447</code>.</p><p><strong>2) Methods:</strong> (a) Age → Mean/Median + StandardScaler; (b) City → Mode + One-Hot; (c) Skewed Income → Median + RobustScaler.</p>"
    }
  },
  {
    id: 'A3',
    code: 'A3',
    topicId: 6,
    hours: 2,
    difficulty: 'medium',
    type: { uz: 'A3 · Amaliy (2 soat)', en: 'A3 · Practice (2 hrs)' },
    title: {
      uz: "A3: Qaror daraxtini qo'lda qurish: Entropiya, Information Gain va Gini indeksi",
      en: "A3: Building Decision Trees by Hand (Entropy, IG & Gini)"
    },
    question: {
      uz: "<strong>A3 Seminar Topshirig'i:</strong> 10 ta mijozdan 6 tasi kreditni qaytardi (Ha), 4 tasi qaytarmadi (Yo'q).<br>1) Ildiz tugunning Entropiyasi H(S) va Gini(S) ini qo'lda hisoblang.<br>2) \"Daromad\" atributi bo'yicha ajratganda: Yuqori=(4 Ha, 0 Yo'q), Past=(2 Ha, 4 Yo'q). Information Gain IG(S, Daromad) va Weighted Gini ni hisoblang.<br>3) Agar \"Talaba_ID\" ustuni har mijozga alohida barg bersa, IG vs Gain Ratio qanday farq qiladi?",
      en: "<strong>A3 Seminar Task:</strong> Root node has 10 samples (6 Yes, 4 No).<br>1) Compute root Entropy H(S) and Gini(S).<br>2) Splitting on Income yields High=(4 Yes, 0 No) and Low=(2 Yes, 4 No). Compute Information Gain and Weighted Gini.<br>3) Explain how Gain Ratio fixes the Student_ID trap."
    },
    hint: {
      uz: "H(0.6, 0.4) = -(0.6·log2(0.6) + 0.4·log2(0.4)) ≈ 0.971. Yuqori shox sof: H=0, Gini=0.",
      en: "H(0.6, 0.4) ≈ 0.971; High branch is pure (H=0, Gini=0)."
    },
    solution: {
      uz: "<p><strong>1) Ildiz:</strong> <code>H(S) = 0.971 bit</code>, <code>Gini(S) = 1 - (0.6² + 0.4²) = 0.48</code>.<br><strong>2) Ajralish:</strong> <code>H(Yuqori)=0</code>, <code>H(Past)=-(2/6·log₂(2/6)+4/6·log₂(4/6))=0.918</code> → <code>IG = 0.971 - (0.4×0 + 0.6×0.918) = 0.420 bit</code>.<br><code>Gini(Past) = 1 - ((2/6)²+(4/6)²) = 0.444</code> → <code>Weighted Gini = 0.4×0 + 0.6×0.444 = 0.267</code>.<br><strong>3) Gain Ratio:</strong> Talaba_ID uchun SplitInfo = log₂(10) = 3.32 katta bo'lgani uchun Gain Ratio kichik chiqib uni tanlamaydi.</p>",
      en: "<p><strong>1) Root:</strong> H(S)=0.971, Gini(S)=0.48. <strong>2) Split:</strong> H(High)=0, H(Low)=0.918 → IG = 0.420 bits; Weighted Gini = 0.267. <strong>3) Gain Ratio:</strong> divides IG by large SplitInfo=log₂(10), rejecting IDs.</p>"
    }
  },
  {
    id: 'A4',
    code: 'A4',
    topicId: 7,
    hours: 2,
    difficulty: 'medium',
    type: { uz: 'A4 · Amaliy (2 soat)', en: 'A4 · Practice (2 hrs)' },
    title: {
      uz: "A4: Naive Bayes va k-NN algoritmlarini hisoblash misollarida taqqoslash",
      en: "A4: Comparing Naive Bayes & k-NN via Worked Calculations"
    },
    question: {
      uz: "<strong>A4 Seminar Topshirig'i:</strong><br>1) <strong>k-NN (k=3):</strong> O'quv nuqtalari A(1,2)=Sinf 0, B(2,3)=Sinf 0, C(5,4)=Sinf 1, D(6,5)=Sinf 1. Yangi nuqta P(3,3) ni Evklid masofasida tasniflang.<br>2) <strong>Naive Bayes:</strong> P(Spam)=0.3, P(Ham)=0.7. \"bepul\" so'zi Spamda 0.70, Hamda 0.10; \"yutuq\" Spamda 0.50, Hamda 0.10. Xat = \"bepul yutuq\" qaysi sinfga tushadi?",
      en: "<strong>A4 Seminar Task:</strong><br>1) <strong>k-NN (k=3):</strong> Points A(1,2)=0, B(2,3)=0, C(5,4)=1, D(6,5)=1. Classify P(3,3) using Euclidean distance.<br>2) <strong>Naive Bayes:</strong> P(Spam)=0.3, P(Ham)=0.7; P('free'|Spam)=0.7, P('free'|Ham)=0.1; P('win'|Spam)=0.5, P('win'|Ham)=0.1. Classify 'free win'."
    },
    hint: {
      uz: "d(P,B)=1.0, d(P,A)=√5≈2.24, d(P,C)=√5≈2.24. Naive Bayes da Prior × Likelihood ko'paytmalarini solishtiring.",
      en: "Distances from P(3,3): B=1.0, A=2.24, C=2.24. Multiply Prior × Likelihoods for Naive Bayes."
    },
    solution: {
      uz: "<p><strong>1) k-NN (k=3):</strong> Eng yaqin 3 ta qo'shni: B(0), A(0), C(1) → Ko'pchilik ovozi = <strong>Sinf 0</strong> (2 vs 1).<br><strong>2) Naive Bayes:</strong><br><code>Score(Spam) = 0.3 × 0.70 × 0.50 = 0.105</code><br><code>Score(Ham) = 0.7 × 0.10 × 0.10 = 0.007</code> → 0.105 &gt; 0.007 → <strong>Spam</strong>!</p>",
      en: "<p><strong>1) k-NN:</strong> 3 nearest are B(0), A(0), C(1) → <strong>Class 0</strong>.<br><strong>2) Naive Bayes:</strong> Spam=<code>0.105</code> vs Ham=<code>0.007</code> → <strong>Spam</strong>.</p>"
    }
  },
  {
    id: 'A5',
    code: 'A5',
    topicId: 8,
    hours: 2,
    difficulty: 'medium',
    type: { uz: 'A5 · Amaliy (2 soat)', en: 'A5 · Practice (2 hrs)' },
    title: {
      uz: "A5: Tasniflash natijalarini baholash (Confusion Matrix, P, R, F1, ROC-AUC)",
      en: "A5: Model Evaluation (Confusion Matrix, Precision, Recall, F1 & ROC-AUC)"
    },
    question: {
      uz: "<strong>A5 Seminar Topshirig'i:</strong> Bank firibgarligini aniqlash modelida 1000 ta tranzaksiya test qilindi: <code>TP = 40, FP = 10, FN = 20, TN = 930</code>.<br>1) Accuracy, Precision, Recall va F1-score ni hisoblang.<br>2) F2-score (β=2, Recall ga ko'proq vazn) qanday bo'ladi va nima uchun firibgarlikda Accuracy dan ko'ra Recall/PR-AUC muhim?",
      en: "<strong>A5 Seminar Task:</strong> A fraud model outputs <code>TP = 40, FP = 10, FN = 20, TN = 930</code>.<br>1) Calculate Accuracy, Precision, Recall, and F1-score.<br>2) Explain why Accuracy (97%) can mislead under class imbalance and why Recall/PR-AUC matter."
    },
    hint: {
      uz: "Precision = 40/(40+10), Recall = 40/(40+20), F1 = 2PR/(P+R).",
      en: "Precision = 40/50 = 0.80, Recall = 40/60 ≈ 0.667."
    },
    solution: {
      uz: "<p><code>Accuracy = (40 + 930) / 1000 = 0.970 (97%)</code><br><code>Precision = 40 / (40 + 10) = 0.800 (80%)</code><br><code>Recall = 40 / (40 + 20) ≈ 0.667 (66.7%)</code><br><code>F1 = 2 × (0.80 × 0.667) / (0.80 + 0.667) ≈ 0.727 (72.7%)</code><br>Firibgarlik ulushi 6% bo'lgani uchun har doim 'Normal' degan model ham 94% Accuracy oladi, lekin firibgarlikni tutmaydi — shuning uchun Recall va PR-AUC hal qiluvchi.</p>",
      en: "<p>Accuracy = <strong>97%</strong>, Precision = <strong>80%</strong>, Recall = <strong>66.7%</strong>, F1 = <strong>72.7%</strong>. Because fraud is rare (6%), Recall and PR-AUC measure true detection capability.</p>"
    }
  },
  {
    id: 'A6',
    code: 'A6',
    topicId: 9,
    hours: 2,
    difficulty: 'medium',
    type: { uz: 'A6 · Amaliy (2 soat)', en: 'A6 · Practice (2 hrs)' },
    title: {
      uz: "A6: Assotsiativ qoidalarni hisoblash (Support, Confidence, Lift & Apriori)",
      en: "A6: Computing Association Rules (Support, Confidence, Lift & Apriori)"
    },
    question: {
      uz: "<strong>A6 Seminar Topshirig'i:</strong><br>1) 1000 ta chekdan: 400 tasida <strong>Choy</strong>, 300 tasida <strong>Shakar</strong>, 240 tasida <strong>Choy va Shakar</strong> birga bor. <code>{Choy} → {Shakar}</code> qoidasi uchun Support, Confidence va Lift ni toping.<br>2) 5 ta chek berilgan: T1:{N,S,T}, T2:{N,S}, T3:{N,T}, T4:{S,T}, T5:{N,S,T}. <code>min_support = 60% (3 ta)</code> da Apriori bo'yicha L1, L2 va C3 ni chiqaring.",
      en: "<strong>A6 Seminar Task:</strong><br>1) Out of 1000 receipts: 400 Tea, 300 Sugar, 240 both. Compute Support, Confidence, and Lift for <code>{Tea} → {Sugar}</code>.<br>2) Trace Apriori L1, L2, C3 on 5 baskets T1:{B,M,E}, T2:{B,M}, T3:{B,E}, T4:{M,E}, T5:{B,M,E} with min_sup = 60% (3)."
    },
    hint: {
      uz: "Lift = Confidence(Choy→Shakar) / Support(Shakar). Apriori da {N,S,T} necha marta uchraydi?",
      en: "Lift = 0.60 / 0.30. Count how many baskets contain all 3 items {B,M,E}."
    },
    solution: {
      uz: "<p><strong>1) Metrikalar:</strong> <code>Sup = 240/1000 = 0.24</code>, <code>Conf = 240/400 = 0.60</code>, <code>Lift = 0.60 / 0.30 = 2.0</code> (kuchli ijobiy bog'liqlik!).<br><strong>2) Apriori:</strong> <code>L1: {N}:4, {S}:4, {T}:4</code> → <code>L2: {N,S}:3, {N,T}:3, {S,T}:3</code> → <code>C3: {N,S,T} = 2 < 3 (Prune!)</code>.</p>",
      en: "<p><strong>1) Metrics:</strong> Sup=0.24, Conf=0.60, Lift=2.0. <strong>2) Apriori:</strong> L1={B:4,M:4,E:4}, L2={BM:3,BE:3,ME:3}, C3={BME}=2 &lt; 3 (Pruned).</p>"
    }
  },
  {
    id: 'A7',
    code: 'A7',
    topicId: 11,
    hours: 2,
    difficulty: 'medium',
    type: { uz: 'A7 · Amaliy (2 soat)', en: 'A7 · Practice (2 hrs)' },
    title: {
      uz: "A7: Klasterlash (K-Means, DBSCAN) va Anomaliya aniqlash natijalarini tahlil qilish",
      en: "A7: Analyzing Clustering & Anomaly Detection Results"
    },
    question: {
      uz: "<strong>A7 Seminar Topshirig'i:</strong><br>1) <strong>K-Means (K=2):</strong> Nuqtalar <code>[2, 4, 10, 12, 3, 20, 30, 11, 25]</code>, boshlang'ich markazlar <code>m1=3, m2=20</code>. 1-iteratsiya oxiridagi yangi markazlarni toping.<br>2) <strong>Algoritm tanlash:</strong> Shahar bo'ylab cho'zilgan yo'l avariyalari (GPS) va yakka shovqin nuqtalari uchun K-Means, Ward yoki DBSCAN dan qaysi biri mos va nima uchun?<br>3) <strong>Anomaliya:</strong> Zich klaster yonida LOF=3.8 chiqqan nuqta nimani bildiradi?",
      en: "<strong>A7 Seminar Task:</strong><br>1) <strong>K-Means (K=2):</strong> Points <code>[2,4,10,12,3,20,30,11,25]</code> with initial centroids <code>m1=3, m2=20</code>. Compute centroids after 1 iteration.<br>2) Choose K-Means, Ward, or DBSCAN for elongated GPS street accidents with noise.<br>3) Interpret LOF = 3.8 near a dense cluster."
    },
    hint: {
      uz: "O'rta nuqta (3+20)/2 = 11.5. DBSCAN ixtiyoriy shaklni topadi va -1 shovqinni ajratadi.",
      en: "Midpoint = 11.5. DBSCAN handles elongated shapes and Noise (-1)."
    },
    solution: {
      uz: "<p><strong>1) K-Means:</strong> C1 (&lt;11.5): <code>[2,4,10,3,11] → m1 = 6.0</code>; C2 (&gt;11.5): <code>[12,20,30,25] → m2 = 21.75</code>.<br><strong>2) Tanlov:</strong> <strong>DBSCAN</strong> — chunki K oldindan shart emas, egri chiziqli zich hududlarni topadi va yakka nuqtalarni Noise (-1) deb ajratadi.<br><strong>3) LOF=3.8:</strong> Nuqtaning lokal zichligi qo'shnilarinikidan ~3.8 marta past, ya'ni aniq <strong>lokal anomaliya</strong>!</p>",
      en: "<p><strong>1) K-Means:</strong> m1 = 6.0, m2 = 21.75. <strong>2) Algorithm:</strong> <strong>DBSCAN</strong> handles elongated shapes and isolates noise. <strong>3) LOF=3.8:</strong> Clear <strong>local anomaly</strong> (3.8x sparser than neighbors).</p>"
    }
  }
];
