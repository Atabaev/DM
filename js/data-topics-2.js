window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  {
    id: 6,
    slug: '06-association-rules',
    hours: 4,
    labs: 2,
    keywords: ['Association Rules', 'Apriori', 'FP-Growth', 'Support', 'Confidence', 'Lift'],
    title: {
      uz: "Assotsiativ qoidalar va savat tahlili",
      en: "Association Rules & Market Basket Analysis"
    },
    description: {
      uz: "Apriori algoritmi, FP-Growth, Support, Confidence va Lift ko'rsatkichlari hamda savat tahlili.",
      en: "Apriori principle, FP-Growth trees, Support, Confidence, Lift metrics, and Market Basket Analysis."
    },
    sections: [
      {
        heading: { uz: "6.1. Assotsiativ qoidalar va ko'rsatkichlar", en: "6.1. Association Rules & Key Metrics" },
        bodyHtml: {
          uz: "<p><strong>Assotsiativ qoidalar</strong> — tranzaksiyalar ichida birga uchraydigan elementlar bog'liqligini topish usuli (masalan, <code>{Non} → {Sut}</code>). Asosiy uch ko'rsatkich:</p><ul><li><strong>Support(A):</strong> A elementi barcha tranzaksiyalarning necha ulushida uchraydi.</li><li><strong>Confidence(A → B):</strong> A sotib olinganda B ning shartli ehtimoli.</li><li><strong>Lift(A → B):</strong> bog'liqlik kuchi (>1 ijobiy, =1 mustaqil, <1 salbiy).</li></ul>",
          en: "<p><strong>Association Rules</strong> discover item co-occurrence patterns in transactions (e.g., <code>{Bread} → {Milk}</code>). Three core metrics:</p><ul><li><strong>Support(A):</strong> fraction of transactions containing itemset A.</li><li><strong>Confidence(A → B):</strong> conditional probability of B given A.</li><li><strong>Lift(A → B):</strong> strength of dependence (>1 positive association, =1 independent, <1 negative).</li></ul>"
        },
        formula: "Support(A)=count(A)/N  |  Confidence(A→B)=Sup(A∪B)/Sup(A)  |  Lift(A→B)=Conf(A→B)/Sup(B)"
      },
      {
        heading: { uz: "6.2. Apriori vs FP-Growth", en: "6.2. Apriori vs FP-Growth Algorithms" },
        bodyHtml: {
          uz: "<p><strong>Apriori prinsipi:</strong> Agar to'plam frequent bo'lmasa, uni o'z ichiga olgan hech bir kattaroq to'plam ham frequent bo'la olmaydi (<em>anti-monotone property</em>).</p><p><strong>FP-Growth</strong> esa ma'lumotni prefix-daraxtga (FP-Tree) siqib saqlaydi va ma'lumotdan atigi 2 marta o'tib Apriori dan ancha tez ishlaydi.</p>",
          en: "<p><strong>Apriori Principle:</strong> Any superset of an infrequent itemset is also infrequent (<em>downward closure</em>).</p><p><strong>FP-Growth</strong> compresses transactions into an FP-Tree prefix structure, requiring only 2 database scans without candidate generation.</p>"
        },
        table: {
          headers: { uz: ["Mezon", "Apriori", "FP-Growth"], en: ["Criteria", "Apriori", "FP-Growth"] },
          rows: {
            uz: [
              ["Bazadan o'tish", "Ko'p marta", "2 marta"],
              ["Kandidat generatsiyasi", "Ha (ko'p)", "Yo'q"],
              ["Tezlik", "Katta ma'lumotda sekin", "Ancha tez"]
            ],
            en: [
              ["Database Scans", "Multiple passes", "Only 2 scans"],
              ["Candidate Sets", "Generates huge candidates", "No candidate generation"],
              ["Speed", "Slower on large data", "Much faster"]
            ]
          }
        }
      }
    ],
    slides: [
      {
        title: { uz: "6-mavzu: Assotsiativ qoidalar", en: "Topic 6: Association Rules" },
        subtitle: { uz: "Market Basket Analysis, Apriori va FP-Growth", en: "Support, Confidence, Lift & Frequent Itemsets" },
        points: {
          uz: ["Savat tahlili va {A} → {B} qoidalar", "Support, Confidence va Lift formulalari", "Apriori prinsipi (anti-monotonlik)", "FP-Growth daraxti afzalliklari"],
          en: ["Market Basket Analysis & {A} → {B} rules", "Support, Confidence & Lift formulas", "The Apriori downward closure principle", "FP-Growth prefix tree speedup"]
        }
      },
      {
        title: { uz: "Support, Confidence va Lift", en: "Support, Confidence & Lift" },
        formula: "Sup(A∪B) = count(A∪B)/N  |  Conf(A→B) = Sup(A∪B)/Sup(A)  |  Lift = Conf(A→B)/Sup(B)",
        points: {
          uz: ["Lift > 1: A va B birga uchrashi tasodifiy emas (ijobiy)", "Lift = 1: A va B mustaqil", "Lift < 1: A bo'lsa B kamroq uchraydi"],
          en: ["Lift > 1: positive correlation beyond random chance", "Lift = 1: items are statistically independent", "Lift < 1: negative correlation (substitutes)"]
        }
      },
      {
        title: { uz: "Apriori vs FP-Growth", en: "Apriori vs FP-Growth" },
        points: {
          uz: ["Apriori: har bosqichda k-elementli kandidatlar tuzadi va tekshiradi", "Apriori qoidasi: kichik to'plam nodir bo'lsa, katta to'plam ham nodir", "FP-Growth: prefix daraxt orqali atigi 2 marta o'qiydi"],
          en: ["Apriori: iterative level-wise candidate generation & pruning", "FP-Growth: builds compact FP-Tree in 2 scans without candidates", "Both produce the exact same frequent itemsets"]
        }
      }
    ],
    lab: {
      title: { uz: "L6–L7: mlxtend yordamida Apriori savat tahlili", en: "L6–L7: Market Basket Analysis with mlxtend" },
      tasks: {
        uz: [
          "min_support=0.3 bilan frequent itemsetlarni toping",
          "min_confidence=0.6 qoidalarini Lift bo'yicha saralang",
          "Lift > 1 bo'lgan eng kuchli qoidalarni sharhlang"
        ],
        en: [
          "Extract frequent itemsets with min_support=0.3",
          "Generate association rules with min_confidence=0.6",
          "Sort rules by Lift descending and interpret top pairs"
        ]
      },
      code: `import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules

transactions = [
    ['Bread', 'Milk', 'Eggs'], ['Bread', 'Milk'], ['Bread', 'Eggs'],
    ['Milk', 'Eggs'], ['Bread', 'Milk', 'Eggs'], ['Bread', 'Milk', 'Fruit'],
    ['Eggs', 'Fruit'], ['Bread', 'Fruit'], ['Milk', 'Fruit', 'Eggs'],
    ['Bread', 'Milk', 'Fruit', 'Eggs']
]
te = TransactionEncoder()
df = pd.DataFrame(te.fit_transform(transactions), columns=te.columns_)
freq = apriori(df, min_support=0.3, use_colnames=True)
rules = association_rules(freq, metric="confidence", min_threshold=0.6)
print(rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']].sort_values('lift', ascending=False))`
    },
    glossary: [
      { uz: "Support", en: "Support", defUz: "Elementlar to'plamining jami tranzaksiyalardagi uchrash ulushi", defEn: "Proportion of transactions containing an itemset" },
      { uz: "Confidence", en: "Confidence", defUz: "A mavjud bo'lganda B ham uchrashining shartli ehtimoli", defEn: "Conditional probability P(B|A)" },
      { uz: "Lift", en: "Lift", defUz: "Qoidaning tasodifiy mustaqillikdan necha marta kuchliligi", defEn: "Ratio of observed support to expected independent support" }
    ],
    quiz: [
      {
        q: { uz: "Confidence(A → B) = 0.8 nimani bildiradi?", en: "What does Confidence(A → B) = 0.8 mean?" },
        options: [
          { label: 'A', uz: "B ning 80% da A bor", en: "80% of B contain A" },
          { label: 'B', uz: "A mavjud tranzaksiyalarning 80% da B ham bor", en: "80% of transactions with A also contain B" },
          { label: 'C', uz: "Jami tranzaksiyalarning 80% da ikkalasi bor", en: "80% of all transactions contain both" },
          { label: 'D', uz: "Lift 0.8 ga teng", en: "Lift equals 0.8" }
        ],
        answer: 'B',
        explanation: { uz: "Confidence P(B|A) — A sodir bo'lganda B ning shartli ehtimoli.", en: "Confidence is the conditional probability P(B|A)." }
      },
      {
        q: { uz: "Lift(A → B) = 1 bo'lsa nimani anglatadi?", en: "What does Lift = 1 indicate?" },
        options: [
          { label: 'A', uz: "Juda kuchli bog'liqlik", en: "Very strong positive rule" },
          { label: 'B', uz: "A va B statistik jihatdan mustaqil", en: "A and B are statistically independent" },
          { label: 'C', uz: "Salbiy bog'liqlik", en: "Negative correlation" },
          { label: 'D', uz: "Support 100%", en: "100% support" }
        ],
        answer: 'B',
        explanation: { uz: "Lift = 1 bo'lsa, P(A∩B) = P(A)·P(B), ya'ni tasodifiy uchrashishdan farqi yo'q.", en: "Lift = 1 means P(A∩B) = P(A)·P(B), indicating independence." }
      },
      {
        q: { uz: "Apriori prinsipi nimaga asoslanadi?", en: "What does the Apriori principle state?" },
        options: [
          { label: 'A', uz: "Barcha to'plamlar frequent", en: "All itemsets are frequent" },
          { label: 'B', uz: "Frequent bo'lmagan to'plamning kattaroq to'plamlari ham frequent emas", en: "Every superset of an infrequent itemset is also infrequent" },
          { label: 'C', uz: "Lift doim > 1", en: "Lift is always > 1" },
          { label: 'D', uz: "Ma'lumotdan 1 marta o'tish yetarli", en: "One pass is sufficient" }
        ],
        answer: 'B',
        explanation: { uz: "Anti-monotonlik xususiyati tufayli nodir kichik to'plamlardan hosil bo'ladigan kandidatlar tashlab yuboriladi.", en: "Downward closure allows pruning supersets of infrequent itemsets early." }
      },
      {
        q: { uz: "FP-Growth Apriori dan nimasi bilan ustun?", en: "How does FP-Growth outperform Apriori?" },
        options: [
          { label: 'A', uz: "Kandidat generatsiya qilmaydi va ma'lumotdan faqat 2 marta o'tadi", en: "Uses an FP-Tree in 2 scans without candidate generation" },
          { label: 'B', uz: "Support talab qilmaydi", en: "Requires no minimum support" },
          { label: 'C', uz: "Faqat 2 ta mahsulot uchun", en: "Works only on 2 items" },
          { label: 'D', uz: "Klasterlash bajaradi", en: "Performs clustering instead" }
        ],
        answer: 'A',
        explanation: { uz: "FP-Tree tuzilmasi kandidatlar portlashini yo'qotadi va I/O sonini 2 taga tushiradi.", en: "FP-Growth eliminates expensive candidate generation and scans data twice." }
      },
      {
        q: { uz: "Market Basket Analysis qayerda qo'llanilmaydi?", en: "Which task is NOT a standard Market Basket Analysis application?" },
        options: [
          { label: 'A', uz: "Supermarket javonlarini joylashtirish", en: "Supermarket shelf placement" },
          { label: 'B', uz: "E-commerce mahsulot tavsiyalari", en: "E-commerce cross-selling bundles" },
          { label: 'C', uz: "Tibbiy simptomlar birga kelishini topish", en: "Co-occurring symptom patterns" },
          { label: 'D', uz: "Tasvir piksellarini JPEG siqish", en: "Lossy JPEG image compression" }
        ],
        answer: 'D',
        explanation: { uz: "Tasvir siqish signalni qayta ishlashga kiradi, tranzaksiya assotsiatsiyasiga emas.", en: "Image compression is signal processing, not transactional itemset mining." }
      }
    ]
  },

  {
    id: 7,
    slug: '07-clustering-kmeans',
    hours: 2,
    labs: 1,
    keywords: ['Clustering', 'K-Means', 'WCSS', 'Elbow Method', 'Silhouette'],
    title: {
      uz: "K-Means algoritmi yordamida klasterlash",
      en: "Clustering with K-Means"
    },
    description: {
      uz: "Nazorat qilinmaydigan klasterlash, K-Means bosqichlari, WCSS maqsad funksiyasi, Elbow va Silhouette usullari.",
      en: "Unsupervised clustering, K-Means steps, WCSS objective, Elbow method, and Silhouette Score."
    },
    sections: [
      {
        heading: { uz: "7.1. Klasterlash va K-Means algoritmi", en: "7.1. Unsupervised Clustering & K-Means" },
        bodyHtml: {
          uz: "<p><strong>Klasterlash</strong> — yorliqsiz (unlabeled) ma'lumotlarni o'xshashlikka ko'ra guruhlash. <strong>K-Means</strong> K ta markaz (centroid) tanlab, har bir nuqtani eng yaqin markazga biriktiradi va markazlarni qayta hisoblaydi.</p><ol><li>K ta boshlang'ich markaz tanlash (yoki K-Means++).</li><li>Har nuqtani eng yaqin centroidga biriktirish.</li><li>Klaster o'rtachasi sifatida yangi centroidlarni yangilash.</li><li>Markazlar barqarorlashguncha 2–3-qadamlarni takrorlash.</li></ol>",
          en: "<p><strong>Clustering</strong> groups unlabeled data points by similarity. <strong>K-Means</strong> partitions data into K spherical clusters by alternating assignment and centroid updates:</p><ol><li>Initialize K centroids (e.g., via K-Means++).</li><li>Assign each point to its nearest centroid.</li><li>Recompute centroids as cluster means.</li><li>Repeat steps 2–3 until convergence.</li></ol>"
        },
        formula: "WCSS = Σ_k Σ_{x ∈ C_k} ||x - μ_k||²"
      },
      {
        heading: { uz: "7.2. Optimal K: Elbow va Silhouette", en: "7.2. Choosing K: Elbow & Silhouette Score" },
        bodyHtml: {
          uz: "<p><strong>Elbow usuli:</strong> K oshgan sari WCSS kamayadi; keskin pasayish sekinlashgan \"tirsak\" nuqtasi optimal K ni ko'rsatadi.</p><p><strong>Silhouette ko'rsatkichi s(i):</strong> [-1, 1] oralig'ida. 1 ga yaqin — mukammal ajralish, 0 — chegara, &lt;0 — noto'g'ri klaster.</p>",
          en: "<p><strong>Elbow Method:</strong> Plot WCSS vs K; the bend where marginal WCSS drop flattens suggests optimal K.</p><p><strong>Silhouette Score s(i):</strong> ranges in [-1, 1]. Near +1 indicates dense, well-separated clusters; near 0 indicates overlapping boundaries; &lt;0 indicates misassignment.</p>"
        },
        formula: "s(i) = (b(i) - a(i)) / max(a(i), b(i))"
      }
    ],
    slides: [
      {
        title: { uz: "7-mavzu: K-Means klasterlash", en: "Topic 7: K-Means Clustering" },
        subtitle: { uz: "Unsupervised Learning · Centroidlar · Silhouette", en: "Centroid Optimization, Elbow & Silhouette" },
        points: {
          uz: ["Supervised vs Unsupervised farqi", "K-Means 4 ta iterativ bosqichi", "WCSS minimizatsiyasi", "Elbow va Silhouette orqali K ni tanlash"],
          en: ["Unsupervised grouping without target labels", "4 iterative steps of K-Means", "Minimizing Within-Cluster Sum of Squares (WCSS)", "Elbow curve & Silhouette Score for K"]
        }
      },
      {
        title: { uz: "K-Means maqsadi va Silhouette", en: "WCSS Objective & Silhouette Score" },
        formula: "WCSS = Σ Σ ||x - μ_k||²    |    s(i) = (b(i) - a(i)) / max(a(i), b(i))",
        points: {
          uz: ["a(i): o'z klasteridagi nuqtalargacha o'rtacha masofa", "b(i): eng yaqin qo'shni klastergacha o'rtacha masofa", "K-Means kamchiliklari: K oldindan kerak, sferik shakl, outlierlarga sezgir"],
          en: ["a(i): mean intra-cluster distance", "b(i): mean nearest-cluster distance", "Limitations: must specify K, assumes spherical clusters, sensitive to outliers"]
        }
      }
    ],
    lab: {
      title: { uz: "L7: Elbow va Silhouette yordamida K-Means", en: "L7: Finding Optimal K with Elbow & Silhouette" },
      tasks: {
        uz: [
          "k=2..10 oralig'ida inertia_ (WCSS) va silhouette_score hisoblang",
          "Optimal K=5 uchun klaster markazlarini vizuallashtiring"
        ],
        en: [
          "Compute inertia_ (WCSS) and silhouette_score for k=2..10",
          "Fit KMeans(n_clusters=5) and inspect cluster centroids"
        ]
      },
      code: `from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

X, _ = make_blobs(n_samples=300, centers=5, cluster_std=0.8, random_state=42)
for k in range(2, 8):
    km = KMeans(n_clusters=k, random_state=42, n_init=10).fit(X)
    sil = silhouette_score(X, km.labels_)
    print(f"k={k}: WCSS={km.inertia_:.1f}, Silhouette={sil:.3f}")`
    },
    glossary: [
      { uz: "Centroid", en: "Centroid", defUz: "Klasterdagi barcha nuqtalarning o'rtacha koordinata markazi", defEn: "Geometric mean center of all points in a cluster" },
      { uz: "WCSS", en: "WCSS", defUz: "Klaster ichidagi kvadratik masofalar yig'indisi (Inertia)", defEn: "Within-Cluster Sum of Squares (inertia)" }
    ],
    quiz: [
      {
        q: { uz: "K-Means algoritmining asosiy oldindan beriladigan parametri nima?", en: "What key hyperparameter must be specified upfront for K-Means?" },
        options: [
          { label: 'A', uz: "eps radiusi", en: "eps radius" },
          { label: 'B', uz: "Klasterlar soni K", en: "Number of clusters K" },
          { label: 'C', uz: "Minimum support", en: "Minimum support" },
          { label: 'D', uz: "Daraxt chuqurligi", en: "Tree depth" }
        ],
        answer: 'B',
        explanation: { uz: "K-Means ishlashidan avval K klasterlar soni berilishi shart.", en: "K-Means requires the user to choose K before fitting." }
      },
      {
        q: { uz: "Silhouette ko'rsatkichi 1 ga yaqin bo'lsa nimani bildiradi?", en: "What does a Silhouette Score close to +1 mean?" },
        options: [
          { label: 'A', uz: "Klasterlash juda yomon", en: "Poor clustering" },
          { label: 'B', uz: "Ob'ekt noto'g'ri klasterda", en: "Point is in the wrong cluster" },
          { label: 'C', uz: "Ob'ekt o'z klasteriga mos va klasterlar yaxshi ajralgan", en: "Dense, well-separated clusters" },
          { label: 'D', uz: "Barcha nuqtalar shovqin", en: "All points are noise" }
        ],
        answer: 'C',
        explanation: { uz: "b(i) >> a(i) bo'lganda s(i) → 1 bo'ladi.", en: "s(i) approaches +1 when intra-cluster cohesion is tight and inter-cluster separation is large." }
      },
      {
        q: { uz: "K-Means qaysi shakldagi klasterlarda yaxshi ishlaydi?", en: "Which cluster geometry does K-Means handle best?" },
        options: [
          { label: 'A', uz: "Yarim oy (crescent)", en: "Crescent moons" },
          { label: 'B', uz: "Halqa (ring)", en: "Concentric rings" },
          { label: 'C', uz: "Sferik (yumaloq va teng o'lchamli)", en: "Spherical, roughly equal-sized blobs" },
          { label: 'D', uz: "Har qanday zich shaklda", en: "Arbitrary non-convex shapes" }
        ],
        answer: 'C',
        explanation: { uz: "Evklid markaziga asoslangani uchun K-Means faqat qavariq/sferik klasterlarga mos.", en: "Centroid Euclidean distance favors convex, spherical clusters." }
      },
      {
        q: { uz: "Elbow usulida \"tirsak\" nuqtasi nimani ko'rsatadi?", en: "What does the 'elbow' point indicate in the Elbow Method?" },
        options: [
          { label: 'A', uz: "Minimal Silhouette", en: "Minimum Silhouette" },
          { label: 'B', uz: "Optimal K qiymati", en: "Optimal number of clusters K" },
          { label: 'C', uz: "Maksimal iteratsiya", en: "Maximum iterations" },
          { label: 'D', uz: "Outlierlar soni", en: "Number of outliers" }
        ],
        answer: 'B',
        explanation: { uz: "Tirsak nuqtasidan keyin K ni oshirish WCSS ni sezilarli kamaytirmaydi.", en: "Beyond the elbow, adding more clusters yields diminishing returns in WCSS reduction." }
      },
      {
        q: { uz: "K-Means outlierlarga qanday munosabatda bo'ladi?", en: "How do outliers affect K-Means?" },
        options: [
          { label: 'A', uz: "Avtomatik o'chiradi", en: "Automatically discards them as noise" },
          { label: 'B', uz: "Outlierlar markazlarni (mean) o'z tomon tortib buzadi", en: "Outliers pull cluster centroids away from true centers" },
          { label: 'C', uz: "Umuman ta'sir qilmaydi", en: "No effect at all" },
          { label: 'D', uz: "K ni oshiradi", en: "Increases K automatically" }
        ],
        answer: 'B',
        explanation: { uz: "K-Means o'rtacha (mean) hisoblagani uchun uzoq outlier centroidni siljitib yuboradi.", en: "Since centroids are arithmetic means, extreme outliers skew centroid positions." }
      }
    ]
  },

  {
    id: 8,
    slug: '08-clustering-advanced',
    hours: 2,
    labs: 1,
    keywords: ['Hierarchical', 'Dendrogram', 'DBSCAN', 'Ward', 'Density'],
    title: {
      uz: "Iyerarxik va DBSCAN klasterlash",
      en: "Hierarchical & DBSCAN Clustering"
    },
    description: {
      uz: "Agglomerative iyerarxik klasterlash, linkage usullari, dendrogramma hamda zichlikka asoslangan DBSCAN algoritmi.",
      en: "Agglomerative clustering, linkage criteria, dendrograms, and density-based DBSCAN for arbitrary shapes."
    },
    sections: [
      {
        heading: { uz: "8.1. Iyerarxik klasterlash va Dendrogramma", en: "8.1. Hierarchical Clustering & Dendrograms" },
        bodyHtml: {
          uz: "<p><strong>Agglomerative (pastdan yuqoriga):</strong> har bir nuqta alohida klasterdan boshlanadi va eng yaqin juftliklar ketma-ket birlashtiriladi. Natija <strong>dendrogramma</strong> daraxtida ko'rsatiladi (Y o'qi — birlashtirish masofasi).</p><p><strong>Linkage usullari:</strong> Single (eng yaqin nuqta), Complete (eng uzoq nuqta), Average (o'rtacha), <strong>Ward's method</strong> (WCSS o'sishini minimallaydi).</p>",
          en: "<p><strong>Agglomerative (bottom-up):</strong> starts with N singleton clusters and iteratively merges the closest pair. Results form a <strong>dendrogram</strong> (Y-axis = merge distance).</p><p><strong>Linkage criteria:</strong> Single (min distance), Complete (max distance), Average, and <strong>Ward's method</strong> (minimizes WCSS increase).</p>"
        }
      },
      {
        heading: { uz: "8.2. DBSCAN (Zichlikka asoslangan)", en: "8.2. Density-Based DBSCAN" },
        bodyHtml: {
          uz: "<p><strong>DBSCAN</strong> ikkita parametr ishlatadi: <code>eps (ε)</code> radius va <code>min_samples</code>. Nuqtalar 3 turga bo'linadi: <strong>Core</strong> (yadro), <strong>Border</strong> (chegara) va <strong>Noise (-1)</strong> (shovqin).</p><p>Afzalligi: K ni oldindan bilish shart emas, ixtiyoriy (yarim oy, halqa) shakllarni topadi va outlierlarni avtomatik ajratadi.</p>",
          en: "<p><strong>DBSCAN</strong> uses two parameters: neighborhood radius <code>eps (ε)</code> and <code>min_samples</code>. Points become <strong>Core</strong>, <strong>Border</strong>, or <strong>Noise (-1)</strong>.</p><p>Advantages: no need to specify K, discovers arbitrary non-convex shapes, and isolates outliers naturally.</p>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "8-mavzu: Iyerarxik va DBSCAN", en: "Topic 8: Hierarchical & DBSCAN" },
        subtitle: { uz: "Dendrogrammalar va zichlikka asoslangan klasterlar", en: "Linkage Methods & Arbitrary-Shape Clustering" },
        points: {
          uz: ["Agglomerative vs Divisive yondashuv", "Single, Complete, Average va Ward linkage", "DBSCAN: eps va min_samples parametrlari", "Core, Border va Noise nuqtalar"],
          en: ["Agglomerative vs Divisive hierarchy", "Single, Complete, Average & Ward linkage", "DBSCAN: eps & min_samples", "Core, Border & Noise point classification"]
        }
      },
      {
        title: { uz: "K-Means vs DBSCAN", en: "K-Means vs DBSCAN Comparison" },
        table: {
          headers: { uz: ["Xususiyat", "K-Means", "DBSCAN"], en: ["Feature", "K-Means", "DBSCAN"] },
          rows: {
            uz: [
              ["K oldindan kerakmi?", "Ha", "Yo'q"],
              ["Klaster shakli", "Faqat sferik", "Ixtiyoriy (yarim oy, halqa)"],
              ["Outlier/Shovqin", "Markazni buzadi", "Noise (-1) sifatida ajratadi"]
            ],
            en: [
              ["Requires K?", "Yes", "No"],
              ["Cluster Shape", "Spherical only", "Arbitrary non-convex shapes"],
              ["Noise Handling", "Distorts centroids", "Explicitly flags Noise (-1)"]
            ]
          }
        }
      }
    ],
    lab: {
      title: { uz: "L8: Make Moons datasetida Agglomerative va DBSCAN", en: "L8: Agglomerative & DBSCAN on Moons Dataset" },
      tasks: {
        uz: [
          "Ward linkage bilan dendrogramma quring",
          "StandardScaler dan so'ng DBSCAN(eps=0.3, min_samples=5) qo'llang",
          "Shovqin nuqtalar (-1) sonini hisoblang"
        ],
        en: [
          "Compute Ward linkage dendrogram on sample points",
          "Scale features and run DBSCAN(eps=0.3, min_samples=5)",
          "Count discovered clusters and noise (-1) points"
        ]
      },
      code: `from sklearn.datasets import make_moons
from sklearn.cluster import AgglomerativeClustering, DBSCAN
from sklearn.preprocessing import StandardScaler

X, _ = make_moons(n_samples=200, noise=0.1, random_state=42)
X_scaled = StandardScaler().fit_transform(X)

agg = AgglomerativeClustering(n_clusters=2, linkage='ward').fit_predict(X)
db = DBSCAN(eps=0.3, min_samples=5).fit_predict(X_scaled)
n_clusters = len(set(db)) - (1 if -1 in db else 0)
n_noise = list(db).count(-1)
print(f"DBSCAN found {n_clusters} clusters and {n_noise} noise points")`
    },
    glossary: [
      { uz: "Dendrogramma", en: "Dendrogram", defUz: "Klasterlarning iyerarxik birlashishini ko'rsatuvchi daraxt diagramma", defEn: "Tree diagram visualizing hierarchical cluster merges" },
      { uz: "Core Point", en: "Core Point", defUz: "eps radiusda kamida min_samples qo'shnisi bor nuqta", defEn: "Point with at least min_samples neighbors within radius eps" }
    ],
    quiz: [
      {
        q: { uz: "Dendrogrammada Y o'qi nimani ifodalaydi?", en: "What does the vertical axis (Y-axis) represent in a dendrogram?" },
        options: [
          { label: 'A', uz: "Klasterlar soni", en: "Number of clusters" },
          { label: 'B', uz: "Klasterlar birlashtirilgan masofa", en: "Distance/dissimilarity at which clusters merge" },
          { label: 'C', uz: "Shovqin miqdori", en: "Noise count" },
          { label: 'D', uz: "Iteratsiya soni", en: "Iteration count" }
        ],
        answer: 'B',
        explanation: { uz: "Balandlik ikki tarmoq qanchalik uzoq masofada birlashganini bildiradi.", en: "Height shows the dissimilarity/distance between merged branches." }
      },
      {
        q: { uz: "DBSCAN da \"shovqin nuqta\" (noise) qaysi?", en: "What is a Noise point in DBSCAN?" },
        options: [
          { label: 'A', uz: "Yadro nuqta", en: "A core point" },
          { label: 'B', uz: "Chegara nuqta", en: "A border point" },
          { label: 'C', uz: "Na yadro, na yadro nuqtaga yetadigan chegaraviy nuqta (-1)", en: "Neither a core point nor reachable from any core point (-1)" },
          { label: 'D', uz: "Klaster markazi", en: "Cluster centroid" }
        ],
        answer: 'C',
        explanation: { uz: "Past zichlik hududida qolgan nuqtalar -1 (noise) bilan belgilanadi.", en: "Isolated points in sparse regions are labeled -1 (noise)." }
      },
      {
        q: { uz: "DBSCAN ning K-Means dan asosiy ustunligi nima?", en: "What is DBSCAN's main advantage over K-Means?" },
        options: [
          { label: 'A', uz: "Har doim tezroq", en: "Always faster" },
          { label: 'B', uz: "Ixtiyoriy shakldagi klasterlarni K siz aniqlaydi", en: "Finds arbitrary-shaped clusters without specifying K" },
          { label: 'C', uz: "Parametr talab qilmaydi", en: "Requires zero parameters" },
          { label: 'D', uz: "Zichlik farqiga sezgir emas", en: "Insensitive to varying densities" }
        ],
        answer: 'B',
        explanation: { uz: "Zichlik zanjirlari orqali DBSCAN halqa va yarim oy shakllarini ham ajratadi.", en: "Density reachability handles non-convex clusters and noise naturally." }
      },
      {
        q: { uz: "Agglomerative klasterlash qanday boshlanadi?", en: "How does Agglomerative clustering start?" },
        options: [
          { label: 'A', uz: "Barcha nuqtalar 1 ta klasterda", en: "All points in one single cluster" },
          { label: 'B', uz: "Har bir obyekt alohida klasterdan boshlanadi", en: "Each observation starts as its own singleton cluster" },
          { label: 'C', uz: "K ta tasodifiy markazdan", en: "From K random centroids" },
          { label: 'D', uz: "Shovqinni o'chirishdan", en: "By dropping outliers" }
        ],
        answer: 'B',
        explanation: { uz: "Bottom-up usul N ta yakka klasterdan 1 tagacha birlashtirib boradi.", en: "Agglomerative is bottom-up: N singletons merge stepwise into 1 root." }
      },
      {
        q: { uz: "Ward's linkage usuli nimani minimallaydi?", en: "What does Ward's linkage minimize when merging clusters?" },
        options: [
          { label: 'A', uz: "Minimum juftlik masofasi", en: "Minimum pairwise distance" },
          { label: 'B', uz: "Klaster ichidagi dispersiya (WCSS) o'sishi", en: "Increase in within-cluster variance (WCSS)" },
          { label: 'C', uz: "Maksimal masofa", en: "Maximum pairwise distance" },
          { label: 'D', uz: "Klasterlar soni", en: "Cluster count" }
        ],
        answer: 'B',
        explanation: { uz: "Ward usuli har birlashuvda umumiy kvadratik xato o'sishini eng kam qiladigan juftni tanlaydi.", en: "Ward's method merges the pair causing the smallest WCSS increase." }
      }
    ]
  },

  {
    id: 9,
    slug: '09-anomaly-detection',
    hours: 2,
    labs: 1,
    keywords: ['Anomaly Detection', 'Outlier', 'Isolation Forest', 'LOF', 'IQR'],
    title: {
      uz: "Anomaliyalarni aniqlash",
      en: "Anomaly & Outlier Detection"
    },
    description: {
      uz: "Point, Contextual va Collective anomaliyalar, IQR/Z-score statistik usullari, LOF va Isolation Forest algoritmlari.",
      en: "Point, contextual & collective anomalies, IQR & Z-score, Local Outlier Factor (LOF), and Isolation Forest."
    },
    sections: [
      {
        heading: { uz: "9.1. Anomaliya turlari va statistik usullar", en: "9.1. Anomaly Types & Statistical Methods" },
        bodyHtml: {
          uz: "<p><strong>Anomaliya</strong> — umumiy tendensiyadan keskin chetga chiquvchi kuzatuv (bank firibgarligi, kiberhujum, sensor nosozligi).</p><ul><li><strong>Point anomaly:</strong> yakka g'ayritabiiy nuqta (masalan, 100 mln so'mlik kutilmagan xarid).</li><li><strong>Contextual anomaly:</strong> kontekstda g'ayritabiiy (qishda +35°C).</li><li><strong>Collective anomaly:</strong> guruh sifatida g'ayritabiiy (DDoS: 10 soniyada 1000 so'rov).</li></ul>",
          en: "<p><strong>Anomalies</strong> deviate sharply from normal patterns (fraud, intrusions, sensor faults):</p><ul><li><strong>Point anomaly:</strong> single extreme point (e.g., sudden huge transaction).</li><li><strong>Contextual anomaly:</strong> abnormal in context (35°C in winter).</li><li><strong>Collective anomaly:</strong> abnormal sequence/group (1000 clicks in 10 seconds).</li></ul>"
        }
      },
      {
        heading: { uz: "9.2. LOF va Isolation Forest", en: "9.2. LOF & Isolation Forest" },
        bodyHtml: {
          uz: "<p><strong>LOF (Local Outlier Factor):</strong> nuqtaning lokal zichligini qo'shnilari zichligi bilan taqqoslaydi. LOF ≈ 1 (normal), LOF &gt;&gt; 1 (anomaliya).</p><p><strong>Isolation Forest:</strong> anomaliyalarni tasodifiy bo'linishlar bilan tezroq (kamroq daraxt qadamida) izolyatsiya qilish mumkin degan g'oyaga asoslangan.</p>",
          en: "<p><strong>LOF (Local Outlier Factor):</strong> compares local density to neighbors' density. LOF ≈ 1 (normal), LOF &gt;&gt; 1 (outlier).</p><p><strong>Isolation Forest:</strong> isolates anomalies faster via shorter average path lengths in random split trees.</p>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "9-mavzu: Anomaliyalarni aniqlash", en: "Topic 9: Anomaly Detection" },
        subtitle: { uz: "IQR, Z-Score, LOF va Isolation Forest", en: "Statistical, Density & Tree-Based Outlier Detection" },
        points: {
          uz: ["3 xil anomaliya: Point, Contextual, Collective", "IQR [Q1-1.5·IQR, Q3+1.5·IQR] va Z-score |z|>3", "LOF: lokal zichlik nisbati", "Isolation Forest: qisqa bo'linish yo'li"],
          en: ["3 types: Point, Contextual & Collective", "IQR bounds & |z| > 3 rules", "LOF: local density ratio", "Isolation Forest: short random split paths"]
        }
      }
    ],
    lab: {
      title: { uz: "L9: Isolation Forest va LOF bilan anomaliya aniqlash", en: "L9: Isolation Forest vs LOF Comparison" },
      tasks: {
        uz: [
          "IsolationForest(contamination=0.1) va LocalOutlierFactor ni solishtiring",
          "Haqiqiy yorliqlar bilan aniqlangan anomaliyalar sonini tekshiring"
        ],
        en: [
          "Compare IsolationForest(contamination=0.1) and LocalOutlierFactor",
          "Count predicted anomalies (-1) vs ground truth"
        ]
      },
      code: `import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.neighbors import LocalOutlierFactor

np.random.seed(42)
X = np.vstack([np.random.randn(200, 2), np.random.uniform(-5, 5, (20, 2))])
iso_pred = IsolationForest(contamination=0.1, random_state=42).fit_predict(X)
lof_pred = LocalOutlierFactor(n_neighbors=20, contamination=0.1).fit_predict(X)
print("Isolation Forest anomalies:", (iso_pred == -1).sum())
print("LOF anomalies:", (lof_pred == -1).sum())`
    },
    glossary: [
      { uz: "LOF", en: "LOF", defUz: "Nuqta zichligini qo'shnilar zichligiga nisbatlovchi ko'rsatkich", defEn: "Local Outlier Factor comparing point density to neighbors" },
      { uz: "Isolation Forest", en: "Isolation Forest", defUz: "Tasodifiy kesishlar uzunligi orqali anomaliyalarni ajratuvchi ansambl", defEn: "Tree ensemble isolating anomalies via shorter split paths" }
    ],
    quiz: [
      {
        q: { uz: "Isolation Forest anomaliyalarni qanday aniqlaydi?", en: "How does Isolation Forest identify anomalies?" },
        options: [
          { label: 'A', uz: "O'rtacha va sigma orqali", en: "Using mean and std" },
          { label: 'B', uz: "Izolyatsiya uchun kamroq tasodifiy bo'linish kerakligini hisoblab", en: "Anomalies require fewer random splits to isolate" },
          { label: 'C', uz: "K-Means markazlari bilan", en: "Using K-Means centroids" },
          { label: 'D', uz: "Support hisoblab", en: "Computing support" }
        ],
        answer: 'B',
        explanation: { uz: "Chetda turgan nuqtalar tasodifiy daraxtda ildizga yaqin qatlamda darhol ajraladi.", en: "Outliers sit in sparse regions and get isolated closer to the tree root." }
      },
      {
        q: { uz: "LOF qiymati 1 dan ancha katta (LOF >> 1) bo'lsa?", en: "What does LOF >> 1 indicate?" },
        options: [
          { label: 'A', uz: "Normal nuqta", en: "Normal inlier" },
          { label: 'B', uz: "Qo'shnilaridan past zichlikka ega anomaliya", en: "An outlier with much lower density than its neighbors" },
          { label: 'C', uz: "Klaster markazi", en: "Cluster center" },
          { label: 'D', uz: "Xato", en: "Error" }
        ],
        answer: 'B',
        explanation: { uz: "LOF > 1 nuqtaning lokal zichligi qo'shnilarinikidan pastligini bildiradi.", en: "LOF >> 1 means the point is far sparser than its local neighborhood." }
      },
      {
        q: { uz: "\"Contextual anomaly\" misoli qaysi?", en: "Which is an example of a contextual anomaly?" },
        options: [
          { label: 'A', uz: "Qishda 35°C harorat", en: "35°C temperature in winter" },
          { label: 'B', uz: "Katta bank xatosi", en: "Single huge bank transfer" },
          { label: 'C', uz: "1000 ta bot kliki", en: "1000 bot clicks together" },
          { label: 'D', uz: "Bo'sh qator", en: "Empty row" }
        ],
        answer: 'A',
        explanation: { uz: "35°C yozda normal, ammo qish kontekstida anomaliya hisoblanadi.", en: "35°C is normal in summer but anomalous given the winter context." }
      },
      {
        q: { uz: "IQR usulida outlier chegaralari qanday topiladi?", en: "How are outlier bounds computed in the IQR method?" },
        options: [
          { label: 'A', uz: "μ ± 2σ", en: "μ ± 2σ" },
          { label: 'B', uz: "[Q1 - 1.5·IQR, Q3 + 1.5·IQR]", en: "[Q1 - 1.5·IQR, Q3 + 1.5·IQR]" },
          { label: 'C', uz: "Min va Max", en: "Min and Max" },
          { label: 'D', uz: "0 va 1", en: "0 and 1" }
        ],
        answer: 'B',
        explanation: { uz: "Q1 - 1.5·IQR dan kichik va Q3 + 1.5·IQR dan katta qiymatlar outlier sanaladi.", en: "Values outside [Q1 - 1.5·IQR, Q3 + 1.5·IQR] are flagged as outliers." }
      },
      {
        q: { uz: "Isolation Forest da `contamination` parametri nimani bildiradi?", en: "What does the `contamination` parameter control in Isolation Forest?" },
        options: [
          { label: 'A', uz: "Daraxtlar soni", en: "Number of trees" },
          { label: 'B', uz: "Datasetdagi kutilayotgan anomaliyalar ulushi", en: "Expected proportion of outliers in the dataset" },
          { label: 'C', uz: "Maksimal chuqurlik", en: "Max tree depth" },
          { label: 'D', uz: "Radius", en: "Radius" }
        ],
        answer: 'B',
        explanation: { uz: "Contamination chegaraviy score (threshold) ni belgilashda ishlatiladi.", en: "Contamination sets the threshold for the expected fraction of anomalies." }
      }
    ]
  },

  {
    id: 10,
    slug: '10-ensemble',
    hours: 2,
    labs: 1,
    keywords: ['Ensemble', 'Bagging', 'Random Forest', 'Boosting', 'XGBoost'],
    title: {
      uz: "Ansambl usullari (Random Forest, Boosting)",
      en: "Ensemble Methods: Bagging, Random Forest & Boosting"
    },
    description: {
      uz: "Crowd Wisdom, Bagging (Bootstrap Aggregating), Random Forest, AdaBoost va Gradient Boosting (XGBoost).",
      en: "Bagging, Random Forest feature randomization, AdaBoost, Gradient Boosting, and Bias-Variance trade-off."
    },
    sections: [
      {
        heading: { uz: "10.1. Bagging va Random Forest", en: "10.1. Bagging & Random Forest" },
        bodyHtml: {
          uz: "<p><strong>Bagging:</strong> Bootstrap qayta namunalari ustida ko'p modellarni <strong>parallel</strong> o'qitib, ovoz berish/o'rtachalash orqali <strong>dispersiyani (variance/overfitting)</strong> kamaytiradi.</p><p><strong>Random Forest</strong> = Bagging + har bo'linishda √p ta tasodifiy atribut tanlash. Shuningdek, <code>feature_importances_</code> orqali qaysi belgi muhimligini ko'rsatadi.</p>",
          en: "<p><strong>Bagging:</strong> trains models in <strong>parallel</strong> on bootstrap samples and aggregates votes/averages to reduce <strong>variance (overfitting)</strong>.</p><p><strong>Random Forest</strong> = Bagging + random feature subset (√p) at each split to decorrelate trees, plus built-in <code>feature_importances_</code>.</p>"
        }
      },
      {
        heading: { uz: "10.2. Boosting (AdaBoost & Gradient Boosting)", en: "10.2. Boosting: AdaBoost & Gradient Boosting" },
        bodyHtml: {
          uz: "<p><strong>Boosting:</strong> modellarni <strong>ketma-ket</strong> o'qitadi — har yangi model oldingi modelning xatolarini tuzatadi va <strong>xolislikni (bias)</strong> kamaytiradi. Mashhur turlari: AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost.</p>",
          en: "<p><strong>Boosting:</strong> trains weak learners <strong>sequentially</strong>, each correcting prior errors to reduce <strong>bias</strong>. Popular implementations: AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost.</p>"
        },
        table: {
          headers: { uz: ["Mezon", "Bagging (Random Forest)", "Boosting (XGBoost)"], en: ["Criteria", "Bagging (Random Forest)", "Boosting (XGBoost)"] },
          rows: {
            uz: [
              ["O'qitish", "Parallel", "Ketma-ket (Sequential)"],
              ["Maqsad", "Dispersiyani kamaytirish", "Bias (xato) ni kamaytirish"],
              ["Overfitting xavfi", "Kam", "Yuqoriroq (learning_rate kerak)"]
            ],
            en: [
              ["Training", "Parallel", "Sequential"],
              ["Primary Effect", "Reduces Variance", "Reduces Bias"],
              ["Overfitting Risk", "Low", "Higher (needs regularization/early stopping)"]
            ]
          }
        }
      }
    ],
    slides: [
      {
        title: { uz: "10-mavzu: Ansambl usullari", en: "Topic 10: Ensemble Methods" },
        subtitle: { uz: "Bagging · Random Forest · AdaBoost · Gradient Boosting", en: "Combining Weak Learners into Strong Models" },
        points: {
          uz: ["Bagging: bootstrap + parallel → dispersiyani tushiradi", "Random Forest: Bagging + √p tasodifiy belgilar", "Boosting: ketma-ket xatolarni tuzatish → biasni tushiradi", "XGBoost / LightGBM / CatBoost"],
          en: ["Bagging: bootstrap + parallel → cuts variance", "Random Forest: Bagging + √p feature subsampling", "Boosting: sequential error correction → cuts bias", "Modern Gradient Boosters: XGBoost, LightGBM, CatBoost"]
        }
      }
    ],
    lab: {
      title: { uz: "L10: Decision Tree vs Random Forest vs Gradient Boosting", en: "L10: Comparing Ensemble Classifiers" },
      tasks: {
        uz: [
          "5 ta modelning Test va 5-fold CV aniqligini solishtiring",
          "Random Forest feature_importances_ orqali top-5 belgini chiqaring"
        ],
        en: [
          "Compare DecisionTree, Bagging, RandomForest, AdaBoost, and GradientBoosting",
          "Inspect top-5 important features from RandomForest"
        ]
      },
      code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier, GradientBoostingClassifier

data = load_breast_cancer()
models = {
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'AdaBoost': AdaBoostClassifier(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, random_state=42),
}
for name, m in models.items():
    print(f"{name:18s} CV={cross_val_score(m, data.data, data.target, cv=5).mean():.3f}")`
    },
    glossary: [
      { uz: "Bagging", en: "Bagging", defUz: "Bootstrap namunalarda parallel modellarni birlashtirish", defEn: "Bootstrap Aggregating: parallel training on resampled subsets" },
      { uz: "Boosting", en: "Boosting", defUz: "Oldingi xatolarni tuzatib ketma-ket o'qitiluvchi ansambl", defEn: "Sequential ensemble focusing on prior misclassifications" }
    ],
    quiz: [
      {
        q: { uz: "Bagging ning asosiy ta'siri nima?", en: "What is the primary benefit of Bagging?" },
        options: [
          { label: 'A', uz: "Biasni oshirish", en: "Increasing bias" },
          { label: 'B', uz: "Dispersiyani (variance) kamaytirish va overfittingni oldini olish", en: "Reducing variance and preventing overfitting" },
          { label: 'C', uz: "K ni tanlash", en: "Selecting K" },
          { label: 'D', uz: "Qatorlarni o'chirish", en: "Deleting rows" }
        ],
        answer: 'B',
        explanation: { uz: "Turli bootstrap daraxtlarni o'rtachalash model barqarorligini oshirib dispersiyani kamaytiradi.", en: "Averaging parallel bootstrap trees stabilizes predictions and lowers variance." }
      },
      {
        q: { uz: "Random Forest oddiy Baggingdan qanday farq qiladi?", en: "How does Random Forest differ from standard Bagging?" },
        options: [
          { label: 'A', uz: "Ketma-ket o'qiydi", en: "Trains sequentially" },
          { label: 'B', uz: "Har tugun bo'linishida atributlarning tasodifiy qism to'plamini tanlaydi", en: "Selects a random subset of features at every split" },
          { label: 'C', uz: "Bootstrap ishlatmaydi", en: "Does not use bootstrap" },
          { label: 'D', uz: "Faqat regressiya uchun", en: "Only for regression" }
        ],
        answer: 'B',
        explanation: { uz: "Atributlarni tasodifiy cheklash daraxtlar orasidagi korrelyatsiyani kamaytiradi.", en: "Random feature subsampling decorrelates trees in the forest." }
      },
      {
        q: { uz: "Boosting da har yangi model nima qiladi?", en: "In Boosting, what does each new learner focus on?" },
        options: [
          { label: 'A', uz: "Mustaqil o'qitiladi", en: "Trained completely independently" },
          { label: 'B', uz: "Oldingi modelning xatolarini tuzatishga harakat qiladi", en: "Correcting mistakes/residuals of previous models" },
          { label: 'C', uz: "Faqat 1 ta belgi oladi", en: "Uses only 1 feature" },
          { label: 'D', uz: "Normallashtiradi", en: "Normalizes data" }
        ],
        answer: 'B',
        explanation: { uz: "Boosting ketma-ket ishlab, og'ir yoki noto'g'ri topilgan namunalarga urg'u beradi.", en: "Sequential boosting targets hard examples or residual gradients." }
      },
      {
        q: { uz: "XGBoost qaysi oilaga kiradi?", en: "Which ensemble family does XGBoost belong to?" },
        options: [
          { label: 'A', uz: "Bagging", en: "Bagging" },
          { label: 'B', uz: "DBSCAN", en: "DBSCAN" },
          { label: 'C', uz: "Gradient Boosting", en: "Gradient Boosting" },
          { label: 'D', uz: "Apriori", en: "Apriori" }
        ],
        answer: 'C',
        explanation: { uz: "XGBoost = Extreme Gradient Boosting.", en: "XGBoost stands for Extreme Gradient Boosting." }
      },
      {
        q: { uz: "Random Forest da feature importance nimani o'lchaydi?", en: "What does Feature Importance in Random Forest measure?" },
        options: [
          { label: 'A', uz: "Har bir atributning bashorat aniqligiga qo'shgan hissasi", en: "Each feature's contribution to impurity reduction / accuracy" },
          { label: 'B', uz: "Qatorlar soni", en: "Number of rows" },
          { label: 'C', uz: "Yetishmayotgan qiymatlar", en: "Missing value count" },
          { label: 'D', uz: "O'rtacha qiymat", en: "Feature mean" }
        ],
        answer: 'A',
        explanation: { uz: "Daraxtlar bo'ylab Gini/Entropiyani eng ko'p kamaytirgan atributlar yuqori ball oladi.", en: "Features yielding larger total impurity decrease receive higher importance." }
      }
    ]
  }
);
