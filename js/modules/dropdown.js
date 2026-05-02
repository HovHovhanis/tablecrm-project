export function initDropdown(root = document) {
  const items = root.querySelectorAll('.nav__item--has-dropdown');

  items.forEach(item => {
    const btn = item.querySelector('.nav__toggle');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('nav__item--open');

      // закрыть все
      items.forEach(i => i.classList.remove('nav__item--open'));

      // открыть текущий
      if (!isOpen) {
        item.classList.add('nav__item--open');
      }
    });
  });

  // закрытие по клику вне
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item--has-dropdown')) {
      items.forEach(i => i.classList.remove('nav__item--open'));
    }
  });
}