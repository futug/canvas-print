import { totalRow } from "./calcDemo";
import { updateSummry } from "./calcformShipment";
import {
  designAddBlock,
  designAddTitle,
  counter,
} from "./designAdditionalCounter";

const sizes = document.querySelectorAll("input[name='size']");
const design = document.querySelector("select[name='design']");
const coverages = document.querySelectorAll("input[name='coverage']");
const frames = document.querySelectorAll("input[name='frame']");

let basePrice = 0;
let square = 0;
let perimetr = 0;
let selectedDesign = 0;
export let selectedDesignAdd = 0;
let selectedCoverages = 0;
let selectedFrame = 0;
let coveragesPrice = square * selectedCoverages;
let framePrice = perimetr * selectedFrame;

export let total =
  basePrice +
  selectedDesign +
  coveragesPrice +
  framePrice +
  counter * selectedDesignAdd;

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
  selectedDesignAdd = parseFloat(
    e.target.options[e.target.selectedIndex].dataset.additional
  );

  if (selectedDesignAdd > 0) {
    designAddBlock.classList.add("design-additional--active");
    designAddTitle.classList.add("design-additional__title--active");
  } else {
    designAddBlock.classList.remove("design-additional--active");
    designAddTitle.classList.remove("design-additional__title--active");
  }
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

export function updateTotal() {
  total = Math.ceil(
    basePrice +
      selectedDesign +
      square * selectedCoverages +
      perimetr * selectedFrame +
      counter * selectedDesignAdd
  );
}

function calculatePerimetr(value) {
  const [firstNumber, secondNumber] = value.split("x");
  return parseFloat(firstNumber) / 100 + (parseFloat(secondNumber) / 100) * 2;
}
