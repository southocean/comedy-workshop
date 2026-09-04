/* Comedy Workshop - the script viewer.
   A read-only rich editor: role highlighting, subversion inspector,
   expectation meters, runtime budget, version compare. */
(function () {
  'use strict';
  var esc = CW.esc, mmss = CW.mmss;

  var state = {
    script: null,
    version: null,
    compareWith: null,
    pinned: null,
    opts: { wpm: 145, laughScale: 1, includeOptional: true }
  };

  /* ================= rendering a single beat ================= */

  function beatClasses(b) {
    var c = ['beat', 't-' + (b.role || 'transition')];
    if (b.optional) c.push('beat--optional');
    if (b.role === 'stage') c.push('beat--stage');
    return c.join(' ');
  }

  function beatText(b) {
    // [bracketed] fragments render as stage direction inside the line.
    return esc(b.text).replace(/\[([^\]]*)\]/g,
      '<em class="faint" style="font-family:var(--sans);font-size:.78em">($1)</em>');
  }

  function renderBeat(b, idx, opts) {
    opts = opts || {};
    var secs = CW.beatSeconds(b, state.opts);
    var dot = b.subversion ? '<span class="subv-dot" title="Subversion point">S</span>' : '';
    var meta = [];
    if (b.role && b.role !== 'transition' && b.role !== 'stage') {
      meta.push('<span class="role-chip t-' + b.role + '">' + CW.ROLES[b.role].label + '</span>');
    }
    if (b.callbackTo) meta.push('<span class="role-chip t-callback">callback</span>');
    if (b.laugh) meta.push('<span>&#9209; ' + b.laugh + 's laugh</span>');
    if (b.pauseBefore) meta.push('<span>beat before</span>');
    if (b.alt) meta.push('<span>alt line available</span>');

    return '<div class="' + beatClasses(b) + (opts.extraClass ? ' ' + opts.extraClass : '') +
             '" data-beat="' + esc(b.id) + '" tabindex="0">' +
             '<div class="beat__gutter">' + mmss(secs).replace('0:', ':') + '</div>' +
             '<div class="beat__line">' +
               '<span class="beat__text">' + beatText(b) + '</span>' + dot +
               (meta.length ? '<div class="beat__meta">' + meta.join('') + '</div>' : '') +
             '</div>' +
           '</div>';
  }

  function renderVersion(version, opts) {
    opts = opts || {};
    var timing = CW.timeVersion(version, state.opts);
    var html = '';
    (version.segments || []).forEach(function (seg, i) {
      var st = timing.segments[i];
      html += '<section class="seg">' +
        '<div class="seg__head" id="seg-' + esc(seg.id) + (opts.suffix || '') + '">' +
          '<span class="seg__num">' + (i + 1) + '</span>' +
          '<h3 class="seg__title">' + esc(seg.title) + '</h3>' +
          '<span class="seg__time">' + mmss(st.seconds) + '</span>' +
        '</div>' +
        (seg.intent ? '<div class="seg__intent">' + esc(seg.intent) + '</div>' : '');
      (seg.beats || []).forEach(function (b, j) {
        var extra = opts.diffClass ? opts.diffClass(b) : '';
        html += renderBeat(b, j, { extraClass: extra });
      });
      html += '</section>';
    });
    return html;
  }

  /* ================= inspector ================= */

  function expBlock(expectations) {
    var conc = CW.concentration(expectations);
    if (!conc) return '';
    var msg = conc.grade === 'strong'
      ? 'Concentrated. The room is thinking one thing - clean target.'
      : conc.grade === 'ok'
        ? 'Workable, but the room is split. A second reading is alive.'
        : 'Diffuse. No dominant expectation means there is nothing solid to break.';
    var html = '<div class="conc conc--' + conc.grade + '">' +
      '<span class="conc__dot"></span>' +
      '<span><b>' + conc.top + '% concentration</b> &middot; ' + msg + '</span></div>';
    conc.sorted.forEach(function (e, i) {
      html += '<div class="exp' + (i === 0 ? ' exp--primary' : '') + '">' +
        '<div class="exp__top"><span class="exp__pct">' + e.pct + '%</span>' +
        '<span>' + esc(e.label) + '</span></div>' +
        '<div class="exp__bar"><span class="exp__fill" style="width:' + e.pct + '%"></span></div></div>';
    });
    return html;
  }

  function subvBlock(s) {
    return '<div class="subv">' +
      '<div class="subv__leg"><span class="subv__label">They expect</span>' + esc(s.from) + '</div>' +
      '<div class="subv__arrow">&#8595;</div>' +
      '<div class="subv__leg"><span class="subv__label">They get</span>' + esc(s.to) + '</div>' +
      (s.axis ? '<div class="subv__axis"><b>Axis:</b> ' + esc(s.axis) + '</div>' : '') +
      (s.mechanism ? '<div class="subv__axis"><b>Mechanism:</b> ' + esc(s.mechanism) + '</div>' : '') +
      '</div>';
  }

  function renderInspector(b) {
    var host = document.getElementById('inspector');
    if (!b) {
      host.innerHTML = '<div class="insp"><div class="insp__empty">' +
        'Hover a line to inspect it.<br>Click to pin it open.</div></div>';
      return;
    }
    var role = CW.ROLES[b.role] || CW.ROLES.transition;
    var secs = CW.beatSeconds(b, state.opts);
    var h = '<div class="insp">';
    h += '<div class="insp__head">' +
      '<div class="row" style="margin-bottom:8px">' +
        '<span class="role-chip t-' + b.role + '">' + role.label + '</span>' +
        '<span class="spacer"></span>' +
        '<span class="faint small" style="font-family:var(--mono)">' + mmss(secs) + ' &middot; ' +
        CW.wordCount(b.text) + 'w</span>' +
      '</div>' +
      '<blockquote class="insp__quote">' + beatText(b) + '</blockquote>' +
      '<div class="faint small">' + esc(role.blurb) + '</div>' +
    '</div><div class="insp__body">';

    if (b.expectations && b.expectations.length) {
      h += '<h4>What the room is thinking</h4>' + expBlock(b.expectations);
    }
    if (b.subversion) {
      h += '<h4>Point of subversion</h4>' + subvBlock(b.subversion);
    }
    if (b.role === 'tag' && !b.subversion) {
      h += '<h4>Why it is a tag</h4><p class="muted">No new subversion. It rides the axis the punchline already opened - the value is that they did not think there was more.</p>';
    }
    if (b.note) h += '<h4>Craft note</h4><p>' + esc(b.note) + '</p>';
    if (b.qa && b.qa.length) {
      h += '<h4>Principles in play</h4><div class="row" style="gap:6px">' +
        b.qa.map(function (pid) {
          var p = (window.CW.CRAFT && CW.CRAFT.principles || []).filter(function (x) { return x.id === pid; })[0];
          return '<a class="pill" href="' + (state.craftBase || '../craft/index.html') + '#' + esc(pid) + '">' +
                 esc(p ? p.title : pid) + '</a>';
        }).join('') + '</div>';
    }
    if (b.callbackTo) h += '<h4>Callback</h4><p>Reactivates <code>' + esc(b.callbackTo) + '</code>.</p>';
    if (b.delivery) h += '<h4>Delivery</h4><p>' + esc(b.delivery) + '</p>';
    if (b.alt && b.alt.length) {
      h += '<h4>Alternate lines</h4>';
      b.alt.forEach(function (a) {
        h += '<p style="border-left:2px solid var(--border);padding-left:9px">' +
             '<em>' + esc(a.text) + '</em>' +
             (a.why ? '<br><span class="faint small">' + esc(a.why) + '</span>' : '') + '</p>';
      });
    }
    if (b.risk) h += '<div class="callout callout--warn"><b>Risk:</b> ' + esc(b.risk) + '</div>';
    h += '</div></div>';
    host.innerHTML = h;
  }

  /* ================= rail ================= */

  var SEG_COLORS = ['var(--setup-edge)','var(--punch-edge)','var(--tag-edge)',
                    'var(--oneliner-edge)','var(--callback-edge)','var(--actout-edge)'];

  function renderRail() {
    var host = document.getElementById('rail');
    if (!host) return;
    var t = CW.timeVersion(state.version, state.opts);
    // A case study has no slot to hit, so it carries no target and gets no gauge.
    var target = state.script.targetSeconds;
    var lpm = CW.laughsPerMinute(state.version, state.opts);
    var gaugeTxt = '', gaugeCls = 'good', targetLine = 'estimated from word count';
    if (target) {
      var delta = t.total - target;
      gaugeCls = Math.abs(delta) <= 15 ? 'good' : (delta > 0 ? 'over' : 'under');
      gaugeTxt = Math.abs(delta) <= 15
        ? 'On target'
        : (delta > 0 ? mmss(delta) + ' over target' : mmss(-delta) + ' under target');
      targetLine = 'estimated &middot; target ' + mmss(target);
    }

    var bar = t.segments.map(function (s, i) {
      return '<span style="width:' + (t.total ? (s.seconds / t.total * 100) : 0) + '%;background:' +
             SEG_COLORS[i % SEG_COLORS.length] + '" title="' + esc(s.title) + '"></span>';
    }).join('');

    var segs = t.segments.map(function (s, i) {
      return '<a class="rail__seg" href="#seg-' + esc(s.id) + '">' +
             '<span>' + (i + 1) + '. ' + esc(s.title) + '</span>' +
             '<time>' + mmss(s.seconds) + '</time></a>';
    }).join('');

    host.innerHTML =
      '<div class="rail">' +
        '<div class="rail__total">' + mmss(t.total) + '</div>' +
        '<div class="rail__target">' + targetLine + '</div>' +
        (gaugeTxt ? '<div class="gauge gauge--' + gaugeCls + '">' + gaugeTxt + '</div>' : '') +
        '<div class="rail__bar">' + bar + '</div>' +
        segs +
        '<hr class="rule" style="margin:12px 0">' +
        '<div class="small faint" style="line-height:1.9">' +
          '<div><b style="color:var(--text-dim)">' + t.words + '</b> spoken words</div>' +
          '<div><b style="color:var(--text-dim)">' + mmss(t.speak) + '</b> talking</div>' +
          '<div><b style="color:var(--text-dim)">' + mmss(t.laugh) + '</b> budgeted laughter</div>' +
          '<div><b style="color:var(--text-dim)">' + mmss(t.pause) + '</b> silence &amp; beats</div>' +
          '<div><b style="color:var(--text-dim)">' + lpm.toFixed(1) + '</b> laughs/min</div>' +
        '</div>' +
      '</div>';
  }

  /* ================= toolbar ================= */

  function renderToolbar() {
    var host = document.getElementById('toolbar');
    var vs = state.script.versions || [];
    var opts = vs.map(function (v) {
      return '<option value="' + esc(v.id) + '"' + (v.id === state.version.id ? ' selected' : '') +
             '>' + esc(v.label) + '</option>';
    }).join('');
    var cmpOpts = '<option value="">Compare with&hellip;</option>' + vs.map(function (v) {
      if (v.id === state.version.id) return '';
      return '<option value="' + esc(v.id) + '"' +
             (state.compareWith && state.compareWith.id === v.id ? ' selected' : '') +
             '>vs ' + esc(v.label) + '</option>';
    }).join('');

    host.innerHTML =
      '<select class="input" id="verSel">' + opts + '</select>' +
      '<select class="input" id="cmpSel">' + cmpOpts + '</select>' +
      '<span style="width:1px;height:22px;background:var(--border)"></span>' +
      '<button class="btn" id="tOptional" aria-pressed="' + state.opts.includeOptional + '">Cuttable lines</button>' +
      '<button class="btn" id="tPlain" aria-pressed="false">Plain text</button>' +
      '<span class="spacer"></span>' +
      '<label class="small faint" style="display:flex;align-items:center;gap:7px">pace' +
        '<input type="range" id="wpm" min="110" max="185" step="5" value="' + state.opts.wpm + '" style="width:90px">' +
        '<b style="font-family:var(--mono);color:var(--text-dim);min-width:52px">' + state.opts.wpm + ' wpm</b>' +
      '</label>' +
      '<label class="small faint" style="display:flex;align-items:center;gap:7px">room' +
        '<input type="range" id="laugh" min="0" max="150" step="10" value="' + Math.round(state.opts.laughScale * 100) + '" style="width:80px">' +
        '<b style="font-family:var(--mono);color:var(--text-dim);min-width:34px">' + Math.round(state.opts.laughScale * 100) + '%</b>' +
      '</label>';

    document.getElementById('verSel').onchange = function () {
      state.version = CW.findVersion(state.script, this.value);
      state.compareWith = null; state.pinned = null;
      syncUrl(); draw();
    };
    document.getElementById('cmpSel').onchange = function () {
      state.compareWith = this.value ? CW.findVersion(state.script, this.value) : null;
      syncUrl(); draw();
    };
    document.getElementById('tOptional').onclick = function () {
      state.opts.includeOptional = !state.opts.includeOptional;
      document.body.classList.toggle('hide-optional', !state.opts.includeOptional);
      draw();
    };
    document.getElementById('tPlain').onclick = function () {
      var on = document.body.classList.toggle('plain-text');
      this.setAttribute('aria-pressed', String(on));
    };
    document.getElementById('wpm').oninput = function () {
      state.opts.wpm = +this.value; draw();
    };
    document.getElementById('laugh').oninput = function () {
      state.opts.laughScale = +this.value / 100; draw();
    };
  }

  /* ================= compare ================= */

  function renderCompare() {
    // Always orient the diff chronologically: older version on the left, newer
    // on the right, regardless of which one is currently selected. Otherwise
    // "added" and "cut" invert whenever you compare a new draft against an old
    // one, which is the normal direction of travel.
    var order = state.script.versions;
    var iCur = order.indexOf(state.version), iOth = order.indexOf(state.compareWith);
    var older = iCur <= iOth ? state.version : state.compareWith;
    var newer = iCur <= iOth ? state.compareWith : state.version;

    // diffVersions(A, B): "left" is A's perspective, "right" is B's.
    var d = CW.diffVersions(older, newer);
    var key = '<div class="diff-key">' +
      '<span><i style="background:var(--ok)"></i>added in ' + esc(newer.label.split(' ')[0]) + '</span>' +
      '<span><i style="background:var(--danger)"></i>cut</span>' +
      '<span><i style="background:var(--warn)"></i>rewritten</span></div>';

    var tOld = CW.timeVersion(older, state.opts), tNew = CW.timeVersion(newer, state.opts);
    var delta = tNew.total - tOld.total;

    return '<div class="compare">' +
      '<div><div class="page"><div class="compare__head">' +
        '<b>' + esc(older.label) + '</b><span class="pill">' + mmss(tOld.total) + '</span>' +
        '<span class="faint small">older</span></div>' +
        renderVersion(older, { suffix: '-L', diffClass: function (bt) {
          var s = d.statusFor(bt.id, 'left');
          return s === 'del' ? 'd-del' : s === 'mod' ? 'd-mod' : '';
        }}) + '</div></div>' +
      '<div><div class="page"><div class="compare__head">' +
        '<b>' + esc(newer.label) + '</b><span class="pill">' + mmss(tNew.total) + '</span>' +
        '<span class="faint small">' + (delta >= 0 ? '+' : '-') + mmss(Math.abs(delta)) +
        (delta >= 0 ? ' longer' : ' shorter') + '</span>' +
        '<span class="spacer"></span>' + key + '</div>' +
        renderVersion(newer, { suffix: '-R', diffClass: function (bt) {
          var s = d.statusFor(bt.id, 'right');
          return s === 'add' ? 'd-add' : s === 'mod' ? 'd-mod' : '';
        }}) + '</div></div>' +
      '</div>';
  }

  /* ================= wiring ================= */

  function findBeat(id) {
    var found = null;
    [state.version, state.compareWith].forEach(function (v) {
      if (!v || found) return;
      CW.flatBeats(v).forEach(function (x) { if (!found && x.beat.id === id) found = x.beat; });
    });
    return found;
  }

  function wireBeats() {
    var page = document.getElementById('pages');
    page.addEventListener('mouseover', function (e) {
      var el = e.target.closest('.beat');
      if (!el || state.pinned) return;
      highlight(el.dataset.beat, false);
    });
    page.addEventListener('click', function (e) {
      var el = e.target.closest('.beat');
      if (!el) return;
      var id = el.dataset.beat;
      state.pinned = (state.pinned === id) ? null : id;
      highlight(state.pinned || id, true);
    });
    page.addEventListener('focusin', function (e) {
      var el = e.target.closest('.beat');
      if (el) highlight(el.dataset.beat, false);
    });
  }

  function highlight(id, pin) {
    Array.prototype.forEach.call(document.querySelectorAll('.beat.is-active'), function (n) {
      n.classList.remove('is-active');
    });
    if (!id) { renderInspector(null); return; }
    Array.prototype.forEach.call(document.querySelectorAll('.beat[data-beat="' + id + '"]'), function (n) {
      n.classList.add('is-active');
    });
    renderInspector(findBeat(id));
  }

  function syncUrl() {
    var q = '?id=' + encodeURIComponent(state.script.id) + '&v=' + encodeURIComponent(state.version.id) +
            (state.compareWith ? '&vs=' + encodeURIComponent(state.compareWith.id) : '');
    if (window.history && history.replaceState) history.replaceState(null, '', q);
  }

  function draw() {
    renderToolbar();
    renderRail();
    document.getElementById('pages').innerHTML = state.compareWith
      ? renderCompare()
      : '<div class="page">' + renderVersion(state.version) + '</div>';
    if (state.pinned) highlight(state.pinned, true); else renderInspector(null);
    var vn = document.getElementById('versionNotes');
    if (vn) {
      var v = state.version;
      vn.innerHTML = v.notes
        ? '<div class="panel" style="margin-bottom:18px"><div class="eyebrow">' + esc(v.label) +
          (v.date ? ' &middot; ' + esc(v.date) : '') + '</div><p style="margin:0" class="muted">' +
          esc(v.notes) + '</p></div>'
        : '';
    }
  }

  CW.mountScript = function () {
    var id = CW.qs('id', 'kulturnatten-2026');
    var s = CW.getScript(id);
    var root = document.getElementById('scriptRoot');
    if (!s) {
      root.innerHTML = '<div class="empty-state">No script called <code>' + esc(id) + '</code>. ' +
        '<a href="index.html">Back to the workshop</a>.</div>';
      return;
    }
    state.script = s;
    state.version = CW.findVersion(s, CW.qs('v', (s.versions[s.versions.length - 1] || {}).id));
    var vs = CW.qs('vs', '');
    state.compareWith = vs ? CW.findVersion(s, vs) : null;

    document.title = s.title + ' - Comedy Workshop';
    document.getElementById('scriptTitle').textContent = s.title;
    document.getElementById('scriptMeta').innerHTML =
      [s.venue, s.date, s.slot].filter(Boolean).map(esc).join(' &middot; ');
    if (s.premise) document.getElementById('scriptPremise').textContent = s.premise;

    draw();
    wireBeats();
  };
})();
