import { body } from "./burger";

const calcShowBtn = document.querySelector(".calcform__form-button--white");
const calcShowBtnClose = document.querySelector(
  ".calcform__form-button--close"
);

if (calcShowBtn) {
  calcShowBtn.addEventListener("click", optionsUp);
}
if (calcShowBtnClose) {
  calcShowBtnClose.addEventListener("click", optionDown);
}

function optionsUp() {
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
