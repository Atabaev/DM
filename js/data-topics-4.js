window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== TOPIC 10 ====================
  {
    id: 10,
    slug: '10-ensemble',
    hours: 2,
    labs: 1,
    keywords: ['Ensemble', 'Bias-Variance', 'Bagging', 'Bootstrap', 'OOB', 'Random Forest', 'AdaBoost', 'Gradient Boosting', 'XGBoost'],
    title: {
      uz: "Ansambl usullari (Random Forest, Boosting)",
      en: "Ensemble Methods: Bagging, Random Forest & Boosting"
    },
    description: {
      uz: "Bias-Variance tradeoff, Bagging (Bootstrap & OOB baho), Random Forest (√p), AdaBoost vaznlari, Gradient Boosting (XGBoost/LightGBM) va Stacking.",
      en: "Bias-Variance tradeoff, Bagging & Out-of-Bag error, Random Forest, AdaBoost math, Gradient Boosting (XGBoost), and Stacking."
    },
    sections: [
      {
        heading: { uz: "10.1. Nega bitta modeldan ko'ra Ansambl kuchli? (Bias-Variance)", en: "10.1. Why Ensembles Win: Bias-Variance Trade-off" },
        bodyHtml: {
          uz: "<p><strong>\"Crowd Wisdom\" (Jamoaviy donolik):</strong> Agar har biri 70% aniqlikka ega, bir-biridan mustaqil 15 ta tasniflagich ko'pchilik ovozi bersa, ansambl aniqligi 90%+ ga ko'tariladi (Kondorse teoremasi).</p><p>Model xatosi uch qismdan iborat: <strong>Error = Bias² + Variance + Irreducible Noise</strong>. Chuqur Decision Tree past Bias, ammo yuqori Variance ga ega; sayoz Stump esa yuqori Bias, past Variance ga ega.</p>",
          en: "<p>By Condorcet's Jury Theorem, combining diverse imperfect classifiers slashes error. Total error decomposes as <strong>Bias² + Variance + Noise</strong>: Bagging cuts <strong>Variance</strong>; Boosting cuts <strong>Bias</strong>.</p>"
        },
        latex: "\\text{Var}\\left(\\frac{1}{B}\\sum_{b=1}^{B} T_b\\right) = \\rho\\sigma^2 + \\frac{1-\\rho}{B}\\sigma^2",
        widget: 'ensemble-sim'
      },
      {
        heading: { uz: "10.2. Bagging, Bootstrap va Out-of-Bag (OOB) Baho", en: "10.2. Bagging, Bootstrap & Out-of-Bag Error" },
        bodyHtml: {
          uz: "<p><strong>Bagging (Bootstrap Aggregating):</strong> $N$ ta satrdan qaytarib qo'yib olish (bootstrap) bilan $B$ ta parallel o'quv to'plami tuziladi. Har bootstrap namunaga o'rtacha $\\approx 63.2\\%$ noyob satr tushadi, qolgan <strong>36.8% Out-of-Bag (OOB)</strong> satrlar esa bepul validatsiya to'plami bo'lib xizmat qiladi ($1 - (1 - 1/N)^N \\to 1 - e^{-1} \\approx 0.632$).</p>",
          en: "<p>Each bootstrap sample captures $\\approx 63.2\\%$ unique rows, leaving <strong>36.8% Out-of-Bag (OOB)</strong> rows as a built-in validation test set.</p>"
        }
      },
      {
        heading: { uz: "10.3. Random Forest: Dekorrelatsiya siri", en: "10.3. Random Forest: Feature Subsampling" },
        bodyHtml: {
          uz: "<p>Oddiy Bagging da bitta juda kuchli atribut bo'lsa, barcha $B$ ta daraxt bir xil ildizdan bo'linib o'zaro kuchli korrelyatsiyalashib qoladi ($\\rho \\to 1$). <strong>Random Forest</strong> har bir tugun bo'linishida jami $p$ ta atributdan faqat tasodifiy $m \\approx \\sqrt{p}$ tasini ko'rib chiqadi — bu $\\rho$ ni keskin kamaytiradi!</p>",
          en: "<p>If one feature dominates, bagged trees become correlated ($\\rho \\to 1$). <strong>Random Forest</strong> samples $m \\approx \\sqrt{p}$ features at each split, lowering $\\rho$ and unlocking massive variance reduction.</p>"
        }
      },
      {
        heading: { uz: "10.4. Boosting: AdaBoost va Gradient Boosting (XGBoost)", en: "10.4. Boosting: AdaBoost & Gradient Boosting" },
        bodyHtml: {
          uz: "<p><strong>Boosting</strong> sayoz daraxtlarni (zaif o'rganuvchilarni) <strong>ketma-ket</strong> o'qitadi:</p><ul><li><strong>AdaBoost:</strong> xato topilgan namunalarning og'irligini oshiradi ($\\alpha_t = \\frac{1}{2}\\ln\\frac{1-\\epsilon_t}{\\epsilon_t}$).</li><li><strong>Gradient Boosting:</strong> har yangi daraxt oldingi modelning <strong>qoldiq xatosini (pseudo-residual = $-\\partial L / \\partial F$)</strong> bashorat qilishga o'qitiladi!</li><li><strong>XGBoost / LightGBM / CatBoost:</strong> L1/L2 regularizatsiya, ikkinchi tartibli gradient (Hessian), NaN ni avtomatik yo'naltirish va histogramma tezlashtirish.</li></ul>",
          en: "<p><strong>Boosting</strong> trains shallow trees <strong>sequentially</strong>: <strong>AdaBoost</strong> reweights misclassified points; <strong>Gradient Boosting</strong> fits each new tree to negative loss residuals ($-\\partial L/\\partial F$); <strong>XGBoost/LightGBM/CatBoost</strong> add L2 regularization, second-order gradients, and histogram speedups.</p>"
        },
        latex: "F_m(x) = F_{m-1}(x) + \\eta \\cdot h_m(x), \\qquad \\alpha_t = \\frac{1}{2}\\ln\\left(\\frac{1-\\epsilon_t}{\\epsilon_t}\\right)"
      },
      {
        heading: { uz: "10.5. Bagging vs Boosting vs Stacking Taqqoslash", en: "10.5. Bagging vs Boosting vs Stacking" },
        table: {
          headers: { uz: ["Mezon", "Bagging (Random Forest)", "Boosting (XGBoost)", "Stacking"], en: ["Dimension", "Bagging (RF)", "Boosting (XGB)", "Stacking"] },
          rows: {
            uz: [
              ["O'qitish", "Parallel (mustaqil)", "Ketma-ket (bog'liq)", "2 qatlamli (Base + Meta)"],
              ["Asosiy ta'sir", "Variance ni tushiradi", "Bias ni tushiradi", "Turli oila modellarini birlashtiradi"],
              ["Overfitting", "Daraxt oshgan sari kamayadi", "learning_rate va early_stopping kerak", "Out-of-fold CV shart"]
            ],
            en: [
              ["Training", "Parallel", "Sequential", "2-level (Base + Meta)"],
              ["Primary Effect", "Reduces Variance", "Reduces Bias", "Blends diverse model families"],
              ["Overfitting", "Very resistant", "Requires tuning η & depth", "Requires out-of-fold meta predictions"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "10-mavzu: Ansambl usullari", en: "Topic 10: Ensemble Methods" }, subtitle: { uz: "Bagging · Random Forest · AdaBoost · XGBoost · Stacking (80 daqiqa)", en: "Bias-Variance, Random Forest & Gradient Boosting (80 min)" }, points: { uz: ["Crowd Wisdom va Bias-Variance dekompozitsiyasi", "Bootstrap (63.2%) va Out-of-Bag (OOB) baholash", "Random Forest va √p dekorrelatsiya siri", "AdaBoost vazn yangilash va Gradient Boosting qoldiqlari", "XGBoost / LightGBM / CatBoost, Stacking va Lab 10"], en: ["Crowd Wisdom & Bias-Variance decomposition", "Bootstrap & 36.8% Out-of-Bag validation", "Random Forest √p feature decorrelation", "AdaBoost & Gradient Boosting residuals", "XGBoost/LightGBM/CatBoost, Stacking & Lab 10"] } },
      { title: { uz: "Nima uchun Ansambl Kuchliroq?", en: "Why Do Ensembles Outperform Single Models?" }, points: { uz: ["Turli modellar turli nuqtalarda xato qiladi", "Bitta daraxt (High Variance) ma'lumotga sezgir; o'rtacha olinganda xatolar kompensatsiyalanadi", "Shart: baza modellar tasodifiydan yaxshi (>50%) va XILMA-XIL bo'lishi kerak"], en: ["Independent errors cancel out upon aggregation", "Requirements: base learners must be >50% accurate AND diverse"] } },
      { title: { uz: "Bias vs Variance Dekompozitsiyasi", en: "Bias vs Variance Trade-Off" }, points: { uz: ["High Bias (Underfitting): sayoz daraxt (max_depth=1) — Boosting tuzatadi!", "High Variance (Overfitting): chuqur daraxt (max_depth=None) — Bagging tuzatadi!", "Random Forest = ko'p chuqur daraxtlarni o'rtachalab Variance ni tushiradi"], en: ["High Bias (shallow stumps) → fixed by Boosting", "High Variance (deep unpruned trees) → fixed by Bagging/RF"] } },
      { title: { uz: "Bootstrap Sampling va 63.2% Qoidasi", en: "Bootstrap & Out-of-Bag (OOB) Error" }, latex: "P(\\text{not picked}) = \\left(1 - \\frac{1}{N}\\right)^N \\xrightarrow{N\\to\\infty} e^{-1} \\approx 36.8\\%", points: { uz: ["Har bir daraxtga N ta satrdan qaytarib qo'yib namuna olinadi", "36.8% satr hech tanlanmaydi → ular OOB (Out-of-Bag) validatsiya vazifasini bajaradi!", "Scikit-Learn da oob_score=True qo'yib alohida CV siz ham baholash mumkin"], en: ["Each tree trains on a bootstrap sample (~63.2% unique rows)", "Remaining 36.8% rows form free Out-of-Bag validation (oob_score=True)"] } },
      { title: { uz: "Random Forest: Nega √p Xususiyat?", en: "Random Forest: The Secret of √p Subsampling" }, latex: "\\text{Var}(\\bar{T}) = \\rho\\sigma^2 + \\frac{1-\\rho}{B}\\sigma^2", points: { uz: ["Daraxtlar soni B → ∞ bo'lganda ham birinchi had ρ·σ² qoladi!", "Agar barcha daraxt bir xil kuchli ustundan bo'linsa ρ yuqori bo'ladi", "Har tugunda faqat √p tasodifiy ustundan tanlash ρ ni pasaytiradi"], en: ["As B → ∞, ensemble variance approaches ρ·σ²", "Subsampling √p candidate features at every split lowers correlation ρ"] } },
      { title: { uz: "Interaktiv Ansambl Simulatori (n_estimators ta'siri)", en: "Interactive Ensemble Error Simulator" }, widget: 'ensemble-sim' },
      { title: { uz: "Random Forest Feature Importance & Ogohlantirish", en: "Feature Importance Pitfall" }, points: { uz: ["MDI (Gini importance) ko'p noyob qiymatli raqamli ustunlarni sun'iy oshirib ko'rsatadi!", "Ishonchliroq alternativ: Permutation Importance (ustunni aralashtirib test xatosi o'sishini o'lchash)"], en: ["Default impurity-based importance is biased toward high-cardinality numeric features", "Prefer Permutation Importance on the validation set"] } },
      { title: { uz: "Boosting G'oyasi: Xatolarni Ketma-ket Tuzatish", en: "Boosting Intuition: Sequential Learning" }, points: { uz: ["1-model oddiy qoidalarni o'rganadi, ba'zi qiyin nuqtalarda adashadi", "2-model aynan o'sha xato qilingan qiyin nuqtalarga ko'proq e'tibor beradi", "Sayoz daraxtlar (depth 1–5) qo'shilib kuchli chiziqsiz chegara quradi"], en: ["Sequential weak learners focus progressively on prior mistakes", "Combines shallow trees (depth 1–5) via weighted additive steps"] } },
      { title: { uz: "AdaBoost vs Gradient Boosting", en: "AdaBoost vs Gradient Boosting" }, points: { uz: ["AdaBoost: har iteratsiyada xato namuna og'irligini oshiradi", "Gradient Boosting: har yangi daraxt oldingi model xatosini (y - ŷ residual) bashorat qiladi!", "Learning rate η (0.01–0.1) kichik qadamlar bilan overfittingni boshqaradi"], en: ["AdaBoost updates sample weights α_t based on error rate", "Gradient Boosting fits trees to negative loss residuals (y - ŷ)", "Shrinkage η (learning_rate) controls step size to prevent overfitting"] } },
      { title: { uz: "Zamonaviy Gradient Boosting: XGBoost, LightGBM, CatBoost", en: "Modern Boosters: XGBoost, LightGBM, CatBoost" }, points: { uz: ["XGBoost: L1/L2 regularizatsiya + 2-tartibli Hessian + NaN ni avtomatik yo'naltirish", "LightGBM: Leaf-wise o'sish + Histogramma (juda tez va katta datada yengil)", "CatBoost: Kategorik ustunlarni Target Statistics orqali to'g'ridan-to'g'ri qayta ishlaydi"], en: ["XGBoost: L1/L2 tree regularization + Hessian + native missing handling", "LightGBM: Histogram + leaf-wise growth (blazing fast on huge tables)", "CatBoost: Oblivious trees + ordered target encoding for categories"] } },
      { title: { uz: "Talabalarga savol (Bagging vs Boosting)", en: "Class Discussion: Overfitting Behavior" }, discussion: { q: { uz: "Random Forest da n_estimators ni 100 dan 5000 ga oshirsak overfitting bo'ladimi? Gradient Boosting da-chi?", en: "If you increase n_estimators from 100 to 5,000, does Random Forest overfit? What about Gradient Boosting?" }, a: { uz: "Random Forest daraxtlarni o'rtachalagani uchun <strong>overfitting bo'lmaydi</strong> (faqat sekinlashadi). Gradient Boosting esa qoldiq shovqinga ham daraxt qo'shavergani uchun <strong>overfittingga tushadi</strong> — shuning uchun <code>early_stopping</code> shart!", en: "Random Forest averages independent trees so it <strong>does not overfit</strong> with more trees. Gradient Boosting sequentially fits residual noise and <strong>will overfit</strong> without early stopping or low learning_rate!" } } },
      { title: { uz: "Stacking (Stacked Generalization)", en: "Stacking Ensembles" }, points: { uz: ["Base modellar: Random Forest + Gradient Boosting + SVM + k-NN", "Meta-model (masalan LogisticRegression): ularning out-of-fold bashoratlarini birlashtiradi", "Kaggle va real musobaqalarda eng yuqori aniqlikni beruvchi arxitektura"], en: ["Level-0 diverse models (RF, XGB, k-NN) produce out-of-fold predictions", "Level-1 Meta-learner (e.g., LogisticRegression) learns optimal blending weights"] } }
    ],
    lab: {
      title: { uz: "L10: Breast Cancer da Bagging, Random Forest, Gradient Boosting va Permutation Importance", en: "L10: Benchmarking Ensembles & Permutation Importance" },
      objective: { uz: "Yakka Decision Tree, Random Forest (OOB), AdaBoost, Gradient Boosting va Voting/Stacking modellarini 5-fold CV bilan solishtirish.", en: "Benchmark Decision Tree, Random Forest (OOB), AdaBoost, Gradient Boosting, and Stacking." },
      steps: [
        {
          title: { uz: "5 ta modelni 5-Fold Stratified CV bilan taqqoslash", en: "5-Fold CV Model Benchmark" },
          desc: { uz: "Yakka daraxt va 4 ta ansamblning o'rtacha CV hamda Test aniqligini solishtiring.", en: "Compare single tree vs 4 ensemble classifiers." },
          code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import BaggingClassifier, RandomForestClassifier, AdaBoostClassifier, GradientBoostingClassifier

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.3, stratify=data.target, random_state=42)
models = {
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Bagging': BaggingClassifier(n_estimators=100, random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=150, oob_score=True, random_state=42),
    'AdaBoost': AdaBoostClassifier(n_estimators=100, random_state=42),
    'GradBoosting': GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)
}
for name, m in models.items():
    cv = cross_val_score(m, X_tr, y_tr, cv=5).mean()
    m.fit(X_tr, y_tr)
    print(f"{name:14s} | CV={cv:.3f} | Test={m.score(X_te, y_te):.3f}")
print("RF OOB Score:", round(models['Random Forest'].oob_score_, 3))`
        },
        {
          title: { uz: "Permutation Importance (Test to'plamida)", en: "Permutation Feature Importance" },
          desc: { uz: "Qaysi tibbiy belgilar eng muhim ekanini permutation_importance bilan tekshiring.", en: "Identify top predictive biomarkers on X_te." },
          code: `from sklearn.inspection import permutation_importance
import numpy as np

rf = models['Random Forest']
perm = permutation_importance(rf, X_te, y_te, n_repeats=10, random_state=42)
top5 = np.argsort(perm.importances_mean)[-5:][::-1]
for idx in top5:
    print(f"{data.feature_names[idx]:25s}: {perm.importances_mean[idx]:.4f}")`
        },
        {
          title: { uz: "Stacking Classifier (RF + GB + Scaled LogReg)", en: "Build a Stacking Classifier" },
          desc: { uz: "Turli modellarni StackingClassifier orqali birlashtiring.", en: "Combine RF, GradientBoosting, and LogisticRegression via Stacking." },
          code: `from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

stack = StackingClassifier(
    estimators=[
        ('rf', RandomForestClassifier(n_estimators=100, random_state=42)),
        ('gb', GradientBoostingClassifier(n_estimators=100, random_state=42)),
        ('lr', make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000)))
    ],
    final_estimator=LogisticRegression()
).fit(X_tr, y_tr)
print("Stacking Test Accuracy:", round(stack.score(X_te, y_te), 3))`
        }
      ],
      variants: {
        uz: [
          "1-variant: GradientBoostingClassifier da learning_rate=[0.01, 0.1, 0.5] va n_estimators=[50, 200, 500] ni taqqoslang.",
          "2-variant: Random Forest da max_features=['sqrt', 'log2', None] uchun OOB score ni solishtiring.",
          "3-variant: VotingClassifier(voting='soft') bilan StackingClassifier natijasini taqqoslang."
        ],
        en: [
          "Variant 1: Sweep GradientBoosting learning_rate across [0.01, 0.1, 0.5].",
          "Variant 2: Compare max_features=['sqrt', 'log2', None] on Random Forest OOB score.",
          "Variant 3: Benchmark soft VotingClassifier vs StackingClassifier."
        ]
      }
    },
    glossary: [
      { uz: "Bagging", en: "Bagging", defUz: "Bootstrap namunalarda parallel modellarni o'qitib dispersiyani kamaytirish", defEn: "Bootstrap Aggregating to reduce variance" },
      { uz: "OOB Score", en: "OOB Score", defUz: "Bootstrapga kirmagan ~36.8% namunalarda olinadigan ichki baho", defEn: "Out-of-Bag validation accuracy on ~36.8% unsampled rows" },
      { uz: "Boosting", en: "Boosting", defUz: "Oldingi xatolar/qoldiqlarni tuzatib ketma-ket o'qitish", defEn: "Sequential training correcting prior errors/residuals" },
      { uz: "Stacking", en: "Stacking", defUz: "Bir nechta baza model bashoratlarini meta-model bilan birlashtirish", defEn: "Meta-learner combining out-of-fold base predictions" }
    ],
    quiz: [
      { q: { uz: "Bagging ning asosiy ta'siri nima?", en: "What is Bagging's main statistical effect?" }, options: [{ label: 'A', uz: "Biasni oshirish", en: "Increase bias" }, { label: 'B', uz: "Dispersiyani (Variance) kamaytirish va overfittingni oldini olish", en: "Reduce variance and stabilize predictions" }, { label: 'C', uz: "K ni tanlash", en: "Select K" }, { label: 'D', uz: "Qatorlarni o'chirish", en: "Drop rows" }], answer: 'B', explanation: { uz: "Parallel bootstrap daraxtlarni o'rtachalash dispersiyani tushiradi.", en: "Averaging parallel bootstrap models reduces variance." } },
      { q: { uz: "Bootstrap namunaga kirmay qolgan (~36.8%) ma'lumotlar nima deb ataladi?", en: "What are the ~36.8% rows omitted from a bootstrap sample called?" }, options: [{ label: 'A', uz: "Out-of-Bag (OOB)", en: "Out-of-Bag (OOB)" }, { label: 'B', uz: "Noise", en: "Noise" }, { label: 'C', uz: "Bias", en: "Bias" }, { label: 'D', uz: "Support", en: "Support" }], answer: 'A', explanation: { uz: "OOB satrlar daraxt uchun bepul validatsiya to'plami bo'ladi.", en: "OOB instances provide unbiased internal validation." } },
      { q: { uz: "Random Forest oddiy Baggingdan qanday farq qiladi?", en: "How does Random Forest improve on Bagging?" }, options: [{ label: 'A', uz: "Ketma-ket o'qiydi", en: "Sequential training" }, { label: 'B', uz: "Har bo'linishda √p tasodifiy atributni sinab daraxtlarni dekorrelyatsiya qiladi", en: "Randomly subsets √p features per split to decorrelate trees" }, { label: 'C', uz: "Bootstrap ishlatmaydi", en: "No bootstrap" }, { label: 'D', uz: "Faqat 1 ta daraxt", en: "Single tree" }], answer: 'B', explanation: { uz: "Atribut cheklovi kuchli belgi barcha daraxtlarni bir xil qilishining oldini oladi.", en: "Feature subsampling lowers inter-tree correlation ρ." } },
      { q: { uz: "Gradient Boosting da har bir yangi daraxt nimani bashorat qilishga o'qitiladi?", en: "In Gradient Boosting, what does each new tree fit?" }, options: [{ label: 'A', uz: "Oldingi modelning qoldiq xatosini (pseudo-residual)", en: "Negative loss gradients / residuals of prior predictions" }, { label: 'B', uz: "Tasodifiy sinfni", en: "Random labels" }, { label: 'C', uz: "K-Means markazini", en: "Centroids" }, { label: 'D', uz: "PCA o'qini", en: "PCA axes" }], answer: 'A', explanation: { uz: "Ketma-ket qadamlar oldingi xato gradientini kamaytirib boradi.", en: "Each weak tree corrects residual errors left by previous trees." } },
      { q: { uz: "XGBoost qaysi usullar oilasiga kiradi?", en: "Which family does XGBoost belong to?" }, options: [{ label: 'A', uz: "Bagging", en: "Bagging" }, { label: 'B', uz: "Gradient Boosting", en: "Gradient Boosting" }, { label: 'C', uz: "DBSCAN", en: "DBSCAN" }, { label: 'D', uz: "Apriori", en: "Apriori" }], answer: 'B', explanation: { uz: "XGBoost — regularizatsiyalangan Extreme Gradient Boosting.", en: "Extreme Gradient Boosting." } }
    ]
  },

  // ==================== TOPIC 11 ====================
  {
    id: 11,
    slug: '11-text-mining',
    hours: 2,
    labs: 1,
    keywords: ['Text Mining', 'NLP', 'Tokenization', 'Stemming', 'Lemmatization', 'BoW', 'N-gram', 'TF-IDF', 'Cosine Similarity'],
    title: {
      uz: "Matnlarni tahlil qilish (TF-IDF)",
      en: "Text Mining & TF-IDF"
    },
    description: {
      uz: "NLP preprocessing (Tokenization, Stemming vs Lemmatization), Bag-of-Words va N-gramlar, TF-IDF matematikasi, Cosine Similarity va Sentimental tahlil.",
      en: "NLP preprocessing, Stemming vs Lemmatization, Bag-of-Words & N-grams, TF-IDF math, Cosine Similarity, and Sentiment Analysis."
    },
    sections: [
      {
        heading: { uz: "11.1. Matn Preprocessing: Tokenizatsiya, Stemming va Lemmatization", en: "11.1. Text Preprocessing Pipeline" },
        bodyHtml: {
          uz: "<p>Matnlarning 80% dan ortig'i strukturasiz (yangiliklar, sharhlar, chatlar). Modelga berishdan oldin matn tozalanadi:</p><ol><li><strong>Lowercasing &amp; Regex cleaning:</strong> kichik harfga o'tkazish, HTML/tinish belgilarini olish.</li><li><strong>Tokenization:</strong> gapni so'z yoki sub-word tokenlarga bo'lish.</li><li><strong>Stop-words removal:</strong> \"va\", \"bilan\", \"uchun\", \"the\", \"is\" kabi ma'nosiz so'zlarni filtrlash (Ehtiyot: sentimental tahlilda <code>\"not\" / \"emas\"</code> ni o'chirmang!).</li><li><strong>Stemming vs Lemmatization:</strong> Stemming qo'shimchani qo'pol kesadi (<code>\"universities\" → \"univers\"</code>); Lemmatization esa lug'at va morfologiyaga tayanib haqiqiy asosga keltiradi (<code>\"better\" → \"good\"</code>).</li></ol>",
          en: "<p>Pipeline: Lowercasing &amp; Cleaning → Tokenization → Stop-word filtering (keep negations like <em>not</em> for sentiment!) → <strong>Stemming</strong> (fast heuristic suffix chopping) vs <strong>Lemmatization</strong> (dictionary-aware canonical root).</p>"
        }
      },
      {
        heading: { uz: "11.2. Bag-of-Words (BoW) va N-gramlar", en: "11.2. Bag-of-Words & N-Grams" },
        bodyHtml: {
          uz: "<p><strong>Bag-of-Words</strong> har hujjatni lug'atdagi so'zlar chastotasi vektoriga aylantiradi. Kamchiligi: so'z tartibi yo'qoladi (<code>\"yaxshi emas\"</code> bilan <code>\"yaxshi\"</code> ajralmaydi). Buni yumshatish uchun <strong>N-gramlar</strong> (masalan, Bigrams: <code>\"juda yaxshi\"</code>, <code>\"yaxshi emas\"</code>) qo'llaniladi.</p>",
          en: "<p><strong>BoW</strong> ignores word order; <strong>N-grams</strong> (bigrams like <code>\"not good\"</code>) capture short local phrases at the cost of a larger vocabulary.</p>"
        }
      },
      {
        heading: { uz: "11.3. TF-IDF Matematikasi va Sublinear Scaling", en: "11.3. TF-IDF Weighting & Sublinear TF" },
        bodyHtml: {
          uz: "<p><strong>TF-IDF</strong> hujjatda ko'p uchraydigan, lekin barcha hujjatlarda kamyob bo'lgan so'zlarga eng katta vazn beradi. Scikit-Learn da nolga bo'linmaslik uchun silliqlangan IDF formulasi ishlatiladi:</p>",
          en: "<p><strong>TF-IDF</strong> balances term frequency inside a document against rarity across the corpus (Scikit-Learn uses smoothed IDF with $+1$):</p>"
        },
        latex: "\\text{TF}(t,d)=\\frac{\\text{count}(t,d)}{|d|}, \\quad \\text{IDF}(t)=\\ln\\left(\\frac{1+N}{1+\\text{df}(t)}\\right)+1, \\quad \\text{TF-IDF}=\\text{TF}\\times\\text{IDF}",
        widget: 'tfidf-sim'
      },
      {
        heading: { uz: "11.4. Cosine Similarity va Sentimental Tahlil", en: "11.4. Cosine Similarity & Sentiment Analysis" },
        bodyHtml: {
          uz: "<p>Matn vektorlari juda siyrak (sparse, 99% nol) va uzunligi har xil bo'ladi (20 so'zli tvit vs 2000 so'zli maqola). Shu sabab Evklid masofasi o'rniga vektorlar orasidagi burchak — <strong>Cosine Similarity $\\in [0, 1]$</strong> o'lchanadi:</p>",
          en: "<p>Sparse text documents vary wildly in length, so compare orientation rather than magnitude using <strong>Cosine Similarity</strong>:</p>"
        },
        latex: "\\cos(\\theta) = \\frac{A \\cdot B}{\\|A\\|_2 \\|B\\|_2}"
      }
    ],
    slides: [
      { title: { uz: "11-mavzu: Matn tahlili (TF-IDF)", en: "Topic 11: Text Mining & TF-IDF" }, subtitle: { uz: "NLP Preprocessing · BoW · N-grams · TF-IDF · Cosine Similarity (80 daqiqa)", en: "Text Vectorization, Similarity & Classification (80 min)" }, points: { uz: ["Matn preprocessing: Tokenization, Stop-words, Stemming vs Lemma", "Bag-of-Words va Bigram/N-gramlar", "TF-IDF formulasi va qo'lda hisoblash", "Cosine Similarity vs Evklid masofasi", "MultinomialNB, Sentiment Analysis va Lab 11"], en: ["Text preprocessing & Stemming vs Lemmatization", "BoW & N-grams for local context", "TF-IDF math & worked example", "Cosine Similarity for sparse vectors", "Sentiment Analysis & Lab 11"] } },
      { title: { uz: "Matn Tahlili Ilovalari", en: "Text Mining Applications" }, points: { uz: ["Spam va Phishing filtrlash", "E-commerce sharhlarida Sentimental tahlil (musbat/manfiy)", "Yangiliklarni avtomatik mavzuga ajratish", "Qidiruv tizimlari (Search Ranking) va RAG qidiruvi"], en: ["Spam & phishing detection", "Customer review Sentiment Analysis", "News & ticket topic routing", "Information retrieval & modern RAG search"] } },
      { title: { uz: "NLP Preprocessing Bosqichlari", en: "Text Preprocessing Pipeline" }, points: { uz: ["1. Kichik harf + tinish/URL tozalash", "2. Tokenizatsiya: gap → tokenlar ro'yxati", "3. Stop-so'zlar: 'va', 'bilan', 'the' (DIQQAT: 'emas/not' ni saqlang!)", "4. Stemming (tez, qo'pol) vs Lemmatization (lug'atli, aniq)"], en: ["1. Lowercase & strip punctuation/HTML", "2. Tokenize sentences into tokens", "3. Remove stop-words (CAUTION: keep negations like 'not'!)", "4. Stemming vs Lemmatization"] } },
      { title: { uz: "Stemming vs Lemmatization", en: "Stemming vs Lemmatization" }, table: { headers: { uz: ["Asl so'z", "Stemming (Porter)", "Lemmatization"], en: ["Word", "Stemming", "Lemmatization"] }, rows: { uz: [["studies", "studi", "study"], ["better", "better", "good"], ["running", "run", "run"]], en: [["studies", "studi", "study"], ["better", "better", "good"], ["running", "run", "run"]] } } },
      { title: { uz: "Bag-of-Words (BoW) va N-Gramlar", en: "Bag-of-Words & N-Grams" }, points: { uz: ["D1: 'telefon juda yaxshi' | D2: 'telefon yaxshi emas'", "Unigram BoW so'z tartibini yo'qotadi", "Bigram (ngram_range=(1,2)): 'yaxshi emas' birlik sifatida saqlanadi!", "Kamchilik: Bigram/Trigram lug'at hajmini keskin oshiradi"], en: ["Unigrams lose negation & word order", "Bigrams capture 'not good' or 'data mining' as single features", "Trade-off: larger sparse feature matrix"] } },
      { title: { uz: "TF-IDF: So'z Muhimligini O'lchash", en: "TF-IDF Mathematical Intuition" }, latex: "\\text{TF-IDF}(t,d) = \\text{TF}(t,d) \\times \\log\\left(\\frac{N}{\\text{df}(t)}\\right)", points: { uz: ["TF: so'z shu hujjatda necha marta keldi (mahalliy muhimlik)", "IDF: so'z butun korpusda qanchalik kamyob (global noyoblik)", "Har hujjatda uchraydigan 'va', 'bu' so'zlari IDF ≈ 0 ga tushadi"], en: ["TF measures local importance inside document d", "IDF rewards rare terms across the N documents", "Ubiquitous words drop toward zero weight"] } },
      { title: { uz: "Qo'lda TF-IDF Hisoblash", en: "Worked TF-IDF Example" }, points: { uz: ["Korpus N = 100 hujjat; 'algoritm' df = 10 hujjatda bor", "D1 da jami 50 ta so'z, 'algoritm' = 3 marta kelgan", "TF = 3 / 50 = 0.06", "IDF = log₁₀(100 / 10) = log₁₀(10) = 1.0 → TF-IDF = 0.06 × 1.0 = 0.06"], en: ["N = 100 docs; 'algorithm' occurs in df = 10 docs", "Doc 1 has 50 words, 'algorithm' appears 3 times", "TF = 3/50 = 0.06, IDF = log₁₀(100/10) = 1.0 → TF-IDF = 0.06"] } },
      { title: { uz: "Interaktiv TF-IDF Kalkulyatori", en: "Interactive TF-IDF Explorer" }, widget: 'tfidf-sim' },
      { title: { uz: "Cosine Similarity (Kosinus O'xshashligi)", en: "Cosine Similarity for Sparse Text" }, latex: "\\cos(\\theta) = \\frac{A \\cdot B}{\\|A\\|\\|B\\|}", points: { uz: ["Nega Evklid emas? Chunki bir xil maqolani 2 marta nusxalasak, Evklid masofasi uzoqlashadi!", "Cosine faqat vektorlar yo'nalishi (burchak) ga qaraydi → hujjat uzunligidan mustaqil!"], en: ["Doubling a document inflates Euclidean distance even though topic is identical", "Cosine compares angle only — completely length-invariant!"] } },
      { title: { uz: "Talabalarga savol (Stop-words)", en: "Class Discussion: Stop-Words Trap" }, discussion: { q: { uz: "Mahsulot sharhlarida Sentimental tahlil (ijobiy/salbiy) qilyapsiz. Agar standart inglizcha stop-so'zlar ro'yxatidan 'not', 'no', 'never' so'zlarini olib tashlasak nima bo'ladi?", en: "In product review Sentiment Analysis, what happens if you blindly strip standard stop-words including 'not', 'no', and 'never'?" }, a: { uz: "<code>\"This phone is not good\"</code> jumlasi <code>\"phone good\"</code> ga aylanib, salbiy sharh <strong>Ijobiy</strong> deb xato tasniflanadi! Sentimental tahlilda inkor so'zlar saqlanishi shart.", en: "<code>\"This phone is not good\"</code> collapses to <code>\"phone good\"</code>, flipping negative reviews to Positive! Always preserve negations in sentiment pipelines." } } },
      { title: { uz: "Sentimental Tahlil Yondashuvlari", en: "Approaches to Sentiment Analysis" }, points: { uz: ["1. Leksikon usuli: ijobiy/salbiy so'zlar lug'ati (VADER)", "2. Klassik ML: TF-IDF (1,2-gram) + MultinomialNB / LogisticRegression / LinearSVC", "3. Transformerlar: BERT, RoBERTa, UzBERT (kontekstual embeddinglar)"], en: ["1. Lexicon rules (VADER)", "2. Classical ML: TF-IDF (1,2-grams) + MultinomialNB / LinearSVC", "3. Deep Transformers: BERT / RoBERTa for deep context"] } }
    ],
    lab: {
      title: { uz: "L11: TF-IDF (1,2-gram), Cosine Similarity va Matn Tasniflash", en: "L11: TF-IDF Bigrams, Cosine Similarity & Classification" },
      objective: { uz: "TfidfVectorizer(ngram_range=(1,2)) bilan matnlarni vektorlash, Cosine Similarity orqali o'xshash hujjat topish va MultinomialNB / LogisticRegression ni solishtirish.", en: "Vectorize text with TF-IDF bigrams, retrieve similar docs via cosine_similarity, and train classifiers." },
      steps: [
        {
          title: { uz: "TF-IDF Vektorizatsiya va Eng Muhim So'zlar", en: "TF-IDF Vectorization & Vocabulary" },
          desc: { uz: "Unigram va Bigramlar bilan TF-IDF matritsa tuzing.", en: "Build TF-IDF matrix with unigrams and bigrams." },
          code: `from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

docs = [
    "Futbol chempionati qiziqarli o'tdi", "Milliy terma jamoa g'alaba qozondi",
    "Basketbol turnirida rekord qo'yildi", "Sport musobaqasi yakunlandi",
    "Python dasturlash va sun'iy intellekt", "Data Mining algoritmlari kursi",
    "Neyron tarmoqlar va chuqur o'rganish", "Mashina o'rganish modellari",
    "Iqtisodiyot o'sishi va eksport hajmi", "Valyuta kursi bugun o'zgardi",
    "Milliy iqtisodiyot rivojlanish dasturi", "Bozorda inflyatsiya pasaydi"
]
y = [0,0,0,0, 1,1,1,1, 2,2,2,2]
classes = ['Sport', 'Texnologiya', 'Iqtisodiyot']

vec = TfidfVectorizer(ngram_range=(1, 2))
X = vec.fit_transform(docs)
print("TF-IDF shape:", X.shape)`
        },
        {
          title: { uz: "Cosine Similarity orqali O'xshash Hujjatlarni Qidirish", en: "Semantic Retrieval via Cosine Similarity" },
          desc: { uz: "Yangi qidiruv so'roviga eng yaqin 2 ta hujjatni toping.", en: "Find the top-2 closest documents to a query string." },
          code: `from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

query = vec.transform(["Python va Data Mining o'rganish"])
sims = cosine_similarity(query, X).flatten()
top2 = np.argsort(sims)[-2:][::-1]
for i in top2:
    print(f"sim={sims[i]:.3f} -> {docs[i]}")`
        },
        {
          title: { uz: "MultinomialNB va LogisticRegression Tasniflash", en: "Train MultinomialNB & Predict New Headlines" },
          desc: { uz: "Cross-validation bilan tekshirib yangi jumlalarni tasniflang.", en: "Evaluate with CV and predict unseen Uzbek headlines." },
          code: `from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import cross_val_score

nb = MultinomialNB(alpha=0.5)
print("3-Fold CV:", round(cross_val_score(nb, X, y, cv=3).mean(), 3))
nb.fit(X, y)
tests = ["Yosh dasturchi Python o'rganmoqda", "Eksport va valyuta bozori", "Terma jamoa chempion"]
for t, p in zip(tests, nb.predict(vec.transform(tests))):
    print(f"'{t}' -> {classes[p]}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: sublinear_tf=True parametrini yoqib Cosine Similarity qiymatlari qanday o'zgarishini tekshiring.",
          "2-variant: O'zbekcha 6 ta stop-so'z ('va', 'bilan', 'bu', 'ham', 'uchun', 'bugun') ro'yxatini stop_words ga bering.",
          "3-variant: LogisticRegression va LinearSVC modellarini MultinomialNB bilan solishtiring."
        ],
        en: [
          "Variant 1: Enable sublinear_tf=True and observe similarity shifts.",
          "Variant 2: Pass a custom Uzbek stop-words list to TfidfVectorizer.",
          "Variant 3: Compare LinearSVC vs MultinomialNB accuracy."
        ]
      }
    },
    glossary: [
      { uz: "Tokenizatsiya", en: "Tokenization", defUz: "Matnni so'z yoki kichik birliklarga ajratish", defEn: "Splitting text into word/subword tokens" },
      { uz: "Lemmatization", en: "Lemmatization", defUz: "So'zni lug'at asosidagi haqiqiy o'zak shakliga keltirish", defEn: "Reducing words to dictionary canonical form" },
      { uz: "TF-IDF", en: "TF-IDF", defUz: "So'zning hujjatdagi chastotasi va korpusdagi noyoblik vazni", defEn: "Term Frequency × Inverse Document Frequency" },
      { uz: "Cosine Similarity", en: "Cosine Similarity", defUz: "Vektorlar orasidagi burchak kosinusi (uzunlikka befarq)", defEn: "Normalized dot product measuring vector orientation" }
    ],
    quiz: [
      { q: { uz: "TF-IDF da IDF komponenti nima uchun kerak?", en: "Why is IDF included in TF-IDF?" }, options: [{ label: 'A', uz: "So'z uzunligini o'lchash", en: "Word length" }, { label: 'B', uz: "Ko'p hujjatda uchraydigan umumiy so'zlar vaznini pasaytirish uchun", en: "To down-weight common words appearing across many docs" }, { label: 'C', uz: "Tarjima uchun", en: "Translation" }, { label: 'D', uz: "Stemming uchun", en: "Stemming" }], answer: 'B', explanation: { uz: "IDF kamyob, ma'noli kalit so'zlarni ko'taradi.", en: "IDF boosts rare, discriminative terms." } },
      { q: { uz: "Stemming va Lemmatization ning asosiy farqi nima?", en: "How does Lemmatization differ from Stemming?" }, options: [{ label: 'A', uz: "Lemmatization lug'at va grammatikani hisobga olib haqiqiy asosga keltiradi", en: "Lemmatization uses vocabulary/morphology to yield valid root words" }, { label: 'B', uz: "Lemmatization faqat raqamlar uchun", en: "Numbers only" }, { label: 'C', uz: "Stemming sekinroq", en: "Stemming is slower" }, { label: 'D', uz: "Farqi yo'q", en: "No difference" }], answer: 'A', explanation: { uz: "Stemming qo'pol kesadi ('studies'→'studi'), Lemmatization 'study' beradi.", en: "Stemming chops suffixes heuristically; lemmatization finds valid lemmas." } },
      { q: { uz: "Hujjatlar o'xshashligida nima uchun Evklid emas Cosine Similarity ishlatiladi?", en: "Why prefer Cosine Similarity over Euclidean distance for text?" }, options: [{ label: 'A', uz: "Hujjat uzunligi (so'z soni) farqiga bog'liq bo'lmasligi uchun", en: "It is invariant to document length" }, { label: 'B', uz: "Faqat 2 so'z uchun", en: "Only 2 words" }, { label: 'C', uz: "Z-score shart", en: "Needs Z-score" }, { label: 'D', uz: "Sekinroq", en: "Slower" }], answer: 'A', explanation: { uz: "Cosine faqat vektorlar yo'nalishini solishtiradi.", en: "Cosine measures angle rather than vector length." } },
      { q: { uz: "Sentimental tahlilda qaysi so'zlarni stop-words dan o'chirmaslik kerak?", en: "Which words should NOT be removed in Sentiment Analysis?" }, options: [{ label: 'A', uz: "Inkor so'zlar ('not', 'no', 'emas')", en: "Negations ('not', 'no', 'never')" }, { label: 'B', uz: "Ismlar", en: "Names" }, { label: 'C', uz: "Sanalar", en: "Dates" }, { label: 'D', uz: "Barcha fe'llar", en: "All verbs" }], answer: 'A', explanation: { uz: "Inkor so'z o'chirilsa jumla ma'nosi teskarisiga o'zgaradi.", en: "Removing negations reverses sentiment polarity." } },
      { q: { uz: "MultinomialNB matn tasniflashda nima uchun samarali?", en: "Why is MultinomialNB effective for text classification?" }, options: [{ label: 'A', uz: "Yuqori o'lchamli siyrak hisob/TF-IDF vektorlarida tez va aniq ishlaydi", en: "Fast and accurate on sparse high-dimensional word counts/TF-IDF" }, { label: 'B', uz: "Faqat 2 sinf", en: "Binary only" }, { label: 'C', uz: "Scaling talab qiladi", en: "Needs scaling" }, { label: 'D', uz: "Grafik chizadi", en: "Plots" }], answer: 'A', explanation: { uz: "Siyrak matn matritsalarida chiziqli tezlikda ishlaydi.", en: "Naturally models term frequency distributions." } }
    ]
  },

  // ==================== TOPIC 12 ====================
  {
    id: 12,
    slug: '12-web-mining',
    hours: 2,
    labs: 0,
    keywords: ['Web Mining', 'Crawling', 'PageRank', 'Damping Factor', 'Centrality', 'Betweenness', 'Community Detection', 'Collaborative Filtering'],
    title: {
      uz: "Veb va ijtimoiy tarmoqlar tahlili",
      en: "Web & Social Network Mining"
    },
    description: {
      uz: "Web Content/Structure/Usage mining, PageRank Power Iteration & Spider Traps, Graf Markazligi (Degree/Betweenness/Closeness) va Tavsiya tizimlari.",
      en: "Web Content/Structure/Usage mining, PageRank math & teleportation, Graph Centralities, Community Detection, and Recommenders."
    },
    sections: [
      {
        heading: { uz: "12.1. Veb-Mining Uch Yo'nalishi va Veb Crawling", en: "12.1. Three Pillars of Web Mining & Crawling" },
        bodyHtml: {
          uz: "<ul><li><strong>Web Content Mining:</strong> HTML sahifa matni, rasmlar va strukturaviy teglardan axborot ajratish.</li><li><strong>Web Structure Mining:</strong> sahifalar orasidagi giperhavolalar grafini tahlil qilish (PageRank, HITS).</li><li><strong>Web Usage Mining:</strong> foydalanuvchi klik loglari, sessiyalar va konversiya yo'llarini o'rganish.</li></ul><p><strong>Crawler (Spider):</strong> Seed URL lardan boshlab BFS/prioritet navbatida sahifalarni yuklab, <code>robots.txt</code> qoidalariga amal qilib vebni indekslaydi.</p>",
          en: "<ul><li><strong>Web Content:</strong> extracting text/media from pages.</li><li><strong>Web Structure:</strong> analyzing hyperlink topology (PageRank, HITS).</li><li><strong>Web Usage:</strong> mining server/clickstream logs.</li></ul>"
        }
      },
      {
        heading: { uz: "12.2. PageRank Algoritmi, Dead Ends va Spider Traps", en: "12.2. PageRank Math, Dead Ends & Teleportation" },
        bodyHtml: {
          uz: "<p><strong>PageRank</strong> (Page &amp; Brin, 1998) — har bir kiruvchi havolani \"ovoz\" sifatida ko'radi, ammo nufuzli sahifaning ovozi og'irroq! Muammolar: <strong>Dead Ends</strong> (chiquvchi havolasi yo'q sahifalar PageRank ni yo'qotadi) va <strong>Spider Traps</strong> (faqat o'zaro havolalangan yopiq halqa butun reytingni yutib oladi).</p><p><strong>Yechim — Random Surfer &amp; Damping Factor ($d=0.85$):</strong> Foydalanuvchi 85% ehtimol bilan havolani bosadi, 15% ($1-d$) ehtimol bilan tasodifiy sahifaga sakraydi (<em>teleportation</em>).</p>",
          en: "<p><strong>PageRank</strong> propagates authority across outgoing links. To escape <strong>Dead Ends</strong> and <strong>Spider Traps</strong>, the Random Surfer follows links with probability $d=0.85$ and teleports randomly with $1-d=0.15$:</p>"
        },
        latex: "PR(A) = \\frac{1-d}{N} + d \\sum_{T_i \\to A} \\frac{PR(T_i)}{C(T_i)}",
        widget: 'pagerank-sim'
      },
      {
        heading: { uz: "12.3. Ijtimoiy Tarmoqlar Grafi va Markazlik Ko'rsatkichlari", en: "12.3. Social Network Centralities & Communities" },
        table: {
          headers: { uz: ["Ko'rsatkich", "Ma'nosi", "Amaliy roli"], en: ["Centrality", "Meaning", "Network Role"] },
          rows: {
            uz: [
              ["Degree Centrality", "Tugunning bevosita aloqalar soni", "Mahalliy mashhurlik (eng ko'p do'stli shaxs)"],
              ["Betweenness", "Eng qisqa yo'llarning qanchasi shu tugundan o'tadi", "Axborot ko'prigi (Broker) — olib tashlansa tarmoq uziladi"],
              ["Closeness", "Boshqa barcha tugunlarga o'rtacha masofaning teskarisi", "Tezkor tarqatuvchi (xabarni eng tez yetkazadi)"],
              ["Eigenvector / PageRank", "Muhim tugunlar bilan bog'langanlik", "Haqiqiy ta'sir kuchi (VIP doira)"]
            ],
            en: [
              ["Degree", "Direct edge count", "Local popularity hub"],
              ["Betweenness", "Fraction of shortest paths passing through node", "Bridge/broker connecting separate communities"],
              ["Closeness", "Inverse average shortest-path distance", "Fastest broadcaster across graph"],
              ["PageRank", "Connections to high-status nodes", "Global structural influence"]
            ]
          }
        }
      },
      {
        heading: { uz: "12.4. Tavsiya Tizimlari (Recommender Systems)", en: "12.4. Recommender Systems" },
        bodyHtml: {
          uz: "<ul><li><strong>Collaborative Filtering (User-based / Item-based / Matrix Factorization SVD):</strong> \"Siz bilan o'xshash didli foydalanuvchilar yoqtirgan filmlar\". Cheklovi: <em>Cold Start muammosi</em> (yangi foydalanuvchi/tovar haqida tarix yo'q!).</li><li><strong>Content-Based Filtering:</strong> TF-IDF / janr / xususiyat o'xshashligi asosida tavsiya. Cold-start tovarlar uchun yaxshi, lekin \"filter bubble\" yaratadi.</li><li><strong>Hybrid:</strong> Netflix va Amazon ikkalasini birlashtiradi.</li></ul>",
          en: "<ul><li><strong>Collaborative Filtering:</strong> User-item interaction patterns (suffers from <em>Cold Start</em>).</li><li><strong>Content-Based:</strong> Item attribute similarity (solves new-item cold start, risks filter bubbles).</li><li><strong>Hybrid:</strong> Combines both (Netflix, Amazon).</li></ul>"
        }
      }
    ],
    slides: [
      { title: { uz: "12-mavzu: Veb va Ijtimoiy Tarmoqlar", en: "Topic 12: Web & Social Network Mining" }, subtitle: { uz: "PageRank · Graf Markazligi · Tavsiya Tizimlari (80 daqiqa)", en: "Link Graphs, Centralities & Recommender Systems (80 min)" }, points: { uz: ["Web Content, Structure va Usage mining", "PageRank formulasi, Dead Ends va Spider Traps", "Power Iteration interaktiv simulyatsiya", "Degree, Betweenness, Closeness, Louvain jamoalar", "Collaborative vs Content-Based Tavsiya tizimlari"], en: ["Content, Structure & Usage mining", "PageRank math, Dead Ends & Spider Traps", "Power Iteration simulation", "Graph centralities & Community Detection", "Recommender Systems & Cold Start"] } },
      { title: { uz: "Veb-Mining Uch Yo'nalishi", en: "3 Pillars of Web Mining" }, points: { uz: ["Web Content: sahifa matni va strukturasini tahlil qilish", "Web Structure: giperhavolalar grafi (PageRank)", "Web Usage: klik oqimlari va foydalanuvchi sessiyalari"], en: ["Content: text/media extraction", "Structure: hyperlink graph topology", "Usage: clickstream & session logs"] } },
      { title: { uz: "PageRank Asosiy G'oyasi (Google, 1998)", en: "PageRank Intuition" }, points: { uz: ["Ko'p havola olgan sahifa muhim, lekin Harvard/Wikipedia dan kelgan 1 ta havola 100 ta noma'lum blogdan qimmatroq!", "Agar T sahifasi 10 ta saytga havola bersa, har biriga o'z ovozining 1/10 qismini uzatadi"], en: ["In-links act as votes, weighted by the voter's own PageRank", "Authority splits equally across outgoing links C(T_i)"] } },
      { title: { uz: "PageRank Formulasi va Teleportation (d=0.85)", en: "PageRank Equation & Teleportation" }, latex: "PR(A) = \\frac{1-d}{N} + d \\sum_{T_i \\to A} \\frac{PR(T_i)}{C(T_i)}", points: { uz: ["Dead End (chiquvchi havolasiz sahifa) va Spider Trap (yopiq halqa) reytingni buzadi", "Damping factor d = 0.85: 85% havola bo'ylab yuradi, 15% istalgan sahifaga sakraydi"], en: ["Dead ends leak rank; spider traps hoard rank", "Teleportation (1-d = 0.15) guarantees unique convergence"] } },
      { title: { uz: "Interaktiv PageRank Power Iteration", en: "Interactive PageRank Simulator" }, widget: 'pagerank-sim' },
      { title: { uz: "Qo'lda 1-Iteratsiya PageRank Misoli", en: "Hand Trace: 1 PageRank Step" }, points: { uz: ["N=3 (A, B, C), d=0.85, boshlang'ich PR = 1/3", "B → A, C (C(B)=2); C → A (C(C)=1)", "PR_new(A) = 0.15/3 + 0.85 × [(1/3)/2 + (1/3)/1] = 0.05 + 0.85×0.5 = 0.475!"], en: ["N=3, d=0.85, init PR=1/3", "B links to A,C (out=2); C links to A (out=1)", "PR(A) = 0.05 + 0.85×(1/6 + 1/3) = 0.475"] } },
      { title: { uz: "Ijtimoiy Tarmoqlarda 4 ta Markazlik", en: "4 Graph Centrality Measures" }, table: { headers: { uz: ["Metrika", "Kimni topadi?"], en: ["Metric", "Identifies"] }, rows: { uz: [["Degree", "Eng ko'p ulanishli tugun"], ["Betweenness", "Guruhlararo ko'prik (Broker)"], ["Closeness", "Hamma joyga eng tez yetuvchi"], ["PageRank", "Eng nufuzli doira"]], en: [["Degree", "Hub with most edges"], ["Betweenness", "Critical bridge between clusters"], ["Closeness", "Fastest information spreader"], ["PageRank", "Connected to influential nodes"]] } } },
      { title: { uz: "Talabalarga savol (Betweenness vs Degree)", en: "Class Discussion: Bridge Nodes" }, discussion: { q: { uz: "Virusli epidemiya yoki korporativ ma'lumot tarqalishini to'xtatish uchun bitta odamni izolyatsiya qilish kerak. Degree eng kattani tanlaysizmi yoki Betweenness eng kattani?", en: "To halt a viral outbreak between two separate cities with minimal quarantines, should you target the node with highest Degree or highest Betweenness?" }, a: { uz: "<strong>Highest Betweenness!</strong> Eng katta Degree ga ega shaxs o'z shahri ichida ko'p tanishiga ega bo'lishi mumkin, ammo shaharlarni bog'laydigan yagona ko'prik tugun (Betweenness) izolyatsiya qilinsa, tarqalish ikkinchi jamoaga o'tmaydi!", en: "<strong>Highest Betweenness!</strong> High-degree hubs sit inside one cluster, whereas high-betweenness brokers bridge separate clusters." } } },
      { title: { uz: "Jamoalarni Aniqlash (Community Detection)", en: "Community Detection & Modularity" }, points: { uz: ["Graf ichida ichki qirralari zich, tashqi qirralari siyrak guruhlarni topish", "Louvain algoritmi Modularity Q ni maksimallashtiradi", "Qo'llanilishi: firibgarlar halqalarini topish, mijoz klasterlari"], en: ["Finds densely interconnected subgraphs (Louvain modularity maximization)", "Detects fraud rings, echo chambers, and biological modules"] } },
      { title: { uz: "Tavsiya Tizimlari & Cold Start Muammosi", en: "Recommender Systems & Cold Start" }, points: { uz: ["Collaborative Filtering: foydalanuvchi-mahsulot matritsasi (User-User / Item-Item / SVD)", "Content-Based: mahsulot atributlari o'xshashligi", "Cold Start: yangi ro'yxatdan o'tgan foydalanuvchiga nimani tavsiya qilish? (Yechim: mashhur top-N + kontent anketa)"], en: ["Collaborative Filtering learns from user-item matrices (SVD)", "Content-Based matches item attributes", "Cold Start solved via onboarding preferences + popularity fallback"] } }
    ],
    lab: {
      title: { uz: "L12: NetworkX da Karate Club Tarmog'i, Markazlik va Jamoalar", en: "L12: NetworkX Centralities, PageRank & Communities" },
      objective: { uz: "Karate Club ijtimoiy grafida PageRank, Degree va Betweenness ko'rsatkichlarini hisoblash hamda Greedy Modularity bilan jamoalarni ajratish.", en: "Analyze the Karate Club graph using PageRank, Betweenness, and community detection." },
      steps: [
        {
          title: { uz: "Grafni yuklash va PageRank / Betweenness hisoblash", en: "Load Graph & Rank Top Influential Nodes" },
          desc: { uz: "Karate Club grafida tugun va qirralar soni hamda top-5 markazlikni chiqaring.", en: "Compute PageRank and Betweenness centralities." },
          code: `import networkx as nx

G = nx.karate_club_graph()
print(f"Nodes: {G.number_of_nodes()} | Edges: {G.number_of_edges()}")
pr = nx.pagerank(G, alpha=0.85)
bet = nx.betweenness_centrality(G)

print("Top 5 by PageRank:")
for n, s in sorted(pr.items(), key=lambda x: x[1], reverse=True)[:5]:
    print(f"  Node {n:2d}: PR={s:.4f} | Betweenness={bet[n]:.4f}")`
        },
        {
          title: { uz: "Jamoalarni Aniqlash (Modularity Communities)", en: "Detect Communities with Greedy Modularity" },
          desc: { uz: "Graf ichidagi tabiiy guruhlarni topib Modularity qiymatini hisoblang.", en: "Partition the graph into communities and compute modularity." },
          code: `from networkx.algorithms.community import greedy_modularity_communities, modularity

comms = list(greedy_modularity_communities(G))
print(f"Detected {len(comms)} communities | Modularity Q={modularity(G, comms):.3f}")
for idx, c in enumerate(comms):
    print(f"  Community {idx+1} ({len(c)} members): {sorted(list(c))[:8]}...")`
        },
        {
          title: { uz: "Tarmoq Grafini Vizuallashtirish", en: "Visualize Graph Colored by Community" },
          desc: { uz: "Tugun o'lchamini PageRank ga, rangini esa jamoaga moslab chizing.", en: "Plot nodes sized by PageRank and colored by community." },
          code: `import matplotlib.pyplot as plt
node_comm = {n: i for i, c in enumerate(comms) for n in c}
pos = nx.spring_layout(G, seed=42)
plt.figure(figsize=(8, 6))
nx.draw_networkx(G, pos,
    node_size=[pr[n]*6000 for n in G.nodes()],
    node_color=[node_comm[n] for n in G.nodes()],
    cmap='Set2', with_labels=True, font_size=8)
plt.title("Karate Club: PageRank Size & Community Color")
plt.axis('off'); plt.savefig("l12_network.png", dpi=150)`
        }
      ],
      variants: {
        uz: [
          "1-variant: Closeness centrality bo'yicha top-5 tugunni chiqaring va PageRank bilan farqini izohlang.",
          "2-variant: Eng katta Betweenness li tugunni G.remove_node() bilan olib tashlab graf nechta qismga bo'linishini tekshiring.",
          "3-variant: alpha=0.50 va alpha=0.95 da PageRank reytingi qanday o'zgarishini solishtiring."
        ],
        en: [
          "Variant 1: Compute top-5 nodes by Closeness Centrality and compare with PageRank.",
          "Variant 2: Remove the top Betweenness node and inspect connected components.",
          "Variant 3: Compare PageRank scores at damping factors 0.50 vs 0.95."
        ]
      }
    },
    glossary: [
      { uz: "PageRank", en: "PageRank", defUz: "Kiruvchi havolalar sifati orqali sahifa nufuzini baholovchi algoritm", defEn: "Link-based authority score with random teleportation" },
      { uz: "Betweenness Centrality", en: "Betweenness Centrality", defUz: "Tugunning tarmoq guruhlari orasidagi ko'prik roli", defEn: "Share of shortest paths crossing a node" },
      { uz: "Cold Start", en: "Cold Start", defUz: "Yangi foydalanuvchi yoki mahsulot haqida tarix yo'qligi muammosi", defEn: "Lack of interaction history for new users/items" },
      { uz: "Modularity", en: "Modularity", defUz: "Tarmoq jamoalarining ichki bog'lanish zichligi sifati", defEn: "Quality score of community partition density" }
    ],
    quiz: [
      { q: { uz: "PageRank sahifa muhimligini qanday baholaydi?", en: "How does PageRank score page importance?" }, options: [{ label: 'A', uz: "So'z soni", en: "Word count" }, { label: 'B', uz: "Kiruvchi havolalar soni va havola beruvchining o'z nufuzi bilan", en: "Quantity and authority of incoming links" }, { label: 'C', uz: "Sahifa hajmi", en: "File size" }, { label: 'D', uz: "Tezlik", en: "Load speed" }], answer: 'B', explanation: { uz: "Nufuzli sahifadan kelgan havola ko'proq vazn uzatadi.", en: "Authoritative in-links carry higher weight." } },
      { q: { uz: "PageRank da teleportation (1-d = 0.15) nima muammoni hal qiladi?", en: "What problems does teleportation (1-d = 0.15) solve in PageRank?" }, options: [{ label: 'A', uz: "Dead Ends va Spider Traps", en: "Dead Ends and Spider Traps" }, { label: 'B', uz: "Stop so'zlar", en: "Stop words" }, { label: 'C', uz: "Overfitting", en: "Overfitting" }, { label: 'D', uz: "Scaling", en: "Scaling" }], answer: 'A', explanation: { uz: "Tasodifiy sakrash yopiq halqalardan chiqib ketishni ta'minlaydi.", en: "Random jumps prevent rank traps and rank sinks." } },
      { q: { uz: "Veb-miningning uch turi qaysilar?", en: "What are the 3 types of Web Mining?" }, options: [{ label: 'A', uz: "Content, Structure, Usage", en: "Web Content, Web Structure, Web Usage" }, { label: 'B', uz: "HTML, CSS, JS", en: "HTML, CSS, JS" }, { label: 'C', uz: "SQL, NoSQL, Graph", en: "SQL, NoSQL, Graph" }, { label: 'D', uz: "Audio, Video, Text", en: "Audio, Video, Text" }], answer: 'A', explanation: { uz: "Mazmun, havola tuzilmasi va foydalanish loglari.", en: "Content, link structure, and usage logs." } },
      { q: { uz: "\"Betweenness centrality\" nimani o'lchaydi?", en: "What does Betweenness Centrality measure?" }, options: [{ label: 'A', uz: "Aloqalar sonini", en: "Edge count" }, { label: 'B', uz: "Tugun nechta eng qisqa yo'l (ko'prik) ustida joylashganini", en: "How often a node lies on shortest paths between others" }, { label: 'C', uz: "Graf diametrini", en: "Diameter" }, { label: 'D', uz: "Support", en: "Support" }], answer: 'B', explanation: { uz: "Yuqori betweenness jamoalararo ko'prik tugunni bildiradi.", en: "Identifies bridge nodes between communities." } },
      { q: { uz: "Collaborative Filtering dagi 'Cold Start' muammosi nima?", en: "What is the 'Cold Start' problem in Collaborative Filtering?" }, options: [{ label: 'A', uz: "Server sekin yonishi", en: "Slow boot" }, { label: 'B', uz: "Yangi foydalanuvchi yoki mahsulotda baho/xarid tarixi yo'qligi", en: "No prior rating/interaction history for new users or items" }, { label: 'C', uz: "K=1 bo'lishi", en: "K=1" }, { label: 'D', uz: "Xotira to'lishi", en: "RAM full" }], answer: 'B', explanation: { uz: "Tarix bo'lmasa o'xshash foydalanuvchini topib bo'lmaydi.", en: "Cannot match preferences without historical interactions." } }
    ]
  }
);
