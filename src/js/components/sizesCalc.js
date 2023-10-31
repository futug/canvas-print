const formats = document.querySelectorAll(".sizes__format-variant");
const sizes = document.querySelectorAll(".sizes__variants-item");
const sizesInputs = document.querySelectorAll("input[name='size-first']");
const formatsInputs = document.querySelectorAll("input[name='format']");
const sizesSelect = document.querySelectorAll(".sizes__select > option");
const select = document.querySelector(".sizes__select");
const display = document.querySelector(".sizes__format-final");
let selectedOption = 0;
export let displayedPrice = 0;
sizes.forEach((item) => {
  item.addEventListener("click", activeClass);
});

sizesInputs.forEach((item) => {
  item.addEventListener("click", displayPrice);
});
formats.forEach((item) => {
  item.addEventListener("click", activeClass);
});

select.addEventListener("change", (event) => {
  selectedOption = parseFloat(
    event.target.options[event.target.selectedIndex].dataset.price
  );
  displayedPrice = selectedOption;
  display.textContent = `${displayedPrice} руб.`;
});

formatsInputs.forEach((item) => {
  item.addEventListener("click", disableSize);
  item.addEventListener("click", disableSizeSelectOption);
});

function activeClass(event) {
  if (event.target.classList.contains("sizes__format-variant")) {
    formats.forEach((item) => {
      item.classList.remove("sizes__format-variant--active");
    });
    event.target.classList.add("sizes__format-variant--active");
  } else if (event.target.classList.contains("sizes__variants-item")) {
    sizes.forEach((item) => {
      item.classList.remove("sizes__variants-item--active");
    });
    event.target.classList.add("sizes__variants-item--active");
  }
}

function disableSize(event) {
  let formatValue = parseFloat(event.target.value);

  const equalOne = [];
  const lessThanOne = [];
  const greaterThanOne = [];

  sizesInputs.forEach((item) => {
    const value = item.value;
    const [firstNumber, secondNumber] = value.split("x");
    const divisionResult = parseFloat(firstNumber) / parseFloat(secondNumber);
    if (divisionResult === 1) {
      equalOne.push(item);
    } else if (divisionResult < 1) {
      lessThanOne.push(item);
    } else {
      greaterThanOne.push(item);
    }
  });

  sizes.forEach((item) => {
    item.classList.remove("sizes__variants-item--disabled");
  });

  if (formatValue === 1) {
    equalOne.forEach((item) => {
      item.disabled = false;
    });
    lessThanOne.forEach((item) => {
      item.disabled = true;
      item.parentElement.classList.add("sizes__variants-item--disabled");
    });
    greaterThanOne.forEach((item) => {
      item.disabled = true;
      item.parentElement.classList.add("sizes__variants-item--disabled");
    });
  } else if (formatValue < 1) {
    equalOne.forEach((item) => {
      item.disabled = true;
      item.parentElement.classList.add("sizes__variants-item--disabled");
    });
    lessThanOne.forEach((item) => {
      item.disabled = false;
    });
    greaterThanOne.forEach((item) => {
      item.disabled = true;
      item.parentElement.classList.add("sizes__variants-item--disabled");
    });
  } else {
    equalOne.forEach((item) => {
      item.disabled = true;
      item.parentElement.classList.add("sizes__variants-item--disabled");
    });
    lessThanOne.forEach((item) => {
      item.disabled = true;
      item.parentElement.classList.add("sizes__variants-item--disabled");
    });
    greaterThanOne.forEach((item) => {
      item.disabled = false;
    });
  }
}

function disableSizeSelectOption(event) {
  let formatValue = parseFloat(event.target.value);
  const equalOne = [];
  const lessThanOne = [];
  const greaterThanOne = [];

  sizesSelect.forEach((item) => {
    const value = item.value;
    const [firstNumber, secondNumber] = value.split("x");
    const divisionResult = parseFloat(firstNumber) / parseFloat(secondNumber);
    if (divisionResult === 1) {
      equalOne.push(item);
    } else if (divisionResult < 1) {
      lessThanOne.push(item);
    } else {
      greaterThanOne.push(item);
    }
  });

  if (formatValue === 1) {
    equalOne.forEach((item) => {
      item.disabled = false;
    });
    lessThanOne.forEach((item) => {
      item.disabled = true;
    });
    greaterThanOne.forEach((item) => {
      item.disabled = true;
    });
  } else if (formatValue < 1) {
    equalOne.forEach((item) => {
      item.disabled = true;
    });
    lessThanOne.forEach((item) => {
      item.disabled = false;
    });
    greaterThanOne.forEach((item) => {
      item.disabled = true;
    });
  } else if (formatValue > 1) {
    equalOne.forEach((item) => {
      item.disabled = true;
    });
    lessThanOne.forEach((item) => {
      item.disabled = true;
    });
    greaterThanOne.forEach((item) => {
      item.disabled = false;
    });
  }
}

function displayPrice(event) {
  displayedPrice = parseFloat(event.target.dataset.price);
  display.textContent = `${displayedPrice} руб.`;
}
