import { totalRow } from "./calcDemo";
import { updateSummry } from "./calcformShipment";

const sizes = document.querySelectorAll("input[name='size']");
const design = document.querySelector("select[name='design']");
const coverages = document.querySelectorAll("input[name='coverage']");
const frames = document.querySelectorAll("input[name='frame']");

let basePrice = 0;
let square = 0;
let perimetr = 0;
let selectedDesign = 0;
let selectedCoverages = 0;
let selectedFrame = 0;
let coveragesPrice = square * selectedCoverages;
let framePrice = perimetr * selectedFrame;

export let total = basePrice + selectedDesign + coveragesPrice + framePrice;

frames.forEach((item) => {
  item.addEventListener("change", (e) => {
    selectedFrame =
      parseFloat(e.target.dataset.price) > 0
        ? parseFloat(e.target.dataset.price) + 350
        : 0;
    updateTotal();
    totalRow.textContent = ` ${total} руб.`;
    updateSummry();
  });
});

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
    perimetr = calculatePerimetr(value);
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
  total = Math.ceil(
    basePrice +
      selectedDesign +
      square * selectedCoverages +
      perimetr * selectedFrame
  );
}

function calculatePerimetr(value) {
  const [firstNumber, secondNumber] = value.split("x");
  return parseFloat(firstNumber) / 100 + (parseFloat(secondNumber) / 100) * 2;
}
