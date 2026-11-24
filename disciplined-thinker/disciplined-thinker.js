// The Disciplined Thinker — minimal: mobile menu toggle only.
// The brief calls for restraint and accessible, fast loading; no scroll animation.
(function () {
  var btn = document.querySelector('.menu');
  var panel = document.getElementById('mainnav-m');
  if (!btn || !panel) return;

  function close() {
    panel.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    panel.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
  });

  // Close the mobile menu after choosing a destination.
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });

  // Close on escape.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
