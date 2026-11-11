window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== M13 / L13 ====================
  {
    id: 13,
    code: 'M13',
    labCode: 'L13',
    slug: '13-anomaly-detection',
    hours: 2,
    labs: 1,
    keywords: ['Anomaly Detection', 'Outlier', 'Point', 'Contextual', 'Collective', 'Grubbs', 'MAD', 'LOF', 'Isolation Forest', 'Tan Ch.9'],
    title: {
      uz: "Ma'lumotlardagi anomaliyalarni aniqlashning statistik va masofaga asoslangan usullari",
      en: "Statistical & Proximity-Based Anomaly Detection"
    },
    description: {
      uz: "Anomaliya turlari (Tan 9-bob): Point, Contextual, Collective; Parametrik-statistik usullar (Z-score, Grubbs, IQR, MAD); Masofa/Zichlik usullari (k-NN, LOF) va Isolation Forest.",
      en: "Anomaly types (Tan Ch. 9), parametric/statistical methods (Z-score, Grubbs, IQR, MAD), distance/density (k-NN, LOF), and Isolation Forest."
    },
    sections: [
      {
        heading: { uz: "13.1. Anomaliyalar va Klassifikatsiyasi (Tan, 9.1-bo'lim)", en: "13.1. Anomalies & Taxonomy (Tan Ch. 9.1)" },
        bodyHtml: {
          uz: "<p><strong>Anomaliya (Outlier)</strong> — umumiy generativ mexanizmdan keskin farq qiluvchi kuzatuv (firibgarlik, kiberhujum, sensor nosozligi). Uch turga bo'linadi:</p><ul><li><strong>Point Anomaly:</strong> yakka nuqta umumiy ma'lumotdan uzoq (masalan, 120 mln so'mlik kutilmagan karta xaridi).</li><li><strong>Contextual Anomaly:</strong> muayyan vaqt/joy kontekstida g'ayritabiiy (masalan, qishda +35°C harorat).</li><li><strong>Collective Anomaly:</strong> har bir nuqta alohida normal ko'rinadi, lekin ketma-ket guruh sifatida g'alati (10 soniyada 500 ta login urinish / DDoS).</li></ul>",
          en: "<p><strong>Anomalies</strong> split into 3 classes (Tan Ch. 9.1): <strong>Point</strong> (single extreme value), <strong>Contextual</strong> (35°C in winter), and <strong>Collective</strong> (burst sequence like DDoS).</p>"
        }
      },
      {
        heading: { uz: "13.2. Parametrik-Statistik Usullar: Z-Score, Grubbs va Robust MAD", en: "13.2. Statistical Methods: Z-Score, Grubbs & MAD" },
        bodyHtml: {
          uz: "<p><strong>Parametrik usullar</strong> ma'lumot ma'lum taqsimotga (odatda Normal $\\mathcal{N}(\\mu, \\sigma^2)$) bo'ysunadi deb faraz qiladi: <strong>Z-score</strong> ($|z| > 3$) va <strong>Grubbs testi</strong>. Biroq ular <strong>Masking Effekti</strong>dan aziyat chekadi (bitta ulkan outlier $\\mu$ va $\\sigma$ ni kattalashtirib boshqa outlierlarni yashirib qo'yadi).</p><p><strong>Yechim — IQR ($[Q_1 - 1.5\\,IQR,\\; Q_3 + 1.5\\,IQR]$) va Modified Z-score (MAD):</strong> Mediana va Median Absolute Deviation (MAD) 50% gacha buzilgan qiymatlarga chidamli ($|M_i| > 3.5$ bo'lsa outlier).</p>",
          en: "<p><strong>Parametric tests</strong> (Z-score $|z|>3$, Grubbs' test) assume Gaussian normality and suffer from <strong>masking</strong>. <strong>IQR</strong> and <strong>Modified Z-score (MAD)</strong> resist masking ($|M_i| > 3.5$).</p>"
        },
        latex: "MAD = \\text{median}(|x_i - \\tilde{x}|), \\qquad M_i = \\frac{0.6745\\,(x_i - \\tilde{x})}{MAD}"
      },
      {
        heading: { uz: "13.3. Masofaga va Zichlikka Asoslangan Ko'p O'lchamli Usullar: k-NN, LOF, Isolation Forest", en: "13.3. Multivariate Distance & Density Methods: k-NN, LOF & Isolation Forest" },
        bodyHtml: {
          uz: "<p>Ko'p o'lchamli fazoda har bir ustunni alohida tekshirish yetmaydi (masalan, Yosh=22 normal, Maosh=150 mln bo'lishi mumkin, lekin birgalikda anomaliya!). Yechimlar:</p><ul><li><strong>k-NN Masofa Balli:</strong> $k$-eng yaqin qo'shnisigacha masofa katta bo'lgan nuqtalar anomaliya. (Global cheklov: siyrak klaster yonida ishlamaydi).</li><li><strong>LOF (Local Outlier Factor):</strong> nuqtaning lokal zichligini (LRD) $k$ ta qo'shnisining lokal zichligi bilan taqqoslaydi: $\\text{LOF} \\approx 1$ (normal), $\\text{LOF} \\gg 1$ (lokal anomaliya). Yangi test nuqtasi uchun <code>novelty=True</code> qo'llaniladi.</li><li><strong>Isolation Forest:</strong> masofa hisoblamaydi! Tasodifiy daraxtlarda anomaliyalar ildizga yaqin qisqa yo'l ($E(h(x))$) da ajraladi ($s(x, n) \\to 1$). <code>contamination</code> parametri kutilgan anomaliya ulushini belgilaydi.</li></ul>",
          en: "<p>Multivariate detectors catch cross-feature anomalies: <strong>k-NN distance</strong>, <strong>LOF</strong> ($\text{LOF}\\approx 1$ normal, $\\gg 1$ local outlier; pass <code>novelty=True</code> for unseen tests), and <strong>Isolation Forest</strong> (isolates anomalies in short random-tree paths).</p>"
        },
        latex: "\\text{LOF}_k(p) = \\frac{1}{|N_k(p)|}\\sum_{o\\in N_k(p)} \\frac{\\text{LRD}_k(o)}{\\text{LRD}_k(p)}, \\qquad s(x,n) = 2^{-\\frac{E(h(x))}{c(n)}}",
        widget: 'anomaly-sim'
      }
    ],
    slides: [
      { title: { uz: "M13: Anomaliyalarni aniqlash usullari", en: "M13: Anomaly & Outlier Detection" }, subtitle: { uz: "Tan Darsligi 9-bob · MITQ2506 · 80 daqiqa", en: "Tan Textbook Ch. 9 · MITQ2506 · 80 min" }, points: { uz: ["Anomaliya vs Shovqin", "3 xil anomaliya: Point, Contextual, Collective", "Statistik usullar: Z-Score, Grubbs, IQR va MAD (Masking)", "Ko'p o'lchovli usullar: k-NN masofa va LOF (LRD)", "Isolation Forest va L13 Python Lab"], en: ["Anomaly vs Noise", "Point, Contextual & Collective types", "Z-Score, Grubbs, IQR & MAD (Masking)", "Multivariate k-NN & LOF density ratio", "Isolation Forest & L13 Lab"] } },
      { title: { uz: "Anomaliyalarning 3 Turi (Tan 9.1)", en: "3 Types of Anomalies" }, table: { headers: { uz: ["Tur", "Ta'rif", "Misol"], en: ["Type", "Meaning", "Example"] }, rows: { uz: [["Point", "Yakka ekstremal nuqta", "100 mln so'mlik kutilmagan xarid"], ["Contextual", "Kontekstda g'ayritabiiy", "Qishda +35°C harorat"], ["Collective", "Ketma-ketlik / guruh g'alati", "10 sek da 500 ta login (DDoS)"]], en: [["Point", "Single extreme", "\$20,000 card swipe"], ["Contextual", "Context-dependent", "35°C in winter"], ["Collective", "Abnormal sequence", "DDoS request burst"]] } } },
      { title: { uz: "Parametrik Statistik Usullar va Masking Effekti", en: "Parametric Bounds & Masking" }, latex: "z = \\frac{x-\\mu}{\\sigma}, \\qquad M_i = \\frac{0.6745\\,(x_i - \\tilde{x})}{MAD}", points: { uz: ["Z-score (|z|>3) va Grubbs testi Normal taqsimotga tayanadi", "Masking: bitta 1000 qiymatli outlier μ va σ ni shishirib, 65 kabi outlierni yashiradi!", "Modified Z-score (Mediana + MAD) |M_i| > 3.5 bilan Masking ga chidamli"], en: ["One huge outlier inflates μ & σ, masking moderate outliers; MAD resists up to 50%"] } },
      { title: { uz: "Ko'p O'lchamli Usul: LOF (Local Outlier Factor)", en: "Local Outlier Factor (LOF)" }, latex: "\\text{LOF}_k(p) = \\frac{\\sum \\text{LRD}(o) / \\text{LRD}(p)}{k}", points: { uz: ["Global masofa zichligi har xil klasterlarda xato qiladi", "LOF nuqta zichligini (LRD) uning k ta qo'shnisi zichligi bilan solishtiradi", "LOF ≈ 1: normal | LOF >> 1: lokal anomaliya!", "Yangi test ma'lumoti uchun LocalOutlierFactor(novelty=True)"], en: ["LOF compares local density LRD to k neighbors: ≈1 normal, >>1 outlier; novelty=True for test data"] } },
      { title: { uz: "Isolation Forest (Qisqa Yo'l Uzunligi)", en: "Isolation Forest" }, latex: "s(x, n) = 2^{-\\frac{E(h(x))}{c(n)}}", points: { uz: ["Masofa hisoblamaydi — chiziqli tezlikda ishlaydi!", "Tasodifiy daraxtlarda anomaliyalar ildizga yaqin qisqa yo'lda (E(h) kichik) ajraladi", "contamination parametri kutilgan anomaliya ulushini belgilaydi"], en: ["Isolates anomalies near tree root in short random splits; contamination sets threshold"] } },
      { title: { uz: "Interaktiv Demo: Isolation Forest vs Z-Score", en: "Interactive Anomaly Visualizer" }, widget: 'anomaly-sim' },
      { title: { uz: "Talabalarga savol (LOF vs Z-Score)", en: "Class Discussion: Local vs Global" }, discussion: { q: { uz: "Nima uchun bitta zich klaster (oraliq 0.1) va bitta siyrak klaster (oraliq 2.0) bo'lganda Zich klaster chetidagi 0.8 masofali outlierni global k-NN usuli topa olmaydi, LOF esa topadi?", en: "Why does global k-NN miss an outlier 0.8 units from a dense cluster (spacing 0.1) when a sparse cluster has spacing 2.0, while LOF catches it?" }, a: { uz: "Global k-NN 0.8 masofani siyrak klasterdagi 2.0 dan kichik ko'rib normal deydi. <strong>LOF</strong> esa 0.8 ni faqat Zich klasterdagi qo'shnilarning 0.1 zichligi bilan solishtirib LOF ≈ 8 >> 1 deb topadi!", en: "Global k-NN compares 0.8 against global 2.0. <strong>LOF</strong> compares 0.8 locally against its neighbors' 0.1 density → LOF >> 1!" } } }
    ],
    lab: {
      title: { uz: "L13: Statistik (MAD) va masofaga asoslangan (LOF, Isolation Forest) anomaliya aniqlash", en: "L13: Statistical MAD, LOF & Isolation Forest Lab" },
      objective: { uz: "Z-score Masking ni ko'rsatish, MAD bilan tuzatish hamda turli zichlikdagi ma'lumotda LOF va Isolation Forest ni taqqoslash.", en: "Demonstrate Z-score masking vs MAD, and compare LOF vs Isolation Forest on mixed-density data." },
      steps: [
        {
          title: { uz: "Z-score Masking vs Robust MAD (1D)", en: "1D Masking Demo: Z-Score vs MAD" },
          desc: { uz: "1000 qiymatli ekstremal outlier 65 ni yashirishini ko'ring.", en: "Show Z-score missing 65 while MAD catches both 65 and 1000." },
          code: `import numpy as np
arr = np.array([10, 12, 11, 13, 12, 14, 11, 65, 1000])
z = np.abs((arr - arr.mean()) / arr.std())
med = np.median(arr)
mad = np.median(np.abs(arr - med))
mod_z = np.abs(0.6745 * (arr - med) / mad)
print("Z-Score (>3):", arr[z > 3])
print("MAD Mod-Z (>3.5):", arr[mod_z > 3.5])`
        },
        {
          title: { uz: "Turli Zichlikdagi Klasterlar + Anomaliyalar", en: "Mixed-Density 2D Dataset" },
          desc: { uz: "Zich klaster + siyrak klaster + 20 ta anomaliya yarating.", en: "Combine dense cluster, sparse cluster, and 20 outliers." },
          code: `np.random.seed(42)
X = np.vstack([np.random.normal(0, 0.4, (180, 2)), np.random.normal(6, 1.5, (100, 2)), np.random.uniform(-4, 11, (20, 2))])
y_true = np.hstack([np.zeros(280), np.ones(20)])  # 1 = anomaly
print("Total samples:", len(X), "| Anomalies:", int(y_true.sum()))`
        },
        {
          title: { uz: "LOF va Isolation Forest F1-Score Taqqoslash", en: "Evaluate LOF & Isolation Forest" },
          desc: { uz: "Ikkala modelning F1 va Recall ko'rsatkichini chiqaring.", en: "Print classification_report for anomaly detection." },
          code: `from sklearn.ensemble import IsolationForest
from sklearn.neighbors import LocalOutlierFactor
from sklearn.metrics import classification_report

iso = IsolationForest(contamination=20/300, random_state=42).fit_predict(X) == -1
lof = LocalOutlierFactor(n_neighbors=20, contamination=20/300).fit_predict(X) == -1
print("Isolation Forest:\\n", classification_report(y_true, iso, target_names=['Normal','Anom']))
print("LOF:\\n", classification_report(y_true, lof, target_names=['Normal','Anom']))`
        }
      ],
      variants: {
        uz: [
          "1-variant: LocalOutlierFactor(n_neighbors=5, 20, 50) uchun F1-score ni solishtiring.",
          "2-variant: LocalOutlierFactor(novelty=True) ni train/test split da sinab ko'ring.",
          "3-variant: OneClassSVM(nu=0.07) natijasini Isolation Forest bilan taqqoslang."
        ],
        en: [
          "Variant 1: Sweep LOF n_neighbors across [5, 20, 50].",
          "Variant 2: Fit LOF(novelty=True) on normal-only train data and score test outliers.",
          "Variant 3: Compare OneClassSVM(nu=0.07) vs IsolationForest."
        ]
      }
    },
    glossary: [
      { uz: "Masking effekti", en: "Masking Effect", defUz: "Ekstremal outlier μ va σ ni oshirib boshqa outlierlarni yashirishi", defEn: "Extreme outliers inflating mean/std and hiding other outliers" },
      { uz: "MAD", en: "MAD", defUz: "Medianadan absolyut og'ishlar medianasi", defEn: "Median Absolute Deviation" },
      { uz: "LOF", en: "LOF", defUz: "Qo'shnilar zichligiga nisbatlangan lokal anomaliya omili", defEn: "Local Outlier Factor density ratio" },
      { uz: "Isolation Forest", en: "Isolation Forest", defUz: "Qisqa tasodifiy daraxt yo'llari orqali izolyatsiyalovchi model", defEn: "Tree ensemble scoring short isolation path lengths" }
    ],
    quiz: [
      { q: { uz: "Isolation Forest anomaliyalarni qanday aniqlaydi?", en: "How does Isolation Forest identify anomalies?" }, options: [{ label: 'A', uz: "Barcha atributlarning o'rtacha va standart og'ish nisbatidan topadi", en: "Measures standard deviation multiples from each global mean" }, { label: 'B', uz: "Anomaliyalar tasodifiy daraxtda qisqa yo'l bilan tez izolyatsiya bo'ladi", en: "Anomalies isolate in shorter average random-tree split paths" }, { label: 'C', uz: "Zichlik radiusi ichidagi K-Means markazlari sonini sanab chiqadi", en: "Counts K-Means cluster distances beyond fixed centroid spheres" }, { label: 'D', uz: "Apriori qoidalari bo'yicha eng kam uchraydigan savatlarni ajratadi", en: "Selects rare itemsets falling below Apriori support rules" }], answer: 'B', explanation: { uz: "Chetda turgan nuqtalar kam qadamda ajraladi (s→1).", en: "Short average path length E(h(x)) yields s→1." } },
      { q: { uz: "LOF >> 1 nimani bildiradi?", en: "What does LOF >> 1 mean?" }, options: [{ label: 'A', uz: "Atrofidagilardan yuqori zichlikdagi normal klaster nuqtasi", en: "Normal inlier surrounded by dense neighbors" }, { label: 'B', uz: "Qo'shnilaridan past zichlikka ega lokal anomaliya nuqtasi", en: "Local outlier with lower density than neighbors" }, { label: 'C', uz: "Barcha klasterlar uchun umumiy geometrik og'irlik markazi", en: "Geometric centroid shared by adjacent clusters" }, { label: 'D', uz: "Standartlashtirish jarayonida nolga tenglangan muvozanat qiymati", en: "Zero-centered value created by Z-score scaling" }], answer: 'B', explanation: { uz: "LOF qo'shnilar zichligining nuqta zichligiga nisbatidir.", en: "Neighbors are much denser than the target point." } },
      { q: { uz: "Qishda +35°C harorat qaysi anomaliya turiga kiradi?", en: "35°C in winter is an example of which anomaly type?" }, options: [{ label: 'A', uz: "Point (Yakka) anomaliya", en: "Point Anomaly" }, { label: 'B', uz: "Contextual (Kontekstual) anomaliya", en: "Contextual Anomaly" }, { label: 'C', uz: "Collective (Guruhli) anomaliya", en: "Collective Anomaly" }, { label: 'D', uz: "Masking (Niqoblash) xatosi", en: "Masking Distortion" }], answer: 'B', explanation: { uz: "Vaqt/mavsum kontekstida g'ayritabiiy qiymat Contextual anomaly deyiladi.", en: "Abnormal within the seasonal context." } },
      { q: { uz: "Z-score dagi Masking muammosini qaysi chidamli statistika hal qiladi?", en: "Which robust metric fixes Z-score Masking?" }, options: [{ label: 'A', uz: "Modified Z-score (Mediana va MAD)", en: "Modified Z-score (Median & MAD)" }, { label: 'B', uz: "Standart arifmetik Mean va Sigma", en: "Standard Arithmetic Mean & Sigma" }, { label: 'C', uz: "Min-Max [0, 1] chiziqli masshtablash", en: "Min-Max [0, 1] linear rescaling" }, { label: 'D', uz: "Umumiy sinf aniqligi Accuracy bahosi", en: "Overall Accuracy classification score" }], answer: 'A', explanation: { uz: "Mediana va MAD ekstremal qiymatlarga chidamli.", en: "Median & MAD resist extreme outlier distortion." } },
      { q: { uz: "Isolation Forest da `contamination` parametri nimani bildiradi?", en: "What does `contamination` specify in Isolation Forest?" }, options: [{ label: 'A', uz: "Datasetdagi kutilayotgan anomaliya ulushi", en: "Expected proportion of outliers" }, { label: 'B', uz: "O'rmonda quriladigan daraxtlar soni", en: "Total number of random iTrees" }, { label: 'C', uz: "Tasodifiy daraxtning maksimal chuqurligi", en: "Maximum split depth per iTree" }, { label: 'D', uz: "Qo'shnilarni qidirish Evklid radiusi", en: "Euclidean density neighborhood radius" }], answer: 'A', explanation: { uz: "Anomaliya chegarasini belgilash uchun kutilgan ulush beriladi.", en: "Sets the score cutoff for anomaly flags." } }
    ],
    matching: [
      { left: { uz: "Point Anomaly", en: "Point Anomaly" }, right: { uz: "Yakka nuqta umumiy ma'lumotdan keskin uzoq", en: "Single instance far from rest" } },
      { left: { uz: "Contextual Anomaly", en: "Contextual Anomaly" }, right: { uz: "Qishda +35°C yoki tungi 03:00 kirish", en: "35°C in winter or 3 AM login" } },
      { left: { uz: "Collective Anomaly", en: "Collective Anomaly" }, right: { uz: "10 sek da 500 ta login (ketma-ketlik g'alati)", en: "500 logins in 10s (abnormal group)" } },
      { left: { uz: "LOF (novelty=True)", en: "LOF (novelty=True)" }, right: { uz: "Yangi test ma'lumotini lokal zichlikka tekshiradi", en: "Scores unseen test points via local density" } }
    ],
    fillGap: [
      { text: { uz: "Bitta ulkan outlier μ va σ ni oshirib boshqalarni yashirib qo'yishi ___ effekti deyiladi.", en: "One huge outlier inflating μ and σ to hide others is the ___ effect." }, answer: "Masking" },
      { text: { uz: "Modified Z-score formulasi Mediana va ___ ga tayanadi.", en: "Modified Z-score relies on the Median and ___." }, answer: "MAD" },
      { text: { uz: "LOF ko'rsatkichi ___ ga yaqin bo'lsa, nuqta normal hisoblanadi.", en: "A point is normal when its LOF score is close to ___." }, answer: "1" }
    ]
  },

  // ==================== M14 / L14 ====================
  {
    id: 14,
    code: 'M14',
    labCode: 'L14',
    slug: '14-ensemble-methods',
    hours: 2,
    labs: 1,
    keywords: ['Ensemble', 'Bias-Variance', 'Bagging', 'Bootstrap', 'OOB', 'Random Forest', 'AdaBoost', 'Gradient Boosting', 'XGBoost', 'Tan Ch.4'],
    title: {
      uz: "Ma'lumotlarni ansambl usulida tasniflash",
      en: "Ensemble Classification Methods (Random Forest & Boosting)"
    },
    description: {
      uz: "Ansambl konsepsiyasi (Tan 4.10): Bias-Variance, Bagging (63.2% Bootstrap & OOB), Random Forest (√p), AdaBoost vaznlari, Gradient Boosting (XGBoost/LightGBM/CatBoost).",
      en: "Ensemble learning (Tan Ch. 4.10): Bias-Variance, Bagging & OOB, Random Forest √p splits, AdaBoost, and Gradient Boosting."
    },
    sections: [
      {
        heading: { uz: "14.1. Ansambl O'rganish Konsepsiyasi va Bias-Variance (Tan, 4.10)", en: "14.1. Ensemble Concept & Bias-Variance (Tan Ch. 4.10)" },
        bodyHtml: {
          uz: "<p><strong>Ansambl o'rganish</strong> — ko'plab baza modellarni birlashtirib yakka modeldan kuchliroq bashoratchi yaratishdir. Kondorse teoremasiga ko'ra, mustaqil va &gt;50% aniqlikli modellar ko'pchilik ovozi bilan xatoni keskin kamaytiradi. Bunda <strong>Bagging</strong> yuqori <strong>Variance</strong> ni (chuqur daraxtlar), <strong>Boosting</strong> esa yuqori <strong>Bias</strong> ni (sayoz daraxtlar) kamaytiradi.</p>",
          en: "<p><strong>Ensembles</strong> combine multiple base classifiers. By Condorcet's theorem, independent models &gt;50% accurate reduce error via voting: <strong>Bagging</strong> slashes <strong>Variance</strong>; <strong>Boosting</strong> slashes <strong>Bias</strong>.</p>"
        },
        latex: "\\text{Var}\\left(\\frac{1}{B}\\sum_{b=1}^{B} T_b\\right) = \\rho\\sigma^2 + \\frac{1-\\rho}{B}\\sigma^2",
        widget: 'ensemble-sim'
      },
      {
        heading: { uz: "14.2. Bagging, 63.2% Bootstrap va Random Forest (√p)", en: "14.2. Bagging, OOB & Random Forest" },
        bodyHtml: {
          uz: "<p><strong>Bagging (Bootstrap Aggregating):</strong> qaytarib qo'yib olish (bootstrap) yo'li bilan $B$ ta parallel namuna olinadi. Har namunaga o'rtacha $\\approx 63.2\\%$ noyob qator tushadi, qolgan <strong>36.8% Out-of-Bag (OOB)</strong> qatorlar ichki validatsiya uchun ishlatiladi.</p><p><strong>Random Forest</strong> = Bagging + har bo'linishda jami $p$ ta atributdan faqat tasodifiy $\\sqrt{p}$ tasini sinab ko'rish (daraxtlararo korrelyatsiya $\\rho$ ni tushirish uchun!).</p>",
          en: "<p><strong>Bagging</strong> trains $B$ parallel models on bootstrap samples (~63.2% unique rows, leaving <strong>36.8% Out-of-Bag</strong> validation). <strong>Random Forest</strong> adds $\\sqrt{p}$ random feature subsampling per split to lower correlation $\\rho$.</p>"
        }
      },
      {
        heading: { uz: "14.3. AdaBoost va Gradient Boosting (XGBoost, LightGBM, CatBoost)", en: "14.3. AdaBoost & Gradient Boosting" },
        bodyHtml: {
          uz: "<p><strong>Boosting</strong> sayoz daraxtlarni <strong>ketma-ket</strong> o'qitadi: <strong>AdaBoost</strong> xato topilgan namuna vaznini $\\alpha_t = \\frac{1}{2}\\ln\\frac{1-\\epsilon_t}{\\epsilon_t}$ bilan oshiradi; <strong>Gradient Boosting</strong> esa har yangi daraxtni oldingi model qoldiq xatosiga (negative gradient / residual) o'qitadi (<strong>XGBoost, LightGBM, CatBoost</strong>).</p>",
          en: "<p><strong>Boosting</strong> trains sequentially: <strong>AdaBoost</strong> increases sample weights of misclassified points; <strong>Gradient Boosting</strong> fits negative loss residuals (e.g., <strong>XGBoost, LightGBM, CatBoost</strong>).</p>"
        },
        latex: "F_m(x)=F_{m-1}(x)+\\eta\\cdot h_m(x), \\qquad \\alpha_t=\\frac{1}{2}\\ln\\left(\\frac{1-\\epsilon_t}{\\epsilon_t}\\right)",
        table: {
          headers: { uz: ["Mezon", "Bagging (Random Forest)", "Boosting (XGBoost / AdaBoost)"], en: ["Criteria", "Bagging (RF)", "Boosting (XGB / Ada)"] },
          rows: {
            uz: [
              ["O'qitish tartibi", "Parallel", "Ketma-ket (Sequential)"],
              ["Maqsad", "Dispersiyani (Variance) kamaytirish", "Xolislikni (Bias) kamaytirish"],
              ["Overfitting", "B oshsa ham overfitting qilmaydi", "early_stopping va learning_rate η kerak"]
            ],
            en: [
              ["Training", "Parallel", "Sequential"],
              ["Target", "Reduces Variance", "Reduces Bias"],
              ["Overfitting", "Does not overfit as B grows", "Needs η shrinkage & early stopping"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "M14: Ansambl usullari (RF & Boosting)", en: "M14: Ensemble Classification Methods" }, subtitle: { uz: "Tan Darsligi 4.10-bo'lim · MITQ2506 · 80 daqiqa", en: "Tan Ch. 4.10 · MITQ2506 · 80 min" }, points: { uz: ["Crowd Wisdom va Bias-Variance dekompozitsiyasi", "Bagging, 63.2% Bootstrap va OOB baho", "Random Forest va √p dekorrelatsiyasi", "AdaBoost va Gradient Boosting (XGBoost/LightGBM/CatBoost)", "Stacking va L14 Python Lab"], en: ["Crowd Wisdom & Bias-Variance", "Bagging & 36.8% Out-of-Bag validation", "Random Forest √p feature subsampling", "AdaBoost & Gradient Boosting", "Stacking & L14 Lab"] } },
      { title: { uz: "Bias-Variance va Ansambl Strategiyalari", en: "Bias-Variance Trade-off" }, points: { uz: ["Chuqur daraxt: past Bias, yuqori Variance → Bagging / Random Forest!", "Sayoz Stump: yuqori Bias, past Variance → Boosting!"], en: ["Bagging cuts Variance of deep trees; Boosting cuts Bias of shallow trees"] } },
      { title: { uz: "Bagging va Out-of-Bag (OOB = 36.8%)", en: "Bagging & OOB Validation" }, latex: "P(\\text{not picked}) = \\left(1 - \\frac{1}{N}\\right)^N \\to e^{-1} \\approx 36.8\\%", points: { uz: ["Har bootstrap namunaga ~63.2% noyob qator kiradi", "Qolgan 36.8% OOB satrlar oob_score=True bilan bepul test vazifasini bajaradi"], en: ["Each bootstrap captures ~63.2% rows; 36.8% OOB rows validate free of charge"] } },
      { title: { uz: "Random Forest: Nega √p Xususiyat?", en: "Random Forest √p Feature Subsampling" }, latex: "\\text{Var}(\\bar{T}) = \\rho\\sigma^2 + \\frac{1-\\rho}{B}\\sigma^2", points: { uz: ["Har tugun bo'linishida √p tasodifiy atributni ko'rish daraxtlararo korrelyatsiya ρ ni kamaytiradi!"], en: ["Subsampling √p attributes per split decorrelates trees, shrinking ρ"] } },
      { title: { uz: "Interaktiv Ansambl Simulatori", en: "Interactive Ensemble Error Explorer" }, widget: 'ensemble-sim' },
      { title: { uz: "AdaBoost vs Gradient Boosting", en: "AdaBoost vs Gradient Boosting" }, points: { uz: ["AdaBoost: noto'g'ri topilgan namunalarga α_t bilan katta vazn beradi", "Gradient Boosting: har yangi daraxt oldingi model qoldiq xatosiga (y - ŷ) o'qitiladi", "Zamonaviy: XGBoost, LightGBM, CatBoost"], en: ["AdaBoost reweights errors; Gradient Boosting fits residuals (XGBoost/LightGBM/CatBoost)"] } },
      { title: { uz: "Talabalarga savol (Bagging vs Boosting Overfitting)", en: "Class Discussion: Tree Count Overfitting" }, discussion: { q: { uz: "Random Forest da n_estimators ni 100 dan 5000 ga oshirsak overfitting bo'ladimi? Gradient Boosting da-chi?", en: "If n_estimators rises from 100 to 5,000, does Random Forest overfit? What about Gradient Boosting?" }, a: { uz: "Random Forest parallel daraxtlarni o'rtachalagani uchun <strong>overfitting bo'lmaydi</strong>. Gradient Boosting esa qoldiq shovqinga ham daraxt qo'shaverib <strong>overfittingga tushishi mumkin</strong> — shu sabab <code>early_stopping</code> kerak!", en: "Random Forest averages independent trees and <strong>does not overfit</strong>; Gradient Boosting fits residual noise and <strong>can overfit</strong> without early stopping!" } } }
    ],
    lab: {
      title: { uz: "L14: Random Forest va boosting algoritmlari yordamida tasniflash", en: "L14: Random Forest & Boosting Models Lab" },
      objective: { uz: "DecisionTree, Bagging, RandomForest (OOB), AdaBoost, GradientBoosting va Stacking modellarini 5-fold CV bilan taqqoslash.", en: "Benchmark DecisionTree, Bagging, RandomForest (OOB), AdaBoost, GradientBoosting, and Stacking." },
      steps: [
        {
          title: { uz: "5 ta Modelni 5-Fold Stratified CV bilan Taqqoslash", en: "5-Fold CV Benchmark" },
          desc: { uz: "Breast Cancer datasetida barcha ansambllarni solishtiring.", en: "Compare single tree vs 4 ensemble classifiers." },
          code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import BaggingClassifier, RandomForestClassifier, AdaBoostClassifier, GradientBoostingClassifier

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.3, stratify=data.target, random_state=42)
models = {
    'DecisionTree': DecisionTreeClassifier(random_state=42),
    'Bagging': BaggingClassifier(n_estimators=100, random_state=42),
    'RandomForest': RandomForestClassifier(n_estimators=150, oob_score=True, random_state=42),
    'AdaBoost': AdaBoostClassifier(n_estimators=100, random_state=42),
    'GradBoost': GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)
}
for name, m in models.items():
    cv = cross_val_score(m, X_tr, y_tr, cv=5).mean()
    m.fit(X_tr, y_tr)
    print(f"{name:14s} | CV={cv:.3f} | Test={m.score(X_te, y_te):.3f}")
print("RF OOB:", round(models['RandomForest'].oob_score_, 3))`
        },
        {
          title: { uz: "Permutation Importance (Eng Muhim Belgilar)", en: "Permutation Importance on Test Set" },
          desc: { uz: "Qaysi 5 ta belgi eng kuchli ta'sir qilishini aniqlang.", en: "Rank top 5 predictive features via permutation_importance." },
          code: `from sklearn.inspection import permutation_importance
import numpy as np
perm = permutation_importance(models['RandomForest'], X_te, y_te, n_repeats=10, random_state=42)
for i in np.argsort(perm.importances_mean)[-5:][::-1]:
    print(f"{data.feature_names[i]:25s}: {perm.importances_mean[i]:.4f}")`
        },
        {
          title: { uz: "Stacking Classifier", en: "Build a Stacking Classifier" },
          desc: { uz: "RandomForest + GradientBoosting + Scaled LogisticRegression ni birlashtiring.", en: "Combine RF, GBDT, and LogisticRegression via Stacking." },
          code: `from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

stack = StackingClassifier([
    ('rf', RandomForestClassifier(100, random_state=42)),
    ('gb', GradientBoostingClassifier(100, random_state=42)),
    ('lr', make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000)))
], final_estimator=LogisticRegression()).fit(X_tr, y_tr)
print("Stacking Test:", round(stack.score(X_te, y_te), 3))`
        }
      ],
      variants: {
        uz: [
          "1-variant: GradientBoostingClassifier da learning_rate=[0.01, 0.1, 0.5] natijalarini taqqoslang.",
          "2-variant: RandomForest da max_features=['sqrt', 'log2', None] uchun OOB score ni chiqaring.",
          "3-variant: HistGradientBoostingClassifier bilan ishlash tezligini solishtiring."
        ],
        en: [
          "Variant 1: Sweep learning_rate=[0.01, 0.1, 0.5] on GradientBoosting.",
          "Variant 2: Compare max_features=['sqrt', 'log2', None] on RandomForest OOB.",
          "Variant 3: Benchmark HistGradientBoostingClassifier."
        ]
      }
    },
    glossary: [
      { uz: "Bagging", en: "Bagging", defUz: "Bootstrap namunalarda parallel modellarni o'qitib dispersiyani kamaytirish", defEn: "Bootstrap Aggregating cutting variance" },
      { uz: "OOB (Out-of-Bag)", en: "OOB", defUz: "Bootstrapga kirmagan ~36.8% namunalardagi ichki validatsiya", defEn: "Validation on ~36.8% unsampled bootstrap rows" },
      { uz: "Random Forest", en: "Random Forest", defUz: "Bagging + har bo'linishda √p tasodifiy atribut tanlash", defEn: "Bagging + √p random feature splits" },
      { uz: "Gradient Boosting", en: "Gradient Boosting", defUz: "Oldingi model qoldiq xatolarini tuzatib ketma-ket o'qitish", defEn: "Sequential trees fitting negative loss residuals" }
    ],
    quiz: [
      { q: { uz: "Bagging ning asosiy ta'siri nima?", en: "What is Bagging's main statistical benefit?" }, options: [{ label: 'A', uz: "Modelning asosiy siljishini (Bias) qasddan oshirish", en: "Intentionally raising base model Bias errors" }, { label: 'B', uz: "Parallel daraxtlar bilan Variance (dispersiya) ni tushirish", en: "Reducing Variance and overfitting across parallel trees" }, { label: 'C', uz: "K-Means algoritmi uchun optimal K sonini aniqlash", en: "Automatically selecting K centroids for K-Means" }, { label: 'D', uz: "Barcha sonli ustunlarni [0, 1] oralig'iga keltirish", en: "Normalizing numeric attributes strictly to [0, 1]" }], answer: 'B', explanation: { uz: "Parallel daraxtlarni o'rtachalash model dispersiyasini tushiradi.", en: "Averaging parallel bootstrap trees cuts variance." } },
      { q: { uz: "Bootstrap namunaga kirmay qolgan (~36.8%) ma'lumotlar nima deb ataladi?", en: "What are the ~36.8% unsampled rows in a bootstrap called?" }, options: [{ label: 'A', uz: "Out-of-Bag (OOB) qismi", en: "Out-of-Bag (OOB) samples" }, { label: 'B', uz: "Anomaliya shovqini (-1)", en: "Isolated noise points (-1)" }, { label: 'C', uz: "Statistik Bias og'ishi", en: "Statistical Bias offset" }, { label: 'D', uz: "Minimal Support chegarasi", en: "Minimum Support floor" }], answer: 'A', explanation: { uz: "OOB qatorlar bepul validatsiya to'plami bo'ladi.", en: "OOB rows validate the tree without a separate holdout." } },
      { q: { uz: "Random Forest oddiy Baggingdan nimasi bilan farq qiladi?", en: "How does Random Forest differ from standard Bagging?" }, options: [{ label: 'A', uz: "Har tugunda √p tasodifiy atribut tanlab daraxtlarni dekorrelyatsiya qiladi", en: "Subsamples √p random features per split to decorrelate trees" }, { label: 'B', uz: "Oldingi daraxtlarning qoldiq xatosini ketma-ket tuzatib borishga o'qitiladi", en: "Trains shallow stumps sequentially to fix prior residual gradients" }, { label: 'C', uz: "Hech qanday bootstrap qaytadan tanlashsiz to'liq jadvaldan nusxa oladi", en: "Uses the entire raw training matrix without bootstrap resampling" }, { label: 'D', uz: "Barcha atributlar bo'yicha faqat bitta global Gini daraxti quradi", en: "Builds one deep global Gini tree using every input attribute" }], answer: 'A', explanation: { uz: "√p cheklovi kuchli atribut barcha daraxtlarni bir xil qilishini to'xtatadi.", en: "Feature subsampling lowers inter-tree correlation ρ." } },
      { q: { uz: "Gradient Boosting da har bir yangi daraxt nimani bashorat qilishga o'qitiladi?", en: "In Gradient Boosting, what does each new tree fit?" }, options: [{ label: 'A', uz: "Oldingi ansamblning qoldiq xatosini (manfiy gradyent)", en: "Residual errors and negative gradients of prior trees" }, { label: 'B', uz: "Boshlang'ich jadvaldan tasodifiy aralashtirilgan yorliqni", en: "Randomly shuffled target labels from original matrix" }, { label: 'C', uz: "Har bir klaster uchun yangi Evklid markaz nuqtalarini", en: "Updated Euclidean centroid coordinates across clusters" }, { label: 'D', uz: "Asosiy komponentalar tahlilidagi maksimal dispersiya o'qini", en: "Orthogonal maximum-variance directions from PCA axes" }], answer: 'A', explanation: { uz: "Ketma-ket daraxtlar oldingi qoldiq xatolarni kamaytiradi.", en: "Sequential boosting fits negative loss gradients." } },
      { q: { uz: "XGBoost qaysi usullar oilasiga kiradi?", en: "Which ensemble family does XGBoost belong to?" }, options: [{ label: 'A', uz: "Parallel Bagging ansambli", en: "Parallel Bagging Voting" }, { label: 'B', uz: "Gradient Boosting ansambli", en: "Gradient Boosting Family" }, { label: 'C', uz: "DBSCAN zichlik klasterlash", en: "DBSCAN Density Clustering" }, { label: 'D', uz: "Apriori assotsiativ qoidasi", en: "Apriori Association Rules" }], answer: 'B', explanation: { uz: "XGBoost = Extreme Gradient Boosting.", en: "Extreme Gradient Boosting." } }
    ],
    matching: [
      { left: { uz: "Bagging", en: "Bagging" }, right: { uz: "Parallel bootstrap, Variance ni kamaytiradi", en: "Parallel bootstrap cutting Variance" } },
      { left: { uz: "Random Forest", en: "Random Forest" }, right: { uz: "Bagging + har tugunda √p atribut", en: "Bagging + √p random feature splits" } },
      { left: { uz: "Boosting (XGBoost)", en: "Boosting (XGBoost)" }, right: { uz: "Ketma-ket xato/qoldiq tuzatish, Bias ni kamaytiradi", en: "Sequential residual fitting cutting Bias" } },
      { left: { uz: "OOB (~36.8%)", en: "OOB (~36.8%)" }, right: { uz: "Bootstrapga kirmagan bepul validatsiya qatorlari", en: "Unsampled rows used for free validation" } }
    ],
    fillGap: [
      { text: { uz: "Bootstrap namunaga barcha satrlarning taxminan ___ foizi tushmay qoladi (OOB).", en: "Roughly ___ percent of rows are left Out-of-Bag in each bootstrap sample." }, answer: ["36.8", "37"] },
      { text: { uz: "Random Forest har tugun bo'linishida jami p ta atributdan taxminan ___ ta tasodifiy atributni ko'radi.", en: "Random Forest considers roughly ___ random features out of p at each split." }, answer: ["√p", "sqrt(p)"] },
      { text: { uz: "Turli oila modellari bashoratini meta-model bilan birlashtirish ___ deyiladi.", en: "Combining diverse base models via a meta-learner is called ___." }, answer: "Stacking" }
    ]
  },

  // ==================== M15 / L15 ====================
  {
    id: 15,
    code: 'M15',
    labCode: 'L15',
    slug: '15-text-mining',
    hours: 2,
    labs: 1,
    keywords: ['Text Mining', 'Tokenization', 'Stop Words', 'Stemming', 'Lemmatization', 'Bag of Words', 'N-gram', 'TF-IDF', 'Cosine Similarity'],
    title: {
      uz: "Matnlarni tahlil qilish usullari",
      en: "Text Mining & TF-IDF Analysis"
    },
    description: {
      uz: "Matn preprocessing (Tokenizatsiya, Stop-so'zlar, Stemming vs Lemmatization), Bag-of-Words & N-gramlar, TF-IDF matematikasi, Cosine Similarity va matn tasniflash.",
      en: "Text preprocessing, Stemming vs Lemmatization, Bag-of-Words & N-grams, TF-IDF math, Cosine Similarity, and text classification."
    },
    sections: [
      {
        heading: { uz: "15.1. Matn Preprocessing: Tokenizatsiya, Stemming va Lemmatization", en: "15.1. Text Preprocessing Pipeline" },
        bodyHtml: {
          uz: "<p>Strukturasiz matnni (yangiliklar, sharhlar, hujjatlar) modelga berishdan oldin tozalash bosqichlari: <strong>Lowercasing</strong> → <strong>Tokenizatsiya</strong> (so'zlarga ajratish) → <strong>Stop-so'zlarni o'chirish</strong> (\"va\", \"bilan\", \"the\", \"is\" — diqqat: sentimental tahlilda <code>\"not\"/\"emas\"</code> ni saqlang!) → <strong>Stemming vs Lemmatization</strong>.</p><p><strong>Stemming</strong> so'z oxirini qo'pol kesadi (<code>\"studies\" → \"studi\"</code>); <strong>Lemmatization</strong> esa lug'at va grammatika orqali haqiqiy o'zakka keltiradi (<code>\"better\" → \"good\"</code>).</p>",
          en: "<p>Pipeline: Lowercasing → Tokenization → Stop-word filtering (keep negations like <em>not</em> for sentiment!) → <strong>Stemming</strong> (heuristic suffix chopping) vs <strong>Lemmatization</strong> (dictionary root).</p>"
        }
      },
      {
        heading: { uz: "15.2. Bag-of-Words (BoW) va N-gramlar", en: "15.2. Bag-of-Words & N-Grams" },
        bodyHtml: {
          uz: "<p><strong>Bag-of-Words</strong> hujjatni so'z chastotasi vektoriga aylantiradi. Asosiy kamchiligi — so'zlar tartibi va kontekstni yo'qotadi. Buni yumshatish uchun ketma-ket 2–3 so'zni birlik sifatida oluvchi <strong>N-gramlar</strong> (masalan, Bigram: <code>\"yaxshi emas\"</code>) ishlatiladi.</p>",
          en: "<p><strong>BoW</strong> ignores word order; <strong>N-grams</strong> (bigrams like <code>\"not good\"</code>) capture short phrase order.</p>"
        }
      },
      {
        heading: { uz: "15.3. TF-IDF Matematik Modeli va Qo'lda Hisoblash", en: "15.3. TF-IDF Mathematical Model" },
        bodyHtml: {
          uz: "<p><strong>TF-IDF</strong> hujjatda ko'p uchraydigan, lekin barcha hujjatlarda kamyob bo'lgan kalit so'zlarga katta vazn beradi. Masalan, $N=100$ hujjatda <code>\"algoritm\"</code> $df=10$ hujjatda uchrasa, 50 so'zli hujjatda 3 marta kelganda: $TF=3/50=0.06$, $IDF=\\log_{10}(100/10)=1.0 \\implies \\text{TF-IDF}=0.06$.</p>",
          en: "<p><strong>TF-IDF</strong> weights document term frequency against corpus rarity. Example: $N=100$, $df=10$, count=3 in 50 words $\\implies TF=0.06, IDF=\\log_{10}(10)=1.0 \\implies \\text{TF-IDF}=0.06$.</p>"
        },
        latex: "\\text{TF}(t,d)=\\frac{\\text{count}(t,d)}{|d|}, \\qquad \\text{IDF}(t)=\\log\\left(\\frac{N}{\\text{df}(t)}\\right), \\qquad \\text{TF-IDF}=\\text{TF}\\times\\text{IDF}",
        widget: 'tfidf-sim'
      },
      {
        heading: { uz: "15.4. Cosine Similarity va Matnlarni Tasniflash", en: "15.4. Cosine Similarity & Text Classification" },
        bodyHtml: {
          uz: "<p>Matn vektorlari juda siyrak (sparse) va hujjat uzunligi turlicha bo'lgani uchun Evklid masofasi o'rniga uzunlikka befarq <strong>Cosine Similarity</strong> ishlatiladi. Tasniflashda siyrak hisob/TF-IDF matritsalarida tez ishlovchi <strong>Multinomial Naive Bayes</strong>, LinearSVC va LogisticRegression keng qo'llaniladi (Spam filtri, Sentimental tahlil).</p>",
          en: "<p>Sparse variable-length text vectors use length-invariant <strong>Cosine Similarity</strong> and classifiers like <strong>MultinomialNB</strong> / LinearSVC for spam filtering and Sentiment Analysis.</p>"
        },
        latex: "\\cos(\\theta)=\\frac{A\\cdot B}{\\|A\\|_2\\|B\\|_2}"
      }
    ],
    slides: [
      { title: { uz: "M15: Matnlarni tahlil qilish usullari", en: "M15: Text Mining & TF-IDF" }, subtitle: { uz: "BoW · N-grams · TF-IDF · Cosine Similarity · Sentiment (80 daqiqa)", en: "Preprocessing, BoW, TF-IDF & Sentiment (80 min)" }, points: { uz: ["Matn preprocessing: Tokenization, Stop-words, Stemming vs Lemma", "Bag-of-Words va N-gramlar", "TF-IDF formulasi va qo'lda hisoblash", "Cosine Similarity vs Evklid masofasi", "MultinomialNB, Sentiment Analysis va Lab 15"], en: ["Preprocessing & Stemming vs Lemmatization", "BoW & N-grams", "TF-IDF math & worked example", "Cosine Similarity", "Sentiment Analysis & Lab 15"] } },
      { title: { uz: "Matnni Qayta Ishlash Bosqichlari", en: "NLP Preprocessing Pipeline" }, points: { uz: ["Lowercasing + tinish/HTML tozalash", "Tokenizatsiya: jumlani so'zlarga bo'lish", "Stop-so'zlar: umumiy yordamchi so'zlarni olib tashlash ('emas/not' ni saqlang!)", "Stemming ('studies'→'studi') vs Lemmatization ('better'→'good')"], en: ["Lowercase → Tokenize → Stop-words (keep negations!) → Stemming vs Lemmatization"] } },
      { title: { uz: "Bag-of-Words (BoW) va N-Gramlar", en: "Bag-of-Words & N-Grams" }, points: { uz: ["BoW so'zlar tartibini va kontekstni hisobga olmaydi", "Bigram (ngram_range=(1,2)): 'yaxshi emas' ni bitta belgi sifatida saqlaydi"], en: ["BoW drops word order; Bigrams preserve short negation phrases"] } },
      { title: { uz: "TF-IDF Formulasi", en: "TF-IDF Weighting" }, latex: "\\text{TF-IDF}(t,d)=\\frac{\\text{count}(t,d)}{|d|}\\times\\log\\left(\\frac{N}{\\text{df}(t)}\\right)", points: { uz: ["TF: so'zning hujjatdagi chastotasi", "IDF: ko'p hujjatda uchraydigan umumiy so'zlar vaznini pasaytiradi"], en: ["TF measures local prominence; IDF down-weights common corpus terms"] } },
      { title: { uz: "Interaktiv TF-IDF Kalkulyatori", en: "Interactive TF-IDF Explorer" }, widget: 'tfidf-sim' },
      { title: { uz: "Cosine Similarity (Uzunlikka Befarq O'xshashlik)", en: "Cosine Similarity" }, latex: "\\cos(\\theta) = \\frac{A\\cdot B}{\\|A\\|\\|B\\|}", points: { uz: ["Hujjat hajmi 2x oshsa ham burchak o'zgarmaydi — qisqa tvit va uzun maqolani taqqoslash uchun ideal"], en: ["Invariant to document length; compares angle between sparse TF-IDF vectors"] } },
      { title: { uz: "Talabalarga savol (Stop-words)", en: "Class Discussion: Negation Stop-Words" }, discussion: { q: { uz: "Sharhlarda Sentimental tahlil qilayotganda 'emas', 'yo\\'q', 'not' so'zlarini stop-so'z deb o'chirib tashlasak nima bo'ladi?", en: "In Sentiment Analysis, what happens if you remove 'not', 'no', and 'never' as stop-words?" }, a: { uz: "'Telefon yaxshi emas' jumlasi 'telefon yaxshi' bo'lib qolib, salbiy sharh <strong>Ijobiy</strong> deb xato tasniflanadi!", en: "'Not good' collapses to 'good', flipping negative reviews into Positive!" } } }
    ],
    lab: {
      title: { uz: "L15: Bag-of-Words va TF-IDF yordamida matnlarni vektorlash va tasniflash", en: "L15: BoW & TF-IDF Vectorization & Classification" },
      objective: { uz: "CountVectorizer (BoW) va TfidfVectorizer (1,2-gram) ni solishtirish, Cosine Similarity qidiruvi va MultinomialNB bilan matn tasniflash.", en: "Compare CountVectorizer vs TfidfVectorizer, run Cosine Similarity search, and train MultinomialNB." },
      steps: [
        {
          title: { uz: "BoW (CountVectorizer) vs TF-IDF Vektorizatsiya", en: "Compare CountVectorizer vs TfidfVectorizer" },
          desc: { uz: "12 ta o'zbekcha yangilik sarlavhasini BoW va TF-IDF ga o'tkazing.", en: "Vectorize 12 headlines using BoW and TF-IDF bigrams." },
          code: `from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
docs = [
    "Futbol chempionati qiziqarli o'tdi", "Milliy terma jamoa g'alaba qozondi",
    "Basketbol turniri yakunlandi", "Sport musobaqasida rekord o'rnatildi",
    "Python dasturlash va sun'iy intellekt", "Data Mining algoritmlari kursi",
    "Neyron tarmoqlar va chuqur o'rganish", "Mashina o'rganish modellari",
    "Iqtisodiyot o'sishi va eksport hajmi", "Valyuta kursi bugun o'zgardi",
    "Milliy iqtisodiyot rivojlanish dasturi", "Bozorda inflyatsiya pasaydi"
]
y = [0,0,0,0, 1,1,1,1, 2,2,2,2]
classes = ['Sport', 'Texnologiya', 'Iqtisodiyot']
vec = TfidfVectorizer(ngram_range=(1, 2))
X = vec.fit_transform(docs)
print("BoW features:", CountVectorizer().fit_transform(docs).shape[1], "| TF-IDF (1,2) features:", X.shape[1])`
        },
        {
          title: { uz: "Cosine Similarity orqali O'xshash Matnlarni Topish", en: "Semantic Search via Cosine Similarity" },
          desc: { uz: "So'rovga eng yaqin 2 ta hujjatni chiqaring.", en: "Retrieve top-2 closest headlines to a query." },
          code: `from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
q = vec.transform(["Python va Data Mining o'rganish"])
sims = cosine_similarity(q, X).flatten()
for i in np.argsort(sims)[-2:][::-1]:
    print(f"cos={sims[i]:.3f} -> {docs[i]}")`
        },
        {
          title: { uz: "MultinomialNB bilan Yangi Sarlavhalarni Tasniflash", en: "Classify Headlines with MultinomialNB" },
          desc: { uz: "Cross-validation va yangi jumlalar bashoratini tekshiring.", en: "Evaluate 3-fold CV and predict new unseen headlines." },
          code: `from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import cross_val_score
nb = MultinomialNB(alpha=0.5)
print("3-Fold CV:", round(cross_val_score(nb, X, y, cv=3).mean(), 3))
nb.fit(X, y)
for txt in ["Yosh dasturchi Python o'rganmoqda", "Eksport va valyuta kursi", "Terma jamoa chempion"]:
    print(f"'{txt}' -> {classes[nb.predict(vec.transform([txt]))[0]]}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: sublinear_tf=True yoqilganda Cosine Similarity qanday o'zgarishini tekshiring.",
          "2-variant: O'zbekcha stop-so'zlar ro'yxatini (['va','bugun','bu']) berib lug'at hajmini solishtiring.",
          "3-variant: LinearSVC va LogisticRegression ni MultinomialNB bilan taqqoslang."
        ],
        en: [
          "Variant 1: Test sublinear_tf=True on similarity scores.",
          "Variant 2: Pass a custom Uzbek stop-words list and inspect vocabulary reduction.",
          "Variant 3: Compare LinearSVC vs MultinomialNB."
        ]
      }
    },
    glossary: [
      { uz: "Tokenizatsiya", en: "Tokenization", defUz: "Matnni alohida so'zlarga ajratish", defEn: "Splitting text into words/tokens" },
      { uz: "Lemmatization", en: "Lemmatization", defUz: "So'zni lug'at bo'yicha haqiqiy o'zak shakliga keltirish", defEn: "Reducing words to dictionary lemmas" },
      { uz: "TF-IDF", en: "TF-IDF", defUz: "So'z chastotasi × teskari hujjat chastotasi vazni", defEn: "Term Frequency × Inverse Document Frequency" },
      { uz: "Cosine Similarity", en: "Cosine Similarity", defUz: "Siyrak matn vektorlari orasidagi burchak o'xshashligi", defEn: "Length-invariant angle similarity" }
    ],
    quiz: [
      { q: { uz: "TF-IDF da IDF komponenti nima uchun kerak?", en: "Why do we need IDF in TF-IDF?" }, options: [{ label: 'A', uz: "Ko'p hujjatda uchraydigan umumiy so'zlar vaznini tushirish", en: "Down-weight common words appearing across many docs" }, { label: 'B', uz: "Har bir so'zdagi harflar uzunligini teng me'yorlash", en: "Normalize exact character lengths across vocabulary" }, { label: 'C', uz: "Xorijiy matnlarni avtomatik tarzda tarjima qilish", en: "Translate multilingual sentences automatically first" }, { label: 'D', uz: "Matnlarni K-Means klasterlariga majburiy ajratish", en: "Partition sentences strictly into K-Means groups" }], answer: 'A', explanation: { uz: "IDF umumiy so'zlarni pasaytirib kamyob kalit so'zlarni ko'taradi.", en: "IDF penalizes frequent corpus-wide words." } },
      { q: { uz: "Stemming va Lemmatization ning asosiy farqi nima?", en: "What distinguishes Lemmatization from Stemming?" }, options: [{ label: 'A', uz: "Stemming lug'at va morfologiyadan foydalanib sekinroq ishlaydi", en: "Stemming applies full grammar dictionaries at slower speed" }, { label: 'B', uz: "Lemmatization lug'at va grammatika bilan haqiqiy o'zak topadi", en: "Lemmatization uses dictionary/grammar to yield valid roots" }, { label: 'C', uz: "Lemmatization faqat matndagi raqam va sanalarni ajratib beradi", en: "Lemmatization only removes numeric tokens and punctuation" }, { label: 'D', uz: "Ikkalasi ham so'z oxiridan faqat tasodifiy harflarni kesib tashlaydi", en: "Both strip arbitrary fixed-length suffixes without rule sets" }], answer: 'B', explanation: { uz: "Stemming qo'pol kesadi, Lemmatization lug'at asosida o'zak beradi.", en: "Stemming chops suffixes; lemmatization finds canonical lemmas." } },
      { q: { uz: "Bag-of-Words modelining asosiy kamchiligi nima?", en: "Main limitation of Bag-of-Words?" }, options: [{ label: 'A', uz: "So'zlarning gapdagi tartibi va kontekstini yo'qotadi", en: "Ignores word order and local syntactic context" }, { label: 'B', uz: "Faqat ingliz tili alifbosidagi hujjatlar bilan ishlaydi", en: "Operates exclusively on ASCII English documents" }, { label: 'C', uz: "Matn ichidagi raqamli qiymatlarni hisobga ola olmaydi", en: "Cannot tokenize numeric counts inside large corpora" }, { label: 'D', uz: "Har bir hujjat uchun alohida K-Means klasteri talab etadi", en: "Requires running K-Means before computing word counts" }], answer: 'A', explanation: { uz: "BoW so'zlar tartibini yo'qotadi (N-gramlar buni qisman tuzatadi).", en: "BoW treats documents as unordered bags." } },
      { q: { uz: "Matn vektorlarida Evklid o'rniga nima uchun Cosine Similarity ishlatiladi?", en: "Why use Cosine Similarity instead of Euclidean for text?" }, options: [{ label: 'A', uz: "Hujjatlar uzunligi farqiga bog'liq bo'lmagani uchun", en: "It stays invariant to document word length" }, { label: 'B', uz: "Avval barcha so'zlarga Z-score qo'llashni talab qilmaydi", en: "It forces strict Z-score variance across every word" }, { label: 'C', uz: "Matndagi faqat dastlabki ikkita tokenni solishtiradi", en: "It compares only the leading pair of document tokens" }, { label: 'D', uz: "Vektorlar uzunligi har doim manfiy qiymat bergani uchun", en: "Euclidean norm becomes undefined on sparse TF matrices" }], answer: 'A', explanation: { uz: "Cosine faqat burchakni o'lchaydi, uzunlik farqiga befarq.", en: "Compares orientation regardless of document length." } },
      { q: { uz: "Sentimental tahlilda qaysi so'zlarni stop-so'z sifatida o'chirmaslik kerak?", en: "Which words should NOT be stripped in Sentiment Analysis?" }, options: [{ label: 'A', uz: "Inkor so'zlar ('emas', 'not', 'no')", en: "Negations ('not', 'no', 'never')" }, { label: 'B', uz: "Taqvim sanalari ('yanvar', '2025')", en: "Calendar dates ('Jan', '2025')" }, { label: 'C', uz: "Bog'lovchi artikllar ('the', 'an')", en: "Generic articles ('the', 'an')" }, { label: 'D', uz: "Tartib raqamlari ('1', '2', '3')", en: "Ordinal indices ('1', '2', '3')" }], answer: 'A', explanation: { uz: "Inkor so'z o'chirilsa sharhning hissiy ma'nosi teskarilanadi.", en: "Removing negations flips polarity." } }
    ],
    matching: [
      { left: { uz: "Tokenizatsiya", en: "Tokenization" }, right: { uz: "Matnni alohida so'z/tokenlarga bo'lish", en: "Splitting sentences into tokens" } },
      { left: { uz: "Lemmatization", en: "Lemmatization" }, right: { uz: "'better' → 'good' (lug'at asosida o'zak)", en: "'better' → 'good' (dictionary lemma)" } },
      { left: { uz: "Bigram (N-gram)", en: "Bigram (N-gram)" }, right: { uz: "'yaxshi emas' kabi 2 so'zli birlikni saqlaydi", en: "Preserves 2-word phrase order" } },
      { left: { uz: "Cosine Similarity", en: "Cosine Similarity" }, right: { uz: "Hujjat uzunligidan mustaqil o'xshashlik", en: "Length-invariant sparse similarity" } }
    ],
    fillGap: [
      { text: { uz: "TF-IDF formulasi TF(t,d) va ___ ko'paytmasiga teng.", en: "TF-IDF equals TF(t,d) multiplied by ___." }, answer: "IDF" },
      { text: { uz: "Siyrak so'z chastotasi vektorlarida eng keng tarqalgan Bayes tasniflagichi ___ NB dir.", en: "The Naive Bayes variant designed for word counts/TF-IDF is ___ NB." }, answer: "Multinomial" },
      { text: { uz: "So'z oxirini lug'atsiz qo'pol kesish usuli ___ deyiladi.", en: "Heuristic suffix-chopping without a dictionary is called ___." }, answer: "Stemming" }
    ]
  }
);
