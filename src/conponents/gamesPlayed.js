const gamesPlayed = (arrayResults, categories, scoreRound) =>{
   let item =
      categories[arrayResults].querySelector(".item__img");
      let count = categories[arrayResults].querySelector(".score");
      item.classList.remove("no-play");
      count.textContent = scoreRound;
}

export {gamesPlayed}