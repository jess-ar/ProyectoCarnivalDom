import { game, removeEffect} from './script.js'

/*let tempBoton = document.getElementById("play");
tempBoton.addEventListener("click", timmer)*/

let piedraButton = document.getElementById("0");
piedraButton.addEventListener("click", function(){game(0)})
let papelButton = document.getElementById("1");
papelButton.addEventListener("click", function(){game(1)})
let tijerasButton = document.getElementById("2");
tijerasButton.addEventListener("click", function(){game(2)})

let tiButton=document.getElementById("effect")
tiButton.addEventListener("click", removeEffect);