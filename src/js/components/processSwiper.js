import Swiper from "swiper";

const swiper = new Swiper(".process__slider", {
  slidesPerView: "1",
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    525: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});