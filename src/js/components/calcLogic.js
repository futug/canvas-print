import { totalRow } from "./calcDemo";
import { updateSummry } from "./calcformShipment";
import {
  designAddBlock,
  designAddTitle,
  counter,
} from "./designAdditionalCounter";

const orientations = document.querySelectorAll("input[name='orientation']");
export const sizes = document.querySelectorAll("input[name='size']");
export const design = document.querySelector("select[name='design']");
export const coverages = document.querySelectorAll("input[name='coverage']");
export const frames = document.querySelectorAll("input[name='frame']");
const stretch = document.querySelectorAll("input[name='stretch']");
const suspend = document.querySelectorAll("input[name='suspend']");
const wrap = document.querySelectorAll('input[name="wrap"]');
const image = document.querySelector("input[type='file']");

let basePrice = 0;
let square = 0;
let perimetr = 0;
export let selectedDesign = 0;
export let selectedSize = 0;
export let selectedDesignAdd = 0;
export let selectedCoverages = 0;
export let selectedFrame = 0;
export let selectedFrameArt = "";
export let selectedOrientation = "";
export let selectedStretch = "";
export let selectedSuspend = "";
export let selectedWrap = "";
export let selectedFile = "";

let coveragesPrice = square * selectedCoverages;
let framePrice = perimetr * selectedFrame;

export let total =
  basePrice +
  selectedDesign +
  coveragesPrice +
  framePrice +
  counter * selectedDesignAdd;

if (image) {
  image.addEventListener("change", (e) => {
    selectedFile = e.target.files[0];
    const fakeForm = document.querySelector(".test-form__file");
    if (e.target.files.length > 0) {
      fakeForm.files = e.target.files;
    }
  });
}

if (wrap) {
  wrap.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedWrap = e.target.value;
    });
  });
}

if (suspend) {
  suspend.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedSuspend = e.target.value;
    });
  });
}

if (stretch) {
  stretch.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedStretch = e.target.value;
    });
  });
}

if (orientations) {
  orientations.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedOrientation = e.target.value;
    });
  });
}

if (frames) {
  frames.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedFrameArt = e.target.value;
      selectedFrame =
        parseFloat(e.target.dataset.price) > 0
          ? parseFloat(e.target.dataset.price) + 350
          : 0;
      updateTotal();
      totalRow.textContent = ` ${total} руб.`;
      updateSummry();
      console.log(selectedFrameArt);
    });
  });
}

if (coverages) {
  coverages.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedCoverages = parseFloat(e.target.dataset.price);
      updateTotal();
      totalRow.textContent = ` ${total} руб.`;
      updateSummry();
    });
  });
}

if (design) {
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
}

if (sizes) {
  sizes.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedSize = e.target.value;
      square = calculateSquare(selectedSize);
      perimetr = calculatePerimetr(selectedSize);
      basePrice = parseFloat(e.target.dataset.price);
      updateTotal();
      totalRow.textContent = ` ${total} руб.`;
      updateSummry();
    });
  });
}

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
