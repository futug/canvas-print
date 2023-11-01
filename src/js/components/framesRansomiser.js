const framesList = document.querySelectorAll(".frames__image");

const framesAttr = Array.from(framesList).map((frame) => {
  const src = frame.getAttribute("src");
  const srcWebP = src.replace(".jpg", ".webp");

  return {
    art: frame.getAttribute("data-art"),
    price: frame.getAttribute("data-price"),
    src: frame.getAttribute("src"),
    srcWebP: srcWebP,
  };
});

const numFrames = framesAttr.length;
const shuffledIndexes = Array.from({ length: numFrames }, (_, index) => index);
for (let i = numFrames - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledIndexes[i], shuffledIndexes[j]] = [
    shuffledIndexes[j],
    shuffledIndexes[i],
  ];
}

const randomFrames = shuffledIndexes
  .slice(0, 3)
  .map((index) => framesAttr[index]);

const framesCheck = document.querySelector(".calc__frames");
const framesCheckLabel = framesCheck.querySelectorAll("label");
const framesCheckPic = framesCheck.querySelectorAll("picture");

framesCheckPic.forEach((framePic, index) => {
  const jpg = framePic.querySelector("img");
  const webp = framePic.querySelector("source");
  const input = framesCheckLabel[index].querySelector("input");
  const frameData = randomFrames[index];

  input.value = frameData.art;
  input.dataset.price = frameData.price;
  jpg.src = frameData.src;
  webp.srcset = frameData.srcWebP;
});
