import * as flsFunctions from "./modules/functions.js";
import {openMenu, dropMenu} from "./files/menu.js";
import {scrollTop} from "./files/scroll.js";

flsFunctions.isWebp();

openMenu();

dropMenu();

const scrollBtn = document.getElementById('topBtn');
scrollBtn.addEventListener('click', () => scrollTop(0));