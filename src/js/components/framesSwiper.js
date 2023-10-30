import Swiper from "swiper";
import { Grid, Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".frames__slider", {
  modules: [Grid, Keyboard, FreeMode, A11y],
  grid: {
    rows: 2,
    fill: 'row',
    slidesPerView: 1,
  },
  breakpoints: {
    375: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
      spaceBetween: 20,
    },
    525: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    650: {
      grid: {
        rows: 2,
      },
      slidesPerView: 3,
      spaceBetween: 12,
    },
    768: {
      grid: {
        rows: 2,
      },
      slidesPerView: 4,
      spaceBetween: 12,
    },
    920: {
      grid: {
        rows: 2,
      },
      slidesPerView: 4.5,
      spaceBetween: 12,
    },
    1024: {
      grid: {
        rows: 2,
      },
      slidesPerView: 5,
      spaceBetween: 12,
    },
    1200: {
      grid: {
        rows: 2,
      },
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
