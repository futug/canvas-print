import Swiper from "swiper";
import { Navigation, Pagination, Keyboard, A11y, FreeMode } from "swiper/modules";

const swiper = new Swiper(".our-works__slider", {
  modules: [Navigation, Pagination, Keyboard, A11y, FreeMode],
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
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.our-works__next-btn',
    prevEl: '.our-works__prev-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
  grabCursor: true,
  freeMode: true,
});
