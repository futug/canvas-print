import Swiper from "swiper";

Swiper.use();
const swiper = new Swiper(".ideas__slider", {
  slidesPerView: "4",
  grid: {
    rows: 2,
  },

  breakpoints: {
    320: {
      grid: {
        rows: 1,
      },
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    525: {
      grid: {
        rows: 1,
      },
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      grid: {
        rows: 1,
      },
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      grid: {
        rows: 2,
        spaceBetween: 20,
      },
      slidesPerView: 4,
    },
  },
});
