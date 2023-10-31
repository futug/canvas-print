import Swiper from "swiper";
import { Grid, Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".ideas__slider", {
  modules: [Grid, Keyboard, FreeMode, A11y],
  grid: {
    rows: 1,
    fill: 'row',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    360: {
      grid: {
        rows: 1,
      },
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    525: {
      grid: {
        rows: 1,
      },
      spaceBetween: 0,
      slidesPerView: 2,
      spaceBetween: 20,
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
      },
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
