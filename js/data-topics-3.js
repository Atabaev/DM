window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== M7 / L7 ====================
  {
    id: 7,
    code: 'M7',
    labCode: 'L7',
    slug: '07-naive-bayes-knn',
    hours: 2,
    labs: 1,
    keywords: ['Naive Bayes', 'Bayes Theorem', 'Laplace Smoothing', 'k-NN', 'Euclidean', 'Manhattan', 'Lazy Learner', 'Tan Ch.4'],
    title: {
      uz: "Ehtimollik va masofaga asoslangan tasniflash usullari",
      en: "Probabilistic & Distance-Based Classification (Naive Bayes & k-NN)"
    },
    description: {
      uz: "Bayes teoremasi, shartli mustaqillik, Laplace Smoothing (Tan 4-bob), Gaussian/Multinomial/Bernoulli NB hamda k-NN masofa metrikalari va scaling.",
      en: "Bayes' Theorem, conditional independence, Laplace smoothing (Tan Ch. 4), NB variants, and k-NN distance metrics & tuning."
    },
    sections: [
      {
        heading: { uz: "7.1. Bayes Teoremasi va Naive Bayes (Tan, 4.4-bo'lim)", en: "7.1. Bayes' Theorem & Naive Bayes (Tan Ch. 4.4)" },
        bodyHtml: {
          uz: "<p><strong>Naive Bayes</strong> — obyektni eng katta posterior ehtimolga ega sinfga ajratuvchi (MAP — Maximum A Posteriori) ehtimoliy tasniflagich. \"Naive\" (soddadil) deyilishining sababi: barcha $x_i$ belgilar $C_k$ sinf berilganda o'zaro <strong>shartli mustaqil</strong> deb faraz qilinadi.</p><p>Agar biror so'z o'quv to'plamidagi biror sinfda 0 marta uchragan bo'lsa, butun ko'paytma nolga aylanadi (Zero-Frequency muammosi). Buni <strong>Laplace (Add-One, $\\alpha=1$) Smoothing</strong> bartaraf etadi.</p>",
          en: "<p><strong>Naive Bayes</strong> classifies via MAP assuming conditional independence across features. <strong>Laplace Smoothing</strong> ($\\alpha=1$) prevents unseen features from zeroing out the product.</p>"
        },
        latex: "P(C_k\\mid X)\\propto P(C_k)\\prod_{i=1}^n P(x_i\\mid C_k), \\qquad P(x_i\\mid C_k)=\\frac{\\text{count}(x_i,C_k)+\\alpha}{N_{C_k}+\\alpha|V|}"
      },
      {
        heading: { uz: "7.2. Naive Bayes Turlari", en: "7.2. Three Variants of Naive Bayes" },
        table: {
          headers: { uz: ["Tur", "Ma'lumot turi", "Qo'llanilishi"], en: ["Variant", "Data Type", "Application"] },
          rows: {
            uz: [
              ["Gaussian NB", "Uzluksiz normal taqsimlangan raqamlar", "Tibbiy ko'rsatkichlar, Wine/Iris"],
              ["Multinomial NB", "Butun hisoblar / TF-IDF chastotalari", "Matn tasniflash, Spam filtri"],
              ["Bernoulli NB", "Ikkilik (0/1) atributlar", "Qisqa SMS va bayroq belgilari"]
            ],
            en: [
              ["Gaussian NB", "Continuous normal features", "Biomarkers, Wine/Iris"],
              ["Multinomial NB", "Term counts / TF-IDF", "Text & Spam filtering"],
              ["Bernoulli NB", "Binary 0/1 flags", "Short texts, binary features"]
            ]
          }
        }
      },
      {
        heading: { uz: "7.3. k-NN (k-Eng Yaqin Qo'shni) Algoritmi (Tan, 4.3-bo'lim)", en: "7.3. k-Nearest Neighbors (Tan Ch. 4.3)" },
        bodyHtml: {
          uz: "<p><strong>k-NN</strong> — <strong>Lazy Learner</strong> (o'qitish bosqichisiz faqat bashorat paytida hisoblaydi). Yangi obyektga eng yaqin $k$ ta qo'shni masofa (Evklid $p=2$ yoki Manhattan $p=1$) orqali topilib, ko'pchilik ovozi beriladi. <strong>k=1</strong> shovqinga sezgir (Overfitting), juda katta $k$ esa chegarani bulaniqlashtiradi (Underfitting). Katta diapazonli ustunlar masofani bosib ketmasligi uchun <strong>normallashtirish majburiy</strong>! Kamchiligi: katta datasetda bashorat vaqti $O(n\\cdot d)$ sekin.</p>",
          en: "<p><strong>k-NN</strong> is a <strong>Lazy Learner</strong> computing Euclidean ($L_2$) or Manhattan ($L_1$) distances at query time ($O(n\\cdot d)$ slow on big data). Small $k=1$ risks overfitting; large $k$ risks underfitting. Feature scaling is mandatory!</p>"
        },
        latex: "d_{\\text{Euclidean}}=\\sqrt{\\sum(x_i-y_i)^2}, \\qquad d_{\\text{Manhattan}}=\\sum|x_i-y_i|",
        widget: 'knn-demo'
      }
    ],
    slides: [
      { title: { uz: "M7: Naive Bayes va k-NN algoritmlari", en: "M7: Naive Bayes & k-NN" }, subtitle: { uz: "Tan Darsligi 4-bob · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 4 · MITQ2506 · 80 min" }, points: { uz: ["Bayes teoremasi va MAP qaror qoidasi", "Shartli mustaqillik va Laplace Smoothing", "Gaussian, Multinomial, Bernoulli NB", "k-NN Lazy Learning, Evklid & Manhattan", "k tanlash, Scaling va Lab 7"], en: ["Bayes' Theorem & MAP rule", "Conditional independence & Laplace smoothing", "3 Naive Bayes variants", "k-NN Lazy Learning & Distance Metrics", "Tuning k, Scaling & Lab 7"] } },
      { title: { uz: "Bayes Teoremasi: Prior, Likelihood, Posterior", en: "Bayes' Theorem" }, latex: "P(C_k \\mid X) = \\frac{P(X \\mid C_k)\\,P(C_k)}{P(X)}", points: { uz: ["Prior P(C_k): sinfning boshlang'ich ulushi", "Likelihood P(X|C_k): shu sinfda X uchrash ehtimoli", "Posterior P(C_k|X): yakuniy izlanayotgan ehtimol"], en: ["Prior, Likelihood, and Posterior probabilities"] } },
      { title: { uz: "Shartli Mustaqillik va Laplace Smoothing", en: "Conditional Independence & Laplace Smoothing" }, latex: "P(w\\mid C) = \\frac{\\text{count}(w,C)+\\alpha}{N_C + \\alpha |V|}", points: { uz: ["'Naive' taxmin: atributlar sinf ichida mustaqil", "Zero-Frequency: o'quvda yo'q so'z ko'paytmani 0 ga aylantiradi", "Laplace (α=1) qo'shish nol ehtimoldan saqlaydi"], en: ["Independence assumption enables O(nd) speed", "Laplace add-1 smoothing prevents zero probability collapse"] } },
      { title: { uz: "Qo'lda Spam Misoli", en: "Worked Spam Filter Example" }, points: { uz: ["P(Spam)=0.3, P(Ham)=0.7", "P('bepul'|Spam)=0.70, P('sovg\\'a'|Spam)=0.50 → Score = 0.3×0.7×0.5 = 0.105", "P('bepul'|Ham)=0.10, P('sovg\\'a'|Ham)=0.10 → Score = 0.7×0.1×0.1 = 0.007 → SPAM!"], en: ["Spam posterior score 0.105 >> Ham 0.007 → SPAM"] } },
      { title: { uz: "Naive Bayes Turlari", en: "3 Naive Bayes Variants" }, table: { headers: { uz: ["Tur", "Ma'lumot", "Misol"], en: ["Variant", "Input", "Use Case"] }, rows: { uz: [["Gaussian NB", "Normal raqamli", "Tibbiy ma'lumot"], ["Multinomial NB", "So'z hisobi / TF-IDF", "Spam / Matn"], ["Bernoulli NB", "0 / 1 ikkilik", "Qisqa matn"]], en: [["Gaussian NB", "Continuous", "Medical"], ["Multinomial NB", "Counts/TF-IDF", "Text/Spam"], ["Bernoulli NB", "Binary 0/1", "Short text"]] } } },
      { title: { uz: "k-NN (k-Eng Yaqin Qo'shni) va Lazy Learning", en: "k-NN & Lazy Learning (Tan 4.3)" }, points: { uz: ["Eager Learner (Decision Tree) model quradi; Lazy Learner (k-NN) shunchaki saqlab turadi", "So'rov paytida barcha o'quv nuqtalarigacha masofa hisoblanadi — O(n·d)", "Eng yaqin k ta qo'shni ovoz beradi (yoki 1/d vaznli ovoz)"], en: ["Lazy learner defers work until prediction O(n·d)", "Majority vote among k closest neighbors"] } },
      { title: { uz: "Evklid (L2) vs Manhattan (L1) Masofalari", en: "Euclidean vs Manhattan Distances" }, latex: "d_2 = \\sqrt{\\sum (x_i-y_i)^2}, \\qquad d_1 = \\sum |x_i-y_i|", points: { uz: ["Evklid: to'g'ri chiziq masofasi", "Manhattan: koordinata o'qlari bo'ylab masofa (yuqori o'lchamda chidamliroq)"], en: ["Euclidean = straight-line L2; Manhattan = grid L1"] } },
      { title: { uz: "Interaktiv k-NN Demo (Grafikni bosing!)", en: "Interactive k-NN Visualizer" }, widget: 'knn-demo' },
      { title: { uz: "k qiymatini Tanlash va Normallashtirish", en: "Choosing k & Mandatory Scaling" }, points: { uz: ["k=1: shovqinga sezgir (Overfitting)", "Juda katta k: chegarani xiralashtiradi (Underfitting)", "Normallashtirish (StandardScaler) bo'lmasa katta diapazonli ustun masofani egallab oladi!"], en: ["k=1 overfits noise; large k underfits; scaling is mandatory"] } },
      { title: { uz: "Talabalarga savol (k-NN Scaling)", en: "Class Discussion: Unscaled Features" }, discussion: { q: { uz: "k-NN da k=1 bo'lganda o'quv (train) to'plamidagi aniqlik necha foiz chiqadi va nega bu aldamchi?", en: "What is the training accuracy of 1-NN (k=1) and why is it misleading?" }, a: { uz: "O'quv to'plamidagi har nuqtaning eng yaqin qo'shnisi — O'ZI (masofa 0), shu bois Train aniqlik <strong>100%</strong> chiqadi! Ammo testda shovqinga urilib Overfitting qiladi.", en: "Every training point is its own nearest neighbor (distance 0), yielding <strong>100% train accuracy</strong> despite severe overfitting on test noise!" } } }
    ],
    lab: {
      title: { uz: "L7: Naive Bayes va k-NN algoritmlari yordamida tasniflash", en: "L7: Classification with Naive Bayes & k-NN" },
      objective: { uz: "GaussianNB va k-NN modellarini Wine datasetida solishtirish, normallashtirish ta'sirini o'lchash va Cross-Validation bilan k tanlash.", en: "Compare GaussianNB and k-NN on Wine, prove scaling impact, and tune k with 5-fold CV." },
      steps: [
        {
          title: { uz: "Normallashtirishsiz vs Normallashtirilgan k-NN", en: "Unscaled vs Scaled k-NN on Wine" },
          desc: { uz: "StandardScaler qo'llash aniqlikni qanchaga oshirishini ko'ring.", en: "Measure accuracy jump after StandardScaler." },
          code: `from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

wine = load_wine()
X_tr, X_te, y_tr, y_te = train_test_split(wine.data, wine.target, test_size=0.3, stratify=wine.target, random_state=42)
raw_acc = KNeighborsClassifier(5).fit(X_tr, y_tr).score(X_te, y_te)
sc = StandardScaler()
sc_acc = KNeighborsClassifier(5).fit(sc.fit_transform(X_tr), y_tr).score(sc.transform(X_te), y_te)
print(f"Unscaled k-NN: {raw_acc:.3f} -> Scaled k-NN: {sc_acc:.3f}")`
        },
        {
          title: { uz: "GaussianNB vs Optimal k-NN (Pipeline + CV)", en: "GaussianNB vs Cross-Validated k-NN" },
          desc: { uz: "k=1..21 toq qiymatlarda 5-fold CV bilan eng yaxshi k ni toping.", en: "Sweep odd k=1..21 inside Pipeline." },
          code: `from sklearn.naive_bayes import GaussianNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import cross_val_score
import numpy as np

nb_cv = cross_val_score(GaussianNB(), X_tr, y_tr, cv=5).mean()
ks = list(range(1, 22, 2))
scores = [cross_val_score(make_pipeline(StandardScaler(), KNeighborsClassifier(k)), X_tr, y_tr, cv=5).mean() for k in ks]
best_k = ks[int(np.argmax(scores))]
print(f"GaussianNB CV: {nb_cv:.3f} | Best k={best_k} CV: {max(scores):.3f}")`
        },
        {
          title: { uz: "Evklid (p=2) vs Manhattan (p=1)", en: "Euclidean vs Manhattan & Distance Weights" },
          desc: { uz: "Masofa metrikalari va weights='distance' ni sinang.", en: "Compare L1 vs L2 metrics." },
          code: `for p, lbl in [(1, 'Manhattan'), (2, 'Euclidean')]:
    m = make_pipeline(StandardScaler(), KNeighborsClassifier(best_k, p=p, weights='distance')).fit(X_tr, y_tr)
    print(f"{lbl:10s} Test Score: {m.score(X_te, y_te):.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: Breast Cancer datasetida k=1..25 grafigini chizing.",
          "2-variant: MultinomialNB(alpha=0.1, 1.0, 5.0) ni kichik matn to'plamida solishtiring.",
          "3-variant: weights='uniform' vs weights='distance' natijalarini jadval qiling."
        ],
        en: [
          "Variant 1: Plot CV accuracy for k=1..25 on Breast Cancer.",
          "Variant 2: Compare Laplace alpha=[0.1, 1.0, 5.0] on MultinomialNB.",
          "Variant 3: Compare uniform vs distance-weighted voting."
        ]
      }
    },
    glossary: [
      { uz: "Prior / Posterior", en: "Prior / Posterior", defUz: "Kuzatuvdan oldingi P(C) va keyingi P(C|X) ehtimollar", defEn: "Class probabilities before and after observing X" },
      { uz: "Laplace Smoothing", en: "Laplace Smoothing", defUz: "Nol ehtimolni yo'qotish uchun +α qo'shish usuli", defEn: "Add-alpha smoothing avoiding zero probabilities" },
      { uz: "Lazy Learner", en: "Lazy Learner", defUz: "Model qurmay, bashorat paytida qo'shnilarni qidiruvchi algoritm", defEn: "Algorithm deferring computation to query time" },
      { uz: "Manhattan masofasi", en: "Manhattan Distance", defUz: "Koordinata farqlari modullari yig'indisi (L1)", defEn: "Sum of absolute coordinate differences" }
    ],
    quiz: [
      { q: { uz: "Naive Bayesda \"naive\" so'zi nimani anglatadi?", en: "Why is Naive Bayes called 'naive'?" }, options: [{ label: 'A', uz: "Algoritm faqat ikkilik matn ustunlarida ishlay oladi", en: "Model handles only binary bag-of-words counts" }, { label: 'B', uz: "Sinf berilganda atributlar o'zaro shartli mustaqil olinadi", en: "Features are assumed conditionally independent given class" }, { label: 'C', uz: "Barcha parametrlar tasodifiy gradyentsiz topiladi", en: "Weights are assigned without reading training rows" }, { label: 'D', uz: "Model daraxt shoxlarini kesmasdan chuqur o'sayveradi", en: "Decision boundaries ignore sample priors entirely" }], answer: 'B', explanation: { uz: "Nazariyada keltirilganidek, x_i belgilar sinf ichida shartli mustaqil olinadi.", en: "Features are assumed conditionally independent given class." } },
      { q: { uz: "O'quvda uchramagan so'z ehtimolni 0 ga tushirib qo'ymasligi uchun nima qo'llaniladi?", en: "What prevents unseen words from zeroing out Naive Bayes probabilities?" }, options: [{ label: 'A', uz: "Laplace (+α) silliqlash usuli", en: "Laplace (+α) additive smoothing" }, { label: 'B', uz: "Min-Max [0, 1] masshtablash", en: "Min-Max [0, 1] range scaling" }, { label: 'C', uz: "PCA ortogonal proyeksiya", en: "PCA orthogonal projection step" }, { label: 'D', uz: "Post-pruning daraxt kesish", en: "Post-pruning tree trimming step" }], answer: 'A', explanation: { uz: "Laplace Smoothing suratga α va maxrajga α|V| qo'shadi.", en: "Add-alpha smoothing avoids zero probabilities." } },
      { q: { uz: "k-NN da k=1 bo'lsa qanday muammo kelib chiqadi?", en: "What happens when k=1 in k-NN?" }, options: [{ label: 'A', uz: "Kuchli Underfitting va soddalashuv", en: "Severe Underfitting and smooth bias" }, { label: 'B', uz: "Shovqinga sezgirlik va Overfitting", en: "High sensitivity to noise & Overfitting" }, { label: 'C', uz: "Masshtablashga ehtiyoj qolmasligi", en: "Complete immunity to feature scales" }, { label: 'D', uz: "Chiziqli regressiyaga aylanishi", en: "Reduction to global linear boundary" }], answer: 'B', explanation: { uz: "1-NN bitta shovqin nuqtaga qarab qaror qiladi.", en: "Single noisy neighbor dictates prediction." } },
      { q: { uz: "k-NN da normallashtirish nima uchun majburiy?", en: "Why is feature scaling mandatory in k-NN?" }, options: [{ label: 'A', uz: "Sinf apriori ehtimollarini tenglashtirish uchun", en: "To equalize all prior class frequencies" }, { label: 'B', uz: "Qaror daraxti tugunlarini qisqartirish uchun", en: "To shrink greedy decision tree splits" }, { label: 'C', uz: "Katta diapazonli ustun masofani bosib ketmasligi uchun", en: "So large-range features do not dominate distance" }, { label: 'D', uz: "Kategorik matnlarni One-Hot qilish uchun", en: "To convert nominal text strings to integers" }], answer: 'C', explanation: { uz: "Evklid va Manhattan masofalari shkalaga sezgir.", en: "Distance metrics are overwhelmed by large-magnitude columns." } },
      { q: { uz: "Gaussian Naive Bayes qachon ishlatiladi?", en: "When is Gaussian Naive Bayes used?" }, options: [{ label: 'A', uz: "Uzluksiz normal taqsimlangan raqamli belgilarda", en: "Continuous normally distributed numeric features" }, { label: 'B', uz: "Faqat diskret matn chastotalari bilan ishlashda", en: "Discrete word frequency vectors in documents" }, { label: 'C', uz: "Yorliqsiz ma'lumotlarni sferik klasterlashda", en: "Unlabeled spherical density grouping tasks" }, { label: 'D', uz: "Supermarket savatidagi binar qoidalarni topishda", en: "Asymmetric binary market-basket itemset mining" }], answer: 'A', explanation: { uz: "Gaussian NB har bir uzluksiz belgini normal taqsimot bilan modellashtiradi.", en: "Models continuous numeric features using Gaussian mean and variance." } }
    ],
    matching: [
      { left: { uz: "Gaussian NB", en: "Gaussian NB" }, right: { uz: "Uzluksiz normal raqamli atributlar", en: "Continuous numeric features" } },
      { left: { uz: "Multinomial NB", en: "Multinomial NB" }, right: { uz: "Matndagi so'z chastotalari / TF-IDF", en: "Word counts / TF-IDF frequencies" } },
      { left: { uz: "Laplace Smoothing", en: "Laplace Smoothing" }, right: { uz: "Zero-Frequency muammosini +α bilan hal qiladi", en: "Fixes zero-frequency with +α" } },
      { left: { uz: "k-NN (Lazy Learner)", en: "k-NN (Lazy Learner)" }, right: { uz: "Bashoratda eng yaqin k qo'shnini izlaydi", en: "Finds k nearest neighbors at query time" } }
    ],
    fillGap: [
      { text: { uz: "k-NN o'qitish bosqichisiz bashoratda hisoblagani uchun ___ Learner deyiladi.", en: "Because k-NN defers computation until prediction, it is called a ___ learner." }, answer: "Lazy" },
      { text: { uz: "Sum(|x_i - y_i|) formulasi ___ masofasini ifodalaydi.", en: "The formula Sum(|x_i - y_i|) defines the ___ distance." }, answer: "Manhattan" },
      { text: { uz: "Laplace Smoothing da odatda α = ___ qiymat olinadi (Add-One).", en: "In Add-One Laplace Smoothing, α is set to ___." }, answer: "1" }
    ]
  },

  // ==================== M8 / L8 ====================
  {
    id: 8,
    code: 'M8',
    labCode: 'L8',
    slug: '08-evaluation-metrics',
    hours: 2,
    labs: 1,
    keywords: ['Confusion Matrix', 'Precision', 'Recall', 'F1-score', 'ROC', 'AUC', 'PR-AUC', 'Cross-Validation', 'Tan Ch.3'],
    title: {
      uz: "Tasniflash modellarining aniqligini baholash va metrikalar",
      en: "Evaluating Classification Models & Metrics"
    },
    description: {
      uz: "Accuracy paradoksi (Tan 3.6 & 4), Confusion Matrix, Type I/II xatolar, Precision/Recall/F1/F-beta, ROC-AUC vs PR-AUC va Stratified K-Fold CV.",
      en: "Accuracy paradox (Tan Ch. 3.6 & 4), Confusion Matrix, Precision/Recall/F1/F-beta, ROC-AUC vs PR-AUC, and Stratified K-Fold CV."
    },
    sections: [
      {
        heading: { uz: "8.1. Accuracy Paradoksi va Xatolik Matritsasi (Confusion Matrix)", en: "8.1. Accuracy Paradox & Confusion Matrix" },
        bodyHtml: {
          uz: "<p>Noteng sinflarda (masalan, 99% normal, 1% firibgar) hammani \"normal\" deydigan foydasiz model ham <strong>99% Accuracy</strong> oladi! Shu sabab <strong>Confusion Matrix</strong> yordamida 4 ta katak alohida tekshiriladi: <strong>TP</strong>, <strong>TN</strong>, <strong>FP (1-tur xato)</strong> va <strong>FN (2-tur xato)</strong>.</p>",
          en: "<p>With 99% normal vs 1% fraud, predicting \"normal\" scores <strong>99% Accuracy</strong> while catching 0 fraud! Inspect all 4 cells of the <strong>Confusion Matrix</strong>: TP, TN, FP (Type I), FN (Type II).</p>"
        },
        table: {
          headers: { uz: ["", "Bashorat: Musbat (1)", "Bashorat: Manfiy (0)"], en: ["", "Predicted: 1", "Predicted: 0"] },
          rows: {
            uz: [
              ["Haqiqiy: Musbat (1)", "TP (To'g'ri musbat ✓)", "FN (2-tur xato: o'tkazib yuborildi ✗)"],
              ["Haqiqiy: Manfiy (0)", "FP (1-tur xato: yolg'on signal ✗)", "TN (To'g'ri manfiy ✓)"]
            ],
            en: [
              ["Actual: 1", "TP (True Positive ✓)", "FN (Type II Error ✗)"],
              ["Actual: 0", "FP (Type I Error ✗)", "TN (True Negative ✓)"]
            ]
          }
        }
      },
      {
        heading: { uz: "8.2. Precision, Recall, Specificity, F1 va F-beta Score", en: "8.2. Precision, Recall, F1 & F-beta Score" },
        bodyHtml: {
          uz: "<ul><li><strong>Precision:</strong> Spam filtrida muhim (FP — yaxshi xatni spamga tashlamaslik).</li><li><strong>Recall (Sensitivity):</strong> Tibbiy diagnostikada muhim (FN — kasal bemorni o'tkazib yubormaslik).</li><li><strong>F1-score:</strong> Precision va Recall ning garmonik o'rtachasi.</li></ul>",
          en: "<ul><li><strong>Precision:</strong> crucial in Spam Filtering (avoiding FP).</li><li><strong>Recall:</strong> crucial in Cancer Screening (avoiding FN).</li><li><strong>F1-score:</strong> harmonic mean of Precision and Recall.</li></ul>"
        },
        latex: "P=\\frac{TP}{TP+FP}, \\quad R=\\frac{TP}{TP+FN}, \\quad F_1=\\frac{2PR}{P+R}, \\quad F_\\beta=(1+\\beta^2)\\frac{P\\cdot R}{\\beta^2 P+R}",
        widget: 'roc-cm'
      },
      {
        heading: { uz: "8.3. ROC-AUC vs PR-AUC va Stratified K-Fold CV", en: "8.3. ROC-AUC vs PR-AUC & Stratified CV" },
        bodyHtml: {
          uz: "<p><strong>ROC egri chizig'i</strong> barcha ehtimollik thresholdlari uchun $TPR = Recall$ va $FPR = FP/(FP+TN)$ ni chizadi: <strong>AUC = 1.0</strong> mukammal model, <strong>AUC = 0.5</strong> tasodifiy model. Kuchli sinf disbalansida (1:1000) ulkan TN soni FPR ni sun'iy kichik qilib ko'rsatgani uchun <strong>PR-AUC (Precision-Recall)</strong> afzal! Barqaror baho uchun <strong>Stratified K-Fold CV</strong> ($k=5$ yoki $10$) har qatlamda sinf nisbatini saqlaydi.</p>",
          en: "<p><strong>ROC</strong> plots $TPR$ vs $FPR$ across thresholds (AUC=1.0 perfect, 0.5 random). Under extreme 1:1000 imbalance, prefer <strong>PR-AUC</strong>. Always validate via <strong>Stratified K-Fold CV</strong> ($k=5$ or $10$).</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "M8: Tasniflash Modellarini Baholash", en: "M8: Model Evaluation Metrics" }, subtitle: { uz: "Tan Darsligi 3.6 & 4-bob · MITQ2506 · 80 daqiqa", en: "Tan Ch. 3.6 & 4 · MITQ2506 · 80 min" }, points: { uz: ["Accuracy Paradoksi", "Confusion Matrix: TP, FP, FN, TN", "Precision, Recall, F1 va F-beta", "ROC-AUC vs PR-AUC", "Holdout vs Stratified K-Fold CV va Lab 8"], en: ["Accuracy Paradox", "Confusion Matrix & Type I/II errors", "Precision, Recall, F1 & F-beta", "ROC-AUC vs PR-AUC", "Stratified K-Fold CV & Lab 8"] } },
      { title: { uz: "Accuracy Tuzog'i (99% = Foydasiz!)", en: "The Accuracy Paradox" }, points: { uz: ["99 ta oddiy + 1 ta firibgar: 'Hammasi oddiy' deydigan model = 99% Accuracy!", "Lekin firibgarlik bo'yicha Recall = 0% — biznesga 0 foyda"], en: ["Dummy majority classifier gets 99% Accuracy with 0% Fraud Recall"] } },
      { title: { uz: "Confusion Matrix va Xato Turlari", en: "Confusion Matrix" }, table: { headers: { uz: ["", "Pred 1", "Pred 0"], en: ["", "Pred 1", "Pred 0"] }, rows: { uz: [["True 1", "TP ✓", "FN (2-tur xato)"], ["True 0", "FP (1-tur xato)", "TN ✓"]], en: [["True 1", "TP ✓", "FN (Type II)"], ["True 0", "FP (Type I)", "TN ✓"]] } } },
      { title: { uz: "Precision, Recall va F1-Score", en: "Precision, Recall & F1" }, latex: "P = \\frac{TP}{TP+FP}, \\qquad R = \\frac{TP}{TP+FN}, \\qquad F_1 = \\frac{2PR}{P+R}", points: { uz: ["Spam filtri → Precision muhim (FP zararli)", "Kasallik aniqlash → Recall muhim (FN xavfli)", "Garmonik o'rtacha F1 ikkalasining muvozanati"], en: ["Spam → Precision; Medical → Recall; Balanced → F1"] } },
      { title: { uz: "Interaktiv Threshold va Confusion Matrix", en: "Interactive Threshold Explorer" }, widget: 'roc-cm' },
      { title: { uz: "Qo'lda Hisoblash Misoli", en: "Worked Example" }, points: { uz: ["TP=40, FP=10, FN=20, TN=930 (N=1000)", "Accuracy = 970/1000 = 97.0%", "Precision = 40/50 = 80.0% | Recall = 40/60 = 66.7%", "F1 = 2×0.80×0.667 / 1.467 ≈ 72.7%"], en: ["TP=40, FP=10, FN=20, TN=930 → Acc=97%, P=80%, R=66.7%, F1=72.7%"] } },
      { title: { uz: "ROC Egri Chizig'i va AUC", en: "ROC Curve & AUC" }, points: { uz: ["TPR (y) vs FPR (x) barcha thresholdlarda", "AUC = 1.0: mukammal ajratish | AUC = 0.5: tasodifiy model"], en: ["TPR vs FPR across thresholds; AUC=1.0 ideal, 0.5 random"] } },
      { title: { uz: "Kuchli Disbalansda PR-AUC Afzalligi", en: "PR-AUC for Extreme Imbalance" }, points: { uz: ["TN katta bo'lganda FPR kichik ko'rinib ROC aldaydi", "PR-AUC (Precision-Recall) esa False Positive larni darhol ko'rsatadi"], en: ["PR-AUC ignores TN and exposes False Positives"] } },
      { title: { uz: "Stratified K-Fold Cross-Validation", en: "Stratified K-Fold CV" }, points: { uz: ["Ma'lumotni k=5 yoki 10 qismga bo'lib har birini 1 martadan test qilish", "Stratified har qatlamda sinflar nisbatini saqlaydi"], en: ["k=5 or 10 rotating folds preserving class proportions"] } },
      { title: { uz: "Talabalarga savol (Metrika tanlash)", en: "Class Discussion: Choosing a Metric" }, discussion: { q: { uz: "100,000 kredit kartadan 100 tasida firibgarlik bor. Qaysi baholash metrikasi ENG YOMON tanlov va qaysilari eng to'g'ri?", en: "Out of 100,000 cards, 100 are fraud. Which metric is the WORST choice and which are best?" }, a: { uz: "<strong>Accuracy eng yomon tanlov</strong> (99.9% chiqib aldaydi). Eng to'g'risi: <strong>PR-AUC, Recall va F1/F2-score</strong>!", en: "<strong>Accuracy is worst</strong> (99.9% trivial floor). Best: <strong>PR-AUC, Recall, and F1/F2</strong>!" } } }
    ],
    lab: {
      title: { uz: "L8: Confusion Matrix, Precision, Recall, F1 va ROC-AUC baholash", en: "L8: Evaluation Metrics, Thresholds & ROC-AUC" },
      objective: { uz: "Breast Cancer datasetida Confusion Matrix, Precision/Recall/F1, threshold tuning, ROC-AUC va StratifiedKFold CV bajarish.", en: "Compute Confusion Matrix, tune thresholds, plot ROC/PR-AUC, and run StratifiedKFold CV." },
      steps: [
        {
          title: { uz: "Confusion Matrix va Classification Report", en: "Confusion Matrix & Report" },
          desc: { uz: "TP, FP, FN, TN va barcha metrikalarni hisoblang.", en: "Extract matrix cells and print classification_report." },
          code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix, classification_report

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.3, stratify=data.target, random_state=42)
clf = DecisionTreeClassifier(max_depth=4, random_state=42).fit(X_tr, y_tr)
y_pred = clf.predict(X_te)
print(confusion_matrix(y_te, y_pred))
print(classification_report(y_te, y_pred, target_names=data.target_names))`
        },
        {
          title: { uz: "Threshold Tuning (0.3 vs 0.5 vs 0.7)", en: "Probability Threshold Tuning" },
          desc: { uz: "Chegarani o'zgartirib Precision va Recall savdosini ko'ring.", en: "Observe Precision vs Recall trade-off." },
          code: `from sklearn.metrics import precision_score, recall_score, f1_score
probs = clf.predict_proba(X_te)[:, 1]
for thr in [0.3, 0.5, 0.7]:
    p = (probs >= thr).astype(int)
    print(f"thr={thr} | P={precision_score(y_te, p):.3f} | R={recall_score(y_te, p):.3f} | F1={f1_score(y_te, p):.3f}")`
        },
        {
          title: { uz: "ROC-AUC, PR-AUC va 5-Fold Stratified CV", en: "ROC-AUC, PR-AUC & 5-Fold Stratified CV" },
          desc: { uz: "Model barqarorligini o'rtacha ± std bilan chiqaring.", en: "Report AUC and 5-fold mean ± std." },
          code: `from sklearn.metrics import roc_auc_score, average_precision_score
from sklearn.model_selection import StratifiedKFold, cross_val_score
print("ROC-AUC:", round(roc_auc_score(y_te, probs), 3), "| PR-AUC:", round(average_precision_score(y_te, probs), 3))
cv = cross_val_score(clf, data.data, data.target, cv=StratifiedKFold(5, shuffle=True, random_state=42), scoring='f1')
print(f"5-Fold CV F1: {cv.mean():.3f} ± {cv.std():.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: LogisticRegression va DecisionTree ROC egri chiziqlarini bitta grafikda solishtiring.",
          "2-variant: fbeta_score(y_te, y_pred, beta=2) ni hisoblang.",
          "3-variant: Wine datasetida macro vs weighted F1 farqini tahlil qiling."
        ],
        en: [
          "Variant 1: Plot ROC curves of DecisionTree vs LogisticRegression together.",
          "Variant 2: Compute F2-score with beta=2.",
          "Variant 3: Compare macro vs weighted F1 on 3-class Wine."
        ]
      }
    },
    glossary: [
      { uz: "Precision", en: "Precision", defUz: "TP / (TP + FP) — yolg'on signal kamligi", defEn: "TP / (TP + FP)" },
      { uz: "Recall", en: "Recall", defUz: "TP / (TP + FN) — haqiqiy musbatlarni qamrab olish", defEn: "TP / (TP + FN)" },
      { uz: "F1-Score", en: "F1-Score", defUz: "Precision va Recall garmonik o'rtachasi", defEn: "Harmonic mean of P and R" },
      { uz: "ROC-AUC", en: "ROC-AUC", defUz: "TPR vs FPR egri chizig'i ostidagi maydon", defEn: "Area under ROC curve" }
    ],
    quiz: [
      { q: { uz: "Tibbiy diagnostikada (kasallikni o'tkazib yubormaslik) qaysi metrika muhimroq?", en: "Which metric is critical in medical disease screening?" }, options: [{ label: 'A', uz: "Precision", en: "Precision" }, { label: 'B', uz: "Recall", en: "Recall" }, { label: 'C', uz: "Accuracy", en: "Accuracy" }, { label: 'D', uz: "Specificity", en: "Specificity" }], answer: 'B', explanation: { uz: "FN (kasalni sog'lom deyish) xavfli bo'lgani uchun Recall ustun.", en: "Minimizing False Negatives requires high Recall." } },
      { q: { uz: "AUC = 0.5 nimani anglatadi?", en: "What does AUC = 0.5 indicate?" }, options: [{ label: 'A', uz: "Mukammal ajratuvchi model", en: "Perfect separation classifier" }, { label: 'B', uz: "Tasodifiy taxmin qiluvchi model", en: "Random guessing classifier" }, { label: 'C', uz: "Ortiqcha o'rgangan (Overfit) model", en: "Heavily overfitted classifier" }, { label: 'D', uz: "Teskari belgilangan mukammal model", en: "Inverted optimal classifier" }], answer: 'B', explanation: { uz: "AUC=0.5 ROC grafigida diagonal chiziqqa to'g'ri keladi.", en: "AUC=0.5 corresponds to random guessing." } },
      { q: { uz: "Spam filtri uchun qaysi ko'rsatkich muhimroq?", en: "Which metric is prioritized for a spam filter?" }, options: [{ label: 'A', uz: "Recall (Sezgirlik)", en: "Recall" }, { label: 'B', uz: "Precision (Aniqlik)", en: "Precision" }, { label: 'C', uz: "WCSS (Klaster xatosi)", en: "WCSS" }, { label: 'D', uz: "Lift (Ko'tarilish)", en: "Lift" }], answer: 'B', explanation: { uz: "Muhim xatni spamga tashlamaslik (FP kamligi) uchun Precision muhim.", en: "Avoids false positives on important emails." } },
      { q: { uz: "Confusion matrisada FN (False Negative) nima?", en: "What is False Negative (FN)?" }, options: [{ label: 'A', uz: "Haqiqiy musbatni manfiy deb o'tkazib yuborish", en: "Predicting negative when actual class is positive" }, { label: 'B', uz: "Haqiqiy manfiyni musbat deb xato belgilash", en: "Predicting positive when actual class is negative" }, { label: 'C', uz: "Haqiqiy musbat holatni to'g'ri topish natijasi", en: "Predicting positive when actual class is positive" }, { label: 'D', uz: "Haqiqiy manfiy holatni to'g'ri rad etish natijasi", en: "Predicting negative when actual class is negative" }], answer: 'A', explanation: { uz: "FN — haqiqiy musbat holatni topa olmaslik (2-tur xato).", en: "Type II error missing an actual positive." } },
      { q: { uz: "Kuchli disbalansli ma'lumotlarda (1:1000) ROC o'rniga qaysi egri chiziq afzal?", en: "For 1:1000 imbalanced data, which curve is preferred over ROC?" }, options: [{ label: 'A', uz: "PR-AUC (Precision-Recall)", en: "PR-AUC (Precision-Recall)" }, { label: 'B', uz: "Elbow WCSS tirsak egri chizig'i", en: "Elbow WCSS optimization plot" }, { label: 'C', uz: "Ward iyerarxik dendrogrammasi", en: "Ward hierarchical dendrogram" }, { label: 'D', uz: "PCA Scree dispersiya grafigi", en: "PCA Scree variance curve" }], answer: 'A', explanation: { uz: "PR-AUC ulkan TN ga bog'liq bo'lmaydi.", en: "PR-AUC ignores TN and exposes False Positives." } }
    ],
    matching: [
      { left: { uz: "TP / (TP + FP)", en: "TP / (TP + FP)" }, right: { uz: "Precision (Spam filtri uchun muhim)", en: "Precision (key for Spam filter)" } },
      { left: { uz: "TP / (TP + FN)", en: "TP / (TP + FN)" }, right: { uz: "Recall (Tibbiyot uchun muhim)", en: "Recall (key for Medical screening)" } },
      { left: { uz: "AUC = 1.0", en: "AUC = 1.0" }, right: { uz: "Mukammal tasniflagich", en: "Perfect classifier" } },
      { left: { uz: "Stratified K-Fold CV", en: "Stratified K-Fold CV" }, right: { uz: "Har qatlamda sinf nisbatini saqlaydi", en: "Preserves class balance in every fold" } }
    ],
    fillGap: [
      { text: { uz: "Precision va Recall ning garmonik o'rtachasi ___ deb ataladi.", en: "The harmonic mean of Precision and Recall is called the ___ score." }, answer: ["F1", "F1-score"] },
      { text: { uz: "99% normal va 1% firibgar ma'lumotda Accuracy=99% chiqishi ___ paradoksi deyiladi.", en: "Getting 99% accuracy on 99:1 imbalanced data is the ___ paradox." }, answer: "Accuracy" },
      { text: { uz: "ROC grafigida tasodifiy modelning AUC qiymati ___ ga teng.", en: "A random classifier has an ROC-AUC of ___." }, answer: "0.5" }
    ]
  },

  // ==================== M9 / L9 ====================
  {
    id: 9,
    code: 'M9',
    labCode: 'L9',
    slug: '09-market-basket',
    hours: 2,
    labs: 1,
    keywords: ['Association Rules', 'Market Basket', 'Support', 'Confidence', 'Lift', 'Conviction', 'Simpsons Paradox', 'Tan Ch.5'],
    title: {
      uz: "Assotsiativ qoidalar va xaridor savatchasi tahlili",
      en: "Association Rules & Market Basket Analysis"
    },
    description: {
      uz: "Tranzaksiya matritsasi (Tan 5.1), mumkin bo'lgan qoidalar soni (3^d - 2^(d+1) + 1), Support, Confidence, Lift, Conviction, Confidence tuzog'i va Simpson paradoksi.",
      en: "Binary basket matrix (Tan Ch. 5.1), rule search space, Support, Confidence, Lift, Conviction, Confidence Trap & Simpson's Paradox."
    },
    sections: [
      {
        heading: { uz: "9.1. Xaridor Savatchasi Tahlili va Qoida Shakli (Tan, 5.1-bo'lim)", en: "9.1. Market Basket Representation (Tan Ch. 5.1)" },
        bodyHtml: {
          uz: "<p><strong>Assotsiativ qoidalar</strong> (Agrawal et al., 1993) — supermarket cheklari, veb-kliklar yoki elektron tibbiy kartalardan <code>X → Y</code> (Bu yerda $X \\cap Y = \\emptyset$) ko'rinishidagi birga uchrash qonuniyatlarini topadi. Har bir chek ikkilik (0/1) asimetrik jadval sifatida tasvirlanadi.</p><p>Agar do'konda $d$ ta mahsulot bo'lsa, mumkin bo'lgan barcha assotsiativ qoidalar soni:</p><p>$R = 3^d - 2^{d+1} + 1$. Masalan, atigi $d=6$ ta mahsulot uchun $R = 602$ ta qoida; $d=100$ uchun esa astronomik son! Shu bois Support va Confidence chegaralari zarur.</p>",
          en: "<p><strong>Association Rules</strong> ($X \\to Y$, $X \\cap Y = \\emptyset$) uncover co-occurrence patterns in asymmetric binary transaction tables. With $d$ items, $R = 3^d - 2^{d+1} + 1$ candidate rules exist—necessitating minimum thresholds.</p>"
        }
      },
      {
        heading: { uz: "9.2. Asosiy Baholash Mezonlari: Support, Confidence, Lift, Conviction", en: "9.2. Evaluation Metrics: Support, Confidence, Lift & Conviction" },
        bodyHtml: {
          uz: "<p><strong>Confidence Tuzog'i!</strong> Agar do'kon mijozlarining 90% i <em>Non</em> olsa, <code>{Kofe} → {Non}</code> qoidasining Confidence qiymati 90% chiqaveradi, garchi ular mutlaqo mustaqil bo'lsa ham! Buni <strong>Lift</strong> (Tan da <em>Interest Factor</em>) fosh qiladi: <strong>Lift &gt; 1</strong> (ijobiy), <strong>Lift = 1</strong> (mustaqil), <strong>Lift &lt; 1</strong> (salbiy).</p>",
          en: "<p><strong>The Confidence Trap:</strong> high baseline Support(Y) inflates Confidence(X→Y) even when X and Y are independent! <strong>Lift</strong> detects true dependence (>1 positive, =1 independent, <1 negative).</p>"
        },
        latex: "\\text{Sup}(X\\cup Y)=\\frac{c(X\\cup Y)}{N}, \\quad \\text{Conf}(X\\to Y)=\\frac{\\text{Sup}(X\\cup Y)}{\\text{Sup}(X)}, \\quad \\text{Lift}=\\frac{\\text{Conf}(X\\to Y)}{\\text{Sup}(Y)}",
        widget: 'market-basket-sim'
      },
      {
        heading: { uz: "9.3. Qo'lda Hisoblash Misoli va Simpson Paradoksi (Tan, 5.7-bo'lim)", en: "9.3. Worked Calculation & Simpson's Paradox (Tan Ch. 5.7)" },
        bodyHtml: {
          uz: "<p><strong>Misol:</strong> 1000 ta chekdan 400 tasida <em>Choy</em>, 300 tasida <em>Shakar</em>, 240 tasida ikkalasi bor. Unda: $\\text{Sup}=240/1000=0.24$, $\\text{Conf}(\\text{Choy}\\to\\text{Shakar})=240/400=0.60$, $\\text{Lift}=0.60/0.30=2.0$ (kuchli ijobiy bog'liqlik!).</p><p><strong>Simpson Paradoksi:</strong> Umumiylashtirilgan jadvalda qoida ijobiy chiqib, yashirin o'zgaruvchi (masalan, Mijoz guruhi: Talabalar vs Ishchilar) bo'yicha ajratilganda qoida teskarisiga o'zgarib qolishi mumkin — shu sabab stratifikatsiya muhim!</p>",
          en: "<p><strong>Example:</strong> 1000 receipts (400 Tea, 300 Sugar, 240 both) → $\\text{Sup}=0.24$, $\\text{Conf}=0.60$, $\\text{Lift}=2.0$. Beware <strong>Simpson's Paradox</strong> (Tan Ch. 5.7), where pooling hidden subgroups reverses rule direction!</p>"
        }
      },
      {
        heading: { uz: "9.4. Amaliy Qo'llanilishi", en: "9.4. Practical Applications" },
        bodyHtml: {
          uz: "<ul><li><strong>Chakana savdo:</strong> do'kon javonlarini joylashtirish, chegirmali juftliklar (bundles).</li><li><strong>E-commerce:</strong> \"Mijozlar ko'pincha birga xarid qiladi\" tavsiyalari.</li><li><strong>Kiberxavfsizlik &amp; Tibbiyot:</strong> birga uchraydigan tarmoq signallari yoki dorilarning nojo'ya ta'siri.</li></ul>",
          en: "<ul><li><strong>Retail:</strong> shelf placement &amp; cross-selling bundles.</li><li><strong>E-commerce:</strong> \"Frequently bought together\" widgets.</li><li><strong>Healthcare:</strong> adverse drug-interaction patterns.</li></ul>"
        }
      }
    ],
    slides: [
      { title: { uz: "M9: Assotsiativ qoidalar va Savat tahlili", en: "M9: Association Rules & Market Basket" }, subtitle: { uz: "Tan Darsligi 5.1 & 5.7 · MITQ2506 · 80 daqiqa", en: "Tan Ch. 5.1 & 5.7 · MITQ2506 · 80 min" }, points: { uz: ["Savat tahlili va Ikkilik matritsa", "Qoidalar fazosining kattaligi: 3^d - 2^(d+1) + 1", "Support, Confidence, Lift, Conviction", "Confidence Tuzog'i va Simpson Paradoksi", "Amaliy qo'llanilishi va Lab 9"], en: ["Market Basket binary representation", "Exponential rule space 3^d - 2^(d+1) + 1", "Support, Confidence, Lift & Conviction", "Confidence Trap & Simpson's Paradox", "Business applications & Lab 9"] } },
      { title: { uz: "Xaridor Savatchasi Tahlili Nima?", en: "What is Market Basket Analysis?" }, points: { uz: ["Har bir chek (tranzaksiya) — savatdagi mahsulotlar to'plami", "Maqsad: {Antecedent X} → {Consequent Y} bog'liqligini topish (X ∩ Y = ∅)", "Muhim: X → Y sababiyat (causality) emas, birga uchrash (co-occurrence)!"], en: ["Uncovers {X} → {Y} co-occurrence patterns in transaction logs", "Disjoint itemsets (X ∩ Y = ∅); measures correlation, not causality"] } },
      { title: { uz: "Nega Brute-Force Imkonsiz? (Tan 5.1)", en: "Exponential Rule Search Space" }, latex: "R = 3^d - 2^{d+1} + 1", points: { uz: ["d = 6 ta mahsulot uchun ham allaqachon R = 602 ta qoida mavjud!", "d = 1000 mahsulotli supermarketda kombinatsiyalar koinotdagi atomlardan ko'p", "Yechim: min_support va min_confidence bilan kesish"], en: ["Even d=6 items produce 602 candidate rules!", "Requires pruning via min_support & min_confidence"] } },
      { title: { uz: "Support va Confidence Formulalari", en: "Support & Confidence" }, latex: "\\text{Sup}(X\\cup Y)=\\frac{\\text{count}(X\\cup Y)}{N}, \\qquad \\text{Conf}(X\\to Y)=\\frac{\\text{Sup}(X\\cup Y)}{\\text{Sup}(X)}", points: { uz: ["Support: ikkala to'plam jami cheklarning necha foizida birga keladi", "Confidence: X olinganda Y ham olinish shartli ehtimoli P(Y|X)"], en: ["Support = overall joint frequency; Confidence = P(Y|X)"] } },
      { title: { uz: "Lift (Ko'tarish) va Conviction", en: "Lift (Interest) & Conviction" }, latex: "\\text{Lift}(X\\to Y)=\\frac{\\text{Conf}(X\\to Y)}{\\text{Sup}(Y)}, \\qquad \\text{Conviction}=\\frac{1-\\text{Sup}(Y)}{1-\\text{Conf}(X\\to Y)}", points: { uz: ["Lift > 1: ijobiy bog'liqlik (birga olish ehtimoli yuqori)", "Lift = 1: X va Y mutlaqo mustaqil", "Lift < 1: salbiy bog'liqlik (birini olsa ikkinchisini olmaydi)"], en: ["Lift > 1 positive; = 1 independent; < 1 negative association"] } },
      { title: { uz: "Interaktiv Confidence Tuzog'i va Lift Demo", en: "Interactive Confidence Trap & Lift Explorer" }, widget: 'market-basket-sim' },
      { title: { uz: "Talabalarga savol (Confidence Tuzog'i)", en: "Class Discussion: Confidence Trap" }, discussion: { q: { uz: "Do'konda 90% mijoz Non oladi. {Kofe}→{Non} qoidasining Confidence = 90% chiqdi. Bu qoida asosida Kofe yoniga Non qo'yish foydalimi?", en: "90% of shoppers buy Bread. Confidence(Coffee→Bread) = 90%. Does Coffee actually drive Bread purchases?" }, a: { uz: "YO'Q! <code>Lift = 0.90 / 0.90 = 1.0</code>. Kofe ichmaydiganlar ham baribir 90% holatda Non olyapti — ular mustaqil!", en: "NO! <code>Lift = 0.90 / 0.90 = 1.0</code> — Coffee and Bread are statistically independent!" } } },
      { title: { uz: "Qo'lda Hisoblash Misoli (N = 1000)", en: "Worked Example (N = 1000)" }, points: { uz: ["Choy = 400, Shakar = 300, Choy va Shakar = 240", "Support = 240 / 1000 = 0.24 (24%)", "Confidence(Choy → Shakar) = 240 / 400 = 0.60 (60%)", "Lift = 0.60 / (300/1000) = 0.60 / 0.30 = 2.0 (kuchli ijobiy!)"], en: ["Sup=0.24, Conf=0.60, Sup(Sugar)=0.30 → Lift = 2.0"] } },
      { title: { uz: "Simpson Paradoksi (Tan 5.7)", en: "Simpson's Paradox in Association Rules" }, points: { uz: ["Yashirin o'zgaruvchi (masalan, Yosh guruhi yoki Filial) e'tibordan chetda qolsa, umumiy jadvalda Lift > 1 chiqqan qoida har bir alohida guruhda Lift < 1 chiqishi mumkin!", "Yechim: Segmentlar (guruhlar) kesimida alohida tekshirish"], en: ["A positive association in pooled data can reverse within every stratified subgroup!"] } },
      { title: { uz: "Savat Tahlili Biznes Strategiyalari", en: "Business Actionability" }, points: { uz: ["Yuqori Lift juftliklar: ularni yonma-yon qo'ying yoki birga chegirma (Bundle) bering", "Yoki aksincha: do'konning ikki chetiga qo'yib xaridorni hamma javonlardan o'tkazing!"], en: ["Cross-sell bundles OR strategic opposite-aisle placement to boost store traffic"] } }
    ],
    lab: {
      title: { uz: "L9: Xaridor savatchasi ma'lumotlarida assotsiativ qoidalarni aniqlash", en: "L9: Market Basket Encoding & Association Metrics" },
      objective: { uz: "Cheklar ro'yxatini TransactionEncoder bilan jadvalga o'tkazish, Support/Confidence/Lift/Conviction hisoblash va Confidence tuzog'ini amalda ko'rish.", en: "Encode retail baskets, compute Support/Confidence/Lift/Conviction, and filter spurious rules." },
      steps: [
        {
          title: { uz: "Cheklar jadvalini One-Hot Matritsaga o'tkazish", en: "Encode Retail Baskets" },
          desc: { uz: "12 ta chekdan boolean matritsa tuzing va har bir tovar Support ini chiqaring.", en: "Convert baskets to boolean matrix and inspect item supports." },
          code: `import pandas as pd
from mlxtend.preprocessing import TransactionEncoder

baskets = [
    ['Non','Sut','Tuxum'], ['Non','Sut'], ['Non','Tuxum'], ['Sut','Tuxum'],
    ['Non','Sut','Tuxum'], ['Non','Sut','Kofe'], ['Non','Kofe'], ['Non','Choy','Shakar'],
    ['Choy','Shakar','Non'], ['Choy','Shakar'], ['Non','Meva'], ['Non','Sut','Meva']
]
te = TransactionEncoder()
df = pd.DataFrame(te.fit_transform(baskets), columns=te.columns_)
print("Individual Item Support:\\n", df.mean().sort_values(ascending=False).round(3))`
        },
        {
          title: { uz: "Support, Confidence va Lift ni Qo'lda Tekshirish", en: "Verify Support, Confidence & Lift" },
          desc: { uz: "{Choy}→{Shakar} va {Kofe}→{Non} qoidalarini hisoblang.", en: "Compare {Tea}→{Sugar} vs {Coffee}→{Bread}." },
          code: `def rule_metrics(a, b):
    sup_a = df[a].mean()
    sup_b = df[b].mean()
    sup_ab = (df[a] & df[b]).mean()
    conf = sup_ab / sup_a
    lift = conf / sup_b
    print(f"{{{a}}} -> {{{b}}}: Sup={sup_ab:.2f}, Conf={conf:.2f}, Lift={lift:.2f}")

rule_metrics('Choy', 'Shakar')
rule_metrics('Kofe', 'Non')`
        },
        {
          title: { uz: "Jaccard va Cosine Qoida Metrikalari", en: "Rank All Item Pairs by Lift" },
          desc: { uz: "mlxtend orqali barcha juft qoidalarni Lift bo'yicha tartiblang.", en: "Generate rules and rank by Lift descending." },
          code: `from mlxtend.frequent_patterns import apriori, association_rules
freq = apriori(df, min_support=0.15, use_colnames=True)
rules = association_rules(freq, metric="confidence", min_threshold=0.5)
print(rules[['antecedents','consequents','support','confidence','lift','conviction']].sort_values('lift', ascending=False).head(6))`
        }
      ],
      variants: {
        uz: [
          "1-variant: Non ni deyarli hamma olgani uchun {Kofe}→{Non} da Lift nechaga teng chiqishini izohlang.",
          "2-variant: Lift > 1.2 va Support ≥ 0.15 shartiga mos qoidalarni filtrlang.",
          "3-variant: O'zingiz 10 ta restoran buyurtmasi tuzib Support/Confidence/Lift hisoblang."
        ],
        en: [
          "Variant 1: Explain why {Kofe}→{Non} has high Confidence yet Lift ≈ 1.",
          "Variant 2: Filter rules satisfying Lift > 1.2 and Support ≥ 0.15.",
          "Variant 3: Create 10 restaurant orders and compute top Lift rules."
        ]
      }
    },
    glossary: [
      { uz: "Support", en: "Support", defUz: "To'plamning jami tranzaksiyalardagi ulushi", defEn: "Proportion of baskets containing itemset" },
      { uz: "Confidence", en: "Confidence", defUz: "X bor cheklarda Y ham uchrash ehtimoli P(Y|X)", defEn: "Conditional probability P(Y|X)" },
      { uz: "Lift", en: "Lift", defUz: "Conf(X→Y)/Sup(Y): >1 ijobiy, =1 mustaqil, <1 salbiy", defEn: "Ratio measuring true statistical lift above independence" },
      { uz: "Simpson paradoksi", en: "Simpson's Paradox", defUz: "Umumiy guruhdagi bog'liqlik quyi guruhlarda teskari bo'lishi", defEn: "Trend reversal when data is stratified by a confounder" }
    ],
    quiz: [
      { q: { uz: "Confidence(A → B) = 0.8 nimani anglatadi?", en: "What does Confidence(A → B) = 0.8 mean?" }, options: [{ label: 'A', uz: "A mavjud cheklarning 80% da B ham bor", en: "80% of baskets with A also contain B" }, { label: 'B', uz: "B mavjud cheklarning 80% da A ham bor", en: "80% of baskets with B also contain A" }, { label: 'C', uz: "Barcha cheklarning 80% da A va B birga", en: "80% of all total baskets include both" }, { label: 'D', uz: "A va B o'rtasidagi Lift qiymati 0.8 ga teng", en: "Lift ratio between A and B equals 0.8" }], answer: 'A', explanation: { uz: "Confidence = P(B|A) shartli ehtimoldir.", en: "Confidence equals P(B|A)." } },
      { q: { uz: "Lift = 1 bo'lsa bu nimani bildiradi?", en: "What does Lift = 1 signify?" }, options: [{ label: 'A', uz: "Ikki mahsulot orasida kuchli ijobiy bog'liqlik bor", en: "A and B exhibit strong positive dependency" }, { label: 'B', uz: "A va B statistik jihatdan o'zaro mustaqil (tasodifiy)", en: "A and B are statistically independent events" }, { label: 'C', uz: "Bir mahsulot boshqasining o'rnini bosuvchi salbiy bog'liq", en: "A and B act as mutually competing substitutes" }, { label: 'D', uz: "Qoida tranzaksiyalar bazasida hech qachon uchramaydi", en: "Transaction rule support equals zero percent" }], answer: 'B', explanation: { uz: "Lift=1 bo'lganda Conf(A→B) = Sup(B), ya'ni bog'liqlik yo'q.", en: "Lift=1 indicates zero statistical dependence." } },
      { q: { uz: "1000 chekda Choy=400, Shakar=300, Ikkalasi=240 bo'lsa, Lift(Choy→Shakar) qancha?", en: "With N=1000, Tea=400, Sugar=300, Both=240, what is Lift(Tea→Sugar)?" }, options: [{ label: 'A', uz: "0.60", en: "0.60" }, { label: 'B', uz: "0.24", en: "0.24" }, { label: 'C', uz: "2.00", en: "2.00" }, { label: 'D', uz: "1.33", en: "1.33" }], answer: 'C', explanation: { uz: "Conf = 240/400 = 0.60; Sup(Shakar) = 0.30; Lift = 0.60/0.30 = 2.0.", en: "0.60 / 0.30 = 2.0." } },
      { q: { uz: "Umumiy jadvalda ijobiy chiqqan qoida segmentlarga ajratilganda teskarisiga o'zgarishi nima deyiladi?", en: "When a pooled association reverses inside stratified subgroups, it is called?" }, options: [{ label: 'A', uz: "Simpson paradoksi", en: "Simpson's Paradox" }, { label: 'B', uz: "Model Overfitting", en: "Model Overfitting" }, { label: 'C', uz: "Masking muammosi", en: "Anomaly Masking" }, { label: 'D', uz: "Concept Drift siljishi", en: "Concept Drift shift" }], answer: 'A', explanation: { uz: "Tan 5.7-bo'lim: yashirin o'zgaruvchi tufayli yo'nalish teskarilanadi.", en: "Simpson's Paradox from confounding variables." } },
      { q: { uz: "d ta mahsulot uchun mumkin bo'lgan jami qoidalar soni qaysi formula bilan topiladi?", en: "How many candidate rules exist for d unique items?" }, options: [{ label: 'A', uz: "3^d - 2^(d+1) + 1", en: "3^d - 2^(d+1) + 1" }, { label: 'B', uz: "2^d + d² - 1", en: "2^d + d² - 1" }, { label: 'C', uz: "d × (d - 1) / 2", en: "d × (d - 1) / 2" }, { label: 'D', uz: "d × log₂(d) + 1", en: "d × log₂(d) + 1" }], answer: 'A', explanation: { uz: "Har mahsulot chapda, o'ngda yoki yo'q bo'lishi mumkin — jami 3^d - 2^(d+1) + 1.", en: "Each item can be in X, Y, or neither." } }
    ],
    matching: [
      { left: { uz: "Lift > 1", en: "Lift > 1" }, right: { uz: "Ijobiy bog'liqlik (birga ko'p olinadi)", en: "Positive correlation beyond chance" } },
      { left: { uz: "Lift = 1", en: "Lift = 1" }, right: { uz: "Elementlar mustaqil (Confidence tuzog'i)", en: "Independent items (Confidence trap)" } },
      { left: { uz: "Lift < 1", en: "Lift < 1" }, right: { uz: "Salbiy bog'liqlik (o'rinbosar tovarlar)", en: "Negative correlation (substitutes)" } },
      { left: { uz: "Simpson paradoksi", en: "Simpson's Paradox" }, right: { uz: "Yashirin guruh qoida yo'nalishini teskari qiladi", en: "Hidden variable reverses rule sign" } }
    ],
    fillGap: [
      { text: { uz: "Confidence(X→Y) = Support(X∪Y) / Support(___).", en: "Confidence(X→Y) equals Support(X∪Y) / Support(___)." }, answer: "X" },
      { text: { uz: "Assotsiativ qoidada chap va o'ng to'plamlar kesishmasligi kerak (X ∩ Y = ___).", en: "In X → Y, antecedent and consequent must be disjoint (X ∩ Y = ___)." }, answer: ["∅", "bo'sh", "empty"] },
      { text: { uz: "Lift qiymati ___ dan katta bo'lsa, A va B birga uchrashi tasodifiy emas.", en: "When Lift is greater than ___, A and B occur together more often than by chance." }, answer: "1" }
    ]
  }
);
