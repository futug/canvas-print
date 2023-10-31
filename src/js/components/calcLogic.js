import { totalRow } from "./calcDemo";

const sizes = document.querySelectorAll("input[name='size']");
const design = document.querySelector("select[name='design']");
const coverages = document.querySelectorAll("input[name='coverage']");
let basePrice = 0;
let square = 0;
let selectedDesign = 0;
let selectedCoverages = 0;

export let total = basePrice + selectedDesign + square * selectedCoverages;

coverages.forEach((item) => {
  item.addEventListener("change", (e) => {
    selectedCoverages = parseFloat(e.target.dataset.price);
    updateTotal();
    totalRow.textContent = ` ${total} руб.`;
  });
});

design.addEventListener("change", (e) => {
  selectedDesign = parseFloat(
    e.target.options[e.target.selectedIndex].dataset.price
  );
  updateTotal();
  totalRow.textContent = ` ${total} руб.`;
});

sizes.forEach((item) => {
  item.addEventListener("change", (e) => {
    const value = e.target.value;
    square = calculateSquare(value);
    basePrice = parseFloat(e.target.dataset.price);
    updateTotal();
    totalRow.textContent = ` ${total} руб.`;
  });
});

function calculateSquare(value) {
  const [firstNumber, secondNumber] = value.split("x");
  return (parseFloat(firstNumber) / 100) * (parseFloat(secondNumber) / 100);
}

function updateTotal() {
  total = basePrice + selectedDesign + square * selectedCoverages;
  console.log(`Total: ${total} руб.`);
}
