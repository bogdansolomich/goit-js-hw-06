const createSize = document.querySelector('#font-size-control');
const updateStyle = document.querySelector('#text');

createSize.addEventListener('input', () => {
  const newSize = createSize.value;
  updateStyle.style.fontSize = `${newSize}px`;
});
