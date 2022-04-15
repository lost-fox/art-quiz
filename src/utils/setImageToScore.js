import { getFromLS } from "./getFromLS";

const setImageToScore = (category, i, answerImg) => {
  const userAnswer = getFromLS("userAnswer").split("");

  const getImageFromGitHub = `https://raw.githubusercontent.com/lost-fox/image-data/master/img/${(category + i).toString().padStart(2, "0")}.jpg`;
  const data = fetch (getImageFromGitHub).then((res) => res.blob()).then((pictureBlob) => {
    let picture = document.createElement("img");
    const pictureObjectURL = URL.createObjectURL(pictureBlob);
    picture.src = pictureObjectURL;
    answerImg.append(picture);
    if (userAnswer[i] === "0") {
      picture.classList.add("no-play");
    }
  })
};
export { setImageToScore };
