import { initDropdown } from './modules/dropdown.js';
import { initFAQ } from './modules/faq.js';
import { initForm } from './modules/form.js';
import { initMenu } from './modules/menu.js';
import { initSlider } from './modules/slider.js';

async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  const html = await res.text();

  el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async () => {

  // 1. Загружаем компоненты (синхронно по порядку)
  await loadComponent('header', 'components/header.html');
  await loadComponent('footer', 'components/footer.html');

  // 2. Инициализация UI (после полной вставки DOM)
  initDropdown(document);
  initSlider();
  initFAQ();
  initForm();
  initMenu();
});