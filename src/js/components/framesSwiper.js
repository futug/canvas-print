import Swiper from "swiper";

Swiper.use();
const swiper = new Swiper(".frames__slider", {
  breakpoints: {
    320: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
      spaceBetween: 0,
    },

    375: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
      spaceBetween: 0,
    },
    525: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      grid: {
        rows: 2,
      },
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      grid: {
        rows: 2,
        spaceBetween: 20,
      },
      slidesPerView: 5,
    },
  },
});
