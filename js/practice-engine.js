(function () {
  function initPracticePage() {
    const root = document.getElementById('practice-root');
    if (!root) return;

    const { getLang, renderChrome } = window.DM_APP;
    const problems = window.DM_PRACTICE || [];
    const topics = window.DM_TOPICS || [];
    let selectedTopic = 'all';
    let selectedDiff = 'all';
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
          </div>
        `;
      }
      if (activeCalc === 'entropy') {
        return `
          <div class="panel">
            <h3>${lang === 'uz' ? '🌳 Entropiya va Gini Indeksi Kalkulyatori' : '🌳 Decision Tree Entropy & Gini Calculator'}</h3>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-top:0;">
              ${lang === 'uz' ? 'Ikkilik sinflar (Musbat va Manfiy) sonini kiriting.' : 'Adjust Positive and Negative class counts in a node.'}
            </p>
            <div class="calc-grid">
              <div class="input-group">
                <label>${lang === 'uz' ? 'Musbat (Positive) soni' : 'Positive Count'}</label>
                <input type="number" id="calc-pos" min="0" value="6">
              </div>
              <div class="input-group">
                <label>${lang === 'uz' ? 'Manfiy (Negative) soni' : 'Negative Count'}</label>
                <input type="number" id="calc-neg" min="0" value="4">
              </div>
            </div>
            <div id="calc-entropy-out"></div>
          </div>
        `;
      }
      if (activeCalc === 'cm') {
        return `
          <div class="panel">
            <h3>${lang === 'uz' ? '📊 Confusion Matrix Metrikalar Kalkulyatori' : '📊 Confusion Matrix Metrics Explorer'}</h3>
            <div class="calc-grid">
              <div class="input-group"><label>TP (True Positive)</label><input type="number" id="cm-tp" min="0" value="40"></div>
              <div class="input-group"><label>FP (False Positive)</label><input type="number" id="cm-fp" min="0" value="10"></div>
              <div class="input-group"><label>FN (False Negative)</label><input type="number" id="cm-fn" min="0" value="20"></div>
              <div class="input-group"><label>TN (True Negative)</label><input type="number" id="cm-tn" min="0" value="930"></div>
            </div>
            <div id="calc-cm-out"></div>
          </div>
        `;
      }
      return `
        <div class="panel">
          <h3>${lang === 'uz' ? '🛒 Market Basket: Support, Confidence va Lift' : '🛒 Market Basket: Support, Confidence & Lift'}</h3>
          <div class="calc-grid">
            <div class="input-group"><label>${lang === 'uz' ? 'Jami tranzaksiyalar (N)' : 'Total Transactions (N)'}</label><input type="number" id="mb-n" min="1" value="1000"></div>
            <div class="input-group"><label>count(A)</label><input type="number" id="mb-a" min="0" value="400"></div>
            <div class="input-group"><label>count(B)</label><input type="number" id="mb-b" min="0" value="300"></div>
            <div class="input-group"><label>count(A ∪ B)</label><input type="number" id="mb-ab" min="0" value="240"></div>
          </div>
          <div id="calc-mb-out"></div>
        </div>
      `;
    }

    function bindCalculators(lang) {
      if (activeCalc === 'norm') {
        const inp = document.getElementById('calc-norm-input');
        const out = document.getElementById('calc-norm-out');
        const update = () => {
          const nums = inp.value.split(',').map((s) => parseFloat(s.trim())).filter((n) => !Number.isNaN(n));
          if (nums.length === 0) {
            out.innerHTML = `<p style="color:var(--red);">${lang === 'uz' ? 'Sonlarni kiriting.' : 'Enter valid numbers.'}</p>`;
            return;
          }
          const min = Math.min(...nums);
          const max = Math.max(...nums);
          const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
          const std = Math.sqrt(nums.reduce((a, b) => a + (b - mean) ** 2, 0) / nums.length);

          out.innerHTML = `
            <div class="result-grid" style="margin-bottom:0.85rem;">
              <div class="result-box"><div class="val">${min}</div><div class="lbl">Min</div></div>
              <div class="result-box"><div class="val">${max}</div><div class="lbl">Max</div></div>
              <div class="result-box"><div class="val">${mean.toFixed(2)}</div><div class="lbl">Mean (μ)</div></div>
              <div class="result-box"><div class="val">${std.toFixed(2)}</div><div class="lbl">Std (σ)</div></div>
            </div>
            <div class="data-table-wrap">
              <table class="data-table">
                <thead><tr><th>x</th><th>Min-Max [0,1]</th><th>Z-score</th></tr></thead>
                <tbody>
                  ${nums.map((x) => {
                    const mm = max === min ? 0 : (x - min) / (max - min);
                    const zs = std === 0 ? 0 : (x - mean) / std;
                    return `<tr><td>${x}</td><td>${mm.toFixed(3)}</td><td>${zs.toFixed(3)}</td></tr>`;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        };
        inp.addEventListener('input', update);
        update();
      } else if (activeCalc === 'entropy') {
        const pIn = document.getElementById('calc-pos');
        const nIn = document.getElementById('calc-neg');
        const out = document.getElementById('calc-entropy-out');
        const update = () => {
          const pos = Math.max(0, Number(pIn.value) || 0);
          const neg = Math.max(0, Number(nIn.value) || 0);
          const total = pos + neg;
          if (total === 0) {
            out.innerHTML = '';
            return;
          }
          const p1 = pos / total;
          const p0 = neg / total;
          const ent = (p1 > 0 ? -p1 * Math.log2(p1) : 0) + (p0 > 0 ? -p0 * Math.log2(p0) : 0);
          const gini = 1 - (p1 * p1 + p0 * p0);
          out.innerHTML = `
            <div class="result-grid">
              <div class="result-box"><div class="val">${total}</div><div class="lbl">${lang === 'uz' ? 'Jami' : 'Total'}</div></div>
              <div class="result-box"><div class="val">${ent.toFixed(4)}</div><div class="lbl">Entropy H(S)</div></div>
              <div class="result-box"><div class="val">${gini.toFixed(4)}</div><div class="lbl">Gini(S)</div></div>
            </div>
          `;
        };
        pIn.addEventListener('input', update);
        nIn.addEventListener('input', update);
        update();
      } else if (activeCalc === 'cm') {
        const ids = ['cm-tp', 'cm-fp', 'cm-fn', 'cm-tn'];
        const out = document.getElementById('calc-cm-out');
        const update = () => {
          const tp = Math.max(0, Number(document.getElementById('cm-tp').value) || 0);
          const fp = Math.max(0, Number(document.getElementById('cm-fp').value) || 0);
          const fn = Math.max(0, Number(document.getElementById('cm-fn').value) || 0);
          const tn = Math.max(0, Number(document.getElementById('cm-tn').value) || 0);
          const n = tp + fp + fn + tn;
          const acc = n ? (tp + tn) / n : 0;
          const prec = tp + fp ? tp / (tp + fp) : 0;
          const rec = tp + fn ? tp / (tp + fn) : 0;
          const f1 = prec + rec ? (2 * prec * rec) / (prec + rec) : 0;
          out.innerHTML = `
            <div class="result-grid">
              <div class="result-box"><div class="val">${(acc * 100).toFixed(1)}%</div><div class="lbl">Accuracy</div></div>
              <div class="result-box"><div class="val">${(prec * 100).toFixed(1)}%</div><div class="lbl">Precision</div></div>
              <div class="result-box"><div class="val">${(rec * 100).toFixed(1)}%</div><div class="lbl">Recall</div></div>
              <div class="result-box"><div class="val">${(f1 * 100).toFixed(1)}%</div><div class="lbl">F1-Score</div></div>
            </div>
          `;
        };
        ids.forEach((id) => document.getElementById(id).addEventListener('input', update));
        update();
      } else {
        const ids = ['mb-n', 'mb-a', 'mb-b', 'mb-ab'];
        const out = document.getElementById('calc-mb-out');
        const update = () => {
          const n = Math.max(1, Number(document.getElementById('mb-n').value) || 1);
          const a = Math.max(0, Number(document.getElementById('mb-a').value) || 0);
          const b = Math.max(0, Number(document.getElementById('mb-b').value) || 0);
          const ab = Math.min(a, b, Math.max(0, Number(document.getElementById('mb-ab').value) || 0));
          const sup = ab / n;
          const conf = a ? ab / a : 0;
          const supB = b / n;
          const lift = supB ? conf / supB : 0;
          out.innerHTML = `
            <div class="result-grid">
              <div class="result-box"><div class="val">${(sup * 100).toFixed(1)}%</div><div class="lbl">Support(A∪B)</div></div>
              <div class="result-box"><div class="val">${(conf * 100).toFixed(1)}%</div><div class="lbl">Confidence(A→B)</div></div>
              <div class="result-box"><div class="val">${lift.toFixed(2)}</div><div class="lbl">Lift(A→B)</div></div>
            </div>
          `;
        };
        ids.forEach((id) => document.getElementById(id).addEventListener('input', update));
        update();
      }
    }

    function draw() {
      const lang = getLang();
      const filtered = problems.filter((p) => {
        if (selectedTopic !== 'all' && String(p.topicId) !== String(selectedTopic)) return false;
        if (selectedDiff !== 'all' && p.difficulty !== selectedDiff) return false;
        return true;
      });

      root.innerHTML = `
        <section class="hero" style="padding:1.6rem;">
          <span class="pill">🧪 ${lang === 'uz' ? 'Amaliy Mashqlar va Interaktiv Kalkulyatorlar' : 'Practice Problems & Interactive Labs'}</span>
          <h1 style="font-size:1.9rem; margin-bottom:0.4rem;">
            ${lang === 'uz' ? 'Masalalar Yechish va Formula Tajribalari' : 'Hands-On Exercises & Algorithm Calculators'}
          </h1>
          <p class="hero-subtitle" style="margin-bottom:0;">
            ${lang === 'uz'
              ? 'Hisoblash, konseptual va Python kodlash topshiriqlarini yeching hamda brauzer ichidagi interaktiv kalkulyatorlar bilan tajriba o\'tkazing.'
              : 'Solve worked numerical, conceptual, and Python coding problems with step-by-step solutions and live browser calculators.'}
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
          <h2 class="section-title">${lang === 'uz' ? `✏️ Amaliy Masalalar (${filtered.length})` : `✏️ Practice Questions (${filtered.length})`}</h2>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <select id="practice-topic-filter" class="search-input" style="min-width:210px;">
              <option value="all">${lang === 'uz' ? 'Barcha mavzular' : 'All Topics'}</option>
              ${topics.map((tp) => `<option value="${tp.id}" ${String(selectedTopic) === String(tp.id) ? 'selected' : ''}>${tp.id}. ${tp.title[lang]}</option>`).join('')}
            </select>
            <select id="practice-diff-filter" class="search-input" style="min-width:140px;">
              <option value="all">${lang === 'uz' ? 'Barcha daraja' : 'All Levels'}</option>
              <option value="easy" ${selectedDiff === 'easy' ? 'selected' : ''}>Easy</option>
              <option value="medium" ${selectedDiff === 'medium' ? 'selected' : ''}>Medium</option>
              <option value="hard" ${selectedDiff === 'hard' ? 'selected' : ''}>Hard</option>
            </select>
          </div>
        </div>

        <div>
          ${filtered.map((p, i) => {
            const tp = topics.find((x) => x.id === p.topicId);
            return `
              <article class="practice-card">
                <div class="practice-meta">
                  <span class="badge badge-topic">${tp ? `${tp.id}. ${tp.title[lang]}` : `Topic ${p.topicId}`}</span>
                  <span class="badge badge-${p.difficulty}">${p.difficulty.toUpperCase()}</span>
                  <span class="tag">${p.type[lang]}</span>
                </div>
                <h3 style="margin:0 0 0.5rem; font-size:1.05rem;">${i + 1}. ${p.title[lang]}</h3>
                <div style="color:var(--text-secondary); font-size:0.93rem; margin-bottom:0.85rem;">${p.question[lang]}</div>

                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                  <button type="button" class="btn btn-secondary btn-sm" data-toggle="hint-${p.id}">
                    💡 ${lang === 'uz' ? 'Maslahat' : 'Show Hint'}
                  </button>
                  <button type="button" class="btn btn-primary btn-sm" data-toggle="sol-${p.id}">
                    ✅ ${lang === 'uz' ? 'Yechimni ko\'rish' : 'Show Solution'}
                  </button>
                </div>

                <div class="collapsible-body" id="hint-${p.id}">
                  <strong>💡 ${lang === 'uz' ? 'Maslahat:' : 'Hint:'}</strong> ${p.hint[lang]}
                </div>
                <div class="collapsible-body" id="sol-${p.id}">
                  <strong>✅ ${lang === 'uz' ? 'Bosqichma-bosqich yechim:' : 'Worked Solution:'}</strong>
                  <div style="margin-top:0.4rem;">${p.solution[lang]}</div>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `;

      root.querySelectorAll('[data-calc]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeCalc = btn.getAttribute('data-calc');
          draw();
        });
      });

      const tFilter = document.getElementById('practice-topic-filter');
      const dFilter = document.getElementById('practice-diff-filter');
      if (tFilter) tFilter.addEventListener('change', (e) => { selectedTopic = e.target.value; draw(); });
      if (dFilter) dFilter.addEventListener('change', (e) => { selectedDiff = e.target.value; draw(); });

      root.querySelectorAll('[data-toggle]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = document.getElementById(btn.getAttribute('data-toggle'));
          if (target) target.classList.toggle('open');
        });
      });

      bindCalculators(lang);
    }

    renderChrome('practice');
    draw();
    window.addEventListener('dm:langchange', draw);
  }

  window.DM_PRACTICE_ENGINE = { initPracticePage };
})();
