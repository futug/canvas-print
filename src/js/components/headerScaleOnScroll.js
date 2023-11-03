const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo");

if (header && logo) {
  document.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 50) {
        scaleOnScroll();
      } else {
        header.style.paddingTop = "20px";
        header.style.paddingBottom = "20px";
        logo.style.transform = "scale(1)";
      }
    }
  });
}

function scaleOnScroll() {
  header.style.paddingTop = "0px";
  header.style.paddingBottom = "0px";
  logo.style.transform = "scale(0.7)";
}
