import Swiper from "swiper";
import { Keyboard, A11y, FreeMode } from "swiper/modules";

const coverSwiper = new Swiper(".coverages__slider", {
  modules: [Keyboard, FreeMode, A11y],
  slidesPerView: "1",
  spaceBetween: 20,

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
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
