export function initMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__list');

  if (!burger || !nav) return;

  // открыть / закрыть
  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // важно!
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  //  закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    const isClickInside = nav.contains(e.target) || burger.contains(e.target);

    if (!isClickInside) {
      burger.classList.remove('active');
      nav.classList.remove('active');
    }
  });

  // закрытие при клике по ссылке
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      burger.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}