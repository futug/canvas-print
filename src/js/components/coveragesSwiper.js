import Swiper from "swiper";
Swiper.use();
const swiper = new Swiper(".coverages__slider", {
  slidesPerView: "4",
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    525: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
