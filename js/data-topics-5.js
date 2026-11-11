window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  // ==================== TOPIC 13 ====================
  {
    id: 13,
    slug: '13-stream-mining',
    hours: 2,
    labs: 0,
    keywords: ['Stream Mining', 'Sliding Window', 'Reservoir Sampling', 'Bloom Filter', 'Flajolet-Martin', 'HyperLogLog', 'Count-Min Sketch', 'Concept Drift', 'Kafka'],
    title: {
      uz: "Oqimli ma'lumotlar tahlili",
      en: "Data Stream Mining"
    },
    description: {
      uz: "Cheksiz oqim cheklovlari, Sliding Window & Reservoir Sampling, Bloom Filter, Flajolet-Martin / HyperLogLog, Count-Min Sketch, Concept Drift (ADWIN) va Kafka/Flink.",
      en: "Stream constraints, Sliding Windows & Reservoir Sampling, Bloom Filter, HyperLogLog, Count-Min Sketch, Concept Drift, and Kafka/Flink."
    },
    sections: [
      {
        heading: { uz: "13.1. Ma'lumot Oqimi (Data Stream) va 4 ta Qattiq Cheklov", en: "13.1. Data Streams & The Single-Pass Constraints" },
        bodyHtml: {
          uz: "<p><strong>Ma'lumot oqimi</strong> (IoT sensorlar, VISA/Mastercard tranzaksiyalari, klik oqimlari) cheksiz va yuqori tezlikda keladi. An'anaviy Data Mining dan farqli o'laroq, bu yerda 4 ta qat'iy cheklov amal qiladi:</p><ul><li><strong>Cheksiz hajm:</strong> barcha tarixni RAM ga ham, diskka ham sig'dirib bo'lmaydi.</li><li><strong>Bir martalik o'qish (Single-Pass):</strong> har element faqat 1 marta ko'riladi va o'tkazib yuboriladi.</li><li><strong>Past kechikish (Real-Time):</strong> firibgarlik javobi millisekundlarda chiqishi shart.</li><li><strong>Statsionar emaslik:</strong> ma'lumot taqsimoti vaqt o'tishi bilan o'zgaradi (Concept Drift).</li></ul>",
          en: "<p><strong>Data Streams</strong> are unbounded, high-velocity sequences requiring single-pass algorithms under strict RAM limits, millisecond latency, and non-stationary distributions.</p>"
        }
      },
      {
        heading: { uz: "13.2. Sliding Window va Reservoir Sampling", en: "13.2. Sliding Windows & Reservoir Sampling" },
        bodyHtml: {
          uz: "<p><strong>Sliding Window</strong> faqat eng so'nggi $W$ ta element (<em>Count-based</em>) yoki so'nggi $T$ daqiqani (<em>Time-based</em>) saqlaydi. Agar cheksiz oqimdan $k$ ta bir tekis tasodifiy namuna olish kerak bo'lsa, <strong>Reservoir Sampling</strong> qo'llaniladi: $i$-element ($i > k$) $k/i$ ehtimol bilan rezervuar ichidagi tasodifiy element o'rniga qo'yiladi.</p>",
          en: "<p><strong>Sliding Windows</strong> keep the latest $N$ items or $T$ minutes. <strong>Reservoir Sampling</strong> maintains a uniform random sample of size $k$ over an unknown stream length by replacing an element at step $i$ with probability $k/i$.</p>"
        },
        widget: 'stream-sim'
      },
      {
        heading: { uz: "13.3. Probabilistik Tuzilmalar (Sketching Algorithms)", en: "13.3. Probabilistic Sketch Structures" },
        table: {
          headers: { uz: ["Algoritm / Tuzilma", "Hal qiladigan masala", "Xotira va Xato xususiyati"], en: ["Sketch Structure", "Task Solved", "Memory & Error Guarantee"] },
          rows: {
            uz: [
              ["Bloom Filter", "Element oqimda bo'lganmi? (Membership)", "Bit massivi + $h$ ta hash; <strong>False Positive mumkin, False Negative = 0%</strong>"],
              ["Flajolet-Martin / HyperLogLog", "Nechta noyob (distinct) foydalanuvchi kirdi?", "Oxirgi nollarni sanaydi; 1 mlrd noyob IP ni atigi ~1.5 KB RAM da ~2% aniqlikda hisoblaydi!"],
              ["Count-Min Sketch", "Element necha marta keldi? (Heavy Hitters)", "2D hisoblagich jadvali; faqat yuqoriga baholaydi (never underestimates)"]
            ],
            en: [
              ["Bloom Filter", "Set membership test", "Bit array + hash functions; <strong>Possible FP, 0% FN</strong>"],
              ["Flajolet-Martin / HLL", "Distinct cardinality count", "Counts trailing zeros; counts 1B uniques in ~1.5 KB RAM"],
              ["Count-Min Sketch", "Approximate item frequencies", "2D hash table; never underestimates frequency"]
            ]
          }
        }
      },
      {
        heading: { uz: "13.4. Konsept Dreyfi (Concept Drift) va Moslashish", en: "13.4. Concept Drift Types & Adaptation" },
        bodyHtml: {
          uz: "<p><strong>Concept Drift</strong> — $P(y|X)$ yoki $P(X)$ taqsimotining vaqt o'tishi bilan o'zgarishi. 4 ta asosiy ko'rinishi: <strong>Sudden</strong> (kutilmagan sakrash — pandemiya), <strong>Gradual</strong> (asta almashish), <strong>Incremental</strong> (doimiy siljish — inflyatsiya), <strong>Recurring</strong> (mavsumiy qaytish — qish/yoz).</p><p><strong>Detektorlar:</strong> <em>DDM</em> (xato ortishini kuzatadi) va <em>ADWIN</em> (ikki qo'shni oyna o'rtachalarini solishtiradi). Sanoat tizimlari: <strong>Apache Kafka</strong>, <strong>Apache Flink</strong>, <strong>Spark Streaming</strong>.</p>",
          en: "<p><strong>Concept Drift</strong> shifts $P(y|X)$ over time via Sudden, Gradual, Incremental, or Recurring patterns. Detected via <strong>DDM</strong> / <strong>ADWIN</strong> and executed at scale with <strong>Kafka + Flink / Spark Streaming</strong>.</p>"
        },
        latex: "P_{\\text{Bloom FP}} \\approx \\left(1 - e^{-kn/m}\\right)^k"
      }
    ],
    slides: [
      { title: { uz: "13-mavzu: Oqimli ma'lumotlar tahlili", en: "Topic 13: Data Stream Mining" }, subtitle: { uz: "Sliding Window · Sketches · Concept Drift · Kafka/Flink (80 daqiqa)", en: "Real-Time Streaming, Sketches & Concept Drift (80 min)" }, points: { uz: ["Batch vs Stream Processing va 4 ta cheklov", "Count/Time Sliding Window va Reservoir Sampling", "Bloom Filter, Flajolet-Martin (HLL), Count-Min Sketch", "Concept Drift turlari va ADWIN detektori", "Apache Kafka / Flink arxitekturasi va Lab 13"], en: ["Batch vs Stream & single-pass constraints", "Sliding Windows & Reservoir Sampling", "Bloom Filter, HyperLogLog & Count-Min Sketch", "Concept Drift types & ADWIN", "Kafka / Flink stack & Lab 13"] } },
      { title: { uz: "An'anaviy (Batch) vs Oqimli (Stream) Tahlil", en: "Batch Mining vs Stream Mining" }, table: { headers: { uz: ["Mezon", "Batch (CSV/SQL)", "Data Stream"], en: ["Criteria", "Batch", "Stream"] }, rows: { uz: [["Hajm", "Chekli", "Cheksiz"], ["O'qish", "Ko'p marta", "Faqat 1 marta (One-Pass)"], ["Vaqt", "Daqiqalar/soatlar", "Millisekundlar"], ["Xotira", "Disk + RAM", "Kichik RAM buferi"]], en: [["Size", "Bounded", "Unbounded"], ["Passes", "Random multi-pass", "Single-pass"], ["Latency", "Minutes/Hours", "Milliseconds"], ["Storage", "Full disk table", "Compact synopsis"]] } } },
      { title: { uz: "Sliding Window (Sirpanuvchi Oyna)", en: "Sliding Window Strategies" }, points: { uz: ["Count-based: faqat eng so'nggi N ta voqeani saqlash (deque(maxlen=N))", "Time-based: so'nggi 5 daqiqa yoki 1 soat ichidagi tranzaksiyalar", "Tumbling Window: ustma-ust tushmaydigan bo'laklar [0-5m], [5-10m]", "Hopping Window: har 1 daqiqada 5 daqiqalik oyna siljiydi"], en: ["Count-based: latest N events", "Time-based: events in last T minutes", "Tumbling vs Hopping/Sliding window semantics"] } },
      { title: { uz: "Interaktiv Sliding Window va Concept Drift", en: "Interactive Stream Window & Drift Lab" }, widget: 'stream-sim' },
      { title: { uz: "Reservoir Sampling (Cheksiz oqimdan tekis namuna)", en: "Reservoir Sampling" }, latex: "P(\\text{keep } x_i) = \\frac{k}{i} \\quad (i > k)", points: { uz: ["Oqim uzunligi N oldindan noma'lum bo'lsa ham k ta elementni teng 1/N ehtimol bilan saqlaydi!", "1..k elementlarni rezervuar ga qo'ying; i > k kelganda k/i ehtimol bilan tasodifiy joyni almashtiring"], en: ["Maintains a uniform random sample of size k without knowing stream length N", "Replace random slot in reservoir with probability k/i"] } },
      { title: { uz: "Bloom Filter: Tez Mavjudlik Tekshiruvi", en: "Bloom Filter: Bit-Array Membership" }, latex: "P(FP) \\approx \\left(1 - e^{-kn/m}\\right)^k", points: { uz: ["m bitli massiv (boshida hammasi 0) + k ta hash funksiyasi", "Qo'shish: h₁(x)..h_k(x) indekslarni 1 ga o'zgartirish", "Tekshirish: agar birorta bit 0 bo'lsa → 100% YO'Q (False Negative = 0)!", "Agar hammasi 1 bo'lsa → 'Ehtimol BOR' (kichik False Positive mumkin)"], en: ["m-bit array + k independent hashes", "If any hashed bit is 0 → 100% ABSENT (zero False Negatives)", "If all hashed bits are 1 → PROBABLY PRESENT (tiny FP risk)"] } },
      { title: { uz: "Talabalarga savol (Bloom Filter)", en: "Class Discussion: Bloom Filter" }, discussion: { q: { uz: "Brauzerda 10 millionta zararli URL ni tekshirishda Bloom Filter 'Bu sayt xavfsiz (yo'q)' dedi. Biz asosiy bazadan qayta tekshirishimiz shartmi?", en: "A browser's Bloom Filter for 10M malicious URLs reports 'Not in blacklist'. Must we still query the remote database?" }, a: { uz: "YO'Q! Bloom Filter da <strong>False Negative umuman bo'lmaydi</strong> — agar u 'yo'q' desa, sayt 100% ro'yxatda yo'q! Faqat 'bor' degan kamyob holatlardagina bazadan tasdiqlanadi.", en: "NO! Bloom Filters have <strong>zero False Negatives</strong>. Remote DB lookup is only needed when the filter returns 'probably present'." } } },
      { title: { uz: "Flajolet-Martin va HyperLogLog (Noyob Elementlar)", en: "Flajolet-Martin & HyperLogLog" }, points: { uz: ["Masala: Kuniga 100 million so'rovdan nechta NOYOB IP manzil keldi?", "Exact HashSet ~4 GB RAM yeydi; HyperLogLog atigi 1.5 KB RAM da 98% aniqlik beradi!", "G'oya: hash ning oxiridagi ketma-ket nollar soni R bo'lsa, taxminan 2^R ta noyob element ko'rilgan"], en: ["Exact Set of 100M IPs costs GBs; HyperLogLog uses ~1.5 KB RAM!", "Intuition: observing max trailing zeros R in hashes estimates ~2^R distinct items"] } },
      { title: { uz: "Count-Min Sketch (Chastota Taxminlash)", en: "Count-Min Sketch for Frequencies" }, points: { uz: ["Trenddagi Top-10 hashtag yoki og'ir IP larni topish (Heavy Hitters)", "d qator × w ustunli jadval; har qator alohida hash bilan +1 qo'shadi", "Natija: barcha d ta qatordagi qiymatlarning MINIMUM ini olish (hech qachon kamaytirib ko'rsatmaydi!)"], en: ["Tracks heavy hitters in d × w counter matrix using d hashes", "Query returns MIN across rows (only overestimates due to collisions)"] } },
      { title: { uz: "Concept Drift (Konsept Dreyfi) Turlari", en: "4 Patterns of Concept Drift" }, points: { uz: ["Sudden: keskin o'zgarish (COVID-19 paytida xarid xulqi)", "Gradual: yangi odat eski odatni sekin almashtiradi", "Incremental: uzluksiz siljish (narx inflyatsiyasi)", "Recurring: mavsumiy qaytish (qishki kiyim savdosi)"], en: ["Sudden: abrupt regime shift (lockdowns)", "Gradual: oscillating transition between concepts", "Incremental: steady slow shift", "Recurring: seasonal cycles returning"] } },
      { title: { uz: "Drift Detektorlari va Zamonaviy Oqim Tizimlari", en: "Drift Detection & Streaming Stack" }, points: { uz: ["ADWIN (Adaptive Windowing): oyna ichida ikki bo'lak o'rtachasi keskin farq qilsa eski qismni kesib tashlaydi", "Apache Kafka (Message Broker) → Apache Flink / Spark Streaming (Processing)"], en: ["ADWIN dynamically shrinks window when sub-window means diverge", "Production stack: Apache Kafka + Apache Flink / Spark Streaming"] } }
    ],
    lab: {
      title: { uz: "L13: Sliding Window, Bloom Filter va Concept Drift Detektori", en: "L13: Sliding Window, Bloom Filter & Drift Detector" },
      objective: { uz: "Python da xotirasi cheklangan Bloom Filter sinfini yozish, ADWIN-uslubidagi oyna orqali Concept Drift ni aniqlash va oqim anomaliyalarini topish.", en: "Implement a lightweight Bloom Filter, simulate Concept Drift, and detect stream anomalies." },
      steps: [
        {
          title: { uz: "Minimal Bloom Filter Implementatsiyasi", en: "Implement a Vanilla Python Bloom Filter" },
          desc: { uz: "hashlib yordamida bit massivida mavjudlikni tekshiring.", en: "Build a compact Bloom Filter using hashlib." },
          code: `import hashlib

class SimpleBloomFilter:
    def __init__(self, size=256, k=3):
        self.size, self.k = size, k
        self.bits = [0] * size
    def _hashes(self, item):
        return [int(hashlib.md5(f"{i}:{item}".encode()).hexdigest(), 16) % self.size for i in range(self.k)]
    def add(self, item):
        for idx in self._hashes(item): self.bits[idx] = 1
    def might_contain(self, item):
        return all(self.bits[idx] == 1 for idx in self._hashes(item))

bf = SimpleBloomFilter()
for card in ["4111-0001", "5500-9999"]: bf.add(card)
print("4111-0001:", bf.might_contain("4111-0001"), "| 9999-0000:", bf.might_contain("9999-0000"))`
        },
        {
          title: { uz: "Sliding Window va Concept Drift Simulyatsiyasi", en: "Sliding Window Anomaly & Concept Drift Detection" },
          desc: { uz: "t=150 da o'rtacha 50 dan 75 ga sakragan oqimda 3σ anomaliyalar va driftni tuting.", en: "Detect 3σ spikes and mean drift at t=150." },
          code: `import numpy as np
from collections import deque

np.random.seed(42)
stream = np.concatenate([np.random.normal(50, 4, 150), np.random.normal(75, 4, 150)])
stream[70] = 95  # point spike
win = deque(maxlen=30)
spikes, drifts = [], []
prev_mean = None

for t, val in enumerate(stream):
    if len(win) >= 15:
        mu, sd = np.mean(win), np.std(win) + 1e-9
        if abs(val - mu) / sd > 3.2: spikes.append(t)
        if prev_mean is not None and abs(mu - prev_mean) > 8: drifts.append(t)
        if t % 30 == 0: prev_mean = mu
    win.append(val)
print("Spikes:", spikes, "| First Drift Flag:", drifts[:3])`
        },
        {
          title: { uz: "Reservoir Sampling (k=5)", en: "Uniform Reservoir Sampling (k=5)" },
          desc: { uz: "300 ta oqim elementidan teng ehtimolli 5 ta namuna oling.", en: "Maintain a uniform 5-item reservoir across 300 streamed points." },
          code: `import random
random.seed(42)
reservoir, k = [], 5
for i, val in enumerate(stream, 1):
    if i <= k: reservoir.append(round(float(val), 2))
    else:
        j = random.randint(1, i)
        if j <= k: reservoir[j - 1] = round(float(val), 2)
print("Final uniform reservoir sample:", reservoir)`
        }
      ],
      variants: {
        uz: [
          "1-variant: Bloom Filter o'lchamini m=64 dan m=1024 gacha oshirib 100 ta yangi so'zdagi False Positive foizini o'lchang.",
          "2-variant: Sliding Window o'lchamini W=10 vs W=60 qilib Concept Drift ga moslashish tezligini solishtiring.",
          "3-variant: Exponential Moving Average (EMA: α=0.2) bilan oddiy Sliding Window o'rtachasini taqqoslang."
        ],
        en: [
          "Variant 1: Measure empirical False Positive rate for Bloom Filter size m=[64, 256, 1024].",
          "Variant 2: Compare adaptation speed for Sliding Window W=10 vs W=60 after drift.",
          "Variant 3: Compare Exponential Moving Average (α=0.2) against fixed Sliding Window."
        ]
      }
    },
    glossary: [
      { uz: "Sliding Window", en: "Sliding Window", defUz: "Oqimning faqat oxirgi N ta yoki T daqiqalik bo'lagini saqlovchi bufer", defEn: "Bounded FIFO buffer tracking latest N items or T minutes" },
      { uz: "Bloom Filter", en: "Bloom Filter", defUz: "Nol false-negative bilan to'plamga tegishlilikni tekshiruvchi bit massivi", defEn: "Space-efficient probabilistic membership filter (0% FN)" },
      { uz: "HyperLogLog", en: "HyperLogLog", defUz: "Kichik xotirada milliardlab noyob elementlarni sanovchi sketch", defEn: "Probabilistic cardinality estimator using trailing zero bits" },
      { uz: "Concept Drift", en: "Concept Drift", defUz: "Vaqt o'tishi bilan ma'lumot taqsimotining o'zgarishi", defEn: "Shift in data distribution P(y|X) over time" }
    ],
    quiz: [
      { q: { uz: "Ma'lumot oqimida \"Concept Drift\" nima?", en: "What is Concept Drift?" }, options: [{ label: 'A', uz: "Tarmoq uzilishi", en: "Network crash" }, { label: 'B', uz: "Vaqt o'tishi bilan ma'lumot taqsimotining o'zgarishi", en: "Shift in data distribution over time" }, { label: 'C', uz: "Disk to'lishi", en: "Disk full" }, { label: 'D', uz: "K ni kamaytirish", en: "Reducing K" }], answer: 'B', explanation: { uz: "Eski model yangi reallikda aniqligini yo'qotadi.", en: "Static models degrade when underlying patterns shift." } },
      { q: { uz: "Count-based Sliding Window nima saqlaydi?", en: "What does a count-based Sliding Window retain?" }, options: [{ label: 'A', uz: "Barcha tarixni", en: "All history" }, { label: 'B', uz: "Eng so'nggi N ta elementni", en: "Most recent N items" }, { label: 'C', uz: "Faqat outlierlarni", en: "Only outliers" }, { label: 'D', uz: "Faqat 1-elementni", en: "Only first item" }], answer: 'B', explanation: { uz: "Yangi element kirganda eng eskisi chiqariladi.", en: "Fixed-capacity FIFO window." } },
      { q: { uz: "Bloom Filter qaysi xatoga yo'l qo'yishi mumkin?", en: "Which error can a Bloom Filter make?" }, options: [{ label: 'A', uz: "False Negative", en: "False Negative" }, { label: 'B', uz: "False Positive (yo'q elementni bor deyishi mumkin)", en: "False Positive (may report absent item as present)" }, { label: 'C', uz: "Ikkalasi ham", en: "Both" }, { label: 'D', uz: "Hech qanday", en: "None" }], answer: 'B', explanation: { uz: "Bit to'qnashuvi tufayli FP bo'lishi mumkin, FN=0.", en: "Hash collisions only produce False Positives, never False Negatives." } },
      { q: { uz: "Noyob foydalanuvchilar sonini kichik RAM da taxminlash uchun qaysi algoritm ishlatiladi?", en: "Which sketch estimates distinct item counts in kilobytes of RAM?" }, options: [{ label: 'A', uz: "Flajolet-Martin / HyperLogLog", en: "Flajolet-Martin / HyperLogLog" }, { label: 'B', uz: "K-Means", en: "K-Means" }, { label: 'C', uz: "Apriori", en: "Apriori" }, { label: 'D', uz: "CART", en: "CART" }], answer: 'A', explanation: { uz: "HyperLogLog milliardlab noyob elementlarni ~1.5 KB da sanaydi.", en: "Counts distinct elements via hash bit patterns." } },
      { q: { uz: "Reservoir Sampling (k=10) qanday muammoni hal qiladi?", en: "What does Reservoir Sampling solve?" }, options: [{ label: 'A', uz: "Cheksiz oqimdan tekis tasodifiy namuna olish", en: "Uniform random sampling from an unbounded stream" }, { label: 'B', uz: "Normallashtirish", en: "Scaling" }, { label: 'C', uz: "Pruning", en: "Pruning" }, { label: 'D', uz: "Matn tokenlash", en: "Tokenization" }], answer: 'A', explanation: { uz: "N noma'lum bo'lsa ham har bir element 10/N ehtimol bilan saqlanadi.", en: "Guarantees exact uniform sampling over unknown stream length." } }
    ]
  },

  // ==================== TOPIC 14 ====================
  {
    id: 14,
    slug: '14-privacy',
    hours: 2,
    labs: 0,
    keywords: ['Privacy', 'Re-identification', 'GDPR', 'Quasi-Identifier', 'k-Anonymity', 'l-Diversity', 't-Closeness', 'Differential Privacy', 'Laplace'],
    title: {
      uz: "Maxfiylikni saqlash (Privacy-Preserving DM)",
      en: "Privacy-Preserving Data Mining"
    },
    description: {
      uz: "Re-identification hujumlari (Netflix/Sweeney), GDPR tamoyillari, k-Anonymity, Homogenlik/Fon bilimi hujumlari, l-Diversity, t-Closeness va Differential Privacy.",
      en: "Re-identification attacks, GDPR principles, k-Anonymity, Homogeneity/Background attacks, l-Diversity, t-Closeness, and Differential Privacy."
    },
    sections: [
      {
        heading: { uz: "14.1. Nega \"Ismni O'chirish\" Yetarli Emas? (Re-Identification)", en: "14.1. Why Dropping Names Fails: Re-Identification" },
        bodyHtml: {
          uz: "<p>Latanya Sweeney (2000) AQSh aholisining <strong>87% ini</strong> atigi 3 ta oddiy ustun orqali noyob aniqlash mumkinligini isbotladi: <strong>Pochta indeksi + Tug'ilgan sana + Jins</strong>! U ommaviy saylovchilar ro'yxatini \"anonim\" tibbiy jadval bilan bog'lab gubernatorning kasallik varaqasini topdi.</p><p><strong>Atributlarning 3 turi:</strong> 1) <em>Explicit Identifiers</em> (Ism, JSHSHIR — o'chiriladi); 2) <em>Quasi-Identifiers (QI)</em> (Yosh, Jins, Shahar — umumlashtiriladi); 3) <em>Sensitive Attributes</em> (Kasallik, Maosh — saqlanadi).</p>",
          en: "<p>Sweeney proved <strong>87% of US citizens</strong> are uniquely identified by just <strong>ZIP + Birthdate + Gender</strong>. Tables have Explicit Identifiers (dropped), <strong>Quasi-Identifiers (QI)</strong> (generalized), and Sensitive Attributes (protected).</p>"
        }
      },
      {
        heading: { uz: "14.2. GDPR Asosiy Tamoyillari", en: "14.2. GDPR Legal Framework" },
        bodyHtml: {
          uz: "<p><strong>GDPR (2018)</strong> shaxsiy ma'lumotlarni himoya qilish bo'yicha oltin standart bo'lib, 6 tamoyilga tayanadi: Maqsadga cheklov, Minimal yig'ish, Aniqlik, Saqlash muddati, Xavfsizlik va <strong>Unutilish huquqi (Right to be Forgotten)</strong>. Jarimalar: €20M yoki global aylanmaning 4% gacha.</p>",
          en: "<p><strong>GDPR (2018)</strong> mandates purpose limitation, data minimization, consent, and the <strong>Right to Erasure</strong>, with fines up to €20M or 4% of global revenue.</p>"
        }
      },
      {
        heading: { uz: "14.3. k-Anonymity, l-Diversity va t-Closeness", en: "14.3. k-Anonymity, l-Diversity & t-Closeness" },
        bodyHtml: {
          uz: "<ul><li><strong>k-Anonymity:</strong> Har bir QI guruhida (equivalence class) kamida $k$ ta yozuv bo'ladi (Generalization &amp; Suppression orqali). <em>Zaifligi:</em> agar barcha $k$ ta bemorda bir xil kasallik (masalan, Saraton) bo'lsa, <strong>Homogeneity Attack</strong> bilan sir fosh bo'ladi!</li><li><strong>l-Diversity:</strong> Har ekvivalentlik guruhida kamida $l$ ta turli sezgir qiymat bo'lishini talab qiladi. <em>Zaifligi:</em> 99% sog'lom va 1% kasal populyatsiyada bitta guruhda 50% kasal bo'lsa, xavf qoladi (Skewness attack).</li><li><strong>t-Closeness:</strong> Guruh ichidagi sezgir taqsimot butun jadval taqsimotidan $t$ (Earth Mover's Distance) dan ortiq farq qilmasligi shart.</li></ul>",
          en: "<ul><li><strong>k-Anonymity:</strong> ≥$k$ identical QIs per class (vulnerable to <em>Homogeneity Attacks</em>).</li><li><strong>l-Diversity:</strong> ≥$l$ distinct sensitive values per class (vulnerable to <em>Skewness/Similarity</em>).</li><li><strong>t-Closeness:</strong> class distribution stays within distance $t$ of the global distribution.</li></ul>"
        }
      },
      {
        heading: { uz: "14.4. Differential Privacy va Laplace Mexanizmi", en: "14.4. Differential Privacy & Laplace Mechanism" },
        bodyHtml: {
          uz: "<p><strong>Differential Privacy (Dwork, 2006)</strong> eng kuchli matematik kafolatni beradi: jadvalda sizning yozuvingiz bor yoki yo'qligidan qat'i nazar, tahlil natijasi deyarli bir xil chiqadi. Bu kalibrlangan <strong>Laplace shovqini</strong> orqali ta'minlanadi:</p><p>Bu yerda $\\Delta f$ — sezgirlik (bitta shaxs qo'shilsa natija ko'pi bilan qanchaga o'zgaradi; sanash so'rovida $\\Delta f = 1$), $\\varepsilon$ — <strong>maxfiylik byudjeti</strong> (kichik $\\varepsilon$ = kuchli maxfiylik, katta shovqin).</p>",
          en: "<p><strong>Differential Privacy</strong> guarantees any individual's presence barely changes query outputs by adding calibrated <strong>Laplace noise</strong> scaled to $\\Delta f / \\varepsilon$:</p>"
        },
        latex: "\\Pr[\\mathcal{M}(D_1) \\in S] \\le e^{\\varepsilon}\\Pr[\\mathcal{M}(D_2) \\in S], \\qquad \\tilde{f}(D) = f(D) + \\text{Lap}\\left(\\frac{\\Delta f}{\\varepsilon}\\right)",
        widget: 'privacy-sim'
      }
    ],
    slides: [
      { title: { uz: "14-mavzu: Maxfiylikni saqlash", en: "Topic 14: Privacy-Preserving Data Mining" }, subtitle: { uz: "Re-identification · GDPR · k-Anonymity · l-Diversity · Differential Privacy (80 daqiqa)", en: "Anonymization Models & Differential Privacy (80 min)" }, points: { uz: ["Nega ismni o'chirish yetarli emas? (Sweeney 87%, Netflix)", "GDPR tamoyillari va Unutilish huquqi", "k-Anonymity (Generalization/Suppression) va Homogenlik hujumi", "l-Diversity va t-Closeness", "Differential Privacy (ε byudjeti) va Lab 14"], en: ["Why dropping names fails (Sweeney 87%, Netflix)", "GDPR principles & Right to be Forgotten", "k-Anonymity & Homogeneity Attack", "l-Diversity & t-Closeness", "Differential Privacy (Laplace noise) & Lab 14"] } },
      { title: { uz: "Mashhur Re-Identification Hujumlari", en: "Famous Re-Identification Cases" }, points: { uz: ["Latanya Sweeney (2000): ZIP + Tug'ilgan sana + Jins AQShning 87% ini noyob aniqlaydi!", "Netflix Prize (2006): 500,000 anonim kino baholari IMDb bilan bog'lanib shaxslar fosh etildi", "NYC Taxi (2014): MD5 hash bilan yashirilgan haydovchi ID lari oddiy brute-force bilan ochildi"], en: ["Sweeney (2000): 87% of US uniquely identified by ZIP + DOB + Gender", "Netflix (2006): anonymized movie ratings linked to public IMDb profiles", "NYC Taxi (2014): MD5-hashed medallion IDs cracked in minutes"] } },
      { title: { uz: "Jadval Ustunlarining 3 Turi", en: "3 Categories of Attributes" }, table: { headers: { uz: ["Tur", "Misol", "Nima qilinadi?"], en: ["Category", "Examples", "Treatment"] }, rows: { uz: [["Explicit ID", "Ism, Pasport, Tel", "To'liq o'chiriladi"], ["Quasi-Identifier (QI)", "Yosh, Jins, Shahar, ZIP", "Umumlashtirish / Suppression"], ["Sensitive", "Kasallik, Maosh", "Saqlanadi (tahlil uchun)"]], en: [["Explicit ID", "Name, SSN, Phone", "Dropped"], ["Quasi-Identifier", "Age, Gender, ZIP", "Generalized / Suppressed"], ["Sensitive", "Diagnosis, Salary", "Retained for analysis"]] } } },
      { title: { uz: "GDPR Qoidalari (2018)", en: "GDPR Core Principles" }, points: { uz: ["Purpose Limitation: faqat ruxsat berilgan maqsadda ishlatish", "Data Minimization: ortiqcha shaxsiy ma'lumot yig'maslik", "Right to be Forgotten: foydalanuvchi talabi bilan to'liq o'chirish", "Jarima: €20 million yoki yillik global tushumning 4% gacha"], en: ["Purpose Limitation & Data Minimization", "Explicit Consent & Right to Erasure", "Fines up to €20M or 4% of annual global turnover"] } },
      { title: { uz: "k-Anonymity (Generalization & Suppression)", en: "k-Anonymity Mechanism" }, points: { uz: ["Qoida: Har bir QI kombinatsiyasi kamida k ta qatorda takrorlanishi shart", "Generalization: Yosh 25 → '20-29', Andijon → 'Farg'ona vodiysi'", "Suppression: noyob qiymatni '*' bilan yashirish", "Muvozanat: k oshgan sari maxfiylik ortadi, lekin ma'lumot aniqligi (Information Utility) kamayadi!"], en: ["Every quasi-identifier group must have size ≥ k", "Generalize ages into bins & suppress rare cells with '*'", "Trade-off: larger k = stronger anonymity, lower analytical utility"] } },
      { title: { uz: "k-Anonymity Hujumlari: Homogeneity & Background", en: "Attacks Breaking k-Anonymity" }, discussion: { q: { uz: "Jadval 3-Anonymous: [20-30, Erkak, Toshkent] guruhidagi 3 bemorning uchalasida ham Kasallik = 'Diabet'. Ali shu guruhda ekani ma'lum. Bu xavfsizmi?", en: "In a 3-anonymous table, all 3 patients in [20–30, Male, Tashkent] have Disease = 'Diabetes'. We know Ali is in this group. Is Ali's privacy protected?" }, a: { uz: "YO'Q! <strong>Homogenlik hujumi (Homogeneity Attack):</strong> Ali qaysi satr ekanini bilmasak ham, uchalasi bir xil bo'lgani uchun Ali 100% Diabet ekanini bilib olamiz!", en: "NO! Under a <strong>Homogeneity Attack</strong>, we immediately deduce Ali has Diabetes with 100% certainty!" } } },
      { title: { uz: "l-Diversity va t-Closeness", en: "l-Diversity & t-Closeness" }, points: { uz: ["l-Diversity: har bir QI guruhida kamida l ta TURLI sezgir qiymat bo'lishi shart (Homogenlikni yopadi)", "Skewness Attack: agar umumiy aholida kasallik 1%, bir guruhda esa 50% bo'lsa — xavf saqlanadi", "t-Closeness: har guruhdagi sezgir taqsimot umumiy taqsimotdan t dan kam farq qilishi kerak"], en: ["l-Diversity demands ≥ l distinct sensitive values per equivalence class", "t-Closeness bounds the distribution distance between each class and the whole table"] } },
      { title: { uz: "Differential Privacy (Farqli Maxfiylik)", en: "Differential Privacy (DP)" }, latex: "\\tilde{f}(D) = f(D) + \\text{Lap}\\left(\\frac{\\Delta f}{\\varepsilon}\\right)", points: { uz: ["Matematik kafolat: sizning ma'lumotingiz bazada bor-yo'qligi natijaga deyarli ta'sir qilmaydi", "ε (epsilon) — maxfiylik byudjeti: kichik ε (0.1) → ko'p shovqin, kuchli maxfiylik", "Katta ε (5.0) → kam shovqin, yuqori aniqlik, zaif maxfiylik", "Amalda: Apple iOS klaviatura statistikasi, Google Chrome RAPPOR, AQSh 2020 Census"], en: ["Formal guarantee independent of any adversary background knowledge", "Calibrated Laplace noise scales with sensitivity Δf / ε", "Used at scale by Apple, Google, and US Census 2020"] } },
      { title: { uz: "Interaktiv Differential Privacy (ε Byudjeti) Simulyatori", en: "Interactive Differential Privacy Slider" }, widget: 'privacy-sim' },
      { title: { uz: "Federated Learning (Qisqa Sharh)", en: "Bonus: Federated Learning" }, points: { uz: ["Ma'lumotni markaziy serverga yig'masdan, telefonning o'zida modelni o'qitib faqat gradient/vaznlarni uzatish", "Differential Privacy + Federated Learning zamonaviy tibbiy AI asosidir"], en: ["Train models locally on edge devices and aggregate encrypted weights", "Combines cleanly with Differential Privacy for healthcare AI"] } }
    ],
    lab: {
      title: { uz: "L14: k-Anonymity, l-Diversity Audit va Laplace Differential Privacy", en: "L14: Auditing k-Anonymity, l-Diversity & Laplace DP" },
      objective: { uz: "Quasi-identifierlarni umumlashtirish orqali k-anonymity va l-diversity ni tekshirish hamda Differential Privacy bilan ε ta'sirini o'lchash.", en: "Generalize QIs to audit k-anonymity & l-diversity, and measure Laplace DP error across ε." },
      steps: [
        {
          title: { uz: "Asl jadvalda re-identification xavfini tekshirish", en: "Audit Raw Table Uniqueness" },
          desc: { uz: "Ism o'chirilganda ham necha foiz odam noyob bo'lib qolishini ko'ring.", en: "Check how many rows remain uniquely identifiable after dropping Name." },
          code: `import pandas as pd
df = pd.DataFrame({
    'Ism': ['Ali','Vali','Zulfiya','Malika','Behruz','Sardor','Nodira','Jasur'],
    'Yosh': [24, 27, 32, 34, 25, 28, 31, 35],
    'Jins': ['M','M','F','F','M','M','F','M'],
    'Shahar': ['Andijon','Toshkent','Andijon','Samarqand','Toshkent','Andijon','Samarqand','Toshkent'],
    'Kasallik': ['Diabet','Gripp','Saraton','Diabet','Diabet','Gripp','Bronxit','Diabet']
})
raw_k = df.groupby(['Yosh','Jins','Shahar']).size().min()
print("Raw min k (after dropping Ism):", raw_k)`
        },
        {
          title: { uz: "Generalization orqali k-Anonymity va l-Diversity tekshirish", en: "Generalize QIs & Verify k-Anonymity / l-Diversity" },
          desc: { uz: "Yoshni 10 yillik oralig'iga, Shaharni esa umumiy 'Hudud' ga aylantiring.", en: "Generalize Age into decades and City into Region." },
          code: `anon = df.drop(columns=['Ism']).copy()
anon['Yosh_Guruh'] = pd.cut(anon['Yosh'], bins=[19,29,39], labels=['20-29','30-39'])
anon['Hudud'] = anon['Shahar'].map({'Andijon':'Vodiy','Toshkent':'Markaz','Samarqand':'Markaz'})
groups = anon.groupby(['Yosh_Guruh','Jins','Hudud'], observed=True)['Kasallik']
print("Group sizes (k):", groups.size().to_dict())
print("Distinct diseases (l):", groups.nunique().to_dict())`
        },
        {
          title: { uz: "Differential Privacy: ε = 0.2 vs 1.0 vs 5.0 Tajribasi", en: "Laplace Mechanism Error vs Privacy Budget ε" },
          desc: { uz: "Diabet kasalligi sonini DP bilan 1000 marta so'rab o'rtacha xatoni o'lchang.", en: "Measure MAE of DP count queries across 1000 trials." },
          code: `import numpy as np
np.random.seed(42)
true_cnt = int((df['Kasallik'] == 'Diabet').sum())
for eps in [0.2, 1.0, 5.0]:
    noisy = [true_cnt + np.random.laplace(0, 1.0/eps) for _ in range(1000)]
    mae = np.mean(np.abs(np.array(noisy) - true_cnt))
    print(f"eps={eps:3.1f} | True={true_cnt} | Mean Abs Error={mae:.2f}")`
        }
      ],
      variants: {
        uz: [
          "1-variant: Barcha guruhlarda min k ≥ 2 va min l ≥ 2 bo'lishi uchun Jins ustunini ham '*' bilan suppression qilib tekshiring.",
          "2-variant: Maosh (0..20 mln) o'rtachasini chiqarishda sensitivity Δf ni hisoblab Laplace mexanizmini yozing.",
          "3-variant: k-anonymized ma'lumotda qaror daraxti aniqligi asl ma'lumotga nisbatan qanchaga tushishini o'lchang."
        ],
        en: [
          "Variant 1: Suppress Gender where needed to guarantee k ≥ 2 and l ≥ 2 everywhere.",
          "Variant 2: Compute bounded-sum sensitivity Δf for mean salary DP query.",
          "Variant 3: Measure classification accuracy loss before vs after k-anonymization."
        ]
      }
    },
    glossary: [
      { uz: "Quasi-Identifier", en: "Quasi-Identifier", defUz: "Birgalikda shaxsni aniqlashi mumkin bo'lgan umumiy atributlar (Yosh, Jins, ZIP)", defEn: "Attributes that together can re-identify individuals" },
      { uz: "k-Anonymity", en: "k-Anonymity", defUz: "Har ekvivalentlik sinfida kamida k ta farqlanmas yozuv bo'lishi", defEn: "Each QI equivalence class contains ≥ k records" },
      { uz: "l-Diversity", en: "l-Diversity", defUz: "Har guruhda kamida l ta turli sezgir qiymat bo'lishi talabi", defEn: "Each class has ≥ l distinct sensitive values" },
      { uz: "Differential Privacy", en: "Differential Privacy", defUz: "Kalibrlangan shovqin orqali yakka shaxs ishtirokini yashiruvchi kafolat", defEn: "Mathematical bound ε on individual influence via noise" }
    ],
    quiz: [
      { q: { uz: "Latanya Sweeney tadqiqotiga ko'ra aholining ~87% ini qaysi 3 ustun noyob aniqlaydi?", en: "According to Sweeney, which 3 QIs uniquely identify ~87% of US citizens?" }, options: [{ label: 'A', uz: "Pochta indeksi (ZIP), Tug'ilgan sana, Jins", en: "ZIP code, Birthdate, Gender" }, { label: 'B', uz: "Ism, Familiya, Email", en: "Name, Surname, Email" }, { label: 'C', uz: "Bo'y, Vazn, Qon guruhi", en: "Height, Weight, Blood type" }, { label: 'D', uz: "Faqat IP", en: "IP only" }], answer: 'A', explanation: { uz: "Ism bo'lmasa ham bu 3 ta Quasi-Identifier shaxsni ochadi.", en: "ZIP + DOB + Gender uniquely identifies 87% of people." } },
      { q: { uz: "k-Anonymity da k=5 nimani bildiradi?", en: "What does k=5 mean in k-Anonymity?" }, options: [{ label: 'A', uz: "5 ta ustun o'chirilgan", en: "5 columns dropped" }, { label: 'B', uz: "Har shaxs kamida 4 ta boshqa shaxs bilan bir xil QI ga ega", en: "Each record shares QIs with at least 4 others" }, { label: 'C', uz: "5 ta klaster", en: "5 clusters" }, { label: 'D', uz: "5% shovqin", en: "5% noise" }], answer: 'B', explanation: { uz: "Har ekvivalentlik sinfida kamida 5 ta yozuv bo'ladi.", en: "Minimum equivalence class size is 5." } },
      { q: { uz: "l-Diversity qaysi hujumni bartaraf etadi?", en: "Which attack does l-Diversity prevent?" }, options: [{ label: 'A', uz: "Homogenlik hujumi (guruhdagi hamma bir xil kasallikda bo'lishi)", en: "Homogeneity attack (identical sensitive value in a group)" }, { label: 'B', uz: "SQL injection", en: "SQL injection" }, { label: 'C', uz: "DDoS", en: "DDoS" }, { label: 'D', uz: "Overfitting", en: "Overfitting" }], answer: 'A', explanation: { uz: "Guruhda kamida l ta turli sezgir qiymat bo'lishini majbur qiladi.", en: "Guarantees diversity of sensitive attributes inside each class." } },
      { q: { uz: "Differential Privacy da ε (epsilon) kichrayganda nima bo'ladi?", en: "When ε decreases in Differential Privacy, what happens?" }, options: [{ label: 'A', uz: "Maxfiylik kuchayadi, shovqin ortib aniqlik kamayadi", en: "Stronger privacy, larger noise, lower accuracy" }, { label: 'B', uz: "Maxfiylik zaiflashadi", en: "Weaker privacy" }, { label: 'C', uz: "Shovqin nol bo'ladi", en: "Zero noise" }, { label: 'D', uz: "Jadval o'chadi", en: "Table deleted" }], answer: 'A', explanation: { uz: "Laplace masshtabi Δf / ε ga teng — kichik ε katta shovqin beradi.", en: "Smaller ε increases Laplace noise scale Δf/ε." } },
      { q: { uz: "GDPR ning \"unutilish huquqi\" nima?", en: "What is GDPR's 'Right to be Forgotten'?" }, options: [{ label: 'A', uz: "Parol tiklash", en: "Password reset" }, { label: 'B', uz: "Shaxs o'z ma'lumotlarini o'chirishni talab qilish huquqi", en: "Data subject's right to demand erasure of personal data" }, { label: 'C', uz: "Kesh tozalash", en: "Clear cache" }, { label: 'D', uz: "Anonimlashtirish", en: "Anonymize" }], answer: 'B', explanation: { uz: "Kompaniyalar foydalanuvchi so'roviga ko'ra shaxsiy yozuvlarni o'chirishi shart.", en: "Users can legally demand deletion of their personal data." } }
    ]
  },

  // ==================== TOPIC 15 ====================
  {
    id: 15,
    slug: '15-capstone',
    hours: 0,
    labs: 0,
    keywords: ['Capstone', 'End-to-End', 'Pipeline', 'Data Leakage', 'Model Card', 'Error Analysis', 'Rubric'],
    title: {
      uz: "Yakuniy loyiha (Capstone Project)",
      en: "Capstone Project: End-to-End Data Mining"
    },
    description: {
      uz: "Real dataset ustida 7 bosqichli Data Mining loyihasi: muammo qo'yish, EDA, leak-free Pipeline, 5 ta model benchmark, Error Analysis va 100 ballik baholash.",
      en: "7-stage end-to-end Capstone: framing, EDA, leak-free Pipelines, 5-model benchmarking, error analysis, and 100-point rubric."
    },
    sections: [
      {
        heading: { uz: "15.1. End-to-End Data Mining Loyihasi Tuzilishi", en: "15.1. End-to-End Pipeline Architecture" },
        bodyHtml: {
          uz: "<p><strong>Yakuniy loyiha (Capstone)</strong> — kursning barcha bilimlarini yagona real muammo ustida namoyish etadigan yakuniy ish. Har bir loyiha CRISP-DM asosida 7 ta aniq bosqichdan o'tishi shart: 1) Muammoni qo'yish va KPI; 2) Ma'lumot auditi; 3) EDA; 4) Leak-free Preprocessing Pipeline; 5) Baseline + 4 ta modelni Stratified CV bilan taqqoslash; 6) Error Analysis &amp; Feature Importance; 7) Xulosa va tavsiyalar.</p>",
          en: "<p>The <strong>Capstone Project</strong> integrates every module into one reproducible Jupyter Notebook: Framing → Audit → EDA → Leak-Free Pipeline → 5-Model CV Benchmark → Error Analysis → Executive Conclusions.</p>"
        },
        widget: 'capstone-sim'
      },
      {
        heading: { uz: "15.2. Loyiha Yo'nalishlari va Tavsiya Datasetlar", en: "15.2. Project Tracks & Curated Datasets" },
        table: {
          headers: { uz: ["Yo'nalish", "Dataset", "Tavsiya metrika va modellar"], en: ["Track", "Dataset", "Target Metric & Models"] },
          rows: {
            uz: [
              ["Tasniflash", "Telco Churn / Credit Default / Breast Cancer", "F1, PR-AUC, Recall · LogReg, DT, RF, GradBoost"],
              ["Klasterlash", "Mall Customers / Online Retail RFM", "Silhouette, Davies-Bouldin · K-Means, DBSCAN, Ward"],
              ["Assotsiatsiya", "Groceries / Instacart Baskets", "Support, Confidence, Lift · Apriori, FP-Growth"],
              ["Anomaliya", "Credit Card Fraud (284k) / NSL-KDD", "PR-AUC, Recall@K · Isolation Forest, LOF, MAD"]
            ],
            en: [
              ["Classification", "Telco Churn / Credit Default / Breast Cancer", "F1, PR-AUC, Recall · LogReg, DT, RF, GBDT"],
              ["Clustering", "Mall Customers / Retail RFM", "Silhouette, Davies-Bouldin · K-Means, DBSCAN, Ward"],
              ["Association", "Groceries / Instacart", "Support, Confidence, Lift · Apriori, FP-Growth"],
              ["Anomaly", "Credit Card Fraud / NSL-KDD", "PR-AUC, Recall@K · Isolation Forest, LOF"]
            ]
          }
        }
      },
      {
        heading: { uz: "15.3. Professional Loyihadagi 4 ta Oltin Qoida", en: "15.3. Four Golden Rules of Professional Mining" },
        bodyHtml: {
          uz: "<ol><li><strong>Avval oddiy Baseline:</strong> murakkab XGBoost dan oldin DummyClassifier va LogisticRegression natijasini oling.</li><li><strong>Data Leakage = 0:</strong> hech qachon <code>fit_transform(X)</code> ni <code>train_test_split</code> dan oldin chaqirmang! Doim <code>sklearn.pipeline.Pipeline</code> ishlating.</li><li><strong>Takrorlanuvchanlik (Reproducibility):</strong> barcha joyda <code>random_state=42</code> qo'ying.</li><li><strong>Xatolar tahlili (Error Analysis):</strong> model qaysi 5 ta namunada adashganini ko'rib chiqing — ko'pincha yangi g'oyalar aynan shundan chiqadi!</li></ol>",
          en: "<ol><li><strong>Simple Baseline First:</strong> establish Dummy + LogisticRegression before complex ensembles.</li><li><strong>Zero Leakage:</strong> wrap scalers/imputers inside <code>Pipeline</code> after splitting.</li><li><strong>Reproducibility:</strong> fix <code>random_state=42</code> everywhere.</li><li><strong>Error Analysis:</strong> inspect top False Positives & False Negatives!</li></ol>"
        }
      },
      {
        heading: { uz: "15.4. Hisobot Talablari va 100 Ballik Baholash Rubrikasi", en: "15.4. Report Structure & 100-Point Grading Rubric" },
        table: {
          headers: { uz: ["Mezon", "Ball", "Nima tekshiriladi?"], en: ["Criterion", "Points", "What Is Evaluated?"] },
          rows: {
            uz: [
              ["Kod sifati va Leak-free Pipeline", "25", "Toza kod, random_state, Pipeline, izohlar"],
              ["EDA va Vizualizatsiya", "15", "Taqsimotlar, NaN auditi, korrelyatsiya, xulosalar"],
              ["Model tanlash va CV", "20", "Baseline + 4 modelni Stratified CV bilan solishtirish"],
              ["Natijalar va Error Analysis", "25", "Confusion Matrix, ROC/PR-AUC, xato misollar tahlili"],
              ["Hisobot va Himoya taqdimoti", "15", "Tuzilish, adabiyotlar, savol-javobga tayyorlik"]
            ],
            en: [
              ["Code Quality & Leak-Free Pipeline", "25", "Clean modular code, random_state, Pipeline"],
              ["EDA & Visualization", "15", "Distributions, missing audit, correlations"],
              ["Model Selection & CV", "20", "Baseline + 4 models compared via Stratified CV"],
              ["Evaluation & Error Analysis", "25", "Confusion Matrix, ROC/PR-AUC, misclassified cases"],
              ["Report & Presentation", "15", "Notebook clarity, citations, oral defense"]
            ]
          }
        }
      }
    ],
    slides: [
      { title: { uz: "15-mavzu: Yakuniy loyiha (Capstone)", en: "Topic 15: End-to-End Capstone Project" }, subtitle: { uz: "Nazariyadan Real Loyihagacha · 100 ballik yakuniy himoya (80 daqiqa)", en: "From Raw Data to Validated Deployment (80 min)" }, points: { uz: ["7 bosqichli End-to-End Data Mining konveyeri", "Loyiha mavzusi va dataset tanlash", "Data Leakage oldini olish (Pipeline + Stratified Split)", "Baseline → Model Benchmarking → Error Analysis", "100 ballik baholash rubrikasi va himoya ssenariysi"], en: ["7-stage End-to-End pipeline", "Choosing tracks & datasets", "Leak-free Pipelines & Stratified Splitting", "Baseline → Benchmarking → Error Analysis", "100-pt rubric & defense guide"] } },
      { title: { uz: "Yakuniy Loyiha Maqsadi", en: "Capstone Objectives" }, points: { uz: ["Real, tozalanmagan dataset ustida barcha bosqichlarni mustaqil bajarish", "Faqat 'fit/predict' emas, biznes muammosiga javob beruvchi tahlil taqdim etish", "Jupyter Notebook (.ipynb) + 5 daqiqalik taqdimot tayyorlash"], en: ["Execute full KDD/CRISP-DM workflow on real messy data", "Deliver business insights, not just model.fit() calls", "Submit clean Jupyter Notebook + 5-min presentation"] } },
      { title: { uz: "4 ta Loyiha Yo'nalishi", en: "4 Capstone Tracks" }, points: { uz: ["A) Tasniflash: Bank kredit riski, Telco Churn, Tibbiy skrining", "B) Klasterlash: RFM mijoz segmentatsiyasi (K-Means + DBSCAN)", "C) Assotsiatsiya: Supermarket savat tahlili (FP-Growth + Lift)", "D) Anomaliya: Kredit karta firibgarligi (Isolation Forest + PR-AUC)"], en: ["A) Classification: Credit Risk, Churn, Healthcare", "B) Clustering: RFM Customer Segmentation", "C) Association: Market Basket Mining", "D) Anomaly: Fraud & Intrusion Detection"] } },
      { title: { uz: "Qadam 1–2: Muammoni Qo'yish va Ma'lumot Auditi", en: "Steps 1–2: Framing & Audit" }, points: { uz: ["Muammo turi va asosiy muvaffaqiyat metrikasini tanlang (masalan, Churn uchun Recall & F1)", "Dataset hajmi, ustun turlari, dublikatlar va sinf disbalansini tekshiring"], en: ["Pick task type and primary metric BEFORE modeling", "Audit row counts, dtypes, duplicates, and class imbalance"] } },
      { title: { uz: "Qadam 3: Chuqur EDA (Exploratory Data Analysis)", en: "Step 3: Meaningful EDA" }, points: { uz: ["Har bir grafik ostida 1–2 jumla XULOSA yozing (shunchaki rasm chizib qo'ymang!)", "Maqsad o'zgaruvchisi bilan kuchli korrelyatsiyali belgilarni va outlierlarni aniqlang"], en: ["Write a 1–2 sentence takeaway under every chart", "Spot leakage columns, skewed features, and target correlations"] } },
      { title: { uz: "Qadam 4: Leak-Free Preprocessing Pipeline", en: "Step 4: Zero-Leakage Pipeline" }, points: { uz: ["Avval train_test_split(..., stratify=y, random_state=42) qiling!", "ColumnTransformer bilan raqamli (SimpleImputer + StandardScaler) va kategorik (OneHotEncoder) oqimlarni birlashtiring"], en: ["Split FIRST with stratify=y", "Combine numeric & categorical transforms via ColumnTransformer inside Pipeline"] } },
      { title: { uz: "Talabalarga savol (Data Leakage)", en: "Class Discussion: Catch the Leakage" }, discussion: { q: { uz: "Talaba butun dataset ustida <code>X = StandardScaler().fit_transform(X)</code> va SMOTE oversampling qilib, keyin 5-fold CV o'tkazdi va 99.5% aniqlik oldi. Xato qayerda?", en: "A student applies <code>StandardScaler</code> and SMOTE oversampling to the entire dataset X BEFORE running 5-fold CV and gets 99.5% accuracy. What went wrong?" }, a: { uz: "<strong>Kuchli Data Leakage!</strong> Test qatlamidagi nuqtalarning klonlari (SMOTE) va statistikasi o'quv qatlamiga kirib qolgan! Scaler va SMOTE faqat <code>imblearn.pipeline</code> ichida train qatlamlarida bajarilishi kerak.", en: "<strong>Severe Data Leakage!</strong> Synthetic test neighbors leaked into training folds! Scaling and SMOTE must run strictly inside CV folds." } } },
      { title: { uz: "Qadam 5: Baseline va Modellarni Taqqoslash", en: "Step 5: Model Benchmarking" }, widget: 'capstone-sim' },
      { title: { uz: "Qadam 6: Error Analysis & Feature Importance", en: "Step 6: Error Analysis & Explainability" }, points: { uz: ["Eng yaxshi modelning Confusion Matrix va ROC/PR egri chizig'ini chizing", "Model xato qilgan 3–5 ta konkret holatni (False Positive / False Negative) ko'rib chiqing", "Permutation Importance bilan eng ta'sirchan 5 ta omilni izohlang"], en: ["Plot Confusion Matrix and ROC/PR curves", "Inspect 3–5 concrete misclassified samples", "Explain top drivers via Permutation Importance"] } },
      { title: { uz: "100 Ballik Baholash Rubrikasi", en: "100-Point Grading Rubric" }, table: { headers: { uz: ["Mezon", "Ball"], en: ["Criterion", "Points"] }, rows: { uz: [["Kod va Leak-Free Pipeline", "25"], ["EDA sifati", "15"], ["Model tanlash va CV", "20"], ["Natijalar & Error Analysis", "25"], ["Hisobot va Himoya", "15"]], en: [["Code & Leak-Free Pipeline", "25"], ["EDA Quality", "15"], ["Model Selection & CV", "20"], ["Metrics & Error Analysis", "25"], ["Report & Defense", "15"]] } } }
    ],
    lab: {
      title: { uz: "L15: Yakuniy Loyiha Shablon Konveyeri (Leak-Free Benchmark)", en: "L15: End-to-End Leak-Free Capstone Template" },
      objective: { uz: "ColumnTransformer + Pipeline + StratifiedKFold + 5 ta model benchmark + Error Analysis ni yagona toza shablonda ishga tushirish.", en: "Build a reproducible end-to-end Pipeline template with Stratified CV benchmarking and error inspection." },
      steps: [
        {
          title: { uz: "1–3-bosqich: Yuklash, Stratified Split va Pipeline", en: "Load Data, Stratified Split & Leak-Free Pipeline" },
          desc: { uz: "Ma'lumotni 80/20 bo'lib ColumnTransformer tayyorlang.", en: "Split 80/20 stratified and construct a clean preprocessing Pipeline." },
          code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.2, stratify=data.target, random_state=42)
prep = make_pipeline(SimpleImputer(strategy='median'), StandardScaler())
print("Train:", X_tr.shape, "| Test:", X_te.shape)`
        },
        {
          title: { uz: "4-bosqich: 5 ta Modelni 5-Fold Stratified CV da Taqqoslash", en: "Benchmark 5 Models via 5-Fold Stratified CV" },
          desc: { uz: "Baseline va ansambllarni F1 hamda ROC-AUC bo'yicha baholang.", en: "Benchmark 5 classifiers by F1 and ROC-AUC." },
          code: `from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.neighbors import KNeighborsClassifier

candidates = {
    'LogisticReg': LogisticRegression(max_iter=1000),
    'DecisionTree': DecisionTreeClassifier(max_depth=5, random_state=42),
    'k-NN (k=7)': KNeighborsClassifier(n_neighbors=7),
    'RandomForest': RandomForestClassifier(n_estimators=150, random_state=42),
    'GradBoost': GradientBoostingClassifier(n_estimators=100, random_state=42)
}
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
for name, clf in candidates.items():
    pipe = make_pipeline(prep, clf)
    f1 = cross_val_score(pipe, X_tr, y_tr, cv=cv, scoring='f1').mean()
    auc = cross_val_score(pipe, X_tr, y_tr, cv=cv, scoring='roc_auc').mean()
    print(f"{name:14s} | CV F1={f1:.3f} | CV AUC={auc:.3f}")`
        },
        {
          title: { uz: "5-bosqich: Yakuniy Test Baho va Xato Tahlili", en: "Final Test Evaluation & Misclassified Inspection" },
          desc: { uz: "Eng yaxshi modelni Test da baholab adashgan namunalarni ko'ring.", en: "Evaluate the winning pipeline on X_te and count misclassifications." },
          code: `from sklearn.metrics import classification_report, confusion_matrix
import numpy as np

best = make_pipeline(prep, GradientBoostingClassifier(n_estimators=100, random_state=42)).fit(X_tr, y_tr)
preds = best.predict(X_te)
print(confusion_matrix(y_te, preds))
print(classification_report(y_te, preds, target_names=data.target_names))
wrong_idx = np.where(preds != y_te)[0]
print("Misclassified test indices:", wrong_idx.tolist())`
        }
      ],
      variants: {
        uz: [
          "A-variant (Tasniflash): Kaggle Titanic yoki Bank Churn datasetida to'liq hisobot tayyorlang.",
          "B-variant (Klasterlash): Mall Customers datasetida Elbow + Silhouette + DBSCAN bilan segmentatsiya qiling.",
          "C-variant (Anomaliya): Kredit karta tranzaksiyalarida Isolation Forest vs LOF PR-AUC hisobotini yozing."
        ],
        en: [
          "Track A (Classification): Complete full notebook on Titanic or Bank Churn.",
          "Track B (Clustering): Segment Mall Customers with K-Means + DBSCAN + Silhouette.",
          "Track C (Anomaly): Benchmark Isolation Forest vs LOF with PR-AUC on Fraud data."
        ]
      }
    },
    glossary: [
      { uz: "Data Leakage", en: "Data Leakage", defUz: "Test yoki kelajak axborotining o'qitish jarayoniga sizib kirishi", defEn: "Test/future information leaking into model training" },
      { uz: "Baseline Model", en: "Baseline Model", defUz: "Murakkab modellarni solishtirish uchun olinadigan sodda boshlang'ich model", defEn: "Simple benchmark model for sanity comparison" },
      { uz: "Error Analysis", en: "Error Analysis", defUz: "Model adashgan aniq misollarni tahlil qilib xususiyatlarni yaxshilash", defEn: "Inspecting false positives/negatives to guide improvements" },
      { uz: "Pipeline", en: "Pipeline", defUz: "Preprocessing va model bosqichlarini xavfsiz zanjirlovchi obyekt", defEn: "Chained workflow preventing leakage during CV" }
    ],
    quiz: [
      { q: { uz: "End-to-End loyihaning birinchi bosqichi nima?", en: "What is Step 1 of an End-to-End project?" }, options: [{ label: 'A', uz: "XGBoost o'qitish", en: "Train XGBoost" }, { label: 'B', uz: "Muammo, biznes maqsadi va muvaffaqiyat metrikasini aniqlash", en: "Problem framing & metric selection" }, { label: 'C', uz: "Grafik bezash", en: "Styling plots" }, { label: 'D', uz: "PCA", en: "PCA" }], answer: 'B', explanation: { uz: "Avval nimani va qaysi metrika bilan optimallash aniqlanadi.", en: "Define objectives and evaluation metrics upfront." } },
      { q: { uz: "Data Leakage ning oldini olishning eng ishonchli usuli qaysi?", en: "What is the safest way to prevent Data Leakage?" }, options: [{ label: 'A', uz: "Avval butun X ni scaling qilish", en: "Scale full X before splitting" }, { label: 'B', uz: "Avval train_test_split qilib, scaler/imputer ni Pipeline ichida qo'llash", en: "Split first and wrap transforms inside sklearn Pipeline" }, { label: 'C', uz: "random_state ni o'chirish", en: "Drop random_state" }, { label: 'D', uz: "Testni kattaroq qilish", en: "Bigger test set" }], answer: 'B', explanation: { uz: "Pipeline CV ichida fit ni faqat train qismida bajaradi.", en: "Pipeline fits preprocessing strictly on training folds." } },
      { q: { uz: "`stratify=y` parametri nima uchun kerak?", en: "Why pass `stratify=y` to train_test_split?" }, options: [{ label: 'A', uz: "Train va Testda sinflar ulushini bir xil saqlash uchun", en: "Preserve original class ratios in train and test" }, { label: 'B', uz: "Outlier o'chirish", en: "Drop outliers" }, { label: 'C', uz: "Scaling", en: "Scaling" }, { label: 'D', uz: "Tezlashtirish", en: "Speed up" }], answer: 'A', explanation: { uz: "Noteng sinflarda ham ikkala to'plamda bir xil nisbat saqlanadi.", en: "Ensures proportional class balance across splits." } },
      { q: { uz: "Nima uchun murakkab modeldan oldin Baseline model quriladi?", en: "Why build a simple Baseline model first?" }, options: [{ label: 'A', uz: "Murakkab model rostdan foyda berayotganini tekshirish uchun", en: "To verify complex models truly add value over simple heuristics" }, { label: 'B', uz: "GPU qizib ketmasligi uchun", en: "Save GPU" }, { label: 'C', uz: "Kod uzun bo'lishi uchun", en: "Longer code" }, { label: 'D', uz: "Keragi yo'q", en: "Not needed" }], answer: 'A', explanation: { uz: "Agar oddiy LogReg 94% bersa, 94.2% li og'ir modelga hojat qolmasligi mumkin.", en: "Provides a reference floor to justify complexity." } },
      { q: { uz: "Yakuniy loyiha rubrikasida eng ko'p ball (25 balldan) qaysi mezonlarga beriladi?", en: "Which criteria carry 25 pts each in the Capstone rubric?" }, options: [{ label: 'A', uz: "Dataset hajmi", en: "Dataset size" }, { label: 'B', uz: "Kod/Pipeline sifati va Natijalar/Error Analysis", en: "Code/Pipeline quality and Results/Error Analysis" }, { label: 'C', uz: "Ranglar", en: "Colors" }, { label: 'D', uz: "Sarlavha", en: "Title" }], answer: 'B', explanation: { uz: "Kod (25) va Natijalar tahlili (25) jami bahoning 50% ini tashkil etadi.", en: "Code & Pipeline (25) and Evaluation/Error Analysis (25) total 50%." } }
    ]
  }
);
