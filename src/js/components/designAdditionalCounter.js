const designAddBlock = document.querySelector(".design-additional");
const counterDisplay = designAddBlock.querySelector("span");
const counterButtons = designAddBlock.querySelectorAll("button");
let counter = 0;

counterDisplay.textContent = counter;
counterButtons[0].addEventListener("click", decrement);
counterButtons[1].addEventListener("click", increment);

function increment() {
  counter++;
  counterDisplay.textContent = counter;
  decrementDisabled();
}

function decrement() {
  counter--;
  counterDisplay.textContent = counter;
  decrementDisabled();
}

function decrementDisabled() {
  if (counter === 0) {
    counterButtons[0].disabled = true;
  } else {
    counterButtons[0].disabled = false;
  }
}

decrementDisabled();
