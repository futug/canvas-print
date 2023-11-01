function scaleTrigger() {
  cursorTrigger.style.transform = "scale(2)";
}

const elementsToScale = document.querySelectorAll(
  "a, button, img, span, input, label, select, textarea"
);

elementsToScale.forEach((element) => {
  element.addEventListener("mouseover", scaleTrigger);
  element.addEventListener("mouseout", () => {
    cursorTrigger.style.transform = "scale(1)";
  });
});

const cursorTrigger = document.querySelector(".cursor-trigger");

function colorRandom() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cursorTrigger.style.backgroundColor = `#${randomColor}`;
  setTimeout(colorRandom, 1000);
}

colorRandom();

function updateCursorPosition() {
  cursorTrigger.style.top = `${currentY}px`;
  cursorTrigger.style.left = `${currentX}px`;
  requestAnimationFrame(updateCursorPosition);
}

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  currentX = e.pageX - 10;
  currentY = e.pageY - 10;
});

updateCursorPosition();
