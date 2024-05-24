import {add, juego, temporizador} from './script.js'
/*let addBoton = document.getElementById("0");
addBoton.addEventListener("click", add)*/

let tempBoton = document.getElementById("play");
tempBoton.addEventListener("click", temporizador)

let piedraBoton = document.getElementById("0");
piedraBoton.addEventListener("click", juego)
let papelBoton = document.getElementById("1");
papelBoton.addEventListener("click", juego)
let tijerasBoton = document.getElementById("2");
tijerasBoton.addEventListener("click", juego)