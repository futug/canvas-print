import { display, total } from "./sizesCalc";
import { body } from "./burger";

const popUpCaller = document.querySelectorAll(".pop-up__button");
const popUp = document.querySelector(".pop-up");
const popUpForm = document.querySelector(".pop-up__form");
const popUpCloseIcon = document.querySelector(".pop-up__close-icon");
const popUpSummaryBlock = document.querySelector(".pop-up__form-summary");

display.addEventListener("click", popUpOpen);
popUpCloseIcon.addEventListener("click", popUpClose);

popUpCaller.forEach((item) => {
  item.addEventListener("click", () => {
    popUpOpen();

    if (total <= 0) {
      popUpSummaryBlock.style.display = "none";
    } else {
      popUpSummaryBlock.style.display = "block";
    }
  });
});

function popUpOpen() {
  popUp.classList.add("pop-up--active");
  popUpForm.classList.add("pop-up__form--active");
  popUpSummary();
  body.classList.add("lock");
}

function popUpClose() {
  popUp.classList.remove("pop-up--active");
  popUpForm.classList.remove("pop-up__form--active");
  popUpForm.reset();
  body.classList.remove("lock");
}

// document.addEventListener("click", (e) => {
//   let isPopUpActive = popUp.classList.contains("pop-up--active");
//   let isClickInsideForm =
//     popUpForm.contains(e.target) || e.target === popUpForm;
//   let isClickInsidePopUp = e.target === popUp;
//   let isClickInsideClose = e.target === popUpCloseIcon;
//   if (
//     isPopUpActive &&
//     !isClickInsideForm &&
//     !isClickInsidePopUp &&
//     !isClickInsideClose
//   ) {
//     console.log(popUp);
//     popUpClose();
//   }
// });

function popUpSummary() {
  popUpSummaryBlock.querySelector("span").textContent = `${total} руб.`;
}
