import { COUNT_IMAGE } from "../conponents/constants";

const getRandomNum = () => {
  return Math.floor(Math.random() * (0 - COUNT_IMAGE) + COUNT_IMAGE);
};

export { getRandomNum };
