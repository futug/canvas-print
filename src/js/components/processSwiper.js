import Swiper from "swiper";
import { Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".process__slider", {
  modules: [Keyboard, FreeMode, A11y],
  slidesPerView: "1",
  spaceBetween: 0,
  breakpoints: {
    360: {
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
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
