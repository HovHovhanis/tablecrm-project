export function initForm() {
  const form = document.querySelector('.form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    const name = form.querySelector('[name="name"]');
    const phone = form.querySelector('[name="phone"]');
    const checkbox = form.querySelector('[name="policy"]');

    // очистка
    form.querySelectorAll('.form__error').forEach(el => el.textContent = '');
    form.querySelectorAll('input').forEach(el => el.classList.remove('error'));

    // NAME
    if (name.value.trim().length < 2) {
      showError(name, 'Введите имя');
      isValid = false;
    }

    // PHONE
    if (!/^\+?\d[\d\s\-\(\)]{7,}$/.test(phone.value)) {
      showError(phone, 'Введите корректный телефон');
      isValid = false;
    }

    // CHECKBOX
    if (!checkbox.checked) {
      alert('Подтвердите согласие');
      isValid = false;
    }

    if (isValid) {
      console.log('Отправка формы...');
      form.reset();
    }
  });

  function showError(input, message) {
    input.classList.add('error');
    input.nextElementSibling.textContent = message;
  }
}