let inputText = document.querySelector(".input");
let convertBtn = document.querySelector(".convert");
let answer = document.querySelector(".answer");
let newBtn = document.querySelector(".new");

convertBtn.addEventListener("click", function (event) {
  getValue(event);
});

function getValue(event) {
  let inputValue = parseFloat(event.target.previousElementSibling.value);
  let celcius = inputValue + 20;
  answer.textContent = celcius + "°C";
  inputText.value = ""; // Clearing the input field after conversion
}

newBtn.addEventListener("click", function (event) {
  event.target.nextElementSibling.value = ""; // Clearing the input field
  answer.textContent = ""; // Clearing the answer field
});

