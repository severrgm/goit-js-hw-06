const getElementItem = document.querySelectorAll(".item");
console.log(`Number of categiries: ${getElementItem.length}`);
getElementItem.forEach((element) => {
  const getElementTitle = element.querySelector("h2");
  const getElementLi = element.querySelectorAll("li");
  console.log(`Category: ${getElementTitle.textContent}`);
  console.log(`Elements: ${getElementLi.length}`);
});
