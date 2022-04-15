import { index } from "..";
import { drawMainScreen } from "./mainScreen";
import { drawSetting } from "./drawSetting";
import { drawCategoryes } from "./drawCategoryes";
import { getFromLS } from "../utils/getFromLS";
import { NUMBER_CATEGORIES, COUNT_ANSWER, NUMBER_QUESTION} from "./constants";

const drawScore = () => {
  let scoreUser = JSON.parse(localStorage.getItem("scoreUser"));
  const nameCategory = getFromLS("nameCategory");

  index.classList.remove("main-background");
  index.innerHTML = `
   <header>
   <button class="setting"></button>
  </header>
  <main>
   <div class="logo-name__pink">
      <img src="../assets/image/logo_pink.png" alt="logo-pink">
   </div>
   <div class="tabs flex">
      <div class="tab">
         <div class="tab__icon">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.30833 0.953728C9.78173 0.554754 10.3809 0.335938 11 0.335938C11.6191 0.335938 12.2183 0.554754 12.6917 0.953728L20.5667 7.59439C21.1582 8.09373 21.5 8.82756 21.5 9.60106V21.0379C21.5 21.5794 21.2849 22.0987 20.902 22.4816C20.5191 22.8645 19.9998 23.0796 19.4583 23.0796H15.375C14.8335 23.0796 14.3142 22.8645 13.9313 22.4816C13.5484 22.0987 13.3333 21.5794 13.3333 21.0379V14.6212C13.3333 14.5439 13.3026 14.4697 13.2479 14.415C13.1932 14.3603 13.119 14.3296 13.0417 14.3296H8.95833C8.88098 14.3296 8.80679 14.3603 8.75209 14.415C8.6974 14.4697 8.66667 14.5439 8.66667 14.6212V21.0379C8.66667 21.5794 8.45156 22.0987 8.06868 22.4816C7.68579 22.8645 7.16648 23.0796 6.625 23.0796H2.54167C2.27355 23.0796 2.00806 23.0267 1.76035 22.9241C1.51265 22.8215 1.28758 22.6712 1.09799 22.4816C0.908404 22.292 0.758016 22.0669 0.655413 21.8192C0.552809 21.5715 0.5 21.306 0.5 21.0379V9.60106C0.5 8.82756 0.841833 8.09373 1.43333 7.59439L9.30833 0.953728ZM11.5635 2.29189C11.4058 2.15911 11.2062 2.08629 11 2.08629C10.7938 2.08629 10.5942 2.15911 10.4365 2.29189L2.5615 8.93139C2.46405 9.01343 2.38568 9.11576 2.33188 9.23122C2.27807 9.34669 2.25013 9.47251 2.25 9.59989V21.0367C2.25 21.1977 2.38067 21.3284 2.54167 21.3284H6.625C6.70235 21.3284 6.77654 21.2977 6.83124 21.243C6.88594 21.1883 6.91667 21.1141 6.91667 21.0367V14.6201C6.91667 13.4919 7.83133 12.5784 8.95833 12.5784H13.0417C14.1687 12.5784 15.0833 13.4919 15.0833 14.6201V21.0367C15.0833 21.1977 15.214 21.3284 15.375 21.3284H19.4583C19.5357 21.3284 19.6099 21.2977 19.6646 21.243C19.7193 21.1883 19.75 21.1141 19.75 21.0367V9.60106C19.7499 9.47367 19.7219 9.34785 19.6681 9.23239C19.6143 9.11692 19.536 9.0146 19.4385 8.93256L11.5635 2.29189Z" fill="white"/>
             </svg>
         </div>
         <div class="tab__name">
          Home
         </div>
      </div>
      <div class="tab">
       <div class="tab__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M2 21V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H16C16.8317 3 17.4778 3 18.0037 3.02706C15.7519 3.2741 14 5.18245 14 7.5V11.0002L13.9012 20.9671L11 20L8 21L5 20L2 21ZM21 11L16 11V7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5V11ZM4 7C4 6.44772 4.44772 6 5 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H5C4.44772 8 4 7.55228 4 7ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5C4.44772 16 4 15.5523 4 15Z" fill="white"/>
             </svg>
       </div>
       <div class="tab__name">
          Categories
       </div>
    </div>
    <div class="tab">
       <div class="tab__icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M21.9077 8.26094C21.8025 7.92078 21.6091 7.61758 21.3488 7.38492C21.0885 7.15226 20.7716 6.99921 20.433 6.94272L15.1205 6.04277L12.6578 1.05433C12.5009 0.736759 12.2632 0.470365 11.9706 0.284378C11.6781 0.0983913 11.342 0 10.9993 0C10.6567 0 10.3206 0.0983913 10.028 0.284378C9.73549 0.470365 9.49773 0.736759 9.34086 1.05433L6.87814 6.04277L1.56574 6.94272C1.22752 7.0001 0.911003 7.15348 0.650909 7.38604C0.390815 7.61859 0.1972 7.92133 0.0913058 8.26104C-0.0145881 8.60074 -0.0286682 8.96429 0.0506104 9.31179C0.129889 9.65929 0.299463 9.97731 0.540726 10.231L4.33114 14.2139L3.51072 19.7585C3.45808 20.1117 3.49989 20.4731 3.63156 20.8031C3.76323 21.1331 3.97966 21.4188 4.25704 21.6289C4.53441 21.839 4.862 21.9652 5.20376 21.9938C5.54553 22.0223 5.88823 21.9521 6.19417 21.7908L10.9993 19.2639L15.8046 21.7908C16.1106 21.9518 16.4532 22.0218 16.7949 21.9931C17.1365 21.9643 17.4639 21.8381 17.7412 21.6281C18.0185 21.4181 18.2349 21.1325 18.3666 20.8027C18.4984 20.4729 18.5404 20.1116 18.4881 19.7585L17.6677 14.2139L21.4581 10.231C21.7001 9.97781 21.8702 9.65978 21.9496 9.31208C22.0289 8.96438 22.0144 8.60058 21.9077 8.26094ZM20.4167 9.15434L16.1052 13.6849L17.0385 19.9917C17.0501 20.0672 17.0414 20.1446 17.0133 20.2153C16.9853 20.286 16.939 20.3472 16.8797 20.3922C16.8203 20.4371 16.7502 20.4641 16.677 20.47C16.6038 20.476 16.5305 20.4607 16.4652 20.4259L10.9993 17.5516L5.53344 20.426C5.4681 20.4608 5.39479 20.4761 5.32164 20.4701C5.24848 20.4642 5.17833 20.4372 5.11897 20.3923C5.0596 20.3473 5.01334 20.2861 4.9853 20.2154C4.95726 20.1447 4.94854 20.0673 4.96011 19.9918L5.89351 13.6849L1.58201 9.1543C1.53053 9.10007 1.49435 9.03213 1.47744 8.9579C1.46054 8.88367 1.46356 8.80602 1.48618 8.73346C1.50879 8.6609 1.55013 8.59624 1.60566 8.54654C1.66119 8.49684 1.72878 8.46403 1.801 8.45171L7.84371 7.42807L10.645 1.75391C10.6785 1.68604 10.7293 1.6291 10.7918 1.58934C10.8543 1.54959 10.9261 1.52856 10.9993 1.52856C11.0726 1.52856 11.1444 1.54959 11.2069 1.58934C11.2694 1.6291 11.3202 1.68604 11.3537 1.75391L14.155 7.42807L20.1977 8.45171C20.2699 8.46403 20.3375 8.49684 20.393 8.54654C20.4485 8.59624 20.4899 8.6609 20.5125 8.73346C20.5351 8.80602 20.5381 8.88367 20.5212 8.9579C20.5043 9.03213 20.4682 9.10007 20.4167 9.1543L20.4167 9.15434Z" fill="#FFBCA2"/>
             </svg>
       </div>
       <div class="tab__name" style="color:#FFBCA2">
        Score
       </div>
    </div>
 </div>
 <div class="score-show">
        
    </div>
  </main>
   `;

  const scoreIndex = document.querySelector(".score-show");
  const setting = document.querySelector(".setting");
  const tabs = document.querySelectorAll(".tab");

  if (nameCategory == "artict" && scoreUser != null) {
    let arrayResults = scoreUser.filter((el) => {
      return el.type == "artict";
    });
    arrayResults = arrayResults.reverse();
    if (arrayResults.length > COUNT_ANSWER) {
      for (let i = 0; i < COUNT_ANSWER; i++) {
        scoreIndex.innerHTML += `<div class="item__score">
       <div class="item__score-interior">
       </div>
       <div class="item__score-img">
          <img src="../assets/image/categories/${arrayResults[i].category}.png" alt="01">
       </div>
    </div>`;
      }
    } else {
      for (let i = 0; i < arrayResults.length; i++) {
        scoreIndex.innerHTML += `<div class="item__score">
          <div class="item__score-interior">
          </div>
          <div class="item__score-img">
             <img src="../assets/image/categories/${arrayResults[i].category}.png" alt="01">
          </div>
       </div>`;
      }
    }

    const itemScoreInterior = document.querySelectorAll(
      ".item__score-interior"
    );
    for (let i = 0; i < itemScoreInterior.length; i++) {
      itemScoreInterior[i].style.width = `${
        NUMBER_QUESTION * arrayResults[i].scoreRound
      }%`;
      if (arrayResults[i].scoreRound < COUNT_ANSWER) {
        itemScoreInterior[i].style.backgroundColor = "#ff7e7e";
      } else {
        itemScoreInterior[i].style.backgroundColor = "#3dda69";
      }
    }
  } else if (nameCategory == "picture" && scoreUser != null) {
    let arrayResults = scoreUser.filter((el) => {
      return el.type == "picture";
    });
    arrayResults = arrayResults.reverse();
    if (arrayResults.length > COUNT_ANSWER) {
      for (let i = 0; i < COUNT_ANSWER; i++) {
        scoreIndex.innerHTML += `<div class="item__score">
       <div class="item__score-interior">
       </div>
       <div class="item__score-img">
          <img src="../assets/image/categories/${
            arrayResults[i].category - NUMBER_CATEGORIES
          }.png" alt="01">
       </div>
    </div>`;
      }
    } else {
      for (let i = 0; i < arrayResults.length; i++) {
        scoreIndex.innerHTML += `<div class="item__score">
          <div class="item__score-interior">
          </div>
          <div class="item__score-img">
             <img src="../assets/image/categories/${
               arrayResults[i].category - NUMBER_CATEGORIES
             }.png" alt="01">
          </div>
       </div>`;
      }
    }

    const itemScoreInterior = document.querySelectorAll(
      ".item__score-interior"
    );
    for (let i = 0; i < itemScoreInterior.length; i++) {
      itemScoreInterior[i].style.width = `${
        NUMBER_QUESTION * arrayResults[i].scoreRound
      }%`;
      if (arrayResults[i].scoreRound < COUNT_ANSWER) {
        itemScoreInterior[i].style.backgroundColor = "#ff7e7e";
      } else {
        itemScoreInterior[i].style.backgroundColor = "#3dda69";
      }
    }
  }

  setting.addEventListener("click", drawSetting);
  tabs[0].addEventListener("click", drawMainScreen);
  tabs[1].addEventListener("click", drawCategoryes);
};

export { drawScore };
