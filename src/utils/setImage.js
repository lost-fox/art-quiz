const setImage = (category, countQuestion, questionPicture) => {
  const getImageFromGitHub = `https://raw.githubusercontent.com/lost-fox/image-data/master/img/${(category + countQuestion).toString().padStart(2, "0")}.jpg`;
  const data = fetch (getImageFromGitHub).then((res) => res.blob()).then((pictureBlob) => {
    let picture = document.createElement("img");
    const pictureObjectURL = URL.createObjectURL(pictureBlob);
    picture.src = pictureObjectURL;
    questionPicture.append(picture);
  })
};

export { setImage };
