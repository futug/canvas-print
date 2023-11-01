const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo");

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scaleOnScroll();
  } else {
    header.style.paddingTop = "20px";
    header.style.paddingBottom = "20px";
    logo.style.transform = "scale(1)";
  }
});
function scaleOnScroll() {
  header.style.paddingTop = "00px";
  header.style.paddingBottom = "00px";
  logo.style.transform = "scale(0.5)";
}
