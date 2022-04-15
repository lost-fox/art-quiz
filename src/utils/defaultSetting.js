import { setInLS } from "./setInLS";

const defaultSetting = (chooseGame, timerGame) => {
  chooseGame.removeAttribute("checked");
  setInLS("chooseGame", (chooseGame.checked = false));

  timerGame.value = 20;
  setInLS("timerGame", timerGame.value);
  timerGame.innerHTML = timerGame;
};

export { defaultSetting };
