export function initFAQ() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
      item.classList.toggle('faq__item--active');
    });
  });
}