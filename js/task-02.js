const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addingItems = document.getElementById(`ingredients`);
const addListItems = (array, list) => {
  array.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
};
addListItems(ingredients, addingItems);
