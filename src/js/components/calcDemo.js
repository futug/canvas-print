import { selectedFiles, fileInput } from "./calcFileLabel";
const inputs = document.querySelectorAll("input[name]");
const optionRows = document.querySelectorAll(".calc__option-row");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    const name = input.getAttribute("name");
    const matchingOptionRow = document.querySelector(
      `.calc__option-row[data-name="${name}"]`
    );
    if (matchingOptionRow) {
      if (name === "file") {
        matchingOptionRow.querySelector(".calc__option-descr").textContent =
          selectedFiles;
      } else {
        matchingOptionRow.querySelector(".calc__option-descr").textContent =
          input.value;
      }
    }
  });
});

const widthInput = document.querySelector(".width");
const heightInput = document.querySelector(".height");
const inputSize = document.querySelectorAll("input[name='size']");
let customSize = "";

widthInput.addEventListener("input", updateCustomSize);
heightInput.addEventListener("input", updateCustomSize);
inputSize.forEach((input) => {
  input.addEventListener("click", () => {
    widthInput.value = "";
    heightInput.value = "";
  });
});

function updateCustomSize() {
  customSize = `${widthInput.value} x ${heightInput.value}`;
  optionRows.forEach((row) => {
    const name = row.getAttribute("data-name");
    if (name === "size") {
      row.querySelector(".calc__option-descr").textContent = customSize;
    }
  });
  inputSize.forEach((input) => {
    input.checked = false;
  });
}
