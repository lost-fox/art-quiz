import { getFromLS } from "../utils/getFromLS";
import { setInLS } from "../utils/setInLS";
import { drawQuestionForArtict } from "./drawQuestionForArtict";
import { drawQuestionForPicture } from "./drawQuestionForPicture";

const handler = function (categories, i) {
  let nameCategory = getFromLS("nameCategory");
  let itemImg = categories[i].querySelector(".item__img");
  let index = categories[i].getAttribute("data-index");

  itemImg.classList.remove("no-play");
  itemImg.classList.add("play");
  setInLS("indexCategory", index);

  if (nameCategory == "artict") {
    drawQuestionForArtict();
  } else {
    drawQuestionForPicture();
  }
};

export { handler };
