// The Disciplined Thinker — only essential interface behaviour.
(function () {
  var button = document.querySelector('.menu');
  var panel = document.getElementById('mainnav-m');
  var site = document.querySelector('.site');
  var root = document.documentElement;

  function closeMenu() {
    if (!button || !panel) return;
    panel.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }

  if (button && panel) {
    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      panel.hidden = isOpen;
      button.setAttribute('aria-expanded', String(!isOpen));
    });

    panel.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
        button.focus();
      }
    });
  }

  function updateHeader() {
    if (site) site.classList.toggle('is-scrolled', window.scrollY > 8);
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
    root.style.setProperty('--scroll-progress', progress);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  var heroVideo = document.querySelector('.hero__video');
  var motionPreference = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

  function syncHeroVideo() {
    if (!heroVideo) return;
    if (motionPreference && motionPreference.matches) {
      heroVideo.pause();
      heroVideo.currentTime = 0;
      return;
    }
    var playback = heroVideo.play();
    if (playback && typeof playback.catch === 'function') playback.catch(function () {});
  }

  syncHeroVideo();
  if (motionPreference) {
    if (typeof motionPreference.addEventListener === 'function') motionPreference.addEventListener('change', syncHeroVideo);
    else if (typeof motionPreference.addListener === 'function') motionPreference.addListener(syncHeroVideo);
  }

  /* Gentle editorial reveals. No element is hidden unless the browser
     supports IntersectionObserver and the visitor accepts motion. */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var animated = Array.prototype.slice.call(document.querySelectorAll([
      '.field-notes > *',
      '.folio__head',
      '.writing-list li',
      '.feature-book',
      '.book-index article',
      '.talks__lead',
      '.talks__list li',
      '.organisations__grid a',
      '.practice__intro',
      '.practice__index',
      '.practice__media',
      '.about > *'
    ].join(', ')));

    animated.forEach(function (element, index) {
      element.setAttribute('data-animate', '');
      element.style.setProperty('--delay', (index % 3) * 55 + 'ms');
    });
    root.classList.add('motion-ready');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    animated.forEach(function (element) { observer.observe(element); });
  }
})();
