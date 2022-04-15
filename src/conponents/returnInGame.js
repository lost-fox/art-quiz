import { drawQuestionForArtict } from "./drawQuestionForArtict";
import { getFromLS } from "../utils/getFromLS";
import { drawQuestionForPicture } from "./drawQuestionForPicture";

const returnInGame = () => {
  const nameCategory = getFromLS("nameCategory");
  const modalWindow = document.querySelector("#modal-close");
  const body = document.querySelector("body");

  switch (nameCategory) {
    case 'artict':
      body.removeChild(modalWindow);
    drawQuestionForArtict(); 
    break;
    case 'picture':
     body.removeChild(modalWindow);
    drawQuestionForPicture(); 
    break;
  }
};

export { returnInGame };
