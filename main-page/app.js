let playAudio = new Audio();
playAudio.src = ('./sound.mp3');

function closeGame(){
    let closeGame = window.close();
    let cerrar = document.getElementsByClassName('fa-solid fa-xmark')
}

window.addEventListener('load', function() {
    var audio = new Audio('game-music-loop-3-144252.mp3');
    audio.play().then(function() {
        console.log("El sonido se está reproduciendo.");
    }).catch(function(error) {
        console.error("Error al reproducir el sonido:", error);
    });
});