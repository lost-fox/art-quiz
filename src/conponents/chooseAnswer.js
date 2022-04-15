import { drawModalWindowAnswer } from "./drawModalWindowAnswer";
import { getFromLS } from "../utils/getFromLS";
import { soundAnswer } from "../utils/soundAnswer";
import { data, dataToGit } from "..";

const chooseAnswer = (e) => {
  let nameCategory = getFromLS("nameCategory");
  let category = getFromLS("indexCategory");
  let countQuestion = getFromLS("countQuestion");

  e.classList.add("choose-answer");
  let firstChild = e.firstChild;
  let div = document.createElement("div");

  dataToGit().then(() => {
    if (nameCategory == "artict") {
      let userAnswer = e.children[0].textContent;
      if (userAnswer == data[Number(category + countQuestion)].author) {
        e.classList.remove("choose-answer");
        e.classList.add("true-answer");
        soundAnswer(1, "correct");
        drawModalWindowAnswer();
      } else {
        e.insertBefore(div, firstChild).classList.add("false-answer");
        soundAnswer(0, "wrong");
        drawModalWindowAnswer();
      }
    } else {
      let userAnswer = e.children[0].src.toString();
      if (
        userAnswer ==
        `https://raw.githubusercontent.com/lost-fox/image-data/master/img/${
          data[Number(category + countQuestion)].imageNum
        }.jpg`
      ) {
        e.insertBefore(div, firstChild).classList.add("true-answer");
        soundAnswer(1, "correct");
        drawModalWindowAnswer();
      } else {
        e.insertBefore(div, firstChild).classList.add("false-answer");
        soundAnswer(0, "wrong");
        drawModalWindowAnswer();
      }
    }
  });
};

export { chooseAnswer };
