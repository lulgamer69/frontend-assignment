(() => {
  const targets = document.querySelectorAll(
    '.why-heading, .why-intro, .why-mobile-arrow, .why-art, .feature-card'
  );

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  targets.forEach((element) => element.classList.add('motion-reveal'));
  document.documentElement.classList.add('motion-ready');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -32px 0px'
  });

  targets.forEach((element) => observer.observe(element));
})();
