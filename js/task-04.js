
const decrementElement = document.querySelector('button[data-action="decrement"]');
const incrementElement = document.querySelector('button[data-action="increment"]');
const updateCounter = document.querySelector('#value');

let counterValue = 0;

decrementElement.addEventListener('click', () => {
  counterValue -= 1; 
  updateCounter.textContent = counterValue; 
});


incrementElement.addEventListener('click', () => {
  counterValue += 1;
  updateCounter.textContent = counterValue; 
});