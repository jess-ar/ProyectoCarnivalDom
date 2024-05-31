function closeGame(){
    let closeGame = window.close();
    let cerrar = document.getElementsByClassName('fa-solid fa-xmark')
}

// musica
let progress = document.getElementById("progress")
let music = document.getElementById('music')
let ctrlIcon = document.getElementById('ctrlIcon')

music.onloadeddata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
}
function playPause(){
    if(music.paused){
        music.play();
        ctrlIcon.classList.remove('fa-solid fa-volume-high')
        ctrlIcon.classList.add('fa-solid fa-volume-off')
    }else{
        music.pause();
        ctrlIcon.classList.remove('fa-solid fa-volume-off')
        ctrlIcon.classList.add('fa-solid fa-volume-high')
    }
}
music.addEventListener('timeupdate', function(){
    progress.value = music.currentTime;
})    
progress.oninput = function(){
    music.currentTime = progress.value;
    if(music.paused){
        music.play();
        ctrlIcon.classList.remove('fa-solid fa-volume-high')
        ctrlIcon.classList.add('fa-solid fa-volume-off')
    }
}
// fin musica

function exit (){
    confirm("¿Quieres salir?")
}

if (exit == true){
    closeGame()
} else{
    console.log("No se cierra el juego")
}

