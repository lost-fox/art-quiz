import { dataToGit, index, data } from "..";
import { getFromLS } from "../utils/getFromLS";
import { drawCategoryes } from "./drawCategoryes";
import { setImageToScore } from "../utils/setImageToScore";
import { NUMBER_QUESTION } from "./constants";

const drawModalWindowRoundResults = () => {
  const category = getFromLS("indexCategory");
  index.innerHTML += `
      <div class="modal-container" id="modal-answer"> 
      <div class="modal-content modal-answer">
         <p>Your Result</p>
         <div class="answer-img">
            
         </div>
         <button class="next">Next Quiz</button>
         <marquee></marquee> 
      </div>
     
    </div>
      `;
  const answerImg = document.querySelector(".answer-img");
  const buttonNextQuiz = document.querySelector(".next");

  for (let i = 0; i < NUMBER_QUESTION; i++) {
    setImageToScore(category, i, answerImg);
  }

  buttonNextQuiz.addEventListener("click", drawCategoryes);
};
export { drawModalWindowRoundResults };
