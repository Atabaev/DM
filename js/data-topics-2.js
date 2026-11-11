window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== TOPIC 4 ====================
  {
    id: 4,
    slug: '04-classification-bayes',
    hours: 2,
    labs: 1,
    keywords: ['Naive Bayes', 'Bayes Theorem', 'Laplace Smoothing', 'k-NN', 'Euclidean', 'Manhattan', 'Minkowski'],
    title: {
      uz: "Naive Bayes va k-NN algoritmlari",
      en: "Naive Bayes & k-Nearest Neighbors"
    },
    description: {
      uz: "Bayes teoremasi, shartli mustaqillik, Laplace smoothing, Gaussian/Multinomial/Bernoulli NB, k-NN masofa metrikalari va Curse of Dimensionality.",
      en: "Bayes' Theorem, conditional independence, Laplace smoothing, NB variants, k-NN distance metrics, and k-tuning."
    },
    sections: [
      {
        heading: { uz: "4.1. Bayes teoremasi va Ehtimoliy Tasniflash", en: "4.1. Bayes' Theorem & Probabilistic Classification" },
        bodyHtml: {
          uz: "<p><strong>Naive Bayes</strong> — har bir obyektning sinflarga tegishlilik ehtimolini hisoblaydigan generativ model. Bayes teoremasiga ko'ra, $X = (x_1, x_2, \\dots, x_n)$ xususiyatlar berilganda $C_k$ sinfning posterior ehtimoli:</p><p>Bu yerda $P(C_k)$ — <strong>Prior</strong> (sinfning boshlang'ich ulushi), $P(X|C_k)$ — <strong>Likelihood</strong>, $P(C_k|X)$ — <strong>Posterior</strong>. Maxraj $P(X)$ barcha sinflar uchun bir xil bo'lgani uchun faqat suratni maksimallashtirish (MAP — Maximum A Posteriori) yetarli.</p>",
          en: "<p><strong>Naive Bayes</strong> computes class membership probabilities via Bayes' Theorem. Since $P(X)$ is constant across classes, classification selects the class maximizing $P(C_k)\\prod_i P(x_i|C_k)$ (MAP rule).</p>"
        },
        latex: "P(C_k \\mid X) = \\frac{P(X \\mid C_k)\\,P(C_k)}{P(X)} \\propto P(C_k) \\prod_{i=1}^{n} P(x_i \\mid C_k)"
      },
      {
        heading: { uz: "4.2. \"Naive\" taxmini, Zero-Frequency muammosi va Laplace Smoothing", en: "4.2. The Naive Assumption & Laplace Smoothing" },
        bodyHtml: {
          uz: "<p><strong>Nega \"Naive\" (Soddadil)?</strong> Chunki model sinf ichida barcha atributlarni o'zaro mustaqil deb faraz qiladi (masalan, spam xatda \"bepul\" va \"yutuq\" so'zlari bog'liqsiz deb olinadi). Amalda bu taxmin buzilsa ham, sinf reytingi ko'pincha to'g'ri saqlanadi!</p><p><strong>Nol ehtimol tuzog'i:</strong> Agar o'quv to'plamida Spam xatlarda biror yangi so'z (masalan, <code>\"kripto\"</code>) umuman uchramagan bo'lsa, $P(\\text{\"kripto\"}|\\text{Spam}) = 0$ bo'lib butun ko'paytmani 0 ga aylantiradi! Buni <strong>Laplace (Add-One) Smoothing</strong> tuzatadi:</p>",
          en: "<p>If a test word never appeared in a training class, $P(x_i|C_k)=0$ wipes out the entire product! <strong>Laplace Smoothing</strong> adds $\\alpha=1$ pseudo-count to every word:</p>"
        },
        latex: "P(x_i \\mid C_k) = \\frac{\\text{count}(x_i, C_k) + \\alpha}{N_{C_k} + \\alpha \\cdot |V|}"
      },
      {
        heading: { uz: "4.3. Naive Bayes ning uch asosiy turi", en: "4.3. Three Variants of Naive Bayes" },
        table: {
          headers: { uz: ["Tur", "Ma'lumot turi", "Amaliy qo'llanilishi"], en: ["Variant", "Feature Type", "Typical Use Case"] },
          rows: {
            uz: [
              ["Gaussian NB", "Uzluksiz raqamli ($\\mu_k, \\sigma_k^2$)", "Tibbiy analizlar, sensor ko'rsatkichlari"],
              ["Multinomial NB", "Butun sonli chastota / TF-IDF", "Spam filtri, yangiliklar tasniflash"],
              ["Bernoulli NB", "Ikkilik (0/1 bor-yo'q)", "Qisqa SMS va kalit so'z bayroqlari"]
            ],
            en: [
              ["Gaussian NB", "Continuous numeric ($\\mu_k, \\sigma_k^2$)", "Medical biomarkers, Iris/Wine"],
              ["Multinomial NB", "Term frequencies / TF-IDF", "Spam filtering, document routing"],
              ["Bernoulli NB", "Binary presence (0/1)", "Short texts, binary attribute flags"]
            ]
          }
        }
      },
      {
        heading: { uz: "4.4. k-NN (k-Eng Yaqin Qo'shni) va Masofa Metrikalari", en: "4.4. k-Nearest Neighbors & Distance Metrics" },
        bodyHtml: {
          uz: "<p><strong>k-NN</strong> — parametrsiz va <strong>Lazy Learner</strong> algoritm: o'qitish davrida hech qanday formula tuzmaydi, faqat ma'lumotni eslab qoladi. Yangi nuqta kelganda $k$ ta eng yaqin qo'shni topilib ko'pchilik ovozi (yoki masofaga teskari vaznli ovoz $w = 1/d$) bilan sinf belgilanadi.</p>",
          en: "<p><strong>k-NN</strong> is a non-parametric lazy learner deferring all work to inference time. It finds the $k$ nearest training samples using Minkowski family distances (Euclidean $p=2$, Manhattan $p=1$, or Cosine for sparse text).</p>"
        },
        latex: "d_{\\text{Euclidean}} = \\sqrt{\\sum_{i=1}^n (x_i - y_i)^2} \\qquad d_{\\text{Manhattan}} = \\sum_{i=1}^n |x_i - y_i|",
        widget: 'knn-demo'
      },
      {
        heading: { uz: "4.5. k qiymati, Bias-Variance muvozanati va Normallashtirish", en: "4.5. Choosing k, Bias-Variance & Scaling" },
        bodyHtml: {
          uz: "<ul><li><strong>Kichik k (k=1):</strong> murakkab egri chegara, past bias, ammo shovqinga o'ta sezgir (High Variance / Overfitting).</li><li><strong>Katta k (k=51):</strong> silliq chegara, shovqinga chidamli, lekin kichik klasterlarni yutib yuboradi (High Bias / Underfitting).</li><li><strong>Amaliy qoida:</strong> ikkilik sinflarda durang chiqmasligi uchun toq son tanlang ($k \\approx \\sqrt{n}$ atrofida CV bilan tekshiring) va ALBATTA <code>StandardScaler</code> qo'llang!</li></ul>",
          en: "<ul><li><strong>Small k (k=1):</strong> Low bias, high variance (fits noise).</li><li><strong>Large k:</strong> Smooth boundaries, high bias (underfitting).</li><li><strong>Rule of thumb:</strong> Pick odd $k$ via Cross-Validation around $\\sqrt{n}$ and ALWAYS scale features first!</li></ul>"
        }
      }
    ],
    slides: [
      { title: { uz: "4-mavzu: Naive Bayes va k-NN", en: "Topic 4: Naive Bayes & k-NN" }, subtitle: { uz: "Ehtimollik va masofaga asoslangan tasniflash (80 daqiqa)", en: "Probabilistic & Instance-Based Classification (80 min)" }, points: { uz: ["Bayes teoremasi: Prior, Likelihood, Posterior", "Mustaqillik taxmini va Laplace Smoothing", "Gaussian, Multinomial va Bernoulli NB", "k-NN algoritmi va Evklid/Manhattan masofalari", "k tanlash, Curse of Dimensionality va Lab 4"], en: ["Bayes' Theorem & MAP decision rule", "Conditional independence & Laplace smoothing", "Gaussian, Multinomial & Bernoulli NB", "k-NN & Minkowski distance metrics", "Choosing k, scaling & Lab 4"] } },
      { title: { uz: "Bayes Teoremasi", en: "Bayes' Theorem" }, latex: "P(C_k \\mid X) = \\frac{P(X \\mid C_k)\\,P(C_k)}{P(X)}", points: { uz: ["P(C_k): Prior — oldindan sinf ulushi (masalan, spam 30%)", "P(X|C_k): Likelihood — shu sinfda X belgilarining uchrash ehtimoli", "P(C_k|X): Posterior — xususiyatlarni ko'rgandan keyingi yakuniy ehtimol"], en: ["Prior P(C_k): baseline class probability", "Likelihood P(X|C_k): feature probability inside class C_k", "Posterior P(C_k|X): updated belief after seeing X"] } },
      { title: { uz: "Nega \"Naive\" (Soddadil) deyiladi?", en: "Why 'Naive'?" }, latex: "P(x_1, x_2, \\dots, x_n \\mid C) = \\prod_{i=1}^n P(x_i \\mid C)", points: { uz: ["Barcha atributlar sinf berilganda o'zaro mustaqil deb olinadi", "Bu tufayli millionlab kombinatsiya o'rniga faqat n ta 1D ehtimol hisoblanadi", "Hisoblash murakkabligi O(n·d) — juda tez!"], en: ["Assumes features are conditionally independent given class C", "Reduces exponential joint table to n simple 1D probabilities", "Ultra-fast linear complexity O(n·d)"] } },
      { title: { uz: "Qo'lda misol: Spam filtri", en: "Worked Example: Spam Filter" }, points: { uz: ["100 ta xat: 30 ta Spam (P=0.3), 70 ta Oddiy (P=0.7)", "\"bepul\" so'zi: Spamning 21/30=0.70 qismida, Oddiyning 7/70=0.10 qismida", "\"sovg'a\" so'zi: Spamda 15/30=0.50, Oddiyda 7/70=0.10", "Score(Spam) = 0.3 × 0.70 × 0.50 = 0.105", "Score(Oddiy) = 0.7 × 0.10 × 0.10 = 0.007 → SPAM!"], en: ["100 emails: 30 Spam (0.3), 70 Ham (0.7)", "P('free'|Spam)=0.70 vs P('free'|Ham)=0.10", "P('gift'|Spam)=0.50 vs P('gift'|Ham)=0.10", "Spam score: 0.3×0.7×0.5 = 0.105 >> Ham: 0.7×0.1×0.1 = 0.007"] } },
      { title: { uz: "Zero-Frequency muammosi va Laplace Smoothing", en: "Zero-Frequency Problem & Laplace Smoothing" }, latex: "P(w \\mid C) = \\frac{\\text{count}(w, C) + \\alpha}{N_C + \\alpha |V|}, \\quad \\alpha = 1", points: { uz: ["Agar bitta so'z Spam da 0 marta uchrasa, butun ko'paytma 0 ga teng bo'ladi!", "Laplace smoothing (α=1) har bir so'zga +1 qo'shib 0 bo'lishini oldini oladi"], en: ["One unseen word multiplies the whole posterior to 0!", "Laplace add-1 smoothing prevents zero probabilities"] } },
      { title: { uz: "Naive Bayes Turlari", en: "Naive Bayes Variants" }, table: { headers: { uz: ["Tur", "Belgi turi", "Misol"], en: ["Variant", "Input", "Use Case"] }, rows: { uz: [["GaussianNB", "Uzluksiz son", "Tibbiy ko'rsatkich"], ["MultinomialNB", "So'z soni / TF-IDF", "Matn / Spam"], ["BernoulliNB", "0 / 1 bayroq", "Qisqa matn"]], en: [["GaussianNB", "Continuous", "Biomarkers"], ["MultinomialNB", "Counts / TF-IDF", "Text / Spam"], ["BernoulliNB", "Binary 0/1", "Short SMS"]] } } },
      { title: { uz: "k-NN (k-Eng Yaqin Qo'shni) G'oyasi", en: "k-Nearest Neighbors Intuition" }, points: { uz: ["\"Do'sting kimligini aytsang, sening kimligingni aytaman\"", "Lazy Learner: o'qitish vaqti ≈ 0, faqat datasetni xotirada saqlaydi", "Yangi nuqta kelganda eng yaqin k ta qo'shni ovoz beradi"], en: ["\"Tell me who your k neighbors are, and I'll predict your class\"", "Lazy Learner: zero training cost, stores dataset in RAM", "Classification by majority vote (or 1/d distance-weighted vote)"] } },
      { title: { uz: "Masofa Metrikalari", en: "Distance Metrics in k-NN" }, latex: "d_2 = \\sqrt{\\sum (x_i-y_i)^2}, \\quad d_1 = \\sum |x_i-y_i|, \\quad \\cos(\\theta)=\\frac{x\\cdot y}{\\|x\\|\\|y\\|}", points: { uz: ["Evklid (L2): uzluksiz fazoda eng keng tarqalgan", "Manhattan (L1): shahar ko'chalari bo'ylab yoki yuqori o'lchamda chidamliroq", "Cosine similarity: matn vektorlari uchun ideal"], en: ["Euclidean (L2): standard geometric distance", "Manhattan (L1): grid distance, better in high dimensions", "Cosine similarity: ideal for TF-IDF text vectors"] } },
      { title: { uz: "Interaktiv k-NN Lab: Grafikni bosing va k ni o'zgartiring!", en: "Interactive k-NN Demo: Click & Tune k" }, widget: 'knn-demo' },
      { title: { uz: "k qiymatining Bias-Variance ga ta'siri", en: "Effect of k on Decision Boundary" }, points: { uz: ["k = 1: o'quv aniqlik 100%, lekin shovqinli nuqta chegarani buzadi (Overfitting)", "k = N: hamma nuqtani ko'pchilik sinfiga berib qo'yadi (Underfitting)", "Optimal k: 5-fold Cross-Validation grafigi orqali topiladi"], en: ["k = 1: jagged boundary memorizing noise (Overfitting)", "k = N: predicts majority class everywhere (Underfitting)", "Select optimal odd k via Cross-Validation"] } },
      { title: { uz: "Talabalarga savol (k-NN Scaling)", en: "Class Discussion: Unscaled Features" }, discussion: { q: { uz: "Mijozlar jadvalida Yosh (20–60) va Kredit_summasi (1,000,000–50,000,000) bor. StandardScaler qo'llamasdan k-NN ishlatsak, natija nimaga bog'liq bo'lib qoladi?", en: "A dataset has Age (20–60) and LoanAmount (1,000–50,000). If we run k-NN without StandardScaler, what happens?" }, a: { uz: "Masofa deyarli 100% Kredit_summasiga bog'liq bo'lib qoladi; Yosh (farqi max 40) millionlar yonida nolga teng ta'sir ko'rsatadi!", en: "LoanAmount completely dominates Euclidean distance; Age differences (max 40) become numerically invisible!" } } },
      { title: { uz: "k-NN Afzalliklari va Cheklovlari", en: "k-NN Pros & Cons" }, table: { headers: { uz: ["Afzallik", "Kamchilik"], en: ["Strengths", "Limitations"] }, rows: { uz: [["Sodda, nazariy taxminsiz", "Bashorat vaqti sekin O(n·d)"], ["Chiziqsiz chegaralar quradi", "Katta xotira talab qiladi"], ["Yangi ma'lumot qo'shish oson", "Curse of Dimensionality ga sezgir"]], en: [["Simple, non-parametric", "Slow inference O(n·d)"], ["Arbitrary boundaries", "High memory footprint"], ["Instant incremental updates", "Sensitive to irrelevant features"]] } } },
      { title: { uz: "Naive Bayes vs k-NN: Qachon qaysi?", en: "Naive Bayes vs k-NN: When to Use Which?" }, points: { uz: ["Katta matn / real-time tezkor bazaviy model → Naive Bayes", "Kichik/o'rta toza raqamli jadval, chiziqsiz chegara → Scaled k-NN", "Katta ma'lumotda k-NN ni tezlashtirish: KD-Tree, Ball-Tree yoki FAISS (ANN)"], en: ["High-dim sparse text / ultra-fast baseline → Naive Bayes", "Low/medium-dim scaled numeric features → k-NN", "Speeding up k-NN: KD-Tree, Ball-Tree, or Approximate NN (FAISS)"] } }
    ],
    lab: {
      title: { uz: "L4: Wine va Iris datasetlarida Naive Bayes vs Scaled k-NN", en: "L4: Naive Bayes vs Scaled k-NN Pipeline" },
      objective: { uz: "GaussianNB va k-NN modellarini solishtirish, normallashtirish ta'sirini o'lchash va Cross-Validation bilan optimal k topish.", en: "Compare GaussianNB and k-NN, quantify scaling impact, and tune k via CV." },
      steps: [
        {
          title: { uz: "Normallashtirishsiz vs Normallashtirishli k-NN", en: "Impact of Feature Scaling on k-NN" },
          desc: { uz: "Wine datasetida scaling dan oldin va keyingi aniqlik farqini ko'ring.", en: "Compare unscaled vs StandardScaler k-NN on Wine." },
          code: `from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

wine = load_wine()
X_tr, X_te, y_tr, y_te = train_test_split(wine.data, wine.target, test_size=0.3, random_state=42)
raw_acc = KNeighborsClassifier(5).fit(X_tr, y_tr).score(X_te, y_te)
sc = StandardScaler()
scaled_acc = KNeighborsClassifier(5).fit(sc.fit_transform(X_tr), y_tr).score(sc.transform(X_te), y_te)
print(f"Unscaled k-NN: {raw_acc:.3f} | Scaled k-NN: {scaled_acc:.3f}")`
        },
        {
          title: { uz: "GaussianNB vs Optimal k-NN (Pipeline + CV)", en: "GaussianNB & Optimal k Tuning via Pipeline" },
          desc: { uz: "Data leakage siz Pipeline bilan k=1..21 ni tekshiring.", en: "Sweep k=1..21 inside a leak-free Pipeline." },
          code: `from sklearn.naive_bayes import GaussianNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import cross_val_score
import numpy as np

nb_cv = cross_val_score(GaussianNB(), X_tr, y_tr, cv=5).mean()
cv_k = [cross_val_score(make_pipeline(StandardScaler(), KNeighborsClassifier(k)), X_tr, y_tr, cv=5).mean() for k in range(1, 22, 2)]
best_k = list(range(1, 22, 2))[int(np.argmax(cv_k))]
print(f"GaussianNB CV={nb_cv:.3f} | Best k={best_k} CV={max(cv_k):.3f}")`
        },
        {
          title: { uz: "Masofa metrikasi: Euclidean vs Manhattan", en: "Comparing Euclidean vs Manhattan & Weights" },
          desc: { uz: "p=1, p=2 va weights='distance' parametrlarini sinang.", en: "Test p=1 vs p=2 and distance weighting." },
          code: `for p, name in [(1, 'Manhattan'), (2, 'Euclidean')]:
    pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=best_k, p=p, weights='distance'))
    pipe.fit(X_tr, y_tr)
    print(f"{name:10s} Test Accuracy: {pipe.score(X_te, y_te):.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: Breast Cancer datasetida k=1..31 egri chizig'ini chizib optimal k ni toping.",
          "2-variant: weights='uniform' vs weights='distance' natijalarini solishtiring.",
          "3-variant: 20newsgroups yoki kichik matn to'plamida MultinomialNB(alpha=0.1, 1.0, 5.0) sinab ko'ring."
        ],
        en: [
          "Variant 1: Plot k=1..31 validation curve on Breast Cancer to locate optimal k.",
          "Variant 2: Compare weights='uniform' vs weights='distance'.",
          "Variant 3: Sweep Laplace alpha=[0.1, 1.0, 5.0] on MultinomialNB."
        ]
      }
    },
    glossary: [
      { uz: "Prior / Posterior", en: "Prior / Posterior", defUz: "Kuzatuvdan oldingi va keyingi sinf ehtimollari", defEn: "Class probability before and after observing features" },
      { uz: "Laplace Smoothing", en: "Laplace Smoothing", defUz: "Nol ehtimol muammosini +α qo'shib bartaraf etish", defEn: "Adding α pseudo-counts to avoid zero probabilities" },
      { uz: "Lazy Learner", en: "Lazy Learner", defUz: "O'qitish bosqichisiz bashorat paytida hisoblovchi model", defEn: "Instance-based model deferring work to query time" },
      { uz: "Manhattan masofasi", en: "Manhattan Distance", defUz: "Koordinata farqlari modullari yig'indisi (L1)", defEn: "Sum of absolute coordinate differences (L1 norm)" }
    ],
    quiz: [
      { q: { uz: "Naive Bayesda \"naive\" so'zi nimani anglatadi?", en: "Why is Naive Bayes called 'naive'?" }, options: [{ label: 'A', uz: "Sodda kod", en: "Simple code" }, { label: 'B', uz: "Atributlar sinf berilganda o'zaro mustaqil deb taxmin qilinadi", en: "Assumes conditional independence between features" }, { label: 'C', uz: "Faqat ikkilik", en: "Binary only" }, { label: 'D', uz: "O'qitish yo'q", en: "No training" }], answer: 'B', explanation: { uz: "Shartli mustaqillik taxmini hisoblashni keskin tezlashtiradi.", en: "Conditional independence simplifies joint likelihood into a product." } },
      { q: { uz: "Laplace Smoothing nima muammoni hal qiladi?", en: "What problem does Laplace Smoothing solve?" }, options: [{ label: 'A', uz: "Overfitting", en: "Overfitting" }, { label: 'B', uz: "O'quvda uchramagan so'z butun ehtimolni 0 ga tushirib qo'yishini", en: "Zero-frequency unseen words collapsing the probability to 0" }, { label: 'C', uz: "Scaling", en: "Scaling" }, { label: 'D', uz: "Outlierlarni", en: "Outliers" }], answer: 'B', explanation: { uz: "+α qo'shish nol ko'paytmadan saqlaydi.", en: "Adding α prevents zero probabilities for unseen attributes." } },
      { q: { uz: "k-NN da k=1 bo'lsa qanday xavf yuzaga keladi?", en: "What risk increases when k=1 in k-NN?" }, options: [{ label: 'A', uz: "Underfitting", en: "Underfitting" }, { label: 'B', uz: "Overfitting va shovqinga sezgirlik", en: "Overfitting & sensitivity to noise" }, { label: 'C', uz: "Sekin o'qitish", en: "Slow training" }, { label: 'D', uz: "Hech narsa", en: "None" }], answer: 'B', explanation: { uz: "k=1 bitta shovqin nuqtasiga qarab qaror chiqaradi.", en: "A single noisy training sample dictates the prediction." } },
      { q: { uz: "k-NN da normallashtirish nima uchun majburiy?", en: "Why is scaling mandatory for k-NN?" }, options: [{ label: 'A', uz: "Katta diapazonli ustunlar Evklid masofasini bosib ketmasligi uchun", en: "So large-scale features don't dominate Euclidean distance" }, { label: 'B', uz: "Prior topish uchun", en: "For priors" }, { label: 'C', uz: "Daraxtni kesish uchun", en: "For pruning" }, { label: 'D', uz: "Kodlash uchun", en: "For encoding" }], answer: 'A', explanation: { uz: "Masofa hisoblash barcha ustunlar bir shkalada bo'lishini talab qiladi.", en: "Unscaled large-magnitude attributes overwhelm distance calculations." } },
      { q: { uz: "k-NN ning katta datasetlardagi asosiy kamchiligi?", en: "Main bottleneck of k-NN on massive datasets?" }, options: [{ label: 'A', uz: "O'qitish sekin", en: "Slow training" }, { label: 'B', uz: "Bashorat payti sekin O(n·d) va ko'p RAM", en: "Slow inference O(n·d) and high RAM storage" }, { label: 'C', uz: "Ko'p sinf ishlamaydi", en: "No multi-class" }, { label: 'D', uz: "Chiziqsiz emas", en: "Linear only" }], answer: 'B', explanation: { uz: "Har yangi so'rov uchun barcha nuqtalarga masofa hisoblanadi.", en: "Lazy evaluation computes distances against stored samples at query time." } }
    ]
  },

  // ==================== TOPIC 5 ====================
  {
    id: 5,
    slug: '05-evaluation',
    hours: 2,
    labs: 1,
    keywords: ['Confusion Matrix', 'Precision', 'Recall', 'F1-score', 'ROC', 'AUC', 'PR Curve', 'Cross-Validation'],
    title: {
      uz: "Tasniflash modellarini baholash",
      en: "Model Evaluation Metrics & Validation"
    },
    description: {
      uz: "Accuracy paradoksi, Confusion Matrix, Precision/Recall/F1/F-beta, ROC-AUC vs PR-AUC, Threshold tuning va Stratified K-Fold CV.",
      en: "Accuracy paradox, Confusion Matrix, Precision/Recall/F1/F-beta, ROC-AUC vs PR-AUC, threshold tuning, and Stratified CV."
    },
    sections: [
      {
        heading: { uz: "5.1. Accuracy Paradoksi va Sinf Disbalansi", en: "5.1. The Accuracy Paradox & Class Imbalance" },
        bodyHtml: {
          uz: "<p>Bankda 10,000 ta tranzaksiyadan 9,900 tasi normal, 100 tasi firibgar (1%) bo'lsin. Agar model hech narsa o'rganmasdan hammasini \"Normal\" desa, uning aniqligi <strong>99% Accuracy</strong> chiqadi — lekin birorta firibgarni ushlay olmaydi! Shu sababli noteng sinflarda Accuracy chalg'itadi.</p>",
          en: "<p>With 99% legitimate and 1% fraudulent transactions, a trivial \"always legitimate\" predictor scores <strong>99% Accuracy</strong> while catching zero fraud! Imbalanced datasets demand deeper metrics.</p>"
        }
      },
      {
        heading: { uz: "5.2. Confusion Matrix va 1-tur / 2-tur Xatolar", en: "5.2. Confusion Matrix & Type I / Type II Errors" },
        table: {
          headers: { uz: ["", "Bashorat: Musbat (1)", "Bashorat: Manfiy (0)"], en: ["", "Predicted Positive (1)", "Predicted Negative (0)"] },
          rows: {
            uz: [
              ["Haqiqiy: Musbat (1)", "<strong>TP</strong> (To'g'ri topildi ✓)", "<strong>FN</strong> (2-tur xato: kasalni sog'lom dedik ✗)"],
              ["Haqiqiy: Manfiy (0)", "<strong>FP</strong> (1-tur xato: yolg'on signal ✗)", "<strong>TN</strong> (To'g'ri rad etildi ✓)"]
            ],
            en: [
              ["Actual Positive (1)", "<strong>TP</strong> (True Positive ✓)", "<strong>FN</strong> (Type II Error: missed positive ✗)"],
              ["Actual Negative (0)", "<strong>FP</strong> (Type I Error: false alarm ✗)", "<strong>TN</strong> (True Negative ✓)"]
            ]
          }
        }
      },
      {
        heading: { uz: "5.3. Precision, Recall, F1 va F-beta Score", en: "5.3. Precision, Recall, F1 & F-beta" },
        bodyHtml: {
          uz: "<p><strong>Precision</strong> yolg'on signallar narxini (FP), <strong>Recall</strong> esa o'tkazib yuborish narxini (FN) nazorat qiladi. Agar Recall Precision dan $\\beta$ marta muhimroq bo'lsa (masalan, saraton skriningida $\\beta=2$), <strong>$F_\\beta$-score</strong> qo'llaniladi.</p>",
          en: "<p><strong>Precision</strong> guards against False Positives; <strong>Recall</strong> guards against False Negatives. When Recall is $\\beta$ times more vital than Precision, use $F_\\beta$ (e.g., $F_2$).</p>"
        },
        latex: "P = \\frac{TP}{TP+FP}, \\quad R = \\frac{TP}{TP+FN}, \\quad F_1 = \\frac{2PR}{P+R}, \\quad F_\\beta = (1+\\beta^2)\\frac{P\\cdot R}{\\beta^2 P + R}",
        widget: 'roc-cm'
      },
      {
        heading: { uz: "5.4. ROC-AUC vs PR-AUC va Threshold Tuning", en: "5.4. ROC-AUC vs PR-AUC & Threshold Tuning" },
        bodyHtml: {
          uz: "<p>Ko'p modellar 0.5 chegarasi o'rniga ehtimollik qaytaradi. <strong>ROC egri chizig'i</strong> barcha thresholdlar uchun $TPR = Recall$ va $FPR = \\frac{FP}{FP+TN}$ bog'liqligini chizadi. Lekin 1:1000 kabi kuchli disbalansda TN juda katta bo'lgani uchun ROC haddan tashqari optimistik ko'rinishi mumkin — bunday holda <strong>Precision-Recall (PR-AUC)</strong> ishlatiladi!</p>",
          en: "<p><strong>ROC</strong> plots $TPR$ vs $FPR$ across thresholds (AUC=1.0 ideal, 0.5 random). Under extreme imbalance (1:1000), huge TN suppresses FPR making ROC overly optimistic—prefer <strong>PR-AUC</strong> there.</p>"
        }
      },
      {
        heading: { uz: "5.5. Stratified K-Fold Cross-Validation", en: "5.5. Stratified K-Fold Cross-Validation" },
        bodyHtml: {
          uz: "<p>Bitta tasodifiy Train/Test bo'linish omadli yoki omadsiz chiqishi mumkin. <strong>Stratified K-Fold CV</strong> (odatda $k=5$ yoki $10$) har bir qatlamda sinflar nisbatini bir xil saqlab, modelning o'rtacha natijasi va standart og'ishini ($\\mu \\pm \\sigma$) beradi.</p>",
          en: "<p><strong>Stratified K-Fold CV</strong> preserves class proportions inside every fold and reports mean $\\pm$ std across $k=5$ or $10$ runs.</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "5-mavzu: Modellarni baholash", en: "Topic 5: Model Evaluation Metrics" }, subtitle: { uz: "Confusion Matrix · Precision/Recall · ROC-AUC · CV (80 daqiqa)", en: "Metrics, Curves & Validation Strategies (80 min)" }, points: { uz: ["Accuracy paradoksi va Disbalans muammosi", "Confusion Matrix: TP, FP, FN, TN", "Precision, Recall, F1 va F-beta formulalari", "Threshold Tuning, ROC-AUC vs PR-AUC", "Stratified K-Fold CV va Laboratoriya"], en: ["Accuracy Paradox on imbalanced classes", "Confusion Matrix & Type I/II errors", "Precision, Recall, F1 & F-beta math", "Threshold Tuning, ROC-AUC vs PR-AUC", "Stratified K-Fold CV & Lab 5"] } },
      { title: { uz: "Accuracy Tuzog'i (99% = 0% Foydali!)", en: "The Accuracy Paradox" }, points: { uz: ["10,000 tranzaksiya: 9,900 Normal, 100 Firibgar", "Dummy model: hammaga 'Normal' deydi", "Accuracy = 99.0% — ajoyib ko'rinadi!", "Biroq firibgarlarni topish (Recall) = 0%!"], en: ["10,000 transactions: 9,900 Legit, 100 Fraud", "Dummy model always predicts 'Legit'", "Accuracy = 99.0%, yet Fraud Recall = 0%!"] } },
      { title: { uz: "Confusion Matrix (Chalkash Matrisa)", en: "Confusion Matrix Breakdown" }, table: { headers: { uz: ["", "Bashorat: 1", "Bashorat: 0"], en: ["", "Pred: 1", "Pred: 0"] }, rows: { uz: [["Haqiqiy: 1", "TP ✓", "FN (2-tur xato)"], ["Haqiqiy: 0", "FP (1-tur xato)", "TN ✓"]], en: [["Actual: 1", "TP ✓", "FN (Type II)"], ["Actual: 0", "FP (Type I)", "TN ✓"]] } } },
      { title: { uz: "Precision va Recall Ma'nosi", en: "Precision vs Recall Intuition" }, latex: "\\text{Precision} = \\frac{TP}{TP + FP}, \\qquad \\text{Recall} = \\frac{TP}{TP + FN}", points: { uz: ["Precision: 'Musbat deganlarimning nechta foizi rostdan musbat?'", "Recall: 'Haqiqiy musbatlarning nechta foizini tuta oldim?'", "Precision vs Recall o'zaro qarama-qarshi (Trade-off)!"], en: ["Precision: 'Of predicted positives, how many are truly positive?'", "Recall: 'Of actual positives, how many did we catch?'", "Raising threshold ↑ Precision, ↓ Recall (trade-off)"] } },
      { title: { uz: "Qaysi sohada qaysi ko'rsatkich muhim?", en: "Choosing the Right Metric by Domain" }, table: { headers: { uz: ["Vaziyat", "Xavfli xato", "Muhim metrika"], en: ["Scenario", "Costly Error", "Priority Metric"] }, rows: { uz: [["Spam filtri", "FP (muhim xat yo'qoladi)", "Precision"], ["Saraton skriningi", "FN (kasal o'tib ketadi)", "Recall / F2"], ["YouTube bolalar filtri", "FP (yomon video o'tadi)", "Precision"], ["Muvozanatli baho", "Ikkalasi ham", "F1-Score"]], en: [["Spam Filter", "FP (blocking vital email)", "Precision"], ["Cancer Screening", "FN (missing patient)", "Recall / F2"], ["Kids Video Filter", "FP (unsafe video shown)", "Precision"], ["Balanced Trade-off", "Both FP & FN", "F1-Score"]] } } },
      { title: { uz: "F1 va F-beta Score", en: "Harmonic Mean: F1 & F-beta" }, latex: "F_1 = \\frac{2\\cdot P\\cdot R}{P+R}, \\qquad F_\\beta = (1+\\beta^2)\\frac{P\\cdot R}{\\beta^2 P + R}", points: { uz: ["Oddiy o'rtacha (P+R)/2 aldaydi: P=1.0, R=0.02 → o'rtacha 0.51, lekin F1 = 0.039!", "Garmonik o'rtacha ikkalasi ham yuqori bo'lishini talab qiladi", "F2 (β=2): Recall ga 2x ko'proq vazn; F0.5 (β=0.5): Precision ga ko'proq vazn"], en: ["Arithmetic mean misleads (1.0 & 0.02 → 0.51, F1=0.039!)", "Harmonic mean demands both Precision and Recall be high", "F2 weights Recall higher; F0.5 weights Precision higher"] } },
      { title: { uz: "Interaktiv Lab: Threshold siljiting va TP/FP/FN/TN ni kuzating!", en: "Interactive Threshold & Confusion Matrix Explorer" }, widget: 'roc-cm' },
      { title: { uz: "Qo'lda hisoblash mashqi", en: "Class Exercise: Compute Metrics" }, discussion: { q: { uz: "Model natijasi: TP=40, FP=10, FN=20, TN=930. Precision, Recall va F1 ni hisoblang!", en: "Given TP=40, FP=10, FN=20, TN=930, calculate Precision, Recall, and F1!" }, a: { uz: "Precision = 40/(40+10) = <strong>0.80 (80%)</strong>; Recall = 40/(40+20) = <strong>0.667 (66.7%)</strong>; F1 = 2×0.8×0.667 / 1.467 ≈ <strong>0.727 (72.7%)</strong>.", en: "Precision = 40/50 = <strong>80%</strong>; Recall = 40/60 = <strong>66.7%</strong>; F1 ≈ <strong>72.7%</strong>." } } },
      { title: { uz: "ROC Egri Chizig'i va AUC", en: "ROC Curve & Area Under Curve (AUC)" }, latex: "TPR = \\frac{TP}{TP+FN} = \\text{Recall}, \\qquad FPR = \\frac{FP}{FP+TN}", points: { uz: ["ROC barcha threshold [0..1] lar uchun TPR (y) va FPR (x) ni chizadi", "AUC = 1.0: sinflarni 100% ideal ajratadi", "AUC = 0.5: tasodifiy tanga tashlash", "AUC < 0.5: model teskari ishlayapti"], en: ["Plots TPR vs FPR across every classification threshold", "AUC = 1.0: perfect ranking separation", "AUC = 0.5: random coin flip baseline", "AUC < 0.5: inverted predictions"] } },
      { title: { uz: "Kuchli disbalansda: ROC-AUC vs PR-AUC", en: "Extreme Imbalance: ROC-AUC vs PR-AUC" }, points: { uz: ["1,000,000 ta normal va 100 ta firibgar bo'lsa, TN ulkan bo'ladi", "FP=1000 bo'lsa ham FPR = 1000/1000000 = 0.001 (juda kichik ko'rinadi!)", "PR-AUC (Precision-Recall) esa Precision = 100/1100 = 9% ekanini darhol fosh qiladi"], en: ["When negatives vastly outnumber positives, huge TN keeps FPR tiny", "ROC looks artificially high even with many False Positives", "PR-AUC ignores TN and exposes poor Precision immediately"] } },
      { title: { uz: "Ko'p sinfli (Multi-class) o'rtachalash", en: "Multi-Class Averaging: Macro vs Weighted" }, points: { uz: ["Macro Average: har bir sinf F1 ini teng vaznda o'rtachalaydi (kam sinflar muhim)", "Weighted Average: sinflar soniga mutanosib vazn beradi", "Micro Average: umumiy TP/FP/FN yig'indisidan hisoblaydi"], en: ["Macro Avg: unweighted mean across classes (treats rare classes equally)", "Weighted Avg: weighted by class support", "Micro Avg: pools global TP, FP, FN counts"] } },
      { title: { uz: "K-Katlamli Cross-Validation (Stratified)", en: "Stratified K-Fold Cross-Validation" }, points: { uz: ["Dataset k ta teng qismga bo'linadi (odatda k=5 yoki k=10)", "Stratified: har qatlamda musbat/manfiy foizi asl dataset bilan bir xil", "k ta urinishning o'rtachasi ± standart og'ishi (masalan, 0.942 ± 0.015) hisobot qilinadi"], en: ["Splits data into k folds preserving class ratios (Stratified)", "Each fold acts once as validation while k-1 folds train", "Report mean ± std (e.g., 0.942 ± 0.015)"] } }
    ],
    lab: {
      title: { uz: "L5: Breast Cancer datasetida Confusion Matrix, ROC/PR va Stratified CV", en: "L5: Evaluation Metrics, ROC/PR & Stratified CV" },
      objective: { uz: "Threshold o'zgartirish, ROC-AUC va PR-AUC ni chizish hamda StratifiedKFold bilan model barqarorligini baholash.", en: "Tune probability thresholds, plot ROC & PR curves, and run StratifiedKFold." },
      steps: [
        {
          title: { uz: "Confusion Matrix va Classification Report", en: "Confusion Matrix & Classification Report" },
          desc: { uz: "Test to'plamida matritsa va barcha metrikalarni chiqaring.", en: "Inspect confusion_matrix and classification_report." },
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
          desc: { uz: "Ehtimollik chegarasini o'zgartirib Precision/Recall siljishini kuzating.", en: "Compare Precision & Recall at thresholds 0.3, 0.5, 0.7." },
          code: `from sklearn.metrics import precision_score, recall_score, f1_score
probs = clf.predict_proba(X_te)[:, 1]
for thr in [0.3, 0.5, 0.7]:
    preds = (probs >= thr).astype(int)
    print(f"thr={thr} | P={precision_score(y_te, preds):.3f} | R={recall_score(y_te, preds):.3f} | F1={f1_score(y_te, preds):.3f}")`
        },
        {
          title: { uz: "ROC-AUC va 5-Fold Stratified CV", en: "ROC-AUC & 5-Fold Stratified CV" },
          desc: { uz: "AUC va cross-validation natijalarini hisoblang.", en: "Compute ROC-AUC and StratifiedKFold CV mean ± std." },
          code: `from sklearn.metrics import roc_auc_score, average_precision_score
from sklearn.model_selection import StratifiedKFold, cross_val_score

print("ROC-AUC:", round(roc_auc_score(y_te, probs), 3))
print("PR-AUC: ", round(average_precision_score(y_te, probs), 3))
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
cv = cross_val_score(clf, data.data, data.target, cv=skf, scoring='f1')
print(f"5-Fold Stratified F1: {cv.mean():.3f} ± {cv.std():.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: LogisticRegression va DecisionTree ROC egri chiziqlarini bitta grafikda chizing.",
          "2-variant: 95% Recall ga erishish uchun qaysi eng katta probability threshold kerakligini toping.",
          "3-variant: fbeta_score(y_te, y_pred, beta=2) ni hisoblang."
        ],
        en: [
          "Variant 1: Overlay ROC curves of DecisionTree and LogisticRegression on one plot.",
          "Variant 2: Find the highest threshold guaranteeing ≥95% Recall.",
          "Variant 3: Compute F2-score using sklearn.metrics.fbeta_score."
        ]
      }
    },
    glossary: [
      { uz: "Precision", en: "Precision", defUz: "Musbat bashoratlar ichidagi haqiqiy musbatlar ulushi", defEn: "TP / (TP + FP)" },
      { uz: "Recall (Sensitivity)", en: "Recall", defUz: "Barcha haqiqiy musbatlarning model topgan ulushi", defEn: "TP / (TP + FN)" },
      { uz: "F1-Score", en: "F1-Score", defUz: "Precision va Recall garmonik o'rtachasi", defEn: "Harmonic mean of Precision and Recall" },
      { uz: "ROC-AUC", en: "ROC-AUC", defUz: "Thresholdlardan mustaqil sinf ajratish maydoni", defEn: "Area under TPR vs FPR curve" }
    ],
    quiz: [
      { q: { uz: "Tibbiy diagnostikada (kasallikni o'tkazib yubormaslik) qaysi ko'rsatkich ustun?", en: "Which metric is prioritized in disease screening to avoid missing patients?" }, options: [{ label: 'A', uz: "Precision", en: "Precision" }, { label: 'B', uz: "Recall", en: "Recall" }, { label: 'C', uz: "Accuracy", en: "Accuracy" }, { label: 'D', uz: "Support", en: "Support" }], answer: 'B', explanation: { uz: "False Negative (kasalni sog'lom deyish) xavfli bo'lgani uchun Recall muhim.", en: "Minimizing False Negatives requires maximizing Recall." } },
      { q: { uz: "AUC = 0.5 nimani anglatadi?", en: "What does AUC = 0.5 indicate?" }, options: [{ label: 'A', uz: "Mukammal model", en: "Perfect model" }, { label: 'B', uz: "Tasodifiy taxmin bilan teng", en: "No better than random guessing" }, { label: 'C', uz: "50% overfitting", en: "50% overfitting" }, { label: 'D', uz: "Xato", en: "Error" }], answer: 'B', explanation: { uz: "ROC diagonal chizig'i tasodifiy modelni bildiradi.", en: "AUC=0.5 corresponds to the random diagonal." } },
      { q: { uz: "Spam filtri uchun (muhim xatni bloklamaslik) qaysi metrika muhimroq?", en: "For spam filtering (not blocking real emails), which metric matters more?" }, options: [{ label: 'A', uz: "Recall", en: "Recall" }, { label: 'B', uz: "Precision", en: "Precision" }, { label: 'C', uz: "WCSS", en: "WCSS" }, { label: 'D', uz: "Lift", en: "Lift" }], answer: 'B', explanation: { uz: "False Positive ni kamaytirish uchun Precision yuqori bo'lishi kerak.", en: "High Precision minimizes False Positives." } },
      { q: { uz: "Kuchli sinf disbalansida (1:1000) ROC-AUC o'rniga qaysi egri chiziq afzal?", en: "Under extreme 1:1000 class imbalance, which curve is more informative than ROC?" }, options: [{ label: 'A', uz: "Precision-Recall (PR) egri chizig'i", en: "Precision-Recall (PR) Curve" }, { label: 'B', uz: "Elbow", en: "Elbow" }, { label: 'C', uz: "Dendrogramma", en: "Dendrogram" }, { label: 'D', uz: "Scree plot", en: "Scree plot" }], answer: 'A', explanation: { uz: "PR egri chizig'i ulkan TN sonini hisobga olmaydi va FP ni yashirmaydi.", en: "PR-AUC ignores TN and reveals False Positives directly." } },
      { q: { uz: "5-katlamli CV da har bir qatlam necha marta test bo'ladi?", en: "In 5-fold CV, how many times does each fold serve as validation?" }, options: [{ label: 'A', uz: "1 marta (5 iteratsiya davomida)", en: "Once across 5 iterations" }, { label: 'B', uz: "5 marta", en: "5 times" }, { label: 'C', uz: "10 marta", en: "10 times" }, { label: 'D', uz: "0 marta", en: "0 times" }], answer: 'A', explanation: { uz: "Har bir qism aylanib chiqib 1 martadan validatsiya rolini bajaradi.", en: "Each of the 5 folds acts once as the validation split." } }
    ]
  },

  // ==================== TOPIC 6 ====================
  {
    id: 6,
    slug: '06-association-rules',
    hours: 4,
    labs: 2,
    keywords: ['Association Rules', 'Market Basket', 'Support', 'Confidence', 'Lift', 'Conviction', 'Apriori', 'FP-Growth'],
    title: {
      uz: "Assotsiativ qoidalar va savat tahlili",
      en: "Association Rules & Market Basket Analysis"
    },
    description: {
      uz: "Savat tahlili, Support/Confidence/Lift/Conviction, Apriori algoritmi bosqichma-bosqich, FP-Growth daraxti va soxta qoidalar tuzog'i.",
      en: "Market Basket Analysis, Support/Confidence/Lift/Conviction, step-by-step Apriori trace, FP-Tree construction, and Lift pitfalls."
    },
    sections: [
      {
        heading: { uz: "6.1. Savat tahlili va Qoida shakli", en: "6.1. Market Basket Analysis & Rule Structure" },
        bodyHtml: {
          uz: "<p><strong>Assotsiativ qoidalar</strong> (Agrawal et al., 1993) supermarket cheklaridan, veb-savatlardan yoki tibbiy yozuvlardan <code>{Antecedent (A)} → {Consequent (B)}</code> ko'rinishidagi birga uchrash qonuniyatlarini topadi. Bu implikatsiya mantiqiy sababiyat emas, balki statistik hamrohlikdir!</p>",
          en: "<p><strong>Association Rules</strong> mine co-occurrence patterns <code>{A} → {B}</code> in retail baskets, web clickstreams, or EHR records. Note: it measures statistical co-occurrence, not causal necessity.</p>"
        }
      },
      {
        heading: { uz: "6.2. Support, Confidence, Lift va Conviction", en: "6.2. Support, Confidence, Lift & Conviction" },
        bodyHtml: {
          uz: "<p><strong>Confidence tuzog'i!</strong> Agar do'konda xaridorlarning 90% i <em>Non</em> sotib olsa, unda <code>{Kofe} → {Non}</code> qoidasining Confidence qiymati ~90% chiqaveradi, garchi Kofe bilan Non bog'liq bo'lmasa ham! Buni <strong>Lift</strong> aniqlaydi: Lift = 1 bo'lsa bog'liqlik nol (tasodifiy).</p>",
          en: "<p><strong>The Confidence Trap!</strong> If 90% of all shoppers buy <em>Bread</em>, then <code>{Coffee} → {Bread}</code> gets ~90% Confidence even if they are completely independent! <strong>Lift</strong> fixes this by dividing Confidence by baseline Support(B).</p>"
        },
        latex: "\\text{Sup}(A\\cup B)=\\frac{\\text{count}(A\\cup B)}{N}, \\quad \\text{Conf}(A\\to B)=\\frac{\\text{Sup}(A\\cup B)}{\\text{Sup}(A)}, \\quad \\text{Lift}(A\\to B)=\\frac{\\text{Conf}(A\\to B)}{\\text{Sup}(B)}",
        widget: 'apriori-lattice'
      },
      {
        heading: { uz: "6.3. Apriori algoritmi va Anti-monotonlik prinsipi", en: "6.3. Apriori Algorithm & Downward Closure" },
        bodyHtml: {
          uz: "<p>Agar $d$ ta mahsulot bo'lsa, mumkin bo'lgan to'plamlar soni $2^d - 1$ (masalan, 1000 mahsulot uchun $2^{1000}$!). Barcha kombinatsiyalarni tekshirish imkonsiz. <strong>Apriori prinsipi</strong> qutqaradi:</p><p><em>\"Agar to'plam frequent bo'lmasa, uni o'z ichiga olgan hech qanday kattaroq to'plam (superset) ham frequent bo'la olmaydi.\"</em></p><p>Bosqichlar: $C_1 \\to L_1 \\to C_2 \\to L_2 \\to C_3 \\to L_3 \\dots$ (Join va Prune qadamlari).</p>",
          en: "<p>With $d$ items, $2^d-1$ subsets exist! <strong>Apriori's downward closure property</strong> prunes the search: <em>if an itemset is infrequent, all of its supersets are guaranteed infrequent</em>. Iteratively alternates candidate generation ($C_k$) and pruning ($L_k$).</p>"
        }
      },
      {
        heading: { uz: "6.4. FP-Growth (Frequent Pattern Tree)", en: "6.4. FP-Growth: Mining Without Candidates" },
        bodyHtml: {
          uz: "<p><strong>FP-Growth</strong> Apriori ning ikki og'ir muammosini (ko'p marta disk o'qish va kandidatlar portlashi) hal qiladi:</p><ol><li><strong>1-o'tish:</strong> 1-elementlarni sanash, min_support dan kichiklarini olib tashlash va qolganlarni chastota bo'yicha kamayish tartibida saralash.</li><li><strong>2-o'tish:</strong> Har bir tranzaksiyani saralangan tartibda <strong>FP-Tree</strong> (prefix daraxt) ga kiritish (umumiy prefikslar birlashadi!).</li><li>Daraxtdan rekursiv ravishda Conditional Pattern Base orqali frequent itemsetlar chiqariladi.</li></ol>",
          en: "<p><strong>FP-Growth</strong> eliminates candidate generation using just 2 dataset scans: (1) count & sort frequent 1-items descending, (2) insert sorted transactions into a compressed prefix tree (<strong>FP-Tree</strong>), then mine conditional sub-trees recursively.</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "6-mavzu: Assotsiativ qoidalar", en: "Topic 6: Association Rules" }, subtitle: { uz: "Market Basket Analysis · Apriori · FP-Growth (80 daqiqa)", en: "Support, Confidence, Lift, Apriori & FP-Growth (80 min)" }, points: { uz: ["Savat tahlili va biznes qo'llanilishi", "Support, Confidence, Lift va Conviction", "Confidence tuzog'i (Nega Lift shart?)", "Apriori algoritmi (Join & Prune) qo'lda trace", "FP-Growth daraxti va Lab 6–7"], en: ["Market Basket applications", "Support, Confidence, Lift & Conviction", "The Confidence Trap", "Apriori Join & Prune step-by-step", "FP-Tree compression & Lab 6–7"] } },
      { title: { uz: "Savat tahlili qo'llanilishi", en: "Real-World Applications" }, points: { uz: ["Supermarket: mahsulotlarni yonma-yon (yoki aksincha uzoqroq) joylashtirish", "E-commerce: 'Bu mahsulot bilan birga olinadi' tavsiyasi", "Tibbiyot: birga uchraydigan dorilarning nojo'ya ta'siri", "Veb-navigatsiya: foydalanuvchi qadamlar zanjiri"], en: ["Retail shelf layout & promotional bundles", "E-commerce 'Frequently Bought Together'", "Healthcare: drug interaction & symptom co-occurrence", "Web clickstream next-page prediction"] } },
      { title: { uz: "Support, Confidence va Lift", en: "Three Core Metrics" }, latex: "\\text{Sup}(A\\cup B)=\\frac{c(A\\cup B)}{N}, \\quad \\text{Conf}(A\\to B)=\\frac{\\text{Sup}(A\\cup B)}{\\text{Sup}(A)}, \\quad \\text{Lift}=\\frac{\\text{Conf}(A\\to B)}{\\text{Sup}(B)}", points: { uz: ["Support: tranzaksiyalarning necha foizida uchraydi (kam uchraydigan shovqinni elaydi)", "Confidence: shartli ehtimol P(B|A)", "Lift: >1 ijobiy bog'liqlik, =1 mustaqil, <1 o'rinbosar mahsulotlar"], en: ["Support: overall frequency across all baskets", "Confidence: conditional probability P(B|A)", "Lift: >1 positive synergy, =1 independent, <1 substitutes"] } },
      { title: { uz: "Confidence Tuzog'i (Chalg'ituvchi Qoida!)", en: "The Confidence Trap" }, discussion: { q: { uz: "1000 ta mijozdan 900 tasi Sut oladi, 200 tasi Choy oladi, 180 tasi Choy+Sut oladi. {Choy}→{Sut} uchun Confidence = 90%! Bu yaxshi qoidami?", en: "Out of 1000 baskets, 900 buy Milk, 200 buy Tea, 180 buy both. Confidence(Tea→Milk) = 90%! Is Tea driving Milk sales?" }, a: { uz: "YO'Q! <code>Lift = 0.90 / 0.90 = 1.00</code>! Choy olganlar ham, olmaganlar ham baribir 90% holatda Sut olmoqda — ular mutlaqo mustaqil!", en: "NO! <code>Lift = 0.90 / 0.90 = 1.00</code>. Tea buyers buy Milk at the exact same 90% baseline rate—zero real association!" } } },
      { title: { uz: "Interaktiv Lab: Support/Confidence slayderini sinang!", en: "Interactive Rule Filtering Lab" }, widget: 'apriori-lattice' },
      { title: { uz: "Apriori Prinsipi (Anti-Monotonlik)", en: "The Apriori Principle (Downward Closure)" }, points: { uz: ["100 ta mahsulot uchun 2¹⁰⁰ ≈ 10³⁰ ta to'plam — brute force imkonsiz!", "Anti-monotonlik: Support(X ∪ Y) ≤ Support(X)", "Agar {Kaviar} nodir (< min_sup) bo'lsa, {Non, Kaviar} ham albatta nodir!", "Shu bois nodir shoxlar darhol kesib tashlanadi (Prune)"], en: ["Brute force over d items requires 2^d scans—impossible!", "Anti-monotone property: superset support ≤ subset support", "Prune any candidate containing an infrequent subset immediately"] } },
      { title: { uz: "Apriori Qo'lda Misol (5 ta chek, min_sup = 60%)", en: "Apriori Trace (N=5, min_sup = 3)" }, points: { uz: ["T1:{N,S,T}, T2:{N,S}, T3:{N,T}, T4:{S,T}, T5:{N,S,T}", "L1 (≥3): {N}:4, {S}:4, {T}:4", "C2→L2 (≥3): {N,S}:3, {N,T}:3, {S,T}:3", "C3: {N,S,T}:2 < 3 → Prune! Yakuniy maksimal to'plamlar: L2"], en: ["T1:{B,M,E}, T2:{B,M}, T3:{B,E}, T4:{M,E}, T5:{B,M,E}", "L1 (≥3): {B}:4, {M}:4, {E}:4", "L2 (≥3): {B,M}:3, {B,E}:3, {M,E}:3", "C3: {B,M,E}:2 < 3 → Pruned!"] } },
      { title: { uz: "FP-Growth: Kandidatlarsiz Tez Algoritm", en: "FP-Growth: Prefix Tree Mining" }, points: { uz: ["Apriori kamchiligi: katta bazadan 5–10 marta diskda o'tadi va millionlab C_k quradi", "FP-Growth: atigi 2 marta ma'lumotdan o'tadi!", "1-o'tish: elementlarni chastota bo'yicha saralash", "2-o'tish: har chekni siqilgan FP-Tree ga joylash"], en: ["Apriori suffers from many disk scans & huge candidate C_k sets", "FP-Growth scans the database only twice!", "Pass 1: sort frequent 1-items descending", "Pass 2: compress baskets into a shared prefix FP-Tree"] } },
      { title: { uz: "Apriori vs FP-Growth Taqqoslash", en: "Apriori vs FP-Growth" }, table: { headers: { uz: ["Mezon", "Apriori", "FP-Growth"], en: ["Criteria", "Apriori", "FP-Growth"] }, rows: { uz: [["O'tishlar soni", "k+1 marta", "2 marta"], ["Kandidatlar", "Generatsiya qiladi", "Yo'q"], ["Tezlik", "Sekin", "10x–100x tez"]], en: [["Scans", "k+1 passes", "2 passes"], ["Candidates", "Generates C_k", "None"], ["Speed", "Slower", "10x–100x faster"]] } } },
      { title: { uz: "Soxta va Tautologik Qoidalarni Filtrlash", en: "Filtering Actionable Rules" }, points: { uz: ["Lift > 1.2 va Support yetarli bo'lgan qoidalarni saqlang", "Conviction = (1 - Sup(B)) / (1 - Conf(A→B)): yo'nalishli bog'liqlikni tekshiradi", "Trivial qoidalarni (masalan, 'Printer → Qog'oz') biznes jamoasi bilan saralang"], en: ["Filter by Lift > 1.2 and meaningful minimum Support", "Conviction checks directed implication strength", "Separate trivial rules ('Printer → Ink') from surprising insights"] } }
    ],
    lab: {
      title: { uz: "L6–L7: Apriori vs FP-Growth va Savat Tahlili", en: "L6–L7: Apriori vs FP-Growth Market Basket Lab" },
      objective: { uz: "TransactionEncoder yordamida cheklarni matritsaga o'tkazish, Apriori va FP-Growth tezligini solishtirish va Lift bo'yicha top qoidalarni tahlil qilish.", en: "Encode transactions, benchmark apriori vs fpgrowth, and rank rules by Lift." },
      steps: [
        {
          title: { uz: "Tranzaksiyalarni One-Hot Matritsaga o'tkazish", en: "Transaction Encoding" },
          desc: { uz: "mlxtend TransactionEncoder bilan boolean DataFrame tuzing.", en: "Transform transaction lists into a boolean DataFrame." },
          code: `import pandas as pd
from mlxtend.preprocessing import TransactionEncoder

transactions = [
    ['Non', 'Sut', 'Tuxum'], ['Non', 'Sut'], ['Non', 'Tuxum'],
    ['Sut', 'Tuxum'], ['Non', 'Sut', 'Tuxum'], ['Non', 'Sut', 'Meva'],
    ['Tuxum', 'Meva'], ['Non', 'Meva'], ['Sut', 'Meva', 'Tuxum'],
    ['Non', 'Sut', 'Meva', 'Tuxum'], ['Kofe', 'Shakar'], ['Kofe', 'Shakar', 'Sut']
]
te = TransactionEncoder()
df = pd.DataFrame(te.fit_transform(transactions), columns=te.columns_)
print(df.astype(int).head())`
        },
        {
          title: { uz: "Apriori va FP-Growth bilan Frequent Itemsetlar", en: "Frequent Itemsets: Apriori vs FP-Growth" },
          desc: { uz: "min_support=0.25 bilan ikkala algoritm natijasi bir xilligini tekshiring.", en: "Verify Apriori and FP-Growth produce identical frequent itemsets." },
          code: `from mlxtend.frequent_patterns import apriori, fpgrowth

freq_ap = apriori(df, min_support=0.25, use_colnames=True)
freq_fp = fpgrowth(df, min_support=0.25, use_colnames=True)
print("Apriori count:", len(freq_ap), "| FP-Growth count:", len(freq_fp))
print(freq_fp.sort_values('support', ascending=False).head(8))`
        },
        {
          title: { uz: "Assotsiativ qoidalar va Lift tahlili", en: "Generate & Filter Rules by Lift" },
          desc: { uz: "Confidence ≥ 0.6 va Lift > 1.05 qoidalarini chiqaring.", en: "Extract rules with confidence ≥ 0.6 and Lift > 1.05." },
          code: `from mlxtend.frequent_patterns import association_rules

rules = association_rules(freq_fp, metric="confidence", min_threshold=0.6)
strong = rules[rules['lift'] > 1.05].sort_values('lift', ascending=False)
print(strong[['antecedents', 'consequents', 'support', 'confidence', 'lift']].round(3))`
        }
      ],
      variants: {
        uz: [
          "1-variant: min_support ni 0.15, 0.30, 0.50 ga o'zgartirib qoidalar soni o'zgarishini jadval qiling.",
          "2-variant: conviction va leverage ustunlarini ham chiqarib eng yuqori leverage li qoidani toping.",
          "3-variant: Faqat 2 ta mahsulotdan iborat antecedentga ega qoidalarni filtrlang."
        ],
        en: [
          "Variant 1: Sweep min_support across [0.15, 0.30, 0.50] and record itemset counts.",
          "Variant 2: Inspect leverage and conviction metrics alongside Lift.",
          "Variant 3: Filter rules where antecedent length == 2."
        ]
      }
    },
    glossary: [
      { uz: "Support", en: "Support", defUz: "Element to'plamining barcha tranzaksiyalardagi ulushi", defEn: "Fraction of transactions containing itemset" },
      { uz: "Confidence", en: "Confidence", defUz: "A mavjud bo'lganda B ham uchrash ehtimoli P(B|A)", defEn: "Conditional probability P(B|A)" },
      { uz: "Lift", en: "Lift", defUz: "Confidence ning bazaviy Support(B) ga nisbati (>1 ijobiy)", defEn: "Ratio of observed confidence to expected baseline (>1 positive)" },
      { uz: "FP-Tree", en: "FP-Tree", defUz: "Umumiy prefikslarni birlashtiruvchi siqilgan daraxt tuzilmasi", defEn: "Compact prefix tree storing frequent transactions" }
    ],
    quiz: [
      { q: { uz: "Confidence(A → B) = 0.8 nimani anglatadi?", en: "What does Confidence(A → B) = 0.8 mean?" }, options: [{ label: 'A', uz: "B ning 80% da A bor", en: "80% of B contain A" }, { label: 'B', uz: "A mavjud cheklarning 80% da B ham bor", en: "80% of transactions with A also contain B" }, { label: 'C', uz: "Jami 80%", en: "80% overall" }, { label: 'D', uz: "Lift = 0.8", en: "Lift = 0.8" }], answer: 'B', explanation: { uz: "Confidence = P(B|A) shartli ehtimoldir.", en: "Confidence is the conditional probability P(B|A)." } },
      { q: { uz: "Lift(A → B) = 1 bo'lsa?", en: "What does Lift = 1 mean?" }, options: [{ label: 'A', uz: "Kuchli bog'liqlik", en: "Strong rule" }, { label: 'B', uz: "A va B statistik mustaqil", en: "A and B are statistically independent" }, { label: 'C', uz: "Salbiy bog'liqlik", en: "Negative rule" }, { label: 'D', uz: "Xato", en: "Error" }], answer: 'B', explanation: { uz: "Lift=1 tasodifiy mustaqillikni ko'rsatadi.", en: "Lift=1 implies P(A∩B) = P(A)P(B)." } },
      { q: { uz: "Apriori prinsipi nimani kafolatlaydi?", en: "What does the Apriori principle state?" }, options: [{ label: 'A', uz: "Barcha to'plam frequent", en: "All sets frequent" }, { label: 'B', uz: "Frequent bo'lmagan to'plamning kattaroq to'plamlari ham frequent emas", en: "Every superset of an infrequent set is also infrequent" }, { label: 'C', uz: "Lift doim > 1", en: "Lift > 1" }, { label: 'D', uz: "1 ta o'tish yetarli", en: "1 pass" }], answer: 'B', explanation: { uz: "Anti-monotonlik qidiruv fazosini keskin qisqartiradi.", en: "Downward closure prunes infrequent supersets early." } },
      { q: { uz: "FP-Growth Apriori dan qanday farq qiladi?", en: "How does FP-Growth differ from Apriori?" }, options: [{ label: 'A', uz: "FP-Tree tuzib faqat 2 marta ma'lumotdan o'tadi va kandidat qurmaydi", en: "Uses an FP-Tree in 2 scans with zero candidate generation" }, { label: 'B', uz: "Support ishlatmaydi", en: "No min_support" }, { label: 'C', uz: "Faqat 2 ta tovar", en: "2 items only" }, { label: 'D', uz: "Sekinroq", en: "Slower" }], answer: 'A', explanation: { uz: "Prefix daraxt kandidatlar portlashini yo'qotadi.", en: "FP-Growth avoids C_k candidate generation completely." } },
      { q: { uz: "Agar {Kofe}→{Non} uchun Confidence=90%, Support(Non)=90% bo'lsa, Lift qancha?", en: "If Conf(Coffee→Bread)=90% and Support(Bread)=90%, what is Lift?" }, options: [{ label: 'A', uz: "1.0 (mustaqil, foydasiz qoida)", en: "1.0 (independent, spurious rule)" }, { label: 'B', uz: "1.8", en: "1.8" }, { label: 'C', uz: "0.81", en: "0.81" }, { label: 'D', uz: "9.0", en: "9.0" }], answer: 'A', explanation: { uz: "Lift = 0.90 / 0.90 = 1.0 — Kofe Non sotilishiga ta'sir qilmaydi.", en: "Lift = 0.90 / 0.90 = 1.0 indicates statistical independence." } }
    ]
  }
);
