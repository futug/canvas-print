import { body } from "./burger";

const preloader = document.querySelector(".loader__wrapper");
const animatePart = document.querySelector(".lds-facebook");

if (preloader && animatePart) {
  document.addEventListener("DOMContentLoaded", () => {
    preloader.classList.add("loader__wrapper--halfhidden");
    setTimeout(() => {
      preloader.classList.add("loader__wrapper--hidden");
      animatePart.classList.add("lds-facebook--hidden");
      body.style.overflow = "auto";
    }, 200);
  });
}
