const inputRange = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputRange.addEventListener("input", fontSizeControl);

function fontSizeControl(e) {
  text.style.fontSize = e.currentTarget.value + "px";
}
