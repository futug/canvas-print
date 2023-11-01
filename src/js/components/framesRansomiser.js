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
const framesCheckPic = framesCheck.querySelectorAll("picture");

for (let i = 0; i < framesCheckPic.length; i++) {
  const jpg = framesCheckPic[i].querySelector("img");
  const webp = framesCheckPic[i].querySelector("source");
  const frameData = randomFrames[i];

  jpg.setAttribute("data-art", frameData.art);
  jpg.setAttribute("data-price", frameData.price);
  jpg.setAttribute("src", frameData.src);
  webp.setAttribute("srcset", frameData.srcWebP);
}
