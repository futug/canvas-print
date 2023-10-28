const basePrices = document.querySelectorAll(".sizes__format-variant");
const multipliers = document.querySelectorAll(".sizes__variants-item");
export const display = document.querySelector(".sizes__format-final");
const multipliersSelect = document.querySelector(".custom-select");
let chosenMultiplier = 0;
let chosenPrice = 0;
export let total = chosenMultiplier * chosenPrice;
basePrices.forEach((item) => {
  item.addEventListener("click", () => {
    basePrices.forEach((item) =>
      item.classList.remove("sizes__format-variant--active")
    );
    item.classList.add("sizes__format-variant--active");
    chosenPrice = Number(item.dataset.base);
    total = Math.round(chosenPrice * chosenMultiplier);
    if (total > 0) {
      display.textContent = `${total} руб.`;
    } else {
      display.textContent = `${chosenPrice} руб.`;
    }
  });
});

multipliers.forEach((item) => {
  item.addEventListener("click", () => {
    multipliers.forEach((item) =>
      item.classList.remove("sizes__variants-item--active")
    );
    item.classList.add("sizes__variants-item--active");
    chosenMultiplier = Number(item.dataset.multiplier);
    total = Math.round(chosenPrice * chosenMultiplier);
    display.textContent = `${total} руб.`;
  });
});

multipliersSelect.addEventListener("change", () => {
  chosenMultiplier = Number(multipliersSelect.value);
  total = Math.round(chosenPrice * chosenMultiplier);
  display.textContent = `${total} руб.`;
});
