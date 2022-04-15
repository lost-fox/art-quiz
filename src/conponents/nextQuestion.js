import { getFromLS } from "../utils/getFromLS";
import { setInLS } from "../utils/setInLS";
import { drawQuestionForArtict } from "./drawQuestionForArtict";
import { getScore } from "../utils/getScore";
import { drawModalWindowResult } from "./drawModalWindowResult";
import { drawQuestionForPicture } from "./drawQuestionForPicture";
import { NUMBER_QUESTION, NEXT_COUNT } from "./constants";

const nextQuestion = () => {
  const modalWindow = document.querySelector("#modal-answer");
  const body = document.querySelector("body");
  let countQuestion = getFromLS("countQuestion");
  let nameCategory = getFromLS("nameCategory");

  body.removeChild(modalWindow);
  countQuestion = +countQuestion + NEXT_COUNT;
  setInLS("countQuestion", countQuestion);
  if (nameCategory == "artict" && countQuestion != NUMBER_QUESTION) {
    drawQuestionForArtict();
  } else if (nameCategory == "picture" && countQuestion != NUMBER_QUESTION) {
    drawQuestionForPicture();
  }
  if (countQuestion == NUMBER_QUESTION) {
    getScore();
    drawModalWindowResult();
  }
};

export { nextQuestion };
