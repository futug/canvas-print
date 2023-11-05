import { total } from "./calcLogic";

const summray = document.querySelector(".calcform__form-summary");
const shipment = document.querySelector(".calcform__form-select");
const privacy = document.querySelector(".calcform__form-privacy");
const sendBtn = document.querySelector(".calcform__form-sending");

if (shipment) {
  shipment.addEventListener("change", updateSummry);
}
export function updateSummry() {
  const selectedOption = shipment.options[shipment.selectedIndex];
  if (selectedOption.value === "Самовывоз") {
    summray.textContent = `Итоговая стоимость заказа: ${total} руб.`;
  } else {
    summray.textContent =
      "Стоимость и срок доставки уточняйте у менеджера по телефону.";
  }
}

if (privacy) {
  if (!privacy.checked) {
    sendBtn.setAttribute("disabled", true);
  }
}

if (privacy) {
  privacy.addEventListener("change", () => {
    if (!privacy.checked) {
      sendBtn.setAttribute("disabled", true);
    } else {
      sendBtn.removeAttribute("disabled");
    }
  });
}
