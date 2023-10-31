import { total } from "./calcLogic";

const summray = document.querySelector(".calcform__form-summary");
const shipment = document.querySelector(".calcform__form-select");
const form = document.querySelector(".calcform__form");
const privacy = document.querySelector(".calcform__form-privacy");

shipment.addEventListener("change", updateSummry);
export function updateSummry() {
  const selectedOption = shipment.options[shipment.selectedIndex];
  if (selectedOption.value === "Самовывоз") {
    summray.textContent = `Итоговая стоимость заказа: ${total} руб.`;
  } else {
    summray.textContent =
      "Стоимость и срок доставки уточняйте у менеджера по телефону.";
  }
}

if (!privacy.checked) {
  form.setAttribute("invalid", true);
}

privacy.addEventListener("change", () => {
  if (!privacy.checked) {
    form.setAttribute("invalid", true);
  } else {
    form.removeAttribute("invalid");
  }
});
