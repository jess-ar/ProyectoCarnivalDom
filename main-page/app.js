let playAudio = new Audio();
playAudio.src = ('./sound.mp3');

function closeGame(){
    let closeGame = window.close();
    let cerrar = document.getElementsByClassName('fa-solid fa-xmark')
}
//sigue reproduciéndose SOLO cuando interactúas con la pág

window.addEventListener('load', function() {
    var audio = new Audio('game-music-loop-3-144252.mp3'); // Un archivo de sonido más corto
    audio.loop = true; //para que suene en bucle
    audio.play().then(function() {
        console.log("El sonido se está reproduciendo.");
    }).catch(function(error) {
        console.error("Error al reproducir el sonido:", error);
    });
});

// para parar la música (de momento no funciona)

document.getElementsByClassName('stopSound').addEventListener('click', function() { 
    var audio = document.getElementById('myAudio');
    audio.pause(); // Pausa el sonido
    audio.currentTime = 0; // Opcional: reinicia el sonido al principio
    console.log("El sonido se ha detenido.");
});

function exit (){
    confirm("¿Quieres salir?")
}

if (exit == true){
    closeGame()
} else{
    console.log("No se cierra el juego")
}
