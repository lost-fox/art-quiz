import { dataToGit, index, data } from "..";
import { getFromLS } from "../utils/getFromLS";
import { nextQuestion } from "./nextQuestion";
import { setImage } from "../utils/setImage";

const drawModalWindowAnswer = () => {
  let category = getFromLS("indexCategory");
  let countQuestion = getFromLS("countQuestion");
  let number = Number(category + countQuestion);
  index.innerHTML += `
    <div class="modal-container" id="modal-answer">
    <div class="modal-content modal-answer">
       <div class="card-img">
          
       </div>
       <div class="card-text">
          <h4></h4>
          <p></p>
       </div>       
          <button class="button-next">Next</button>       
    </div>
 </div>
    `;
  const nextButton = document.querySelector(".button-next");
  const modalWindow = document.querySelector("#modal-answer");
  const title = modalWindow.querySelector("h4");
  const name = modalWindow.querySelector("p");
  const cardImg = document.querySelector(".card-img");
  modalWindow.style.display = "flex";

  setImage(category, countQuestion, cardImg);

  dataToGit().then(() => {
    title.innerHTML = data[number].name;
    name.innerHTML = `${data[number].author}, <i>${data[number].year}</i>`;
  });

  nextButton.addEventListener("click", nextQuestion);
};

export { drawModalWindowAnswer };
