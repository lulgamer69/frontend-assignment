const toggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.menu-close');
const menu = document.querySelector('.mobile-menu');
const scrim = document.querySelector('.scrim');

if (toggle && closeButton && menu && scrim) {
  const focusableSelector = 'a[href], button:not([disabled])';
  const menuLinks = menu.querySelectorAll('a');

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open;

    if (open) {
      closeButton.focus({ preventScroll: true });
    } else if (menu.contains(document.activeElement)) {
      toggle.focus({ preventScroll: true });
    }
  }

  toggle.addEventListener('click', () => setMenu(true));
  closeButton.addEventListener('click', () => setMenu(false));
  scrim.addEventListener('click', () => setMenu(false));
  menuLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (event) => {
    if (!document.body.classList.contains('menu-open')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setMenu(false);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = menu.querySelectorAll(focusableSelector);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
