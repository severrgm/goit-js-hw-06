const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addingItems = document.getElementById(`ingredients`);

function addListItems(array) {
  const listArray = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });
  addingItems.prepend(...listArray);
}

addListItems(ingredients);
