const timeGame = (timer, timerQuestion) => {
  let time = timer;
  const id = setInterval(() => {
    time--;
    if (time === 0) {
      clearInterval(id);
    }
    timerQuestion.innerHTML = time;
  }, 1000);
};

export { timeGame };
