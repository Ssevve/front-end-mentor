const form = document.getElementById('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');



window.addEventListener('load', () => {
  clearInputs();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let validInputs = [];

  checkInputs(validInputs);

  if (validInputs.length === 4) {
    clearInputs();
  }
});

function checkInputs(validInputs) {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check first name
  if (firstName === '') {
    showError(firstNameInput, 'First Name cannot be empty');
  } else {
    removeError(firstNameInput);
    validInputs.push('firstName');
  }

  // Check last name
  if (lastName === '') {
    showError(lastNameInput, 'Last Name cannot be empty');
  } else {
    removeError(lastNameInput);
    validInputs.push('lastName');

  }

  // Check email
  if (email === '') {
    showError(emailInput, 'Email cannot be empty');
  } else if (!isEmail(email)) {
    showError(emailInput, 'Looks like this is not an email');
  } else {
    removeError(emailInput);
    validInputs.push('email');

  }

  // Check password
  if (password === '') {
    showError(passwordInput, 'Password cannot be empty');
  } else if (password.length < 8) {
    showError(passwordInput, 'Minimum password length is 8');
    passwordInput.value = '';
  } else {
    removeError(passwordInput);
    validInputs.push('password');
  }
}


function showError(input, message) {
  const formField = input.parentElement;
  const messageField = formField.querySelector('.form__message');
  messageField.textContent = message;

  formField.className = 'form__field error';
}

function removeError(input) {
  const formField = input.parentElement;
  formField.className = 'form__field';
}

function clearInputs() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
