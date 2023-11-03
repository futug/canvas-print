import { updateTotal, total } from "./calcLogic";
import { totalRow } from "./calcDemo";

export const designAddTitle = document.querySelector(
  ".design-additional__title"
);
export const designAddBlock = document.querySelector(".design-additional");
const counterDisplay = designAddBlock?.querySelector("span");
const counterButtons = designAddBlock?.querySelectorAll("button");
export let counter = 0;
export let finalPrice = 0;

if (counterDisplay) {
  counterDisplay.textContent = counter;
}
if (counterButtons) {
  counterButtons[0].addEventListener("click", decrement);
  counterButtons[1].addEventListener("click", increment);
}

function increment() {
  counter++;
  counterDisplay.textContent = counter;
  updateTotal();
  totalRow.textContent = ` ${total} руб.`;
  decrementDisabled();
  finalPrice = total;
}

function decrement() {
  counter--;
  counterDisplay.textContent = counter;
  updateTotal();

  totalRow.textContent = ` ${total} руб.`;
  finalPrice = total;
  decrementDisabled();
}

function decrementDisabled() {
  if (counter === 0) {
    if (counterButtons) {
      counterButtons[0].disabled = true;
    }
  } else {
    if (counterButtons) {
      counterButtons[0].disabled = false;
    }
  }
}

decrementDisabled();
