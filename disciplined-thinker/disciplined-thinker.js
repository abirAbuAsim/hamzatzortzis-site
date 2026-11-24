// The Disciplined Thinker — restrained interaction only.
// Per the brief: no heavy animation. A mobile menu, a subtle header
// elevation on scroll, and a gentle one-time entrance reveal.
//
// The reveal is deliberately robust: content can NEVER stay hidden.
// Anything at or above the fold is revealed immediately, and a scroll
// sweep reveals the rest as it comes into view — fast scrolling, anchor
// jumps and no-JS all leave the content visible.
(function () {
  /* ---- Mobile menu ---- */
  var btn = document.querySelector('.menu');
  var panel = document.getElementById('mainnav-m');
  if (btn && panel) {
    var close = function () {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      panel.hidden = open;
      btn.setAttribute('aria-expanded', String(!open));
    });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---- Header elevation on scroll ---- */
  var site = document.querySelector('.site');
  var onHeader = function () { if (site) site.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onHeader, { passive: true });
  onHeader();

  /* ---- Entrance reveal ---- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var selector = [
    '.hero__text > *', '.portrait',
    '.strip__item',
    '.section__head', '.writing li', '.book',
    '.talks__grid li', '.orgs__grid li',
    '.practice__media', '.practice__text > *',
    '.about__bio', '.about__contact'
  ].join(', ');

  var els = Array.prototype.slice.call(document.querySelectorAll(selector));

  // No motion wanted (or no JS features): just show everything.
  if (reduce) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  // Mark for animation and stagger within sibling groups.
  els.forEach(function (el) {
    el.setAttribute('data-reveal', '');
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) {
      return c.matches && c.matches(selector);
    });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
  });

  var remaining = els.slice();
  function sweep() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    remaining = remaining.filter(function (el) {
      // reveal once the top crosses 92% of the viewport — this also
      // covers anything already scrolled past (negative top).
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.classList.add('in');
        return false; // drop from remaining
      }
      return true;
    });
    if (!remaining.length) {
      window.removeEventListener('scroll', onSweep);
      window.removeEventListener('resize', onSweep);
    }
  }

  var ticking = false;
  function onSweep() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; sweep(); });
  }

  sweep(); // reveal the above-the-fold content now
  window.addEventListener('scroll', onSweep, { passive: true });
  window.addEventListener('resize', onSweep);
  window.addEventListener('load', sweep);
  // final safety net: reveal anything still hidden shortly after load
  setTimeout(sweep, 1200);
})();
