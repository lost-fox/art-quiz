import { index } from "..";
import { drawMainScreen } from "./mainScreen";
import { getFromLS } from "../utils/getFromLS";
import { setInLS } from "../utils/setInLS";
import { defaultSetting } from "../utils/defaultSetting";
import { saveSetting } from "../utils/saveSetting";

const drawSetting = () => {
  index.classList.remove("main-background");
  index.innerHTML = `
   <header>
   <div class="head">
      <div class="back"><button><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.59246 19.9171C8.38082 19.9179 8.17171 19.8711 7.98049 19.7804C7.78927 19.6897 7.6208 19.5573 7.48747 19.393L0.644967 10.893C0.436602 10.6395 0.322693 10.3215 0.322693 9.99339C0.322693 9.66525 0.436602 9.34729 0.644967 9.09381L7.7283 0.593805C7.96876 0.304498 8.3143 0.122564 8.68891 0.0880259C9.06351 0.0534879 9.43649 0.169176 9.7258 0.409639C10.0151 0.650102 10.197 0.995643 10.2316 1.37025C10.2661 1.74485 10.1504 2.11783 9.90996 2.40714L3.57747 10.0005L9.69746 17.5938C9.8707 17.8018 9.98074 18.055 10.0146 18.3235C10.0484 18.592 10.0046 18.8646 9.88836 19.109C9.77211 19.3535 9.58828 19.5595 9.35863 19.7027C9.12897 19.8459 8.8631 19.9203 8.59246 19.9171Z" fill="white"/>
      </svg>
      </button></div>
      <div class="head-name">Setting</div>
   </div>
 </header>
 <main>
   <div class="volume">
      <h2>Volume</h2>
      <input type="range" name="volume" id="volume">
      <div class="volume__icon">
         <div class="volume__icon-mute"><img src="../assets/svg/bi_volume-mute.svg" alt="mute"></div>
         <div class="volime__icon-on"><img src="../assets/svg/bi_volume-down.svg" alt="on"></div>
      </div>
   </div>
   <div class="time-game">
      <h2>Time game</h2>
      <div class="choose-game">
         <p>On</p>
         <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
      </div>
   </div>
   <div class="time-to-answer">
      <h2>Time to answer</h2>
      <div class="choose-time">
         <button onclick="this.nextElementSibling.stepDown(5)"><img src="../assets/svg/akar-icons_circle-minus-fill.svg" alt="minus"></button>
         <input type="number" id="second-to-answer" min ="5" max="30" value="20" readonly>
         <button onclick="this.previousElementSibling.stepUp(5)"><img src="../assets/svg/akar-icons_circle-plus-fill.svg" alt="plus"></button>
      </div>
   </div>
   <div class="setting-buttons">
      <button class="default">Default</button>
      <button class="save">Save</button>
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

  const buttonsSeeting = document.querySelectorAll(".setting-buttons button");
  const chooseGame = document.querySelector(".choose-game input");
  const backFromSettingInMain = document.querySelector(".back");
  const timerGame = document.getElementById("second-to-answer");
  const volume = document.querySelector("#volume");

  volume.onchange = function () {
    setInLS("volumeofBackground", this.value);
  };

  backFromSettingInMain.addEventListener("click", drawMainScreen);

  if (getFromLS("chooseGame")) {
    let check = getFromLS("chooseGame");
    if (check == "true") {
      chooseGame.checked = true;
     } 
  }

  if (getFromLS("timerGame")) {
    timerGame.value = getFromLS("timerGame");
    timerGame.innerHTML = timerGame.value;
  }

  if (getFromLS("chooseGame")) {
    if (getFromLS("chooseGame")) {
      chooseGame.checked;
    } else {
      chooseGame.removeAttribute("checked");
    }
  }

  const [defaultButton , saveButton] = buttonsSeeting;

  saveButton.addEventListener("click", () =>
    saveSetting(timerGame.value, chooseGame.checked)
  );
  defaultButton.addEventListener("click", () =>
    defaultSetting(chooseGame, timerGame)
  );
};

export { drawSetting };
