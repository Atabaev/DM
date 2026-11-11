window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== M4 / L4 ====================
  {
    id: 4,
    code: 'M4',
    labCode: 'L4',
    slug: '04-transformation-pca',
    hours: 2,
    labs: 1,
    keywords: ['Normalization', 'Min-Max', 'Z-Score', 'RobustScaler', 'Discretization', 'One-Hot', 'PCA', 'Tan Ch.2'],
    title: {
      uz: "Ma'lumotlarni shakllantirish, normallashtirish va o'lchamini qisqartirish",
      en: "Data Transformation, Normalization & Dimensionality Reduction"
    },
    description: {
      uz: "Min-Max, Z-Score, Robust va Decimal Scaling; Equal-Width/Frequency diskretizatsiya; Label vs One-Hot kodlash va PCA asoslari (Tan 2.3).",
      en: "Min-Max, Z-Score, Robust & Decimal scaling; Equal-Width/Frequency discretization; encoding; and PCA dimensionality reduction."
    },
    sections: [
      {
        heading: { uz: "4.1. Ma'lumotlarni Normallashtirish Usullari", en: "4.1. Feature Scaling & Normalization Methods" },
        bodyHtml: {
          uz: "<p>Masofaga asoslangan algoritmlar (<strong>k-NN, K-Means, SVM</strong>) va gradient tushishi (Neyron tarmoqlar) uchun barcha atributlar bir xil masshtabda bo'lishi shart. Agar Daromad [10⁶..10⁸] va Yosh [18..65] bo'lsa, katta diapazonli ustun masofani bosib ketadi. (Qaror daraxtlari esa scaling talab qilmaydi!).</p><ul><li><strong>Min-Max normallashtirish:</strong> qiymatlarni aniq $[0, 1]$ oralig'iga tushiradi (tasvir piksellari uchun ideal, lekin outlierga sezgir).</li><li><strong>Z-score standartlashtirish:</strong> o'rtachani $\\mu=0$, standart og'ishni $\\sigma=1$ ga keltiradi (SVM, PCA, LogReg uchun).</li><li><strong>RobustScaler:</strong> mediana va IQR ishlatadi — outlierlar ko'p bo'lganda eng xavfsiz.</li></ul>",
          en: "<p>Distance-based models (<strong>k-NN, K-Means, SVM</strong>) require uniform scaling. <strong>Min-Max</strong> maps to $[0,1]$; <strong>Z-score</strong> yields $\\mu=0, \\sigma=1$; <strong>RobustScaler</strong> uses Median/IQR to resist outliers.</p>"
        },
        latex: "x'_{\\text{minmax}}=\\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}}, \\qquad x'_z=\\frac{x-\\mu}{\\sigma}, \\qquad x'_{\\text{rob}}=\\frac{x-\\text{Med}}{IQR}",
        widget: 'scaling-demo'
      },
      {
        heading: { uz: "4.2. Diskretizatsiya va Binarizatsiya (Tan, 2.3-bo'lim)", en: "4.2. Discretization & Binarization (Tan Ch. 2.3)" },
        bodyHtml: {
          uz: "<p>Ba'zi algoritmlar (masalan, ID3 yoki Assotsiativ qoidalar) uzluksiz sonlarni emas, diskret toifalarni talab qiladi. <strong>Diskretizatsiya</strong> uzluksiz ustunni intervallarga bo'ladi:</p><ul><li><strong>Equal-Width (Teng kenglik):</strong> $[\\min, \\max]$ ni $k$ ta teng oraliqqa bo'lish (<code>width = (max-min)/k</code>). Kamchiligi: outlierlar bo'sh savatlar hosil qiladi.</li><li><strong>Equal-Frequency / Quantile (Teng chastota):</strong> har bir savatga teng $N/k$ ta obyekt tushadigan qilib bo'lish — outlierlarga chidamliroq.</li><li><strong>One-Hot Encoding:</strong> nominal kategoriyalarni 0/1 ustunlarga aylantirish (tartibsiz ustunlarda Label Encoding xato!).</li></ul>",
          en: "<p><strong>Discretization</strong> converts continuous features into intervals via <strong>Equal-Width</strong> (fixed interval size, outlier-sensitive) or <strong>Equal-Frequency / Quantile</strong> (equal count per bin). <strong>One-Hot Encoding</strong> converts nominal categories into binary indicators.</p>"
        }
      },
      {
        heading: { uz: "4.3. O'lcham La'nati va PCA (Principal Component Analysis)", en: "4.3. Curse of Dimensionality & PCA" },
        bodyHtml: {
          uz: "<p>Ustunlar soni $d$ juda oshib ketganda fazoning hajmi eksponensial kengayadi, nuqtalar bir-biridan deyarli bir xil uzoqlashadi va overfitting kuchayadi — bu <strong>Curse of Dimensionality (O'lcham la'nati)</strong> deyiladi.</p><p><strong>PCA</strong> (nazorat qilinmaydigan chiziqli usul) korrelyatsiyalashgan belgilarni o'zaro ortogonal <strong>Asosiy Komponentlarga (PC1, PC2, ...)</strong> aylantirib, maksimal dispersiyani (odatda $\\ge 95\\%$) saqlab o'lchamni kamaytiradi:</p><ol><li><strong>Z-score standartlashtirish</strong> (PCA dan oldin MAJBURIY!).</li><li>Kovariatsiya matritsasini hisoblash ($\\Sigma = \\frac{1}{n-1}X^T X$).</li><li>Eigenvalue $\\lambda_i$ va Eigenvector $v_i$ larni topib, kamayish tartibida saralash.</li><li>Kumulativ dispersiyaning 95% ini qoplaydigan $k$ ta komponentga proyeksiya qilish.</li></ol>",
          en: "<p><strong>PCA</strong> combats the <em>Curse of Dimensionality</em> by projecting standardized data onto orthogonal components capturing maximum variance: (1) Z-score standardize (MANDATORY), (2) Covariance matrix, (3) Eigendecomposition, (4) Retain top $k$ explaining $\\ge 95\\%$ variance.</p>"
        },
        latex: "\\text{Cumulative Variance}_k = \\frac{\\sum_{j=1}^k \\lambda_j}{\\sum_{i=1}^d \\lambda_i} \\ge 0.95"
      }
    ],
    slides: [
      { title: { uz: "M4: Normallashtirish, Diskretizatsiya va PCA", en: "M4: Normalization, Discretization & PCA" }, subtitle: { uz: "Tan Darsligi 2.3-bo'lim · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 2.3 · MITQ2506 · 80 min" }, points: { uz: ["Nega Scaling shart? (k-NN/SVM vs Decision Tree)", "Min-Max, Z-Score va RobustScaler formulalari", "Equal-Width vs Equal-Frequency Diskretizatsiya", "Label vs One-Hot Encoding", "Curse of Dimensionality, PCA 4 bosqichi va Lab 4"], en: ["Why scaling matters (distance models vs trees)", "Min-Max, Z-Score & RobustScaler", "Equal-Width vs Equal-Frequency discretization", "Label vs One-Hot Encoding", "Curse of Dimensionality, PCA & Lab 4"] } },
      { title: { uz: "Normallashtirish Nima Uchun Kerak?", en: "Why Feature Scaling Matters" }, points: { uz: ["Yosh ∈ [18, 65], Maosh ∈ [2,000,000, 50,000,000]", "Evklid masofasida Maosh Yoshni 100% bosib ketadi!", "Majburiy: k-NN, K-Means, SVM, PCA, Neyron tarmoqlar", "Shart emas: Decision Tree, Random Forest, XGBoost"], en: ["Large-range features dominate Euclidean distances", "Mandatory for: k-NN, K-Means, SVM, PCA, Neural Nets", "Not needed for: Decision Trees, Random Forest"] } },
      { title: { uz: "3 ta Asosiy Scaling Formulasi", en: "3 Scaling Formulas" }, latex: "x'_{mm}=\\frac{x-\\min}{\\max-\\min} \\in [0,1], \\qquad x'_z=\\frac{x-\\mu}{\\sigma}, \\qquad x'_{rob}=\\frac{x-\\text{Med}}{IQR}", points: { uz: ["Min-Max: aniq [0,1] chegara (tasvirlar), outlierga sezgir", "Z-Score: μ=0, σ=1 (SVM, PCA, LogReg)", "RobustScaler: outlierlar mavjud bo'lsa eng barqaror"], en: ["Min-Max: bounded [0,1], sensitive to outliers", "Z-Score: μ=0, σ=1, ideal for PCA & SVM", "RobustScaler: median & IQR resist outliers"] } },
      { title: { uz: "Interaktiv Scaling Lab: Outlier Ta'siri", en: "Interactive Scaling Lab" }, widget: 'scaling-demo' },
      { title: { uz: "Diskretizatsiya: Equal-Width vs Equal-Frequency", en: "Discretization Strategies (Tan 2.3)" }, points: { uz: ["Uzluksiz yoshni toifaga aylantirish (ID3, Apriori uchun)", "Equal-Width: teng oraliq kengligi (outlier bo'lsa bo'sh savatlar qoladi)", "Equal-Frequency (Quantile): har savatda teng N/k ta yozuv bo'ladi"], en: ["Bin continuous values into intervals", "Equal-Width: uniform step (skewed by outliers)", "Equal-Frequency: equal count per bin (pd.qcut)"] } },
      { title: { uz: "Kodlash: Label vs One-Hot Encoding", en: "Categorical Encoding" }, points: { uz: ["Label Encoding: faqat tartibli (Ordinal: Past=0, O'rta=1, Yuqori=2) uchun!", "One-Hot Encoding: tartibsiz (Nominal: Shahar, Rang) uchun 0/1 ustunlar", "Eslatma: Scaling va Encoding ni FAQAT X_train da fit() qiling!"], en: ["Label Encoding: ONLY for Ordinal columns", "One-Hot Encoding: creates binary columns for Nominal features", "Never leak test statistics before splitting!"] } },
      { title: { uz: "O'lcham La'nati (Curse of Dimensionality)", en: "The Curse of Dimensionality" }, points: { uz: ["O'lcham d oshgan sari hajm eksponensial ortadi va ma'lumot siyraklashadi", "Eng yaqin va eng uzoq qo'shni orasidagi masofa farqi yo'qoladi", "Yechim: O'lchamni qisqartirish (PCA) yoki Belgi tanlash"], en: ["Volume grows exponentially; points grow sparse & equidistant", "Mitigate with Dimensionality Reduction (PCA) or Feature Selection"] } },
      { title: { uz: "PCA — Asosiy Komponentlar Tahlili", en: "PCA: Principal Component Analysis" }, latex: "\\text{VarRatio}_j = \\frac{\\lambda_j}{\\sum \\lambda_i}, \\qquad \\sum_{j=1}^k \\text{VarRatio}_j \\ge 95\\%", points: { uz: ["Maqsad: maksimal dispersiyani saqlab kam o'lchamga proyeksiya qilish", "1. Z-score standartlashtirish (MAJBURIY!)", "2. Kovariatsiya matritsasi → 3. Eigenvalue/Eigenvector → 4. ≥95% komponent tanlash"], en: ["Projects standardized data onto orthogonal axes of max variance", "Step 1: Standardize (MANDATORY!) → Step 2: Covariance → Step 3: Eigen → Step 4: ≥95%"] } },
      { title: { uz: "Talabalarga savol (PCA & Scaling)", en: "Class Discussion: PCA Preprocessing" }, discussion: { q: { uz: "Talaba 4 ustunli datasetda StandardScaler qilmasdan to'g'ridan-to'g'ri PCA(n_components=2) qo'lladi va PC1 dispersiyaning 99.8% ini oldi. Bu yaxshi natijami?", en: "A student runs PCA(2) without StandardScaler and sees PC1 explain 99.8% variance. Is that a great result?" }, a: { uz: "<strong>YO'Q!</strong> Agar bir ustun so'mda (millionlar), boshqasi yoshda (o'nliklar) bo'lsa, PCA shunchaki so'm ustunini PC1 qilib oladi va qolgan ustunlarni yo'qotadi. PCA dan oldin Z-score shart!", en: "<strong>NO!</strong> One large-unit feature (e.g. Salary in millions) monopolizes PC1 variance. Always Z-score standardize before PCA!" } } }
    ],
    lab: {
      title: { uz: "L4: Ma'lumotlarni normallashtirish, diskretizatsiya va PCA", en: "L4: Normalization, Discretization & PCA" },
      objective: { uz: "MinMax/Standard/RobustScaler, pd.cut/pd.qcut diskretizatsiya, OneHotEncoder va PCA(0.95) ni amalga oshirish.", en: "Apply MinMax/Standard/Robust scaling, Equal-Width/Frequency binning, One-Hot encoding, and PCA." },
      steps: [
        {
          title: { uz: "Min-Max, Z-Score va RobustScaler Taqqoslash", en: "Compare MinMax, Standard & Robust Scalers" },
          desc: { uz: "Outlierli ma'lumotda 3 ta scaler natijasini ko'ring.", en: "Test 3 scalers on features containing an outlier." },
          code: `import pandas as pd
from sklearn.preprocessing import MinMaxScaler, StandardScaler, RobustScaler

df = pd.DataFrame({'Yosh':[20,25,30,35,40,95], 'Daromad':[3,4,5,6,7,150]})
for name, sc in [('MinMax', MinMaxScaler()), ('Z-Score', StandardScaler()), ('Robust', RobustScaler())]:
    res = sc.fit_transform(df)
    print(f"=== {name} ===\\n", res.round(2))`
        },
        {
          title: { uz: "Diskretizatsiya (Equal-Width vs Equal-Frequency)", en: "Equal-Width vs Quantile Discretization" },
          desc: { uz: "pd.cut (kenglik) va pd.qcut (chastota) bilan savat sonlarini tekshiring.", en: "Compare pd.cut vs pd.qcut bin counts." },
          code: `import numpy as np
np.random.seed(42)
ages = np.random.randint(18, 70, 50)
print("Equal-Width counts:\\n", pd.cut(ages, bins=4).value_counts())
print("Equal-Freq counts:\\n", pd.qcut(ages, q=4).value_counts())`
        },
        {
          title: { uz: "Wine Datasetida Z-Score + PCA (95% Dispersiya)", en: "Standardized PCA (95% Variance) on Wine" },
          desc: { uz: "13 o'lchamli Wine datasetini PCA bilan siqib nechta komponent qolishini ko'ring.", en: "Reduce 13D Wine dataset preserving 95% variance." },
          code: `from sklearn.datasets import load_wine
from sklearn.decomposition import PCA

X, y = load_wine(return_X_y=True)
X_z = StandardScaler().fit_transform(X)
pca = PCA(n_components=0.95).fit(X_z)
print(f"Original dims: {X.shape[1]} -> Kept dims (95% var): {pca.n_components_}")
print("Per-component ratio:", pca.explained_variance_ratio_.round(3))`
        }
      ],
      variants: {
        uz: [
          "1-variant: Breast Cancer datasetida (30 ustun) PCA(n_components=0.95) nechta komponent qoldirishini aniqlang.",
          "2-variant: Scree plot chizib (k=1..13 uchun kumulativ dispersiya) tirsak nuqtasini ko'rsating.",
          "3-variant: OneHotEncoder(drop='first') bilan kategorik jadvalni vektorlang."
        ],
        en: [
          "Variant 1: Find how many PCA components preserve 95% variance on Breast Cancer (30 features).",
          "Variant 2: Plot the cumulative explained variance Scree curve.",
          "Variant 3: Vectorize a mixed DataFrame with ColumnTransformer + OneHotEncoder."
        ]
      }
    },
    glossary: [
      { uz: "Min-Max normallashtirish", en: "Min-Max Scaling", defUz: "Qiymatlarni [0, 1] oralig'iga chiziqli keltirish", defEn: "Linear rescaling into [0, 1]" },
      { uz: "Z-score standartlashtirish", en: "Z-score Standardization", defUz: "O'rtacha 0 va standart og'ish 1 bo'ladigan shkalalash", defEn: "Rescaling to mean=0 and std=1" },
      { uz: "Diskretizatsiya", en: "Discretization", defUz: "Uzluksiz ustunni diskret intervallarga bo'lish", defEn: "Converting continuous values into categorical bins" },
      { uz: "PCA", en: "PCA", defUz: "Dispersiyani saqlab o'lchamni qisqartiruvchi ortogonal transformatsiya", defEn: "Orthogonal projection preserving maximum variance" }
    ],
    quiz: [
      { q: { uz: "Z-score standartlashtirish natijasida qanday statistika hosil bo'ladi?", en: "What are the mean and std after Z-score standardization?" }, options: [{ label: 'A', uz: "Min = 0, Maks = 1 oraliq", en: "Min = 0, Max = 1 range" }, { label: 'B', uz: "O'rtacha = 0, Std = 1 shkalasi", en: "Mean = 0, Std = 1 scale" }, { label: 'C', uz: "Min = -1, Maks = 1 oraliq", en: "Min = -1, Max = 1 range" }, { label: 'D', uz: "Logarifmik bazali qiymat", en: "Logarithmic base transform" }], answer: 'B', explanation: { uz: "x' = (x-μ)/σ o'rtachani 0, std ni 1 qiladi.", en: "Subtracting μ and dividing by σ yields μ=0, σ=1." } },
      { q: { uz: "PCA dan oldin qaysi amal MAJBURIY bajariladi?", en: "Which preprocessing step is MANDATORY before PCA?" }, options: [{ label: 'A', uz: "Z-score standartlashtirish", en: "Z-score standardization" }, { label: 'B', uz: "Label butun son kodlash", en: "Ordinal integer encoding" }, { label: 'C', uz: "Teng kenglikda savatlash", en: "Equal-width binning split" }, { label: 'D', uz: "Apriori qoida ajratish", en: "Apriori itemset mining" }], answer: 'A', explanation: { uz: "Masshtab farqi kovariatsiya va PC1 ni buzmasligi uchun standartlashtirish shart.", en: "Prevents large-scale units from dominating principal components." } },
      { q: { uz: "Outlierlar mavjud bo'lganda qaysi scaler eng chidamli?", en: "Which scaler is most resistant to extreme outliers?" }, options: [{ label: 'A', uz: "MinMaxScaler (Min va Maks asosida)", en: "MinMaxScaler (Min & Max)" }, { label: 'B', uz: "RobustScaler (Mediana va IQR asosida)", en: "RobustScaler (Median & IQR)" }, { label: 'C', uz: "DecimalScaler (10 darajasi asosida)", en: "DecimalScaler (Power of 10)" }, { label: 'D', uz: "StandardScaler (O'rtacha va Std)", en: "StandardScaler (Mean & Std)" }], answer: 'B', explanation: { uz: "RobustScaler mediana va IQR ishlatgani uchun outlierga berilmaydi.", en: "Median and IQR ignore extreme tail outliers." } },
      { q: { uz: "Tartibsiz (Nominal) shahar nomlari ustuni uchun qaysi kodlash to'g'ri?", en: "Which encoding is proper for unordered city names?" }, options: [{ label: 'A', uz: "Raqamli Label Encoding", en: "Sequential Label Encoding" }, { label: 'B', uz: "Binar One-Hot Encoding", en: "Binary One-Hot Encoding" }, { label: 'C', uz: "Ortogonal PCA proyeksiya", en: "Orthogonal PCA projection" }, { label: 'D', uz: "Statistik Z-score shkalasi", en: "Statistical Z-score scaling" }], answer: 'B', explanation: { uz: "One-Hot soxta tartib (Toshkent > Buxoro) kiritmaydi.", en: "One-Hot avoids imposing false numerical ordering." } },
      { q: { uz: "Har bir savatda teng N/k ta element bo'ladigan diskretizatsiya turi qaysi?", en: "Which discretization puts equal numbers of items in each bin?" }, options: [{ label: 'A', uz: "Equal-Width intervallari", en: "Equal-Width intervals" }, { label: 'B', uz: "Equal-Frequency (Quantile)", en: "Equal-Frequency (Quantile)" }, { label: 'C', uz: "Min-Max normallashtirish", en: "Min-Max normalization" }, { label: 'D', uz: "One-Hot vektorlash", en: "One-Hot vectorization" }], answer: 'B', explanation: { uz: "Equal-Frequency (Quantile) har intervalga teng miqdorda namuna joylaydi.", en: "Equal-Frequency divides sorted samples into equal-count quantiles." } }
    ],
    matching: [
      { left: { uz: "Min-Max Scaling", en: "Min-Max Scaling" }, right: { uz: "Qiymatlarni aniq [0, 1] oralig'iga keltiradi", en: "Maps values strictly to [0, 1]" } },
      { left: { uz: "Z-Score", en: "Z-Score" }, right: { uz: "μ=0 va σ=1 standartlashtirish (PCA uchun shart)", en: "μ=0, σ=1 standardization (needed for PCA)" } },
      { left: { uz: "One-Hot Encoding", en: "One-Hot Encoding" }, right: { uz: "Nominal toifalarni 0/1 ustunlarga bo'ladi", en: "Converts nominal values to 0/1 flags" } },
      { left: { uz: "Equal-Frequency", en: "Equal-Frequency" }, right: { uz: "Har savatda teng sonli obyekt (Quantile)", en: "Equal item counts per bin" } }
    ],
    fillGap: [
      { text: { uz: "PCA da odatda kumulativ dispersiyaning kamida ___ foizini saqlovchi komponentlar olinadi.", en: "In PCA, we usually retain components covering at least ___ percent cumulative variance." }, answer: "95" },
      { text: { uz: "Yuqori o'lchamda barcha nuqtalar bir-biridan uzoqlashishi ___ la'nati deyiladi.", en: "Sparsity and distance collapse in high dimensions is called the ___ of Dimensionality." }, answer: ["O'lcham", "Curse"] },
      { text: { uz: "Qaror daraxti va Random Forest algoritmlari normallashtirishni talab ___.", en: "Decision Trees and Random Forests do ___ require feature scaling." }, answer: ["qilmaydi", "not"] }
    ]
  },

  // ==================== M5 / L5 ====================
  {
    id: 5,
    code: 'M5',
    labCode: 'L5',
    slug: '05-decision-trees',
    hours: 2,
    labs: 1,
    keywords: ['Classification', 'Decision Tree', 'Hunt Algorithm', 'ID3', 'C4.5', 'CART', 'Overfitting', 'Pruning', 'Tan Ch.3'],
    title: {
      uz: "Tasniflash tushunchasi va qaror daraxtlari algoritmi",
      en: "Classification Concepts & Decision Tree Algorithms"
    },
    description: {
      uz: "Tasniflashning umumiy sxemasi (Tan 3-bob), Hunt algoritmi, ID3, C4.5 va CART tuzilishi, rekursiv daraxt qurish hamda Overfitting va Pruning (MDL).",
      en: "Supervised classification framework (Tan Ch. 3), Hunt's algorithm, ID3/C4.5/CART architecture, and overfitting/pruning."
    },
    sections: [
      {
        heading: { uz: "5.1. Tasniflashning Umumiy Sxemasi (Tan, 3.1-bo'lim)", en: "5.1. General Classification Framework (Tan Ch. 3.1)" },
        bodyHtml: {
          uz: "<p><strong>Tasniflash (Classification)</strong> — $X$ kirish atributlari to'plamini oldindan ma'lum diskret $y$ sinf yorlig'iga xaritalovchi $y = f(X)$ modelni o'rganishdir. Jarayon ikki fazadan iborat: (1) <strong>O'qitish (Induction / Training)</strong> — Train to'plamidan model qurish; (2) <strong>Bashorat (Deduction / Testing)</strong> — yangi ko'rilmagan obyektlarga sinf berish (Generalization).</p>",
          en: "<p><strong>Classification</strong> learns a target function $y = f(X)$ mapping attributes $X$ to a discrete label $y$ across two phases: <strong>Induction</strong> (training) and <strong>Deduction</strong> (testing generalization).</p>"
        }
      },
      {
        heading: { uz: "5.2. Qaror Daraxti Tuzilishi va Hunt Algoritmi (Tan, 3.2-bo'lim)", en: "5.2. Tree Anatomy & Hunt's Algorithm (Tan Ch. 3.2)" },
        bodyHtml: {
          uz: "<p>Daraxt to'rt qismdan tashkil topadi: <strong>Ildiz tugun (Root)</strong>, <strong>Ichki tugunlar (Internal Nodes)</strong>, <strong>Shoxlar (Branches)</strong> va <strong>Barglar (Leaf Nodes — yakuniy sinf)</strong>.</p><p>Barcha klassik daraxt algoritmlari (ID3, C4.5, CART) <strong>Hunt's Algorithm</strong> rekursiv shabloniga tayanadi:</p><ol><li>Agar $D_t$ tugundagi barcha yozuvlar bir xil $y_t$ sinfiga tegishli bo'lsa — u <strong>Barg</strong> bo'ladi.</li><li>Agar atributlar tugagan yoki barcha yozuvlar bir xil $X$ qiymatga ega bo'lsa — ko'pchilik ovozi bilan Barg qo'yiladi.</li><li>Aks holda, eng yaxshi bo'luvchi atributni tanlab, $D_t$ ni quyi tugunlarga bo'ling va har biriga rekursiv davom eting.</li></ol>",
          en: "<p>Trees consist of Root, Internal Nodes, Branches, and <strong>Leaf Nodes</strong> (final class). All greedy tree builders follow <strong>Hunt's Recursive Algorithm</strong>: stop if pure (all same class) or empty/identical features; otherwise split on best attribute and recurse.</p>"
        }
      },
      {
        heading: { uz: "5.3. ID3, C4.5 va CART Algoritmlarini Taqqoslash", en: "5.3. Comparing ID3, C4.5 & CART" },
        table: {
          headers: { uz: ["Algoritm", "Muallif / Yil", "Bo'lish mezoni", "O'ziga xos xususiyat"], en: ["Algorithm", "Year", "Split Metric", "Distinctive Properties"] },
          rows: {
            uz: [
              ["<strong>ID3</strong>", "Quinlan (1986)", "Information Gain", "Faqat kategorik atributlar; ko'p shoxli; pruning yo'q"],
              ["<strong>C4.5</strong>", "Quinlan (1993)", "Gain Ratio", "Uzluksiz atributlar va NaN ni qo'llab-quvvatlaydi; post-pruning bor"],
              ["<strong>CART</strong>", "Breiman (1984)", "Gini / MSE", "Doimo <strong>ikkilik (binary)</strong> daraxt; tasniflash va regressiya"]
            ],
            en: [
              ["<strong>ID3</strong>", "1986", "Information Gain", "Categorical only; multi-way splits; no pruning"],
              ["<strong>C4.5</strong>", "1993", "Gain Ratio", "Handles continuous thresholds, missing values, post-pruning"],
              ["<strong>CART</strong>", "1984", "Gini / MSE", "Strictly <strong>binary</strong> splits; classification & regression"]
            ]
          }
        }
      },
      {
        heading: { uz: "5.4. Ortiqcha O'rganish (Overfitting) va Budash (Pruning)", en: "5.4. Overfitting, Pre-Pruning & Post-Pruning" },
        bodyHtml: {
          uz: "<p>Daraxt juda chuqurlashsa, o'quv ma'lumotidagi tasodifiy shovqinni yodlab oladi: masalan, <strong>Train aniqlik = 99%, Test aniqlik = 65%</strong>. Tan darsligi ikkita asosiy sababni ko'rsatadi: shovqin (noise) va kam namuna (lack of representative samples).</p><ul><li><strong>Pre-pruning:</strong> daraxt o'sayotganda <code>max_depth</code>, <code>min_samples_split</code>, <code>min_samples_leaf</code> bilan to'xtatish.</li><li><strong>Post-pruning:</strong> avval to'liq daraxt qurib, so'ngra validatsiya yoki <strong>MDL (Minimum Description Length)</strong> / <code>ccp_alpha</code> asosida kuchsiz shoxlarni qirqib tashlash.</li></ul>",
          en: "<p>Deep trees memorize noise (e.g., 99% train vs 65% test = <strong>Overfitting</strong>). Prevent via <strong>Pre-pruning</strong> (<code>max_depth</code>, <code>min_samples_leaf</code>) or <strong>Post-pruning</strong> (cost-complexity <code>ccp_alpha</code> / MDL).</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "M5: Tasniflash va Qaror Daraxtlari", en: "M5: Classification & Decision Trees" }, subtitle: { uz: "Tan Darsligi 3-bob · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 3 · MITQ2506 · 80 min" }, points: { uz: ["Tasniflash jarayoni: Induction vs Deduction", "Daraxt tuzilishi va IF-THEN qoidalar", "Hunt algoritmi (rekursiv qurish)", "ID3, C4.5 va CART farqlari", "Overfitting, Pre/Post-Pruning va Lab 5"], en: ["Induction vs Deduction framework", "Tree anatomy & IF-THEN rules", "Hunt's recursive algorithm", "ID3 vs C4.5 vs CART", "Overfitting, Pruning & Lab 5"] } },
      { title: { uz: "Tasniflash Sxemasi (Tan 3.1)", en: "General Classification Framework" }, points: { uz: ["Kirish: atributlar vektori X | Chiqish: diskret sinf y", "1. O'qitish (Induction): Train setdan model qurish", "2. Baholash (Deduction): Test setda umumlashtirishni tekshirish"], en: ["Input X → Discrete label y", "Induction builds model from labeled training set", "Deduction evaluates generalization on unseen test set"] } },
      { title: { uz: "Qaror Daraxti Tuzilishi", en: "Anatomy of a Decision Tree" }, points: { uz: ["Ildiz tugun (Root node) — eng birinchi bo'linish", "Ichki tugun (Internal node) — bitta atribut bo'yicha test", "Shox (Branch) — test natijasi yo'li", "Barg tugun (Leaf node) — yakuniy sinf bashorati"], en: ["Root node, Internal test nodes, Branches, and Leaf nodes (class predictions)"] } },
      { title: { uz: "Hunt Algoritmi (Tan 3.2)", en: "Hunt's Recursive Algorithm" }, points: { uz: ["1-qadam: Tugundagi barcha namunalar bir xil y sinfda bo'lsa → Barg!", "2-qadam: Bo'sh yoki barcha X lar bir xil bo'lsa → Ko'pchilik sinfi bilan Barg!", "3-qadam: Aks holda eng yaxshi atributdan bo'lib, bolalariga rekursiv o'tish", "Greedy (ochko'z) qidiruv: har qadamda mahalliy eng yaxshi bo'linishni oladi"], en: ["Base case 1: pure node → Leaf", "Base case 2: identical features → majority Leaf", "Recursive case: split by best attribute test", "Greedy top-down heuristic"] } },
      { title: { uz: "Interaktiv Ajralish Nuqtasi (Daraxt Chegarasi)", en: "Interactive Split Boundary Demo" }, widget: 'dt-split' },
      { title: { uz: "Uzluksiz Atributlarni Bo'lish (C4.5 & CART)", en: "Splitting Continuous Attributes" }, points: { uz: ["Qiymatlar saralanadi va qo'shni nuqtalar o'rtasi nomzod threshold t bo'ladi", "Test sharti: x ≤ t (chap shox) va x > t (o'ng shox)", "Kategorik atributda: Binary split (CART) vs Multi-way split (ID3/C4.5)"], en: ["Sort values and check midpoint thresholds x ≤ t", "CART forces strictly binary splits; ID3/C4.5 allow multi-way splits"] } },
      { title: { uz: "ID3 vs C4.5 vs CART Taqqoslash", en: "Comparing ID3, C4.5 & CART" }, table: { headers: { uz: ["Algoritm", "Mezon", "Daraxt"], en: ["Algorithm", "Metric", "Structure"] }, rows: { uz: [["ID3", "Info Gain", "Ko'p shoxli, kategorik"], ["C4.5", "Gain Ratio", "Ko'p shoxli + uzluksiz + NaN"], ["CART", "Gini / MSE", "Faqat Ikkilik (Binary)"]], en: [["ID3", "Info Gain", "Multi-way, categorical only"], ["C4.5", "Gain Ratio", "Multi-way + continuous + NaN"], ["CART", "Gini / MSE", "Strictly Binary"]] } } },
      { title: { uz: "Overfitting (Ortiqcha O'rganish) Sabablari", en: "Causes of Overfitting (Tan 3.5)" }, points: { uz: ["Belgisi: Train aniqlik 99%, Test aniqlik 65%!", "1-sabab: Shovqinli nuqtalarni (yoki noto'g'ri yorliqlarni) yodlab olish", "2-sabab: Barglarda namuna soni juda kamayib ketishi (1–2 ta yozuv)"], en: ["Symptom: 99% train accuracy vs 65% test accuracy", "Cause 1: Fitting noisy/mislabeled training examples", "Cause 2: Too few samples in deep leaves"] } },
      { title: { uz: "Talabalarga savol (Underfitting vs Overfitting)", en: "Class Discussion: Depth Selection" }, discussion: { q: { uz: "max_depth=1 da Train=68%, Test=66%. max_depth=20 da Train=100%, Test=74%. max_depth=4 da Train=95%, Test=93%. Qaysi biri Overfitting?", en: "Depth=1 gives 68%/66%, Depth=20 gives 100%/74%, Depth=4 gives 95%/93%. Which depth is Overfitting?" }, a: { uz: "<strong>max_depth=20 Overfitting!</strong> (Train 100%, Test 74% — 26% uzilish). Depth=1 esa Underfitting; Depth=4 optimal.", en: "<strong>max_depth=20 is Overfitting!</strong> Depth=1 is Underfitting; Depth=4 is optimal." } } },
      { title: { uz: "Budash (Pre-Pruning vs Post-Pruning) va MDL", en: "Pre-Pruning, Post-Pruning & MDL" }, points: { uz: ["Pre-pruning: max_depth, min_samples_leaf bilan daraxtni oldindan to'xtatish", "Post-pruning: to'liq daraxt qurib ccp_alpha orqali ortiqcha shoxlarni qirqish", "MDL (Minimum Description Length): ham sodda daraxt, ham kam xatoni muvozanatlaydi"], en: ["Pre-pruning halts growth early (max_depth, min_samples_leaf)", "Post-pruning grows full tree then prunes via ccp_alpha or MDL"] } },
      { title: { uz: "Qaror Daraxti Afzalliklari va Cheklovlari", en: "Pros & Cons of Decision Trees" }, points: { uz: ["Afzallik: White-box IF-THEN qoidalar, scaling shart emas, juda tez bashorat", "Kamchilik: Ma'lumotdagi kichik o'zgarishga beqaror (High Variance), o'qlarga parallel (oblique emas) chegaralar"], en: ["Pros: Interpretable rules, scale-invariant, fast inference", "Cons: High variance (solved by Random Forest in M14!), axis-aligned splits"] } }
    ],
    lab: {
      title: { uz: "L5: Qaror daraxti yordamida ma'lumotlarni tasniflash (Iris & Wine)", en: "L5: Classification with Decision Trees" },
      objective: { uz: "Scikit-Learn da DecisionTreeClassifier qurish, qoidalarni matnda chiqarish, max_depth ta'sirini o'rganish va post-pruning bajarish.", en: "Train DecisionTreeClassifier, export IF-THEN rules, diagnose overfitting across depths, and apply ccp_alpha pruning." },
      steps: [
        {
          title: { uz: "Iris datasetida Qaror daraxti va Qoidalar", en: "Train Decision Tree & Export Text Rules" },
          desc: { uz: "max_depth=3 daraxt qurib export_text bilan qoidalarni o'qing.", en: "Build depth=3 tree and print interpretable rules." },
          code: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split

iris = load_iris()
X_tr, X_te, y_tr, y_te = train_test_split(iris.data, iris.target, test_size=0.3, stratify=iris.target, random_state=42)
dt = DecisionTreeClassifier(max_depth=3, random_state=42).fit(X_tr, y_tr)
print("Test Accuracy:", round(dt.score(X_te, y_te), 3))
print(export_text(dt, feature_names=list(iris.feature_names)))`
        },
        {
          title: { uz: "Chuqurlik (max_depth) va Overfitting Tajribasi", en: "Depth Sweep: Diagnosing Overfitting" },
          desc: { uz: "Wine datasetida max_depth=1..10 uchun Train va Test farqini kuzating.", en: "Observe train vs test gap on Wine across max_depth." },
          code: `from sklearn.datasets import load_wine
wine = load_wine()
Xw_tr, Xw_te, yw_tr, yw_te = train_test_split(wine.data, wine.target, test_size=0.3, stratify=wine.target, random_state=42)
for d in [1, 2, 3, 5, None]:
    m = DecisionTreeClassifier(max_depth=d, random_state=42).fit(Xw_tr, yw_tr)
    print(f"depth={str(d):4s} | train={m.score(Xw_tr, yw_tr):.3f} | test={m.score(Xw_te, yw_te):.3f}")`
        },
        {
          title: { uz: "Cost-Complexity Post-Pruning (ccp_alpha)", en: "Post-Pruning via ccp_alpha" },
          desc: { uz: "Turli ccp_alpha qiymatlarida tugunlar soni va test aniqligini tekshiring.", en: "Inspect node counts and test scores along pruning path." },
          code: `path = DecisionTreeClassifier(random_state=42).cost_complexity_pruning_path(Xw_tr, yw_tr)
for a in path.ccp_alphas[::2]:
    m = DecisionTreeClassifier(random_state=42, ccp_alpha=a).fit(Xw_tr, yw_tr)
    print(f"alpha={a:.4f} | nodes={m.tree_.node_count:2d} | test={m.score(Xw_te, yw_te):.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: Breast Cancer datasetida max_depth=1..12 uchun Train/Test grafigini chizing.",
          "2-variant: min_samples_leaf=[1, 3, 5, 10, 20] ta'sirini tekshiring.",
          "3-variant: plot_tree(..., filled=True) bilan daraxt vizualizatsiyasini PNG ga saqlang."
        ],
        en: [
          "Variant 1: Plot Train vs Test accuracy across depth 1..12 on Breast Cancer.",
          "Variant 2: Evaluate min_samples_leaf=[1, 3, 5, 10, 20].",
          "Variant 3: Save a filled tree diagram using plot_tree()."
        ]
      }
    },
    glossary: [
      { uz: "Hunt algoritmi", en: "Hunt's Algorithm", defUz: "Daraxtlarni top-down rekursiv qurishning umumiy sxemasi", defEn: "General recursive top-down decision tree template" },
      { uz: "Barg (Leaf Node)", en: "Leaf Node", defUz: "Yakuniy sinf bashoratini beruvchi terminal tugun", defEn: "Terminal tree node holding final class label" },
      { uz: "CART", en: "CART", defUz: "Gini indeksi asosida ikkilik (binary) daraxt quruvchi algoritm", defEn: "Algorithm building strictly binary trees using Gini" },
      { uz: "Pruning (Budash)", en: "Pruning", defUz: "Overfittingni kamaytirish uchun daraxt shoxlarini cheklash/qirqish", defEn: "Limiting or trimming branches to prevent overfitting" }
    ],
    quiz: [
      { q: { uz: "Qaror daraxtida \"barg\" (leaf node) nimani bildiradi?", en: "What does a leaf node represent in a Decision Tree?" }, options: [{ label: 'A', uz: "Ildiz bo'linish sharti", en: "Root attribute split" }, { label: 'B', uz: "Yakuniy sinf bashorati", en: "Final predicted class" }, { label: 'C', uz: "Ichki qaror tarmog'i", en: "Internal decision branch" }, { label: 'D', uz: "Shovqinli kirish xatosi", en: "Input dataset outlier" }], answer: 'B', explanation: { uz: "Barg tugunlar terminal nuqta bo'lib sinf yorlig'ini qaytaradi.", en: "Leaf nodes output the final class label." } },
      { q: { uz: "ID3, C4.5 va CART qaysi rekursiv shablonga asoslangan?", en: "Which recursive template underlies ID3, C4.5, and CART?" }, options: [{ label: 'A', uz: "Hunt algoritmi", en: "Hunt's Algorithm" }, { label: 'B', uz: "Apriori qoidasi", en: "Apriori Search" }, { label: 'C', uz: "Lloyd klasteri", en: "Lloyd's Method" }, { label: 'D', uz: "PageRank reytingi", en: "PageRank Scoring" }], answer: 'A', explanation: { uz: "Barchasi Hunt's recursive induction algoritmiga tayanadi.", en: "All greedy tree builders follow Hunt's algorithm." } },
      { q: { uz: "CART algoritmining daraxt tuzilishi qanday?", en: "What split structure does CART produce?" }, options: [{ label: 'A', uz: "Ko'p shoxli tarmoqlangan", en: "Multi-way branching" }, { label: 'B', uz: "Doimo ikkilik (Binary)", en: "Strictly two-way Binary" }, { label: 'C', uz: "Faqat chiziqli gipertekis", en: "Linear hyperplane cut" }, { label: 'D', uz: "Yo'naltirilmagan siklik graf", en: "Cyclic undirected graph" }], answer: 'B', explanation: { uz: "CART har tugunni aniq 2 ta shoxga ajratadi.", en: "CART always creates 2-way binary splits." } },
      { q: { uz: "Overfitting (ortiqcha o'rganish) belgilari qaysi?", en: "Which accuracies indicate overfitting?" }, options: [{ label: 'A', uz: "Train 65%, Test 95%", en: "Train 65%, Test 95%" }, { label: 'B', uz: "Train 99%, Test 65%", en: "Train 99%, Test 65%" }, { label: 'C', uz: "Train 60%, Test 60%", en: "Train 60%, Test 60%" }, { label: 'D', uz: "Train 95%, Test 95%", en: "Train 95%, Test 95%" }], answer: 'B', explanation: { uz: "O'quv ma'lumotini yodlab olgan model testda yomonlashadi.", en: "High train accuracy paired with much lower test accuracy." } },
      { q: { uz: "max_depth va min_samples_leaf yordamida daraxtni o'sayotganda to'xtatish nima deyiladi?", en: "Stopping tree growth early via max_depth / min_samples_leaf is called?" }, options: [{ label: 'A', uz: "Oldindan budash (Pre-pruning)", en: "Pre-pruning early stop" }, { label: 'B', uz: "Keyingi budash (Post-pruning)", en: "Post-pruning trim step" }, { label: 'C', uz: "Bootstrap Bagging yig'ish", en: "Bootstrap Bagging voting" }, { label: 'D', uz: "Kvantil Binning savatlash", en: "Quantile Binning splits" }], answer: 'A', explanation: { uz: "Daraxtni qurish paytida cheklash Pre-pruning deyiladi.", en: "Halting growth before full expansion is Pre-pruning." } }
    ],
    matching: [
      { left: { uz: "ID3", en: "ID3" }, right: { uz: "Information Gain, faqat kategorik", en: "Information Gain, categorical only" } },
      { left: { uz: "C4.5", en: "C4.5" }, right: { uz: "Gain Ratio, uzluksiz va NaN qo'llaydi", en: "Gain Ratio, continuous & NaNs" } },
      { left: { uz: "CART", en: "CART" }, right: { uz: "Gini indeksi, doimo ikkilik daraxt", en: "Gini Index, strictly binary tree" } },
      { left: { uz: "Post-pruning", en: "Post-pruning" }, right: { uz: "To'liq daraxtdan kuchsiz shoxlarni qirqish", en: "Trimming weak branches from full tree" } }
    ],
    fillGap: [
      { text: { uz: "Qaror daraxtining eng yuqori birinchi tuguni ___ tugun (Root) deyiladi.", en: "The topmost node of a decision tree is the ___ node." }, answer: ["Ildiz", "Root"] },
      { text: { uz: "Train aniqligi 99%, Test aniqligi 65% bo'lishi ___ holatini bildiradi.", en: "Achieving 99% train accuracy vs 65% test accuracy signals ___." }, answer: "Overfitting" },
      { text: { uz: "C4.5 dan keyin to'liq daraxtni qisqartirish uchun ccp_alpha ___ usuli qo'llaniladi.", en: "Trimming an already grown tree via ccp_alpha is called ___." }, answer: ["Post-pruning", "Pruning", "Budash"] }
    ]
  },

  // ==================== M6 / L6 ====================
  {
    id: 6,
    code: 'M6',
    labCode: 'L6',
    slug: '06-entropy-feature-selection',
    hours: 2,
    labs: 1,
    keywords: ['Entropy', 'Information Gain', 'Gain Ratio', 'Gini', 'Feature Selection', 'Filter', 'Wrapper', 'RFE', 'Embedded'],
    title: {
      uz: "Ma'lumotlardagi noaniqlikni o'lchash va eng muhim belgilarni tanlash",
      en: "Uncertainty Measures & Feature Selection"
    },
    description: {
      uz: "Entropiya, Gini va Misclassification Error egri chiziqlari; Information Gain va Gain Ratio (SplitInfo) hisoblash; Filter, Wrapper (RFE) va Embedded belgi tanlash.",
      en: "Entropy, Gini & Error impurity curves; Information Gain & Gain Ratio math; and Filter, Wrapper (RFE), and Embedded feature selection."
    },
    sections: [
      {
        heading: { uz: "6.1. Tugundagi Noaniqlikni O'lchash (Tan, 3.3-bo'lim)", en: "6.1. Node Impurity Measures (Tan Ch. 3.3)" },
        bodyHtml: {
          uz: "<p>Hunt algoritmida \"eng yaxshi atribut\" ni tanlash uchun tugundagi sinflar aralashganligi (<strong>Impurity</strong>) 3 ta formula bilan o'lchanadi (ikkilik sinfda $p=0.5$ da maksimum, $p=0$ yoki $p=1$ da $0$):</p>",
          en: "<p>To pick the best split in Hunt's algorithm, we measure node impurity using <strong>Entropy</strong>, <strong>Gini</strong>, or <strong>Classification Error</strong> (all 0 when pure, maximum at uniform 50/50 split):</p>"
        },
        latex: "\\text{Entropy}(t) = -\\sum p_i\\log_2 p_i, \\quad \\text{Gini}(t)=1-\\sum p_i^2, \\quad \\text{Error}(t)=1-\\max_i(p_i)",
        widget: 'feature-sel-sim'
      },
      {
        heading: { uz: "6.2. Information Gain, SplitInfo va Gain Ratio", en: "6.2. Information Gain vs Gain Ratio (SplitInfo)" },
        bodyHtml: {
          uz: "<p><strong>Information Gain (IG)</strong> bo'linishdan oldingi va keyingi o'rtacha entropiya farqidir. Ammo IG ning jiddiy nuqsoni bor: u <strong>ko'p noyob qiymatli atributlarni</strong> (masalan, <code>Talaba_ID</code>) afzal ko'radi, chunki har bir ID ga 1 tadan sof barg tushib $H=0$ chiqadi!</p><p><strong>Yechim — Gain Ratio (C4.5):</strong> Information Gain ni atributning o'z bo'linish entropiyasi (<strong>SplitInfo</strong>) ga bo'lib jazolaydi:</p>",
          en: "<p><strong>Information Gain</strong> biases toward high-cardinality IDs (each ID gives $H=0$). C4.5 fixes this by normalizing IG with <strong>SplitInfo</strong>:</p>"
        },
        latex: "IG(S, A) = H(S) - \\sum_v \\frac{|S_v|}{|S|}H(S_v), \\qquad \\text{SplitInfo}(S, A) = -\\sum_v \\frac{|S_v|}{|S|}\\log_2\\frac{|S_v|}{|S|}, \\qquad \\text{GainRatio} = \\frac{IG}{\\text{SplitInfo}}"
      },
      {
        heading: { uz: "6.3. Qo'lda Hisoblash Misoli (Entropiya & Gini)", en: "6.3. Worked Calculation: Entropy & Gini" },
        bodyHtml: {
          uz: "<p>Tugunda 10 ta obyekt: <strong>6 Ha, 4 Yo'q</strong> ($p_1=0.6, p_0=0.4$):</p><ul><li>$\\text{Entropy} = -(0.6\\log_2 0.6 + 0.4\\log_2 0.4) = 0.971$ bit.</li><li>$\\text{Gini} = 1 - (0.6^2 + 0.4^2) = 1 - (0.36 + 0.16) = 0.48$.</li><li>$\\text{Classification Error} = 1 - \\max(0.6, 0.4) = 0.40$.</li></ul>",
          en: "<p>For a node with 6 Yes, 4 No ($p_1=0.6, p_0=0.4$): Entropy = $0.971$, Gini = $1-(0.36+0.16)=0.48$, Classification Error = $1-0.6=0.40$.</p>"
        }
      },
      {
        heading: { uz: "6.4. Eng Muhim Belgilarni Tanlash (Feature Selection, Tan 2.3)", en: "6.4. Feature Selection: Filter, Wrapper & Embedded" },
        bodyHtml: {
          uz: "<p>Ortiqcha va shovqinli atributlarni olib tashlash modelni tezlashtiradi va overfittingni kamaytiradi. Uch asosiy yondashuv:</p>",
          en: "<p>Removing redundant/irrelevant features speeds training and cuts overfitting via three paradigms:</p>"
        },
        table: {
          headers: { uz: ["Usul turi", "Qanday ishlaydi?", "Misollar", "Tezlik / Aniqlik"], en: ["Category", "How It Works", "Examples", "Speed / Accuracy"] },
          rows: {
            uz: [
              ["<strong>Filter</strong>", "Modeldan mustaqil statistik test bilan saralaydi", "VarianceThreshold, $\\chi^2$, ANOVA F, Mutual Information", "Juda tez; belgilararo bog'liqlikni kamroq ko'radi"],
              ["<strong>Wrapper</strong>", "Modelni qayta-qayta o'qitib eng yaxshi to'plamni qidiradi", "<strong>RFE</strong> (Recursive Feature Elimination), Forward/Backward", "Eng aniq, lekin hisoblash jihatdan sekin"],
              ["<strong>Embedded</strong>", "Modelni o'qitish jarayonining o'zida belgilarni tanlaydi", "<strong>Lasso (L1)</strong>, Decision Tree / Random Forest importance", "Tez va aniqlik jihatidan muvozanatli"]
            ],
            en: [
              ["<strong>Filter</strong>", "Ranks features via model-free statistics", "VarianceThreshold, $\\chi^2$, ANOVA F, Mutual Info", "Fastest; ignores feature interactions"],
              ["<strong>Wrapper</strong>", "Evaluates subsets by retraining a model", "<strong>RFE</strong>, Forward/Backward Selection", "High accuracy; computationally expensive"],
              ["<strong>Embedded</strong>", "Selects features during model training itself", "<strong>L1 Lasso</strong>, Tree/RF Feature Importance", "Balanced speed and accuracy"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "M6: Noaniqlik va Muhim Belgilarni Tanlash", en: "M6: Impurity Measures & Feature Selection" }, subtitle: { uz: "Tan Darsligi 3.3 va 2.3 · MITQ2506 · 80 daqiqa", en: "Tan Ch. 3.3 & Ch. 2.3 · MITQ2506 · 80 min" }, points: { uz: ["3 ta nopoklik o'lchovi: Entropy, Gini, Classification Error", "Information Gain va ID3 tuzog'i (Noyob ID)", "Gain Ratio va SplitInfo formulasi", "Feature Selection: Filter, Wrapper (RFE), Embedded (L1/Tree)", "L6 Python tajribalari"], en: ["Entropy, Gini & Classification Error compared", "Information Gain & ID bias", "SplitInfo & Gain Ratio (C4.5)", "Filter, Wrapper (RFE) & Embedded Feature Selection", "L6 Python Feature Selection Lab"] } },
      { title: { uz: "Tugun Nopokligi (Impurity) O'lchovlari", en: "Three Impurity Measures (Tan 3.3)" }, latex: "H=-\\sum p_i\\log_2 p_i, \\quad \\text{Gini}=1-\\sum p_i^2, \\quad \\text{Err}=1-\\max(p_i)", points: { uz: ["Barcha 3 mezon sof tugunda (p=0 yoki p=1) 0 ga teng", "Barcha 3 mezon p=0.5 (50/50 teng aralash) da maksimal qiymat oladi", "Maksimumlar: Entropy = 1.0 | Gini = 0.5 | Error = 0.5"], en: ["All reach 0 at pure nodes (p=0 or p=1)", "All peak at 50/50 split: Entropy=1.0, Gini=0.5, Error=0.5"] } },
      { title: { uz: "Interaktiv Egri Chiziq: Entropy vs Gini vs Error", en: "Interactive Impurity Explorer" }, widget: 'feature-sel-sim' },
      { title: { uz: "Qo'lda Hisoblash: (6 Ha, 4 Yo'q)", en: "Hand Calculation: (6 Yes, 4 No)" }, points: { uz: ["p₁ = 0.6, p₀ = 0.4", "Entropy = -(0.6 log₂ 0.6 + 0.4 log₂ 0.4) = 0.971 bit", "Gini = 1 - (0.36 + 0.16) = 0.48", "Classification Error = 1 - max(0.6, 0.4) = 0.40"], en: ["p₁=0.6, p₀=0.4", "Entropy = 0.971 | Gini = 0.48 | Error = 0.40"] } },
      { title: { uz: "Information Gain va ID3 Tuzog'i", en: "Information Gain & High-Cardinality Bias" }, points: { uz: ["IG(S, A) = H(S) - Σ (|S_v|/|S|)·H(S_v)", "Muammo: Agar atribut har qatorda noyob bo'lsa (Passport_ID), har bargda 1 ta nuqta qolib H=0 chiqadi!", "Natijada IG maksimal bo'ladi, lekin model hech narsa o'rganmaydi!"], en: ["Unique IDs create 1-sample pure leaves → H=0 → maximum IG!", "Completely fails to generalize to unseen data"] } },
      { title: { uz: "C4.5 Yechimi: SplitInfo va Gain Ratio", en: "C4.5 Fix: SplitInfo & Gain Ratio" }, latex: "\\text{SplitInfo}(S,A) = -\\sum_v \\frac{|S_v|}{|S|}\\log_2\\frac{|S_v|}{|S|}, \\qquad \\text{GainRatio}=\\frac{IG}{\\text{SplitInfo}}", points: { uz: ["Ko'p shoxga bo'luvchi ustunning SplitInfo qiymati juda katta bo'ladi (masalan log₂(N))", "IG ni SplitInfo ga bo'lish noyob ID larni keskin jazolaydi!"], en: ["Many-way splits yield huge SplitInfo", "Dividing IG by SplitInfo penalizes ID-like columns"] } },
      { title: { uz: "Talabalarga savol (Classification Error vs Gini)", en: "Class Discussion: Why Not Classification Error?" }, discussion: { q: { uz: "Nima uchun daraxtlar odatda Classification Error (1 - max p) o'rniga Gini yoki Entropiyadan foydalanadi?", en: "Why do decision trees prefer Gini or Entropy over Classification Error when evaluating splits?" }, a: { uz: "Classification Error chiziqli bo'lgani uchun ba'zi foydali bo'linishlarda Gain = 0 berib qo'yadi (masalan, (7,3) → (4,0)+(3,3) da xato ikki holda ham 3/10)! Gini va Entropiya qavariq (strictly concave) bo'lgani uchun sof bolalarni doim rag'batlantiradi.", en: "Classification Error is piecewise linear and can give Gain = 0 even when one child becomes 100% pure! Strictly concave Gini and Entropy always reward purer splits." } } },
      { title: { uz: "Feature Selection (Eng Muhim Belgilarni Tanlash)", en: "Why Feature Selection Matters" }, points: { uz: ["PCA yangi sun'iy o'qlar (PC1, PC2) yasaydi — asl ustun nomlari yo'qoladi", "Feature Selection esa eng foydali asl ustunlarni tanlab qoladi (talqin saqlanadi!)"], en: ["Unlike PCA which creates abstract combinations, Feature Selection keeps original interpretable columns"] } },
      { title: { uz: "Filter Usullari (Modeldan Mustaqil)", en: "1. Filter Methods" }, points: { uz: ["VarianceThreshold: doimiy (0 variatsiyali) ustunlarni o'chirish", "Chi-Square (χ²) va ANOVA F-test (SelectKBest)", "Mutual Information (mutual_info_classif): chiziqsiz bog'liqlikni ham ushlaydi!"], en: ["VarianceThreshold drops zero-variance constants", "SelectKBest with χ², ANOVA F-test, or Mutual Information"] } },
      { title: { uz: "Wrapper Usullari (RFE)", en: "2. Wrapper Methods (RFE)" }, points: { uz: ["RFE (Recursive Feature Elimination): modelni o'qitadi, eng kuchsiz 1–2 ustunni tashlaydi, jarayonni takrorlaydi", "RFECV: Cross-Validation bilan optimal ustunlar sonini avtomatik topadi", "Afzallik: belgilar kombinatsiyasini hisobga oladi; Kamchilik: sekin"], en: ["RFE iteratively fits model and prunes weakest features", "RFECV finds optimal count automatically via CV"] } },
      { title: { uz: "Embedded Usullari (Lasso L1 & Tree Importance)", en: "3. Embedded Methods" }, points: { uz: ["Lasso (L1 regularizatsiya): keraksiz ustun koeffitsientlarini aniq 0 ga tushiradi", "Random Forest / Gradient Boosting: har splitda Gini pasayishini yig'adi (SelectFromModel)"], en: ["L1 Lasso shrinks useless weights to exact zero", "Tree-based SelectFromModel accumulates impurity reductions"] } }
    ],
    lab: {
      title: { uz: "L6: Entropiya/IG/Gini hisoblash va Filter/Wrapper/Embedded belgi tanlash", en: "L6: Impurity Calculations & Filter/Wrapper/Embedded Selection" },
      objective: { uz: "Python da Entropiya, Information Gain, Gini funksiyalarini yozish hamda SelectKBest, RFE va SelectFromModel bilan top belgilarni ajratish.", en: "Code Entropy/IG/Gini from scratch and compare SelectKBest, RFE, and Random Forest selection on Breast Cancer." },
      steps: [
        {
          title: { uz: "Entropiya, Gini va Information Gain Funksiyalari", en: "Compute Entropy, Gini & Information Gain in NumPy" },
          desc: { uz: "Qo'lda hisoblangan (6 Ha, 4 Yo'q) misolni Python funksiyasi bilan tekshiring.", en: "Verify the (6 Yes, 4 No) lecture calculation in NumPy." },
          code: `import numpy as np
def entropy(counts):
    p = np.array(counts) / sum(counts)
    p = p[p > 0]
    return -np.sum(p * np.log2(p))

def gini(counts):
    p = np.array(counts) / sum(counts)
    return 1 - np.sum(p ** 2)

H_root = entropy([6, 4])
IG = H_root - (0.4 * entropy([4, 0]) + 0.6 * entropy([2, 4]))
print(f"H(root)={H_root:.3f} | Gini(root)={gini([6,4]):.3f} | IG={IG:.3f}")`
        },
        {
          title: { uz: "Filter (Mutual Info) vs Wrapper (RFE) vs Embedded", en: "Compare SelectKBest, RFE & Tree Importance" },
          desc: { uz: "Breast Cancer (30 ustun) dan eng muhim 5 ta belgini 3 usulda ajrating.", en: "Select top 5 features on Breast Cancer using 3 paradigms." },
          code: `from sklearn.datasets import load_breast_cancer
from sklearn.feature_selection import SelectKBest, mutual_info_classif, RFE
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

data = load_breast_cancer()
X_s = StandardScaler().fit_transform(data.data)
f_idx = SelectKBest(mutual_info_classif, k=5).fit(X_s, data.target).get_support(indices=True)
w_idx = RFE(LogisticRegression(max_iter=1000), n_features_to_select=5).fit(X_s, data.target).get_support(indices=True)
rf = RandomForestClassifier(100, random_state=42).fit(data.data, data.target)
e_idx = np.argsort(rf.feature_importances_)[-5:][::-1]
print("Filter:", data.feature_names[f_idx].tolist())
print("Wrapper:", data.feature_names[w_idx].tolist())
print("Embedded:", data.feature_names[e_idx].tolist())`
        },
        {
          title: { uz: "Tanlangan 5 ta belgi bilan model aniqligini tekshirish", en: "Benchmark Accuracy: 30 Features vs Top 5" },
          desc: { uz: "Atigi 5 ta ustun qolganda CV aniqligi qanchalik saqlanishini ko'ring.", en: "Measure 5-fold CV accuracy using only the selected 5 features." },
          code: `from sklearn.model_selection import cross_val_score
cv_all = cross_val_score(RandomForestClassifier(100, random_state=42), data.data, data.target, cv=5).mean()
cv_top5 = cross_val_score(RandomForestClassifier(100, random_state=42), data.data[:, e_idx], data.target, cv=5).mean()
print(f"All 30 features CV: {cv_all:.3f} | Top 5 features CV: {cv_top5:.3f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: Wine datasetida f_classif (ANOVA) va mutual_info_classif top-4 belgilarini solishtiring.",
          "2-variant: RFECV yordamida avtomatik optimal ustunlar sonini toping.",
          "3-variant: SplitInfo va Gain Ratio funksiyalarini Python da yozib sinang."
        ],
        en: [
          "Variant 1: Compare f_classif vs mutual_info_classif top 4 features on Wine.",
          "Variant 2: Run RFECV to discover optimal feature count automatically.",
          "Variant 3: Implement SplitInfo and Gain Ratio in Python."
        ]
      }
    },
    glossary: [
      { uz: "Entropiya", en: "Entropy", defUz: "Tugundagi sinflar tartibsizligini o'lchovchi mezon (0..1 bit)", defEn: "Information-theoretic impurity metric" },
      { uz: "Gain Ratio", en: "Gain Ratio", defUz: "IG ni SplitInfo ga bo'lib ko'p shoxli ustunlarni jazolovchi mezon", defEn: "Normalized IG penalizing high-cardinality splits" },
      { uz: "Filter / Wrapper / Embedded", en: "Filter / Wrapper / Embedded", defUz: "Belgilarni tanlashning statistik, model-o'qituvchi va ichki usullari", defEn: "Three feature selection families" },
      { uz: "RFE", en: "RFE", defUz: "Eng kuchsiz belgilarni bosqichma-bosqich olib tashlovchi Wrapper usuli", defEn: "Recursive Feature Elimination wrapper" }
    ],
    quiz: [
      { q: { uz: "Ikkilik sinfda Entropiya H=1.0 bo'lishi nimani bildiradi?", en: "In binary classification, what does Entropy H = 1.0 mean?" }, options: [{ label: 'A', uz: "Tugunda barcha namunalar bitta sinfga mansub", en: "All node samples belong to one pure class" }, { label: 'B', uz: "Ikki sinf teng 50% ga 50% nisbatda aralashgan", en: "Uniform 50% / 50% split with peak impurity" }, { label: 'C', uz: "Bo'sh tugunda birorta ham namuna qolmagan", en: "Zero samples remain inside this leaf partition" }, { label: 'D', uz: "Atribut qiymatlari to'liq korrelyatsiyalangan", en: "Input attributes show deterministic collinearity" }], answer: 'B', explanation: { uz: "p=0.5 da entropiya maksimal 1.0 bitga yetadi.", en: "Entropy peaks at 1.0 for uniform 50/50 classes." } },
      { q: { uz: "C4.5 algoritmi noyob ID ustuni muammosini qanday hal qiladi?", en: "How does C4.5 fix high-cardinality ID bias?" }, options: [{ label: 'A', uz: "IG ni SplitInfo ga bo'luvchi Gain Ratio bilan", en: "Using Gain Ratio = IG / SplitInfo" }, { label: 'B', uz: "Z-score me'yorlash va kovariatsiya bilan", en: "Via Z-score scaling and variance" }, { label: 'C', uz: "K-Means markazlarini minimallash bilan", en: "By minimizing K-Means centroids" }, { label: 'D', uz: "Classification Error mezonini olish bilan", en: "Through raw Classification Error" }], answer: 'A', explanation: { uz: "SplitInfo ko'p shoxli atributlarni jazolaydi.", en: "Dividing by SplitInfo penalizes many-valued splits." } },
      { q: { uz: "RFE (Recursive Feature Elimination) qaysi belgi tanlash turiga kiradi?", en: "Which feature selection category does RFE belong to?" }, options: [{ label: 'A', uz: "Filter usuli", en: "Filter method" }, { label: 'B', uz: "Wrapper usuli", en: "Wrapper method" }, { label: 'C', uz: "Embedded usul", en: "Embedded method" }, { label: 'D', uz: "Klasterlash usuli", en: "Clustering method" }], answer: 'B', explanation: { uz: "RFE modelni qayta o'qitish orqali eng yaxshi to'plamni qidiruvchi Wrapper usulidir.", en: "RFE retrains a model repeatedly as a Wrapper." } },
      { q: { uz: "Modeldan mustaqil ravishda χ² yoki Mutual Information bilan belgi saralash qaysi tur?", en: "Model-independent statistical feature ranking (χ², Mutual Info) is called?" }, options: [{ label: 'A', uz: "Filter tanlash", en: "Filter selection" }, { label: 'B', uz: "Wrapper tanlash", en: "Wrapper selection" }, { label: 'C', uz: "Embedded tanlash", en: "Embedded selection" }, { label: 'D', uz: "Bagging ansambli", en: "Bagging ensemble" }], answer: 'A', explanation: { uz: "Filter usullari model o'qitmasdan tezkor statistik baholaydi.", en: "Filter methods rank features purely statistically." } },
      { q: { uz: "(6 Ha, 4 Yo'q) tugun uchun Gini indeksi nechaga teng?", en: "What is Gini(t) for a node with (6 Yes, 4 No)?" }, options: [{ label: 'A', uz: "0.480", en: "0.480" }, { label: 'B', uz: "0.971", en: "0.971" }, { label: 'C', uz: "0.400", en: "0.400" }, { label: 'D', uz: "0.240", en: "0.240" }], answer: 'A', explanation: { uz: "1 - (0.6² + 0.4²) = 1 - (0.36 + 0.16) = 0.48.", en: "1 - (0.36 + 0.16) = 0.48." } }
    ],
    matching: [
      { left: { uz: "Entropy(p=0.5)", en: "Entropy(p=0.5)" }, right: { uz: "1.0 bit (maksimal noaniqlik)", en: "1.0 bit (maximum impurity)" } },
      { left: { uz: "Gain Ratio", en: "Gain Ratio" }, right: { uz: "IG / SplitInfo (ko'p shoxlarni jazolaydi)", en: "IG / SplitInfo (penalizes many-way splits)" } },
      { left: { uz: "Filter (χ², Mutual Info)", en: "Filter (χ², Mutual Info)" }, right: { uz: "Modeldan mustaqil tezkor statistik tanlash", en: "Fast model-independent ranking" } },
      { left: { uz: "Embedded (Lasso L1, Tree)", en: "Embedded (L1, Tree)" }, right: { uz: "Modelni o'qitish jarayonining o'zida tanlaydi", en: "Selects features during training itself" } }
    ],
    fillGap: [
      { text: { uz: "Ikkilik sinfda Gini indeksining maksimal qiymati ___ ga teng.", en: "The maximum Gini impurity for binary classification equals ___." }, answer: "0.5" },
      { text: { uz: "C4.5 da Information Gain ni ___ ko'rsatkichiga bo'lish Gain Ratio ni beradi.", en: "Dividing Information Gain by ___ yields C4.5's Gain Ratio." }, answer: "SplitInfo" },
      { text: { uz: "Lasso (___ regularizatsiya) keraksiz belgi koeffitsientlarini 0 ga tushiradi.", en: "Lasso (___ regularization) shrinks irrelevant feature weights to zero." }, answer: "L1" }
    ]
  }
);
