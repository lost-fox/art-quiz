import { index } from "..";
import { drawMainScreen } from "./mainScreen";
import { drawSetting } from "./drawSetting";
import { drawScore } from "./drawScore";
import { setInLS } from "../utils/setInLS";
import { getFromLS } from "../utils/getFromLS";
import { handler } from "./handler";
import { gamesPlayed } from "./gamesPlayed";
import { NUMBER_CATEGORIES } from "./constants";

const drawCategoryes = () => {
  let nameCategory = getFromLS("nameCategory");
  let scoreUser = JSON.parse(localStorage.getItem("scoreUser"));

  index.classList.remove("main-background");
  index.innerHTML = `
    <header class = "category-setting">
    <button class="setting ">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M30.375 18.855V18V17.1338L32.535 15.2438C32.9332 14.8928 33.1945 14.4124 33.2727 13.8875C33.3509 13.3625 33.2411 12.8268 32.9625 12.375L30.3075 7.87503C30.1102 7.53333 29.8266 7.24951 29.485 7.05205C29.1434 6.85459 28.7558 6.75044 28.3613 6.75003C28.1168 6.74816 27.8736 6.78616 27.6413 6.86253L24.9075 7.78503C24.4355 7.47139 23.9432 7.18952 23.4338 6.94128L22.86 4.10628C22.7572 3.58834 22.4754 3.12308 22.064 2.79195C21.6527 2.46081 21.138 2.28491 20.61 2.29503H15.345C14.8171 2.28491 14.3024 2.46081 13.891 2.79195C13.4797 3.12308 13.1979 3.58834 13.095 4.10628L12.5213 6.94128C12.0082 7.18946 11.5121 7.47132 11.0363 7.78503L8.35879 6.81753C8.124 6.75636 7.88086 6.73356 7.63879 6.75003C7.24422 6.75044 6.8567 6.85459 6.5151 7.05205C6.17349 7.24951 5.88982 7.53333 5.69254 7.87503L3.03754 12.375C2.77495 12.8261 2.67737 13.3545 2.76152 13.8697C2.84567 14.3848 3.1063 14.8547 3.49879 15.1988L5.62504 17.145V18.8663L3.49879 20.7563C3.09522 21.1028 2.82745 21.5811 2.74301 22.1062C2.65857 22.6314 2.76292 23.1695 3.03754 23.625L5.69254 28.125C5.88982 28.4667 6.17349 28.7506 6.5151 28.948C6.8567 29.1455 7.24422 29.2496 7.63879 29.25C7.88331 29.2519 8.1265 29.2139 8.35879 29.1375L11.0925 28.215C11.5645 28.5287 12.0569 28.8105 12.5663 29.0588L13.14 31.8938C13.2429 32.4117 13.5247 32.877 13.936 33.2081C14.3474 33.5392 14.8621 33.7152 15.39 33.705H20.7C21.228 33.7152 21.7427 33.5392 22.154 33.2081C22.5654 32.877 22.8472 32.4117 22.95 31.8938L23.5238 29.0588C24.0369 28.8106 24.5329 28.5287 25.0088 28.215L27.7313 29.1375C27.9636 29.2139 28.2068 29.2519 28.4513 29.25C28.8458 29.2496 29.2334 29.1455 29.575 28.948C29.9166 28.7506 30.2002 28.4667 30.3975 28.125L32.9625 23.625C33.2251 23.1739 33.3227 22.6455 33.2386 22.1304C33.1544 21.6153 32.8938 21.1454 32.5013 20.8013L30.375 18.855ZM28.3613 27L24.5025 25.695C23.5992 26.4602 22.5669 27.0582 21.4538 27.4613L20.655 31.5H15.345L14.5463 27.5063C13.442 27.0918 12.4152 26.4947 11.5088 25.74L7.63879 27L4.98379 22.5L8.04379 19.8C7.83577 18.6355 7.83577 17.4433 8.04379 16.2788L4.98379 13.5L7.63879 9.00003L11.4975 10.305C12.4008 9.53991 13.4332 8.94182 14.5463 8.53878L15.345 4.50003H20.655L21.4538 8.49378C22.5581 8.90826 23.5849 9.50532 24.4913 10.26L28.3613 9.00003L31.0163 13.5L27.9563 16.2C28.1643 17.3646 28.1643 18.5567 27.9563 19.7213L31.0163 22.5L28.3613 27Z" fill="white"/>
 <path d="M18 24.75C16.665 24.75 15.3599 24.3541 14.2499 23.6124C13.1399 22.8707 12.2747 21.8165 11.7638 20.5831C11.2529 19.3497 11.1193 17.9925 11.3797 16.6831C11.6402 15.3738 12.283 14.171 13.227 13.227C14.171 12.283 15.3738 11.6402 16.6831 11.3797C17.9925 11.1193 19.3497 11.2529 20.5831 11.7638C21.8165 12.2747 22.8707 13.1399 23.6124 14.2499C24.3541 15.3599 24.75 16.665 24.75 18C24.759 18.8889 24.5906 19.7707 24.2546 20.5938C23.9186 21.4168 23.4217 22.1645 22.7931 22.7931C22.1645 23.4217 21.4168 23.9186 20.5938 24.2546C19.7707 24.5906 18.8889 24.759 18 24.75ZM18 13.5C17.4053 13.4861 16.8139 13.5931 16.2617 13.8143C15.7094 14.0356 15.2078 14.3665 14.7872 14.7872C14.3665 15.2078 14.0356 15.7094 13.8143 16.2617C13.5931 16.8139 13.4861 17.4053 13.5 18C13.4861 18.5947 13.5931 19.1861 13.8143 19.7383C14.0356 20.2906 14.3665 20.7922 14.7872 21.2128C15.2078 21.6335 15.7094 21.9644 16.2617 22.1857C16.8139 22.4069 17.4053 22.5139 18 22.5C18.5947 22.5139 19.1861 22.4069 19.7383 22.1857C20.2906 21.9644 20.7922 21.6335 21.2128 21.2128C21.6335 20.7922 21.9644 20.2906 22.1857 19.7383C22.4069 19.1861 22.5139 18.5947 22.5 18C22.5139 17.4053 22.4069 16.8139 22.1857 16.2617C21.9644 15.7094 21.6335 15.2078 21.2128 14.7872C20.7922 14.3665 20.2906 14.0356 19.7383 13.8143C19.1861 13.5931 18.5947 13.4861 18 13.5Z" fill="white"/>
 </svg>
    </button>
   </header>
   <main class="scroll-category">
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
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 21V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H16C16.8317 3 17.4778 3 18.0037 3.02706C15.7519 3.2741 14 5.18245 14 7.5V11.0002L13.9012 20.9671L11 20L8 21L5 20L2 21ZM21 11L16 11V7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5V11ZM4 7C4 6.44772 4.44772 6 5 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H5C4.44772 8 4 7.55228 4 7ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5C4.44772 16 4 15.5523 4 15Z" fill="#FFBCA2"/>
                </svg>
          </div>
          <div class="tab__name" style="color:#FFBCA2">
             Categories
          </div>
       </div>
       <div class="tab">
          <div class="tab__icon">
             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9077 8.26094C21.8025 7.92078 21.6091 7.61758 21.3488 7.38492C21.0885 7.15226 20.7716 6.99921 20.433 6.94272L15.1205 6.04277L12.6578 1.05433C12.5009 0.736759 12.2632 0.470365 11.9706 0.284378C11.6781 0.0983913 11.342 0 10.9993 0C10.6567 0 10.3206 0.0983913 10.028 0.284378C9.73549 0.470365 9.49773 0.736759 9.34086 1.05433L6.87814 6.04277L1.56574 6.94272C1.22752 7.0001 0.911003 7.15348 0.650909 7.38604C0.390815 7.61859 0.1972 7.92133 0.0913058 8.26104C-0.0145881 8.60074 -0.0286682 8.96429 0.0506104 9.31179C0.129889 9.65929 0.299463 9.97731 0.540726 10.231L4.33114 14.2139L3.51072 19.7585C3.45808 20.1117 3.49989 20.4731 3.63156 20.8031C3.76323 21.1331 3.97966 21.4188 4.25704 21.6289C4.53441 21.839 4.862 21.9652 5.20376 21.9938C5.54553 22.0223 5.88823 21.9521 6.19417 21.7908L10.9993 19.2639L15.8046 21.7908C16.1106 21.9518 16.4532 22.0218 16.7949 21.9931C17.1365 21.9643 17.4639 21.8381 17.7412 21.6281C18.0185 21.4181 18.2349 21.1325 18.3666 20.8027C18.4984 20.4729 18.5404 20.1116 18.4881 19.7585L17.6677 14.2139L21.4581 10.231C21.7001 9.97781 21.8702 9.65978 21.9496 9.31208C22.0289 8.96438 22.0144 8.60058 21.9077 8.26094ZM20.4167 9.15434L16.1052 13.6849L17.0385 19.9917C17.0501 20.0672 17.0414 20.1446 17.0133 20.2153C16.9853 20.286 16.939 20.3472 16.8797 20.3922C16.8203 20.4371 16.7502 20.4641 16.677 20.47C16.6038 20.476 16.5305 20.4607 16.4652 20.4259L10.9993 17.5516L5.53344 20.426C5.4681 20.4608 5.39479 20.4761 5.32164 20.4701C5.24848 20.4642 5.17833 20.4372 5.11897 20.3923C5.0596 20.3473 5.01334 20.2861 4.9853 20.2154C4.95726 20.1447 4.94854 20.0673 4.96011 19.9918L5.89351 13.6849L1.58201 9.1543C1.53053 9.10007 1.49435 9.03213 1.47744 8.9579C1.46054 8.88367 1.46356 8.80602 1.48618 8.73346C1.50879 8.6609 1.55013 8.59624 1.60566 8.54654C1.66119 8.49684 1.72878 8.46403 1.801 8.45171L7.84371 7.42807L10.645 1.75391C10.6785 1.68604 10.7293 1.6291 10.7918 1.58934C10.8543 1.54959 10.9261 1.52856 10.9993 1.52856C11.0726 1.52856 11.1444 1.54959 11.2069 1.58934C11.2694 1.6291 11.3202 1.68604 11.3537 1.75391L14.155 7.42807L20.1977 8.45171C20.2699 8.46403 20.3375 8.49684 20.393 8.54654C20.4485 8.59624 20.4899 8.6609 20.5125 8.73346C20.5351 8.80602 20.5381 8.88367 20.5212 8.9579C20.5043 9.03213 20.4682 9.10007 20.4167 9.1543L20.4167 9.15434Z" fill="white"/>
                </svg>
          </div>
          <div class="tab__name">
           Score
          </div>
       </div>
    </div>
     <h3>Categories</h3>    
     <div class="categories flex">
        <div class="item">
           <div class="item__text flex">
              <div class="item__text-name">
                Portrait
              </div>
              <div class="item__text-score">
                <span class="score">0</span>
                <span>/10</span>
              </div>
           </div>
           <div class="item__img no-play">
              <img src="../assets/image/categories/0.png" alt="portrait">
           </div>
        </div>
        <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
               Still life
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/1.png" alt="still life">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
               Landscape
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/2.png" alt="landscape">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
               Impressionism
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/3.png" alt="impressionism">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
               Expressionism
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/4.png" alt="expressionism">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
              Avant-garde
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/5.png" alt="avant-garde">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
             Renaissance
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/6.png" alt="renaissance">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
              Surrealism
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/7.png" alt="surrealism">
          </div>
       </div>      
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
              Kitsch
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/8.png" alt="kitsch">
          </div>
       </div>      
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
             Minimalism
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/9.png" alt="minimalism">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
            Interior
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/10.png" alt="interior">
          </div>
       </div>
       <div class="item">
          <div class="item__text flex">
             <div class="item__text-name">
             Nude
             </div>
             <div class="item__text-score">
               <span class="score">0</span>
               <span>/10</span>
             </div>
          </div>
          <div class="item__img no-play">
             <img src="../assets/image/categories/11.png" alt="nude">
          </div>
       </div>
     </div>
   </main>
    `;

  let countQuestion = 0;
  let userAnswer = [];
  let categories = document.querySelectorAll(".item");
  const setting = document.querySelector(".setting");
  const tabs = document.querySelectorAll(".tab");

  setInLS("countQuestion", countQuestion);
  setInLS("userAnswer", userAnswer);

  setting.addEventListener("click", drawSetting);

  if (nameCategory == "artict") {
    for (let i = 0; i < categories.length; i++) {
      categories[i].setAttribute("data-index", i);
      categories[i].onclick = () => handler(categories, i);
    }
  } else if ((nameCategory = "picture")) {
    for (let i = 0; i < categories.length; i++) {
      categories[i].setAttribute("data-index", NUMBER_CATEGORIES + i);
      categories[i].onclick = () => handler(categories, i);
    }
  }

  if (nameCategory == "artict" && scoreUser != null) {
    let arrayResults = scoreUser.filter((el) => {
      return el.type == "artict";
    });
    for (let i = 0; i < arrayResults.length; i++) {
       gamesPlayed(arrayResults[i].category, categories, arrayResults[i].scoreRound)
    }
  } else if (nameCategory == "picture" && scoreUser != null) {
    let arrayResults = scoreUser.filter((el) => {
      return el.type == "picture";
    });
    for (let i = 0; i < arrayResults.length; i++) {
       gamesPlayed(arrayResults[i].category-NUMBER_CATEGORIES, categories, arrayResults[i].scoreRound)
    }
  }

  tabs[0].addEventListener("click", drawMainScreen);
  tabs[2].addEventListener("click", drawScore);
};

export { drawCategoryes };
