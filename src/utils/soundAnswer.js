import { getFromLS } from "./getFromLS";
import { setInLS } from "./setInLS";

let volume = getFromLS("volumeofBackground");
let audio = new Audio();

const soundAnswer = (num, correct) => {
  let userAnswerArray = getFromLS("userAnswer").split("");

  userAnswerArray.push(num);
  audio.src = `./../assets/sound/${correct}.mp3`;
  audio.volume = volume / 100;
  audio.autoplay = true;

  setInLS("userAnswer", userAnswerArray.join(""));
};

export { soundAnswer };
