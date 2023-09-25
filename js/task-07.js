const createSize = document.getElementById('font-size-control');
const updateStyle = document.getElementById('text');
updateStyle.style.fontSize = `${createSize.value}px`;

createSize.addEventListener('input', updateSize)
function updateSize(event) {
  updateStyle.style.fontSize = `${event.currentTarget.value}px`;
  };

