const inputForm = document.getElementById('validation-input')
const inputDataLength = Number(inputForm.dataset.length);

inputForm.addEventListener('blur', inputBlur);
inputForm.addEventListener('focus', InputFocus);

function inputBlur() {
  const inputDateLength = inputForm.value.trim().length;

  if (inputDateLength === inputDataLength) {
    inputForm.classList.add('valid');
  } else {
    inputForm.classList.add('invalid');
  }
};

function InputFocus() {
  inputForm.classList.remove('valid', 'invalid');
};