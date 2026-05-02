export function initFAQ() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const btn = item.querySelector('.faq__question');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // закрыть все
      items.forEach(i => i.classList.remove('active'));

      // открыть текущий
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}