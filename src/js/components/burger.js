import { ModalsHandler } from "./modalsHandler";

export const body = document.querySelector("body");

const newModal = new ModalsHandler(
  "burger",
  "mobile-menu__close",
  "mobile-menu",
  "mobile-menu__wrapper"
);
newModal.initialize();
