import { body } from "./burger";

const calcShowBtn = document.querySelector(".calcform__form-button--white");
const calcShowBtnClose = document.querySelector(
  ".calcform__form-button--close"
);
const interactiveElements = document.querySelectorAll(
  "button",
  "input",
  "select",
  "textarea"
);

calcShowBtn.addEventListener("click", optionsUp);
calcShowBtnClose.addEventListener("click", optionDown);

function optionsUp(event) {
  document
    .querySelector(".calc__options-wrapper")
    .classList.add("calc__options-wrapper--isOpen");
  body.classList.add("lock");
}

function optionDown() {
  document
    .querySelector(".calc__options-wrapper")
    .classList.remove("calc__options-wrapper--isOpen");
  body.classList.remove("lock");
}
