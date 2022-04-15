import { index, scoreUser } from "..";
import { drawCategoryes } from "./drawCategoryes";
import { getFromLS } from "../utils/getFromLS";
import { setInLS } from "../utils/setInLS";
import { drawModalWindowRoundResults } from "./drawModalWindowRoundResults";

const drawModalWindowResult = () => {
  let audio = new Audio();
  let scoreRound = getFromLS("scoreToRound");
  index.innerHTML += `
   <div class="modal-container" id="modal-result"> 
   <div class="modal-content modal-result">
      <div class="result-img">
         <img src="../assets/image/congratulations.png" alt="congratulations">
      </div>
     <p>Congratulations!</p>
     <div class="result-score">
        <span class="score">${scoreRound}</span>
        <span>/10</span>
     </div>
     <div class="buttons-result">
        <button class="card-answer">See Result</button>
        <button class="next-quiz">Next Quiz</button>
       
     </div>
   </div>
 </div>
   `;
  const buttonsResult = document.querySelectorAll(".buttons-result button");

  const [modalButton, categoryButton] = buttonsResult;

  modalButton.addEventListener("click", drawModalWindowRoundResults);
  categoryButton.addEventListener("click", drawCategoryes);

  audio.src = "../assets/sound/finish.mp3";
  audio.autoplay = true;

  let stat = {
    type: getFromLS("nameCategory"),
    category: getFromLS("indexCategory"),
    answer: getFromLS("userAnswer"),
    scoreRound: getFromLS("scoreToRound"),
  };
  scoreUser.push(stat);
  setInLS("scoreUser", JSON.stringify(scoreUser));
};

export { drawModalWindowResult };
