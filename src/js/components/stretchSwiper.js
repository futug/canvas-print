import Swiper from "swiper";
import { Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".stretch__slider", {
  modules: [Keyboard, FreeMode, A11y],
  slidesPerView: "1",
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    525: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
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
