// 15 Interactive Vanilla-JS Canvas/SVG Widgets for Data Mining Slides & Study Pages
(function () {
  function getLang() {
    return window.DM_APP ? window.DM_APP.getLang() : 'uz';
  }

  function renderWidget(container, widgetId) {
    if (!container || !widgetId) return;
    const lang = getLang();
    const builders = {
      'kdd-pipeline': buildKddWidget,
      'data-types-sim': buildDataTypesWidget,
      'cleaning-sim': buildCleaningWidget,
      'scaling-demo': buildScalingWidget,
      'dt-split': buildDtSplitWidget,
      'feature-sel-sim': buildFeatureSelWidget,
      'knn-demo': buildKnnWidget,
      'roc-cm': buildRocCmWidget,
      'market-basket-sim': buildMarketBasketWidget,
      'apriori-lattice': buildAprioriWidget,
      'kmeans-sim': buildKmeansWidget,
      'dbscan-sim': buildDbscanWidget,
      'anomaly-sim': buildAnomalyWidget,
      'ensemble-sim': buildEnsembleWidget,
      'tfidf-sim': buildTfidfWidget,
      'pagerank-sim': buildPagerankWidget,
      'stream-sim': buildStreamWidget,
      'privacy-sim': buildPrivacyWidget,
      'capstone-sim': buildCapstoneWidget
    };
    const fn = builders[widgetId];
    if (fn) fn(container, lang);
  }

  function boxStyle() {
    return 'background:var(--sw-panel, #0f172a);border:1px solid var(--sw-border, #334155);border-radius:14px;padding:16px 18px;color:var(--sw-text, #e2e8f0);text-align:left;font-size:18px;';
  }

  function btnStyle(active) {
    return `padding:7px 13px;border-radius:8px;border:1px solid ${active ? '#f59e0b' : 'var(--sw-border, #334155)'};background:${active ? '#f59e0b' : 'var(--sw-btn, #1e293b)'};color:${active ? '#0b1120' : 'var(--sw-text, #e2e8f0)'};font-weight:700;font-size:15px;cursor:pointer;`;
  }

  // 1. KDD Pipeline Explorer
  function buildKddWidget(el, lang) {
    const stages = [
      { n: 1, uz: 'Yig\'ish', en: 'Collection', dUz: 'SQL, CSV, sensorlar va API lardan xom ma\'lumot olish. Xavf: turli formatlar va dublikatlar.', dEn: 'Ingest raw data from DBs, logs, APIs, sensors. Risk: schema mismatch & duplicates.' },
      { n: 2, uz: 'Tanlash', en: 'Selection', dUz: 'Maqsadga oid ustun va davrlarni ajratib olish. Xavf: target leakage (kelajak ma\'lumotini kiritib qo\'yish).', dEn: 'Select target attributes & timeframe. Risk: data leakage from future timestamps.' },
      { n: 3, uz: 'Tozalash', en: 'Cleaning', dUz: 'Yetishmayotgan qiymatlar (NaN), shovqin va xato yozuvlarni tuzatish (loyiha vaqtining 40% qismi).', dEn: 'Impute missing values, fix typos, remove corrupted rows (~40% of effort).' },
      { n: 4, uz: 'Transformatsiya', en: 'Transformation', dUz: 'Min-Max/Z-score normallashtirish, One-Hot kodlash, yangi belgilar (Feature Engineering) va PCA.', dEn: 'Normalize scales, One-Hot encode categories, engineer features, apply PCA.' },
      { n: 5, uz: 'Data Mining', en: 'Data Mining', dUz: 'Tasniflash, Klasterlash, Assotsiatsiya yoki Anomaliya algoritmlarini ishga tushirish.', dEn: 'Apply Decision Trees, K-Means, Apriori, Isolation Forest, or Ensembles.' },
      { n: 6, uz: 'Baholash', en: 'Evaluation', dUz: 'Cross-Validation, F1-score, ROC-AUC, Silhouette bilan natijaning haqiqiyligini tekshirish.', dEn: 'Validate via K-Fold CV, Precision/Recall, ROC-AUC, or domain experts.' },
      { n: 7, uz: 'Taqdimot', en: 'Presentation', dUz: 'Dashboardlar, vizual hisobot va biznes qaroriga aylantirish (Deployment).', dEn: 'Visualize insights, build dashboards, and deploy models into production.' }
    ];
    let active = 0;
    function draw() {
      const s = stages[active];
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${stages.map((st, i) => `<button type="button" data-idx="${i}" style="${btnStyle(i === active)}">${st.n}. ${st[lang]}</button>`).join('')}
        </div>
        <div style="background:var(--sw-sub, #162033);border-left:4px solid #f59e0b;padding:12px;border-radius:0 8px 8px 0;">
          <strong style="color:#fbbf24;">${s.n}. ${s[lang]}</strong>
          <p style="margin:6px 0 0;line-height:1.5;">${lang === 'uz' ? s.dUz : s.dEn}</p>
        </div>
      </div>`;
      el.querySelectorAll('[data-idx]').forEach((b) => b.onclick = () => { active = Number(b.dataset.idx); draw(); });
    }
    draw();
  }

  // 2. Scaling & Outlier Comparison
  function buildScalingWidget(el, lang) {
    let hasOutlier = false;
    function draw() {
      const base = [20, 30, 40, 50, 60, 70];
      const arr = hasOutlier ? [...base, 250] : base;
      const min = Math.min(...arr), max = Math.max(...arr);
      const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
      const std = Math.sqrt(arr.reduce((a, b) => a + (b - mean) ** 2, 0) / arr.length);
      const sorted = [...arr].sort((a, b) => a - b);
      const med = sorted[Math.floor(sorted.length / 2)];
      const q1 = sorted[Math.floor(sorted.length * 0.25)];
      const q3 = sorted[Math.floor(sorted.length * 0.75)];
      const iqr = q3 - q1 || 1;
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
          <span><strong>Data:</strong> [${arr.join(', ')}]</span>
          <button type="button" id="toggle-out" style="${btnStyle(hasOutlier)}">${hasOutlier ? (lang === 'uz' ? 'Outlier (250) bor ✓' : 'Outlier (250) ON ✓') : (lang === 'uz' ? '+ Outlier (250) qo\'shish' : '+ Add Outlier (250)')}</button>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead><tr style="color:#fbbf24;border-bottom:1px solid #334155;"><th>x</th><th>Min-Max</th><th>Z-Score</th><th>Robust (Med/IQR)</th></tr></thead>
          <tbody>
            ${arr.map((x) => {
              const mm = ((x - min) / (max - min)).toFixed(2);
              const zs = ((x - mean) / std).toFixed(2);
              const rb = ((x - med) / iqr).toFixed(2);
              return `<tr style="border-bottom:1px solid #1e293b;"><td>${x}</td><td>${mm}</td><td>${zs}</td><td>${rb}</td></tr>`;
            }).join('')}
          </tbody>
        </table>
        <div style="margin-top:8px;font-size:12px;color:#94a3b8;">
          ${lang === 'uz' ? 'Kuzatuv: Outlier qo\'shilganda Min-Max barcha oddiy qiymatlarni 0–0.22 ga siqib qo\'yadi, RobustScaler esa barqaror qoladi!' : 'Notice: With outlier 250, Min-Max crushes normal points into [0, 0.22], while RobustScaler stays stable!'}
        </div>
      </div>`;
      el.querySelector('#toggle-out').onclick = () => { hasOutlier = !hasOutlier; draw(); };
    }
    draw();
  }

  // 3. Decision Tree Split Explorer
  function buildDtSplitWidget(el, lang) {
    const pts = [
      { x: 1.5, c: 0 }, { x: 2.2, c: 0 }, { x: 3.1, c: 0 }, { x: 3.8, c: 0 }, { x: 4.9, c: 0 },
      { x: 4.2, c: 1 }, { x: 5.5, c: 1 }, { x: 6.1, c: 1 }, { x: 7.0, c: 1 }, { x: 7.8, c: 1 }
    ];
    let thr = 4.5;
    function ent(a, b) {
      const t = a + b; if (!t) return 0;
      const p1 = a / t, p0 = b / t;
      return (p1 ? -p1 * Math.log2(p1) : 0) + (p0 ? -p0 * Math.log2(p0) : 0);
    }
    function gini(a, b) {
      const t = a + b; if (!t) return 0;
      return 1 - (a / t) ** 2 - (b / t) ** 2;
    }
    function draw() {
      const left = pts.filter((p) => p.x <= thr);
      const right = pts.filter((p) => p.x > thr);
      const l0 = left.filter((p) => p.c === 0).length, l1 = left.length - l0;
      const r0 = right.filter((p) => p.c === 0).length, r1 = right.length - r0;
      const hRoot = ent(5, 5);
      const hSplit = (left.length / pts.length) * ent(l0, l1) + (right.length / pts.length) * ent(r0, r1);
      const ig = hRoot - hSplit;
      const gSplit = (left.length / pts.length) * gini(l0, l1) + (right.length / pts.length) * gini(r0, r1);
      const tx = ((thr - 1) / 7.5) * 440 + 20;

      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
          <span><strong>Split:</strong> X ≤ <span id="dt-thr-val" style="color:#fbbf24;">${thr.toFixed(1)}</span></span>
          <input type="range" id="dt-thr" min="1.5" max="7.5" step="0.2" value="${thr}" style="flex:1;max-width:260px;touch-action:none;">
        </div>
        <div id="dt-thr-out"></div>
      </div>`;
      const outEl = el.querySelector('#dt-thr-out');
      const valEl = el.querySelector('#dt-thr-val');
      function updateOut() {
        const left = pts.filter((p) => p.x <= thr), right = pts.filter((p) => p.x > thr);
        const l0 = left.filter((p) => p.c === 0).length, l1 = left.length - l0;
        const r0 = right.filter((p) => p.c === 0).length, r1 = right.length - r0;
        const gSplit = (left.length / pts.length) * gini(l0, l1) + (right.length / pts.length) * gini(r0, r1);
        const eSplit = (left.length / pts.length) * ent(l0, l1) + (right.length / pts.length) * ent(r0, r1);
        const ig = ent(5, 5) - eSplit;
        const tpos = ((thr - 1) / 7.5) * 440 + 20;
        valEl.textContent = thr.toFixed(1);
        outEl.innerHTML = `<svg viewBox="0 0 480 85" style="width:100%;max-width:520px;background:#080d18;border-radius:8px;display:block;margin-bottom:8px;">
          <line x1="${tpos}" y1="8" x2="${tpos}" y2="75" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,4"/>
          ${pts.map((p) => {
            const cx = ((p.x - 1) / 7.5) * 440 + 20;
            const cy = p.c === 0 ? 30 : 58;
            return `<circle cx="${cx}" cy="${cy}" r="7" fill="${p.c === 0 ? '#3b82f6' : '#ef4444'}" stroke="#fff" stroke-width="1"/>`;
          }).join('')}
        </svg>
        <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:13px;">
          <span>Left (${l0}B, ${l1}R)</span>
          <span>Right (${r0}B, ${r1}R)</span>
          <span style="color:#10b981;"><strong>IG = ${ig.toFixed(3)}</strong></span>
          <span style="color:#fbbf24;"><strong>Weighted Gini = ${gSplit.toFixed(3)}</strong></span>
        </div>`;
      }
      updateOut();
      el.querySelector('#dt-thr').oninput = (e) => { thr = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  // 4. k-NN Interactive Visualizer
  function buildKnnWidget(el, lang) {
    const data = [
      { x: 40, y: 40, c: 0 }, { x: 75, y: 65, c: 0 }, { x: 60, y: 110, c: 0 }, { x: 105, y: 50, c: 0 },
      { x: 185, y: 115, c: 1 }, { x: 210, y: 75, c: 1 }, { x: 235, y: 135, c: 1 }, { x: 165, y: 145, c: 1 },
      { x: 130, y: 85, c: 0 }
    ];
    let k = 3, q = { x: 140, y: 100 };
    function draw() {
      const sorted = data.map((p) => ({ ...p, d: Math.hypot(p.x - q.x, p.y - q.y) })).sort((a, b) => a.d - b.d);
      const nn = sorted.slice(0, k);
      const rad = nn[nn.length - 1].d;
      const c1 = nn.filter((p) => p.c === 1).length, c0 = k - c1;
      const pred = c1 > c0 ? (lang === 'uz' ? 'Qizil (1)' : 'Red (1)') : (lang === 'uz' ? 'Ko\'k (0)' : 'Blue (0)');
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
          <span>k = <strong style="color:#fbbf24;">${k}</strong> | ${lang === 'uz' ? 'Bashorat:' : 'Prediction:'} <strong>${pred}</strong> (${c0}B vs ${c1}R)</span>
          <div style="display:flex;gap:5px;">
            ${[1, 3, 5, 7].map((kv) => `<button type="button" data-k="${kv}" style="${btnStyle(k === kv)}">k=${kv}</button>`).join('')}
          </div>
        </div>
        <svg id="knn-svg" viewBox="0 0 280 175" style="width:100%;max-width:460px;background:#080d18;border-radius:8px;cursor:crosshair;display:block;touch-action:none;">
          <circle cx="${q.x}" cy="${q.y}" r="${rad}" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-dasharray="4,3"/>
          ${nn.map((p) => `<line x1="${q.x}" y1="${q.y}" x2="${p.x}" y2="${p.y}" stroke="#64748b" stroke-width="1.2"/>`).join('')}
          ${data.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="6" fill="${p.c === 0 ? '#3b82f6' : '#ef4444'}"/>`).join('')}
          <polygon points="${q.x},${q.y - 7} ${q.x + 7},${q.y + 6} ${q.x - 7},${q.y + 6}" fill="#fbbf24" stroke="#fff"/>
        </svg>
        <div style="font-size:12px;color:#94a3b8;margin-top:5px;">${lang === 'uz' ? 'Sariq nuqtani ko\'chirish uchun grafik ustiga bosing!' : 'Tap/click anywhere on the plot to move the query point!'}</div>
      </div>`;
      el.querySelectorAll('[data-k]').forEach((b) => b.onclick = () => { k = Number(b.dataset.k); draw(); });
      const svg = el.querySelector('#knn-svg');
      const movePoint = (cx, cy) => {
        const r = svg.getBoundingClientRect();
        if (!r.width || !r.height) return;
        q.x = Math.max(8, Math.min(272, Math.round(((cx - r.left) / r.width) * 280)));
        q.y = Math.max(8, Math.min(167, Math.round(((cy - r.top) / r.height) * 175)));
        draw();
      };
      svg.onclick = (e) => { movePoint(e.clientX, e.clientY); };
      svg.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          e.preventDefault();
          movePoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        }
      }, { passive: false });
    }
    draw();
  }

  // 5. ROC & Threshold Explorer
  function buildRocCmWidget(el, lang) {
    const scores = [
      { s: 0.95, y: 1 }, { s: 0.88, y: 1 }, { s: 0.82, y: 1 }, { s: 0.74, y: 0 }, { s: 0.68, y: 1 },
      { s: 0.55, y: 1 }, { s: 0.48, y: 0 }, { s: 0.35, y: 1 }, { s: 0.25, y: 0 }, { s: 0.18, y: 0 }, { s: 0.12, y: 0 }, { s: 0.05, y: 0 }
    ];
    let thr = 0.5;
    function draw() {
      let tp = 0, fp = 0, fn = 0, tn = 0;
      scores.forEach((o) => {
        const p = o.s >= thr ? 1 : 0;
        if (p === 1 && o.y === 1) tp++; else if (p === 1 && o.y === 0) fp++;
        else if (p === 0 && o.y === 1) fn++; else tn++;
      });
      const prec = tp + fp ? tp / (tp + fp) : 0;
      const rec = tp + fn ? tp / (tp + fn) : 0;
      const fpr = fp + tn ? fp / (fp + tn) : 0;
      const f1 = prec + rec ? (2 * prec * rec) / (prec + rec) : 0;
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap;">
          <span>Threshold = <strong id="roc-thr-val" style="color:#fbbf24;">${thr.toFixed(2)}</strong></span>
          <input type="range" id="roc-thr" min="0.1" max="0.9" step="0.05" value="${thr}" style="flex:1;touch-action:none;">
        </div>
        <div id="roc-thr-out"></div>
      </div>`;
      const valEl = el.querySelector('#roc-thr-val');
      const outEl = el.querySelector('#roc-thr-out');
      function updateOut() {
        let pTP = 0, pFP = 0, pFN = 0, pTN = 0;
        scores.forEach((d) => {
          const pred = d.s >= thr ? 1 : 0;
          if (pred === 1 && d.y === 1) pTP++;
          else if (pred === 1 && d.y === 0) pFP++;
          else if (pred === 0 && d.y === 1) pFN++;
          else pTN++;
        });
        const pPrec = pTP + pFP ? pTP / (pTP + pFP) : 0;
        const pRec = pTP + pFN ? pTP / (pTP + pFN) : 0;
        const pFpr = pFP + pTN ? pFP / (pFP + pTN) : 0;
        const pF1 = pPrec + pRec ? (2 * pPrec * pRec) / (pPrec + pRec) : 0;
        valEl.textContent = thr.toFixed(2);
        outEl.innerHTML = `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center;margin-bottom:8px;">
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><strong>TP: ${pTP}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><strong>FP: ${pFP}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><strong>FN: ${pFN}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><strong>TN: ${pTN}</strong></div>
        </div>
        <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:13px;color:#fbbf24;">
          <span>Precision: ${(pPrec * 100).toFixed(0)}%</span>
          <span>Recall (TPR): ${(pRec * 100).toFixed(0)}%</span>
          <span>FPR: ${(pFpr * 100).toFixed(0)}%</span>
          <span>F1: ${(pF1 * 100).toFixed(0)}%</span>
        </div>`;
      }
      updateOut();
      el.querySelector('#roc-thr').oninput = (e) => { thr = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  // 6. Apriori Support/Confidence Filter
  function buildAprioriWidget(el, lang) {
    const rules = [
      { r: '{Non} → {Sut}', sup: 0.60, conf: 0.75, lift: 1.25 },
      { r: '{Sut} → {Tuxum}', sup: 0.40, conf: 0.67, lift: 1.11 },
      { r: '{Non, Sut} → {Tuxum}', sup: 0.30, conf: 0.50, lift: 0.83 },
      { r: '{Pivo} → {Chips}', sup: 0.25, conf: 0.83, lift: 2.08 }
    ];
    let minSup = 0.25, minConf = 0.60;
    function draw() {
      const kept = rules.filter((x) => x.sup >= minSup && x.conf >= minConf);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:10px;font-size:13px;">
          <label>min_sup: <strong id="ap-sup-val">${(minSup * 100).toFixed(0)}%</strong> <input type="range" id="ap-sup" min="0.2" max="0.6" step="0.05" value="${minSup}" style="touch-action:none;"></label>
          <label>min_conf: <strong id="ap-conf-val">${(minConf * 100).toFixed(0)}%</strong> <input type="range" id="ap-conf" min="0.4" max="0.9" step="0.05" value="${minConf}" style="touch-action:none;"></label>
        </div>
        <div id="ap-out"></div>
      </div>`;
      const sVal = el.querySelector('#ap-sup-val');
      const cVal = el.querySelector('#ap-conf-val');
      const outEl = el.querySelector('#ap-out');
      function updateOut() {
        const list = rules.filter((x) => x.sup >= minSup && x.conf >= minConf);
        sVal.textContent = (minSup * 100).toFixed(0) + '%';
        cVal.textContent = (minConf * 100).toFixed(0) + '%';
        outEl.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead><tr style="color:#fbbf24;border-bottom:1px solid #334155;"><th>${lang === 'uz' ? 'Qoida' : 'Rule'}</th><th>Support</th><th>Confidence</th><th>Lift</th></tr></thead>
          <tbody>
            ${list.length ? list.map((x) => `<tr style="border-bottom:1px solid #1e293b;"><td>${x.r}</td><td>${x.sup.toFixed(2)}</td><td>${x.conf.toFixed(2)}</td><td style="color:${x.lift > 1 ? '#10b981' : '#f87171'};">${x.lift.toFixed(2)}</td></tr>`).join('') : `<tr><td colspan="4" style="color:#94a3b8;">${lang === 'uz' ? 'Mos qoida yo\'q' : 'No rules pass thresholds'}</td></tr>`}
          </tbody>
        </table>`;
      }
      updateOut();
      el.querySelector('#ap-sup').oninput = (e) => { minSup = Number(e.target.value); updateOut(); };
      el.querySelector('#ap-conf').oninput = (e) => { minConf = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  // 7. K-Means Step-by-Step Simulator
  function buildKmeansWidget(el, lang) {
    const pts = [
      { x: 40, y: 45 }, { x: 55, y: 65 }, { x: 70, y: 40 }, { x: 50, y: 80 },
      { x: 195, y: 45 }, { x: 215, y: 65 }, { x: 230, y: 50 }, { x: 205, y: 85 },
      { x: 120, y: 125 }, { x: 140, y: 145 }, { x: 155, y: 120 }, { x: 130, y: 155 }
    ];
    const colors = ['#f59e0b', '#3b82f6', '#10b981'];
    let centroids = [{ x: 100, y: 50 }, { x: 145, y: 65 }, { x: 180, y: 130 }];
    let labels = pts.map(() => 0);
    let stepCount = 0;

    function assign() {
      pts.forEach((p, i) => {
        let best = 0, bestD = Infinity;
        centroids.forEach((c, ci) => {
          const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
          if (d < bestD) { bestD = d; best = ci; }
        });
        labels[i] = best;
      });
    }
    function updateCentroids() {
      centroids = centroids.map((c, ci) => {
        const mem = pts.filter((_, i) => labels[i] === ci);
        if (!mem.length) return c;
        return {
          x: mem.reduce((s, p) => s + p.x, 0) / mem.length,
          y: mem.reduce((s, p) => s + p.y, 0) / mem.length
        };
      });
    }
    assign();
    function draw() {
      const wcss = pts.reduce((s, p, i) => s + ((p.x - centroids[labels[i]].x) ** 2 + (p.y - centroids[labels[i]].y) ** 2), 0);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
          <span>Iter: <strong>${stepCount}</strong> | WCSS: <strong style="color:#fbbf24;">${Math.round(wcss)}</strong></span>
          <div style="display:flex;gap:6px;">
            <button type="button" id="km-step" style="${btnStyle(true)}">${lang === 'uz' ? 'Keyingi qadam →' : 'Step Iteration →'}</button>
            <button type="button" id="km-reset" style="${btnStyle(false)}">Reset</button>
          </div>
        </div>
        <svg viewBox="0 0 280 180" style="width:100%;max-width:460px;background:#080d18;border-radius:8px;display:block;">
          ${pts.map((p, i) => `<line x1="${p.x}" y1="${p.y}" x2="${centroids[labels[i]].x}" y2="${centroids[labels[i]].y}" stroke="${colors[labels[i]]}" stroke-opacity="0.35"/>`).join('')}
          ${pts.map((p, i) => `<circle cx="${p.x}" cy="${p.y}" r="5.5" fill="${colors[labels[i]]}"/>`).join('')}
          ${centroids.map((c, i) => `<rect x="${c.x - 6}" y="${c.y - 6}" width="12" height="12" fill="${colors[i]}" stroke="#fff" stroke-width="2"/>`).join('')}
        </svg>
      </div>`;
      el.querySelector('#km-step').onclick = () => { updateCentroids(); assign(); stepCount++; draw(); };
      el.querySelector('#km-reset').onclick = () => {
        centroids = [{ x: 100, y: 50 }, { x: 145, y: 65 }, { x: 180, y: 130 }];
        stepCount = 0; assign(); draw();
      };
    }
    draw();
  }

  // 8. DBSCAN Density Explorer
  function buildDbscanWidget(el, lang) {
    const pts = [
      { x: 50, y: 90 }, { x: 65, y: 65 }, { x: 85, y: 50 }, { x: 110, y: 52 }, { x: 130, y: 68 }, { x: 142, y: 90 },
      { x: 130, y: 120 }, { x: 152, y: 135 }, { x: 178, y: 138 }, { x: 202, y: 122 }, { x: 215, y: 98 },
      { x: 255, y: 35 }, { x: 30, y: 150 }
    ];
    let eps = 34, minPts = 3;
    function draw() {
      const types = pts.map((p, i) => {
        const nbrs = pts.filter((q) => Math.hypot(p.x - q.x, p.y - q.y) <= eps).length;
        return nbrs >= minPts ? 'core' : 'check';
      });
      pts.forEach((p, i) => {
        if (types[i] !== 'core') {
          const nearCore = pts.some((q, j) => types[j] === 'core' && Math.hypot(p.x - q.x, p.y - q.y) <= eps);
          types[i] = nearCore ? 'border' : 'noise';
        }
      });
      const col = { core: '#10b981', border: '#f59e0b', noise: '#ef4444' };
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:8px;font-size:13px;">
          <label>eps: <strong id="db-eps-val">${eps}</strong> <input type="range" id="db-eps" min="18" max="60" value="${eps}" style="touch-action:none;"></label>
          <label>minPts: <strong id="db-min-val">${minPts}</strong> <input type="range" id="db-min" min="2" max="5" value="${minPts}" style="touch-action:none;"></label>
          <span><span style="color:#10b981;">● Core</span> · <span style="color:#f59e0b;">● Border</span> · <span style="color:#ef4444;">● Noise</span></span>
        </div>
        <div id="db-out"></div>
      </div>`;
      const epsVal = el.querySelector('#db-eps-val');
      const minVal = el.querySelector('#db-min-val');
      const outEl = el.querySelector('#db-out');
      function updateOut() {
        const curTypes = pts.map((p, i) => {
          let cnt = 0;
          pts.forEach((q) => { if (Math.hypot(p.x - q.x, p.y - q.y) <= eps) cnt++; });
          return cnt >= minPts ? 'core' : 'unknown';
        });
        pts.forEach((p, i) => {
          if (curTypes[i] === 'unknown') {
            const nearCore = pts.some((q, j) => curTypes[j] === 'core' && Math.hypot(p.x - q.x, p.y - q.y) <= eps);
            curTypes[i] = nearCore ? 'border' : 'noise';
          }
        });
        epsVal.textContent = eps;
        minVal.textContent = minPts;
        outEl.innerHTML = `<svg viewBox="0 0 280 170" style="width:100%;max-width:460px;background:#080d18;border-radius:8px;display:block;">
          ${pts.map((p, i) => curTypes[i] === 'core' ? `<circle cx="${p.x}" cy="${p.y}" r="${eps}" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.28)"/>` : '').join('')}
          ${pts.map((p, i) => `<circle cx="${p.x}" cy="${p.y}" r="5.5" fill="${col[curTypes[i]]}" stroke="#fff" stroke-width="1"/>`).join('')}
        </svg>`;
      }
      updateOut();
      el.querySelector('#db-eps').oninput = (e) => { eps = Number(e.target.value); updateOut(); };
      el.querySelector('#db-min').oninput = (e) => { minPts = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  // 9. Anomaly Detection (Isolation Cuts vs Z-Score)
  function buildAnomalyWidget(el, lang) {
    let mode = 'iso';
    const inliers = [[115, 85], [130, 95], [140, 80], [125, 105], [150, 92], [135, 70], [118, 98], [145, 104]];
    const outliers = [[28, 30], [250, 145]];
    function draw() {
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <button type="button" data-m="iso" style="${btnStyle(mode === 'iso')}">Isolation Forest</button>
          <button type="button" data-m="z" style="${btnStyle(mode === 'z')}">Z-Score / Elliptic</button>
        </div>
        <svg viewBox="0 0 280 170" style="width:100%;max-width:460px;background:#080d18;border-radius:8px;display:block;">
          ${mode === 'iso'
            ? `<line x1="65" y1="0" x2="65" y2="170" stroke="#f59e0b" stroke-dasharray="4,3"/>
               <line x1="215" y1="0" x2="215" y2="170" stroke="#f59e0b" stroke-dasharray="4,3"/>
               <text x="12" y="18" fill="#fbbf24" font-size="11">1 cut isolates (28,30)!</text>`
            : `<ellipse cx="132" cy="90" rx="48" ry="34" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-dasharray="4,3"/>
               <text x="80" y="18" fill="#10b981" font-size="11">|z| ≤ 3 normal zone</text>`}
          ${inliers.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#3b82f6"/>`).join('')}
          ${outliers.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="#ef4444" stroke="#fff"/>`).join('')}
        </svg>
      </div>`;
      el.querySelectorAll('[data-m]').forEach((b) => b.onclick = () => { mode = b.dataset.m; draw(); });
    }
    draw();
  }

  // 10. Ensemble Variance/Bias Explorer
  function buildEnsembleWidget(el, lang) {
    let nTrees = 10;
    function draw() {
      const singleErr = 0.24;
      const rfErr = (0.09 + 0.15 / Math.sqrt(nTrees)).toFixed(3);
      const gbErr = Math.max(0.05, 0.22 - 0.008 * Math.min(nTrees, 20)).toFixed(3);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap;">
          <span>n_estimators = <strong id="ens-n-val" style="color:#fbbf24;">${nTrees}</strong></span>
          <input type="range" id="ens-n" min="1" max="50" value="${nTrees}" style="flex:1;touch-action:none;">
        </div>
        <div id="ens-out"></div>
      </div>`;
      const valEl = el.querySelector('#ens-n-val');
      const outEl = el.querySelector('#ens-out');
      function updateOut() {
        const sErr = 0.24;
        const rErr = (0.09 + 0.15 / Math.sqrt(nTrees)).toFixed(3);
        const gErr = Math.max(0.05, 0.22 - 0.008 * Math.min(nTrees, 20)).toFixed(3);
        valEl.textContent = nTrees;
        outEl.innerHTML = `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;">
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><div style="font-size:12px;color:#94a3b8;">Single Tree</div><strong>Err: ${sErr}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><div style="font-size:12px;color:#10b981;">Random Forest</div><strong>Err: ${rErr}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><div style="font-size:12px;color:#fbbf24;">Grad. Boosting</div><strong>Err: ${gErr}</strong></div>
        </div>`;
      }
      updateOut();
      el.querySelector('#ens-n').oninput = (e) => { nTrees = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  // 11. TF-IDF Calculator Widget
  function buildTfidfWidget(el, lang) {
    const docs = [
      'data mining python data',
      'machine learning python code',
      'sql database query'
    ];
    let term = 'python';
    function draw() {
      const N = docs.length;
      const df = docs.filter((d) => d.split(' ').includes(term)).length || 1;
      const idf = Math.log10(N / df);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
          ${['data', 'python', 'mining', 'sql'].map((w) => `<button type="button" data-w="${w}" style="${btnStyle(term === w)}">${w}</button>`).join('')}
          <span style="margin-left:auto;">df=${df}/3, IDF=<strong>${idf.toFixed(3)}</strong></span>
        </div>
        ${docs.map((d, i) => {
          const ws = d.split(' ');
          const tf = ws.filter((x) => x === term).length / ws.length;
          const val = tf * idf;
          return `<div style="margin-bottom:6px;font-size:13px;">D${i + 1}: "${d}" → TF=${tf.toFixed(2)}, <strong style="color:#fbbf24;">TF-IDF=${val.toFixed(3)}</strong></div>`;
        }).join('')}
      </div>`;
      el.querySelectorAll('[data-w]').forEach((b) => b.onclick = () => { term = b.dataset.w; draw(); });
    }
    draw();
  }

  // 12. PageRank Power Iteration
  function buildPagerankWidget(el, lang) {
    let pr = [0.25, 0.25, 0.25, 0.25];
    let iter = 0;
    const d = 0.85;
    function step() {
      // Graph: 0->1,2; 1->2; 2->0; 3->0,2
      const next = [
        (1 - d) / 4 + d * (pr[2] / 1 + pr[3] / 2),
        (1 - d) / 4 + d * (pr[0] / 2),
        (1 - d) / 4 + d * (pr[0] / 2 + pr[1] / 1 + pr[3] / 2),
        (1 - d) / 4
      ];
      pr = next; iter++;
    }
    function draw() {
      const pos = [{ x: 70, y: 45, l: 'A' }, { x: 210, y: 45, l: 'B' }, { x: 210, y: 125, l: 'C' }, { x: 70, y: 125, l: 'D' }];
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span>Iter: <strong>${iter}</strong> (d=0.85)</span>
          <div style="display:flex;gap:6px;">
            <button type="button" id="pr-step" style="${btnStyle(true)}">${lang === 'uz' ? 'Iteratsiya +1' : 'Power Step +1'}</button>
            <button type="button" id="pr-reset" style="${btnStyle(false)}">Reset</button>
          </div>
        </div>
        <svg viewBox="0 0 280 165" style="width:100%;max-width:460px;background:#080d18;border-radius:8px;display:block;">
          <line x1="70" y1="45" x2="210" y2="45" stroke="#475569" stroke-width="2"/>
          <line x1="70" y1="45" x2="210" y2="125" stroke="#475569" stroke-width="2"/>
          <line x1="210" y1="45" x2="210" y2="125" stroke="#475569" stroke-width="2"/>
          <line x1="70" y1="125" x2="210" y2="125" stroke="#475569" stroke-width="2"/>
          <line x1="70" y1="125" x2="70" y2="45" stroke="#475569" stroke-width="2"/>
          ${pos.map((p, i) => {
            const rad = 12 + pr[i] * 42;
            return `<circle cx="${p.x}" cy="${p.y}" r="${rad}" fill="#f59e0b" fill-opacity="0.85" stroke="#fff"/>
                    <text x="${p.x}" y="${p.y + 4}" text-anchor="middle" fill="#0b1120" font-size="11" font-weight="bold">${p.l}: ${pr[i].toFixed(2)}</text>`;
          }).join('')}
        </svg>
      </div>`;
      el.querySelector('#pr-step').onclick = () => { step(); draw(); };
      el.querySelector('#pr-reset').onclick = () => { pr = [0.25, 0.25, 0.25, 0.25]; iter = 0; draw(); };
    }
    draw();
  }

  // 13. Stream Sliding Window & Drift
  function buildStreamWidget(el, lang) {
    let winSize = 5, drift = false;
    function draw() {
      const vals = drift ? [49, 52, 48, 51, 50, 72, 75, 71, 74, 73] : [49, 52, 48, 51, 50, 53, 47, 50, 52, 49];
      const latest = vals.slice(-winSize);
      const mean = (latest.reduce((a, b) => a + b, 0) / latest.length).toFixed(1);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:8px;">
          <label>Window W=<strong id="st-w-val">${winSize}</strong> <input type="range" id="st-w" min="2" max="10" value="${winSize}" style="touch-action:none;"></label>
          <button type="button" id="st-drift" style="${btnStyle(drift)}">${drift ? 'Concept Drift ON' : 'Trigger Concept Drift'}</button>
          <span style="color:#fbbf24;">Window Mean: <strong id="st-mean-val">${mean}</strong></span>
        </div>
        <div id="st-out" style="display:flex;gap:5px;flex-wrap:wrap;"></div>
      </div>`;
      const wVal = el.querySelector('#st-w-val');
      const mVal = el.querySelector('#st-mean-val');
      const outEl = el.querySelector('#st-out');
      function updateOut() {
        const curVals = drift ? [49, 52, 48, 51, 50, 72, 75, 71, 74, 73] : [49, 52, 48, 51, 50, 53, 47, 50, 52, 49];
        const curLatest = curVals.slice(-winSize);
        const curMean = (curLatest.reduce((a, b) => a + b, 0) / curLatest.length).toFixed(1);
        wVal.textContent = winSize;
        mVal.textContent = curMean;
        outEl.innerHTML = curVals.map((v, i) => {
          const inW = i >= curVals.length - winSize;
          return `<span style="padding:4px 8px;border-radius:6px;font-family:monospace;background:${inW ? '#f59e0b' : '#1e293b'};color:${inW ? '#0b1120' : '#94a3b8'};font-weight:700;">${v}</span>`;
        }).join('');
      }
      updateOut();
      el.querySelector('#st-w').oninput = (e) => { winSize = Number(e.target.value); updateOut(); };
      el.querySelector('#st-drift').onclick = () => { drift = !drift; draw(); };
    }
    draw();
  }

  // 14. Privacy k-Anonymity & DP Explorer
  function buildPrivacyWidget(el, lang) {
    let eps = 1.0;
    function draw() {
      const scale = (1 / eps).toFixed(2);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <span>Privacy Budget ε = <strong style="color:#fbbf24;">${eps.toFixed(1)}</strong></span>
          <input type="range" id="dp-eps" min="0.1" max="5.0" step="0.1" value="${eps}" style="flex:1;">
        </div>
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:13px;">
          <span>Noise Scale (Δf/ε): <strong>${scale}</strong></span>
          <span style="color:${eps <= 0.5 ? '#10b981' : eps <= 2 ? '#fbbf24' : '#f87171'};">
            ${eps <= 0.5 ? (lang === 'uz' ? '🔒 Juda kuchli maxfiylik (shovqin katta)' : '🔒 Very Strong Privacy (High Noise)') : eps <= 2 ? (lang === 'uz' ? '⚖️ Muvozanatli maxfiylik' : '⚖️ Balanced Privacy/Utility') : (lang === 'uz' ? '📊 Yuqori aniqlik (zaif maxfiylik)' : '📊 High Utility (Weaker Privacy)')}
          </span>
        </div>
      </div>`;
      el.querySelector('#dp-eps').oninput = (e) => { eps = Number(e.target.value); draw(); };
    }
    draw();
  }

  // 15. Capstone Model Benchmark
  function buildCapstoneWidget(el, lang) {
    let metric = 'cv';
    const data = [
      { m: 'Decision Tree', cv: 0.918, f1: 0.912, auc: 0.925 },
      { m: 'k-NN (k=7)', cv: 0.945, f1: 0.942, auc: 0.968 },
      { m: 'Random Forest', cv: 0.965, f1: 0.963, auc: 0.991 },
      { m: 'Gradient Boosting', cv: 0.971, f1: 0.970, auc: 0.994 }
    ];
    function draw() {
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:6px;margin-bottom:10px;">
          ${[['cv', '5-Fold CV'], ['f1', 'F1-Score'], ['auc', 'ROC-AUC']].map(([k, lbl]) => `<button type="button" data-mt="${k}" style="${btnStyle(metric === k)}">${lbl}</button>`).join('')}
        </div>
        ${data.map((row) => {
          const val = row[metric];
          const w = Math.round(val * 100);
          return `<div style="margin-bottom:7px;font-size:13px;">
            <div style="display:flex;justify-content:space-between;"><span>${row.m}</span><strong>${val.toFixed(3)}</strong></div>
            <div style="height:8px;background:#1e293b;border-radius:4px;overflow:hidden;"><div style="height:100%;width:${w}%;background:#f59e0b;"></div></div>
          </div>`;
        }).join('')}
      </div>`;
      el.querySelectorAll('[data-mt]').forEach((b) => b.onclick = () => { metric = b.dataset.mt; draw(); });
    }
    draw();
  }

  // 16. Data Types & Proximity Explorer (Tan Ch. 2)
  function buildDataTypesWidget(el, lang) {
    const scales = [
      { id: 'nom', uz: 'Nominal', en: 'Nominal', ops: '= , ≠', stat: 'Mode / Entropy', exUz: 'ZIP kod, Rang, Jins', exEn: 'ZIP code, Eye color, Gender' },
      { id: 'ord', uz: 'Ordinal', en: 'Ordinal', ops: '= , ≠ , < , >', stat: 'Median / Percentiles', exUz: 'Baholar (3,4,5), O\'lcham (S,M,L)', exEn: 'Grades, T-shirt sizes (S,M,L)' },
      { id: 'int', uz: 'Interval', en: 'Interval', ops: '+ , - (farq ma\'noli)', stat: 'Mean, Std Dev', exUz: 'Harorat (°C, °F), Kalendar yili', exEn: 'Temperature (°C, °F), Calendar Year' },
      { id: 'rat', uz: 'Ratio', en: 'Ratio', ops: '× , ÷ (haqiqiy 0 bor)', stat: 'Geometric Mean, CV', exUz: 'Yosh, Maosh, Masofa, Kelvin (°K)', exEn: 'Age, Salary, Distance, Kelvin (°K)' }
    ];
    let cur = 0;
    function draw() {
      const s = scales[cur];
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
          ${scales.map((sc, i) => `<button type="button" data-sc="${i}" style="${btnStyle(i === cur)}">${sc[lang]}</button>`).join('')}
        </div>
        <div style="background:var(--sw-sub, #162033);padding:10px 12px;border-radius:8px;font-size:13px;">
          <div><strong>${lang === 'uz' ? 'Ruxsat etilgan amallar:' : 'Valid Operations:'}</strong> <span style="color:#fbbf24;">${s.ops}</span></div>
          <div><strong>${lang === 'uz' ? 'Markaziy o\'lchov:' : 'Central Tendency:'}</strong> ${s.stat}</div>
          <div><strong>${lang === 'uz' ? 'Misollar:' : 'Examples:'}</strong> ${lang === 'uz' ? s.exUz : s.exEn}</div>
        </div>
      </div>`;
      el.querySelectorAll('[data-sc]').forEach((b) => b.onclick = () => { cur = Number(b.dataset.sc); draw(); });
    }
    draw();
  }

  // 17. Missing Data Imputation Explorer
  function buildCleaningWidget(el, lang) {
    let strat = 'median';
    const raw = [22, 24, null, 26, 25, 95, null];
    function draw() {
      const valid = raw.filter((x) => x !== null);
      const mean = (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(1);
      const sorted = [...valid].sort((a, b) => a - b);
      const med = sorted[Math.floor(sorted.length / 2)];
      const fillVal = strat === 'mean' ? Number(mean) : med;
      const filled = raw.map((x) => (x === null ? fillVal : x));
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
          <span>Raw: [22, 24, <strong style="color:#ef4444;">NaN</strong>, 26, 25, <strong style="color:#f59e0b;">95</strong>, <strong style="color:#ef4444;">NaN</strong>]</span>
          <div style="display:flex;gap:6px;">
            <button type="button" data-st="mean" style="${btnStyle(strat === 'mean')}">Mean (${mean})</button>
            <button type="button" data-st="median" style="${btnStyle(strat === 'median')}">Median (${med})</button>
          </div>
        </div>
        <div style="font-size:13px;">Filled: [${filled.join(', ')}]</div>
        <div style="font-size:12px;color:#94a3b8;margin-top:4px;">${lang === 'uz' ? '95 outlier Mean ni 38.4 ga tortdi; Median (25) esa barqaror qoldi!' : 'Outlier 95 pulls Mean up to 38.4; Median (25) stays immune!'}</div>
      </div>`;
      el.querySelectorAll('[data-st]').forEach((b) => b.onclick = () => { strat = b.dataset.st; draw(); });
    }
    draw();
  }

  // 18. Impurity Curves (Entropy vs Gini vs Error, Tan Fig 3.12)
  function buildFeatureSelWidget(el, lang) {
    let p = 0.5;
    function draw() {
      const ent = (p > 0 && p < 1) ? (-p * Math.log2(p) - (1 - p) * Math.log2(1 - p)) : 0;
      const gini = 1 - p * p - (1 - p) * (1 - p);
      const err = 1 - Math.max(p, 1 - p);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap;">
          <span>Class p = <strong id="fs-p-val" style="color:#fbbf24;">${p.toFixed(2)}</strong></span>
          <input type="range" id="fs-p" min="0" max="1" step="0.05" value="${p}" style="flex:1;touch-action:none;">
        </div>
        <div id="fs-out"></div>
      </div>`;
      const valEl = el.querySelector('#fs-p-val');
      const outEl = el.querySelector('#fs-out');
      function updateOut() {
        const curEnt = (p > 0 && p < 1) ? (-p * Math.log2(p) - (1 - p) * Math.log2(1 - p)) : 0;
        const curGini = 1 - p * p - (1 - p) * (1 - p);
        const curErr = 1 - Math.max(p, 1 - p);
        valEl.textContent = p.toFixed(2);
        outEl.innerHTML = `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;font-size:13px;">
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><div style="color:#3b82f6;">Entropy</div><strong>${curEnt.toFixed(3)}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><div style="color:#f59e0b;">Gini (max 0.5)</div><strong>${curGini.toFixed(3)}</strong></div>
          <div style="background:var(--sw-sub, #162033);padding:8px;border-radius:8px;"><div style="color:#10b981;">Misclass. Error</div><strong>${curErr.toFixed(3)}</strong></div>
        </div>`;
      }
      updateOut();
      el.querySelector('#fs-p').oninput = (e) => { p = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  // 19. Confidence Trap & Lift Explorer
  function buildMarketBasketWidget(el, lang) {
    let teaMilk = 180;
    function draw() {
      const n = 1000, tea = 200, milk = 900;
      const conf = teaMilk / tea;
      const lift = conf / (milk / n);
      el.innerHTML = `<div style="${boxStyle()}">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:13px;flex-wrap:wrap;">
          <span>count(Choy & Sut) = <strong id="mb-tm-val">${teaMilk}</strong> / 200</span>
          <input type="range" id="mb-tm" min="80" max="200" step="10" value="${teaMilk}" style="flex:1;touch-action:none;">
        </div>
        <div id="mb-out"></div>
      </div>`;
      const valEl = el.querySelector('#mb-tm-val');
      const outEl = el.querySelector('#mb-out');
      function updateOut() {
        const curConf = teaMilk / tea;
        const curLift = curConf / (milk / n);
        valEl.textContent = teaMilk;
        outEl.innerHTML = `<div style="display:flex;gap:14px;flex-wrap:wrap;font-size:13px;">
          <span>Sup(Sut)=0.90</span>
          <span>Conf(Choy→Sut)=<strong>${(curConf * 100).toFixed(0)}%</strong></span>
          <span style="color:${curLift > 1.05 ? '#10b981' : curLift < 0.95 ? '#ef4444' : '#fbbf24'};"><strong>Lift = ${curLift.toFixed(2)}</strong></span>
        </div>`;
      }
      updateOut();
      el.querySelector('#mb-tm').oninput = (e) => { teaMilk = Number(e.target.value); updateOut(); };
    }
    draw();
  }

  function bindInteractiveSurface(el) {
    if (!el || el.dataset.dmTouchBound) return;
    el.dataset.dmTouchBound = '1';
    el.setAttribute('data-prevent-swipe', '');
    var stopTouch = function (e) {
      if (e.target && e.target.closest('input, button, select, textarea, svg, a, label, [data-idx]')) {
        e.stopPropagation();
      }
    };
    el.addEventListener('touchstart', stopTouch, { passive: true });
    el.addEventListener('touchmove', stopTouch, { passive: true });
    el.addEventListener('pointerdown', stopTouch, { passive: true });
  }

  function safeRenderWidget(container, widgetId) {
    bindInteractiveSurface(container);
    renderWidget(container, widgetId);
  }

  window.DM_WIDGETS = { renderWidget: safeRenderWidget };
})();
