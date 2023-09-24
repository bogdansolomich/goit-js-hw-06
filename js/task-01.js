const listCategories = document.querySelector("#categories");
const listItems = listCategories.querySelectorAll(".item");

// Перегляд кількості категорій
console.log(`Number of categories: ${listItems.length}`);

// Виводимо дані по кількості елементів і підстановка тексту заголовку
listItems.forEach((item) => {
    const listName = item.querySelector("h2").textContent;
    const numberElements = item.querySelectorAll("li").length;

console.log(`Category: ${listName}`);
console.log(`Elements: ${numberElements}`);
});