let playAudio = new Audio();
playAudio.src = ('./sound.mp3');

function closeGame(){
    let closeGame = window.close();
    let cerrar = document.getElementsByClassName('fa-solid fa-xmark')
}
// //ON

window.addEventListener('load', function() {
    var audio = new Audio('game-music-loop-3-144252.mp3'); // Un archivo de sonido más corto
    audio.loop = true; //para que suene en bucle
    audio.play().then(function() {
        console.log("El sonido se está reproduciendo.");
    }).catch(function(error) {
        console.error("Error al reproducir el sonido:", error);
    });
});

function soundOn() {
    // localStorage.setItem("favn1", "<a href='/details/title'><img src='https://images.unsplash.com/photo-1659560893497-bb094425bd21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80'></a>");
    boton_add = document.getElementById("add");
    boton_add.style.display = "none";
    boton_remove = document.getElementById("remove");
    boton_remove.style.display = "block";
}

function soundOff() {
    // localStorage.removeItem("favn1");
    boton_remove = document.getElementById("remove");
    boton_remove.style.display = "none";   
    boton_add = document.getElementById("add");
    boton_add.style.display = "block";

  }


function exit (){
    confirm("¿Quieres salir?")
}

if (exit == true){
    closeGame()
} else{
    console.log("No se cierra el juego")
}

