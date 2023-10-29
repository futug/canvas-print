import { body } from "./burger";

const fakeMenu = document.querySelector(".calc__select");
const fakeSelect = document.querySelector(".calc__fake-select");
const fakeSelectOption = document.querySelectorAll("input[name='size']");
let chosenValue = "";
fakeSelect.addEventListener("click", () => {
  fakeMenu.classList.add("calc__select--isOpen");
  body.classList.add("lock");
});
fakeSelectOption.forEach((option) => {
  option.addEventListener("click", (e) => {
    chosenValue = e.target.value;
    fakeSelect.querySelector("p").textContent = chosenValue;
    fakeMenu.classList.remove("calc__select--isOpen");
    body.classList.remove("lock");
  });
});
