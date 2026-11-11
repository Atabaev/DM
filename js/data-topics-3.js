window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== TOPIC 7 ====================
  {
    id: 7,
    slug: '07-clustering-kmeans',
    hours: 2,
    labs: 1,
    keywords: ['Clustering', 'K-Means', 'K-Means++', 'WCSS', 'Inertia', 'Elbow Method', 'Silhouette Score'],
    title: {
      uz: "K-Means algoritmi yordamida klasterlash",
      en: "Clustering with K-Means"
    },
    description: {
      uz: "Nazorat qilinmaydigan o'rganish, Lloyd algoritmi, K-Means++ initsializatsiyasi, WCSS, Elbow va Silhouette ko'rsatkichi.",
      en: "Unsupervised clustering, Lloyd's K-Means algorithm, K-Means++ initialization, WCSS, Elbow & Silhouette evaluation."
    },
    sections: [
      {
        heading: { uz: "7.1. Nazorat qilinmaydigan o'rganish va Klasterlash", en: "7.1. Unsupervised Learning & Clustering Goals" },
        bodyHtml: {
          uz: "<p><strong>Klasterlash (Clustering)</strong> — oldindan hech qanday sinf yorlig'i (label) berilmagan obyektlarni shunday guruhlarga ajratishki, <strong>klaster ichidagi o'xshashlik maksimal</strong>, <strong>klasterlararo o'xshashlik esa minimal</strong> bo'lsin.</p><ul><li><strong>Marketing:</strong> RFM (Recency, Frequency, Monetary) bo'yicha mijozlarni VIP, o'rta va uyqudagi guruhlarga bo'lish.</li><li><strong>Biologiya / Tibbiyot:</strong> gen ekspressiyasi yoki bemor simptomlari profillarini guruhlash.</li><li><strong>Tasvirlarni siqish:</strong> K ta asosiy rangga kvantlash (Color Quantization).</li></ul>",
          en: "<p><strong>Clustering</strong> partitions unlabeled data so intra-cluster similarity is high and inter-cluster similarity is low (e.g., RFM customer segmentation, genomics, color quantization).</p>"
        }
      },
      {
        heading: { uz: "7.2. Lloyd (K-Means) algoritmi va WCSS maqsad funksiyasi", en: "7.2. Lloyd's K-Means Algorithm & WCSS Objective" },
        bodyHtml: {
          uz: "<p><strong>K-Means</strong> klasterlar ichidagi kvadratik xatolar yig'indisini (<strong>WCSS / Inertia</strong>) minimallashga intiladi. Algoritmning 4 ta qadami:</p><ol><li>$K$ ta boshlang'ich markaz (centroid) $\\mu_1, \\dots, \\mu_K$ ni tanlash.</li><li><strong>Assignment (Biriktirish):</strong> Har bir $x_i$ nuqtani Evklid masofasi eng yaqin $\\mu_k$ ga biriktirish (Voronoy hududlari).</li><li><strong>Update (Yangilash):</strong> Har klaster uchun barcha nuqtalarning arifmetik o'rtachasini yangi $\\mu_k$ qilib hisoblash.</li><li>Markazlar o'zgarmay qolguncha ($\\Delta \\mu < \\epsilon$) 2–3-bosqichlarni takrorlash.</li></ol>",
          en: "<p><strong>K-Means</strong> minimizes Within-Cluster Sum of Squares (<strong>WCSS / Inertia</strong>) by alternating Assignment (nearest centroid) and Update (recompute centroid means) until convergence in $O(n \\cdot K \\cdot d \\cdot I)$ time.</p>"
        },
        latex: "\\text{WCSS} = \\sum_{k=1}^{K} \\sum_{x \\in C_k} \\| x - \\mu_k \\|_2^2, \\qquad \\mu_k = \\frac{1}{|C_k|} \\sum_{x \\in C_k} x",
        widget: 'kmeans-sim'
      },
      {
        heading: { uz: "7.3. Tasodifiy markaz muammosi va K-Means++", en: "7.3. Initialization Trap & K-Means++" },
        bodyHtml: {
          uz: "<p>K-Means faqat <strong>lokal minimumga</strong> tushadi! Agar boshlang'ich markazlar tasodifan bir klaster ichiga tushib qolsa, yomon bo'linish yuz beradi. <strong>K-Means++</strong> (Arthur &amp; Vassilvitskii, 2007) markazlarni bir-biridan uzoqroq masofaga $D(x)^2$ ehtimolligi bilan tarqatib tanlaydi (Scikit-Learn da default).</p>",
          en: "<p>Random initialization can trap K-Means in poor local minima. <strong>K-Means++</strong> spreads initial centroids apart proportional to squared distance $D(x)^2$ from existing centers.</p>"
        }
      },
      {
        heading: { uz: "7.4. Optimal K ni aniqlash: Elbow va Silhouette", en: "7.4. Selecting Optimal K: Elbow & Silhouette" },
        bodyHtml: {
          uz: "<p>WCSS $K$ oshgan sari doim kamayadi ($K=N$ da $WCSS=0$!). Shuning uchun WCSS grafigida pasayish sekinlashgan <strong>\"Tirsak\" (Elbow)</strong> nuqtasi qidiriladi. Yanada aniqroq matematik mezon — <strong>Silhouette ko'rsatkichi $s(i) \\in [-1, 1]$</strong>:</p>",
          en: "<p>Since WCSS always shrinks as $K$ increases, look for the <strong>Elbow</strong> bend or maximize the <strong>Silhouette Score</strong> $s(i) \\in [-1, 1]$:</p>"
        },
        latex: "s(i) = \\frac{b(i) - a(i)}{\\max\\{a(i),\\, b(i)\\}}"
      },
      {
        heading: { uz: "7.5. K-Means ning cheklovlari va MiniBatch K-Means", en: "7.5. Limitations & MiniBatch K-Means" },
        bodyHtml: {
          uz: "<p>K-Means uchta holatda qiynaladi: 1) sferik bo'lmagan (yarim oy, halqa) klasterlarda; 2) o'lchami yoki zichligi keskin farq qiluvchi klasterlarda; 3) kuchli outlierlar borligida (buning uchun <strong>K-Medoids / PAM</strong> qo'llaniladi). Millionlab satrlarda tezlik uchun <code>MiniBatchKMeans</code> ishlatiladi.</p>",
          en: "<p>K-Means struggles with non-spherical shapes, varying cluster densities/sizes, and extreme outliers (where <strong>K-Medoids</strong> helps). For huge datasets, use <code>MiniBatchKMeans</code>.</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "7-mavzu: K-Means klasterlash", en: "Topic 7: K-Means Clustering" }, subtitle: { uz: "Lloyd algoritmi · K-Means++ · Elbow · Silhouette (80 daqiqa)", en: "Unsupervised Partitioning & Cluster Validation (80 min)" }, points: { uz: ["Klasterlash maqsadi va amaliy sohalari", "K-Means 4 bosqichi va WCSS formulasi", "K-Means++ nima uchun kerak?", "Optimal K: Elbow va Silhouette ko'rsatkichi", "Cheklovlar (sferik shakl, outlier) va Lab 7"], en: ["Clustering goals & RFM segmentation", "Lloyd's 4 steps & WCSS objective", "K-Means++ smart initialization", "Elbow & Silhouette evaluation", "Limitations & Lab 7"] } },
      { title: { uz: "Tasniflash vs Klasterlash", en: "Classification vs Clustering" }, table: { headers: { uz: ["Mezon", "Tasniflash", "Klasterlash"], en: ["Criteria", "Classification", "Clustering"] }, rows: { uz: [["Turi", "Supervised (yorliqli)", "Unsupervised (yorliqsiz)"], ["Maqsad", "Yangi nuqta sinfini topish", "Ichki guruh tuzilmasini ochish"], ["Baholash", "Accuracy, F1, AUC", "WCSS, Silhouette, Davies-Bouldin"]], en: [["Type", "Supervised (labeled)", "Unsupervised (unlabeled)"], ["Goal", "Predict known class", "Discover latent groups"], ["Metrics", "Accuracy, F1, AUC", "WCSS, Silhouette Score"]] } } },
      { title: { uz: "K-Means (Lloyd) Algoritmi Bosqichlari", en: "Lloyd's K-Means Steps" }, points: { uz: ["1. K ta markaz (centroid) ni initsializatsiya qilish", "2. Assignment: har nuqtani eng yaqin markazga biriktirish", "3. Update: har klaster nuqtalarining o'rtachasini yangi markaz qilish", "4. Markazlar siljimay qolguncha 2–3 ni takrorlash", "Murakkabligi: O(n · K · d · iteratsiya) — juda tez!"], en: ["1. Initialize K centroids", "2. Assign every point to its nearest centroid", "3. Recompute each centroid as cluster mean", "4. Repeat until centroids stabilize", "Linear time complexity O(n · K · d · I)"] } },
      { title: { uz: "WCSS (Inertia) Maqsad Funksiyasi", en: "Objective Function: WCSS" }, latex: "\\text{WCSS} = \\sum_{k=1}^{K} \\sum_{x \\in C_k} \\| x - \\mu_k \\|_2^2", points: { uz: ["Har bir klasterdagi nuqtalarning o'z markazigacha kvadratik masofalar yig'indisi", "Har qadamda WCSS kamayib boradi va chekli qadamda konvergensiyaga yetadi"], en: ["Sum of squared distances from points to assigned centroids", "Monotonically decreases each iteration until local convergence"] } },
      { title: { uz: "Interaktiv K-Means Simulyatori (Qadam-ba-qadam!)", en: "Interactive Step-by-Step K-Means Simulator" }, widget: 'kmeans-sim' },
      { title: { uz: "Qo'lda trace: 1D nuqtalar [2, 4, 10, 12, 3, 20, 30, 11, 25]", en: "Hand Trace: 1 Iteration (K=2)" }, points: { uz: ["Boshlang'ich markazlar: m₁ = 3, m₂ = 20 (o'rta chegarasi 11.5)", "C₁ (< 11.5): [2, 4, 10, 3, 11] → yangi m₁ = 30/5 = 6.0", "C₂ (> 11.5): [12, 20, 30, 25] → yangi m₂ = 87/4 = 21.75", "Keyingi qadam chegarasi (6+21.75)/2 = 13.875 → 12 endi C₁ ga o'tadi!"], en: ["Init: m₁=3, m₂=20 (midpoint 11.5)", "C₁: [2,4,10,3,11] → m₁ = 6.0", "C₂: [12,20,30,25] → m₂ = 21.75", "Next midpoint 13.875 shifts point 12 into C₁!"] } },
      { title: { uz: "K-Means++ Initsializatsiyasi", en: "Why K-Means++ Matters" }, points: { uz: ["Oddiy tasodifiy tanlov 2 ta markazni bir joyga qo'yib, yomon lokal minimumga tushishi mumkin", "K-Means++: 1-markaz tasodifiy; keyingilari oldingi markazlardan D(x)² uzoqlik ehtimoli bilan tanlanadi", "Natija: tezroq konvergensiya va ancha barqaror WCSS"], en: ["Random seeds can cluster in one corner → suboptimal local minimum", "K-Means++ samples subsequent seeds proportional to squared distance D(x)²", "Default init='k-means++' in Scikit-Learn"] } },
      { title: { uz: "Optimal K: Elbow (Tirsak) Usuli", en: "Choosing K: The Elbow Method" }, points: { uz: ["K=1 dan K=10 gacha WCSS ni hisoblab grafik chizamiz", "K oshgan sari WCSS doim pasayadi (K=N da WCSS=0!)", "Pasayish sur'ati keskin sekinlashgan 'tirsak' nuqtasi optimal K bo'ladi"], en: ["Plot WCSS for K=1..10", "WCSS strictly decreases as K grows (reaches 0 at K=N)", "Choose K at the inflection 'elbow' point"] } },
      { title: { uz: "Silhouette Ko'rsatkichi s(i)", en: "Silhouette Coefficient s(i)" }, latex: "s(i) = \\frac{b(i) - a(i)}{\\max(a(i),\\, b(i))} \\in [-1,\\; 1]", points: { uz: ["a(i): nuqtaning o'z klasteridagi barcha nuqtalargacha o'rtacha masofasi (Cohesion)", "b(i): eng yaqin boshqa klastergacha o'rtacha masofa (Separation)", "s ≈ +1: mukammal; s ≈ 0: chegarada; s < 0: noto'g'ri klasterda!"], en: ["a(i): mean intra-cluster distance (cohesion)", "b(i): mean distance to nearest neighboring cluster (separation)", "+1 = well clustered, 0 = overlapping boundary, <0 = misassigned"] } },
      { title: { uz: "Talabalarga savol (K-Means Cheklovlari)", en: "Class Discussion: Failure Modes" }, discussion: { q: { uz: "Ikkita konsentrik halqa (bir-birining ichidagi aylanalar) shaklidagi ma'lumotga K-Means(K=2) qo'llasak nima sodir bo'ladi?", en: "What happens if we run K-Means(K=2) on two concentric rings?" }, a: { uz: "K-Means har doim chiziqli Voronoy chegarasi chizadi va ikkala halqani ham yarmidan kesib, ikkita yarim-oyga bo'lib qo'yadi! Bunday hollarda <strong>DBSCAN</strong> yoki Spectral Clustering kerak.", en: "K-Means draws a straight Voronoi bisector slicing both rings in half! Use <strong>DBSCAN</strong> or Spectral Clustering instead." } } },
      { title: { uz: "K-Means Kamchiliklari va Yechimlar", en: "K-Means Limitations & Remedies" }, table: { headers: { uz: ["Muammo", "Sabab", "Yechim"], en: ["Limitation", "Cause", "Remedy"] }, rows: { uz: [["Masshtabga sezgir", "Evklid masofasi", "StandardScaler qo'llash"], ["Outlierlar buzadi", "Mean (o'rtacha) ishlatiladi", "K-Medoids (Mediana markaz)"], ["Faqat sferik shakl", "Markazgacha radius", "DBSCAN / GMM"], ["Koldindan beriladi", "Giperparametr", "Elbow + Silhouette"]], en: [["Scale sensitive", "Euclidean distance", "Apply StandardScaler"], ["Outlier skew", "Arithmetic mean", "Use K-Medoids (PAM)"], ["Spherical assumption", "Voronoi cells", "Use DBSCAN or GMM"], ["Must specify K", "Hyperparameter", "Elbow & Silhouette sweep"]] } } }
    ],
    lab: {
      title: { uz: "L7: RFM / Mijoz Segmentatsiyasida K-Means, Elbow va Silhouette", en: "L7: K-Means Clustering, Elbow & Silhouette Analysis" },
      objective: { uz: "StandardScaler bilan ma'lumotni tayyorlash, K=2..10 uchun Elbow/Silhouette chizish va klaster profillarini tahlil qilish.", en: "Scale features, evaluate K=2..10 via Elbow & Silhouette, and profile resulting clusters." },
      steps: [
        {
          title: { uz: "Ma'lumot tayyorlash va Normallashtirish", en: "Generate & Standardize Customer Features" },
          desc: { uz: "5 ta klasterli sun'iy ma'lumotni Z-score bilan normallashtiring.", en: "Create multi-feature blobs and apply StandardScaler." },
          code: `from sklearn.datasets import make_blobs
from sklearn.preprocessing import StandardScaler

X_raw, _ = make_blobs(n_samples=400, centers=5, cluster_std=0.85, random_state=42)
X = StandardScaler().fit_transform(X_raw)
print("Scaled shape:", X.shape, "| mean:", X.mean(axis=0).round(2))`
        },
        {
          title: { uz: "Elbow (WCSS) va Silhouette tahlili (K=2..9)", en: "Sweep K=2..9 for Elbow & Silhouette" },
          desc: { uz: "Har K uchun inertia_ va silhouette_score hisoblang.", en: "Record inertia_ and silhouette_score across K=2..9." },
          code: `from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

for k in range(2, 10):
    km = KMeans(n_clusters=k, init='k-means++', n_init=10, random_state=42).fit(X)
    sil = silhouette_score(X, km.labels_)
    print(f"K={k} | WCSS={km.inertia_:7.2f} | Silhouette={sil:.3f}")`
        },
        {
          title: { uz: "Optimal K=5 Klasterlarni Vizuallashtirish", en: "Plot Optimal Clusters & Centroids" },
          desc: { uz: "K=5 markazlari bilan scatter grafik saqlang.", en: "Visualize the 5 clusters and star centroids." },
          code: `import matplotlib.pyplot as plt
best = KMeans(n_clusters=5, n_init=10, random_state=42).fit(X)
plt.figure(figsize=(7, 5))
plt.scatter(X[:, 0], X[:, 1], c=best.labels_, cmap='tab10', alpha=0.7)
plt.scatter(best.cluster_centers_[:, 0], best.cluster_centers_[:, 1], c='black', marker='*', s=220)
plt.title(f"K-Means (K=5, Sil={silhouette_score(X, best.labels_):.3f})")
plt.savefig("l7_kmeans.png", dpi=150)`
        }
      ],
      variants: {
        uz: [
          "1-variant: Iris datasetidan yorliqlarni olib tashlab K=3 K-Means qiling va haqiqiy sinflar bilan mosligini (ARI) tekshiring.",
          "2-variant: init='random' va init='k-means++' larni n_init=1 bilan solishtirib WCSS farqini ko'rsating.",
          "3-variant: MiniBatchKMeans(n_clusters=5) bilan ishlash vaqtini oddiy KMeans bilan taqqoslang."
        ],
        en: [
          "Variant 1: Cluster unlabeled Iris features with K=3 and evaluate Adjusted Rand Index.",
          "Variant 2: Compare init='random' vs 'k-means++' with n_init=1.",
          "Variant 3: Benchmark MiniBatchKMeans speed vs standard KMeans."
        ]
      }
    },
    glossary: [
      { uz: "Centroid", en: "Centroid", defUz: "Klaster nuqtalarining o'rtacha koordinata markazi", defEn: "Arithmetic mean center of cluster points" },
      { uz: "WCSS (Inertia)", en: "WCSS (Inertia)", defUz: "Klaster ichidagi kvadratik og'ishlar yig'indisi", defEn: "Within-Cluster Sum of Squares" },
      { uz: "K-Means++", en: "K-Means++", defUz: "Markazlarni tarqatib tanlovchi aqlli initsializatsiya", defEn: "Distance-weighted smart centroid seeding" },
      { uz: "Silhouette Score", en: "Silhouette Score", defUz: "Klaster ichki zichligi va tashqi ajralishini baholovchi metrika [-1,1]", defEn: "Cohesion vs separation index in [-1, 1]" }
    ],
    quiz: [
      { q: { uz: "K-Means algoritmining asosiy oldindan beriladigan parametri nima?", en: "What key parameter must be chosen before running K-Means?" }, options: [{ label: 'A', uz: "eps radiusi", en: "eps radius" }, { label: 'B', uz: "Klasterlar soni K", en: "Number of clusters K" }, { label: 'C', uz: "Minimum support", en: "Min support" }, { label: 'D', uz: "Daraxt chuqurligi", en: "Tree depth" }], answer: 'B', explanation: { uz: "K-Means boshlashdan avval K berilishi shart.", en: "K must be specified upfront." } },
      { q: { uz: "Silhouette s(i) = 0.85 nimani bildiradi?", en: "What does Silhouette Score = 0.85 indicate?" }, options: [{ label: 'A', uz: "Yomon klasterlash", en: "Poor clustering" }, { label: 'B', uz: "Zich va bir-biridan yaxshi ajralgan klasterlar", en: "Dense, well-separated clusters" }, { label: 'C', uz: "Noto'g'ri sinf", en: "Misassigned points" }, { label: 'D', uz: "Shovqin", en: "Noise" }], answer: 'B', explanation: { uz: "s(i) 1 ga yaqinlashgan sari ajralish mukammal bo'ladi.", en: "Values near +1 mean strong cohesion and separation." } },
      { q: { uz: "K-Means++ oddiy tasodifiy tanlashdan nimasi bilan ustun?", en: "Why does K-Means++ outperform random initialization?" }, options: [{ label: 'A', uz: "K ni o'zi topadi", en: "Finds K automatically" }, { label: 'B', uz: "Markazlarni bir-biridan uzoqroq tarqatib yomon lokal minimumdan saqlaydi", en: "Spreads initial centroids apart, avoiding bad local minima" }, { label: 'C', uz: "Outlierlarni o'chiradi", en: "Deletes outliers" }, { label: 'D', uz: "Halqa shakllarni topadi", en: "Finds rings" }], answer: 'B', explanation: { uz: "D(x)² ehtimollik bilan boshlang'ich markazlar yaxshi joylashadi.", en: "D(x)² seeding gives faster convergence and lower WCSS." } },
      { q: { uz: "Elbow usulida \"tirsak\" nuqtasi nimani ko'rsatadi?", en: "What does the Elbow bend show?" }, options: [{ label: 'A', uz: "Minimal Silhouette", en: "Minimum Silhouette" }, { label: 'B', uz: "WCSS kamayishi sekinlashgan optimal K", en: "Optimal K where WCSS drops level off" }, { label: 'C', uz: "Maksimal iteratsiya", en: "Max iterations" }, { label: 'D', uz: "Outlierlar soni", en: "Outliers" }], answer: 'B', explanation: { uz: "Tirsakdan keyin ortiqcha klaster qo'shish foyda bermaydi.", en: "Beyond the elbow, extra clusters yield diminishing returns." } },
      { q: { uz: "K-Means outlierlardan qanday ta'sirlanadi?", en: "How do outliers affect K-Means?" }, options: [{ label: 'A', uz: "Ta'sirlanmaydi", en: "No effect" }, { label: 'B', uz: "Outlierlar markazlarni (mean) o'z tomon tortadi", en: "Outliers pull centroids away from cluster cores" }, { label: 'C', uz: "Avtomatik -1 ga ajratadi", en: "Flags as -1" }, { label: 'D', uz: "K ni oshiradi", en: "Increases K" }], answer: 'B', explanation: { uz: "Arifmetik o'rtacha ekstremal qiymatlarga juda sezgir.", en: "Means are sensitive to extreme outliers." } }
    ]
  },

  // ==================== TOPIC 8 ====================
  {
    id: 8,
    slug: '08-clustering-advanced',
    hours: 2,
    labs: 1,
    keywords: ['Hierarchical', 'Agglomerative', 'Dendrogram', 'Linkage', 'Ward', 'DBSCAN', 'Core Point'],
    title: {
      uz: "Iyerarxik va DBSCAN klasterlash",
      en: "Hierarchical & DBSCAN Clustering"
    },
    description: {
      uz: "Agglomerative vs Divisive iyerarxik klasterlash, Single/Complete/Average/Ward linkage, Dendrogrammani kesish, DBSCAN (eps, min_samples) va Reachability.",
      en: "Agglomerative vs Divisive, linkage criteria, cutting dendrograms, DBSCAN core/border/noise density reachability, and k-distance elbow."
    },
    sections: [
      {
        heading: { uz: "8.1. Iyerarxik klasterlash: Agglomerative vs Divisive", en: "8.1. Hierarchical Clustering: Bottom-Up vs Top-Down" },
        bodyHtml: {
          uz: "<p><strong>Iyerarxik klasterlash</strong> bitta qat'iy $K$ ni talab qilmaydi — u butun klasterlar daraxtini (<strong>Dendrogramma</strong>) quradi. Ikki yondashuv mavjud:</p><ul><li><strong>Agglomerative (Pastdan yuqoriga, $O(n^2)$–$O(n^3)$):</strong> $N$ ta yakka nuqtadan boshlanadi va har qadamda eng yaqin ikkita klaster birlashtiriladi.</li><li><strong>Divisive (Yuqoridan pastga):</strong> Hammasi 1 klasterdan boshlanib ketma-ket bo'linadi.</li></ul>",
          en: "<p><strong>Hierarchical clustering</strong> builds a nested cluster tree (<strong>Dendrogram</strong>) without pre-fixing $K$: <strong>Agglomerative</strong> merges $N$ singletons bottom-up; <strong>Divisive</strong> splits one root top-down.</p>"
        }
      },
      {
        heading: { uz: "8.2. Klasterlararo masofa (Linkage Usullari)", en: "8.2. Linkage Criteria Between Clusters" },
        table: {
          headers: { uz: ["Linkage turi", "Formula / Ta'rif", "Xususiyat va Xavf"], en: ["Linkage", "Definition", "Behavior & Trade-off"] },
          rows: {
            uz: [
              ["Single (Min)", "$\\min_{a\\in A, b\\in B} d(a,b)$", "Zanjir effekti (chaining): uzun/egri klasterlar quradi, shovqinga sezgir"],
              ["Complete (Max)", "$\\max_{a\\in A, b\\in B} d(a,b)$", "Kompakt diametrli klasterlar, lekin katta klasterlarni bo'lib yuborishi mumkin"],
              ["Average (UPGMA)", "$\\frac{1}{|A||B|}\\sum d(a,b)$", "Single va Complete orasidagi muvozanatli yechim"],
              ["Ward's Method", "$\\Delta \\text{WCSS}$ minimizatsiya", "Eng ko'p qo'llaniladi; teng o'lchamli kompakt klasterlar beradi"]
            ],
            en: [
              ["Single (Min)", "$\\min_{a\\in A, b\\in B} d(a,b)$", "Handles non-elliptical shapes, suffers from chaining across noise"],
              ["Complete (Max)", "$\\max_{a\\in A, b\\in B} d(a,b)$", "Compact spherical clusters; sensitive to outliers"],
              ["Average", "Mean pairwise distance", "Balanced compromise between Single and Complete"],
              ["Ward's Method", "Minimizes $\\Delta\\text{WCSS}$", "Most popular default; yields compact equal-sized clusters"]
            ]
          }
        }
      },
      {
        heading: { uz: "8.3. DBSCAN — Zichlikka Asoslangan Klasterlash", en: "8.3. Density-Based DBSCAN Algorithm" },
        bodyHtml: {
          uz: "<p><strong>DBSCAN</strong> (Ester et al., 1996) klasterlarni <em>\"bo'shliqlar bilan ajratilgan yuqori zichlikdagi hududlar\"</em> deb ta'riflaydi. Ikkita parametr:</p><ul><li><code>eps (ε)</code> — qo'shnilik radiusi;</li><li><code>min_samples (MinPts)</code> — yadro bo'lish uchun $\\varepsilon$-shar ichidagi minimal nuqtalar soni (odatda $\\ge 2 \\times d$).</li></ul><p>Har bir nuqta 3 roldan birini oladi: <strong>Core Point</strong> ($|N_\\varepsilon(p)| \\ge \\text{MinPts}$), <strong>Border Point</strong> (yadro qo'shnisi, lekin o'zida yetarli qo'shni yo'q), <strong>Noise (-1)</strong> (hech qaysi yadroga yetmaydi).</p>",
          en: "<p><strong>DBSCAN</strong> defines clusters as dense regions separated by sparse noise, using radius <code>eps (ε)</code> and <code>min_samples</code>. Points become <strong>Core</strong> ($|N_\\varepsilon(p)| \\ge \\text{MinPts}$), <strong>Border</strong>, or <strong>Noise (-1)</strong>.</p>"
        },
        widget: 'dbscan-sim'
      },
      {
        heading: { uz: "8.4. eps ni qanday tanlash kerak? (k-Distance Grafi)", en: "8.4. Tuning eps via k-Distance Plot" },
        bodyHtml: {
          uz: "<p><code>eps</code> ni taxmin bilan tanlash qiyin: juda kichik bo'lsa hamma nuqta Noise (-1) ga aylanadi; juda katta bo'lsa hamma klasterlar bittaga qo'shilib ketadi. Amaliy usul: har nuqtaning <code>k = min_samples</code>-eng yaqin qo'shnisigacha masofasini saralab grafik chizing va keskin sakrash (\"knee\") nuqtasini <code>eps</code> qilib oling!</p><p><strong>Cheklovi:</strong> Zichligi keskin farq qiluvchi klasterlarda (biri juda zich, biri siyrak) bitta global <code>eps</code> ishlamaydi — bunday hollarda <strong>HDBSCAN</strong> ishlatiladi.</p>",
          en: "<p>Choose <code>eps</code> by plotting sorted distances to each point's $k$-th nearest neighbor ($k=\\text{MinPts}$) and picking the sharp knee. Note: for varying densities, prefer <strong>HDBSCAN</strong>.</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "8-mavzu: Iyerarxik va DBSCAN", en: "Topic 8: Hierarchical & DBSCAN" }, subtitle: { uz: "Dendrogrammalar · Linkage · Zichlikka asoslangan klasterlash (80 daqiqa)", en: "Dendrograms · Linkage Criteria · Density Clustering (80 min)" }, points: { uz: ["Agglomerative vs Divisive iyerarxiya", "Linkage usullari: Single, Complete, Average, Ward", "Dendrogramma o'qish va kesish", "DBSCAN: Core, Border, Noise va Reachability", "k-distance grafigi, HDBSCAN va Lab 8"], en: ["Agglomerative vs Divisive hierarchies", "Linkage methods: Single, Complete, Average, Ward", "Reading & cutting dendrograms", "DBSCAN Core/Border/Noise & density reachability", "Choosing eps, HDBSCAN & Lab 8"] } },
      { title: { uz: "Nega Iyerarxik Klasterlash?", en: "Why Hierarchical Clustering?" }, points: { uz: ["K ni oldindan taxmin qilish shart emas", "Turli aniqlik darajalarida (granularlik) klasterlarni ko'rish mumkin", "Taksonomiya, biologiya (filogenetik daraxtlar) va hujjat iyerarxiyasi uchun ideal"], en: ["No need to pick K upfront", "Inspect multi-level granularity at once", "Ideal for biology phylogenies & document taxonomies"] } },
      { title: { uz: "Agglomerative Algoritm Bosqichlari", en: "Agglomerative (Bottom-Up) Steps" }, points: { uz: ["1. N ta nuqtaning har birini alohida klaster deb oling (N ta klaster)", "2. N×N masofalar matritsasini hisoblang", "3. Eng yaqin ikkita klasterni birlashtiring", "4. Yangi masofalar matritsasini yangilang (Linkage)", "5. Bitta umumiy klaster qolguncha 3–4 ni takrorlang"], en: ["1. Start with N singleton clusters", "2. Compute N×N pairwise proximity matrix", "3. Merge the two closest clusters", "4. Update proximity matrix via chosen linkage", "5. Repeat until 1 root cluster remains"] } },
      { title: { uz: "4 ta Linkage Usuli", en: "Comparing Linkage Methods" }, table: { headers: { uz: ["Linkage", "Masofa qoidasi", "Xususiyat"], en: ["Linkage", "Rule", "Behavior"] }, rows: { uz: [["Single", "Eng yaqin juft", "Chaining (uzun zanjir)"], ["Complete", "Eng uzoq juft", "Kompakt sharlar"], ["Average", "Juftlar o'rtachasi", "Muvozanatli"], ["Ward", "ΔWCSS min", "Eng barqaror (default)"]], en: [["Single", "Min pair", "Chaining across noise"], ["Complete", "Max pair", "Tight diameters"], ["Average", "Mean pair", "Balanced"], ["Ward", "Min ΔWCSS", "Most stable default"]] } } },
      { title: { uz: "Dendrogrammani O'qish va Kesish", en: "Reading & Cutting a Dendrogram" }, points: { uz: ["X o'qi: obyektlar; Y o'qi: birlashish masofasi (balandlik)", "Eng uzun vertikal shoxlarni kesuvchi gorizontal chiziq optimal K ni beradi!", "Hisoblash murakkabligi O(n²) xotira — 50,000+ satrda sekinlashadi"], en: ["X-axis = samples; Y-axis = merge dissimilarity", "Cut horizontally across the longest vertical gap without mergers", "Memory cost O(n²) limits naive scaling past ~50k rows"] } },
      { title: { uz: "DBSCAN Asosiy G'oyasi", en: "DBSCAN: Density-Based Clustering" }, points: { uz: ["K-Means dan farqli, sharsimon shakl talab qilmaydi", "Klaster — zich joylashgan nuqtalar zanjiri", "Parametrlar: eps (ε radius) va min_samples (MinPts)"], en: ["Discovers arbitrary shapes (moons, rings, streets)", "Clusters are dense neighborhoods separated by sparse voids", "Hyperparameters: eps (radius) and min_samples"] } },
      { title: { uz: "DBSCAN Nuqtalar Turlari", en: "Core, Border & Noise Points" }, points: { uz: ["Core Point (Yadro): ε radius ichida ≥ min_samples nuqta bor", "Border Point (Chegara): o'zi yadro emas, lekin biror Core nuqtaga ε masofada", "Noise (-1, Shovqin): na yadro, na chegaraviy — outlier!"], en: ["Core Point: ≥ min_samples within radius ε", "Border Point: < min_samples itself, but within ε of a Core point", "Noise (-1): neither core nor border → isolated outlier!"] } },
      { title: { uz: "Interaktiv DBSCAN Simulyatori (eps va minPts ni o'zgartiring!)", en: "Interactive DBSCAN Simulator" }, widget: 'dbscan-sim' },
      { title: { uz: "eps Parametrini Tanlash (k-Distance Elbow)", en: "How to Choose eps: k-Distance Plot" }, points: { uz: ["MinPts ni tanlang (odatda 2 × o'lchamlar soni, min ≥ 4)", "Har nuqta uchun MinPts-chi qo'shnisigacha masofani toping", "Masofalarni o'sish tartibida chizing → keskin ko'tarilish ('tizza') nuqtasi = eps!"], en: ["Rule of thumb: min_samples ≥ 2 × dimensions", "Compute distance to each point's k-th nearest neighbor", "Sort & plot → sharp upward knee marks ideal eps!"] } },
      { title: { uz: "Talabalarga savol (DBSCAN eps ta'siri)", en: "Class Discussion: Tuning eps" }, discussion: { q: { uz: "DBSCAN da barcha nuqtalarning 85% i Noise (-1) bo'lib qoldi. Qaysi parametrni qaysi tomonga o'zgartirish kerak?", en: "In DBSCAN, 85% of points get labeled Noise (-1). Which hyperparameter should you adjust and in what direction?" }, a: { uz: "<code>eps</code> juda kichik tanlangan (yoki <code>min_samples</code> juda katta). <strong>eps ni oshiring</strong> (yoki min_samples ni kamaytiring) va albatta StandardScaler qo'llanganini tekshiring!", en: "<code>eps</code> is too small (or <code>min_samples</code> too high). <strong>Increase eps</strong> and verify features were standardized first!" } } },
      { title: { uz: "K-Means vs Hierarchical vs DBSCAN", en: "3-Way Clustering Comparison" }, table: { headers: { uz: ["Xususiyat", "K-Means", "Hierarchical", "DBSCAN"], en: ["Feature", "K-Means", "Hierarchical", "DBSCAN"] }, rows: { uz: [["K kerakmi?", "Ha", "Kesish orqali", "Yo'q"], ["Shakl", "Sferik", "Linkage ga bog'liq", "Ixtiyoriy"], ["Shovqin", "Markazni buzadi", "Biriktirib yuboradi", "Noise (-1) ajratadi"], ["Katta data", "Juda tez", "Sekin O(n²)", "O'rtacha O(n log n)"]], en: [["Needs K?", "Yes", "Post-cut", "No"], ["Shapes", "Spherical", "Depends on linkage", "Arbitrary"], ["Outliers", "Distorts means", "Forced into clusters", "Flags Noise (-1)"], ["Scalability", "Very fast", "Slow O(n²)", "O(n log n) with index"]] } } },
      { title: { uz: "Zichlik farqi muammosi va HDBSCAN", en: "Varying Densities & HDBSCAN" }, points: { uz: ["DBSCAN ning asosiy kamchiligi: bitta global eps zichligi har xil klasterlarni ajrata olmaydi", "HDBSCAN iyerarxik zichlik daraxtini qurib eps parametrini yo'qotadi"], en: ["Single global eps fails when one cluster is dense and another is sparse", "HDBSCAN extracts variable-density clusters hierarchically without eps"] } }
    ],
    lab: {
      title: { uz: "L8: Make Moons da Dendrogramma, Ward va DBSCAN", en: "L8: Dendrograms, Ward Linkage & DBSCAN Tuning" },
      objective: { uz: "K-Means ning chiziqsiz shaklda yutqazishini ko'rish, Ward dendrogramma qurish va k-distance bilan DBSCAN eps tanlash.", en: "Contrast K-Means vs Ward vs DBSCAN on crescent moons and tune eps via k-distance." },
      steps: [
        {
          title: { uz: "K-Means vs Agglomerative (Yarim oy ma'lumotida)", en: "K-Means Failure vs Agglomerative Single/Ward" },
          desc: { uz: "200 ta yarim oy nuqtalarida K-Means va Agglomerative ni taqqoslang.", en: "Test K-Means and Agglomerative on make_moons." },
          code: `from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans, AgglomerativeClustering

X_raw, _ = make_moons(n_samples=200, noise=0.08, random_state=42)
X = StandardScaler().fit_transform(X_raw)
km_lbl = KMeans(2, n_init=10, random_state=42).fit_predict(X)
agg_single = AgglomerativeClustering(2, linkage='single').fit_predict(X)
print("Unique labels:", set(km_lbl), set(agg_single))`
        },
        {
          title: { uz: "SciPy Dendrogramma (Ward Linkage)", en: "Plot Ward Linkage Dendrogram" },
          desc: { uz: "Dastlabki 30 ta namuna uchun dendrogramma chizing.", en: "Generate a dendrogram on 30 samples using SciPy." },
          code: `from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt

Z = linkage(X[:30], method='ward')
plt.figure(figsize=(10, 4))
dendrogram(Z)
plt.title("Ward Dendrogram (30 samples)")
plt.ylabel("Merge Distance")
plt.savefig("l8_dendrogram.png", dpi=150)`
        },
        {
          title: { uz: "k-Distance va DBSCAN (eps=0.35, min_samples=5)", en: "DBSCAN Clustering & Noise Inspection" },
          desc: { uz: "NearestNeighbors bilan optimal eps ni ko'rib DBSCAN qo'llang.", en: "Check 5-NN distances and run DBSCAN." },
          code: `from sklearn.cluster import DBSCAN
from sklearn.neighbors import NearestNeighbors
import numpy as np

dists, _ = NearestNeighbors(n_neighbors=5).fit(X).kneighbors(X)
print("90th percentile 5-NN dist:", round(np.percentile(dists[:, -1], 90), 3))

db = DBSCAN(eps=0.35, min_samples=5).fit_predict(X)
n_cl = len(set(db)) - (1 if -1 in db else 0)
print(f"DBSCAN clusters: {n_cl} | Noise points: {list(db).count(-1)}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: make_circles(n_samples=300, factor=0.4, noise=0.05) datasetida DBSCAN va K-Means ni solishtiring.",
          "2-variant: eps=[0.15, 0.30, 0.60, 1.2] uchun klaster va shovqin sonini jadval qiling.",
          "3-variant: Single, Complete, Average va Ward linkage larni make_blobs da taqqoslang."
        ],
        en: [
          "Variant 1: Compare DBSCAN vs K-Means on make_circles(factor=0.4, noise=0.05).",
          "Variant 2: Sweep eps across [0.15, 0.30, 0.60, 1.2] and log cluster/noise counts.",
          "Variant 3: Compare Single, Complete, Average, and Ward linkages on make_blobs."
        ]
      }
    },
    glossary: [
      { uz: "Dendrogramma", en: "Dendrogram", defUz: "Klasterlarning ketma-ket birlashish masofasini ko'rsatuvchi daraxt", defEn: "Tree diagram encoding hierarchical cluster merges" },
      { uz: "Ward's Linkage", en: "Ward's Linkage", defUz: "Birlashishda WCSS o'sishini minimallovchi mezon", defEn: "Linkage minimizing within-cluster variance increase" },
      { uz: "Core Point", en: "Core Point", defUz: "eps radiusida kamida min_samples qo'shnisi bor yadro nuqta", defEn: "Point with ≥ min_samples neighbors inside radius eps" },
      { uz: "Noise (-1)", en: "Noise (-1)", defUz: "Hech qaysi klasterga kirmagan past zichlikdagi outlier", defEn: "Isolated low-density point not reachable from any core" }
    ],
    quiz: [
      { q: { uz: "Dendrogrammada Y o'qi nimani ifodalaydi?", en: "What does the Y-axis represent in a dendrogram?" }, options: [{ label: 'A', uz: "Klasterlar soni", en: "Cluster count" }, { label: 'B', uz: "Klasterlar birlashtirilgan masofa", en: "Dissimilarity/distance at merge" }, { label: 'C', uz: "Iteratsiyalar", en: "Iterations" }, { label: 'D', uz: "Outlierlar", en: "Outliers" }], answer: 'B', explanation: { uz: "Balandlik birlashayotgan tarmoqlar orasidagi masofani bildiradi.", en: "Height corresponds to linkage distance between merged branches." } },
      { q: { uz: "DBSCAN da \"shovqin nuqta\" (-1) qaysi?", en: "What is a Noise (-1) point in DBSCAN?" }, options: [{ label: 'A', uz: "Core point", en: "Core point" }, { label: 'B', uz: "Border point", en: "Border point" }, { label: 'C', uz: "Na Core, na Core ga yetadigan Border nuqta", en: "Neither a core point nor reachable from any core point" }, { label: 'D', uz: "Markaz", en: "Centroid" }], answer: 'C', explanation: { uz: "Siyrak hududdagi yakka nuqtalar -1 deb belgilanadi.", en: "Points outside any core neighborhood are labeled -1." } },
      { q: { uz: "DBSCAN ning K-Means dan eng katta ustunligi nima?", en: "What is DBSCAN's main advantage over K-Means?" }, options: [{ label: 'A', uz: "Tezroq", en: "Always faster" }, { label: 'B', uz: "K siz ixtiyoriy shakldagi klasterlar va shovqinni topadi", en: "Finds arbitrary shapes & noise without specifying K" }, { label: 'C', uz: "Parametrsiz", en: "Zero parameters" }, { label: 'D', uz: "Zichlik farqiga befarq", en: "Handles all densities" }], answer: 'B', explanation: { uz: "Zichlik zanjirlari sferik bo'lmagan shakllarni ajratadi.", en: "Density reachability discovers non-convex shapes naturally." } },
      { q: { uz: "Agglomerative klasterlash qanday boshlanadi?", en: "How does Agglomerative clustering start?" }, options: [{ label: 'A', uz: "1 ta klasterdan", en: "1 big cluster" }, { label: 'B', uz: "Har bir obyekt alohida klasterdan (N ta)", en: "Each point starts as its own singleton cluster" }, { label: 'C', uz: "K ta markazdan", en: "K centroids" }, { label: 'D', uz: "Shovqinni o'chirib", en: "Deleting noise" }], answer: 'B', explanation: { uz: "Bottom-up usul N ta yakka nuqtadan 1 tagacha birlashtiradi.", en: "Bottom-up merging starts with N singletons." } },
      { q: { uz: "Ward's linkage usuli nimani minimallaydi?", en: "What does Ward's linkage minimize?" }, options: [{ label: 'A', uz: "Eng yaqin nuqta masofasi", en: "Minimum distance" }, { label: 'B', uz: "Klaster ichidagi dispersiya (WCSS) o'sishi", en: "Increase in within-cluster variance (WCSS)" }, { label: 'C', uz: "Eng uzoq masofa", en: "Max distance" }, { label: 'D', uz: "Klaster soni", en: "Cluster count" }], answer: 'B', explanation: { uz: "Ward eng kam kvadratik xato ortishini beradigan juftni birlashtiradi.", en: "Ward merges pairs causing minimum WCSS increase." } }
    ]
  },

  // ==================== TOPIC 9 ====================
  {
    id: 9,
    slug: '09-anomaly-detection',
    hours: 2,
    labs: 1,
    keywords: ['Anomaly Detection', 'Outlier', 'Point', 'Contextual', 'Collective', 'IQR', 'Z-Score', 'MAD', 'LOF', 'Isolation Forest'],
    title: {
      uz: "Anomaliyalarni aniqlash",
      en: "Anomaly & Outlier Detection"
    },
    description: {
      uz: "Point/Contextual/Collective anomaliyalar, Z-Score & Modified Z-Score (MAD), LOF matematikasi (k-distance, LRD) va Isolation Forest path length formulasi.",
      en: "Point/Contextual/Collective anomalies, Robust MAD Z-Score, LOF math (reachability & LRD), and Isolation Forest path length."
    },
    sections: [
      {
        heading: { uz: "9.1. Anomaliya nima va Nega Oddiy Tasniflash Yetmaydi?", en: "9.1. What is an Anomaly & Why Standard Classification Fails?" },
        bodyHtml: {
          uz: "<p><strong>Anomaliya (Outlier)</strong> — ma'lumotlarning asosiy generativ jarayonidan keskin farq qiluvchi kuzatuv (Hawkins ta'rifi). Shovqindan (Noise — tasodifiy xato) farqli o'laroq, anomaliya ko'pincha <strong>eng qimmatli hodisadir</strong>: bank kartasi o'g'irligi, DDoS hujum, samolyot dvigateli nosozligi, saraton hujayrasi.</p><p>Nega oddiy Classification yetmaydi? Chunki anomaliyalar <strong>o'ta kamyob (&lt;0.1%)</strong> va har safar yangi, ilgari ko'rilmagan hujum ko'rinishida keladi — shu sabab unsupervised/one-class modellar zarur!</p>",
          en: "<p>Unlike random <em>noise</em>, an <strong>anomaly</strong> reflects a genuinely different underlying mechanism (fraud, intrusion, turbine fault). Standard supervised classifiers struggle because anomalies are ultra-rare (&lt;0.1%) and constantly evolve into unseen forms.</p>"
        }
      },
      {
        heading: { uz: "9.2. Anomaliyalarning 3 Asosiy Turi", en: "9.2. Three Fundamental Types of Anomalies" },
        table: {
          headers: { uz: ["Tur", "Ta'rif", "Real Misol", "Qanday aniqlanadi?"], en: ["Type", "Definition", "Real Example", "Detection Approach"] },
          rows: {
            uz: [
              ["Point Anomaly", "Bitta yakka nuqta butun to'plamdan uzoq", "Oylik maoshi 4 mln bo'lgan kartadan 120 mln yechilishi", "IQR, Z-score, Isolation Forest"],
              ["Contextual Anomaly", "Qiymat normal, lekin vaqt/joy kontekstida g'alati", "Qishda Toshkentda +38°C; soat 03:30 da ofisga kirish", "Vaqtli qator / kontekstual shartlar"],
              ["Collective Anomaly", "Har bir nuqta alohida normal, lekin ketma-ketligi g'alati", "EKG yurak urishidagi g'alati pauza; 10 sek da 500 ta login urinish", "Sequence / Window / Graph tahlil"]
            ],
            en: [
              ["Point Anomaly", "Single instance far from rest", "\$15,000 swipe on a \$400/mo card", "IQR, Z-score, Isolation Forest"],
              ["Contextual Anomaly", "Abnormal only within context", "38°C in January; 3 AM badge swipe", "Time-series / conditional models"],
              ["Collective Anomaly", "Individual points normal, group sequence abnormal", "Flatline ECG segment; 500 logins in 10s", "Sequence / Sliding Window / Graphs"]
            ]
          }
        }
      },
      {
        heading: { uz: "9.3. Statistik Usullar: Z-Score, Masking va Modified Z-Score (MAD)", en: "9.3. Statistical Methods: Z-Score, Masking & Robust MAD" },
        bodyHtml: {
          uz: "<p>Oddiy Z-score ($z = (x-\\mu)/\\sigma$) katta xatoga ega: <strong>Masking Effekti!</strong> Agar ma'lumotda bitta ulkan outlier ($x=1000$) bo'lsa, u $\\mu$ va $\\sigma$ ni shu qadar oshiradiki, ikkinchi outlier ($x=50$) uchun $|z| < 3$ chiqib yashirinib qoladi.</p><p><strong>Yechim — Modified Z-Score (MAD):</strong> O'rtacha o'rniga Mediana, $\\sigma$ o'rniga <strong>MAD (Median Absolute Deviation)</strong> ishlatiladi ($|M_i| > 3.5$ bo'lsa outlier):</p>",
          en: "<p>Standard Z-score suffers from <strong>masking</strong>: one extreme outlier inflates $\\mu$ and $\\sigma$, hiding moderate outliers. <strong>Modified Z-score</strong> replaces mean/std with Median and <strong>MAD</strong> (flagging $|M_i| > 3.5$):</p>"
        },
        latex: "MAD = \\text{median}(|x_i - \\tilde{x}|), \\qquad M_i = \\frac{0.6745\\,(x_i - \\tilde{x})}{MAD}"
      },
      {
        heading: { uz: "9.4. LOF (Local Outlier Factor) Matematikasi", en: "9.4. Local Outlier Factor (LOF) Math" },
        bodyHtml: {
          uz: "<p>Global usullar zichligi turlicha bo'lgan ikki klasterdan (biri juda zich, biri siyrak) siyrak klaster yaqinidagi normal nuqtani xato ravishda anomaliya deb oladi. <strong>LOF</strong> (Breunig et al., 2000) nuqta zichligini <strong>faqat o'z $k$ ta qo'shnisi zichligi</strong> bilan solishtiradi:</p><ol><li><strong>$k$-distance($p$):</strong> $p$ dan $k$-eng yaqin qo'shnisigacha masofa.</li><li><strong>Reachability Distance:</strong> $\\text{reach-dist}_k(p, o) = \\max\\{k\\text{-dist}(o),\\, d(p, o)\\}$ (tebranishlarni silliqlaydi).</li><li><strong>LRD (Local Reachability Density):</strong> qo'shnilargacha o'rtacha reachability masofasining teskari qiymati.</li><li><strong>LOF($p$):</strong> qo'shnilar LRD larining $p$ ning LRD siga nisbati. $\\text{LOF} \\approx 1$ (normal), $\\text{LOF} \\gg 1$ (anomaliya).</li></ol>",
          en: "<p>Global thresholds misclassify sparse-cluster points as outliers. <strong>LOF</strong> compares a point's Local Reachability Density (LRD) to its $k$ neighbors' LRDs: $\\text{LOF} \\approx 1$ means normal; $\\text{LOF} \\gg 1$ signals a local outlier.</p>"
        },
        latex: "\\text{LRD}_k(p) = \\left(\\frac{\\sum_{o \\in N_k(p)} \\text{reach-dist}_k(p,o)}{|N_k(p)|}\\right)^{-1}, \\qquad \\text{LOF}_k(p) = \\frac{\\sum_{o \\in N_k(p)} \\frac{\\text{LRD}_k(o)}{\\text{LRD}_k(p)}}{|N_k(p)|}"
      },
      {
        heading: { uz: "9.5. Isolation Forest (iForest) — Tez va Masshtablanuvchi", en: "9.5. Isolation Forest Algorithm & Anomaly Score" },
        bodyHtml: {
          uz: "<p><strong>Isolation Forest</strong> (Liu et al., 2008) masofa yoki zichlik hisoblamaydi! Asosiy g'oya: <em>\"Anomaliyalar kam sonli va boshqalardan uzoq bo'lgani uchun tasodifiy kesishlar orqali juda kam qadamda (qisqa daraxt yo'lida) izolyatsiya qilinadi.\"</em></p><p>100 ta tasodifiy <strong>iTree</strong> quriladi (har biriga 256 ta subsample). Nuqtaning o'rtacha yo'l uzunligi $E(h(x))$ va $n$ ta nuqta uchun kutilayotgan o'rtacha uzunlik $c(n)$ orqali <strong>Anomaly Score $s(x, n) \\in (0, 1)$</strong> hisoblanadi: $s \\to 1$ (anomaliya), $s < 0.5$ (normal).</p>",
          en: "<p><strong>Isolation Forest</strong> avoids expensive distance matrices: anomalies are few and different, so random axis-aligned splits isolate them near the root (short path $h(x)$). Anomaly score $s(x,n) \\to 1$ indicates anomaly; $s < 0.5$ is normal.</p>"
        },
        latex: "s(x, n) = 2^{-\\frac{E(h(x))}{c(n)}}, \\qquad c(n) = 2H(n-1) - \\frac{2(n-1)}{n}",
        widget: 'anomaly-sim'
      },
      {
        heading: { uz: "9.6. Algoritmlarni Taqqoslash va Amaliy Qo'llash", en: "9.6. Comparing Anomaly Detectors" },
        table: {
          headers: { uz: ["Usul", "O'lcham / Murakkablik", "Kuchli tomoni", "Kamchiligi"], en: ["Method", "Complexity", "Strength", "Weakness"] },
          rows: {
            uz: [
              ["IQR / MAD", "1D, $O(n\\log n)$", "Oddiy, tushunarli, tez", "Ko'p o'lchovli korrelyatsiyani ko'rmaydi"],
              ["LOF", "Ko'p D, $O(n^2)$", "Turli zichlikdagi lokal outlierlarni topadi", "Katta n da sekin, yangi nuqta uchun novelty=True kerak"],
              ["Isolation Forest", "Ko'p D, $O(t \\cdot \\psi \\log \\psi)$", "Chiziqli tezlik, xotira tejamkor, katta data uchun eng yaxshi", "O'qlarga parallel kesgani uchun lokal zichlikda LOF dan kuchsizroq"],
              ["One-Class SVM", "Ko'p D, $O(n^2)$–$O(n^3)$", "Chiziqsiz chegara (RBF kernel)", "Katta datada sekin, giperparametrlarga sezgir"]
            ],
            en: [
              ["IQR / MAD", "1D, $O(n\\log n)$", "Simple, fast, interpretable", "Ignores multivariate correlations"],
              ["LOF", "Multi-D, $O(n^2)$", "Handles varying local densities", "Slow on large n; needs novelty=True for test"],
              ["Isolation Forest", "Multi-D, linear in subsamples", "Ultra-fast, low RAM, scales to millions", "Axis-aligned splits can miss subtle local pockets"],
              ["One-Class SVM", "Multi-D, $O(n^2)$–$O(n^3)$", "Non-linear RBF boundary", "Scales poorly to big datasets"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "9-mavzu: Anomaliyalarni aniqlash", en: "Topic 9: Anomaly & Outlier Detection" }, subtitle: { uz: "Statistik (MAD) · LOF · Isolation Forest · One-Class SVM (80 daqiqa)", en: "Statistical, Density & Tree-Based Detection (80 min)" }, points: { uz: ["Anomaliya vs Shovqin va Nega tasniflash yetmaydi?", "3 xil anomaliya: Point, Contextual, Collective", "IQR, Z-score Masking va Robust MAD Z-score", "LOF matematikasi: k-distance, Reachability, LRD", "Isolation Forest path length s(x,n) va Lab 9"], en: ["Anomaly vs Noise & rare-event challenge", "Point, Contextual & Collective anomalies", "Z-score Masking & Robust MAD", "LOF math: reachability & local density", "Isolation Forest s(x,n) & Lab 9"] } },
      { title: { uz: "Anomaliya vs Shovqin (Noise)", en: "Anomaly vs Random Noise" }, points: { uz: ["Shovqin: o'lchov xatosi yoki tasodifiy tebranish (uni tozalab tashlaymiz)", "Anomaliya: butunlay boshqa mexanizmdan chiqqan haqiqiy signal!", "Misollar: Bank firibgarligi, Kiberhujum, Sanoat sensori buzilishi", "Ma'lumotning <0.1% bo'lgani uchun ko'pincha unsupervised qidiriladi"], en: ["Noise: random sensor error we want to clean away", "Anomaly: real rare event from a different process (fraud, cyberattack)", "Usually <0.1% of data and constantly mutates → unsupervised detection"] } },
      { title: { uz: "Anomaliyalarning 3 Asosiy Turi", en: "3 Types of Anomalies" }, table: { headers: { uz: ["Tur", "Tavsif", "Misol"], en: ["Type", "Meaning", "Example"] }, rows: { uz: [["Point", "Yakka ekstremal nuqta", "100 mln so'mlik kutilmagan xarid"], ["Contextual", "Kontekstda g'ayritabiiy", "Qishda +35°C, tungi 03:00 login"], ["Collective", "Guruh / ketma-ketlik g'alati", "10 sek da 1000 so'rov (DDoS)"]], en: [["Point", "Single extreme point", "\$20,000 unexpected charge"], ["Contextual", "Weird in context", "35°C in January"], ["Collective", "Abnormal sequence", "DDoS burst / flatline ECG"]] } } },
      { title: { uz: "Talabalarga savol (Anomaliya turi)", en: "Class Discussion: Identify Anomaly Type" }, discussion: { q: { uz: "Talaba semestr davomida har kuni tizimga 2–3 marta kiradi. Imtihon kuni esa 1 daqiqa ichida tizimga 400 ta so'rov yuborildi (har bir so'rov oddiy 'sahifani ochish'). Bu qaysi turdagi anomaliya?", en: "A student normally logs in 2–3 times/day. Today 400 normal-looking page requests arrive within 60 seconds. Which anomaly type is this?" }, a: { uz: "<strong>Collective (Jamoaviy) anomaliya!</strong> Har bir yakka HTTP so'rov normal ko'rinadi, lekin ularning 1 daqiqa ichidagi to'plami DDoS yoki skript hujumini ko'rsatadi.", en: "<strong>Collective anomaly!</strong> Individual requests look normal, but the burst sequence signals an automated bot/attack." } } },
      { title: { uz: "Statistik Usullar: IQR va Z-Score", en: "Statistical Bounds: IQR & Z-Score" }, latex: "[Q_1 - 1.5\\,IQR,\\; Q_3 + 1.5\\,IQR] \\qquad z = \\frac{x - \\mu}{\\sigma},\\; |z| > 3", points: { uz: ["Z-score normal taqsimot (Bell curve) ga tayanadi: 99.7% qiymat ±3σ ichida", "IQR taqsimot shakliga bog'liq emas (Boxplot 'mo'ylovlari')"], en: ["Z-score assumes Gaussian bell curve (99.7% within ±3σ)", "IQR is distribution-free (Boxplot fences)"] } },
      { title: { uz: "Z-Score Masking Effekti va MAD Yechimi", en: "Masking Effect & Robust MAD Z-Score" }, latex: "MAD = \\text{median}(|x_i - \\tilde{x}|), \\qquad M_i = \\frac{0.6745\\,(x_i - \\tilde{x})}{MAD}", points: { uz: ["Masking: ma'lumotdagi bitta 1,000,000 qiymat μ va σ ni oshirib, 5000 kabi outlierni yashiradi!", "Modified Z-score (MAD) mediana ishlatgani uchun Masking ga tushmaydi", "Chegara: |M_i| > 3.5 bo'lsa outlier!"], en: ["Masking: one huge outlier inflates μ and σ, hiding medium outliers!", "Modified Z-Score uses Median & MAD (50% breakdown point)", "Threshold: flag |M_i| > 3.5"] } },
      { title: { uz: "Global vs Lokal Anomaliya Muammosi", en: "Why Global Rules Fail: Local Density" }, points: { uz: ["Tasavvur qiling: C1 klaster juda zich (masofa 0.1), C2 klaster siyrak (masofa 2.0)", "C1 ning yonida 0.8 masofada turgan nuqta — C1 ga nisbatan ANOMALIYA!", "Lekin C2 dagi nuqtalar orasida masofa 2.0 bo'lgani uchun global usullar C1 yonidagi outlierni ko'rmaydi"], en: ["Cluster C1 is dense (spacing 0.1); C2 is sparse (spacing 2.0)", "A point 0.8 units from C1 is a clear local anomaly!", "Global distance methods miss it because 0.8 < 2.0 in C2"] } },
      { title: { uz: "LOF (Local Outlier Factor) Qadamlari", en: "LOF Algorithm Step-by-Step" }, latex: "\\text{reach-dist}_k(p,o)=\\max(k\\text{-dist}(o), d(p,o)), \\qquad \\text{LOF}_k(p)=\\frac{\\sum \\text{LRD}(o)/\\text{LRD}(p)}{k}", points: { uz: ["1. k-eng yaqin qo'shnilarni topish", "2. Reachability masofa bilan tebranishni silliqlash", "3. LRD (Local Reachability Density) — lokal zichlikni hisoblash", "4. LOF ≈ 1 (normal) | LOF >> 1 (masalan >1.5 — lokal anomaliya!)"], en: ["1. Find k nearest neighbors", "2. Compute reachability distance (stabilizes variance)", "3. Compute LRD = inverse average reachability", "4. Compare neighbors' LRD to yours: LOF >> 1 → outlier!"] } },
      { title: { uz: "LOF Amaliy Eslatma: novelty=True", en: "LOF in Production: novelty=True" }, points: { uz: ["Oddiy LocalOutlierFactor() faqat o'quv to'plamida fit_predict() qiladi", "Yangi kelgan test tranzaksiyasini tekshirish uchun LocalOutlierFactor(novelty=True) qo'ying!"], en: ["Standard LOF only runs fit_predict() transductively", "Pass novelty=True to score unseen test transactions via predict()"] } },
      { title: { uz: "Isolation Forest: Asosiy G'oya", en: "Isolation Forest: Core Intuition" }, points: { uz: ["Boshqa algoritmlar avval 'norma'ni modellashtiradi, Isolation Forest esa to'g'ridan-to'g'ri anomaliyani AJALATADI (isolate)!", "Tasodifiy atribut va tasodifiy kesish nuqtasi tanlanadi", "Normal nuqta zich to'da ichida → ajratish uchun 10–15 ta kesish kerak", "Anomaliya chetda yolg'iz → 1–3 ta kesishda darhol ajraladi!"], en: ["Instead of profiling normal data, iForest directly isolates anomalies!", "Pick random feature + random split value recursively", "Dense inliers need deep paths; isolated outliers sit near the root!"] } },
      { title: { uz: "Isolation Forest Anomaly Score Formulasi", en: "Isolation Forest Scoring Math" }, latex: "s(x, n) = 2^{-\\frac{E(h(x))}{c(n)}}", points: { uz: ["E(h(x)) — 100 ta daraxt bo'yicha o'rtacha yo'l uzunligi", "Agar E(h(x)) → 0 (juda qisqa) → s → 1.0 (Anomaliya!)", "Agar E(h(x)) ≈ c(n) → s ≈ 0.5 (Chegara)", "Agar E(h(x)) >> c(n) → s < 0.5 (Normal!)"], en: ["E(h(x)) = mean path depth across ensemble of iTrees", "Short path E(h(x)) → 0 yields score s → 1.0 (Anomaly)", "Average path gives s ≈ 0.5; deep path gives s < 0.5 (Normal)"] } },
      { title: { uz: "Interaktiv Demo: Isolation Forest vs Z-Score!", en: "Interactive Visualizer: Isolation Cuts vs Z-Score" }, widget: 'anomaly-sim' },
      { title: { uz: "Isolation Forest Giperparametrlari", en: "Key Hyperparameters of Isolation Forest" }, points: { uz: ["n_estimators=100..200: tasodifiy daraxtlar soni", "max_samples=256 (ψ): har daraxtga olinadigan kichik namuna (swamping/masking oldini oladi!)", "contamination='auto' yoki 0.05: kutilayotgan anomaliya ulushi"], en: ["n_estimators=100..200 trees", "max_samples=256 subsampling prevents masking & keeps training O(1) per tree!", "contamination sets the decision_function threshold"] } },
      { title: { uz: "Talabalarga savol (contamination)", en: "Class Discussion: contamination" }, discussion: { q: { uz: "Datasetda aslida 1% firibgarlik bor, lekin siz IsolationForest(contamination=0.20) qo'ydingiz. Nima sodir bo'ladi?", en: "True fraud rate is 1%, but you set IsolationForest(contamination=0.20). What happens to Precision & Recall?" }, a: { uz: "Model ma'lumotning eng shubhali 20% qismini anomaliya deb belgilaydi: <strong>Recall yuqori</strong> bo'ladi, lekin 19% normal mijozlar bloklanib <strong>Precision keskin tushadi (FP ko'p)</strong>!", en: "The model flags the top 20% scores as anomalies: <strong>Recall rises</strong>, but 19% legitimate users get flagged causing <strong>awful Precision</strong>!" } } },
      { title: { uz: "Anomaliya Modellarini Baholash (Yorliqsiz va Yorliqli)", en: "Evaluating Anomaly Detectors" }, points: { uz: ["Test to'plamida yorliqlar bo'lsa: Accuracy EMAS, PR-AUC, F1 va Recall@K ishlatiladi!", "Yorliqlar umuman bo'lmasa: eng yuqori anomaly score li Top-20 nuqtani ekspert bilan tekshirish"], en: ["With ground-truth test labels: use PR-AUC, F1, Recall@K (never Accuracy!)", "Without labels: manually audit top-K highest anomaly scores with domain experts"] } }
    ],
    lab: {
      title: { uz: "L9: MAD, LOF va Isolation Forest (Kredit Firibgarligi Simulyatsiyasi)", en: "L9: MAD Z-Score, LOF & Isolation Forest Benchmark" },
      objective: { uz: "Har xil zichlikdagi klasterlarda Z-Score/MAD, LOF va Isolation Forest modellarini sinash va Precision/Recall bilan baholash.", en: "Benchmark MAD, LOF, and Isolation Forest on mixed-density data with ground-truth PR evaluation." },
      steps: [
        {
          title: { uz: "Turli zichlikdagi normal klasterlar va anomaliyalar yaratish", en: "Generate Multi-Density Normal Data + Outliers" },
          desc: { uz: "Zich klaster + siyrak klaster + 25 ta anomaliya tuzing.", en: "Combine a dense blob, a sparse blob, and 25 uniform outliers." },
          code: `import numpy as np
np.random.seed(42)
X_dense = np.random.normal(0, 0.4, (180, 2))
X_sparse = np.random.normal(6, 1.5, (100, 2))
X_anom = np.random.uniform(-4, 11, (20, 2))
X = np.vstack([X_dense, X_sparse, X_anom])
y_true = np.hstack([np.ones(280), -np.ones(20)])
print("Dataset shape:", X.shape, "| Outliers:", (y_true == -1).sum())`
        },
        {
          title: { uz: "Robust MAD Z-Score (1D Masking Test)", en: "Compare Z-Score vs Robust MAD on 1D" },
          desc: { uz: "1000 qiymatli ekstremal outlier Z-Score ni buzishini, MAD esa chidamli ekanini ko'ring.", en: "Show how Z-Score misses moderate outliers under masking while MAD catches them." },
          code: `arr = np.array([10, 12, 11, 13, 12, 14, 11, 65, 1000])
z = np.abs((arr - arr.mean()) / arr.std())
med = np.median(arr)
mad = np.median(np.abs(arr - med))
mod_z = np.abs(0.6745 * (arr - med) / mad)
print("Standard Z (>3):", arr[z > 3])
print("MAD Mod-Z (>3.5):", arr[mod_z > 3.5])`
        },
        {
          title: { uz: "Isolation Forest vs LOF Taqqoslash", en: "Benchmark Isolation Forest vs LOF" },
          desc: { uz: "Ikkala modelning F1 va Recall ko'rsatkichlarini hisoblang.", en: "Evaluate Precision, Recall, and F1 for anomaly class (-1)." },
          code: `from sklearn.ensemble import IsolationForest
from sklearn.neighbors import LocalOutlierFactor
from sklearn.metrics import classification_report

iso = IsolationForest(contamination=20/300, random_state=42).fit_predict(X)
lof = LocalOutlierFactor(n_neighbors=20, contamination=20/300).fit_predict(X)
print("=== Isolation Forest ===")
print(classification_report(y_true == -1, iso == -1, target_names=['Normal', 'Anomaly']))
print("=== LOF ===")
print(classification_report(y_true == -1, lof == -1, target_names=['Normal', 'Anomaly']))`
        }
      ],
      variants: {
        uz: [
          "1-variant: LocalOutlierFactor(n_neighbors=5, 20, 50) uchun F1-score o'zgarishini solishtiring.",
          "2-variant: IsolationForest ning decision_function(X) qiymatlaridan eng shubhali Top-5 nuqtani chop eting.",
          "3-variant: OneClassSVM(nu=0.07, gamma='scale') ni ham qo'shib 3 ta modelni jadvalda taqqoslang."
        ],
        en: [
          "Variant 1: Sweep LOF n_neighbors across [5, 20, 50] and compare anomaly F1.",
          "Variant 2: Rank points by IsolationForest.decision_function(X) and print the top 5 most anomalous.",
          "Variant 3: Add OneClassSVM(nu=0.07) to the benchmark table."
        ]
      }
    },
    glossary: [
      { uz: "Masking effekti", en: "Masking Effect", defUz: "Katta outlierlar μ va σ ni oshirib boshqa outlierlarni yashirib qo'yishi", defEn: "Extreme outliers inflating mean/std and hiding moderate outliers" },
      { uz: "MAD", en: "MAD", defUz: "Medianadan absolyut og'ishlar medianasi (chidamli tarqalish)", defEn: "Median Absolute Deviation, robust spread estimator" },
      { uz: "LOF", en: "LOF", defUz: "Nuqta zichligini qo'shnilariga nisbatlovchi lokal anomaliya indeksi", defEn: "Local Outlier Factor comparing point LRD to neighbors" },
      { uz: "Isolation Forest", en: "Isolation Forest", defUz: "Tasodifiy bo'linish yo'li uzunligi bilan anomaliyalarni ajratuvchi ansambl", defEn: "Tree ensemble scoring anomalies by short isolation path lengths" }
    ],
    quiz: [
      { q: { uz: "Isolation Forest anomaliyalarni qanday aniqlaydi?", en: "How does Isolation Forest detect anomalies?" }, options: [{ label: 'A', uz: "O'rtacha va sigma bilan", en: "Mean & std" }, { label: 'B', uz: "Anomaliyalar tasodifiy daraxtda ildizga yaqin kam kesishda izolyatsiya bo'ladi", en: "Anomalies isolate in shorter random split paths near the root" }, { label: 'C', uz: "K-Means bilan", en: "K-Means" }, { label: 'D', uz: "Apriori bilan", en: "Apriori" }], answer: 'B', explanation: { uz: "Qisqa o'rtacha yo'l uzunligi E(h(x)) yuqori anomaly score s(x,n)→1 beradi.", en: "Short average path lengths yield anomaly scores approaching 1." } },
      { q: { uz: "LOF >> 1 nimani anglatadi?", en: "What does LOF >> 1 indicate?" }, options: [{ label: 'A', uz: "Normal nuqta", en: "Normal point" }, { label: 'B', uz: "Qo'shnilaridan ancha past zichlikdagi lokal anomaliya", en: "Local outlier with much lower density than neighbors" }, { label: 'C', uz: "Klaster markazi", en: "Centroid" }, { label: 'D', uz: "Xato", en: "Error" }], answer: 'B', explanation: { uz: "Qo'shnilarning LRD si nuqtanikidan katta bo'lganda LOF >> 1 chiqadi.", en: "Neighbors are denser than the target point." } },
      { q: { uz: "\"Contextual anomaly\" misoli qaysi?", en: "Which is a Contextual Anomaly?" }, options: [{ label: 'A', uz: "Qishda 35°C harorat", en: "35°C in winter" }, { label: 'B', uz: "Katta xato", en: "Single huge spike" }, { label: 'C', uz: "1000 ta klik", en: "1000 clicks" }, { label: 'D', uz: "NaN", en: "NaN" }], answer: 'A', explanation: { uz: "35°C yozda normal, qish kontekstida anomaliyadir.", en: "Normal value overall, anomalous inside the winter context." } },
      { q: { uz: "Z-score dagi Masking muammosini qaysi statistika hal qiladi?", en: "Which robust statistic resolves Z-score Masking?" }, options: [{ label: 'A', uz: "Modified Z-score (Mediana va MAD)", en: "Modified Z-score (Median & MAD)" }, { label: 'B', uz: "Min-Max", en: "Min-Max" }, { label: 'C', uz: "Accuracy", en: "Accuracy" }, { label: 'D', uz: "Support", en: "Support" }], answer: 'A', explanation: { uz: "Mediana va MAD 50% gacha buzilgan nuqtalarga chidamli.", en: "Median & MAD resist extreme outlier distortion." } },
      { q: { uz: "Isolation Forest da `contamination` parametri nimani belgilaydi?", en: "What does `contamination` control in Isolation Forest?" }, options: [{ label: 'A', uz: "Daraxtlar soni", en: "Tree count" }, { label: 'B', uz: "Datasetdagi kutilayotgan anomaliyalar ulushi", en: "Expected proportion of outliers" }, { label: 'C', uz: "Chuqurlik", en: "Depth" }, { label: 'D', uz: "Radius", en: "Radius" }], answer: 'B', explanation: { uz: "Score chegarasini (threshold) avtomatik sozlash uchun ishlatiladi.", en: "Sets the score cutoff for predicting -1 vs +1." } }
    ]
  }
);
