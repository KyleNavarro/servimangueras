(() => {
  'use strict';

  const WA = '573104696186';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const fmt = (n, d = 1) => (n == null ? '—' : Number(n).toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: d }));
  const waUrl = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Encabezado y menú ---------- */
  const header = $('#header');
  const toggle = $('.nav-toggle');
  const nav = $('#nav');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeNav = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); };
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  $$('a', nav).forEach((a) => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeNav(); toggle.focus(); } });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Datos técnicos de mangueras ---------- */
  // Fila: [pulgadas, mm, Øint[min,max], Ømalla[min,max]|null, Øext[min,max], Ptrabajo, Pprueba, Protura, Rmín, kg/m, variante]
  const HOSES = {
    R1AT: {
      name: 'SAE 100R1AT', short: 'R1AT', tag: '1 malla acero',
      build: 'Simple malla de alambre de acero trenzado de alta resistencia. Goma resistente al aceite y al envejecimiento.',
      norma: 'DIN EN853 1SN · SAE J517 100R1AT', temp: '−40 °C a +100 °C',
      uso: 'Fluidos oleohidráulicos o líquidos a base de agua.',
      layers: { kind: 'braid', n: 1, label: 'tubo de caucho, 1 malla de acero trenzado, cubierta' },
      rows: [
        ['1/4', 6, [6.2, 7], [10.6, 11.6], [null, 14.1], 229, 459, 918, 100, 0.25],
        ['3/8', 10, [9.3, 10.1], [14.5, 15.7], [null, 18.1], 184, 367, 734, 130, 0.36],
        ['1/2', 12.5, [12.3, 13.5], [17.5, 19], [null, 21.4], 163, 326, 653, 180, 0.45],
        ['3/4', 19, [18.6, 19.8], [24.6, 26.2], [null, 28.5], 107, 214, 530, 240, 0.65],
        ['1', 25, [25, 26.4], [32.5, 34.1], [null, 36.6], 90, 178, 357, 300, 0.91],
        ['1 1/4', 31.5, [31.4, 33], [39.3, 41.7], [null, 44.8], 64, 153, 255, 420, 1.3],
        ['1 1/2', 38, [31.7, 39.3], [45.6, 48], [null, 52.1], 51, 102, 204, 500, 1.7],
        ['2', 51, [50.4, 52], [58.7, 61.7], [null, 65.5], 41, 82, 163, 630, 2],
      ],
    },
    R2AT: {
      name: 'SAE 100R2AT', short: 'R2AT', tag: '2 mallas acero',
      build: 'Doble malla de alambre de acero trenzado de alta resistencia. Goma resistente al aceite y al envejecimiento.',
      norma: 'DIN EN853 2SN · SAE J517 R2AT', temp: '−40 °C a +100 °C',
      uso: 'Fluidos oleohidráulicos o líquidos a base de agua.',
      layers: { kind: 'braid', n: 2, label: 'tubo de caucho, 2 mallas de acero trenzado, cubierta' },
      rows: [
        ['1/4', 6, [6.1, 7], [12.1, 13.3], [null, 15.7], 408, 816, 1632, 100, 0.36],
        ['5/16', 8, [7.7, 8.5], [13.7, 14.9], [null, 17.3], 357, 714, 1428, 115, 0.45],
        ['3/8', 10, [9.3, 10.1], [16.1, 17.3], [null, 19.7], 337, 673, 1346, 130, 0.54],
        ['1/2', 12.5, [12.3, 13.5], [19, 20.6], [null, 23], 280, 561, 1122, 180, 0.65],
        ['5/8', 16, [15.5, 16.7], [22.2, 23.8], [null, 26.2], 255, 510, 1020, 200, 0.8],
        ['3/4', 19, [18.6, 19.8], [26.2, 27.8], [null, 30.1], 219, 438, 867, 240, 0.94],
        ['1', 25, [25, 26.4], [34.1, 35.7], [null, 38.9], 168, 331, 663, 300, 1.35],
        ['1 1/4', 31.5, [31.4, 33], [43.3, 45.7], [null, 49.5], 127, 255, 510, 420, 2.15],
        ['1 1/2', 38, [37.7, 39.3], [49.6, 52], [null, 55.9], 92, 184, 367, 500, 2.65],
        ['2', 51, [50.4, 52], [62.3, 64.7], [null, 68.6], 82, 163, 326, 630, 3.42],
      ],
    },
    R3: {
      name: 'SAE 100R3', short: 'R3', tag: '2 trenzas fibra',
      build: 'Tubo interior de caucho sintético, dos trenzas de fibra y cubierta de goma sintética resistente al aceite y a la intemperie.',
      norma: 'SAE 100R3', temp: '−40 °C a +100 °C',
      uso: 'Líneas de retorno.',
      layers: { kind: 'textile', n: 2, label: 'tubo de caucho, 2 trenzas de fibra, cubierta' },
      rows: [
        ['1/2', 12.5, [12.4, 13.5], null, [23, 24.6], 71, null, 286, 125, 0.27],
        ['5/8', 16, [15.6, 16.7], null, [26.2, 27.8], 62, null, 249, 140, 0.51],
        ['3/4', 19, [18.7, 19.8], null, [31, 32.5], 53, null, 212, 150, 0.61],
        ['1', 25, [25.1, 26.2], null, [36.9, 39.3], 40, null, 159, 205, 0.91],
        ['1 1/4', 31.5, [31.4, 32.9], null, [42.9, 46], 27, null, 106, 250, 0.74],
      ],
    },
    R4: {
      name: 'SAE 100R4', short: 'R4', tag: 'succión',
      build: 'Tubo interior de caucho sintético, dos trenzas de fibras textiles, una espiral de alambre de acero y cubierta de goma sintética resistente al aceite y a la intemperie.',
      norma: 'SAE 100R4', temp: '−40 °C a +100 °C',
      uso: 'Succión: baja presión y vacío.',
      layers: { kind: 'helix', n: 2, label: 'tubo de caucho, 2 trenzas textiles, espiral de acero, cubierta' },
      rows: [
        ['3/4', 19, [18.2, 19.8], null, [null, 34.9], 20, 40, 80, null, 0.92],
        ['1', 25, [24.6, 26.2], null, [null, 41.3], 18, 36, 72, null, 1.1],
        ['1 1/4', 31.5, [30.6, 33], null, [null, 50.8], 15, 30, 60, null, 1.3],
        ['1 1/2', 38, [36.9, 39.3], null, [null, 57.2], 10, 20, 40, null, 1.8],
        ['2', 51, [49.2, 52.4], null, [null, 69.9], 7, 14, 28, null, 2.23],
      ],
    },
    R7: {
      name: 'SAE 100R7', short: 'R7', tag: 'termoplástica',
      build: 'Tubo interior de nylon, malla simple de fibra sintética y cubierta de poliuretano no conductora, color naranja. En versión sencilla (single) y doble (twin).',
      norma: 'SAE 100R7', temp: '−40 °C a +100 °C (aceites)',
      uso: 'Media presión: maquinaria de ingeniería, máquinas herramienta, automoción, minería, aire acondicionado y refrigeración, industria alimenticia y química.',
      layers: { kind: 'textile', n: 1, label: 'tubo de nylon, 1 malla de fibra sintética, cubierta de poliuretano' },
      rows: [
        ['1/4', 6, [6.3, null], null, [null, 11.7], 200, 800, null, 50, 0.09, 'Single'],
        ['5/16', 8, [7.9, null], null, [null, 14.3], 190, 760, null, 50, 0.125, 'Single'],
        ['3/8', 10, [9.5, null], null, [null, 15.9], 175, 700, null, 80, 0.14, 'Single'],
        ['1/4', 6, [6.3, null], null, [null, 11.7], 200, 800, null, 50, 0.21, 'Twin'],
        ['5/16', 8, [7.9, null], null, [null, 14.3], 190, 760, null, 50, 0.26, 'Twin'],
        ['3/8', 10, [9.5, null], null, [null, 15.9], 175, 700, null, 80, 0.3, 'Twin'],
      ],
    },
    R12: {
      name: 'SAE 100R12', short: 'R12', tag: '4 espirales',
      build: 'Tubo interno de caucho sintético, cuatro capas de alambre de acero en espiral en direcciones alternas y cubierta de caucho sintético resistente al aceite y a la intemperie.',
      norma: 'SAE 100R12 · GB/T 10544-2003', temp: '−40 °C a +121 °C',
      uso: null,
      layers: { kind: 'spiral', n: 4, label: 'tubo de caucho, 4 espirales de acero, cubierta' },
      rows: [
        ['3/8', 10, [9.3, 10.1], [16.6, 17.8], [19.5, 21], 286, 571, 1142, 125, 0.7],
        ['1/2', 12.5, [12.3, 13.5], [19.9, 21.5], [23, 24.6], 286, 571, 1142, 180, 0.83],
        ['5/8', 16, [15.5, 16.7], [23.8, 25.4], [26.6, 28.2], 286, 571, 1142, 200, 1.12],
        ['3/4', 19, [18.6, 19.8], [26.9, 28.4], [29.6, 31.5], 286, 571, 1142, 240, 1.43],
        ['1', 25, [25, 26.4], [34.1, 35.7], [36.8, 39.2], 286, 571, 1142, 300, 2],
        ['1 1/4', 31.5, [31.4, 33], [42.7, 45.1], [45.4, 48.6], 286, 428, 857, 420, 2.8],
        ['1 1/2', 38, [37.7, 39.3], [49.2, 51.6], [51.9, 55], 214, 357, 714, 500, 3.4],
      ],
    },
    R13: {
      name: 'SAE 100R13', short: 'R13', tag: 'multiespiral',
      build: 'Tubo interno de caucho sintético, múltiples capas de alambre de acero en espiral en direcciones alternas y cubierta de caucho sintético resistente al aceite y a la intemperie.',
      norma: 'SAE 100R13 · GB/T 10544-2003', temp: '−40 °C a +121 °C',
      uso: null,
      layers: { kind: 'spiral', n: 6, label: 'tubo de caucho, espirales múltiples de acero, cubierta' },
      rows: [
        ['3/4', 19, [18.6, 19.8], [28.2, 29.8], [31, 33.2], 357, 714, 1428, 240, 1.8],
        ['1', 25, [25, 26.4], [34.9, 36.4], [37.6, 39.8], 357, 714, 1428, 300, 2.5],
        ['1 1/4', 31.5, [31.4, 33], [45.6, 48], [48.3, 51.3], 357, 714, 1428, 420, 3.8],
        ['1 1/2', 38, [37.7, 39.3], [53.1, 55.5], [55.8, 58.8], 357, 714, 1428, 500, 4.85],
        ['2', 51, [50.4, 52], [66.9, 69.3], [69.5, 72.7], 357, 714, 1428, 640, 6.9],
      ],
    },
  };
  const ORDER = ['R1AT', 'R2AT', 'R3', 'R4', 'R7', 'R12', 'R13'];
  const UNITS = {
    kg: { label: 'kg/cm²', f: 1, d: 0 },
    bar: { label: 'bar', f: 0.980665, d: 0 },
    psi: { label: 'psi', f: 14.2233, d: 0 },
  };


  const state = { type: 'R2AT', idx: 3, unit: 'kg' };
  try {
    const saved = JSON.parse(localStorage.getItem('sm-annex') || 'null');
    if (saved && HOSES[saved.type]) {
      state.type = saved.type;
      state.idx = Math.min(saved.idx | 0, HOSES[saved.type].rows.length - 1);
      if (UNITS[saved.unit]) state.unit = saved.unit;
    }
  } catch (e) { /* sin almacenamiento */ }
  const save = () => { try { localStorage.setItem('sm-annex', JSON.stringify(state)); } catch (e) { /* */ } };

  const picker = $('#type-picker');
  const tbody = $('#sizes-body');

  ORDER.forEach((key) => {
    const h = HOSES[key];
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.id = 'tab-' + key;
    b.dataset.type = key;
    b.setAttribute('aria-controls', 'sizes');
    b.innerHTML = `${h.name}<small>${h.tag}</small>`;
    b.addEventListener('click', () => selectType(key, true));
    picker.appendChild(b);
  });
  picker.addEventListener('keydown', (e) => {
    const i = ORDER.indexOf(state.type);
    let n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % ORDER.length;
    if (e.key === 'ArrowLeft') n = (i - 1 + ORDER.length) % ORDER.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = ORDER.length - 1;
    if (n != null) { e.preventDefault(); selectType(ORDER[n], true); $('#tab-' + ORDER[n]).focus(); }
  });

  const mid = (r) => (r ? (r[0] != null && r[1] != null ? (r[0] + r[1]) / 2 : (r[0] ?? r[1])) : null);
  const range = (r) => {
    if (!r) return '—';
    if (r[0] != null && r[1] != null) return `${fmt(r[0])}–${fmt(r[1])}`;
    return fmt(r[0] ?? r[1]);
  };
  const pressTxt = (v) => {
    if (v == null) return '—';
    const p = v * UNITS[state.unit].f;
    return fmt(state.unit === 'psi' ? Math.round(p / 5) * 5 : Math.round(p), 0);
  };

  function renderTable() {
    const h = HOSES[state.type];
    tbody.innerHTML = '';
    h.rows.forEach((row, i) => {
      const tr = document.createElement('tr');
      tr.tabIndex = 0;
      tr.dataset.idx = i;
      const variant = row[10] ? ` · ${row[10]}` : '';
      tr.innerHTML = [
        `<td class="s-size">${row[0]}″<small>${fmt(row[1])} mm${variant}</small></td>`,
        `<td class="s-pt">${pressTxt(row[5])}</td>`,
        `<td>${range(row[2])}</td>`,
        `<td>${range(row[4])}</td>`,
        `<td${row[6] == null ? ' class="na"' : ''}>${pressTxt(row[6])}</td>`,
        `<td${row[7] == null ? ' class="na"' : ''}>${pressTxt(row[7])}</td>`,
        `<td${row[8] == null ? ' class="na"' : ''}>${row[8] == null ? '—' : fmt(row[8])}</td>`,
        `<td>${fmt(row[9], 3)}</td>`,
      ].join('');
      tr.addEventListener('click', () => selectRow(i));
      tr.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectRow(i); }
        if (e.key === 'ArrowDown' && tr.nextElementSibling) { e.preventDefault(); tr.nextElementSibling.focus(); selectRow(i + 1); }
        if (e.key === 'ArrowUp' && tr.previousElementSibling) { e.preventDefault(); tr.previousElementSibling.focus(); selectRow(i - 1); }
      });
      tbody.appendChild(tr);
    });
    $$('.sizes th small.u').forEach((s) => (s.textContent = UNITS[state.unit].label));
  }

  /* Corte de construcción: la medida elegida llena el dibujo */
  const SVGNS = 'http://www.w3.org/2000/svg';
  const rings = $('#xsec-rings');
  const ringEls = [];
  const ensureRings = (n) => {
    while (ringEls.length < n) {
      const c = document.createElementNS(SVGNS, 'circle');
      c.setAttribute('cx', 110); c.setAttribute('cy', 110); c.setAttribute('r', 0);
      rings.appendChild(c);
      ringEls.push(c);
    }
    ringEls.forEach((c, i) => (c.style.display = i < n ? '' : 'none'));
  };

  function renderSection() {
    const h = HOSES[state.type];
    const row = h.rows[state.idx];
    const L = h.layers;
    const rIn = mid(row[2]) / 2;
    const rOut = (row[4][1] ?? row[4][0]) / 2;
    const rReinf = row[3] ? mid(row[3]) / 2 : rIn + (rOut - rIn) * 0.72;
    const tube = rIn + (rReinf - rIn) * (L.kind === 'spiral' ? 0.32 : 0.45);
    const S = 100 / rOut;
    const band = rReinf - tube;
    const specs = [
      { r: rOut, fill: '#111111' },
      { r: rReinf, fill: '#e6e6e0', stroke: '#111111', sw: 1 },
    ];
    for (let k = 0; k < L.n; k++) {
      const r = tube + band * ((k + 0.5) / L.n);
      const s = { r, fill: 'none', stroke: L.kind === 'textile' || L.kind === 'helix' ? '#8a7a3a' : '#5a5a55' };
      s.sw = Math.max(1.2, band * S / L.n * (L.kind === 'spiral' ? 0.55 : 0.5));
      if (L.kind === 'braid') s.dash = '2.4 1.6';
      if (L.kind === 'textile' || L.kind === 'helix') s.dash = '1 2.2';
      specs.push(s);
    }
    if (L.kind === 'helix') specs.push({ r: tube + band * 0.5, fill: 'none', stroke: '#5a5a55', sw: Math.max(1.6, band * S * 0.22) });
    specs.push({ r: tube, fill: '#111111' });
    specs.push({ r: rIn, fill: '#f6c400', stroke: '#111111', sw: 1 });

    ensureRings(specs.length);
    specs.forEach((s, i) => {
      const c = ringEls[i];
      const r = (s.r * S).toFixed(2);
      c.setAttribute('r', r); c.style.r = r + 'px';
      c.style.fill = s.fill; c.style.stroke = s.stroke || 'none'; c.style.strokeWidth = s.sw || 0;
      if (s.dash) c.setAttribute('stroke-dasharray', s.dash); else c.removeAttribute('stroke-dasharray');
    });

    $('#ro-size').textContent = `${row[0]}″${row[10] ? ' ' + row[10] : ''}`;
    $('#ro-int').innerHTML = `${fmt(mid(row[2]))}<small>mm</small>`;
    $('#ro-pt').innerHTML = `${pressTxt(row[5])}<small>${UNITS[state.unit].label}</small>`;
    $('#ro-layers').textContent = `En corte: ${L.label}.`;

    const msg = `Hola Servimangueras, quiero cotizar manguera ${h.name} de ${row[0]}″ (${fmt(row[1])} mm)${row[10] ? ' ' + row[10] : ''}. Largo: ___ m. Racores: ___`;
    $('#order-hose').href = waUrl(msg);
  }

  function renderSpec() {
    const h = HOSES[state.type];
    $('#spec-name').textContent = h.name;
    $('#spec-build').textContent = h.build;
    $('#spec-norma').textContent = h.norma;
    $('#spec-temp').textContent = h.temp;
    const usoRow = $('#spec-uso-row');
    usoRow.hidden = !h.uso;
    if (h.uso) $('#spec-uso').textContent = h.uso;
    $$('#type-picker button').forEach((b) => {
      const on = b.dataset.type === state.type;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
  }

  function markRow() {
    $$('tr', tbody).forEach((tr) => {
      const on = Number(tr.dataset.idx) === state.idx;
      tr.classList.toggle('is-sel', on);
      tr.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  }

  function selectType(key, keepSize) {
    const prev = HOSES[state.type].rows[state.idx];
    state.type = key;
    const rows = HOSES[key].rows;
    let idx = keepSize && prev ? rows.findIndex((r) => r[0] === prev[0]) : 0;
    if (idx < 0) {
      let best = 0, bd = Infinity;
      rows.forEach((r, i) => { const d = Math.abs(r[1] - (prev ? prev[1] : 0)); if (d < bd) { bd = d; best = i; } });
      idx = best;
    }
    state.idx = idx;
    renderSpec(); renderTable(); markRow(); renderSection(); save();
  }
  function selectRow(i) { state.idx = i; markRow(); renderSection(); save(); }

  $$('input[name="unit"]').forEach((r) => {
    r.checked = r.value === state.unit;
    r.addEventListener('change', () => { state.unit = r.value; renderTable(); markRow(); renderSection(); save(); });
  });

  const initialIdx = state.idx;
  selectType(state.type, false);
  selectRow(Math.min(initialIdx, HOSES[state.type].rows.length - 1));

  /* ---------- Calculadora (nomograma del fabricante) ---------- */
  const SIZES = [
    [4.8, '3/16', '−03'], [6.3, '1/4', '−04'], [7.9, '5/16', '−05'], [9.5, '3/8', '−06'],
    [12.7, '1/2', '−08'], [15.9, '5/8', '−10'], [19.1, '3/4', '−12'], [25.4, '1', '−16'],
    [31.8, '1 1/4', '−20'], [38.1, '1 1/2', '−24'], [50.8, '2', '−32'],
  ];
  const calcForm = $('#calc-form');
  function calc() {
    const q = parseFloat(String($('#caudal').value).replace(',', '.'));
    const v = parseFloat($('#linea').value);
    const err = $('#calc-err');
    if (!(q > 0)) {
      err.hidden = false; err.textContent = 'Escriba el caudal de la bomba en litros por minuto.';
      $('#calc-d').textContent = '—'; $('#calc-size').textContent = '—'; $('#calc-dash').textContent = '';
      return;
    }
    err.hidden = true;
    const d = Math.sqrt((4 * (q / 60000)) / (Math.PI * v)) * 1000; // mm
    $('#calc-d').textContent = `${fmt(d)} mm`;
    const pick = SIZES.find((s) => s[0] >= d - 0.05);
    if (pick) { $('#calc-size').textContent = `${pick[1]}″`; $('#calc-dash').textContent = `(${fmt(pick[0])} mm · ${pick[2]})`; }
    else { $('#calc-size').textContent = 'más de 2″'; $('#calc-dash').textContent = 'Consulte con el taller.'; }
  }
  calcForm.addEventListener('input', calc);
  calcForm.addEventListener('change', calc);
  calcForm.addEventListener('submit', (e) => e.preventDefault());
  calc();

  /* ---------- Formulario de cotización → WhatsApp ---------- */
  const quote = $('#quote-form');
  const status = $('#form-status');
  quote.addEventListener('submit', (e) => {
    e.preventDefault();
    $$('.fld.has-error', quote).forEach((f) => f.classList.remove('has-error'));
    const nombre = $('#q-nombre').value.trim();
    const equipo = $('#q-equipo').value.trim();
    const servicio = $('#q-servicio').value;
    const detalle = $('#q-detalle').value.trim();
    if (!equipo && !servicio && !detalle) {
      $('#q-equipo').closest('.fld').classList.add('has-error');
      $('#q-servicio').closest('.fld').classList.add('has-error');
      status.className = 'form-status is-error';
      status.textContent = 'Escriba el equipo o elija qué necesita para poder cotizar.';
      $('#q-equipo').focus();
      return;
    }
    const lines = [
      'Hola Servimangueras, quiero una cotización.',
      nombre && `Nombre/empresa: ${nombre}`,
      equipo && `Equipo: ${equipo}`,
      servicio && `Necesito: ${servicio}`,
      detalle && `Detalle: ${detalle}`,
    ].filter(Boolean);
    const url = waUrl(lines.join('\n'));
    const w = window.open(url, '_blank', 'noopener');
    if (!w) window.location.href = url;
    status.className = 'form-status';
    status.textContent = 'Se abrió WhatsApp con su solicitud. Si no se abrió, llame al 310 469 6186.';
  });
  quote.addEventListener('input', () => {
    if (status.classList.contains('is-error')) { status.textContent = ''; status.className = 'form-status'; $$('.fld.has-error', quote).forEach((f) => f.classList.remove('has-error')); }
  });
})();
