import { FormTransfer } from "./valuesTransfer";
import {
  displayedPrice,
  selectedFormat,
  selectedCalcSizeInSelect,
  selectedCalcSize,
} from "./sizesCalc";
import {
  total,
  design,
  coverages,
  selectedFrameArt,
  selectedSize,
  selectedOrientation,
  selectedStretch,
  selectedSuspend,
  selectedWrap,
} from "./calcLogic";

import { popUpClose } from "./sizesPopup";
let sendingObj = [];
// ПЕРВЫЙ КАЛЬКУЛТОР

const sendButtonFirst = document.querySelector(".pop-up__form-button");
const nameFirst = document.querySelector(".name");
const phoneFirst = document.querySelector(".phone");

sendButtonFirst.addEventListener("click", (e) => {
  e.preventDefault();
  sendingObj = [];
  sendingObj.push({
    size: selectedCalcSizeInSelect
      ? selectedCalcSizeInSelect.toString()
      : selectedCalcSize.toString(),
    orientation: selectedFormat.toString(),
    total: displayedPrice.toString(),
    name: nameFirst.value.toString(),
    phone: phoneFirst.value.toString(),
  });
  const newTransfer = new FormTransfer(".test-form-small", sendingObj);
  popUpClose();
});

// ПЕРВЫЙ КАЛЬКУЛТОР

// ВТОРОЙ КАЛЬКУЛЯТОР
import { counter } from "./designAdditionalCounter";
const sendButton = document.querySelector(".calcform__form-sending");
const phone = document.querySelector(".calcform__form-phone");
const email = document.querySelector(".calcform__form-email");
const name = document.querySelector(".calcform__form-name");
const deliveryWay = document.querySelector(".calcform__form-delivery");

let selectedCoverage = "";

coverages.forEach((item) => {
  item.addEventListener("change", (e) => {
    selectedCoverage = e.target.value;
  });
});
sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendingObj = [];
  sendingObj.push({
    orientation: selectedOrientation.toString(),
    size: selectedSize.toString(),
    stretch: selectedStretch.toString(),
    suspend: selectedSuspend.toString(),
    design: design.value.toString(),
    coverages: selectedCoverage.toString(),
    frame: selectedFrameArt.toString(),
    designAdd: counter.toString(),
    total: total.toString(),
    wrap: selectedWrap.toString(),
    name: name.value,
    phone: phone.value,
    email: email.value,
    deliveryWay: deliveryWay.value.toString(),
  });
  console.log(sendingObj);
  const newTransfer = new FormTransfer(".test-form", sendingObj);
});

// ВТОРОЙ КАЛЬКУЛЯТОР
