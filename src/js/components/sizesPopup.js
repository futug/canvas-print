import { displayedPrice } from "./sizesCalc";
import { ModalsHandler } from "./modalsHandler";

const popUpCaller = document.querySelectorAll(".pop-up__button");
const popUpSummaryBlock = document.querySelector(".pop-up__form-summary");

const newPopUp = new ModalsHandler(
  "pop-up__button",
  "pop-up__close-icon",
  "pop-up",
  "pop-up__form"
);
newPopUp.initialize();

if (popUpCaller) {
  popUpCaller.forEach((item) => {
    item.addEventListener("click", () => {
      popUpSummary();
      if (displayedPrice <= 0) {
        popUpSummaryBlock.style.display = "none";
      } else {
        popUpSummaryBlock.style.display = "block";
      }
    });
  });
}

function popUpSummary() {
  popUpSummaryBlock.querySelector(
    "span"
  ).textContent = `${displayedPrice} руб.`;
}
