/* Comedy Workshop - shared chrome: theme, nav, tiny helpers.
   Plain script (no modules) so the site also works opened from file://. */
(function () {
  'use strict';

  /* ---------------- theme ---------------- */
  var KEY = 'cw-theme'; // 'light' | 'dark' | 'auto'

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function stored() {
    try { return localStorage.getItem(KEY) || 'auto'; } catch (e) { return 'auto'; }
  }
  function applyTheme(pref) {
    var actual = pref === 'auto' ? systemTheme() : pref;
    document.documentElement.setAttribute('data-theme', actual);
    document.documentElement.setAttribute('data-theme-pref', pref);
    var tt = document.querySelector('.theme-toggle');
    if (tt) {
      Array.prototype.forEach.call(tt.querySelectorAll('button'), function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.theme === pref));
      });
    }
  }
  function setTheme(pref) {
    try { localStorage.setItem(KEY, pref); } catch (e) {}
    applyTheme(pref);
  }

  // Apply as early as possible to avoid a flash.
  applyTheme(stored());
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () { if (stored() === 'auto') applyTheme('auto'); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ---------------- chrome ---------------- */
  var NAV = [
    { href: 'index.html',             label: 'Home',         key: 'home' },
    { href: 'craft/index.html',       label: 'Writing Craft',key: 'craft' },
    { href: 'workshop/index.html',    label: 'Workshop',     key: 'workshop' },
    { href: 'case-studies/index.html',label: 'Case Studies', key: 'case' }
  ];

  function buildChrome() {
    var host = document.querySelector('[data-chrome]');
    if (!host) return;
    var base = host.getAttribute('data-base') || '';
    var current = host.getAttribute('data-page') || '';

    var links = NAV.map(function (n) {
      var cur = n.key === current ? ' aria-current="page"' : '';
      return '<a href="' + base + n.href + '"' + cur + '>' + n.label + '</a>';
    }).join('');

    host.className = 'site-header';
    host.innerHTML =
      '<div class="site-header__inner">' +
        '<a class="brand" href="' + base + 'index.html">' +
          '<span class="brand__mark" aria-hidden="true">&#127820;</span>' +
          '<span>Comedy Workshop</span>' +
        '</a>' +
        '<nav class="nav">' + links + '</nav>' +
        '<div class="theme-toggle" role="group" aria-label="Colour theme">' +
          '<button data-theme="light" title="Light theme" aria-label="Light theme">&#9788;</button>' +
          '<button data-theme="auto"  title="Match system" aria-label="Match system">A</button>' +
          '<button data-theme="dark"  title="Dark theme" aria-label="Dark theme">&#9789;</button>' +
        '</div>' +
      '</div>';

    host.querySelector('.theme-toggle').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-theme]');
      if (b) setTheme(b.dataset.theme);
    });
    applyTheme(stored());

    var foot = document.querySelector('[data-footer]');
    if (foot) {
      foot.className = 'site-footer';
      foot.innerHTML = 'Comedy Workshop &middot; a private practice repo &middot; ' +
        '<a href="' + base + 'craft/index.html">the craft</a> &middot; ' +
        '<a href="' + base + 'workshop/index.html">the scripts</a>';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildChrome);
  else buildChrome();

  /* ---------------- helpers ---------------- */
  window.CW = window.CW || {};
  window.CW.setTheme = setTheme;
  window.CW.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };
  window.CW.qs = function (name, fallback) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : fallback;
  };
  window.CW.mmss = function (sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  };
})();
