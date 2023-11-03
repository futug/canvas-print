const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".mobile-menu__close");
export const body = document.querySelector("body");

if (burger && closeIcon) {
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.querySelector("body");

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
