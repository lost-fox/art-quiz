import { index, data, dataToGit } from "..";
import { getFromLS } from "../utils/getFromLS";
import { setImage } from "../utils/setImage";
import { getRandomNum } from "../utils/getRandomNum";
import { shiffle } from "../utils/shiffle";
import { drawModalWindowClose } from "./drawModalWindowClose";
import { timeGame } from "../utils/timeGame";
import { chooseAnswer } from "./chooseAnswer";
import { PERCENT_COLOR_ANSWER } from "./constants";

const drawQuestionForArtict = () => {
  let category = getFromLS("indexCategory");
  let timer = Number(getFromLS("timerGame"));
  let countQuestion = getFromLS("countQuestion");
  let chooseGame = getFromLS("chooseGame");
  index.innerHTML = `
       <header class = "flex">
        <div class="close-game">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M15.6449 13.9999L20.6616 8.99489C20.8813 8.7752 21.0047 8.47724 21.0047 8.16656C21.0047 7.85587 20.8813 7.55791 20.6616 7.33822C20.4419 7.11854 20.1439 6.99512 19.8333 6.99512C19.5226 6.99512 19.2246 7.11854 19.0049 7.33822L13.9999 12.3549L8.99493 7.33822C8.77524 7.11854 8.47728 6.99512 8.1666 6.99512C7.85591 6.99512 7.55795 7.11854 7.33826 7.33822C7.11857 7.55791 6.99516 7.85587 6.99516 8.16656C6.99516 8.47724 7.11857 8.7752 7.33826 8.99489L12.3549 13.9999L7.33826 19.0049C7.22891 19.1133 7.14212 19.2424 7.08289 19.3845C7.02366 19.5267 6.99316 19.6792 6.99316 19.8332C6.99316 19.9872 7.02366 20.1397 7.08289 20.2819C7.14212 20.4241 7.22891 20.5531 7.33826 20.6616C7.44672 20.7709 7.57575 20.8577 7.71792 20.9169C7.86009 20.9762 8.01258 21.0067 8.1666 21.0067C8.32061 21.0067 8.4731 20.9762 8.61527 20.9169C8.75744 20.8577 8.88647 20.7709 8.99493 20.6616L13.9999 15.6449L19.0049 20.6616C19.1134 20.7709 19.2424 20.8577 19.3846 20.9169C19.5268 20.9762 19.6792 21.0067 19.8333 21.0067C19.9873 21.0067 20.1398 20.9762 20.2819 20.9169C20.4241 20.8577 20.5531 20.7709 20.6616 20.6616C20.7709 20.5531 20.8577 20.4241 20.917 20.2819C20.9762 20.1397 21.0067 19.9872 21.0067 19.8332C21.0067 19.6792 20.9762 19.5267 20.917 19.3845C20.8577 19.2424 20.7709 19.1133 20.6616 19.0049L15.6449 13.9999Z" fill="white"/>
             </svg>
        </div>
        
          <div class="round-stripe__inner">
           <div class="round-stripe__outside">     
        </div>  
        </div>
        <div class="timer-question">
       
        </div>
     </header>
     <main>
        <div class="question">
           <h4>Кто написал эту картину?</h4>
        </div>
        <div class="question-picture">
        
        </div>
        <div class="answers flex">
           <div class="answer">
              <p>Answer 1</p>
           </div>
           <div class="answer">
             <p>Answer 2</p>
          </div>
          <div class="answer">
             <p>Answer 3</p>
          </div>
          <div class="answer">
             <p>Answer 4</p>
          </div>
        </div>
     </main>
     <footer>
       <div class="info">
          <div class="rss"><img src="../assets/svg/rss_logo.svg" alt="logo rss"></div>
       <div class="github"><a href="https://github.com/lost-fox">App developer: Lost Fox</a></div>
       <div class="year">2021</div>
       </div>
     </footer>
       `;
  const closeGame = document.querySelector(".close-game");
  const answerButton = document.querySelectorAll(".answer p");
  const answerButtons = document.querySelector(".answers");
  const roundStripe = document.querySelector(".round-stripe__outside");
  const timerQuestion = document.querySelector(".timer-question");
  const questionPicture = document.querySelector(".question-picture");

  let arrayAnswer = [];

  if (chooseGame == "false") {
    timerQuestion.style.opacity = 0;
  } else {
    timeGame(timer, timerQuestion);
  }

  setImage(category, countQuestion, questionPicture);

  roundStripe.style.width = `${PERCENT_COLOR_ANSWER * +countQuestion}%`;

  closeGame.addEventListener("click", drawModalWindowClose);

  while (arrayAnswer.length < 3) {
    let numberPicture = getRandomNum();

    if (
      dataToGit().then(() => {
        data[Number(category + countQuestion)].author;
      }) !==
      dataToGit().then(() => {
        return data[numberPicture].author;
      })
    ) {
      arrayAnswer.push(numberPicture);
    }
  }

  arrayAnswer.push(Number(category + countQuestion));
  arrayAnswer = arrayAnswer.sort(shiffle);

  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].setAttribute("data-index", i);
    dataToGit().then(() => {
      answerButton[i].textContent = data[arrayAnswer[i]].author;
    });
  }

  answerButtons.onclick = function (e) {
    let target = e.target;
    chooseAnswer(target.closest(".answer"));
  };
};

export { drawQuestionForArtict };
