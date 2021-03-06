const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const website = document.getElementById('website');
const foundUs = document.getElementById('found');
const message = document.getElementById('message');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//SHOW SUCCESS OUTLINE

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// EVENT LISTENERS

form.addEventListener('submit', function (e) {
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }

  if (foundUs.value === '') {
    showError(foundUs, 'Email is required');
  } else {
    showSuccess(foundUs);
  }

  if (website.value === '') {
    showSuccess(website, 'You need a websiote here');
  } else {
  }

  if (message.value === '') {
    showError(message, 'A message is required');
  } else {
    showSuccess(message);
  }
});

function formValidation() {
  alert('thanks for the submission');
}
