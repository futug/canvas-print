import Swiper from "swiper";
import { Navigation, Pagination, Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".sizes__swiper", {
  modules: [Navigation, Pagination, Keyboard, A11y, FreeMode],
  slidesPerView: "1",
  spaceBetween: 46,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.sizes__next-btn',
    prevEl: '.sizes__prev-btn',
  },
  breakpoints: {
    900: {
      spaceBetween: 46,
    },
    1024: {
      spaceBetween: 62,
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
