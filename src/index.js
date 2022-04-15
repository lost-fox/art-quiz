import '../css/style.css';
import { drawMainScreen } from "./conponents/mainScreen";
import { setInLS } from './utils/setInLS';
import { getFromLS } from './utils/getFromLS';
import { getDataToGit } from './utils/getDataToGit';

const index = document.querySelector("body");
let scoreUser = [];

let data = null;

async function dataToGit() {
 data = await getDataToGit();
  }

if (getFromLS("scoreUser")) {
   scoreUser = JSON.parse(getFromLS("scoreUser"));
 }
 if(getFromLS('timerGame') == ''){
    setInLS("timerGame", 20); 
 }
 
 if(getFromLS('volumeofBackground') == ''){
   setInLS("volumeofBackground", 50); 
 }

drawMainScreen();

export {index, scoreUser, data, dataToGit}