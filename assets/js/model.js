/* Comedy Workshop - data registry + the timing / analysis engine.
   Script data files call CW.registerScript(obj); case studies call CW.registerStudy(obj). */
(function () {
  'use strict';
  window.CW = window.CW || {};

  var scripts = {};
  var studies = {};

  CW.registerScript = function (s) { scripts[s.id] = s; };
  CW.registerStudy  = function (s) { studies[s.id] = s; };
  CW.allScripts = function () {
    return Object.keys(scripts).map(function (k) { return scripts[k]; })
      .sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
  };
  CW.allStudies = function () {
    return Object.keys(studies).map(function (k) { return studies[k]; });
  };
  CW.getScript = function (id) { return scripts[id]; };
  CW.getStudy  = function (id) { return studies[id]; };

  /* ------------------------------------------------------------------
     Beat roles. `stage` beats are directions, not spoken - zero words.
     ------------------------------------------------------------------ */
  CW.ROLES = {
    setup:      { label: 'Setup',      cls: 't-setup',      blurb: 'Builds the expectation the laugh will later violate.' },
    punch:      { label: 'Punchline',  cls: 't-punch',      blurb: 'The moment the expectation breaks. Must have a named subversion.' },
    tag:        { label: 'Tag',        cls: 't-tag',        blurb: 'Rides the same axis as the punch. No new subversion - value is surprise + escalation.' },
    oneliner:   { label: 'One-liner',  cls: 't-oneliner',   blurb: 'Setup and punch compressed into a single line.' },
    actout:     { label: 'Act-out',    cls: 't-actout',     blurb: 'Physical or voiced. The body does the punching.' },
    callback:   { label: 'Callback',   cls: 't-callback',   blurb: 'Reactivates an earlier laugh. Pays interest on a joke already banked.' },
    sincere:    { label: 'Sincere',    cls: 't-sincere',    blurb: 'Genuine beat. Buys the room. Only works if you actually mean it.' },
    transition: { label: 'Transition', cls: 't-transition', blurb: 'Moves the story. Carries no laugh of its own - keep it short.' },
    stage:      { label: 'Stage',      cls: 't-stage',      blurb: 'Direction, not spoken.' }
  };

  /* ------------------------------------------------------------------
     Timing engine.
     A beat costs: (words / wpm) * 60 + pauseBefore + pauseAfter + laugh
     `laugh` is the expected dead air you must not talk over.
     ------------------------------------------------------------------ */
  var DEFAULTS = { wpm: 145, laughScale: 1 };

  function wordCount(text) {
    if (!text) return 0;
    // Bracketed stage directions inside a spoken line are not spoken.
    var spoken = String(text).replace(/\[[^\]]*\]/g, ' ');
    var m = spoken.match(/[A-Za-zÀ-ÿ0-9'’\-]+/g);
    return m ? m.length : 0;
  }
  CW.wordCount = wordCount;

  CW.beatSeconds = function (beat, opts) {
    opts = opts || {};
    var wpm = opts.wpm || DEFAULTS.wpm;
    var scale = opts.laughScale == null ? DEFAULTS.laughScale : opts.laughScale;
    var speak = beat.role === 'stage' ? 0 : (wordCount(beat.text) / wpm) * 60;
    var pause = (beat.pauseBefore || 0) + (beat.pauseAfter || 0);
    var laugh = (beat.laugh || 0) * scale;
    return speak + pause + laugh;
  };

  /* Returns { total, speak, laugh, pause, words, segments:[{id,title,seconds,...}] } */
  CW.timeVersion = function (version, opts) {
    opts = opts || {};
    var includeOptional = opts.includeOptional !== false;
    var out = { total: 0, speak: 0, laugh: 0, pause: 0, words: 0, beats: 0, segments: [] };

    (version.segments || []).forEach(function (seg) {
      var s = { id: seg.id, title: seg.title, seconds: 0, words: 0, laugh: 0, beats: 0 };
      (seg.beats || []).forEach(function (b) {
        if (b.optional && !includeOptional) return;
        var wpm = opts.wpm || DEFAULTS.wpm;
        var scale = opts.laughScale == null ? DEFAULTS.laughScale : opts.laughScale;
        var w = b.role === 'stage' ? 0 : wordCount(b.text);
        var speak = (w / wpm) * 60;
        var pause = (b.pauseBefore || 0) + (b.pauseAfter || 0);
        var laugh = (b.laugh || 0) * scale;
        s.seconds += speak + pause + laugh;
        s.words += w; s.laugh += laugh; s.beats++;
        out.speak += speak; out.pause += pause; out.laugh += laugh;
        out.words += w; out.beats++;
      });
      out.total += s.seconds;
      out.segments.push(s);
    });
    return out;
  };

  /* Laughs per minute - the blunt density check. */
  CW.laughsPerMinute = function (version, opts) {
    var t = CW.timeVersion(version, opts);
    var n = 0;
    (version.segments || []).forEach(function (seg) {
      (seg.beats || []).forEach(function (b) {
        if (b.optional && opts && opts.includeOptional === false) return;
        if (b.role === 'punch' || b.role === 'tag' || b.role === 'oneliner' ||
            b.role === 'actout' || b.role === 'callback') n++;
      });
    });
    return t.total > 0 ? (n / (t.total / 60)) : 0;
  };

  /* Expectation concentration: how lopsided is the room's guess?
     Higher primary % = easier, cleaner subversion. */
  CW.concentration = function (expectations) {
    if (!expectations || !expectations.length) return null;
    var sorted = expectations.slice().sort(function (a, b) { return b.pct - a.pct; });
    var top = sorted[0].pct, second = sorted[1] ? sorted[1].pct : 0;
    var grade = top >= 85 ? 'strong' : top >= 70 ? 'ok' : 'weak';
    return { top: top, second: second, gap: top - second, grade: grade, sorted: sorted };
  };

  CW.flatBeats = function (version) {
    var out = [];
    (version.segments || []).forEach(function (seg) {
      (seg.beats || []).forEach(function (b) { out.push({ beat: b, seg: seg }); });
    });
    return out;
  };

  CW.findVersion = function (script, vid) {
    var vs = script.versions || [];
    for (var i = 0; i < vs.length; i++) if (vs[i].id === vid) return vs[i];
    return vs[vs.length - 1];
  };

  /* Beat-level diff between two versions, keyed on beat.id.
     status: same | mod | add | del */
  CW.diffVersions = function (a, b) {
    var A = {}, B = {};
    CW.flatBeats(a).forEach(function (x) { A[x.beat.id] = x.beat; });
    CW.flatBeats(b).forEach(function (x) { B[x.beat.id] = x.beat; });
    function statusFor(id, side) {
      var l = A[id], r = B[id];
      if (l && !r) return side === 'left' ? 'del' : 'gone';
      if (!l && r) return side === 'left' ? 'gone' : 'add';
      if (l && r && (l.text !== r.text || l.role !== r.role)) return 'mod';
      return 'same';
    }
    return { statusFor: statusFor, inA: A, inB: B };
  };
})();
