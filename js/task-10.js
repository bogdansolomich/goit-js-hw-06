const inputBlock = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesBlock = document.querySelector('#boxes');

createButton.addEventListener('click', newBoxes);
destroyButton.addEventListener('click', cleaningBoxes);

function newBoxes() {
  const amount = inputBlock.valueAsNumber;

  cleaningBoxes();

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = newHexColor();
    boxes.push(box);
  }

  boxesBlock.append(...boxes);
}

function cleaningBoxes() {
  boxesBlock.innerHTML = '';
}

function newHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
