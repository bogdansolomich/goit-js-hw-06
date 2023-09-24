function backgroundColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

buttonChangeColor.addEventListener('click', function () {
  const bgColor = backgroundColor();

  document.body.style.backgroundColor = bgColor;

  colorText.textContent = bgColor;
});