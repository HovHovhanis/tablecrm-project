import { initMenu } from './modules/menu.js';
import { initFAQ } from './modules/faq.js';
import { initDropdown } from './modules/dropdown.js';

async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
  console.log('JS работает');
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', 'components/header.html');
  await loadComponent('footer', 'components/footer.html');

  initMenu();
  initFAQ();
  initDropdown();
});