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

export function initSearch() {
  const search = document.querySelector('.nav__search');
  const btn = document.querySelector('.nav__search-btn');
  const input = document.querySelector('.nav__search-input');

  if (!search || !btn || !input) return;

  // открыть/закрыть
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    search.classList.toggle('active');

    if (search.classList.contains('active')) {
      input.focus();
    }
  });

  // клик вне — закрыть
  document.addEventListener('click', (e) => {
    if (!search.contains(e.target)) {
      search.classList.remove('active');
    }
  });

  // ESC — закрыть
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      search.classList.remove('active');
    }
  });
}