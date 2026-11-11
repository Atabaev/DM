window.DM_TOPICS = window.DM_TOPICS || [];

window.DM_TOPICS.push(
  {
    id: 11,
    slug: '11-text-mining',
    hours: 2,
    labs: 1,
    keywords: ['Text Mining', 'TF-IDF', 'Bag of Words', 'NLP', 'Sentiment'],
    title: {
      uz: "Matnlarni tahlil qilish (TF-IDF)",
      en: "Text Mining & TF-IDF"
    },
    description: {
      uz: "Matnni tozalash (Tokenization, Stemming, Lemmatization), Bag-of-Words, TF-IDF formulasi va sentimental tahlil.",
      en: "Text preprocessing, Bag-of-Words, TF-IDF weighting, Multinomial Naive Bayes, and Sentiment Analysis."
    },
    sections: [
      {
        heading: { uz: "11.1. Matn Preprocessing va Bag-of-Words", en: "11.1. Text Preprocessing & Bag-of-Words" },
        bodyHtml: {
          uz: "<p>Strukturasiz matndan bilim olish bosqichlari: <strong>Tokenizatsiya</strong> → <strong>Lowercasing</strong> → <strong>Stop-so'zlarni o'chirish</strong> (\"va\", \"the\", \"is\") → <strong>Stemming/Lemmatization</strong>.</p><p><strong>Bag-of-Words (BoW)</strong> matnni so'zlar chastotasi vektoriga aylantiradi, lekin so'z tartibi va umumiy so'zlar ahamiyatini hisobga olmaydi.</p>",
          en: "<p>Text pipeline steps: <strong>Tokenization</strong> → <strong>Lowercasing</strong> → <strong>Stop-word removal</strong> → <strong>Stemming / Lemmatization</strong>.</p><p><strong>Bag-of-Words (BoW)</strong> converts documents into word-count vectors, ignoring word order and over-weighting common words.</p>"
        }
      },
      {
        heading: { uz: "11.2. TF-IDF va Sentimental Tahlil", en: "11.2. TF-IDF & Sentiment Analysis" },
        bodyHtml: {
          uz: "<p><strong>TF-IDF</strong> hujjatda tez-tez uchraydigan, ammo butun korpusda kam uchraydigan kalit so'zlarga yuqori og'irlik beradi. <strong>Sentimental tahlil</strong> esa sharhlarning hissiy tonini (musbat/manfiy/neytral) aniqlaydi.</p>",
          en: "<p><strong>TF-IDF</strong> boosts terms frequent in a specific document yet rare across the corpus. <strong>Sentiment Analysis</strong> classifies text polarity (positive, negative, neutral).</p>"
        },
        formula: "TF(t,d) = count(t,d)/|d|  |  IDF(t) = log(N / df(t))  |  TF-IDF = TF × IDF"
      }
    ],
    slides: [
      {
        title: { uz: "11-mavzu: Matn tahlili (TF-IDF)", en: "Topic 11: Text Mining & TF-IDF" },
        subtitle: { uz: "NLP Preprocessing · BoW · TF-IDF · Sentiment", en: "From Unstructured Text to Feature Vectors" },
        points: {
          uz: ["Tokenizatsiya, Stop-so'zlar, Stemming, Lemmatization", "Bag-of-Words modeli va cheklovlari", "TF-IDF: so'z muhimligini o'lchash", "MultinomialNB va Sentimental tahlil"],
          en: ["Tokenization, Stop-words, Stemming & Lemmatization", "Bag-of-Words representation", "TF-IDF weighting formula", "MultinomialNB & Sentiment Analysis"]
        }
      },
      {
        title: { uz: "TF-IDF Formulasi", en: "TF-IDF Formula" },
        formula: "TF-IDF(t, d) = [ count(t in d) / total_words(d) ] × log(N / df(t))",
        points: {
          uz: ["TF yuqori + IDF yuqori → hujjat uchun eng xos kalit so'z", "Ko'p hujjatda uchraydigan umumiy so'zlar IDF ≈ 0 ga tushadi"],
          en: ["High TF + High IDF = distinctive keyword for document d", "Ubiquitous stop words get penalized by low IDF"]
        }
      }
    ],
    lab: {
      title: { uz: "L11: TfidfVectorizer va MultinomialNB bilan matn tasniflash", en: "L11: Text Classification with TF-IDF & MultinomialNB" },
      tasks: {
        uz: [
          "TfidfVectorizer yordamida hujjatlarni matritsaga o'tkazing",
          "MultinomialNB bilan Sport, Texnologiya va Iqtisodiyot sinflarini bashorat qiling"
        ],
        en: [
          "Vectorize sample headlines with TfidfVectorizer",
          "Train MultinomialNB to classify new headlines"
        ]
      },
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

docs = [
    "Futbol chempionati boshlandi", "Terma jamoa g'alaba qozondi",
    "Python va sun'iy intellekt", "Data Mining va neyron tarmoqlar",
    "Iqtisodiyot o'sishi prognozi", "Valyuta kursi va eksport hajmi"
]
y = [0, 0, 1, 1, 2, 2]
names = ['Sport', 'Tech', 'Economy']
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
clf = MultinomialNB().fit(X, y)
print("Prediction:", names[clf.predict(vec.transform(["Yosh dasturchi Python o'rganmoqda"]))[0]])`
    },
    glossary: [
      { uz: "Tokenizatsiya", en: "Tokenization", defUz: "Matnni alohida so'z yoki tokenlarga ajratish", defEn: "Splitting text into individual words or subword tokens" },
      { uz: "TF-IDF", en: "TF-IDF", defUz: "So'zning hujjatdagi chastotasini korpusdagi noyobligiga ko'paytiruvchi vazn", defEn: "Term Frequency–Inverse Document Frequency importance score" }
    ],
    quiz: [
      {
        q: { uz: "TF-IDF da IDF komponenti nima uchun kerak?", en: "Why do we multiply by IDF in TF-IDF?" },
        options: [
          { label: 'A', uz: "So'z uzunligini o'lchash uchun", en: "Measure word length" },
          { label: 'B', uz: "Ko'p hujjatda uchraydigan umumiy so'zlar og'irligini kamaytirish uchun", en: "To down-weight common words appearing in many documents" },
          { label: 'C', uz: "Matnni tarjima qilish uchun", en: "Translate text" },
          { label: 'D', uz: "Stemming uchun", en: "For stemming" }
        ],
        answer: 'B',
        explanation: { uz: "IDF umumiy so'zlarni pasaytirib, kamyob va mazmunli atamalarni ko'taradi.", en: "IDF penalizes frequent corpus-wide terms and highlights rare informative ones." }
      },
      {
        q: { uz: "\"Stop so'zlar\" (stop words) nima?", en: "What are stop words?" },
        options: [
          { label: 'A', uz: "Kalit atamalar", en: "Domain keywords" },
          { label: 'B', uz: "Juda ko'p uchraydigan, kam ma'noli yordamchi so'zlar", en: "Frequent filler words like 'the', 'is', 'va', 'bilan'" },
          { label: 'C', uz: "Raqamlar", en: "Numbers" },
          { label: 'D', uz: "Xato so'zlar", en: "Typos" }
        ],
        answer: 'B',
        explanation: { uz: "Stop-so'zlar tahlilga foydali signal bermagani uchun tozalanadi.", en: "Stop words add noise and are commonly filtered before modeling." }
      },
      {
        q: { uz: "Bag-of-Words modelining asosiy kamchiligi nima?", en: "What is the main limitation of Bag-of-Words?" },
        options: [
          { label: 'A', uz: "So'z tartibi va kontekstni yo'qotadi", en: "Ignores word order and syntactic context" },
          { label: 'B', uz: "Faqat inglizcha ishlaydi", en: "Only works in English" },
          { label: 'C', uz: "Raqamlarni ishlatmaydi", en: "Doesn't use numbers" },
          { label: 'D', uz: "Har doim overfitting qiladi", en: "Always overfits" }
        ],
        answer: 'A',
        explanation: { uz: "\"It odamni tishladi\" va \"Odam itni tishladi\" BoW da bir xil vektorga tushadi.", en: "BoW treats text as an unordered multiset of words." }
      },
      {
        q: { uz: "MultinomialNB matn tasniflashda nima uchun mashhur?", en: "Why is Multinomial Naive Bayes popular for text?" },
        options: [
          { label: 'A', uz: "Hisob (count) va TF-IDF vektorlari bilan tez va yaxshi ishlaydi", en: "Efficient and accurate on word-count / TF-IDF features" },
          { label: 'B', uz: "Faqat 2 sinf uchun", en: "Only 2 classes" },
          { label: 'C', uz: "Normallashtirish talab qiladi", en: "Requires scaling" },
          { label: 'D', uz: "Grafik chizadi", en: "Plots graphs" }
        ],
        answer: 'A',
        explanation: { uz: "Multinomial taqsimot yuqori o'lchamli siyrak so'z vektorlariga juda mos.", en: "Multinomial NB naturally models discrete term frequencies in sparse matrices." }
      },
      {
        q: { uz: "Sentimental tahlil nimani aniqlaydi?", en: "What does Sentiment Analysis detect?" },
        options: [
          { label: 'A', uz: "Matnning tilini", en: "Language" },
          { label: 'B', uz: "Matnning hissiy ohangini (musbat/manfiy/neytral)", en: "Emotional polarity (positive/negative/neutral)" },
          { label: 'C', uz: "Matn uzunligini", en: "Length" },
          { label: 'D', uz: "Shriftni", en: "Font" }
        ],
        answer: 'B',
        explanation: { uz: "Sharhlar va postlardagi munosabatni baholash uchun ishlatiladi.", en: "It classifies opinion polarity in reviews and social media." }
      }
    ]
  },

  {
    id: 12,
    slug: '12-web-mining',
    hours: 2,
    labs: 0,
    keywords: ['Web Mining', 'PageRank', 'Social Network', 'Centrality', 'Recommender'],
    title: {
      uz: "Veb va ijtimoiy tarmoqlar tahlili",
      en: "Web & Social Network Mining"
    },
    description: {
      uz: "Web Content/Structure/Usage mining, PageRank algoritmi, markazlik ko'rsatkichlari va tavsiya tizimlari.",
      en: "Web Content, Structure & Usage mining, Google PageRank, graph centralities, and Recommender Systems."
    },
    sections: [
      {
        heading: { uz: "12.1. Veb-mining va PageRank algoritmi", en: "12.1. Web Mining & PageRank" },
        bodyHtml: {
          uz: "<p>Veb-mining uch yo'nalishga bo'linadi: <strong>Web Content</strong> (matn/media), <strong>Web Structure</strong> (havolalar graflari) va <strong>Web Usage</strong> (loglar). <strong>PageRank</strong> (Page &amp; Brin, 1998) sahifa nufuzini unga keluvchi havolalar soni va sifati orqali o'lchaydi (d=0.85 damping factor).</p>",
          en: "<p>Web mining spans <strong>Web Content</strong>, <strong>Web Structure</strong> (link graphs), and <strong>Web Usage</strong> (clickstream logs). <strong>PageRank</strong> scores page authority based on incoming links and linker importance (damping factor d=0.85).</p>"
        },
        formula: "PR(A) = (1-d)/N + d · Σ [ PR(T_i) / C(T_i) ]"
      },
      {
        heading: { uz: "12.2. Ijtimoiy tarmoqlar va Tavsiya tizimlari", en: "12.2. Social Graphs & Recommender Systems" },
        bodyHtml: {
          uz: "<p>Graf ko'rsatkichlari: <strong>Degree</strong> (qo'shnilar soni), <strong>Betweenness</strong> (ko'prik tugunlar), <strong>Closeness</strong> (o'rtacha masofa). Tavsiya tizimlari: <strong>Collaborative Filtering</strong> (o'xshash foydalanuvchilar), <strong>Content-Based</strong> (o'xshash mahsulotlar) va <strong>Hybrid</strong>.</p>",
          en: "<p>Graph metrics: <strong>Degree</strong>, <strong>Betweenness</strong> (bridge nodes on shortest paths), and <strong>Closeness</strong>. Recommenders: <strong>Collaborative Filtering</strong> (similar users), <strong>Content-Based</strong> (similar items), and <strong>Hybrid</strong>.</p>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "12-mavzu: Veb va Ijtimoiy Tarmoqlar", en: "Topic 12: Web & Social Network Mining" },
        subtitle: { uz: "PageRank · Graf Markazligi · Tavsiya Tizimlari", en: "Link Analysis, Graph Centrality & Recommenders" },
        points: {
          uz: ["Web Content, Structure, Usage mining", "PageRank va Random Surfer modeli (d=0.85)", "Degree, Betweenness, Closeness centrality", "Collaborative vs Content-Based Filtering"],
          en: ["Content, Structure & Usage mining", "PageRank & Random Surfer (d=0.85)", "Degree, Betweenness & Closeness centrality", "Collaborative vs Content-Based recommenders"]
        }
      }
    ],
    lab: {
      title: { uz: "L12: NetworkX yordamida Karate Club grafida PageRank", en: "L12: PageRank & Centrality with NetworkX" },
      tasks: {
        uz: [
          "Karate Club grafida PageRank va Betweenness hisoblang",
          "Eng muhim top-5 tugunni chop eting"
        ],
        en: [
          "Compute PageRank and Betweenness centrality on Karate Club graph",
          "Identify the top-5 influential nodes"
        ]
      },
      code: `import networkx as nx
G = nx.karate_club_graph()
pr = nx.pagerank(G, alpha=0.85)
top5 = sorted(pr.items(), key=lambda x: x[1], reverse=True)[:5]
for node, score in top5:
    print(f"Node {node:2d}: PageRank={score:.4f}")`
    },
    glossary: [
      { uz: "PageRank", en: "PageRank", defUz: "Kiruvchi havolalar nufuzi asosida sahifa muhimligini baholovchi algoritm", defEn: "Link-analysis algorithm ranking graph nodes by authority" },
      { uz: "Betweenness", en: "Betweenness Centrality", defUz: "Eng qisqa yo'llarning qanchasi tugun orqali o'tishini o'lchaydi", defEn: "Fraction of shortest paths passing through a node" }
    ],
    quiz: [
      {
        q: { uz: "PageRank sahifa muhimligini qanday o'lchaydi?", en: "How does PageRank evaluate page importance?" },
        options: [
          { label: 'A', uz: "So'zlar soni bilan", en: "Word count" },
          { label: 'B', uz: "Kiruvchi havolalar soni va havola beruvchi sahifa nufuzi bilan", en: "Quantity and authority of incoming hyperlinks" },
          { label: 'C', uz: "Sahifa hajmi bilan", en: "File size" },
          { label: 'D', uz: "Yuklanish tezligi bilan", en: "Load speed" }
        ],
        answer: 'B',
        explanation: { uz: "Nufuzli sahifadan kelgan havola oddiy sahifa havolasidan ko'proq ovoz beradi.", en: "Links from high-PageRank pages pass greater weight." }
      },
      {
        q: { uz: "Veb-miningning uch asosiy turi qaysilar?", en: "What are the three main branches of Web Mining?" },
        options: [
          { label: 'A', uz: "Kontent, tuzilma va foydalanish (Content, Structure, Usage)", en: "Web Content, Web Structure, Web Usage" },
          { label: 'B', uz: "HTML, CSS, JS", en: "HTML, CSS, JS" },
          { label: 'C', uz: "Rasm, matn, audio", en: "Image, text, audio" },
          { label: 'D', uz: "SQL, NoSQL, Graph", en: "SQL, NoSQL, Graph" }
        ],
        answer: 'A',
        explanation: { uz: "Matn (Content), giperhavolalar (Structure) va loglar (Usage) tahlili.", en: "Analyzing page contents, link topology, and user access logs." }
      },
      {
        q: { uz: "PageRank da damping factor d=0.85 nimani bildiradi?", en: "What does damping factor d=0.85 mean in PageRank?" },
        options: [
          { label: 'A', uz: "Foydalanuvchi havolani bosib o'tish ehtimoli (15% tasodifiy sakrash)", en: "Probability the random surfer follows a link (15% random jump)" },
          { label: 'B', uz: "Server xatosi", en: "Server error rate" },
          { label: 'C', uz: "Sahifalar soni", en: "Page count" },
          { label: 'D', uz: "Kesh muddati", en: "Cache TTL" }
        ],
        answer: 'A',
        explanation: { uz: "Random surfer 85% ehtimol bilan havola bo'ylab yuradi, 15% ehtimol bilan boshqa sahifaga sakraydi.", en: "With probability d=0.85 the surfer clicks a link; 1-d=0.15 teleports randomly." }
      },
      {
        q: { uz: "Collaborative Filtering qanday ishlaydi?", en: "How does Collaborative Filtering generate recommendations?" },
        options: [
          { label: 'A', uz: "Narxga qarab", en: "By lowest price" },
          { label: 'B', uz: "O'xshash didli foydalanuvchilar yoqtirgan narsalarni tavsiya qiladi", en: "Recommends items liked by users with similar preferences" },
          { label: 'C', uz: "Tasodifiy", en: "Randomly" },
          { label: 'D', uz: "Faqat matn tavsifi bilan", en: "Only text descriptions" }
        ],
        answer: 'B',
        explanation: { uz: "Foydalanuvchi-mahsulot matritsasidagi o'xshashlik asosida tavsiya beradi.", en: "Leverages collective user-item interaction patterns." }
      },
      {
        q: { uz: "\"Betweenness centrality\" nimani o'lchaydi?", en: "What does Betweenness Centrality measure?" },
        options: [
          { label: 'A', uz: "Qo'shnilar sonini", en: "Neighbor count" },
          { label: 'B', uz: "Tugun nechta eng qisqa yo'l (ko'prik) ustida joylashganini", en: "How often a node lies on shortest paths between other nodes" },
          { label: 'C', uz: "Graf diametrini", en: "Graph diameter" },
          { label: 'D', uz: "Klaster koeffitsientini", en: "Clustering coefficient" }
        ],
        answer: 'B',
        explanation: { uz: "Yuqori betweenness — tarmoq guruhlarini bog'lovchi muhim ko'prik tugun.", en: "High betweenness identifies bridge/broker nodes controlling information flow." }
      }
    ]
  },

  {
    id: 13,
    slug: '13-stream-mining',
    hours: 2,
    labs: 0,
    keywords: ['Stream Mining', 'Sliding Window', 'Concept Drift', 'Bloom Filter', 'Kafka'],
    title: {
      uz: "Oqimli ma'lumotlar tahlili",
      en: "Data Stream Mining"
    },
    description: {
      uz: "Cheksiz oqimlar, Sliding Window, Flajolet-Martin, Bloom Filter, Concept Drift va Kafka/Flink tizimlari.",
      en: "Unbounded streams, Sliding Windows, Bloom Filters, Flajolet-Martin, Concept Drift, and Kafka/Flink."
    },
    sections: [
      {
        heading: { uz: "13.1. Ma'lumot oqimlari va Sliding Window", en: "13.1. Data Streams & Sliding Window" },
        bodyHtml: {
          uz: "<p><strong>Ma'lumot oqimi (Stream)</strong> cheksiz va yuqori tezlikda keladi (IoT sensorlar, karta tranzaksiyalari); uni to'liq xotirada saqlab bo'lmaydi. Shu sabab <strong>Sliding Window</strong> faqat so'nggi N ta element yoki T daqiqani saqlaydi.</p><p><strong>Probabilistik tuzilmalar:</strong> <em>Flajolet-Martin / HyperLogLog</em> (noyob elementlar soni), <em>Bloom Filter</em> (mavjudlik testi — false positive mumkin, false negative yo'q), <em>Count-Min Sketch</em> (chastota).</p>",
          en: "<p><strong>Data Streams</strong> arrive continuously at high velocity and cannot fit in memory. <strong>Sliding Windows</strong> retain only the latest N items or T minutes.</p><p><strong>Sketch structures:</strong> <em>Flajolet-Martin / HyperLogLog</em> (distinct count), <em>Bloom Filter</em> (membership check — possible false positives, zero false negatives), <em>Count-Min Sketch</em> (frequencies).</p>"
        }
      },
      {
        heading: { uz: "13.2. Konsept dreyfi (Concept Drift)", en: "13.2. Concept Drift & Stream Engines" },
        bodyHtml: {
          uz: "<p><strong>Concept Drift</strong> — vaqt o'tishi bilan ma'lumot taqsimotining o'zgarishi (masalan, spamchilar uslubi o'zgarishi). Yechim: ADWIN/DDM drift detektorlari va incremental learning. Tizimlar: Apache Kafka, Apache Flink, Spark Streaming.</p>",
          en: "<p><strong>Concept Drift</strong> occurs when the underlying data distribution shifts over time. Handled via sliding retraining, ADWIN/DDM detectors, and incremental learners on Kafka/Flink/Spark Streaming.</p>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "13-mavzu: Oqimli ma'lumotlar tahlili", en: "Topic 13: Data Stream Mining" },
        subtitle: { uz: "Sliding Window · Bloom Filter · Concept Drift", en: "Real-Time Analytics Under Memory & Time Limits" },
        points: {
          uz: ["Cheksizlik, bir martalik o'qish (one-pass), millisekund javob", "Count-based va Time-based Sliding Window", "Bloom Filter, HyperLogLog, Count-Min Sketch", "Concept Drift va Apache Kafka / Flink"],
          en: ["Unbounded, single-pass, real-time constraints", "Count-based & Time-based Sliding Windows", "Bloom Filter, HyperLogLog, Count-Min Sketch", "Concept Drift & Kafka / Flink"]
        }
      }
    ],
    lab: {
      title: { uz: "L13: Sliding Window va Concept Drift simulyatsiyasi", en: "L13: Sliding Window & Concept Drift Simulation" },
      tasks: {
        uz: [
          "deque(maxlen=30) bilan sirpanuvchi oyna o'rtachasini hisoblang",
          "O'rtacha 50 dan 70 ga o'zgargan Concept Drift nuqtasini aniqlang"
        ],
        en: [
          "Track rolling mean & std using deque(maxlen=30)",
          "Detect anomalies and observe mean shift at index 150 (Concept Drift)"
        ]
      },
      code: `import numpy as np
from collections import deque

np.random.seed(42)
stream = np.concatenate([np.random.normal(50, 5, 150), np.random.normal(70, 5, 150)])
win = deque(maxlen=30)
anomalies = []
for i, v in enumerate(stream):
    if len(win) >= 10 and abs(v - np.mean(win)) / (np.std(win) + 1e-9) > 3:
        anomalies.append(i)
    win.append(v)
print("Detected anomaly indices:", anomalies)`
    },
    glossary: [
      { uz: "Concept Drift", en: "Concept Drift", defUz: "Vaqt o'tishi bilan ma'lumotlar statistik taqsimotining o'zgarishi", defEn: "Shift in target or feature distribution over time" },
      { uz: "Bloom Filter", en: "Bloom Filter", defUz: "Element to'plamda borligini kam xotirada tekshiruvchi ehtimoliy tuzilma", defEn: "Space-efficient probabilistic set-membership structure" }
    ],
    quiz: [
      {
        q: { uz: "Ma'lumot oqimida \"Concept Drift\" nima?", en: "What is Concept Drift in data streams?" },
        options: [
          { label: 'A', uz: "Tarmoq uzilishi", en: "Network outage" },
          { label: 'B', uz: "Vaqt o'tishi bilan ma'lumot taqsimoti va qonuniyatining o'zgarishi", en: "Change in underlying data distribution over time" },
          { label: 'C', uz: "Disk to'lishi", en: "Disk overflow" },
          { label: 'D', uz: "K ni kamaytirish", en: "Lowering K" }
        ],
        answer: 'B',
        explanation: { uz: "Foydalanuvchi xulqi yoki muhit o'zgarganda eski model eskirib qoladi.", en: "When statistical relationships shift, static models degrade." }
      },
      {
        q: { uz: "Count-based Sliding Window nima saqlaydi?", en: "What does a count-based Sliding Window store?" },
        options: [
          { label: 'A', uz: "Butun tarixni", en: "Entire history" },
          { label: 'B', uz: "Eng so'nggi N ta elementni", en: "Only the most recent N items" },
          { label: 'C', uz: "Faqat outlierlarni", en: "Only outliers" },
          { label: 'D', uz: "Faqat birinchi elementni", en: "Only the first item" }
        ],
        answer: 'B',
        explanation: { uz: "Har yangi element kirganda eng eski element oynadan chiqariladi.", en: "FIFO buffer keeping fixed capacity N." }
      },
      {
        q: { uz: "Bloom Filter qaysi turdagi xatoga yo'l qo'yishi mumkin?", en: "Which error can a Bloom Filter produce?" },
        options: [
          { label: 'A', uz: "False Negative", en: "False Negative" },
          { label: 'B', uz: "False Positive (yo'q elementni bor deyishi mumkin)", en: "False Positive (may report absent item as present)" },
          { label: 'C', uz: "Ikkalasi ham", en: "Both FP and FN" },
          { label: 'D', uz: "Hech qanday xato", en: "Zero error" }
        ],
        answer: 'B',
        explanation: { uz: "Bloom filter \"yo'q\" desa 100% aniq, lekin hash to'qnashuvi tufayli \"bor\" deganda kichik FP ehtimoli bor.", en: "No false negatives ever occur; hash collisions only cause rare false positives." }
      },
      {
        q: { uz: "Apache Kafka oqim tizimida qanday rol o'ynaydi?", en: "What role does Apache Kafka play in streaming architectures?" },
        options: [
          { label: 'A', uz: "SQL baza", en: "Relational database" },
          { label: 'B', uz: "Yuqori tezlikdagi xabar/oqimlarni ishonchli yetkazuvchi broker", en: "Distributed high-throughput event streaming broker" },
          { label: 'C', uz: "Grafik kutubxonasi", en: "Plotting library" },
          { label: 'D', uz: "CSS freymvork", en: "CSS framework" }
        ],
        answer: 'B',
        explanation: { uz: "Kafka millionlab xabarlarni buferlab, Flink/Spark ga uzatadi.", en: "Kafka ingests and buffers distributed real-time event streams." }
      },
      {
        q: { uz: "Oqimli ma'lumotning an'anaviy jadvaldan asosiy farqi?", en: "What fundamentally distinguishes stream data from static datasets?" },
        options: [
          { label: 'A', uz: "Cheksiz, yuqori tezlikda keladi va bir marta qayta ishlanadi", en: "Unbounded, high-velocity, single-pass processing" },
          { label: 'B', uz: "Faqat matndan iborat", en: "Text-only" },
          { label: 'C', uz: "Doim CSV da", en: "Always CSV" },
          { label: 'D', uz: "Hech qachon o'zgarmaydi", en: "Completely static" }
        ],
        answer: 'A',
        explanation: { uz: "Xotira cheklangani uchun cheksiz oqimni saqlab emas, oqim davomida tahlil qilish kerak.", en: "Memory is bounded while data arrives indefinitely at high speed." }
      }
    ]
  },

  {
    id: 14,
    slug: '14-privacy',
    hours: 2,
    labs: 0,
    keywords: ['Privacy', 'GDPR', 'k-Anonymity', 'l-Diversity', 'Differential Privacy'],
    title: {
      uz: "Maxfiylikni saqlash (Privacy-Preserving DM)",
      en: "Privacy-Preserving Data Mining"
    },
    description: {
      uz: "Re-identification xavfi, GDPR tamoyillari, k-Anonymity, l-Diversity va Differential Privacy (ε byudjeti).",
      en: "Re-identification risks, GDPR principles, k-Anonymity, l-Diversity, and Differential Privacy (Laplace noise)."
    },
    sections: [
      {
        heading: { uz: "14.1. Maxfiylik, GDPR va Anonimlashtirish", en: "14.1. Privacy Risks, GDPR & Anonymization" },
        bodyHtml: {
          uz: "<p><strong>Re-identification hujumi:</strong> 2006-yilda Netflix anonim reytinglari IMDb bilan bog'lanib foydalanuvchilar fosh qilingan. <strong>GDPR</strong> esa maqsad cheklovi, minimal yig'ish va <em>\"unutilish huquqi\"</em>ni talab qiladi.</p><ul><li><strong>k-Anonymity:</strong> har bir yozuv quasi-identifierlar bo'yicha kamida k-1 ta boshqa yozuv bilan farqlanmaydi (Generalization + Suppression).</li><li><strong>l-Diversity:</strong> bir ekvivalentlik sinfida kamida l ta turli sezgir qiymat bo'lishi shart (homogenlik hujumiga qarshi).</li><li><strong>Differential Privacy:</strong> kalibrlangan Laplace shovqini qo'shib, bitta shaxs ishtirokini matematik yashiradi (ε — maxfiylik byudjeti).</li></ul>",
          en: "<p><strong>Re-identification:</strong> In 2006, Netflix's anonymized ratings were linked to IMDb profiles. <strong>GDPR</strong> enforces purpose limitation, data minimization, and the <em>right to be forgotten</em>.</p><ul><li><strong>k-Anonymity:</strong> each record is indistinguishable from at least k-1 others on quasi-identifiers.</li><li><strong>l-Diversity:</strong> each equivalence class contains at least l distinct sensitive values (prevents homogeneity attacks).</li><li><strong>Differential Privacy:</strong> adds calibrated Laplace noise controlled by privacy budget ε.</li></ul>"
        }
      }
    ],
    slides: [
      {
        title: { uz: "14-mavzu: Maxfiylikni saqlash", en: "Topic 14: Privacy-Preserving Data Mining" },
        subtitle: { uz: "GDPR · k-Anonymity · l-Diversity · Differential Privacy", en: "Protecting Individuals While Mining Insights" },
        points: {
          uz: ["Re-identification xavfi (Netflix + IMDb)", "GDPR: unutilish huquqi va jarimalar", "k-Anonymity (Generalization/Suppression) va l-Diversity", "Differential Privacy va ε (epsilon) byudjeti"],
          en: ["Re-identification risk (Netflix Prize case)", "GDPR principles & right to be forgotten", "k-Anonymity & l-Diversity", "Differential Privacy & ε budget"]
        }
      }
    ],
    lab: {
      title: { uz: "L14: k-Anonymity tekshiruvi va Laplace Differential Privacy", en: "L14: Checking k-Anonymity & Laplace DP Mechanism" },
      tasks: {
        uz: [
          "Yosh va Shaharni umumlashtirib minimal k ni hisoblang",
          "epsilon=1.0 bilan Laplace shovqini qo'shing"
        ],
        en: [
          "Generalize Age & City to achieve k-Anonymity",
          "Apply Laplace noise with epsilon=1.0 to a count query"
        ]
      },
      code: `import pandas as pd, numpy as np
df = pd.DataFrame({
    'AgeGroup': ['20-29','20-29','30-39','20-29','30-39'],
    'Gender': ['M','M','F','F','M'],
    'Disease': ['Diabetes','Flu','Cancer','Diabetes','Flu']
})
print("Min equivalence group k:", df.groupby(['AgeGroup','Gender']).size().min())
eps = 1.0
dp_count = len(df) + np.random.laplace(0, 1.0 / eps)
print(f"True count={len(df)}, DP count={dp_count:.2f}")`
    },
    glossary: [
      { uz: "k-Anonymity", en: "k-Anonymity", defUz: "Har bir yozuv kamida k-1 boshqa yozuv bilan bir xil ko'rinadigan anonimlashtirish", defEn: "Each record shares quasi-identifiers with at least k-1 others" },
      { uz: "Differential Privacy", en: "Differential Privacy", defUz: "Kalibrlangan shovqin orqali yakka shaxs ishtirokini yashiruvchi matematik kafolat", defEn: "Mathematical privacy guarantee via calibrated noise" }
    ],
    quiz: [
      {
        q: { uz: "GDPR ning \"unutilish huquqi\" nimani anglatadi?", en: "What is GDPR's 'right to be forgotten'?" },
        options: [
          { label: 'A', uz: "Parolni tiklash", en: "Password reset" },
          { label: 'B', uz: "Foydalanuvchi o'z shaxsiy ma'lumotlarini o'chirishni talab qilish huquqi", en: "User's right to request deletion of personal data" },
          { label: 'C', uz: "Kompaniyaning log saqlashi", en: "Company log retention" },
          { label: 'D', uz: "Bepul internet", en: "Free internet" }
        ],
        answer: 'B',
        explanation: { uz: "Shaxs o'zi haqidagi ma'lumotlarni bazadan butunlay o'chirtirishi mumkin.", en: "Data subjects can demand erasure of their personal data." }
      },
      {
        q: { uz: "k-Anonymity da k=5 nimani bildiradi?", en: "What does k=5 mean in k-Anonymity?" },
        options: [
          { label: 'A', uz: "5 ta ustun o'chirilgan", en: "5 columns deleted" },
          { label: 'B', uz: "Har bir shaxs kamida 4 ta boshqa shaxs bilan ajratilmas", en: "Every individual is indistinguishable from at least 4 others" },
          { label: 'C', uz: "5 ta klaster", en: "5 clusters" },
          { label: 'D', uz: "5% xato", en: "5% error" }
        ],
        answer: 'B',
        explanation: { uz: "Har ekvivalentlik sinfida kamida k=5 ta yozuv bo'ladi.", en: "Each equivalence class has size ≥ 5." }
      },
      {
        q: { uz: "l-Diversity k-Anonymity dan nimasi bilan farq qiladi?", en: "How does l-Diversity strengthen k-Anonymity?" },
        options: [
          { label: 'A', uz: "Har guruhda kamida l ta turli sezgir qiymat talab qiladi", en: "Requires at least l distinct sensitive values per group" },
          { label: 'B', uz: "Faqat raqamli ustunlar uchun", en: "Numeric columns only" },
          { label: 'C', uz: "Shovqin qo'shadi", en: "Adds noise" },
          { label: 'D', uz: "Farqi yo'q", en: "No difference" }
        ],
        answer: 'A',
        explanation: { uz: "Barcha k ta kishida bir xil kasallik bo'lib qolish (homogenlik) hujumini bartaraf etadi.", en: "Prevents homogeneity attacks where all k rows share one sensitive attribute." }
      },
      {
        q: { uz: "Differential Privacy da ε (epsilon) juda kichik bo'lsa nima bo'ladi?", en: "In Differential Privacy, what happens when ε (epsilon) is very small?" },
        options: [
          { label: 'A', uz: "Maxfiylik kuchayadi, lekin shovqin ko'payib aniqlik pasayadi", en: "Stronger privacy, but more noise lowers accuracy" },
          { label: 'B', uz: "Maxfiylik zaiflashadi", en: "Weaker privacy" },
          { label: 'C', uz: "Shovqin qo'shilmaydi", en: "No noise added" },
          { label: 'D', uz: "Ma'lumot o'chadi", en: "Data is erased" }
        ],
        answer: 'A',
        explanation: { uz: "Laplace shovqin masshtabi 1/ε ga teng: kichik ε → katta shovqin → kuchli maxfiylik.", en: "Noise scale is proportional to 1/ε: smaller ε yields stronger privacy and noisier outputs." }
      },
      {
        q: { uz: "\"Re-identification\" hujumi nima?", en: "What is a re-identification attack?" },
        options: [
          { label: 'A', uz: "Parol buzish", en: "Password cracking" },
          { label: 'B', uz: "Anonimlashtirilgan jadvalni tashqi ma'lumot bilan bog'lab shaxsni aniqlash", en: "Linking anonymized records with auxiliary data to reveal identities" },
          { label: 'C', uz: "Ma'lumotni shifrlash", en: "Encrypting data" },
          { label: 'D', uz: "Zaxira nusxa olish", en: "Data backup" }
        ],
        answer: 'B',
        explanation: { uz: "Quasi-identifierlar orqali boshqa ochiq bazalar bilan bog'lab shaxsni topish mumkin.", en: "Joining quasi-identifiers against external datasets exposes individuals." }
      }
    ]
  },

  {
    id: 15,
    slug: '15-capstone',
    hours: 0,
    labs: 0,
    keywords: ['Capstone', 'End-to-End', 'Pipeline', 'Stratified Split', 'Report'],
    title: {
      uz: "Yakuniy loyiha (Capstone Project)",
      en: "Capstone Project: End-to-End Data Mining"
    },
    description: {
      uz: "Real dataset ustida to'liq Data Mining konveyeri: muammo, EDA, preprocessing, modellarni taqqoslash va hisobot.",
      en: "End-to-end Data Mining pipeline on real datasets: framing, EDA, preprocessing, model benchmarking, and reporting."
    },
    sections: [
      {
        heading: { uz: "15.1. To'liq Pipeline va Loyiha Yo'nalishlari", en: "15.1. Full Pipeline & Project Tracks" },
        bodyHtml: {
          uz: "<p>Yakuniy loyiha kursdagi barcha bosqichlarni birlashtiradi: 1) Muammoni aniqlash → 2) Ma'lumot yuklash → 3) EDA → 4) Preprocessing → 5) Modellash va CV → 6) Baholash → 7) Hisobot.</p><ul><li><strong>Tasniflash:</strong> Bank kredit riski, Breast Cancer, Spam filtri.</li><li><strong>Klasterlash:</strong> Mall Customers segmentatsiyasi.</li><li><strong>Assotsiatsiya:</strong> Instacart savat tahlili.</li><li><strong>Anomaliya:</strong> Credit Card Fraud Detection.</li></ul>",
          en: "<p>The Capstone integrates the entire workflow: 1) Framing → 2) Loading → 3) EDA → 4) Preprocessing → 5) Modeling & CV → 6) Evaluation → 7) Presentation.</p><ul><li><strong>Classification:</strong> Credit Risk, Breast Cancer, Spam.</li><li><strong>Clustering:</strong> Mall Customers Segmentation.</li><li><strong>Association:</strong> Instacart Market Basket.</li><li><strong>Anomaly:</strong> Credit Card Fraud Detection.</li></ul>"
        }
      },
      {
        heading: { uz: "15.2. Baholash mezonlari (100 ball)", en: "15.2. Grading Rubric (100 Points)" },
        table: {
          headers: { uz: ["Mezon", "Ball"], en: ["Criterion", "Points"] },
          rows: {
            uz: [
              ["Kod to'g'riligi va izohlar", "25"],
              ["EDA va vizualizatsiya sifati", "15"],
              ["Model tanlash va CV asoslanishi", "20"],
              ["Natijalar va metrikalar tahlili", "25"],
              ["Hisobot rasmiyati (Notebook)", "15"],
              ["Jami", "100"]
            ],
            en: [
              ["Code correctness & comments", "25"],
              ["EDA & visualization quality", "15"],
              ["Model selection & CV justification", "20"],
              ["Metrics & error analysis", "25"],
              ["Report formatting (Notebook)", "15"],
              ["Total", "100"]
            ]
          }
        }
      }
    ],
    slides: [
      {
        title: { uz: "15-mavzu: Yakuniy loyiha (Capstone)", en: "Topic 15: End-to-End Capstone Project" },
        subtitle: { uz: "Nazariyadan Amaliyotga · 100 ballik loyiha", en: "From Raw Dataset to Validated Insights" },
        points: {
          uz: ["7 bosqichli Data Mining konveyeri", "Stratified Train/Test Split va Leakage oldini olish", "Kamida 3–5 modelni CV bilan solishtirish", "Hisobot va Confusion Matrix tahlili"],
          en: ["7-stage End-to-End pipeline", "Stratified split & avoiding data leakage", "Benchmarking 3–5 models via Cross-Validation", "Confusion Matrix & Executive Summary"]
        }
      }
    ],
    lab: {
      title: { uz: "L15: Yakuniy loyiha shabloni (Breast Cancer Benchmark)", en: "L15: Capstone Pipeline Template" },
      tasks: {
        uz: [
          "StandardScaler ni faqat train da fit qiling (data leakage oldini olish)",
          "5 ta modelni 5-fold CV bo'yicha solishtirib eng yaxshisini tanlang"
        ],
        en: [
          "Fit StandardScaler only on X_train to prevent data leakage",
          "Benchmark 5 classifiers with 5-fold CV and report Confusion Matrix"
        ]
      },
      code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.2, stratify=data.target, random_state=42)
scaler = StandardScaler()
X_tr_s = scaler.fit_transform(X_tr)
X_te_s = scaler.transform(X_te)

models = {
    'Decision Tree': DecisionTreeClassifier(max_depth=5, random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, random_state=42),
    'Naive Bayes': GaussianNB(),
    'k-NN': KNeighborsClassifier(n_neighbors=7)
}
for name, m in models.items():
    m.fit(X_tr_s, y_tr)
    cv = cross_val_score(m, X_tr_s, y_tr, cv=5).mean()
    print(f"{name:18s} CV={cv:.3f}, Test={m.score(X_te_s, y_te):.3f}")`
    },
    glossary: [
      { uz: "Data Leakage", en: "Data Leakage", defUz: "Test ma'lumotidagi axborotning o'qitish/scaling jarayoniga sizib kirishi", defEn: "Information from test set leaking into training or preprocessing" },
      { uz: "Stratified Split", en: "Stratified Split", defUz: "Train va Test qismlarda sinflar nisbatini bir xil saqlovchi bo'lish", defEn: "Splitting data while preserving original class proportions" }
    ],
    quiz: [
      {
        q: { uz: "End-to-End loyihaning birinchi bosqichi nima?", en: "What is the first step of an end-to-end Data Mining project?" },
        options: [
          { label: 'A', uz: "Model o'qitish", en: "Training models" },
          { label: 'B', uz: "Muammo va biznes maqsadini aniqlash", en: "Problem framing & business understanding" },
          { label: 'C', uz: "ROC chizish", en: "Plotting ROC" },
          { label: 'D', uz: "Hyperparameter tuning", en: "Hyperparameter tuning" }
        ],
        answer: 'B',
        explanation: { uz: "CRISP-DM bo'yicha avval muammo va muvaffaqiyat mezoni belgilanadi.", en: "Define the objective and evaluation metric before touching models." }
      },
      {
        q: { uz: "EDA (Exploratory Data Analysis) ning asosiy maqsadi nima?", en: "What is the purpose of EDA?" },
        options: [
          { label: 'A', uz: "Ma'lumot taqsimoti, yetishmayotgan qiymat va korrelyatsiyalarni o'rganish", en: "Understand distributions, missing values, and correlations" },
          { label: 'B', uz: "Test to'plamini o'chirish", en: "Delete test set" },
          { label: 'C', uz: "Serverni sozlash", en: "Configure servers" },
          { label: 'D', uz: "Faqat grafiklarni bezash", en: "Only beautify charts" }
        ],
        answer: 'A',
        explanation: { uz: "EDA preprocessing va model tanlash qarorlari uchun asos beradi.", en: "EDA uncovers data quality issues and guides feature engineering." }
      },
      {
        q: { uz: "`stratify=y` parametri train_test_split da nima vazifa bajaradi?", en: "Why pass `stratify=y` to train_test_split?" },
        options: [
          { label: 'A', uz: "Ma'lumotni normallashtiradi", en: "Scales values" },
          { label: 'B', uz: "Train va Testda sinflar nisbatini bir xil saqlaydi", en: "Preserves class proportions in both train and test splits" },
          { label: 'C', uz: "Outlierlarni o'chiradi", en: "Drops outliers" },
          { label: 'D', uz: "K ni oshiradi", en: "Increases K" }
        ],
        answer: 'B',
        explanation: { uz: "Noteng sinflarda ham train, ham test to'plamida sinf ulushlari saqlanadi.", en: "Ensures minority classes are proportionally represented in both splits." }
      },
      {
        q: { uz: "Modellarni solishtirishda nima uchun Cross-Validation ishlatiladi?", en: "Why use Cross-Validation when comparing models?" },
        options: [
          { label: 'A', uz: "Tasodifiy bitta bo'linishga bog'liq bo'lmagan ishonchli baho olish uchun", en: "For a reliable estimate not biased by one lucky split" },
          { label: 'B', uz: "Kodni tezlashtirish uchun", en: "To speed up code" },
          { label: 'C', uz: "Preprocessingni bekor qilish uchun", en: "To skip preprocessing" },
          { label: 'D', uz: "Faqat 1 ta model uchun", en: "Only for 1 model" }
        ],
        answer: 'A',
        explanation: { uz: "K-Fold CV barcha qatlamlar bo'yicha o'rtacha va dispersiyani ko'rsatadi.", en: "K-fold CV measures average performance and stability across multiple splits." }
      },
      {
        q: { uz: "Yakuniy loyiha rubrikasida eng ko'p ball (25 balldan) qaysi mezonlarga beriladi?", en: "Which criteria carry the highest weight (25 pts each) in the Capstone rubric?" },
        options: [
          { label: 'A', uz: "Faqat dataset hajmi", en: "Dataset size only" },
          { label: 'B', uz: "Kod to'g'riligi va natijalar tahlili", en: "Code correctness and results/error analysis" },
          { label: 'C', uz: "Ranglar tanlovi", en: "Color palette" },
          { label: 'D', uz: "Sarlavha uzunligi", en: "Title length" }
        ],
        answer: 'B',
        explanation: { uz: "Kod sifati (25) va natijalar tahlili (25) jami bahoning yarmini tashkil qiladi.", en: "Code quality (25) and results analysis (25) account for 50% of the grade." }
      }
    ]
  }
);
