
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
// Знаходження класу елементу
const ingredientsList = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  // Створення окремого елементу
  const li = document.createElement("li");
  // додавання назви інгредієнта 
  li.textContent = ingredient;
  // додавання класу
  li.classList.add("item");

   // підключення всіх li
  ingredientsList.appendChild(li);
}

