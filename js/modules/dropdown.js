export function initDropdown() {
  const items = document.querySelectorAll('.nav__item--has-dropdown');
  console.log(items)

  items.forEach(item => {
    const btn = item.querySelector('.nav__toggle');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // закрыть другие
      items.forEach(i => {
        if (i !== item) i.classList.remove('nav__item--open');
      });

      item.classList.toggle('nav__item--open');
    });
  });

  // клик вне — закрыть всё
  document.addEventListener('click', () => {
    items.forEach(item => item.classList.remove('nav__item--open'));
  });
}