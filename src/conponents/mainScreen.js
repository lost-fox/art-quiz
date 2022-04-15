import { index } from "..";
import { drawSetting } from "./drawSetting";
import { setInLS } from "../utils/setInLS";
import { drawCategoryes } from "./drawCategoryes";

const drawMainScreen = () => {
  index.classList.add("main-background");
  index.innerHTML = `
    <header>
    <button class="setting">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M30.375 18.855V18V17.1338L32.535 15.2438C32.9332 14.8928 33.1945 14.4124 33.2727 13.8875C33.3509 13.3625 33.2411 12.8268 32.9625 12.375L30.3075 7.87503C30.1102 7.53333 29.8266 7.24951 29.485 7.05205C29.1434 6.85459 28.7558 6.75044 28.3613 6.75003C28.1168 6.74816 27.8736 6.78616 27.6413 6.86253L24.9075 7.78503C24.4355 7.47139 23.9432 7.18952 23.4338 6.94128L22.86 4.10628C22.7572 3.58834 22.4754 3.12308 22.064 2.79195C21.6527 2.46081 21.138 2.28491 20.61 2.29503H15.345C14.8171 2.28491 14.3024 2.46081 13.891 2.79195C13.4797 3.12308 13.1979 3.58834 13.095 4.10628L12.5213 6.94128C12.0082 7.18946 11.5121 7.47132 11.0363 7.78503L8.35879 6.81753C8.124 6.75636 7.88086 6.73356 7.63879 6.75003C7.24422 6.75044 6.8567 6.85459 6.5151 7.05205C6.17349 7.24951 5.88982 7.53333 5.69254 7.87503L3.03754 12.375C2.77495 12.8261 2.67737 13.3545 2.76152 13.8697C2.84567 14.3848 3.1063 14.8547 3.49879 15.1988L5.62504 17.145V18.8663L3.49879 20.7563C3.09522 21.1028 2.82745 21.5811 2.74301 22.1062C2.65857 22.6314 2.76292 23.1695 3.03754 23.625L5.69254 28.125C5.88982 28.4667 6.17349 28.7506 6.5151 28.948C6.8567 29.1455 7.24422 29.2496 7.63879 29.25C7.88331 29.2519 8.1265 29.2139 8.35879 29.1375L11.0925 28.215C11.5645 28.5287 12.0569 28.8105 12.5663 29.0588L13.14 31.8938C13.2429 32.4117 13.5247 32.877 13.936 33.2081C14.3474 33.5392 14.8621 33.7152 15.39 33.705H20.7C21.228 33.7152 21.7427 33.5392 22.154 33.2081C22.5654 32.877 22.8472 32.4117 22.95 31.8938L23.5238 29.0588C24.0369 28.8106 24.5329 28.5287 25.0088 28.215L27.7313 29.1375C27.9636 29.2139 28.2068 29.2519 28.4513 29.25C28.8458 29.2496 29.2334 29.1455 29.575 28.948C29.9166 28.7506 30.2002 28.4667 30.3975 28.125L32.9625 23.625C33.2251 23.1739 33.3227 22.6455 33.2386 22.1304C33.1544 21.6153 32.8938 21.1454 32.5013 20.8013L30.375 18.855ZM28.3613 27L24.5025 25.695C23.5992 26.4602 22.5669 27.0582 21.4538 27.4613L20.655 31.5H15.345L14.5463 27.5063C13.442 27.0918 12.4152 26.4947 11.5088 25.74L7.63879 27L4.98379 22.5L8.04379 19.8C7.83577 18.6355 7.83577 17.4433 8.04379 16.2788L4.98379 13.5L7.63879 9.00003L11.4975 10.305C12.4008 9.53991 13.4332 8.94182 14.5463 8.53878L15.345 4.50003H20.655L21.4538 8.49378C22.5581 8.90826 23.5849 9.50532 24.4913 10.26L28.3613 9.00003L31.0163 13.5L27.9563 16.2C28.1643 17.3646 28.1643 18.5567 27.9563 19.7213L31.0163 22.5L28.3613 27Z" fill="white"/>
 <path d="M18 24.75C16.665 24.75 15.3599 24.3541 14.2499 23.6124C13.1399 22.8707 12.2747 21.8165 11.7638 20.5831C11.2529 19.3497 11.1193 17.9925 11.3797 16.6831C11.6402 15.3738 12.283 14.171 13.227 13.227C14.171 12.283 15.3738 11.6402 16.6831 11.3797C17.9925 11.1193 19.3497 11.2529 20.5831 11.7638C21.8165 12.2747 22.8707 13.1399 23.6124 14.2499C24.3541 15.3599 24.75 16.665 24.75 18C24.759 18.8889 24.5906 19.7707 24.2546 20.5938C23.9186 21.4168 23.4217 22.1645 22.7931 22.7931C22.1645 23.4217 21.4168 23.9186 20.5938 24.2546C19.7707 24.5906 18.8889 24.759 18 24.75ZM18 13.5C17.4053 13.4861 16.8139 13.5931 16.2617 13.8143C15.7094 14.0356 15.2078 14.3665 14.7872 14.7872C14.3665 15.2078 14.0356 15.7094 13.8143 16.2617C13.5931 16.8139 13.4861 17.4053 13.5 18C13.4861 18.5947 13.5931 19.1861 13.8143 19.7383C14.0356 20.2906 14.3665 20.7922 14.7872 21.2128C15.2078 21.6335 15.7094 21.9644 16.2617 22.1857C16.8139 22.4069 17.4053 22.5139 18 22.5C18.5947 22.5139 19.1861 22.4069 19.7383 22.1857C20.2906 21.9644 20.7922 21.6335 21.2128 21.2128C21.6335 20.7922 21.9644 20.2906 22.1857 19.7383C22.4069 19.1861 22.5139 18.5947 22.5 18C22.5139 17.4053 22.4069 16.8139 22.1857 16.2617C21.9644 15.7094 21.6335 15.2078 21.2128 14.7872C20.7922 14.3665 20.2906 14.0356 19.7383 13.8143C19.1861 13.5931 18.5947 13.4861 18 13.5Z" fill="white"/>
 </svg>
    </button>
 </header>
 <main>
    <div class="logo-name">
       <img src="../assets/image/logo.png" alt="logo-name">
    </div>
    <div class="buttons">
       <button class="artict"> Artist quiz</button><br>
       <button class="picture"> Pictures quiz</button>
    </div>
 </main>
 <footer>
    <div class="info">
       <div class="rss"><img src="../assets/svg/rss_logo.svg" alt="logo rss"></div>
    <div class="github"><a href="https://github.com/lost-fox">App developer: Lost Fox</a></div>
    <div class="year">2021</div>
    </div>
    
 </footer>
    `;
  const buttonCategoryes = document.querySelectorAll(".buttons button");
  const setting = document.querySelector(".setting");
  setting.addEventListener("click", drawSetting);

  const openQuiz = function () {
    setInLS("nameCategory", this.classList.value);
    drawCategoryes();
  };

  for (let i = 0; i < buttonCategoryes.length; i++) {
    buttonCategoryes[i].setAttribute("data-index", i);
    buttonCategoryes[i].onclick = openQuiz;
  }
};

export { drawMainScreen };
