import { setInLS } from "./setInLS";

const saveSetting = (timerGame, chooseGame) => {
  setInLS("timerGame", timerGame);
  setInLS("chooseGame", chooseGame);
};

export { saveSetting };
