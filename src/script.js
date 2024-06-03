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
    console.log("SeleccionUsuario piedra:",opcionUsuario)
    console.log("SeleccionMaquina:",ordi)
    console.log("Usuario:",contUser)
    console.log("Maquina:",contOrdi)
    document.getElementById('effect').innerHTML ='<h1>¡Ganaste la vuelta!</h1> La maquina eligio '+ opciones[ordi];
}
       else if(opcionUsuario == 1 && ordi == 0){    //el usuario escogió papel
        contUser++
        document.getElementById("scoreUser").innerHTML = contUser;
        console.log("SeleccionUsuario papel:",opcionUsuario)
        console.log("SeleccionMaquina:",ordi)
        console.log("Usuario:",contUser)
        console.log("Maquina:",contOrdi)
        document.getElementById('effect').innerHTML ='<h1>¡Ganaste la vuelta!</h1> La maquina eligio '+ opciones[ordi];
    }
        else if(opcionUsuario == 2 && ordi == 1){    //el usuario escogió tijeras
            contUser++
            document.getElementById("scoreUser").innerHTML = contUser;
            console.log("SeleccionUsuario tijeras:",opcionUsuario)
            console.log("SeleccionMaquina:",ordi)
            console.log("Usuario:",contUser)
            console.log("Maquina:",contOrdi)
            document.getElementById('effect').innerHTML ='<h1>¡Ganaste la vuelta!</h1> La maquina eligio '+ opciones[ordi];
           }
           else{contOrdi++
            document.getElementById("scoreComputer").innerHTML = contOrdi;
            console.log("SeleccionUsuario:",opcionUsuario)
            console.log("SeleccionMaquina:",ordi)
            console.log("Usuario:",contUser)
            console.log("Maquina:",contOrdi)
            document.getElementById('effect').innerHTML ='<h1>¡Perdiste!</h1> La maquina eligio '+ opciones[ordi];
        }
    }
    else{
        console.log("SeleccionUsuario:",opcionUsuario)
        console.log("SeleccionMaquina:",ordi)
        window.alert("Empate!,vuelve a jugar!");
        console.log(opciones[ordi])
        document.getElementById('effect').innerHTML ="<h1>¡Empate!</h1> Ambos eligieron "+ opciones[ordi];
    }

} else{
   // window.alert("El juego ha terminado");
     var resultado = window.confirm('El juego ha terminado');
    if (resultado === true && contUser===2) {
        window.alert('Ganaste!!');
    }else { 
        window.alert('Has perdido');
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
        window.alert("Perdiste el turno");
        hideTimer();
        score();
        timeLeft = 5;
        clearInterval(countdown)
    
    }

    /*countdown = setInterval(() => {
        if (timeLeft <= 0) {
           //*window.alert("Perdiste el turno");
            hideTimer();
            
        } else {
            timeLeft -= 1;
            updateTimeDisplay();
        }
    }, 1000);
    console.log (timeLeft)*/
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

export {game, removeEffect, startTimer, hideTimer}