import { index } from "..";
import { drawCategoryes } from "./drawCategoryes";
import { returnInGame } from "./returnInGame";

const drawModalWindowClose = () => {
  index.innerHTML += `<div class="modal-container" id="modal-close"> 
   <div class="modal-content modal-exit">
     <p>Do you really want to quit the game?</p>
     <div class="buttons-close">
        <button class="cansel">Cansel</button>
        <button class="yes">Yes</button>
     </div>
   </div>
 </div>`;
  const modalWindow = document.querySelector("#modal-close");
  modalWindow.style.display = "flex";
  const buttonsClose = document.querySelectorAll(".buttons-close button");

  const [returnButton, categoryButton] = buttonsClose

  returnButton.addEventListener("click", returnInGame);
  categoryButton.addEventListener("click", drawCategoryes);
};

export { drawModalWindowClose };
