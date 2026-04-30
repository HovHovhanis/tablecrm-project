export function initMenu() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.burger')) {
      document.querySelector('.nav').classList.toggle('nav--open');
    }
  });
}