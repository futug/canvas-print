import Swiper from "swiper";
import { Grid, Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".frames__slider", {
  modules: [Grid, Keyboard, FreeMode, A11y],
  grid: {
    rows: 1,
    fill: 'row',
  },
  breakpoints: {
    320: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
    },
    525: {
      grid: {
        rows: 2,
      },
      slidesPerView: 3.5,
    },
    650: {
      grid: {
        rows: 2,
      },
      slidesPerView: 4,
    },
    768: {
      grid: {
        rows: 2,
      },
      slidesPerView: 4.5,
    },
    1024: {
      grid: {
        rows: 2,
      },
      slidesPerView: 5,
    },
  },
  spaceBetween: 20,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
