export async function getDataToGit() {
  const imagesUrl =
    "https://raw.githubusercontent.com/lost-fox/image-data/master/images.json";
  const response = await fetch(imagesUrl);
  const images = await response.json();
  return images;
}
