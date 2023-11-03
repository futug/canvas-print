const paragraphsEl = document.querySelector(".summary__descr");
const button = document.querySelector(".summary__button");

if (paragraphsEl && button) {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    if (paragraphsEl.classList.contains("summary__descr_active")) {
      button.textContent = "Развернуть";
    } else {
      button.textContent = "Свернуть";
    }
    paragraphsEl.classList.toggle("summary__descr_active");
  });
}
