window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== M10 / L10 ====================
  {
    id: 10,
    code: 'M10',
    labCode: 'L10',
    slug: '10-apriori-fpgrowth',
    hours: 2,
    labs: 1,
    keywords: ['Apriori', 'Anti-monotonicity', 'Maximal Frequent Itemset', 'Closed Frequent Itemset', 'FP-Growth', 'FP-Tree', 'Tan Ch.5'],
    title: {
      uz: "Apriori va FP-Growth algoritmlari",
      en: "Apriori & FP-Growth Algorithms"
    },
    description: {
      uz: "Apriori anti-monotonlik prinsipi (Tan 5.2–5.6), F_(k-1)×F_(k-1) kandidat generatsiyasi, Maximal vs Closed Frequent Itemsets va FP-Growth 2-o'tishli daraxti.",
      en: "Apriori downward closure (Tan Ch. 5.2–5.6), candidate generation & pruning, Maximal vs Closed itemsets, and FP-Growth."
    },
    sections: [
      {
        heading: { uz: "10.1. Apriori Prinsipi (Anti-Monotonlik, Tan 5.2)", en: "10.1. The Apriori Principle (Downward Closure)" },
        bodyHtml: {
          uz: "<p><strong>Apriori</strong> (Agrawal &amp; Srikant, 1994) cheksiz kombinatsiyalarni kesib tashlash uchun <strong>Support ning anti-monotonlik xossasiga</strong> tayanadi: $\\forall X \\subseteq Y \\implies \\text{Support}(X) \\ge \\text{Support}(Y)$.</p><p><strong>Apriori prinsipi:</strong> Agar to'plam frequent bo'lsa, uning barcha qism to'plamlari ham frequent; teskarisi — <em>agar to'plam nodir (infrequent) bo'lsa, uni o'z ichiga olgan barcha kattaroq to'plamlar (supersetlar) ham albatta nodirdir va darhol kesiladi!</em></p>",
          en: "<p><strong>Apriori</strong> exploits support's anti-monotone property ($X \\subseteq Y \\implies \\text{Sup}(X) \\ge \\text{Sup}(Y)$): <em>any superset of an infrequent itemset is guaranteed infrequent and pruned immediately!</em></p>"
        },
        widget: 'apriori-lattice'
      },
      {
        heading: { uz: "10.2. Kandidat Generatsiyasi ($F_{k-1} \\times F_{k-1}$) va Trace", en: "10.2. Candidate Generation & Pruning Trace" },
        bodyHtml: {
          uz: "<p>Har bir $k$-darajada ikki bosqich bajariladi: (1) <strong>Join ($F_{k-1} \\times F_{k-1}$):</strong> dastlabki $k-2$ ta elementi bir xil bo'lgan ikki frequent $(k-1)$-to'plamni birlashtirib $C_k$ yasash; (2) <strong>Prune:</strong> $C_k$ dagi biror $(k-1)$-qism to'plam $F_{k-1}$ da yo'q bo'lsa, uni bazani o'qimasdan o'chirish! Qolganlarining supporti sanaladi ($\\text{Hash Tree}$ bilan tezlashtiriladi).</p>",
          en: "<p>Each level runs: (1) <strong>Join ($F_{k-1} \\times F_{k-1}$):</strong> merge pairs sharing $k-2$ prefixes; (2) <strong>Prune:</strong> drop candidates whose $(k-1)$-subsets are not in $F_{k-1}$ before scanning transactions via Hash Tree.</p>"
        }
      },
      {
        heading: { uz: "10.3. Maximal vs Closed Frequent Itemsets (Tan, 5.4-bo'lim)", en: "10.3. Maximal vs Closed Frequent Itemsets (Tan Ch. 5.4)" },
        bodyHtml: {
          uz: "<ul><li><strong>Maximal Frequent Itemset:</strong> Hech bir bevosita kattaroq to'plami (superset) frequent bo'lmagan frequent to'plam. Juda ixcham, lekin quyi to'plamlarning aniq Support qiymatini saqlamaydi.</li><li><strong>Closed Frequent Itemset:</strong> Hech bir bevosita supersetining Support qiymati o'ziniki bilan teng bo'lmagan frequent to'plam — ixcham va barcha Support qiymatlarini <strong>yo'qotishsiz</strong> tiklay oladi!</li></ul>",
          en: "<ul><li><strong>Maximal Frequent Itemset:</strong> Frequent with no frequent immediate supersets (compact, loses subset supports).</li><li><strong>Closed Frequent Itemset:</strong> Frequent with no superset sharing the exact same support (lossless compression!).</li></ul>"
        }
      },
      {
        heading: { uz: "10.4. FP-Growth: Kandidatlarsiz 2-O'tishli Daraxt (Tan, 5.6-bo'lim)", en: "10.4. FP-Growth: Candidate-Free Prefix Tree (Tan Ch. 5.6)" },
        bodyHtml: {
          uz: "<p><strong>FP-Growth (Frequent Pattern Growth)</strong> Apriori ning ko'p marta bazani skanerlash va kandidatlar portlashi muammolarini hal qiladi. U ma'lumotdan <strong>atigi 2 marta</strong> o'tadi:</p><ol><li><strong>1-o'tish:</strong> 1-elementlarni sanab, min_support dan kattalarini chastota kamayishi bo'yicha saralash (F-List).</li><li><strong>2-o'tish:</strong> Har bir tranzaksiyani F-List tartibida siqilgan <strong>FP-Tree (prefix daraxt)</strong> ga joylash.</li><li><strong>Mining:</strong> Eng kam uchraydigan elementdan boshlab Conditional Pattern Base va shartli daraxtlar qurib barcha frequent to'plamlarni chiqarish.</li></ol>",
          en: "<p><strong>FP-Growth</strong> eliminates candidate generation using only <strong>2 dataset scans</strong>: (1) count &amp; sort frequent 1-items descending; (2) insert sorted transactions into a shared-prefix <strong>FP-Tree</strong>, then mine conditional pattern bases bottom-up.</p>"
        },
        table: {
          headers: { uz: ["Mezon", "Apriori", "FP-Growth"], en: ["Criteria", "Apriori", "FP-Growth"] },
          rows: {
            uz: [
              ["Bazadan o'tish", "k + 1 marta (ko'p)", "Atigi 2 marta"],
              ["Kandidat generatsiyasi", "Ha (C_k juda katta)", "Yo'q"],
              ["Tezlik (katta ma'lumotda)", "Sekin", "10x–100x tezroq"]
            ],
            en: [
              ["Database Scans", "k + 1 passes", "Only 2 scans"],
              ["Candidate Sets", "Generates huge C_k", "Zero candidates"],
              ["Runtime on Large Data", "Slow", "10x–100x faster"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "M10: Apriori va FP-Growth algoritmlari", en: "M10: Apriori & FP-Growth Algorithms" }, subtitle: { uz: "Tan Darsligi 5.2–5.6 · MITQ2506 · 80 daqiqa", en: "Tan Ch. 5.2–5.6 · MITQ2506 · 80 min" }, points: { uz: ["Apriori anti-monotonlik prinsipi", "Kandidat generatsiyasi F_(k-1)×F_(k-1) va Prune", "Maximal vs Closed Frequent Itemsets", "FP-Growth: 2 marta o'tish va FP-Tree", "L10 Apriori vs FP-Growth tajribasi"], en: ["Apriori downward closure", "Candidate generation & Hash Tree pruning", "Maximal vs Closed itemsets", "FP-Growth 2-scan FP-Tree", "L10 Apriori vs FP-Growth Lab"] } },
      { title: { uz: "Apriori Prinsipi (Anti-Monotonlik)", en: "The Apriori Principle" }, latex: "X \\subseteq Y \\implies \\text{Support}(X) \\ge \\text{Support}(Y)", points: { uz: ["Agar {Non} frequent bo'lmasa, {Non, Sut} ham hech qachon frequent bo'la olmaydi!", "Shu qoida orqali qidiruv daraxtining ulkan shoxlari tekshirilmasdan kesiladi"], en: ["Every superset of an infrequent itemset is infrequent and pruned immediately"] } },
      { title: { uz: "Interaktiv Apriori Slayderi", en: "Interactive Support/Confidence Filter" }, widget: 'apriori-lattice' },
      { title: { uz: "Apriori Ikki Qadami: Join va Prune", en: "Apriori Step-by-Step: Join & Prune" }, points: { uz: ["1. Join (F_{k-1} × F_{k-1}): dastlabki k-2 elementi bir xil to'plamlarni ulash", "2. Prune: barcha (k-1)-qismlari F_{k-1} da bo'lmagan nomzodlarni bazani o'qimasdan tashlash", "3. Count: qolgan nomzodlarni Hash Tree orqali tranzaksiyalarda sanash"], en: ["Join prefixes, prune candidates with infrequent subsets, then count remaining via Hash Tree"] } },
      { title: { uz: "Qo'lda Trace: 5 ta Chek (min_sup = 60% = 3)", en: "Hand Trace (N=5, min_sup=3)" }, points: { uz: ["T1:{N,S,T}, T2:{N,S}, T3:{N,T}, T4:{S,T}, T5:{N,S,T}", "L1 (≥3): {N}:4, {S}:4, {T}:4", "L2 (≥3): {N,S}:3, {N,T}:3, {S,T}:3", "C3: {N,S,T} → {N,S,T} soni = 2 < 3 → Prune!"], en: ["L1: {B}:4,{M}:4,{E}:4 → L2: {B,M}:3,{B,E}:3,{M,E}:3 → C3 {B,M,E}:2 pruned!"] } },
      { title: { uz: "Maximal vs Closed Frequent Itemsets (Tan 5.4)", en: "Maximal vs Closed Itemsets" }, points: { uz: ["Maximal: hech qaysi superseti frequent emas (eng ixcham, lekin Support yo'qoladi)", "Closed: hech qaysi supersetining Supporti o'ziniki bilan teng emas (yo'qotishsiz siqish!)"], en: ["Maximal: no frequent superset; Closed: no superset with identical support (lossless!)"] } },
      { title: { uz: "Apriori ning 2 ta Asosiy Kamchiligi", en: "Bottlenecks of Apriori" }, points: { uz: ["1. K ta daraja uchun diskdagi bazadan k+1 marta to'liq o'tish (I/O og'ir)", "2. 10,000 ta 1-itemset bo'lsa C₂ da ~50 million juft kandidat hosil bo'ladi!"], en: ["1. Multiple full database scans (k+1 I/O passes)", "2. Huge candidate explosion at C₂ (~50M pairs for 10k items)"] } },
      { title: { uz: "FP-Growth: 2-O'tishli Prefix Daraxt (Tan 5.6)", en: "FP-Growth: 2 Scans, Zero Candidates" }, points: { uz: ["1-o'tish: frequent 1-elementlarni sanab chastota kamayishida saralash", "2-o'tish: cheklarni saralab umumiy ildizli FP-Tree ga joylash", "So'ngra pastdan yuqoriga Conditional Pattern Base orqali rekursiv qazib olish"], en: ["Scan 1: sort frequent 1-items descending; Scan 2: compress into FP-Tree; mine conditional sub-trees"] } },
      { title: { uz: "Talabalarga savol (FP-Growth Tartibi)", en: "Class Discussion: Why Sort Descending?" }, discussion: { q: { uz: "FP-Growth da 2-o'tishdan oldin nima uchun har bir chek elementlari kamayish (eng ko'p uchraydiganidan eng kamiga) tartibida saralanadi?", en: "Why does FP-Growth sort items in each transaction by descending frequency before inserting into the FP-Tree?" }, a: { uz: "Eng ko'p uchraydigan mahsulotlar daraxtning ildiziga yaqin joylashib <strong>maksimal umumiy prefikslarni birlashtiradi</strong> va daraxt xotirasini bir necha baravar kichraytiradi!", en: "Most frequent items sit near the root, <strong>maximizing prefix sharing</strong> and shrinking tree memory dramatically!" } } }
    ],
    lab: {
      title: { uz: "L10: Apriori va FP-Growth algoritmlari yordamida frequent to'plamlarni aniqlash", en: "L10: Apriori vs FP-Growth Performance Lab" },
      objective: { uz: "mlxtend da Apriori va FP-Growth natijalari bir xilligini tasdiqlash, tezligini o'lchash va Maximal itemsetlarni ajratish.", en: "Verify identical itemsets from apriori and fpgrowth, benchmark runtime, and extract maximal itemsets." },
      steps: [
        {
          title: { uz: "500 ta sintetik tranzaksiya yaratish", en: "Generate 500 Market Baskets" },
          desc: { uz: "Kattaroq tranzaksiya bazasi tuzib TransactionEncoder ga bering.", en: "Simulate 500 multi-item baskets for benchmarking." },
          code: `import pandas as pd, numpy as np
from mlxtend.preprocessing import TransactionEncoder

np.random.seed(42)
items = ['Non','Sut','Tuxum','Choy','Shakar','Kofe','Pishloq','Yog','Meva','Sharbat']
baskets = [list(np.random.choice(items, size=np.random.randint(2, 6), replace=False)) for _ in range(500)]
te = TransactionEncoder()
df = pd.DataFrame(te.fit_transform(baskets), columns=te.columns_)
print("Matrix shape:", df.shape)`
        },
        {
          title: { uz: "Apriori vs FP-Growth Tezlik va Natija Taqqoslash", en: "Benchmark Runtime: Apriori vs FP-Growth" },
          desc: { uz: "min_support=0.10 da ikkala algoritm vaqtini o'lchang.", en: "Time both algorithms at min_support=0.10." },
          code: `import time
from mlxtend.frequent_patterns import apriori, fpgrowth

t0 = time.time(); freq_ap = apriori(df, min_support=0.10, use_colnames=True); dt_ap = time.time() - t0
t0 = time.time(); freq_fp = fpgrowth(df, min_support=0.10, use_colnames=True); dt_fp = time.time() - t0
print(f"Apriori: {len(freq_ap)} sets in {dt_ap:.4f}s | FP-Growth: {len(freq_fp)} sets in {dt_fp:.4f}s")`
        },
        {
          title: { uz: "Maximal Frequent Itemsets va Top Qoidalar", en: "Extract Maximal Itemsets & Rules" },
          desc: { uz: "Hech bir supersetiga kirmaydigan maksimal to'plamlarni ajrating.", en: "Filter maximal frequent itemsets and top Lift rules." },
          code: `from mlxtend.frequent_patterns import association_rules
sets = [frozenset(s) for s in freq_fp['itemsets']]
maximal = [s for s in sets if not any(s < other for other in sets)]
print("Maximal itemsets count:", len(maximal))
rules = association_rules(freq_fp, metric="confidence", min_threshold=0.45)
print(rules[['antecedents','consequents','support','confidence','lift']].sort_values('lift', ascending=False).head(5))`
        }
      ],
      variants: {
        uz: [
          "1-variant: min_support=[0.05, 0.10, 0.20] da Apriori va FP-Growth vaqtini solishtiring.",
          "2-variant: Closed frequent itemsets sonini Maximal soni bilan taqqoslang.",
          "3-variant: maxlen=2 qo'yib faqat juftlik qoidalarini chiqaring."
        ],
        en: [
          "Variant 1: Benchmark runtime across min_support=[0.05, 0.10, 0.20].",
          "Variant 2: Count Closed vs Maximal frequent itemsets.",
          "Variant 3: Restrict itemsets using max_len=2."
        ]
      }
    },
    glossary: [
      { uz: "Anti-monotonlik", en: "Anti-monotonicity", defUz: "Katta to'plam supporti kichik to'plamnikidan oshmasligi", defEn: "Superset support ≤ subset support" },
      { uz: "Maximal Itemset", en: "Maximal Itemset", defUz: "Hech bir kattaroq to'plami frequent bo'lmagan to'plam", defEn: "Frequent set with no frequent supersets" },
      { uz: "Closed Itemset", en: "Closed Itemset", defUz: "Xuddi shu supportga ega superseti bo'lmagan to'plam", defEn: "Frequent set with no equal-support superset" },
      { uz: "FP-Tree", en: "FP-Tree", defUz: "Chastota tartibida siqilgan prefix daraxt", defEn: "Compressed prefix tree sorted by item frequency" }
    ],
    quiz: [
      { q: { uz: "Apriori prinsipi (anti-monotonlik) nimani ta'minlaydi?", en: "What does the Apriori principle state?" }, options: [{ label: 'A', uz: "Frequent bo'lmagan to'plamning barcha supersetlari ham frequent emas", en: "All supersets of an infrequent itemset are infrequent" }, { label: 'B', uz: "Lift > 1", en: "Lift > 1" }, { label: 'C', uz: "1 marta o'tish", en: "1 scan" }, { label: 'D', uz: "Barcha to'plam frequent", en: "All sets frequent" }], answer: 'A', explanation: { uz: "Nodir to'plamlardan hosil bo'ladigan kandidatlar oldindan kesiladi.", en: "Downward closure prunes infrequent supersets early." } },
      { q: { uz: "FP-Growth algoritmi bazadan necha marta o'tadi?", en: "How many database scans does FP-Growth require?" }, options: [{ label: 'A', uz: "2 marta", en: "2 scans" }, { label: 'B', uz: "k + 1 marta", en: "k + 1 scans" }, { label: 'C', uz: "10 marta", en: "10 scans" }, { label: 'D', uz: "2^d marta", en: "2^d scans" }], answer: 'A', explanation: { uz: "1-o'tish chastota sanash, 2-o'tish FP-Tree qurish uchun.", en: "Scan 1 counts/sorts items; Scan 2 builds the FP-Tree." } },
      { q: { uz: "Qaysi ixcham to'plam barcha support qiymatlarini YO'QOTISHSIZ tiklay oladi?", en: "Which compact representation is LOSSLESS for exact support values?" }, options: [{ label: 'A', uz: "Closed Frequent Itemset", en: "Closed Frequent Itemset" }, { label: 'B', uz: "Maximal Frequent Itemset", en: "Maximal Frequent Itemset" }, { label: 'C', uz: "Random Subset", en: "Random Subset" }, { label: 'D', uz: "Hash Tree", en: "Hash Tree" }], answer: 'A', explanation: { uz: "Closed to'plamlar quyi to'plamlarning aniq supportini yo'qotmaydi.", en: "Closed itemsets preserve exact support without loss." } },
      { q: { uz: "Apriori da Join (F_{k-1} × F_{k-1}) qaysi shartda birlashtiradi?", en: "When does Apriori join two (k-1)-itemsets?" }, options: [{ label: 'A', uz: "Dastlabki k-2 ta elementi bir xil bo'lganda", en: "When their first k-2 items match" }, { label: 'B', uz: "Tasodifiy", en: "Randomly" }, { label: 'C', uz: "Support teng bo'lganda", en: "Equal support" }, { label: 'D', uz: "Lift > 1 da", en: "Lift > 1" }], answer: 'A', explanation: { uz: "Tartiblangan ro'yxatda dastlabki k-2 prefiks mos kelsa birlashadi.", en: "Merges sorted pairs sharing k-2 prefix items." } },
      { q: { uz: "Nima uchun FP-Growth da elementlar chastota kamayish tartibida saralanadi?", en: "Why are items sorted by descending frequency in FP-Growth?" }, options: [{ label: 'A', uz: "Ildizga yaqin umumiy prefikslar birlashib daraxtni ixchamlash uchun", en: "To maximize shared prefixes near the tree root" }, { label: 'B', uz: "Alifbo tartibi uchun", en: "Alphabetical order" }, { label: 'C', uz: "Hash uchun", en: "Hashing" }, { label: 'D', uz: "Support oshirish uchun", en: "Boost support" }], answer: 'A', explanation: { uz: "Ko'p uchraydigan elementlar ildizda birlashib RAM ni tejaydi.", en: "Frequent roots maximize prefix sharing." } }
    ],
    matching: [
      { left: { uz: "Apriori prinsipi", en: "Apriori Principle" }, right: { uz: "Nodir to'plamning katta to'plami ham nodir", en: "Infrequent subset → infrequent superset" } },
      { left: { uz: "FP-Growth", en: "FP-Growth" }, right: { uz: "2 marta o'tish, kandidat generatsiyasiz FP-Tree", en: "2 scans, candidate-free FP-Tree" } },
      { left: { uz: "Maximal Frequent Itemset", en: "Maximal Frequent Itemset" }, right: { uz: "Frequent superseti yo'q (support yo'qoladi)", en: "No frequent superset (loses exact supports)" } },
      { left: { uz: "Closed Frequent Itemset", en: "Closed Frequent Itemset" }, right: { uz: "Teng supportli superseti yo'q (yo'qotishsiz)", en: "No equal-support superset (lossless)" } }
    ],
    fillGap: [
      { text: { uz: "FP-Growth ma'lumotdan atigi ___ marta o'tib FP-Tree quradi.", en: "FP-Growth builds its FP-Tree in only ___ database scans." }, answer: "2" },
      { text: { uz: "Apriori da kandidatlar sonini tez sanash uchun ___ Tree tuzilmasi ishlatiladi.", en: "Apriori speeds up candidate support counting using a ___ Tree." }, answer: "Hash" },
      { text: { uz: "Agar X ⊆ Y bo'lsa, Support(X) ___ Support(Y) bo'ladi.", en: "If X ⊆ Y, then Support(X) is always ___ than or equal to Support(Y)." }, answer: ["≥", ">=", "katta", "greater"] }
    ]
  },

  // ==================== M11 / L11 ====================
  {
    id: 11,
    code: 'M11',
    labCode: 'L11',
    slug: '11-kmeans-clustering',
    hours: 2,
    labs: 1,
    keywords: ['Clustering', 'Partitional', 'K-Means', 'K-Means++', 'Bisecting K-Means', 'K-Medoids', 'WCSS', 'SSE', 'Elbow', 'Silhouette', 'Tan Ch.7'],
    title: {
      uz: "Klasterlash usullari va K-Means algoritmi",
      en: "Clustering Methods & K-Means Algorithm"
    },
    description: {
      uz: "Klasterlash turlari (Tan 7.1–7.2): Partitional vs Hierarchical, K-Means bosqichlari, SSE/WCSS, K-Means++, Bisecting K-Means, K-Medoids, Elbow va Silhouette.",
      en: "Clustering taxonomy (Tan Ch. 7.1–7.2), K-Means Lloyd algorithm, SSE/WCSS, K-Means++, Bisecting K-Means, K-Medoids, Elbow & Silhouette."
    },
    sections: [
      {
        heading: { uz: "11.1. Klasterlash Tushunchasi va Turlari (Tan, 7.1-bo'lim)", en: "11.1. Clustering Taxonomy (Tan Ch. 7.1)" },
        bodyHtml: {
          uz: "<p><strong>Klasterlash</strong> — yorliqsiz obyektlarni ichki o'xshashligi yuqori, tashqi farqi katta guruhlarga bo'lish (Unsupervised). Tan darsligiga ko'ra:</p><ul><li><strong>Partitional vs Hierarchical:</strong> bo'laklovchi (K-Means — kesishmaydigan klasterlar) vs iyerarxik (ichma-ich daraxt).</li><li><strong>Exclusive vs Overlapping vs Fuzzy:</strong> har nuqta aniq 1 klasterga kiradi vs bir nechtasiga kirishi mumkin vs $[0, 1]$ ehtimolli a'zolik.</li></ul>",
          en: "<p><strong>Clustering</strong> partitions unlabeled data via Partitional vs Hierarchical and Exclusive vs Overlapping/Fuzzy taxonomies (Tan Ch. 7.1).</p>"
        }
      },
      {
        heading: { uz: "11.2. K-Means Bosqichlari, SSE (WCSS) va K-Means++", en: "11.2. K-Means Steps, SSE Objective & K-Means++" },
        bodyHtml: {
          uz: "<p><strong>K-Means</strong> 4 qadamda ishlaydi: (1) $K$ ta markaz tanlash, (2) har nuqtani eng yaqin markazga biriktirish, (3) klaster o'rtachasini yangi markaz qilish, (4) markazlar to'xtaguncha takrorlash. Maqsad — <strong>SSE / WCSS</strong> ni minimallash.</p><p><strong>K-Means++</strong> boshlang'ich markazlarni $D(x)^2$ uzoqlik ehtimoli bilan tarqatib tanlaydi (lokal minimumdan saqlaydi). <strong>Bisecting K-Means</strong> K-Means ni $K=2$ bilan ketma-ket bo'lib lokal minimumlarga chidamliroq natija beradi.</p>",
          en: "<p><strong>K-Means</strong> alternates nearest-centroid assignment and mean updates to minimize <strong>SSE / WCSS</strong>. <strong>K-Means++</strong> spreads seeds using $D(x)^2$ probability; <strong>Bisecting K-Means</strong> recursively splits clusters in two.</p>"
        },
        latex: "\\text{SSE (WCSS)} = \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|_2^2",
        widget: 'kmeans-sim'
      },
      {
        heading: { uz: "11.3. K ni Tanlash: Elbow va Silhouette Ko'rsatkichi", en: "11.3. Selecting K: Elbow & Silhouette Score" },
        bodyHtml: {
          uz: "<p><strong>Elbow usuli:</strong> $K$ ortgan sari WCSS pasayadi; pasayish keskin sekinlashgan \"tirsak\" nuqtasi optimal $K$ ni ko'rsatadi. <strong>Silhouette ko'rsatkichi $s(i) \\in [-1, 1]$</strong>: $+1$ ga yaqin (to'g'ri, zich klaster), $0$ (chegara), $-1$ (noto'g'ri klaster).</p>",
          en: "<p><strong>Elbow Method</strong> picks the bend in WCSS; <strong>Silhouette $s(i) \\in [-1, 1]$</strong> measures cohesion $a(i)$ vs nearest-cluster separation $b(i)$.</p>"
        },
        latex: "s(i) = \\frac{b(i) - a(i)}{\\max(a(i),\\, b(i))}"
      },
      {
        heading: { uz: "11.4. K-Means Cheklovlari va K-Medoids (PAM)", en: "11.4. K-Means Limitations & K-Medoids" },
        bodyHtml: {
          uz: "<p>K-Means faqat <strong>sferik (globular)</strong> klasterlarda yaxshi ishlaydi, <strong>masshtabga sezgir</strong> (StandardScaler kerak) va <strong>outlierlar</strong> o'rtachani (mean) tortib ketadi. Outlierlar ko'p bo'lganda markaz sifatida haqiqiy o'rta nuqta (medoid) oluvchi <strong>K-Medoids</strong> ishlatiladi.</p>",
          en: "<p>K-Means assumes spherical clusters and suffers from outlier mean skew (use <strong>K-Medoids</strong>) and unscaled units.</p>"
        }
      }
    ],
    slides: [
      { title: { uz: "M11: Klasterlash va K-Means algoritmi", en: "M11: Clustering & K-Means" }, subtitle: { uz: "Tan Darsligi 7.1–7.2 · MITQ2506 · 80 daqiqa", en: "Tan Ch. 7.1–7.2 · MITQ2506 · 80 min" }, points: { uz: ["Klasterlash turlari: Partitional vs Hierarchical", "K-Means 4 bosqichi va SSE (WCSS)", "K-Means++ va Bisecting K-Means", "Elbow va Silhouette ko'rsatkichi", "Cheklovlar, K-Medoids va Lab 11"], en: ["Clustering taxonomy (Tan 7.1)", "K-Means steps & SSE/WCSS", "K-Means++ & Bisecting K-Means", "Elbow & Silhouette evaluation", "Limitations, K-Medoids & Lab 11"] } },
      { title: { uz: "Klasterlash Turlari (Tan 7.1)", en: "Clustering Taxonomy" }, points: { uz: ["Partitional: tekis K ta bo'lak (K-Means)", "Hierarchical: ichma-ich daraxt (Dendrogramma)", "Exclusive (hard): 1 nuqta = 1 klaster vs Fuzzy (soft): ehtimollik ulushi"], en: ["Partitional vs Hierarchical; Exclusive vs Overlapping vs Fuzzy"] } },
      { title: { uz: "K-Means 4 ta Bosqichi", en: "K-Means Algorithm Steps" }, points: { uz: ["1. K ta markaz (centroid) tanlash", "2. Har nuqtani eng yaqin centroidga biriktirish", "3. Har klaster o'rtachasini yangi centroid qilish", "4. Markazlar o'zgarmaguncha 2–3 ni takrorlash"], en: ["Init K centroids → Assign nearest → Update means → Repeat until convergence"] } },
      { title: { uz: "SSE (WCSS) va K-Means++", en: "SSE Objective & K-Means++" }, latex: "\\text{WCSS} = \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|^2", points: { uz: ["K-Means++ boshlang'ich markazlarni D(x)² masofa bilan uzoqroq tarqatadi", "Bisecting K-Means: ketma-ket K=2 bo'lib eng katta SSE li klasterni ajratadi"], en: ["K-Means++ spreads initial centroids by D(x)²; Bisecting K-Means splits worst SSE cluster"] } },
      { title: { uz: "Interaktiv K-Means Simulyatori", en: "Interactive K-Means Simulator" }, widget: 'kmeans-sim' },
      { title: { uz: "Qo'lda Trace: 1D [2, 4, 10, 12, 3, 20, 30, 11, 25]", en: "Hand Trace (K=2)" }, points: { uz: ["m₁=3, m₂=20 → chegara 11.5", "C₁: [2, 4, 10, 3, 11] → yangi m₁ = 6.0", "C₂: [12, 20, 30, 25] → yangi m₂ = 21.75"], en: ["C₁=[2,4,10,3,11] → m₁=6.0; C₂=[12,20,30,25] → m₂=21.75"] } },
      { title: { uz: "Optimal K: Elbow va Silhouette", en: "Elbow Method & Silhouette Score" }, latex: "s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))} \\in [-1, 1]", points: { uz: ["Elbow: WCSS pasayishi keskin sekinlashgan tirsak nuqta", "Silhouette: +1 ga yaqin yaxshi ajralgan; 0 chegara; <0 noto'g'ri klaster"], en: ["Elbow finds WCSS bend; Silhouette near +1 means tight well-separated clusters"] } },
      { title: { uz: "Talabalarga savol (K-Means Cheklovlari)", en: "Class Discussion: K-Means Limitations" }, discussion: { q: { uz: "K-Means algoritmi qanday geometrik shakldagi va o'lchamdagi klasterlarda xato ishlaydi?", en: "On what cluster shapes and outlier conditions does K-Means fail?" }, a: { uz: "Sferik bo'lmagan (yarim oy, halqa), zichligi/o'lchami keskin farqli klasterlarda va kuchli outlierlar bor joyda (outlier markazni tortadi; yechim — K-Medoids yoki DBSCAN).", en: "Non-spherical shapes (moons/rings), unequal densities/sizes, and extreme outliers (use K-Medoids or DBSCAN)." } } }
    ],
    lab: {
      title: { uz: "L11: K-Means algoritmi bilan klasterlash va optimal K ni tanlash", en: "L11: K-Means Clustering, Elbow & Silhouette" },
      objective: { uz: "StandardScaler, Elbow (WCSS), Silhouette va K-Means++ ni Python da bajarish.", en: "Scale data, sweep K=2..9 for Elbow & Silhouette, and plot K-Means clusters." },
      steps: [
        {
          title: { uz: "Ma'lumot yaratish va Normallashtirish", en: "Generate & Standardize Data" },
          desc: { uz: "5 ta klasterli datasetni Z-score bilan tayyorlang.", en: "Create blobs and apply StandardScaler." },
          code: `from sklearn.datasets import make_blobs
from sklearn.preprocessing import StandardScaler
X_raw, _ = make_blobs(n_samples=350, centers=5, cluster_std=0.8, random_state=42)
X = StandardScaler().fit_transform(X_raw)
print("Shape:", X.shape)`
        },
        {
          title: { uz: "Elbow (WCSS) va Silhouette (K=2..9)", en: "Elbow & Silhouette Sweep" },
          desc: { uz: "Eng katta Silhouette bergan K ni aniqlang.", en: "Compute inertia_ and silhouette_score across K=2..9." },
          code: `from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
for k in range(2, 10):
    km = KMeans(n_clusters=k, init='k-means++', n_init=10, random_state=42).fit(X)
    print(f"K={k} | WCSS={km.inertia_:6.2f} | Silhouette={silhouette_score(X, km.labels_):.3f}")`
        },
        {
          title: { uz: "Optimal K=5 Natijani Chizish", en: "Visualize K=5 Clusters" },
          desc: { uz: "Klasterlar va centroid yulduzchalarini saqlang.", en: "Plot cluster points and centroids." },
          code: `import matplotlib.pyplot as plt
km = KMeans(n_clusters=5, n_init=10, random_state=42).fit(X)
plt.scatter(X[:,0], X[:,1], c=km.labels_, cmap='tab10', alpha=0.7)
plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:,1], c='black', marker='*', s=200)
plt.title("K-Means (K=5)"); plt.savefig("l11_kmeans.png", dpi=150)`
        }
      ],
      variants: {
        uz: [
          "1-variant: BisectingKMeans(n_clusters=5) bilan oddiy KMeans inertia_ sini taqqoslang.",
          "2-variant: Iris datasetida K=2, 3, 4 uchun Silhouette ko'rsatkichini chiqaring.",
          "3-variant: init='random' va init='k-means++' (n_init=1) farqini ko'rsating."
        ],
        en: [
          "Variant 1: Compare BisectingKMeans vs KMeans inertia_.",
          "Variant 2: Evaluate Silhouette on Iris for K=2, 3, 4.",
          "Variant 3: Compare init='random' vs 'k-means++' with n_init=1."
        ]
      }
    },
    glossary: [
      { uz: "Centroid", en: "Centroid", defUz: "Klasterdagi nuqtalarning arifmetik o'rtacha markazi", defEn: "Arithmetic mean center of cluster" },
      { uz: "WCSS (SSE)", en: "WCSS (SSE)", defUz: "Klaster ichidagi kvadratik xatolar yig'indisi", defEn: "Sum of squared intra-cluster errors" },
      { uz: "K-Means++", en: "K-Means++", defUz: "Markazlarni D(x)² ehtimol bilan tarqatuvchi initsializatsiya", defEn: "Distance-weighted centroid seeding" },
      { uz: "Silhouette", en: "Silhouette", defUz: "Klaster sifatini [-1, 1] oraliqda baholovchi indeks", defEn: "Cohesion vs separation index in [-1, 1]" }
    ],
    quiz: [
      { q: { uz: "K-Means algoritmining asosiy oldindan beriladigan parametri nima?", en: "What must be specified upfront for K-Means?" }, options: [{ label: 'A', uz: "Klasterlar soni K", en: "Number of clusters K" }, { label: 'B', uz: "eps radiusi", en: "eps radius" }, { label: 'C', uz: "min_support", en: "min_support" }, { label: 'D', uz: "max_depth", en: "max_depth" }], answer: 'A', explanation: { uz: "K-Means boshlanishidan avval K soni berilishi shart.", en: "K is a required hyperparameter." } },
      { q: { uz: "Silhouette ko'rsatkichi 1 ga yaqin bo'lsa nimani bildiradi?", en: "What does Silhouette Score close to +1 mean?" }, options: [{ label: 'A', uz: "Yomon klaster", en: "Poor cluster" }, { label: 'B', uz: "Zich va bir-biridan yaxshi ajralgan klasterlar", en: "Dense, well-separated clusters" }, { label: 'C', uz: "Noto'g'ri joylashuv", en: "Wrong cluster" }, { label: 'D', uz: "Shovqin", en: "Noise" }], answer: 'B', explanation: { uz: "+1 ga yaqinlashish yaxshi ichki zichlik va tashqi ajralishni ko'rsatadi.", en: "Values near +1 mean tight cohesion and strong separation." } },
      { q: { uz: "K-Means++ nimani yaxshilaydi?", en: "What does K-Means++ improve?" }, options: [{ label: 'A', uz: "Boshlang'ich markazlarni tarqatib yomon lokal minimumdan saqlaydi", en: "Spreads initial seeds to avoid poor local minima" }, { label: 'B', uz: "Halqalarni ajratadi", en: "Separates rings" }, { label: 'C', uz: "Outlierlarni o'chiradi", en: "Deletes outliers" }, { label: 'D', uz: "K ni o'zi topadi", en: "Finds K" }], answer: 'A', explanation: { uz: "D(x)² ehtimolli tanlov markazlarni turli hududlarga qo'yadi.", en: "Distance-weighted seeding improves convergence." } },
      { q: { uz: "Elbow usulida 'tirsak' nuqtasi nimani ko'rsatadi?", en: "What does the Elbow bend indicate?" }, options: [{ label: 'A', uz: "Optimal K qiymati", en: "Optimal K" }, { label: 'B', uz: "Outlier soni", en: "Outlier count" }, { label: 'C', uz: "Minimal aniqlik", en: "Min accuracy" }, { label: 'D', uz: "Iteratsiya", en: "Iterations" }], answer: 'A', explanation: { uz: "WCSS pasayishi keskin sekinlashgan nuqta optimal K ni beradi.", en: "Inflection point where marginal SSE gain drops." } },
      { q: { uz: "Outlierlar ko'p bo'lganda o'rtacha (mean) o'rniga haqiqiy nuqtani markaz qiluvchi alternativ qaysi?", en: "Which alternative uses actual data points (medoids) to resist outliers?" }, options: [{ label: 'A', uz: "K-Medoids (PAM)", en: "K-Medoids (PAM)" }, { label: 'B', uz: "ID3", en: "ID3" }, { label: 'C', uz: "Apriori", en: "Apriori" }, { label: 'D', uz: "Naive Bayes", en: "Naive Bayes" }], answer: 'A', explanation: { uz: "K-Medoids o'rtacha emas haqiqiy median-nuqtani markaz qiladi.", en: "K-Medoids resists outliers by picking real representative points." } }
    ],
    matching: [
      { left: { uz: "K-Means", en: "K-Means" }, right: { uz: "Sferik klasterlar, SSE/WCSS minimallashtiradi", en: "Spherical clusters minimizing SSE/WCSS" } },
      { left: { uz: "K-Means++", en: "K-Means++" }, right: { uz: "D(x)² masofa bilan markaz initsializatsiyasi", en: "Smart D(x)² centroid seeding" } },
      { left: { uz: "Silhouette s(i)", en: "Silhouette s(i)" }, right: { uz: "(b - a) / max(a, b) ∈ [-1, 1]", en: "(b - a) / max(a, b) ∈ [-1, 1]" } },
      { left: { uz: "K-Medoids", en: "K-Medoids" }, right: { uz: "Outlierlarga chidamli haqiqiy nuqta markazi", en: "Outlier-robust real-point centers" } }
    ],
    fillGap: [
      { text: { uz: "K-Means klaster ichidagi kvadrat xatolar yig'indisi ___ (WCSS) ni minimallaydi.", en: "K-Means minimizes Within-Cluster Sum of Squares, also known as ___." }, answer: ["SSE", "Inertia"] },
      { text: { uz: "Silhouette ko'rsatkichi ___ dan +1 gacha oraliqda bo'ladi.", en: "Silhouette scores range from ___ to +1." }, answer: "-1" },
      { text: { uz: "K-Means markazni ___ (mean) bilan yangilagani uchun outlierlarga sezgir.", en: "K-Means updates centroids using the arithmetic ___, making it outlier-sensitive." }, answer: ["o'rtacha", "mean"] }
    ]
  },

  // ==================== M12 / L12 ====================
  {
    id: 12,
    code: 'M12',
    labCode: 'L12',
    slug: '12-hierarchical-dbscan',
    hours: 2,
    labs: 1,
    keywords: ['Hierarchical', 'Agglomerative', 'Dendrogram', 'Single Linkage', 'Complete Linkage', 'Ward', 'DBSCAN', 'Core Point', 'Tan Ch.7'],
    title: {
      uz: "Iyerarxik klasterlash va zichlikka asoslangan klasterlash algoritmlari",
      en: "Hierarchical & Density-Based (DBSCAN) Clustering"
    },
    description: {
      uz: "Agglomerative vs Divisive (Tan 7.3–7.4), MIN/MAX/Average/Ward linkage, Dendrogramma, DBSCAN (eps, minPts, Core/Border/Noise), k-distance va algoritm tanlash mezonlari.",
      en: "Agglomerative vs Divisive (Tan Ch. 7.3–7.4), linkage methods, Dendrograms, DBSCAN Core/Border/Noise, and algorithm selection."
    },
    sections: [
      {
        heading: { uz: "12.1. Iyerarxik Klasterlash: Agglomerative va Linkage (Tan, 7.3-bo'lim)", en: "12.1. Hierarchical Clustering & Linkage (Tan Ch. 7.3)" },
        bodyHtml: {
          uz: "<p><strong>Agglomerative (Pastdan yuqoriga):</strong> $N$ ta yakka nuqtadan boshlab, eng yaqin juftliklarni birlashtirib <strong>Dendrogramma</strong> quradi (Y o'qi — birlashish masofasi). <strong>Divisive</strong> esa aksincha bitta umumiy klasterdan bo'lib boradi.</p>",
          en: "<p><strong>Agglomerative</strong> merges $N$ singletons bottom-up into a <strong>Dendrogram</strong> (Y-axis = merge distance). Four main linkage criteria:</p>"
        },
        table: {
          headers: { uz: ["Linkage usuli", "Ta'rif", "Xususiyat / Cheklov"], en: ["Linkage", "Definition", "Properties"] },
          rows: {
            uz: [
              ["MIN (Single)", "Eng yaqin juft nuqtalar masofasi", "Chiziqsiz shakllarni topadi, lekin <em>Chaining</em> (shovqin zanjiri) xavfi bor"],
              ["MAX (Complete)", "Eng uzoq juft nuqtalar masofasi", "Kompakt klasterlar quradi, outlierga sezgir"],
              ["Group Average", "Barcha juftlar o'rtacha masofasi", "Single va Complete orasidagi muvozanat"],
              ["Ward's Method", "$\\Delta \\text{WCSS}$ o'sishini minimallaydi", "Eng ko'p qo'llaniladi; teng o'lchamli kompakt guruhlar"]
            ],
            en: [
              ["MIN (Single)", "Closest pair distance", "Handles non-elliptical shapes; chaining across noise"],
              ["MAX (Complete)", "Farthest pair distance", "Tight diameters; sensitive to outliers"],
              ["Group Average", "Mean pairwise distance", "Balanced compromise"],
              ["Ward's Method", "Minimizes $\\Delta\\text{WCSS}$", "Most popular default; compact balanced clusters"]
            ]
          }
        }
      },
      {
        heading: { uz: "12.2. Zichlikka Asoslangan DBSCAN (Tan, 7.4-bo'lim)", en: "12.2. Density-Based DBSCAN (Tan Ch. 7.4)" },
        bodyHtml: {
          uz: "<p><strong>DBSCAN</strong> ikkita parametr ishlatadi: <code>eps (ε)</code> radius va <code>min_samples (MinPts)</code>. Har nuqta 3 turga bo'linadi: <strong>Core Point</strong> ($\\ge \\text{MinPts}$ qo'shni), <strong>Border Point</strong> (Core qo'shnisi) va <strong>Noise (-1)</strong> (shovqin/outlier).</p><p>Afzalligi: $K$ ni oldindan berish shart emas, yarim oy/halqa kabi ixtiyoriy shakllarni topadi va shovqinni avtomatik ajratadi. <code>eps</code> ni tanlashda <strong>k-distance grafigi</strong> dagi \"tizza\" nuqtasidan foydalaniladi. Turli zichliklar uchun <strong>HDBSCAN</strong> afzal.</p>",
          en: "<p><strong>DBSCAN</strong> classifies points as <strong>Core</strong>, <strong>Border</strong>, or <strong>Noise (-1)</strong> via <code>eps</code> and <code>min_samples</code>. Needs no $K$, handles arbitrary shapes, and isolates noise. Pick <code>eps</code> from the $k$-distance knee.</p>"
        },
        widget: 'dbscan-sim'
      },
      {
        heading: { uz: "12.3. Klasterlash Algoritmini Tanlash Mezonlari", en: "12.3. Criteria for Choosing a Clustering Algorithm" },
        table: {
          headers: { uz: ["Mezon", "K-Means", "Hierarchical (Ward)", "DBSCAN"], en: ["Criteria", "K-Means", "Hierarchical", "DBSCAN"] },
          rows: {
            uz: [
              ["K oldindan kerakmi?", "Ha", "Yo'q (kesishda)", "Yo'q"],
              ["Klaster shakli", "Faqat sferik", "Linkage ga bog'liq", "Ixtiyoriy (yarim oy, halqa)"],
              ["Shovqin (Outlier)", "Markazni buzadi", "Klasterni kengaytiradi", "Avtomatik -1 (Noise)"],
              ["Katta hajmda tezlik", "Juda tez O(n)", "Sekin O(n²)", "Tez O(n log n)"]
            ],
            en: [
              ["Requires K?", "Yes", "No (cut tree)", "No"],
              ["Shape", "Spherical", "Depends on linkage", "Arbitrary non-convex"],
              ["Noise", "Skews centroids", "Merged in", "Explicit Noise (-1)"],
              ["Scalability", "Very fast O(n)", "Slow O(n²)", "O(n log n) spatial"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "M12: Iyerarxik va DBSCAN klasterlash", en: "M12: Hierarchical & DBSCAN Clustering" }, subtitle: { uz: "Tan Darsligi 7.3–7.4 · MITQ2506 · 80 daqiqa", en: "Tan Ch. 7.3–7.4 · MITQ2506 · 80 min" }, points: { uz: ["Agglomerative vs Divisive iyerarxiya", "MIN (Single), MAX (Complete), Average, Ward linkage", "Dendrogramma o'qish va kesish", "DBSCAN: Core, Border, Noise va k-distance", "Algoritm tanlash mezonlari va Lab 12"], en: ["Agglomerative vs Divisive", "MIN, MAX, Average & Ward linkage", "Reading & cutting dendrograms", "DBSCAN Core/Border/Noise & k-distance", "Algorithm selection & Lab 12"] } },
      { title: { uz: "Agglomerative (Pastdan Yuqoriga) Bosqichlari", en: "Agglomerative Clustering" }, points: { uz: ["N ta yakka nuqtadan boshlanadi", "Eng yaqin ikki klaster ketma-ket birlashadi", "Dendrogramma Y o'qi birlashish masofasini ko'rsatadi", "Xotira talabi O(n²) — katta datada sekin"], en: ["Starts with N singletons, merges closest pair iteratively; Y-axis = merge distance"] } },
      { title: { uz: "Linkage Usullari Taqqoslash (Tan 7.3)", en: "Linkage Criteria Compared" }, table: { headers: { uz: ["Usul", "Ta'rif", "Xavf/Afzallik"], en: ["Method", "Rule", "Behavior"] }, rows: { uz: [["Single (MIN)", "Eng yaqin juft", "Chaining effekti"], ["Complete (MAX)", "Eng uzoq juft", "Kompakt sharlar"], ["Average", "O'rtacha masofa", "Muvozanatli"], ["Ward", "ΔWCSS min", "Eng barqaror"]], en: [["Single", "Min dist", "Chaining"], ["Complete", "Max dist", "Tight"], ["Average", "Mean dist", "Balanced"], ["Ward", "Min ΔWCSS", "Best default"]] } } },
      { title: { uz: "DBSCAN: Zichlikka Asoslangan Klasterlash (Tan 7.4)", en: "DBSCAN Density Concepts" }, points: { uz: ["Parametrlar: eps (ε radius) va min_samples (MinPts)", "Core Point: ε radiusda ≥ min_samples nuqta bor", "Border Point: yadro emas, lekin Core ga ε masofada", "Noise (-1): hech qaysi yadroga kirmagan shovqin"], en: ["Core (≥minPts in eps), Border (within eps of Core), Noise (-1)"] } },
      { title: { uz: "Interaktiv DBSCAN Simulyatori", en: "Interactive DBSCAN Simulator" }, widget: 'dbscan-sim' },
      { title: { uz: "k-Distance Grafigi bilan eps Tanlash", en: "Choosing eps via k-Distance Plot" }, points: { uz: ["Har nuqtaning k=MinPts-eng yaqin qo'shnisigacha masofasini saralab chizamiz", "Grafik keskin ko'tarilgan 'tizza' (knee) nuqtasi optimal eps!", "Turli zichlikdagi klasterlar uchun HDBSCAN ishlatiladi"], en: ["Plot sorted k-NN distances; sharp knee marks ideal eps! Use HDBSCAN for varying densities"] } },
      { title: { uz: "Talabalarga savol (DBSCAN vs K-Means)", en: "Class Discussion: Algorithm Choice" }, discussion: { q: { uz: "Yo'l bo'ylab cho'zilgan GPS avariya nuqtalarida ko'p tasodifiy yakka nuqtalar (shovqin) bor. K-Means, Ward yoki DBSCAN dan qaysi birini tanlaysiz?", en: "For elongated GPS accident hotspots along roads with random isolated noise, pick K-Means, Ward, or DBSCAN?" }, a: { uz: "<strong>DBSCAN!</strong> U K talab qilmaydi, yo'l bo'ylab egri shakllarni ajratadi va yakka nuqtalarni Noise (-1) deb tozalaydi.", en: "<strong>DBSCAN!</strong> Handles elongated road shapes without needing K and filters noise as -1." } } }
    ],
    lab: {
      title: { uz: "L12: Iyerarxik va DBSCAN algoritmlari yordamida klasterlash", en: "L12: Hierarchical Dendrograms & DBSCAN Clustering" },
      objective: { uz: "make_moons datasetida Ward dendrogramma qurish, k-distance orqali eps topish va DBSCAN bilan shovqinni ajratish.", en: "Build a Ward dendrogram, inspect k-distance for eps, and cluster make_moons with DBSCAN." },
      steps: [
        {
          title: { uz: "Ward Linkage Dendrogrammasi", en: "Ward Linkage Dendrogram" },
          desc: { uz: "30 ta namunada SciPy linkage va dendrogram chizing.", en: "Plot a Ward dendrogram on 30 samples." },
          code: `from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler
from scipy.cluster.hierarchy import dendrogram, linkage
import matplotlib.pyplot as plt

X_raw, _ = make_moons(n_samples=200, noise=0.09, random_state=42)
X = StandardScaler().fit_transform(X_raw)
Z = linkage(X[:30], method='ward')
plt.figure(figsize=(9, 4)); dendrogram(Z); plt.title("Ward Dendrogram"); plt.savefig("l12_dendro.png", dpi=150)`
        },
        {
          title: { uz: "Agglomerative (Single vs Ward) va DBSCAN", en: "Agglomerative vs DBSCAN on Moons" },
          desc: { uz: "DBSCAN(eps=0.35, min_samples=5) klaster va shovqin sonini chiqaring.", en: "Run DBSCAN and count clusters vs noise (-1)." },
          code: `from sklearn.cluster import AgglomerativeClustering, DBSCAN
agg = AgglomerativeClustering(n_clusters=2, linkage='single').fit_predict(X)
db = DBSCAN(eps=0.35, min_samples=5).fit_predict(X)
n_cl = len(set(db)) - (1 if -1 in db else 0)
print(f"DBSCAN: {n_cl} clusters | Noise (-1): {list(db).count(-1)}")`
        },
        {
          title: { uz: "k-Distance bilan Optimal eps ni Tekshirish", en: "Check 5-NN Distances for eps" },
          desc: { uz: "NearestNeighbors bilan 5-eng yaqin masofalar taqsimotini ko'ring.", en: "Inspect 90th percentile of 5-NN distances." },
          code: `from sklearn.neighbors import NearestNeighbors
import numpy as np
d, _ = NearestNeighbors(n_neighbors=5).fit(X).kneighbors(X)
print("5-NN 90th percentile:", round(np.percentile(d[:, -1], 90), 3))`
        }
      ],
      variants: {
        uz: [
          "1-variant: make_circles(factor=0.4, noise=0.05) da K-Means vs DBSCAN ni solishtiring.",
          "2-variant: eps=[0.15, 0.35, 0.8] uchun DBSCAN klaster va shovqin sonini jadval qiling.",
          "3-variant: AgglomerativeClustering da linkage='single','complete','average','ward' larni sinang."
        ],
        en: [
          "Variant 1: Compare K-Means vs DBSCAN on make_circles.",
          "Variant 2: Sweep eps across [0.15, 0.35, 0.8] and log noise counts.",
          "Variant 3: Compare all 4 linkage options on make_blobs."
        ]
      }
    },
    glossary: [
      { uz: "Dendrogramma", en: "Dendrogram", defUz: "Klasterlar birlashish daraxtini ko'rsatuvchi diagramma", defEn: "Tree diagram encoding hierarchical merges" },
      { uz: "Ward's Method", en: "Ward's Method", defUz: "Klasterlashda WCSS o'sishini minimallovchi linkage usuli", defEn: "Linkage minimizing ΔWCSS" },
      { uz: "Core Point", en: "Core Point", defUz: "eps radiusda kamida min_samples qo'shnisi bor nuqta", defEn: "Point with ≥ min_samples neighbors inside eps" },
      { uz: "Noise (-1)", en: "Noise (-1)", defUz: "DBSCAN da hech qaysi klasterga kirmagan past zichlikli nuqta", defEn: "Outlier point not density-reachable from any core" }
    ],
    quiz: [
      { q: { uz: "Dendrogrammada Y o'qi nimani ifodalaydi?", en: "What does the Y-axis represent in a dendrogram?" }, options: [{ label: 'A', uz: "Klasterlar birlashtirilgan masofa", en: "Merge distance/dissimilarity" }, { label: 'B', uz: "Klaster soni", en: "Cluster count" }, { label: 'C', uz: "Iteratsiya", en: "Iterations" }, { label: 'D', uz: "Shovqin", en: "Noise" }], answer: 'A', explanation: { uz: "Balandlik ikki tarmoq birlashgan masofani ko'rsatadi.", en: "Height encodes linkage merge distance." } },
      { q: { uz: "DBSCAN da shovqin nuqta (-1) qaysi?", en: "Which point is labeled Noise (-1) in DBSCAN?" }, options: [{ label: 'A', uz: "Core point", en: "Core point" }, { label: 'B', uz: "Border point", en: "Border point" }, { label: 'C', uz: "Na Core, na Core ga yetadigan Border nuqta", en: "Neither Core nor within eps of a Core point" }, { label: 'D', uz: "Centroid", en: "Centroid" }], answer: 'C', explanation: { uz: "Siyrak hududdagi izolyatsiyalangan nuqtalar Noise (-1) bo'ladi.", en: "Unreachable points in sparse voids become Noise (-1)." } },
      { q: { uz: "DBSCAN K-Means dan nimasi bilan ustun?", en: "What is DBSCAN's main advantage over K-Means?" }, options: [{ label: 'A', uz: "K siz ixtiyoriy shakldagi klasterlar va shovqinni aniqlaydi", en: "Finds arbitrary shapes & noise without requiring K" }, { label: 'B', uz: "Doim tezroq", en: "Always faster" }, { label: 'C', uz: "Parametrsiz", en: "Zero parameters" }, { label: 'D', uz: "Faqat 1D", en: "1D only" }], answer: 'A', explanation: { uz: "Zichlik zanjiri sferik bo'lmagan shakllarni ham ajratadi.", en: "Density connectivity handles non-convex shapes." } },
      { q: { uz: "Agglomerative klasterlash qanday boshlanadi?", en: "How does Agglomerative clustering begin?" }, options: [{ label: 'A', uz: "1 klasterdan", en: "1 cluster" }, { label: 'B', uz: "Har bir obyekt alohida klasterdan (N ta)", en: "Each point starts as its own singleton cluster" }, { label: 'C', uz: "K ta markazdan", en: "K centroids" }, { label: 'D', uz: "Random", en: "Random" }], answer: 'B', explanation: { uz: "Pastdan yuqoriga N ta yakka nuqtadan birlashtirib boradi.", en: "Bottom-up merging starts from N singletons." } },
      { q: { uz: "Ward's linkage nimani minimallaydi?", en: "What does Ward's linkage minimize?" }, options: [{ label: 'A', uz: "WCSS (klaster ichidagi dispersiya) o'sishini", en: "Increase in within-cluster variance (WCSS)" }, { label: 'B', uz: "Eng yaqin juft masofasi", en: "Minimum pair distance" }, { label: 'C', uz: "Eng uzoq juft masofasi", en: "Max distance" }, { label: 'D', uz: "Klaster sonini", en: "Cluster count" }], answer: 'A', explanation: { uz: "Ward eng kam kvadratik xato ortishini beruvchi juftni qo'shadi.", en: "Ward merges pairs minimizing ΔWCSS." } }
    ],
    matching: [
      { left: { uz: "Ward's Linkage", en: "Ward's Linkage" }, right: { uz: "ΔWCSS o'sishini minimallaydi", en: "Minimizes ΔWCSS increase" } },
      { left: { uz: "Single (MIN) Linkage", en: "Single (MIN) Linkage" }, right: { uz: "Chaining (uzun zanjir) effektiga moyil", en: "Prone to chaining across noise" } },
      { left: { uz: "Core Point (DBSCAN)", en: "Core Point (DBSCAN)" }, right: { uz: "eps radiusda ≥ min_samples qo'shni bor", en: "Has ≥ min_samples within eps" } },
      { left: { uz: "k-Distance Grafigi", en: "k-Distance Plot" }, right: { uz: "DBSCAN uchun optimal eps ni topish usuli", en: "Finds optimal eps at elbow knee" } }
    ],
    fillGap: [
      { text: { uz: "Agglomerative klasterlash natijasi ___ deb ataluvchi daraxtda tasvirlanadi.", en: "Hierarchical merging is visualized as a tree called a ___." }, answer: ["Dendrogramma", "Dendrogram"] },
      { text: { uz: "Scikit-Learn da DBSCAN shovqin nuqtalarni ___ yorlig'i bilan belgilaydi.", en: "DBSCAN labels isolated noise points as ___." }, answer: "-1" },
      { text: { uz: "Turli zichlikdagi klasterlarni ajratishda DBSCAN o'rniga ___ qo'llaniladi.", en: "For clusters of varying densities, use ___ instead of global-eps DBSCAN." }, answer: "HDBSCAN" }
    ]
  }
);
