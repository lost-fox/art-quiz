import { getFromLS } from "./getFromLS";
import { setInLS } from "./setInLS";

const getScore = () => {
  let userAnswer = getFromLS("userAnswer").split("");
  let sum = userAnswer.reduce((a, b) => {
    return Number(a) + Number(b);
  });
  setInLS("scoreToRound", sum);
};

export { getScore };
