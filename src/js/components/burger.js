import { OuterClick } from "./outerClick";

export const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".mobile-menu__close");
export const body = document.querySelector("body");
export const mobileMenu = document.querySelector(".mobile-menu");

if (burger && closeIcon) {
  burger.addEventListener("click", mobileMenuUp);
  closeIcon.addEventListener("click", mobileMenuDown);

  function mobileMenuUp() {
    mobileMenu.classList.add("mobile-menu--active");
    body.classList.add("lock");
  }

  function mobileMenuDown() {
    mobileMenu.classList.remove("mobile-menu--active");
    body.classList.remove("lock");
  }
}

const newOuterClick = new OuterClick(
  mobileMenu,
  "mobile-menu--active",
  body,
  ".header"
);
