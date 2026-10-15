// Virtual experiments for bryan/science.html. SCI_SIMS[topicId](container) builds one experiment.
// Numbers in the experiments are simple classroom-style models, labelled as such where it matters.
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, attrs) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'on') Object.keys(attrs.on).forEach(function (ev) { n.addEventListener(ev, attrs.on[ev]); });
      else n.setAttribute(k, attrs[k]);
    });
    for (var i = 2; i < arguments.length; i++) { var c = arguments[i]; if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); }
    return n;
  }
  function S(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(n);
    return n;
  }
  function svg(w, h, label) { var s = S('svg', { viewBox: '0 0 ' + w + ' ' + h, role: 'img', 'aria-label': label }); s.classList.add('stage'); return s; }
  function btn(text, fn, cls) { var b = el('button', { type: 'button', class: 'sbtn' + (cls ? ' ' + cls : '') }, text); b.onclick = fn; return b; }
  // A row of mutually exclusive choice buttons.
  function chips(label, options, value, onChange) {
    var row = el('div', { class: 'ctrl', role: 'group', 'aria-label': label });
    if (label) row.appendChild(el('span', { class: 'lbl' }, label));
    var buttons = options.map(function (o) {
      var v = Array.isArray(o) ? o[0] : o, t = Array.isArray(o) ? o[1] : o;
      var b = el('button', { type: 'button', class: 'chip', 'aria-pressed': v === value ? 'true' : 'false' }, t);
      b.onclick = function () { buttons.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true'); onChange(v); };
      row.appendChild(b); return b;
    });
    return row;
  }
  function slider(label, min, max, step, value, fmt, onInput) {
    var out = el('output', { class: 'val' }, fmt(value));
    var r = el('input', { type: 'range', min: min, max: max, step: step, value: value, 'aria-label': label });
    r.addEventListener('input', function () { out.textContent = fmt(+r.value); onInput(+r.value); });
    return el('label', { class: 'ctrl slider' }, el('span', { class: 'lbl' }, label), r, out);
  }
  function note(text, kind) { return el('div', { class: 'out' + (kind ? ' ' + kind : '') }, text); }
  function setNote(n, text, kind) { n.textContent = text; n.className = 'out' + (kind ? ' ' + kind : ''); }
  // requestAnimationFrame loop that stops when the experiment leaves the page.
  function loop(root, fn) {
    var last = performance.now();
    function tick(now) {
      if (!root.isConnected) return;
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      fn(dt, now / 1000);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function arrowMarker(s, id, color) {
    var defs = S('defs', null, s);
    var m = S('marker', { id: id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, defs);
    S('path', { d: 'M0,0 L10,5 L0,10 z', fill: color }, m);
  }
  function table(headers) {
    var t = el('table', { class: 'res' }), tr = el('tr');
    headers.forEach(function (h) { tr.appendChild(el('th', null, h)); });
    t.appendChild(el('thead', null, tr)); var tb = el('tbody'); t.appendChild(tb);
    return { el: t, add: function (cells) { var r = el('tr'); cells.forEach(function (c) { r.appendChild(el('td', null, String(c))); }); tb.appendChild(r); return r; }, clear: function () { tb.textContent = ''; } };
  }

  var SIMS = {};

  /* 1. Living and non-living: sorting */
  SIMS.living = function (root) {
    var items = [
      ['🍄', 'Mushroom', true, 'A fungus: it needs food, water and air, grows and reproduces.'],
      ['🪨', 'Rock', false, 'It does not need food, grow or reproduce.'],
      ['🌵', 'Cactus', true, 'A plant: it grows, makes seeds and needs water.'],
      ['🚗', 'Car', false, 'It moves, but does not need food, respond or reproduce.'],
      ['🐛', 'Caterpillar', true, 'It eats leaves, grows and becomes a butterfly that lays eggs.'],
      ['🔥', 'Fire', false, 'Fire spreads, but it does not reproduce or respond like a living thing.'],
      ['🦠', 'Bacteria', true, 'Tiny living things that feed, grow and reproduce.'],
      ['🧸', 'Teddy bear', false, 'It cannot grow, respond or reproduce.'],
      ['🌱', 'Seedling', true, 'A young plant that grows and needs water and air.'],
      ['💧', 'Water drop', false, 'Water is needed by living things, but it is not alive.'],
      ['🐟', 'Fish', true, 'It breathes, feeds, grows and reproduces.'],
      ['☁️', 'Cloud', false, 'Clouds move and change shape, but they are not alive.']
    ].sort(function () { return Math.random() - .5; });
    var i = 0, score = 0;
    var card = el('div', { class: 'bigcard' });
    var bins = el('div', { class: 'bins' }, el('div', { class: 'bin' }, el('b', null, 'Living'), el('div', { class: 'got', id: 'liv' })), el('div', { class: 'bin' }, el('b', null, 'Non-living'), el('div', { class: 'got', id: 'non' })));
    var fb = note('Is it living or non-living? Tap your answer.');
    var choice = el('div', { class: 'ctrl' }, btn('🌱 Living', function () { pick(true); }), btn('🪨 Non-living', function () { pick(false); }));
    function show() {
      if (i >= items.length) { card.textContent = '🎉'; setNote(fb, 'All sorted! You got ' + score + ' out of ' + items.length + ' right the first time.', 'good'); choice.hidden = true; return; }
      card.textContent = ''; card.appendChild(el('div', { class: 'emo' }, items[i][0])); card.appendChild(el('div', null, items[i][1]));
    }
    function pick(living) {
      var it = items[i], ok = it[2] === living;
      if (ok) score++;
      setNote(fb, (ok ? '✓ Correct! ' : '✗ Not quite. ') + it[1] + ' is ' + (it[2] ? 'living' : 'non-living') + '. ' + it[3], ok ? 'good' : 'bad');
      bins.querySelector(it[2] ? '#liv' : '#non').appendChild(el('span', { title: it[1] }, it[0]));
      i++; show();
    }
    root.append(card, choice, fb, bins); show();
  };

  /* 2. Classification key */
  SIMS.classify = function (root) {
    var KEY = {
      q1: ['Does it have feathers?', 'Bird', 'q2'],
      q2: ['Does it feed its young with milk?', 'Mammal', 'q3'],
      q3: ['Does it have 6 legs and 3 body parts?', 'Insect', 'q4'],
      q4: ['Does it have fins and breathe with gills all its life?', 'Fish', 'q5'],
      q5: ['Does it have moist skin?', 'Amphibian', 'Reptile']
    };
    var ANIMALS = [['🦇', 'Bat', 'Mammal'], ['🐧', 'Penguin', 'Bird'], ['🐋', 'Whale', 'Mammal'], ['🦈', 'Shark', 'Fish'], ['🐸', 'Frog', 'Amphibian'], ['🐊', 'Crocodile', 'Reptile'], ['🦋', 'Butterfly', 'Insect'], ['🐬', 'Dolphin', 'Mammal'], ['🐢', 'Turtle', 'Reptile'], ['🐜', 'Ant', 'Insect'], ['🦅', 'Eagle', 'Bird'], ['🦎', 'Gecko', 'Reptile']];
    var ORDER = ['Bird', 'Mammal', 'Insect', 'Fish', 'Amphibian'];
    var animal = null, node = 'q1', path = [];
    var picker = el('div', { class: 'pick' });
    ANIMALS.forEach(function (a) { picker.appendChild(btn(a[0] + ' ' + a[1], function () { animal = a; node = 'q1'; path = []; draw(); }, 'chip')); });
    var box = el('div', { class: 'keybox' });
    var fb = note('Pick an animal, then answer each question in the key.');
    function truth(q) { var g = animal[2], k = KEY[q]; if (k[1] === g) return true; if (q === 'q5') return g === 'Amphibian'; return ORDER.indexOf(g) < 0 ? false : (ORDER.indexOf(g) < ORDER.indexOf(k[1]) ? null : false); }
    function answer(yes) {
      var k = KEY[node], right = truth(node);
      if (right !== null && right !== yes) { setNote(fb, 'Look again at the ' + animal[1].toLowerCase() + '. ' + (right ? 'The answer is yes.' : 'The answer is no.'), 'bad'); return; }
      path.push(k[0] + ' ' + (yes ? 'Yes' : 'No'));
      var next = yes ? k[1] : k[2];
      if (KEY[next]) { node = next; setNote(fb, 'Good. Next question.'); draw(); }
      else { node = null; setNote(fb, '✓ A ' + animal[1].toLowerCase() + ' is a ' + next.toLowerCase() + '!', 'good'); draw(next); }
    }
    function draw(result) {
      box.textContent = '';
      if (!animal) return;
      box.appendChild(el('div', { class: 'emo' }, animal[0]));
      var ol = el('ol', { class: 'path' }); path.forEach(function (p) { ol.appendChild(el('li', null, p)); }); box.appendChild(ol);
      if (node) {
        box.appendChild(el('p', { class: 'kq' }, KEY[node][0]));
        box.appendChild(el('div', { class: 'ctrl' }, btn('Yes', function () { answer(true); }), btn('No', function () { answer(false); })));
      } else box.appendChild(el('p', { class: 'kq' }, 'Group: ' + result));
    }
    root.append(picker, box, fb);
  };

  /* 3. Materials testing */
  SIMS.materials = function (root) {
    var M = [
      ['Wooden block', 'Does not bend', 'Water stays on top; soaks in slowly', 'Opaque', 'Not attracted'],
      ['Steel spoon', 'Does not bend', 'Waterproof', 'Opaque', 'Attracted'],
      ['Aluminium foil', 'Bends easily', 'Waterproof', 'Opaque', 'Not attracted (not all metals are magnetic!)'],
      ['Clear plastic ruler', 'Bends a little', 'Waterproof', 'Transparent', 'Not attracted'],
      ['Glass slide', 'Does not bend (breaks)', 'Waterproof', 'Transparent', 'Not attracted'],
      ['Rubber band', 'Bends and stretches', 'Waterproof', 'Opaque', 'Not attracted'],
      ['Cotton cloth', 'Bends easily', 'Absorbs water', 'Translucent', 'Not attracted'],
      ['Paper', 'Bends easily', 'Absorbs water', 'Translucent', 'Not attracted']
    ];
    var TESTS = [['Bend it', 1], ['Drip water', 2], ['Shine a torch', 3], ['Bring a magnet', 4]];
    var mat = 0, done = {};
    var t = table(['Material', 'Bend', 'Water', 'Light', 'Magnet']);
    var rows = M.map(function (m) { return t.add([m[0], '', '', '', '']); });
    var fb = note('Choose a material, then run a test. The results table fills in as you go.');
    root.append(
      chips('Material', M.map(function (m, k) { return [k, m[0]]; }), 0, function (v) { mat = v; }),
      fb, el('div', { class: 'scroll' }, t.el)
    );
    var tests = el('div', { class: 'ctrl' }, el('span', { class: 'lbl' }, 'Test'));
    TESTS.forEach(function (x) {
      tests.appendChild(btn(x[0], function () {
        var r = M[mat][x[1]]; rows[mat].children[x[1]].textContent = r; done[mat + '-' + x[1]] = 1;
        setNote(fb, M[mat][0] + ': ' + x[0].toLowerCase() + ' → ' + r + '.', 'good');
        if (Object.keys(done).length === M.length * 4) setNote(fb, 'Table complete! Which material would you use for a raincoat, a window, or a fridge magnet holder?', 'good');
      }));
    });
    root.insertBefore(tests, fb);
  };

  /* 4. Life cycles */
  SIMS.lifecycles = function (root) {
    var A = {
      butterfly: ['Butterfly', [['🥚', 'Egg', 'Laid on the leaves the caterpillar will eat.'], ['🐛', 'Larva (caterpillar)', 'Eats leaves and moults several times as it grows.'], ['@pupa', 'Pupa (chrysalis)', 'Does not feed. Changes into the adult inside.'], ['🦋', 'Adult', 'Has wings, feeds on nectar and lays eggs.']]],
      mosquito: ['Mosquito', [['🥚', 'Egg', 'Laid on the surface of still water.'], ['@wriggler', 'Larva (wriggler)', 'Lives in water and comes up to the surface to breathe.'], ['@pupa', 'Pupa', 'Lives in water and does not feed.'], ['🦟', 'Adult', 'Flies; the female lays eggs in still water.']]],
      cockroach: ['Cockroach', [['🥚', 'Egg', 'Laid in an egg case.'], ['🪳', 'Nymph', 'Looks like a small adult without wings; moults as it grows.'], ['🪳', 'Adult', 'Has wings and can reproduce.']]],
      frog: ['Frog', [['🥚', 'Eggs (frogspawn)', 'Laid in water, covered in jelly.'], ['@tadpole', 'Tadpole', 'Lives in water and breathes with gills.'], ['🐸', 'Froglet', 'Has grown legs and its tail is getting shorter.'], ['🐸', 'Adult frog', 'Lives on land and in water; breathes with lungs and through its moist skin.']]],
      chicken: ['Chicken', [['🥚', 'Egg', 'Kept warm by the hen until it hatches.'], ['🐥', 'Chick', 'Looks like a small adult covered in soft feathers.'], ['🐔', 'Adult', 'Can lay eggs.']]]
    };
    var key = 'butterfly', mode = 'view', orderPicked = [];
    var s = svg(340, 300, 'Life cycle diagram');
    var fb = note('Tap a stage to learn about it.');
    var animals = chips('Animal', Object.keys(A).map(function (k) { return [k, A[k][0]]; }), key, function (v) { key = v; mode = 'view'; draw(); });
    var modeRow = el('div', { class: 'ctrl' }, btn('🔀 Put the stages in order', function () { mode = 'order'; orderPicked = []; draw(); }));
    arrowMarker(s, 'lcArrow', '#888');
    // Simple drawings for stages that have no emoji.
    function icon(g, kind, x, y) {
      if (kind === '@tadpole') { S('circle', { cx: x - 8, cy: y, r: 10, fill: '#3b3b3b' }, g); S('path', { d: 'M' + (x + 1) + ',' + y + ' q10,-8 20,0 q-10,8 -20,0', fill: '#3b3b3b' }, g); }
      else if (kind === '@pupa') S('path', { d: 'M' + x + ',' + (y - 18) + ' c12,6 12,30 0,36 c-12,-6 -12,-30 0,-36z', fill: '#8a9a5b', stroke: '#556b2f', 'stroke-width': 2 }, g);
      else if (kind === '@wriggler') { for (var i = 0; i < 6; i++) S('circle', { cx: x - 14 + i * 6, cy: y + (i % 2 ? 3 : -3), r: 3.5, fill: '#5b4a3a' }, g); }
    }
    function draw() {
      while (s.childNodes.length > 1) s.removeChild(s.lastChild);
      var st = A[key][1], n = st.length, cx = 170, cy = 145, R = 100;
      var pos = st.map(function (_, k) { var a = -Math.PI / 2 + k * 2 * Math.PI / n; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
      var shuffled = mode === 'order' ? st.map(function (_, k) { return k; }).sort(function (a, b) { return ((a * 7 + 3) % n) - ((b * 7 + 3) % n); }) : null;
      if (mode === 'view') pos.forEach(function (p, k) {
        var q = pos[(k + 1) % n], dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
        S('path', { d: 'M' + (p[0] + ux * 38) + ',' + (p[1] + uy * 38) + ' L' + (q[0] - ux * 40) + ',' + (q[1] - uy * 40), stroke: '#888', 'stroke-width': 3, fill: 'none', 'marker-end': 'url(#lcArrow)' }, s);
      });
      st.forEach(function (stage, k) {
        var idx = mode === 'order' ? shuffled[k] : k, p = pos[k], data = st[idx];
        var g = S('g', { tabindex: 0, role: 'button', 'aria-label': data[1], style: 'cursor:pointer' }, s);
        var done = mode === 'order' && orderPicked.indexOf(idx) >= 0;
        S('circle', { cx: p[0], cy: p[1], r: 36, fill: done ? '#d9f2df' : '#fff', stroke: done ? '#2E8B57' : '#333', 'stroke-width': 3 }, g);
        if (data[0].charAt(0) === '@') icon(g, data[0], p[0], p[1]);
        else S('text', { x: p[0], y: p[1] + 11, 'text-anchor': 'middle', 'font-size': 32, text: data[0] }, g);
        S('text', { x: p[0], y: p[1] + 54, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 700, fill: '#333', text: mode === 'order' && !done ? '?' : data[1] }, g);
        function act() {
          if (mode === 'view') { setNote(fb, data[1] + ': ' + data[2]); return; }
          if (done) return;
          if (idx === orderPicked.length) {
            orderPicked.push(idx);
            if (orderPicked.length === n) { setNote(fb, '🎉 Correct order! The ' + A[key][0].toLowerCase() + ' has ' + n + ' stages.', 'good'); mode = 'view'; }
            else setNote(fb, '✓ ' + data[1] + '. What comes next?', 'good');
            draw();
          } else setNote(fb, 'Not yet. Which stage comes ' + (orderPicked.length ? 'after the ' + st[orderPicked.length - 1][1].toLowerCase() : 'first') + '?', 'bad');
        }
        g.addEventListener('click', act); g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
      });
      if (mode === 'order' && !orderPicked.length) setNote(fb, 'Tap the stages in order, starting with the first stage.');
    }
    root.append(animals, s, modeRow, fb); draw();
  };

  /* 5. Matter: particle model */
  SIMS.matter = function (root) {
    var T = -10;
    var cv = el('canvas', { width: 360, height: 220, class: 'stage', 'aria-label': 'Particles of water' });
    var g = cv.getContext('2d');
    var fb = note('');
    var N = 30, P = [];
    for (var k = 0; k < N; k++) P.push({ hx: 120 + (k % 6) * 22, hy: 110 + Math.floor(k / 6) * 22, x: 0, y: 0, vx: 0, vy: 0 });
    P.forEach(function (p) { p.x = p.hx; p.y = p.hy; });
    function state() { return T < 0 ? 'solid' : T < 100 ? 'liquid' : 'gas'; }
    function describe() {
      var st = state();
      var d = { solid: 'Solid (ice): particles are packed tightly in fixed positions and only vibrate. Definite shape and volume.', liquid: 'Liquid (water): particles are close together but can slide past each other. Definite volume, takes the shape of the container.', gas: 'Gas (steam): particles are far apart and move quickly in all directions. Fills the whole container.' }[st];
      var edge = T === 0 ? ' At 0 °C ice melts (or water freezes).' : T === 100 ? ' At 100 °C water boils.' : '';
      setNote(fb, T + ' °C — ' + d + edge);
    }
    root.append(slider('Temperature', -20, 120, 5, T, function (v) { return v + ' °C'; }, function (v) { T = v; describe(); }), cv, fb);
    describe();
    loop(root, function (dt) {
      var st = state(), W = 360, H = 220;
      g.clearRect(0, 0, W, H);
      g.strokeStyle = '#555'; g.lineWidth = 3; g.strokeRect(80, 20, 200, 190);
      P.forEach(function (p) {
        if (st === 'solid') {
          var j = 0.6 + (T + 20) / 20;
          p.x += (p.hx - p.x) * 0.3 + (Math.random() - .5) * j; p.y += (p.hy - p.y) * 0.3 + (Math.random() - .5) * j;
        } else {
          var speed = st === 'liquid' ? 40 + T : 220 + T;
          if (!p.vx && !p.vy) { p.vx = Math.random() - .5; p.vy = Math.random() - .5; }
          var L = Math.hypot(p.vx, p.vy) || 1; p.vx = p.vx / L * speed; p.vy = p.vy / L * speed;
          p.vx += (Math.random() - .5) * 40; p.vy += (Math.random() - .5) * 40;
          if (st === 'liquid') p.vy += 60;
          p.x += p.vx * dt; p.y += p.vy * dt;
          var top = st === 'liquid' ? 130 : 30;
          if (p.x < 90) { p.x = 90; p.vx = Math.abs(p.vx); } if (p.x > 270) { p.x = 270; p.vx = -Math.abs(p.vx); }
          if (p.y < top) { p.y = top; p.vy = Math.abs(p.vy); } if (p.y > 200) { p.y = 200; p.vy = -Math.abs(p.vy); }
        }
        g.beginPath(); g.arc(p.x, p.y, 8, 0, 7); g.fillStyle = st === 'solid' ? '#7fb6e8' : st === 'liquid' ? '#2a6fc9' : '#b9c6d3'; g.fill();
      });
    });
  };

  /* 6. Water: drying experiment */
  SIMS.water = function (root) {
    var v = { temp: 'cool', wind: 'still', spread: 'folded', air: 'dry' }, last = null, running = false, total = 0, shown = 0, changed = [];
    var t = table(['Temperature', 'Wind', 'Towel', 'Air', 'Time to dry']);
    var s = svg(360, 170, 'A wet towel drying on a line');
    S('line', { x1: 20, y1: 30, x2: 340, y2: 30, stroke: '#555', 'stroke-width': 3 }, s);
    var towel = S('rect', { x: 130, y: 30, width: 100, height: 110, rx: 6, fill: '#2a6fc9' }, s);
    var sun = S('text', { x: 30, y: 80, 'font-size': 34, text: '' }, s);
    var windT = S('text', { x: 280, y: 90, 'font-size': 30, text: '' }, s);
    var clock = S('text', { x: 180, y: 162, 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 700, text: '' }, s);
    var fb = note('Choose the conditions, then hang the towel. Change ONE thing each time to make it a fair test.');
    function minutes() { return Math.round(240 * (v.temp === 'hot' ? 0.7 : 1) * (v.wind === 'windy' ? 0.6 : 1) * (v.spread === 'spread' ? 0.5 : 1) * (v.air === 'humid' ? 1.5 : 1)); }
    function scene() { sun.textContent = v.temp === 'hot' ? '☀️' : '⛅'; windT.textContent = v.wind === 'windy' ? '💨' : ''; towel.setAttribute('width', v.spread === 'spread' ? 160 : 70); towel.setAttribute('x', v.spread === 'spread' ? 100 : 145); }
    function set(k) { return function (x) { v[k] = x; scene(); }; }
    function run() {
      if (running) return; running = true;
      total = minutes(); shown = 0; changed = last ? Object.keys(v).filter(function (k) { return v[k] !== last[k]; }) : [];
    }
    loop(root, function (dt) {
        if (!running) return;
        shown = Math.min(total, shown + dt * (reduce ? total : total / 3));
        towel.setAttribute('fill', 'rgb(' + Math.round(42 + 200 * shown / total) + ',' + Math.round(111 + 120 * shown / total) + ',' + Math.round(201 + 40 * shown / total) + ')');
        clock.textContent = Math.round(shown) + ' min';
        if (shown >= total) {
          running = false;
          t.add([v.temp === 'hot' ? 'Hot' : 'Cool', v.wind === 'windy' ? 'Windy' : 'Still', v.spread === 'spread' ? 'Spread out' : 'Folded', v.air === 'humid' ? 'Humid' : 'Dry', total + ' min']);
          var msg = 'Dry after about ' + total + ' minutes (model). ';
          if (last && changed.length > 1) msg += 'You changed ' + changed.length + ' things at once, so you cannot tell which one made the difference. Try changing just one.';
          else if (last && changed.length === 1) msg += 'You changed only the ' + { temp: 'temperature', wind: 'wind', spread: 'towel spread', air: 'humidity' }[changed[0]] + ': a fair test!';
          setNote(fb, msg, 'good'); last = JSON.parse(JSON.stringify(v));
        }
    });
    root.append(
      chips('Temperature', [['cool', 'Cool'], ['hot', 'Hot']], v.temp, set('temp')),
      chips('Wind', [['still', 'Still'], ['windy', 'Windy']], v.wind, set('wind')),
      chips('Towel', [['folded', 'Folded'], ['spread', 'Spread out']], v.spread, set('spread')),
      chips('Air', [['dry', 'Dry'], ['humid', 'Humid']], v.air, set('air')),
      s, el('div', { class: 'ctrl' }, btn('👕 Hang the wet towel', run)), fb, el('div', { class: 'scroll' }, t.el)
    );
    scene();
  };

  /* 7. Germination */
  SIMS.plantrepro = function (root) {
    var dishes = ['A', 'B', 'C', 'D'].map(function (n) { return { n: n, water: true, air: true, warm: true, light: true }; });
    dishes[1].water = false; dishes[2].warm = false; dishes[3].light = false;
    var grid = el('div', { class: 'dishes' });
    var fb = note('Set up each dish, then wait 5 days. Which dishes have seeds that germinate?');
    var grown = false;
    function draw() {
      grid.textContent = '';
      dishes.forEach(function (d) {
        var ok = d.water && d.air && d.warm;
        var box = el('div', { class: 'dish' + (grown ? (ok ? ' yes' : ' no') : '') });
        box.appendChild(el('b', null, 'Dish ' + d.n));
        box.appendChild(el('div', { class: 'emo' }, grown ? (ok ? '🌱' : '🫘') : '🫘'));
        [['water', '💧 Water', 'No water'], ['air', '🌬️ Air', 'No air (in boiled water + oil)'], ['warm', '🌡️ Warm (room)', 'Cold (fridge)'], ['light', '💡 Light', 'Dark cupboard']].forEach(function (f) {
          var b = el('button', { type: 'button', class: 'chip', 'aria-pressed': d[f[0]] ? 'true' : 'false' }, d[f[0]] ? f[1] : f[2]);
          b.onclick = function () { d[f[0]] = !d[f[0]]; grown = false; draw(); setNote(fb, 'Set up each dish, then wait 5 days.'); };
          box.appendChild(b);
        });
        grid.appendChild(box);
      });
    }
    root.append(grid, el('div', { class: 'ctrl' }, btn('⏳ Wait 5 days', function () {
      grown = true; draw();
      var lines = dishes.map(function (d) {
        var miss = []; if (!d.water) miss.push('water'); if (!d.air) miss.push('air'); if (!d.warm) miss.push('warmth');
        return 'Dish ' + d.n + ': ' + (miss.length ? 'did not germinate (no ' + miss.join(', no ') + ')' : 'germinated' + (d.light ? '' : ', even in the dark'));
      });
      setNote(fb, lines.join(' · ') + '. Seeds need water, air and warmth to germinate. Light is not needed.', 'good');
    })), fb);
    draw();
  };

  /* 8. Plant parts: coloured water */
  SIMS.plantparts = function (root) {
    var colour = '#d23c3c', hours = 0;
    var s = svg(300, 330, 'A white flower standing in coloured water');
    var beaker = S('rect', { x: 110, y: 240, width: 80, height: 80, rx: 6, fill: '#eaf3ff', stroke: '#555', 'stroke-width': 3 }, s);
    var water = S('rect', { x: 113, y: 262, width: 74, height: 55, fill: colour, opacity: .7 }, s);
    S('rect', { x: 144, y: 110, width: 12, height: 200, fill: '#7bb661' }, s);
    var rise = S('rect', { x: 148, y: 310, width: 4, height: 0, fill: colour }, s);
    var leafL = S('ellipse', { cx: 120, cy: 190, rx: 28, ry: 11, fill: '#5aa147', transform: 'rotate(-25 120 190)' }, s);
    var leafR = S('ellipse', { cx: 180, cy: 160, rx: 28, ry: 11, fill: '#5aa147', transform: 'rotate(25 180 160)' }, s);
    var petals = [];
    for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3; petals.push(S('ellipse', { cx: 150 + 26 * Math.cos(a), cy: 85 + 26 * Math.sin(a), rx: 18, ry: 12, fill: '#fff', stroke: '#bbb', transform: 'rotate(' + (k * 60) + ' ' + (150 + 26 * Math.cos(a)) + ' ' + (85 + 26 * Math.sin(a)) + ')' }, s)); }
    S('circle', { cx: 150, cy: 85, r: 12, fill: '#f2c94c' }, s);
    var fb = note('');
    function mix(c, t) { var r = parseInt(c.slice(1, 3), 16), g = parseInt(c.slice(3, 5), 16), b = parseInt(c.slice(5, 7), 16); return 'rgb(' + Math.round(255 + (r - 255) * t) + ',' + Math.round(255 + (g - 255) * t) + ',' + Math.round(255 + (b - 255) * t) + ')'; }
    function draw() {
      water.setAttribute('fill', colour); rise.setAttribute('fill', colour);
      var h = Math.min(1, hours / 12) * 200; rise.setAttribute('y', 310 - h); rise.setAttribute('height', h);
      var tint = Math.max(0, Math.min(1, (hours - 12) / 12));
      petals.forEach(function (p) { p.setAttribute('fill', mix(colour, tint * .8)); });
      setNote(fb, hours === 0 ? 'Move the slider to let time pass.' : hours < 12 ? 'After ' + hours + ' h: the coloured water is moving up the water-carrying tubes in the stem.' : hours < 24 ? 'After ' + hours + ' h: the coloured water has reached the flower. The petals are starting to change colour.' : 'After 24 h: the petals are coloured. This shows the stem carries water from below up to the flower.', hours >= 24 ? 'good' : '');
    }
    root.append(chips('Colour', [['#d23c3c', 'Red'], ['#2a6fc9', 'Blue']], colour, function (c) { colour = c; draw(); }),
      slider('Time', 0, 24, 2, 0, function (v) { return v + ' h'; }, function (v) { hours = v; draw(); }), s, fb);
    [[leafL, 'Leaf: makes food for the plant using light.'], [leafR, 'Leaf: makes food for the plant using light.'], [beaker, 'In a real plant, the roots would take in water and mineral salts from the soil.']].forEach(function (x) { x[0].style.cursor = 'pointer'; x[0].addEventListener('click', function () { setNote(fb, x[1]); }); });
    draw();
  };

  /* 9. Digestion */
  SIMS.digestion = function (root) {
    var STEPS = [
      ['Mouth', [150, 60], true, 'Teeth break the food into smaller pieces. Saliva mixes with it and starts digestion.'],
      ['Gullet', [150, 120], false, 'Muscles push the food down to the stomach. No digestion takes place here.'],
      ['Stomach', [180, 180], true, 'Digestive juices mix with the food, and the stomach churns it.'],
      ['Small intestine', [150, 245], true, 'Digestion is completed. Digested food is absorbed into the blood.'],
      ['Large intestine', [110, 245], false, 'Water is removed from the undigested food. No digestion takes place here.'],
      ['Anus', [150, 320], false, 'Undigested food leaves the body as faeces.']
    ];
    var s = svg(300, 340, 'Simple diagram of the digestive system');
    S('ellipse', { cx: 150, cy: 60, rx: 34, ry: 18, fill: '#f6c6c6', stroke: '#a55' }, s);
    S('path', { d: 'M150,78 L150,160', stroke: '#e8a87c', 'stroke-width': 10, fill: 'none' }, s);
    S('path', { d: 'M150,160 C215,140 225,215 160,210', fill: '#f4a6a6', stroke: '#a55', 'stroke-width': 3 }, s);
    S('path', { d: 'M90,215 L210,215 L210,295 L90,295 Z', fill: 'none', stroke: '#c9a26b', 'stroke-width': 14 }, s);
    S('path', { d: 'M120,230 q15,15 30,0 q15,-15 30,0 M120,255 q15,15 30,0 q15,-15 30,0 M120,280 q15,-12 30,0', fill: 'none', stroke: '#e58b8b', 'stroke-width': 8 }, s);
    S('path', { d: 'M150,295 L150,320', stroke: '#c9a26b', 'stroke-width': 10 }, s);
    var dot = S('circle', { cx: 150, cy: 60, r: 9, fill: '#2E8B57', stroke: '#fff', 'stroke-width': 2 }, s);
    var label = S('text', { x: 240, y: 60, 'font-size': 14, 'font-weight': 700, 'text-anchor': 'middle', text: '' }, s);
    var i = 0, fb = note('');
    function draw() {
      var st = STEPS[i]; dot.setAttribute('cx', st[1][0]); dot.setAttribute('cy', st[1][1]);
      label.textContent = st[0]; label.setAttribute('y', st[1][1] + 5);
      setNote(fb, (i + 1) + '. ' + st[0] + ' — ' + st[3] + (st[2] ? ' ✔ Digestion takes place here.' : ''), st[2] ? 'good' : '');
      prev.disabled = i === 0; next.disabled = i === STEPS.length - 1;
    }
    var prev = btn('← Back', function () { i--; draw(); }), next = btn('Next →', function () { i++; draw(); });
    root.append(s, el('div', { class: 'ctrl' }, prev, next, btn('↺ New bite', function () { i = 0; draw(); })), fb); draw();
  };

  /* 10. Cells */
  SIMS.cells = function (root) {
    var INFO = {
      wall: ['Cell wall', 'Gives the plant cell its shape and support.'],
      membrane: ['Cell membrane', 'Controls what moves into and out of the cell.'],
      cyto: ['Cytoplasm', 'Where most of the cell\'s activities take place.'],
      nucleus: ['Nucleus', 'Controls the cell\'s activities.'],
      chloro: ['Chloroplast', 'Contains chlorophyll, which traps light for photosynthesis.']
    };
    var kind = 'plant', s = svg(320, 230, 'Cell under a microscope'), fb = note('Tap a part of the cell to name it.');
    var t = table(['Part', 'Plant (leaf) cell', 'Animal cell', 'Root cell']);
    [['Cell wall', '✓', '✗', '✓'], ['Cell membrane', '✓', '✓', '✓'], ['Cytoplasm', '✓', '✓', '✓'], ['Nucleus', '✓', '✓', '✓'], ['Chloroplasts', '✓', '✗', '✗']].forEach(function (r) { t.add(r); });
    function part(node, key) { node.style.cursor = 'pointer'; node.addEventListener('click', function (e) { e.stopPropagation(); setNote(fb, INFO[key][0] + ': ' + INFO[key][1], 'good'); }); return node; }
    function draw() {
      s.textContent = '';
      S('circle', { cx: 160, cy: 115, r: 112, fill: '#f4f7f1', stroke: '#333', 'stroke-width': 4 }, s);
      if (kind === 'animal') {
        part(S('ellipse', { cx: 160, cy: 115, rx: 90, ry: 70, fill: '#f7d9c4', stroke: '#b5651d', 'stroke-width': 3 }, s), 'membrane');
        part(S('ellipse', { cx: 160, cy: 115, rx: 80, ry: 60, fill: '#f7d9c4', opacity: .01 }, s), 'cyto');
      } else {
        part(S('rect', { x: 70, y: 55, width: 180, height: 120, rx: 6, fill: '#cfe3b7', stroke: '#4c7a2a', 'stroke-width': 7 }, s), 'wall');
        part(S('rect', { x: 78, y: 63, width: 164, height: 104, rx: 4, fill: '#e9f3dc', stroke: '#7a5c2a', 'stroke-width': 2 }, s), 'membrane');
        part(S('rect', { x: 86, y: 71, width: 148, height: 88, fill: '#e9f3dc', opacity: .01 }, s), 'cyto');
        if (kind === 'plant') [[100, 85], [210, 90], [110, 150], [200, 150], [150, 80], [225, 125]].forEach(function (c) { part(S('ellipse', { cx: c[0], cy: c[1], rx: 11, ry: 7, fill: '#3e9b3e' }, s), 'chloro'); });
      }
      part(S('circle', { cx: kind === 'animal' ? 165 : 160, cy: 115, r: 18, fill: '#8e6bbf', stroke: '#4b2d7f', 'stroke-width': 2 }, s), 'nucleus');
      setNote(fb, kind === 'root' ? 'Root cell: it has a cell wall but no chloroplasts, because roots get no light underground.' : 'Tap a part of the cell to name it.');
    }
    root.append(chips('Cell', [['plant', 'Leaf cell (plant)'], ['animal', 'Cheek cell (animal)'], ['root', 'Root cell (plant)']], kind, function (k) { kind = k; draw(); }), s, fb, el('div', { class: 'scroll' }, t.el));
    draw();
  };

  /* 11. Respiratory and circulatory systems */
  SIMS.bodysystems = function (root) {
    var LV = { rest: [80, 20, 'Resting'], walk: [100, 25, 'Walking'], jog: [130, 35, 'Jogging'], sprint: [165, 45, 'Sprinting'] };
    var target = 'rest', hr = 80, br = 20, beat = 0, breath = 0;
    var s = svg(340, 170, 'Heart and lungs');
    var heart = S('text', { x: 85, y: 105, 'font-size': 70, 'text-anchor': 'middle', text: '❤️' }, s);
    var lungs = S('text', { x: 250, y: 105, 'font-size': 70, 'text-anchor': 'middle', text: '🫁' }, s);
    var t1 = S('text', { x: 85, y: 155, 'font-size': 15, 'font-weight': 700, 'text-anchor': 'middle', text: '' }, s);
    var t2 = S('text', { x: 250, y: 155, 'font-size': 15, 'font-weight': 700, 'text-anchor': 'middle', text: '' }, s);
    var fb = note('');
    function say() {
      var l = LV[target];
      setNote(fb, l[2] + ': the muscles need ' + (target === 'rest' ? 'only a little' : target === 'sprint' ? 'a lot more' : 'more') + ' oxygen and digested food. ' + (target === 'rest' ? 'After exercise, the heart rate and breathing rate slowly return to normal.' : 'The heart beats faster and we breathe faster to bring more oxygen to them.') + ' (Typical values for a child; everyone is different.)');
    }
    root.append(chips('Activity', Object.keys(LV).map(function (k) { return [k, LV[k][2]]; }), target, function (k) { target = k; say(); }), s, fb);
    say();
    loop(root, function (dt) {
      var tgt = LV[target];
      hr += (tgt[0] - hr) * Math.min(1, dt * (target === 'rest' ? 0.35 : 0.8));
      br += (tgt[1] - br) * Math.min(1, dt * (target === 'rest' ? 0.35 : 0.8));
      beat = (beat + dt * hr / 60) % 1; breath = (breath + dt * br / 60) % 1;
      var hs = reduce ? 1 : 1 + 0.15 * Math.max(0, 1 - beat * 5);
      var ls = reduce ? 1 : 0.9 + 0.12 * Math.sin(breath * Math.PI * 2);
      heart.setAttribute('transform', 'translate(85 80) scale(' + hs + ') translate(-85 -80)');
      lungs.setAttribute('transform', 'translate(250 80) scale(' + ls + ') translate(-250 -80)');
      t1.textContent = 'Heart: ' + Math.round(hr) + ' beats/min';
      t2.textContent = 'Breathing: ' + Math.round(br) + ' breaths/min';
    });
  };

  /* 12. Electrical circuits */
  SIMS.circuits = function (root) {
    var MAT = { copper: ['Copper wire', true], clip: ['Steel paper clip', true], foil: ['Aluminium foil', true], plastic: ['Plastic straw', false], rubber: ['Rubber band', false], wood: ['Wooden stick', false], glass: ['Glass rod', false] };
    var st = { mode: 'series', cells: 1, on: true, mat: 'copper', bOut: false };
    var s = svg(440, 340, 'Electrical circuit');
    var fb = note('');
    function wire(d) { S('path', { d: d, stroke: '#333', 'stroke-width': 4, fill: 'none', 'stroke-linejoin': 'round' }, s); }
    function bulb(x, y, b, name, out) {
      if (b > 0) S('circle', { cx: x, cy: y, r: 14 + 16 * b, fill: '#ffe066', opacity: .25 + .35 * b }, s);
      S('circle', { cx: x, cy: y, r: 16, fill: out ? '#ddd' : b > 0 ? '#ffe066' : '#f4f4f4', stroke: '#333', 'stroke-width': 3 }, s);
      S('path', { d: out ? 'M' + (x - 7) + ',' + (y - 2) + ' l6,5 l-3,4 M' + (x + 7) + ',' + (y - 2) + ' l-5,4' : 'M' + (x - 7) + ',' + (y + 4) + ' q7,-14 14,0', stroke: '#555', 'stroke-width': 2, fill: 'none' }, s);
      S('text', { x: x, y: y + 34, 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 700, text: name + (out ? ' (fused)' : '') }, s);
    }
    function draw() {
      s.textContent = '';
      var conducts = MAT[st.mat][1], closed = st.on && conducts;
      var bA = 0, bB = 0;
      if (closed) {
        if (st.mode === 'series') { if (!st.bOut) { bA = bB = Math.min(1, st.cells / 2); } }
        else { bA = Math.min(1, st.cells / 1.5); bB = st.bOut ? 0 : bA; }
      }
      // main loop
      wire('M40,95 L40,40 L120,40 M170,40 L250,40 M300,40 L400,40 L400,220 L40,220');
      // battery: long thin plate (+) and short thick plate (-) per cell, joined in series
      for (var c = 0; c < st.cells; c++) {
        var y = 95 + c * 34;
        S('line', { x1: 22, y1: y, x2: 58, y2: y, stroke: '#333', 'stroke-width': 4 }, s);
        S('line', { x1: 30, y1: y + 12, x2: 50, y2: y + 12, stroke: '#333', 'stroke-width': 8 }, s);
        wire('M40,' + (y + 12) + ' L40,' + (c === st.cells - 1 ? 220 : y + 34));
      }
      S('text', { x: 66, y: 120, 'font-size': 12, text: st.cells === 1 ? '1 battery' : '2 batteries (in series)' }, s);
      // switch
      S('circle', { cx: 120, cy: 40, r: 4, fill: '#333' }, s); S('circle', { cx: 170, cy: 40, r: 4, fill: '#333' }, s);
      S('line', { x1: 120, y1: 40, x2: st.on ? 170 : 160, y2: st.on ? 40 : 14, stroke: '#333', 'stroke-width': 4 }, s);
      S('text', { x: 145, y: 64, 'text-anchor': 'middle', 'font-size': 12, text: 'switch ' + (st.on ? 'closed' : 'open') }, s);
      // gap with material
      S('rect', { x: 250, y: 32, width: 50, height: 16, rx: 3, fill: conducts ? '#c98a3a' : '#9ec9e8', stroke: '#333' }, s);
      S('text', { x: 275, y: 70, 'text-anchor': 'middle', 'font-size': 12, text: MAT[st.mat][0] }, s);
      if (st.mode === 'series') { bulb(150, 220, bA, 'Bulb A', false); bulb(290, 220, bB, 'Bulb B', st.bOut); }
      else { wire('M100,220 L100,285 L360,285 L360,220'); bulb(220, 220, bA, 'Bulb A', false); bulb(230, 285, bB, 'Bulb B', st.bOut); }
      var word = function (b) { return b === 0 ? 'off' : b >= 0.99 ? 'bright' : 'dim'; };
      var msg = !st.on ? 'The switch is open, so the circuit is not closed. No electricity flows.' :
        !conducts ? 'The ' + MAT[st.mat][0].toLowerCase() + ' is an electrical insulator, so the circuit is not closed.' :
        st.mode === 'series' ? (st.bOut ? 'Series: bulb B has fused, which breaks the only path, so bulb A goes out too.' : 'Series: both bulbs share one path, so each is ' + word(bA) + '.' + (st.cells === 1 ? ' Add a battery to make them brighter.' : '')) :
        'Parallel: each bulb has its own path. Bulb A is ' + word(bA) + (st.bOut ? ' even though bulb B has fused.' : ', bulb B is ' + word(bB) + '.');
      setNote(fb, msg, closed && bA > 0 ? 'good' : '');
    }
    root.append(
      chips('Circuit', [['series', 'Series'], ['parallel', 'Parallel']], st.mode, function (v) { st.mode = v; draw(); }),
      chips('Batteries', [[1, '1'], [2, '2']], 1, function (v) { st.cells = v; draw(); }),
      chips('Switch', [[true, 'Closed'], [false, 'Open']], true, function (v) { st.on = v; draw(); }),
      chips('In the gap', Object.keys(MAT).map(function (k) { return [k, MAT[k][0]]; }), st.mat, function (v) { st.mat = v; draw(); }),
      chips('Bulb B', [[false, 'Working'], [true, 'Fused']], false, function (v) { st.bOut = v; draw(); }),
      s, fb);
    draw();
  };

  /* 13. Light and shadows */
  SIMS.light = function (root) {
    var x = 150, matter = 'opaque';
    var s = svg(440, 280, 'Torch, object and screen'), fb = note('');
    function draw() {
      s.textContent = '';
      var lx = 30, ly = 140, sx = 410, h = 50;
      S('rect', { x: sx, y: 10, width: 14, height: 260, fill: '#eee', stroke: '#888' }, s);
      S('text', { x: 6, y: 148, 'font-size': 28, text: '🔦' }, s);
      var top = ly - h / 2, bot = ly + h / 2;
      var k = (sx - lx) / (x - lx), shTop = ly + (top - ly) * k, shBot = ly + (bot - ly) * k, shH = shBot - shTop;
      if (matter !== 'transparent') S('rect', { x: sx, y: Math.max(10, shTop), width: 14, height: Math.min(260, shBot) - Math.max(10, shTop), fill: matter === 'opaque' ? '#222' : '#999' }, s);
      [top, bot].forEach(function (yy) { S('line', { x1: lx + 20, y1: ly, x2: sx, y2: ly + (yy - ly) * k, stroke: '#f2b84b', 'stroke-width': 2, 'stroke-dasharray': '5 4' }, s); });
      S('rect', { x: x - 6, y: top, width: 12, height: h, fill: matter === 'opaque' ? '#7a4a2a' : matter === 'translucent' ? 'rgba(160,190,220,.7)' : 'rgba(200,230,255,.35)', stroke: '#333' }, s);
      var cm = (shH / h * 10).toFixed(1);
      setNote(fb, matter === 'transparent' ? 'Transparent: almost all the light passes through, so there is no clear shadow.' :
        'Shadow height: ' + cm + ' cm (object: 10 cm). ' + (matter === 'translucent' ? 'Translucent: some light passes through, so the shadow is faint. ' : 'Opaque: no light passes through, so the shadow is dark. ') + 'Move the object closer to the torch to make the shadow bigger.');
    }
    root.append(slider('Object position', 70, 380, 5, x, function (v) { return v < 160 ? 'near torch' : v > 300 ? 'near screen' : 'middle'; }, function (v) { x = v; draw(); }),
      chips('Object', [['opaque', 'Cardboard (opaque)'], ['translucent', 'Tracing paper (translucent)'], ['transparent', 'Clear plastic (transparent)']], matter, function (v) { matter = v; draw(); }), s, fb);
    draw();
  };

  /* 14. Heat: conduction race */
  SIMS.heat = function (root) {
    var RODS = [['Copper', 8], ['Aluminium', 11], ['Steel', 30], ['Glass', 95], ['Wood', 1e9], ['Plastic', 1e9]];
    var s = svg(420, 300, 'Rods heated at one end with wax beads'), fb = note('Each rod has wax beads stuck on it. Heat the left end and see which beads fall first.');
    var t = 0, running = false, beads = [];
    S('rect', { x: 10, y: 20, width: 40, height: 270, rx: 8, fill: '#ffb36b', opacity: .5 }, s);
    S('text', { x: 30, y: 290, 'text-anchor': 'middle', 'font-size': 22, text: '🔥' }, s);
    RODS.forEach(function (r, k) {
      var y = 40 + k * 42;
      S('rect', { x: 30, y: y, width: 330, height: 10, rx: 4, fill: ['#c47a3a', '#c9ced6', '#8a8f99', '#bfe3f0', '#a87442', '#e8e2ff'][k], stroke: '#555' }, s);
      S('text', { x: 368, y: y + 10, 'font-size': 13, 'font-weight': 700, text: r[0] }, s);
      [0.33, 0.66, 1].forEach(function (f) { beads.push({ node: S('circle', { cx: 30 + 320 * f, cy: y + 16, r: 6, fill: '#f6f1d9', stroke: '#998' }, s), at: r[1] * f * f, y: y + 16, fell: false, rod: r[0], last: f === 1 }); });
    });
    var clock = S('text', { x: 210, y: 22, 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 700, text: '0 s' }, s);
    var order = [];
    root.append(s, el('div', { class: 'ctrl' }, btn('🔥 Start heating', function () { if (running) return; t = 0; order = []; beads.forEach(function (b) { b.fell = false; b.node.setAttribute('cy', b.y); }); running = true; })), fb);
    loop(root, function (dt) {
      if (!running) return;
      t += dt * 6;
      clock.textContent = Math.round(t) + ' s';
      beads.forEach(function (b) {
        if (!b.fell && t >= b.at) { b.fell = true; if (b.last) order.push(b.rod); }
        if (b.fell) { var cy = +b.node.getAttribute('cy'); if (cy < 296) b.node.setAttribute('cy', Math.min(296, cy + dt * 300)); }
      });
      if (t >= 120) {
        running = false;
        setNote(fb, 'After 2 minutes, the last bead fell first on: ' + order.join(', then ') + '. Metals are good conductors of heat; glass is poorer; wood and plastic are poor conductors, so their beads did not fall. (Times are a model.)', 'good');
      }
    });
  };

  /* 15. Photosynthesis: pondweed */
  SIMS.photosynthesis = function (root) {
    var d = 20, soda = false, lamp = true, acc = 0, bubbles = [];
    var t = table(['Lamp distance', 'Extra CO₂', 'Bubbles per minute']);
    var s = svg(380, 260, 'Pondweed in a beaker with a lamp'), fb = note('');
    var lampG = S('text', { x: 20, y: 130, 'font-size': 40, text: '💡' }, s);
    S('rect', { x: 200, y: 60, width: 140, height: 180, rx: 8, fill: '#e6f4ff', stroke: '#555', 'stroke-width': 3 }, s);
    S('path', { d: 'M270,235 C255,190 290,160 270,110 M270,180 l-22,-10 M270,150 l22,-10 M270,205 l20,-8', stroke: '#3e9b3e', 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round' }, s);
    var layer = S('g', null, s);
    function rate() { if (!lamp) return 0; return Math.round(Math.min(90, 6000 / (d * d)) * (soda ? 1.4 : 1)); }
    function draw() {
      lampG.setAttribute('x', 190 - d * 3); lampG.textContent = lamp ? '💡' : '🌑';
      setNote(fb, (lamp ? 'Lamp ' + d + ' cm away: about ' + rate() + ' bubbles of oxygen per minute (model). ' : 'Lamp off: no light, so no photosynthesis and no oxygen bubbles. ') + (soda ? 'Baking soda adds carbon dioxide to the water.' : ''));
    }
    root.append(slider('Lamp distance', 10, 60, 5, d, function (v) { return v + ' cm'; }, function (v) { d = v; draw(); }),
      chips('Lamp', [[true, 'On'], [false, 'Off']], true, function (v) { lamp = v; draw(); }),
      chips('Baking soda (more CO₂)', [[false, 'No'], [true, 'Yes']], false, function (v) { soda = v; draw(); }),
      s, el('div', { class: 'ctrl' }, btn('📝 Record result', function () { t.add([d + ' cm', soda ? 'Yes' : 'No', lamp ? rate() : 0]); })), fb, el('div', { class: 'scroll' }, t.el));
    draw();
    loop(root, function (dt) {
      acc += dt * rate() / 60;
      while (acc >= 1) { acc -= 1; bubbles.push({ n: S('circle', { cx: 270 + (Math.random() - .5) * 20, cy: 110, r: 4, fill: '#fff', stroke: '#7ab' }, layer), y: 110 }); }
      bubbles = bubbles.filter(function (b) { b.y -= dt * 60; b.n.setAttribute('cy', b.y); if (b.y < 66) { b.n.remove(); return false; } return true; });
    });
  };

  /* 16. Energy: ramp */
  SIMS.energy = function (root) {
    var H = 3, rough = false, x = 40, dir = 1, lost = 0, E = 0, rolling = false;
    var s = svg(440, 280, 'Ball on a ramp with energy bars'), fb = note('Set the height, then release the ball.');
    var maxH = 180;
    function y(px) { var h = H / 5 * maxH; if (px <= 140) return 220 - h * (140 - px) / 100; if (px <= 300) return 220; return 220 - maxH * Math.min(1, (px - 300) / 100); }
    var track = S('path', { fill: 'none', stroke: '#555', 'stroke-width': 5 }, s);
    var ball = S('circle', { r: 11, fill: '#d2780f', stroke: '#333', 'stroke-width': 2 }, s);
    var bars = ['Gravitational PE', 'Kinetic', 'Heat & sound'].map(function (n, k) {
      S('text', { x: 20 + k * 140, y: 250, 'font-size': 12, 'font-weight': 700, text: n }, s);
      S('rect', { x: 20 + k * 140, y: 256, width: 120, height: 14, fill: '#eee' }, s);
      return S('rect', { x: 20 + k * 140, y: 256, width: 0, height: 14, fill: ['#2A6FC9', '#2E8B57', '#CF3F3F'][k] }, s);
    });
    function drawTrack() { var d = 'M40,' + y(40); for (var px = 45; px <= 400; px += 5) d += ' L' + px + ',' + y(px); track.setAttribute('d', d); }
    function show() {
      ball.setAttribute('cx', x); ball.setAttribute('cy', y(x) - 11);
      var g = (220 - y(x)) / maxH * 5, total = rolling ? E : H, k = Math.max(0, total - lost - g);
      var scale = 120 / 5;
      bars[0].setAttribute('width', g * scale); bars[1].setAttribute('width', k * scale); bars[2].setAttribute('width', Math.min(5, lost) * scale);
    }
    function release() { x = 40; dir = 1; lost = 0; E = H; rolling = true; setNote(fb, 'The ball rolls down: gravitational potential energy changes into kinetic energy. Some is changed into heat and sound by friction.'); }
    root.append(slider('Starting height', 1, 5, 1, H, function (v) { return v + ' m'; }, function (v) { H = v; rolling = false; x = 40; lost = 0; drawTrack(); show(); }),
      chips('Track surface', [[false, 'Smooth'], [true, 'Rough']], false, function (v) { rough = v; }), s, el('div', { class: 'ctrl' }, btn('▶ Release the ball', release)), fb);
    drawTrack(); show();
    loop(root, function (dt) {
      if (!rolling) return;
      for (var i = 0; i < 4; i++) {
        var g = (220 - y(x)) / maxH * 5, k = E - lost - g;
        if (k <= 0.001) { dir = -dir; x += dir * 2; }
        var v = Math.sqrt(Math.max(0, k)) * 70;
        var dx = dir * v * dt / 4 + dir * 0.2; x += dx; lost += Math.abs(dx) * (rough ? 0.004 : 0.0012);
        if (x < 40) { x = 40; dir = 1; } if (x > 400) { x = 400; dir = -1; }
        if (E - lost < 0.05 && g < 0.05) { rolling = false; setNote(fb, 'The ball has stopped. All of its energy has been changed into heat and sound by friction. Energy was converted, not destroyed.' + (rough ? ' On the rough track it stopped sooner.' : ''), 'good'); break; }
      }
      show();
    });
  };

  /* 17. Magnets */
  SIMS.magnets = function (root) {
    var OBJ = [['📎', 'Steel paper clip', true], ['🔩', 'Iron nail', true], ['🪙', 'Nickel strip', true], ['🥫', 'Aluminium can', false], ['🔌', 'Copper wire', false], ['✏️', 'Wooden pencil', false], ['🔘', 'Plastic button', false], ['🔮', 'Glass marble', false]];
    var mode = 'test', box = el('div'), fb = note('');
    function testView() {
      box.textContent = ''; var s = svg(380, 160, 'Magnet and object');
      S('rect', { x: 20, y: 60, width: 60, height: 40, fill: '#cf3f3f' }, s); S('rect', { x: 80, y: 60, width: 60, height: 40, fill: '#2a6fc9' }, s);
      S('text', { x: 50, y: 87, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700, text: 'N' }, s); S('text', { x: 110, y: 87, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700, text: 'S' }, s);
      var o = S('text', { x: 320, y: 95, 'font-size': 40, 'text-anchor': 'middle', text: '' }, s);
      var res = table(['Object', 'Attracted?']), sel = 0;
      var row = chips('Object', OBJ.map(function (x, k) { return [k, x[0] + ' ' + x[1]]; }), 0, function (k) { sel = k; o.textContent = OBJ[k][0]; o.setAttribute('x', 320); });
      o.textContent = OBJ[0][0];
      box.append(row, s, el('div', { class: 'ctrl' }, btn('🧲 Bring the magnet close', function () {
        var it = OBJ[sel]; o.setAttribute('x', it[2] ? 162 : 300);
        res.add([it[1], it[2] ? 'Yes' : 'No']);
        setNote(fb, it[1] + (it[2] ? ' is attracted: it is made of a magnetic material.' : ' is not attracted.' + (/Aluminium|Copper/.test(it[1]) ? ' It is a metal, but not a magnetic one!' : '')), it[2] ? 'good' : '');
      })), el('div', { class: 'scroll' }, res.el));
      setNote(fb, 'Choose an object and bring the magnet close.');
    }
    function polesView() {
      box.textContent = ''; var flipped = false, s = svg(380, 140, 'Two magnets');
      function magnet(x, left, right) { S('rect', { x: x, y: 50, width: 50, height: 36, fill: left === 'N' ? '#cf3f3f' : '#2a6fc9' }, s); S('rect', { x: x + 50, y: 50, width: 50, height: 36, fill: right === 'N' ? '#cf3f3f' : '#2a6fc9' }, s); S('text', { x: x + 25, y: 74, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700, text: left }, s); S('text', { x: x + 75, y: 74, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700, text: right }, s); }
      function draw(gap) { s.textContent = ''; magnet(30, 'N', 'S'); var l = flipped ? 'N' : 'S', r = flipped ? 'S' : 'N'; magnet(130 + gap, l, r); }
      draw(80);
      box.append(s, el('div', { class: 'ctrl' }, btn('🔄 Turn magnet B around', function () { flipped = !flipped; draw(80); setNote(fb, 'Magnet B now has its ' + (flipped ? 'N' : 'S') + ' pole facing magnet A\'s S pole.'); }),
        btn('➡️ Push them together', function () {
          var facing = flipped ? 'N' : 'S', repel = facing === 'S';
          draw(repel ? 150 : 0);
          setNote(fb, 'S pole facing ' + facing + ' pole: ' + (repel ? 'like poles REPEL, so magnet B is pushed away.' : 'unlike poles ATTRACT, so the magnets snap together.'), 'good');
        })));
      setNote(fb, 'Magnet A\'s S pole faces magnet B. Push them together, then turn magnet B around and try again.');
    }
    root.append(chips('Experiment', [['test', 'Test objects'], ['poles', 'Poles']], mode, function (v) { mode = v; v === 'test' ? testView() : polesView(); }), box, fb);
    testView();
  };

  /* 18. Forces: friction ramp and spring */
  SIMS.forces = function (root) {
    var box = el('div'), fb = note('');
    function frictionView() {
      box.textContent = ''; var view = el('div'); box.appendChild(view);
      var SURF = { glass: ['Glass', 0.15, '#cfe9f5'], wood: ['Wood', 0.25, '#d9b07c'], carpet: ['Carpet', 0.6, '#b36a8a'], sand: ['Sandpaper', 0.9, '#d6c28f'] };
      var surf = 'wood', running = false, xpos = 0, v = 0, phase = 0;
      var s = svg(440, 200, 'Toy car rolling down a ramp onto a surface');
      S('path', { d: 'M20,60 L120,150', stroke: '#555', 'stroke-width': 5 }, s);
      var floor = S('rect', { x: 120, y: 150, width: 310, height: 14 }, s);
      for (var m = 0; m <= 300; m += 50) S('text', { x: 120 + m, y: 182, 'font-size': 11, 'text-anchor': 'middle', text: m + ' cm' }, s);
      var car = S('text', { 'font-size': 26, text: '🚗' }, s);
      var res = table(['Surface', 'Distance travelled']);
      function place() { if (phase === 0) { car.setAttribute('x', 20 + xpos); car.setAttribute('y', 58 + xpos * 0.9); } else { car.setAttribute('x', 110 + xpos); car.setAttribute('y', 150); } }
      function setSurf(k) { surf = k; floor.setAttribute('fill', SURF[k][2]); }
      setSurf('wood'); place();
      view.append(chips('Surface', Object.keys(SURF).map(function (k) { return [k, SURF[k][0]]; }), surf, setSurf), s,
        el('div', { class: 'ctrl' }, btn('▶ Let the car go', function () { if (running) return; running = true; phase = 0; xpos = 0; v = 0; })), el('div', { class: 'scroll' }, res.el));
      setNote(fb, 'Release the car from the same height each time (a fair test). Only the surface changes.');
      loop(view, function (dt) {
        if (!running) return;
        if (phase === 0) { xpos += dt * 160; if (xpos >= 100) { phase = 1; xpos = 0; v = 160; } }
        else { v -= SURF[surf][1] * 160 * dt * 1.4; xpos += Math.max(0, v) * dt; if (v <= 0) { running = false; var cm = Math.round(xpos); res.add([SURF[surf][0], cm + ' cm']); setNote(fb, 'On ' + SURF[surf][0].toLowerCase() + ', the car travelled about ' + cm + ' cm (model). Rougher surfaces give more frictional force, so the car stops sooner.', 'good'); } }
        place();
      });
    }
    function springView() {
      box.textContent = '';
      var mass = 0, s = svg(300, 300, 'Spring with masses'), res = table(['Mass', 'Extension']);
      function draw() {
        s.textContent = '';
        S('rect', { x: 60, y: 10, width: 180, height: 10, fill: '#555' }, s);
        var ext = mass / 100 * 2, len = 80 + ext * 14, d = 'M150,20';
        for (var i = 1; i <= 12; i++) d += ' L' + (150 + (i % 2 ? 18 : -18)) + ',' + (20 + len * i / 12);
        S('path', { d: d + ' L150,' + (20 + len), stroke: '#333', 'stroke-width': 3, fill: 'none' }, s);
        if (mass) S('rect', { x: 125, y: 20 + len, width: 50, height: 16 + mass / 25, fill: '#8a8f99', stroke: '#333' }, s);
        S('text', { x: 250, y: 20 + len, 'font-size': 13, text: mass + ' g' }, s);
        S('line', { x1: 40, y1: 100, x2: 260, y2: 100, stroke: '#2a6fc9', 'stroke-dasharray': '4 4' }, s);
        S('text', { x: 40, y: 95, 'font-size': 11, fill: '#2a6fc9', text: 'unstretched length' }, s);
      }
      draw();
      box.append(chips('Mass hung on the spring', [0, 100, 200, 300, 400, 500].map(function (m) { return [m, m + ' g']; }), 0, function (m) {
        mass = m; draw(); res.add([m + ' g', (m / 100 * 2) + ' cm']);
        setNote(fb, m + ' g stretches the spring by ' + (m / 100 * 2) + ' cm. Each extra 100 g adds 2 cm: the extension increases with the load (this spring stays within its limit up to 500 g).', 'good');
      }), s, el('div', { class: 'scroll' }, res.el));
      setNote(fb, 'Hang different masses and look at the pattern in the table.');
    }
    root.append(chips('Experiment', [['friction', 'Friction ramp'], ['spring', 'Spring']], 'friction', function (v) { v === 'friction' ? frictionView() : springView(); }), box, fb);
    frictionView();
  };

  /* 19. Food web */
  SIMS.foodchains = function (root) {
    var O = {
      grass: ['🌿', 'Grass', 220, 266, []], cat: ['🐛', 'Caterpillar', 130, 196, ['grass']], hop: ['🦗', 'Grasshopper', 310, 196, ['grass']],
      frog: ['🐸', 'Frog', 130, 118, ['cat', 'hop']], bird: ['🐦', 'Bird', 310, 118, ['cat', 'hop']], snake: ['🐍', 'Snake', 150, 36, ['frog', 'bird']], eagle: ['🦅', 'Eagle', 290, 36, ['snake', 'bird']]
    };
    var removed = null, s = svg(440, 300, 'Food web'), fb = note('');
    arrowMarker(s, 'fwArrow', '#666');
    function chains() { var n = 0; (function walk(k) { var eaters = Object.keys(O).filter(function (j) { return O[j][4].indexOf(k) >= 0; }); if (!eaters.length) { n++; return; } eaters.forEach(walk); })('grass'); return n; }
    function draw() {
      while (s.childNodes.length > 1) s.removeChild(s.lastChild);
      Object.keys(O).forEach(function (k) {
        O[k][4].forEach(function (prey) {
          var a = O[prey], b = O[k], dx = b[2] - a[2], dy = b[3] - a[3], L = Math.hypot(dx, dy);
          S('line', { x1: a[2] + dx / L * 26, y1: a[3] + dy / L * 26, x2: b[2] - dx / L * 28, y2: b[3] - dy / L * 28, stroke: removed && (removed === k || removed === prey) ? '#ddd' : '#666', 'stroke-width': 2.5, 'marker-end': 'url(#fwArrow)' }, s);
        });
      });
      Object.keys(O).forEach(function (k) {
        var o = O[k], g = S('g', { tabindex: 0, role: 'button', 'aria-label': 'Remove ' + o[1], style: 'cursor:pointer' }, s);
        S('circle', { cx: o[2], cy: o[3], r: 24, fill: removed === k ? '#f3d3d3' : '#fff', stroke: removed === k ? '#cf3f3f' : '#333', 'stroke-width': 2.5 }, g);
        S('text', { x: o[2], y: o[3] + 9, 'text-anchor': 'middle', 'font-size': 24, text: removed === k ? '✖' : o[0] }, g);
        var side = o[2] < 220 ? -1 : 1;
        S('text', { x: o[2] + side * 30, y: side ? o[3] + 4 : o[3] + 40, 'text-anchor': side < 0 ? 'end' : side > 0 ? 'start' : 'middle', 'font-size': 12, 'font-weight': 700, text: o[1] }, g);
        var act = function () { removed = removed === k ? null : k; draw(); explain(); };
        g.addEventListener('click', act); g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
      });
    }
    function explain() {
      if (!removed) { setNote(fb, 'This food web has ' + chains() + ' food chains, all starting with grass. Tap a living thing to remove it and see what might happen.'); return; }
      var r = O[removed], lines = [];
      r[4].forEach(function (p) { lines.push('⬆ ' + O[p][1] + ': fewer ' + r[1].toLowerCase() + 's eat it, so its population may increase.'); });
      Object.keys(O).forEach(function (k) {
        if (O[k][4].indexOf(removed) < 0) return;
        var other = O[k][4].filter(function (p) { return p !== removed; });
        lines.push('⬇ ' + O[k][1] + ': loses some of its food, so its population may decrease' + (other.length ? ', but it can still eat the ' + other.map(function (p) { return O[p][1].toLowerCase(); }).join(' and ') + '.' : '.'));
      });
      if (removed === 'grass') lines.push('Without the producer, every animal in this web would eventually run out of food.');
      setNote(fb, 'If all the ' + r[1].toLowerCase() + (removed === 'grass' ? '' : 's') + ' were removed: ' + lines.join(' '));
    }
    root.append(s, fb); draw(); explain();
  };

  /* 20. Adaptations: design to survive */
  SIMS.adaptations = function (root) {
    var HAB = { desert: '🏜️ Desert', arctic: '🧊 Arctic', pond: '🪷 Pond', forest: '🌳 Rainforest' };
    var F = [
      ['Thick fur', { arctic: [1, 'traps heat and keeps it warm'], desert: [-1, 'makes it too hot'] }],
      ['White fur', { arctic: [1, 'camouflage in the snow'], forest: [-1, 'easy to spot among green leaves'] }],
      ['Large ears', { desert: [1, 'lose heat to keep cool'], arctic: [-1, 'lose too much heat'] }],
      ['Small ears', { arctic: [1, 'lose less heat'] }],
      ['Thick layer of fat', { arctic: [1, 'keeps it warm and stores energy'], desert: [-1, 'traps too much heat'] }],
      ['Webbed feet', { pond: [1, 'swim well in water'] }],
      ['Gills', { pond: [1, 'take in oxygen dissolved in water'], desert: [-1, 'useless out of water'], arctic: [-1, 'useless on the ice'], forest: [-1, 'useless on land'] }],
      ['Long eyelashes and closable nostrils', { desert: [1, 'keep out sand in sandstorms'] }],
      ['Wide, padded feet', { desert: [1, 'do not sink into soft sand'], arctic: [1, 'spread weight on the snow'] }],
      ['Can go a long time without drinking', { desert: [1, 'survive where water is scarce'] }],
      ['Green colour', { forest: [1, 'camouflage among the leaves'], pond: [1, 'blends in with water plants'], arctic: [-1, 'easy to spot on white snow'] }],
      ['Strong grip for climbing trees', { forest: [1, 'reach food and escape predators in the trees'] }]
    ];
    var hab = 'desert', picked = [];
    var list = el('div', { class: 'pick' }), meter = el('div', { class: 'meter' }, el('span')), fb = note('');
    function draw() {
      list.textContent = '';
      F.forEach(function (f, k) {
        var on = picked.indexOf(k) >= 0, b = el('button', { type: 'button', class: 'chip', 'aria-pressed': on ? 'true' : 'false' }, f[0]);
        b.onclick = function () { if (on) picked = picked.filter(function (x) { return x !== k; }); else if (picked.length < 4) picked.push(k); else { setNote(fb, 'You can choose up to 4 features. Tap one to remove it first.', 'bad'); return; } draw(); };
        list.appendChild(b);
      });
      var score = 0, lines = picked.map(function (k) { var e = F[k][1][hab]; if (!e) return '• ' + F[k][0] + ': does not help much here.'; score += e[0]; return (e[0] > 0 ? '✓ ' : '✗ ') + F[k][0] + ': ' + e[1] + '.'; });
      var pct = Math.max(0, Math.min(100, 50 + score * 15));
      meter.firstChild.style.width = pct + '%';
      setNote(fb, picked.length ? 'Survival chance in the ' + HAB[hab].slice(3).toLowerCase() + ': ' + (pct >= 85 ? 'excellent!' : pct >= 60 ? 'good' : pct >= 40 ? 'not great' : 'poor') + '. ' + lines.join(' ') : 'Choose up to 4 features for an animal living in the ' + HAB[hab].slice(3).toLowerCase() + '.', pct >= 60 && picked.length ? 'good' : '');
    }
    root.append(chips('Habitat', Object.keys(HAB).map(function (k) { return [k, HAB[k]]; }), hab, function (h) { hab = h; draw(); }), list, el('div', { class: 'lbl' }, 'Survival meter'), meter, fb);
    draw();
  };

  window.SCI_SIMS = SIMS;
})();
