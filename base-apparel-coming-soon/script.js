const email = document.querySelector('.form__input');

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  if(!email.validity.valid) {
    email.focus();
  } else {
    email.value = "";
  }
});