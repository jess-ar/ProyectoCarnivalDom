function randoms(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
};

var opciones = ["piedra", "papel", "tijeras"]; //0=piedra, 1=papel, 2=tijeras
var ordi;
var contUser = parseInt(document.getElementById("scoreUser").innerHTML);
var contOrdi = parseInt(document.getElementById("scoreComputer").innerHTML);

function game(opUsuario){
    let opcionUsuario = opUsuario;
    ordi=randoms(0,2);
    if(contUser < 2 && contOrdi < 2){
    if (opcionUsuario !== ordi){
    if(opcionUsuario == 0 && ordi == 2){    //el usuario escogió piedra 

    contUser++
    document.getElementById("scoreUser").innerHTML = contUser;
    document.getElementById('effect').innerHTML ='<h1>¡Ganaste la vuelta!</h1> La maquina eligio '+ opciones[ordi];
    counter();
}

       else if(opcionUsuario == 1 && ordi == 0){    //el usuario escogió papel
        contUser++
        document.getElementById("scoreUser").innerHTML = contUser;
        document.getElementById('effect').innerHTML ='<h1>¡Ganaste la vuelta!</h1> La maquina eligio '+ opciones[ordi];
        counter();
}

        else if(opcionUsuario == 2 && ordi == 1){    //el usuario escogió tijeras
            contUser++
            document.getElementById("scoreUser").innerHTML = contUser;
            document.getElementById('effect').innerHTML ='<h1>¡Ganaste la vuelta!</h1> La maquina eligio '+ opciones[ordi];
            counter();
        }
        else{contOrdi++
            document.getElementById("scoreComputer").innerHTML = contOrdi;
            document.getElementById('effect').innerHTML ='<h1>¡Perdiste!</h1> La maquina eligio '+ opciones[ordi];
            counter(); 
        }
    }
    else{
            document.getElementById('effect').innerHTML ="<h1>¡Empate!</h1> Ambos eligieron "+ opciones[ordi];
    }

}
document.getElementById('effect').style.display = "";
}

function removeEffect() {
    document.getElementById('effect').style.display = "none";
}

//*timer*//

let timeLeft = 5;
const timeDisplay = document.getElementById('time');
const timerContainer = document.querySelector('.start');
let countdown;

const startTimer = () => {
    updateTimeDisplay();
    timerContainer.classList.remove('hidden'); 

    timeLeft-=1

    if (timeLeft<0) {
        hideTimer();
        score();
        counter();
        timeLeft = 5;
        clearInterval(countdown)
    
    }

};

const score = () => {
    contOrdi++
        document.getElementById("scoreComputer").innerHTML = contOrdi;      
    
}

const hideTimer = () => {
    timerContainer.classList.add('hidden'); 
};

const updateTimeDisplay = () => {
    timeDisplay.textContent = timeLeft;
    timeDisplay.classList.add(`color-${timeLeft}`);
};

const startCount = () => {
    countdown = setInterval (startTimer, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    startCount();

    document.body.addEventListener('click', (event) => {
        if (event.target.closest('.selector')) {
            hideTimer();
            startCount();
        }
    });
});

function reset() {
    contUser=0;
    document.getElementById("scoreUser").innerHTML = contUser;
    contOrdi=0;
    document.getElementById("scoreComputer").innerHTML = contOrdi
}

function counter(){
        if (contUser == 2 ) {
        document.getElementById('effect').innerHTML ="<h1>¡GANASTE!</h1>" + "Puntaje Ordenador: " + contOrdi + "<br></br>" + "Tu puntaje es: " + contUser + "<br></br>" + "Has click para volver a jugar";
        reset();  
    }
    else if (contOrdi == 2 ) {
        document.getElementById('effect').innerHTML ="<h1>¡PERDISTE!</h1>" +"Puntaje Ordenador: " + contOrdi + "<br></br>" + "Tu puntaje es: " + contUser + "<br></br>" + "Has click para volver a jugar";
        reset();  
    }    
}


export {game, removeEffect, startTimer, hideTimer, reset}