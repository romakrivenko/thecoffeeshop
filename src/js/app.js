import * as flsFunctions from "./modules/functions.js";
import {openMenu, dropMenu, scrollFunction} from "./files/menu.js";
import {scrollTop} from "./files/scroll.js";

flsFunctions.isWebp();

openMenu();

dropMenu();

const scrollBtn = document.getElementById('topBtn');
scrollBtn.addEventListener('click', () => scrollTop(0));

window.onscroll = function() {scrollFunction()};