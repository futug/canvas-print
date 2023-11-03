import { displayedPrice } from "./sizesCalc";
import { body } from "./burger";

const popUpCaller = document.querySelectorAll(".pop-up__button");
const popUp = document.querySelector(".pop-up");
const popUpForm = document.querySelector(".pop-up__form");
const popUpCloseIcon = document.querySelector(".pop-up__close-icon");
const popUpSummaryBlock = document.querySelector(".pop-up__form-summary");

if (popUpCloseIcon) {
  popUpCloseIcon.addEventListener("click", popUpClose);
}

if (popUpCaller) {
  popUpCaller.forEach((item) => {
    item.addEventListener("click", () => {
      popUpOpen();

      if (displayedPrice <= 0) {
        popUpSummaryBlock.style.display = "none";
      } else {
        popUpSummaryBlock.style.display = "block";
      }
    });
  });
}
function popUpOpen() {
  popUp.classList.add("pop-up--active");
  popUpForm.classList.add("pop-up__form--active");
  popUpSummary();
  body.classList.add("lock");
}

export function popUpClose() {
  popUp.classList.remove("pop-up--active");
  popUpForm.classList.remove("pop-up__form--active");
  popUpForm.reset();
  body.classList.remove("lock");
}

function popUpSummary() {
  popUpSummaryBlock.querySelector(
    "span"
  ).textContent = `${displayedPrice} руб.`;
}
