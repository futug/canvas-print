const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".mobile-menu__close");
export const body = document.querySelector("body");

burger.addEventListener("click", mobileMenuUp);
close.addEventListener("click", mobileMenuDown);

function mobileMenuUp() {
  mobileMenu.classList.add("mobile-menu--active");
  body.classList.add("lock");
}

function mobileMenuDown() {
  mobileMenu.classList.remove("mobile-menu--active");
  body.classList.remove("lock");
}

const testBtn = document.querySelector(".hero__button");
testBtn.addEventListener("click", () => {
  console.log("click");
});
