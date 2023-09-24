const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const textCreate = nameInput.value.trim();

  if (textCreate === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = textCreate;
  }
});