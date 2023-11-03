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
import { counter } from "./designAdditionalCounter";

let sendingObj = {};
// ПЕРВЫЙ КАЛЬКУЛТОР

const sendButtonFirst = document.querySelector(".pop-up__form-button");
const nameFirst = document.querySelector(".pop-up__form-name");
const phoneFirst = document.querySelector(".pop-up__form-tel");

if (sendButtonFirst && nameFirst && phoneFirst) {
  sendButtonFirst.addEventListener("click", (e) => {
    sendingObj = {
      size: selectedCalcSizeInSelect
        ? selectedCalcSizeInSelect.toString()
        : selectedCalcSize.toString(),
      orientation: selectedFormat.toString(),
      total: displayedPrice.toString(),
      name: nameFirst.value.toString(),
      phone: phoneFirst.value.toString(),
    };

    const newTransfer = new FormTransfer(".test-form-small", sendingObj);
  });
}

// ПЕРВЫЙ КАЛЬКУЛТОР

// ВТОРОЙ КАЛЬКУЛЯТОР

const sendButton = document.querySelector(".calcform__form-sending");
const phone = document.querySelector(".calcform__form-phone");
const email = document.querySelector(".calcform__form-email");
const name = document.querySelector(".calcform__form-name");
const deliveryWay = document.querySelector(".calcform__form-delivery");

let selectedCoverage = "";

if (coverages) {
  coverages.forEach((item) => {
    item.addEventListener("change", (e) => {
      selectedCoverage = e.target.value;
    });
  });
}
if (sendButton && phone && email && name && deliveryWay) {
  sendButton.addEventListener("click", () => {
    sendingObj = {
      orientation: selectedOrientation.toString(),
      size: selectedSize.toString(),
      stretch: selectedStretch.toString(),
      suspend: selectedSuspend.toString(),
      design: design.value.toString(),
      coverage: selectedCoverage.toString(),
      frame: selectedFrameArt.toString(),
      additional: counter.toString(),
      total: total.toString(),
      wrap: selectedWrap.toString(),
      name: name.value,
      phone: phone.value,
      email: email.value,
      deliveryWay: deliveryWay.value.toString(),
    };

    const newTransfer = new FormTransfer(".test-form", sendingObj);
  });
}

// ВТОРОЙ КАЛЬКУЛЯТОР
