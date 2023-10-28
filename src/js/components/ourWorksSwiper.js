import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".our-works__slider", {
  slidesPerView: "4",
  spaceBetween: 20,
});
