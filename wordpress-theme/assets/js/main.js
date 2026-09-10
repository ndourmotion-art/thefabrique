/* The FABRIQUE — nav behaviour, smooth anchors and scroll reveals. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    if (!reduced) {
      document.body.classList.add('tf-anim-ready');
    }

    /* Sticky header state */
    var header = document.getElementById('tf-header');
    if (header) {
      var onScroll = function () {
        header.classList.toggle('is-scrolled', window.scrollY > 24);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* Mobile menu */
    var toggle = document.getElementById('tf-menu-toggle');
    var nav = document.getElementById('tf-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    /* Smooth in-page navigation */
    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
      var hash = link.hash;
      if (!hash || hash === '#') return;
      var target = document.querySelector(hash);
      if (!target) return;

      link.addEventListener('click', function (event) {
        event.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
        if (nav) nav.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        history.replaceState(null, '', hash);
      });
    });

    /* Scroll reveals */
    var items = document.querySelectorAll('.tf-reveal');
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var siblings = Array.prototype.slice.call(
            el.parentElement ? el.parentElement.querySelectorAll('.tf-reveal') : []
          );
          var index = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = Math.min(index * 90, 450) + 'ms';
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach(function (el) { observer.observe(el); });
  });
})();
