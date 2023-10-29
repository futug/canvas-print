const label = document.querySelector(".calc__file");
export const fileInput = label.querySelector("input");
export let selectedFiles = "";
fileInput.addEventListener("change", (event) => {
  selectedFiles = event.target.files[0].name;
  if (selectedFiles.length > 0) {
    label.querySelector("span").textContent = selectedFiles;
  } else {
    label.querySelector("span").textContent = "Выберите файлы";
  }
});

label.addEventListener("click", () => {
  console.log("click");
});
