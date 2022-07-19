const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const greeting = (e) => {
  output.textContent = input.value === "" ? "Anonymous" : e.currentTarget.value;
};

input.addEventListener("input", greeting);
