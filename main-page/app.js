let playAudio = new Audio();
playAudio.src = ('./sound.mp3');

function closeGame(){
    let closeGame = window.close();
    let cerrar = document.getElementsByClassName('fa-solid fa-xmark')
}

document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo objeto Audio
    var audio = new Audio('game-music-loop-3-144252.mp3');
    
    // Reproducir el sonido
    audio.play().catch(function(error) {
        console.error("Error al reproducir el sonido:", error);
    });
});