(function () {
  function initPracticePage() {
    const root = document.getElementById('practice-root');
    if (!root) return;

    const { getLang, renderChrome } = window.DM_APP;
    const seminars = window.DM_PRACTICE || [];
    const topics = window.DM_TOPICS || [];
    let activeCalc = 'norm';

    function renderCalculator(lang) {
      if (activeCalc === 'norm') {
        return `
          <div class="panel">
            <h3>${lang === 'uz' ? '📏 Min-Max va Z-score Normallashtirish Kalkulyatori' : '📏 Min-Max & Z-Score Normalization Lab'}</h3>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-top:0;">
              ${lang === 'uz' ? 'Vergul bilan ajratilgan sonlarni kiriting va natijani real vaqtda ko\'ring.' : 'Enter comma-separated numeric values to compute Min-Max and Z-score scaling live.'}
            </p>
            <div class="input-group">
              <label>${lang === 'uz' ? 'Qiymatlar to\'plami (X)' : 'Dataset Values (X)'}</label>
              <input type="text" id="calc-norm-input" value="40, 60, 80, 100">
            </div>
            <div id="calc-norm-out" style="margin-top:1rem;"></div>
          </div>`;
      }
      if (activeCalc === 'entropy') {
        return `
          <div class="panel">
            <h3>${lang === 'uz' ? '🌳 Entropiya va Gini Indeksi Kalkulyatori' : '🌳 Decision Tree Entropy & Gini Calculator'}</h3>
            <div class="calc-grid">
              <div class="input-group"><label>${lang === 'uz' ? 'Musbat (Positive)' : 'Positive Count'}</label><input type="number" id="calc-pos" min="0" value="6"></div>
              <div class="input-group"><label>${lang === 'uz' ? 'Manfiy (Negative)' : 'Negative Count'}</label><input type="number" id="calc-neg" min="0" value="4"></div>
            </div>
            <div id="calc-entropy-out"></div>
          </div>`;
      }
      if (activeCalc === 'cm') {
        return `
          <div class="panel">
            <h3>${lang === 'uz' ? '📊 Confusion Matrix Metrikalar Kalkulyatori' : '📊 Confusion Matrix Metrics Explorer'}</h3>
            <div class="calc-grid">
              <div class="input-group"><label>TP</label><input type="number" id="cm-tp" min="0" value="40"></div>
              <div class="input-group"><label>FP</label><input type="number" id="cm-fp" min="0" value="10"></div>
              <div class="input-group"><label>FN</label><input type="number" id="cm-fn" min="0" value="20"></div>
              <div class="input-group"><label>TN</label><input type="number" id="cm-tn" min="0" value="930"></div>
            </div>
            <div id="calc-cm-out"></div>
          </div>`;
      }
      return `
        <div class="panel">
          <h3>${lang === 'uz' ? '🛒 Savat tahlili: Support, Confidence va Lift' : '🛒 Market Basket: Support, Confidence & Lift'}</h3>
          <div class="calc-grid">
            <div class="input-group"><label>N (${lang === 'uz' ? 'jami' : 'total'})</label><input type="number" id="mb-n" min="1" value="1000"></div>
            <div class="input-group"><label>count(A)</label><input type="number" id="mb-a" min="0" value="400"></div>
            <div class="input-group"><label>count(B)</label><input type="number" id="mb-b" min="0" value="300"></div>
            <div class="input-group"><label>count(A ∪ B)</label><input type="number" id="mb-ab" min="0" value="240"></div>
          </div>
          <div id="calc-mb-out"></div>
        </div>`;
    }

    function bindCalculators(lang) {
      if (activeCalc === 'norm') {
        const inp = document.getElementById('calc-norm-input');
        const out = document.getElementById('calc-norm-out');
        const update = () => {
          const nums = inp.value.split(',').map((s) => parseFloat(s.trim())).filter((n) => !Number.isNaN(n));
          if (!nums.length) { out.innerHTML = ''; return; }
          const min = Math.min(...nums), max = Math.max(...nums);
          const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
          const std = Math.sqrt(nums.reduce((a, b) => a + (b - mean) ** 2, 0) / nums.length);
          out.innerHTML = `
            <div class="result-grid" style="margin-bottom:0.85rem;">
              <div class="result-box"><div class="val">${min}</div><div class="lbl">Min</div></div>
              <div class="result-box"><div class="val">${max}</div><div class="lbl">Max</div></div>
              <div class="result-box"><div class="val">${mean.toFixed(2)}</div><div class="lbl">Mean (μ)</div></div>
              <div class="result-box"><div class="val">${std.toFixed(2)}</div><div class="lbl">Std (σ)</div></div>
            </div>
            <div class="data-table-wrap"><table class="data-table"><thead><tr><th>x</th><th>Min-Max</th><th>Z-score</th></tr></thead><tbody>
              ${nums.map((x) => `<tr><td>${x}</td><td>${(max === min ? 0 : (x - min) / (max - min)).toFixed(3)}</td><td>${(std === 0 ? 0 : (x - mean) / std).toFixed(3)}</td></tr>`).join('')}
            </tbody></table></div>`;
        };
        inp.addEventListener('input', update); update();
      } else if (activeCalc === 'entropy') {
        const pIn = document.getElementById('calc-pos'), nIn = document.getElementById('calc-neg'), out = document.getElementById('calc-entropy-out');
        const update = () => {
          const pos = Math.max(0, Number(pIn.value) || 0), neg = Math.max(0, Number(nIn.value) || 0), tot = pos + neg;
          if (!tot) { out.innerHTML = ''; return; }
          const p1 = pos / tot, p0 = neg / tot;
          const ent = (p1 > 0 ? -p1 * Math.log2(p1) : 0) + (p0 > 0 ? -p0 * Math.log2(p0) : 0);
          const gini = 1 - (p1 * p1 + p0 * p0);
          out.innerHTML = `<div class="result-grid"><div class="result-box"><div class="val">${tot}</div><div class="lbl">${lang === 'uz' ? 'Jami' : 'Total'}</div></div><div class="result-box"><div class="val">${ent.toFixed(4)}</div><div class="lbl">Entropy</div></div><div class="result-box"><div class="val">${gini.toFixed(4)}</div><div class="lbl">Gini</div></div></div>`;
        };
        pIn.addEventListener('input', update); nIn.addEventListener('input', update); update();
      } else if (activeCalc === 'cm') {
        const ids = ['cm-tp', 'cm-fp', 'cm-fn', 'cm-tn'], out = document.getElementById('calc-cm-out');
        const update = () => {
          const tp = Math.max(0, Number(document.getElementById('cm-tp').value) || 0);
          const fp = Math.max(0, Number(document.getElementById('cm-fp').value) || 0);
          const fn = Math.max(0, Number(document.getElementById('cm-fn').value) || 0);
          const tn = Math.max(0, Number(document.getElementById('cm-tn').value) || 0);
          const n = tp + fp + fn + tn;
          const acc = n ? (tp + tn) / n : 0, prec = tp + fp ? tp / (tp + fp) : 0, rec = tp + fn ? tp / (tp + fn) : 0;
          const f1 = prec + rec ? (2 * prec * rec) / (prec + rec) : 0;
          out.innerHTML = `<div class="result-grid"><div class="result-box"><div class="val">${(acc * 100).toFixed(1)}%</div><div class="lbl">Accuracy</div></div><div class="result-box"><div class="val">${(prec * 100).toFixed(1)}%</div><div class="lbl">Precision</div></div><div class="result-box"><div class="val">${(rec * 100).toFixed(1)}%</div><div class="lbl">Recall</div></div><div class="result-box"><div class="val">${(f1 * 100).toFixed(1)}%</div><div class="lbl">F1-Score</div></div></div>`;
        };
        ids.forEach((id) => document.getElementById(id).addEventListener('input', update)); update();
      } else {
        const ids = ['mb-n', 'mb-a', 'mb-b', 'mb-ab'], out = document.getElementById('calc-mb-out');
        const update = () => {
          const n = Math.max(1, Number(document.getElementById('mb-n').value) || 1);
          const a = Math.max(0, Number(document.getElementById('mb-a').value) || 0);
          const b = Math.max(0, Number(document.getElementById('mb-b').value) || 0);
          const ab = Math.min(a, b, Math.max(0, Number(document.getElementById('mb-ab').value) || 0));
          const sup = ab / n, conf = a ? ab / a : 0, supB = b / n, lift = supB ? conf / supB : 0;
          out.innerHTML = `<div class="result-grid"><div class="result-box"><div class="val">${(sup * 100).toFixed(1)}%</div><div class="lbl">Support</div></div><div class="result-box"><div class="val">${(conf * 100).toFixed(1)}%</div><div class="lbl">Confidence</div></div><div class="result-box"><div class="val">${lift.toFixed(2)}</div><div class="lbl">Lift</div></div></div>`;
        };
        ids.forEach((id) => document.getElementById(id).addEventListener('input', update)); update();
      }
    }

    function draw() {
      const lang = getLang();
      root.innerHTML = `
        <section class="hero" style="padding:1.6rem;">
          <span class="pill">✏️ ${lang === 'uz' ? '7 ta Majburiy Amaliy Mashg\'ulot (A1–A7 · 14 soat)' : '7 Mandatory Practice Seminars (A1–A7 · 14 hrs)'}</span>
          <h1 style="font-size:1.85rem; margin-bottom:0.4rem;">
            ${lang === 'uz' ? 'Amaliy Mashg\'ulotlar (A1–A7) va Kalkulyatorlar' : 'Practice Seminars (A1–A7) & Calculators'}
          </h1>
          <p class="hero-subtitle" style="margin-bottom:0;">
            ${lang === 'uz'
              ? 'O\'quv dasturidagi barcha 7 ta amaliy seminar topshiriqlari (2 soatdan = 14 soat) hamda jonli hisoblash kalkulyatorlari.'
              : 'All 7 mandatory seminar sessions from the official syllabus (2 hrs each = 14 hrs) plus live Data Mining calculators.'}
          </p>
        </section>

        <div class="section-header" style="margin-top:1.5rem;">
          <h2 class="section-title">${lang === 'uz' ? '⚡ Interaktiv Data Mining Kalkulyatorlari' : '⚡ Interactive Data Mining Mini-Labs'}</h2>
        </div>
        <div class="tabs">
          <button type="button" class="tab-btn ${activeCalc === 'norm' ? 'active' : ''}" data-calc="norm">1. Min-Max & Z-Score</button>
          <button type="button" class="tab-btn ${activeCalc === 'entropy' ? 'active' : ''}" data-calc="entropy">2. Entropy & Gini</button>
          <button type="button" class="tab-btn ${activeCalc === 'cm' ? 'active' : ''}" data-calc="cm">3. Confusion Matrix</button>
          <button type="button" class="tab-btn ${activeCalc === 'mb' ? 'active' : ''}" data-calc="mb">4. Support / Lift</button>
        </div>
        ${renderCalculator(lang)}

        <div class="section-header">
          <h2 class="section-title">${lang === 'uz' ? '📘 Majburiy Amaliy Mashg\'ulotlar (A1–A7)' : '📘 Mandatory Practice Sessions (A1–A7)'}</h2>
        </div>

        <div>
          ${seminars.map((p) => {
            const tp = topics.find((x) => x.id === p.topicId);
            return `
              <article class="practice-card">
                <div class="practice-meta">
                  <span class="badge badge-topic">${p.type[lang]}</span>
                  ${tp ? `<a href="topic.html?id=${tp.id}" class="tag">${tp.code || 'M' + tp.id}: ${tp.title[lang]}</a>` : ''}
                </div>
                <h3 style="margin:0 0 0.5rem; font-size:1.05rem;">${p.title[lang]}</h3>
                <div style="color:var(--text-secondary); font-size:0.93rem; margin-bottom:0.85rem;">${p.question[lang]}</div>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                  <button type="button" class="btn btn-secondary btn-sm" data-toggle="hint-${p.id}">💡 ${lang === 'uz' ? 'Maslahat' : 'Hint'}</button>
                  <button type="button" class="btn btn-primary btn-sm" data-toggle="sol-${p.id}">✅ ${lang === 'uz' ? 'Yechimni ko\'rish' : 'Solution'}</button>
                </div>
                <div class="collapsible-body" id="hint-${p.id}"><strong>💡 ${lang === 'uz' ? 'Maslahat:' : 'Hint:'}</strong> ${p.hint[lang]}</div>
                <div class="collapsible-body" id="sol-${p.id}"><strong>✅ ${lang === 'uz' ? 'Yechim:' : 'Worked Solution:'}</strong><div style="margin-top:0.4rem;">${p.solution[lang]}</div></div>
              </article>`;
          }).join('')}
        </div>`;

      root.querySelectorAll('[data-calc]').forEach((btn) => btn.addEventListener('click', () => { activeCalc = btn.dataset.calc; draw(); }));
      root.querySelectorAll('[data-toggle]').forEach((btn) => btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.toggle);
        if (target) target.classList.toggle('open');
      }));
      bindCalculators(lang);
    }

    renderChrome('practice');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  window.DM_PRACTICE_ENGINE = { initPracticePage };
})();
