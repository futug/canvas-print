import { totalRow } from "./calcDemo";
import { updateSummry } from "./calcformShipment";

const sizes = document.querySelectorAll("input[name='size']");
const design = document.querySelector("select[name='design']");
const coverages = document.querySelectorAll("input[name='coverage']");
let basePrice = 0;
let square = 0;
let selectedDesign = 0;
let selectedCoverages = 0;
let coveragesPrice = square * selectedCoverages;

export let total = basePrice + selectedDesign + coveragesPrice;

coverages.forEach((item) => {
  item.addEventListener("change", (e) => {
    selectedCoverages = parseFloat(e.target.dataset.price);
    updateTotal();
    totalRow.textContent = ` ${total} руб.`;
    updateSummry();
  });
});

design.addEventListener("change", (e) => {
  selectedDesign = parseFloat(
    e.target.options[e.target.selectedIndex].dataset.price
  );
  updateTotal();
  totalRow.textContent = ` ${total} руб.`;
  updateSummry();
});

sizes.forEach((item) => {
  item.addEventListener("change", (e) => {
    const value = e.target.value;
    square = calculateSquare(value);
    basePrice = parseFloat(e.target.dataset.price);
    updateTotal();
    totalRow.textContent = ` ${total} руб.`;
    updateSummry();
  });
});

function calculateSquare(value) {
  const [firstNumber, secondNumber] = value.split("x");
  return (parseFloat(firstNumber) / 100) * (parseFloat(secondNumber) / 100);
}

function updateTotal() {
  total = basePrice + selectedDesign + square * selectedCoverages;
}
