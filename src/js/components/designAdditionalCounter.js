import { updateTotal, total } from "./calcLogic";
import { totalRow } from "./calcDemo";

export const designAddTitle = document.querySelector(
  ".design-additional__title"
);
export const designAddBlock = document.querySelector(".design-additional");
const counterDisplay = designAddBlock.querySelector("span");
const counterButtons = designAddBlock.querySelectorAll("button");
export let counter = 0;

counterDisplay.textContent = counter;
counterButtons[0].addEventListener("click", decrement);
counterButtons[1].addEventListener("click", increment);

function increment() {
  counter++;
  counterDisplay.textContent = counter;
  updateTotal();
  totalRow.textContent = ` ${total} руб.`;
  decrementDisabled();
}

function decrement() {
  counter--;
  counterDisplay.textContent = counter;
  updateTotal();
  totalRow.textContent = ` ${total} руб.`;
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
