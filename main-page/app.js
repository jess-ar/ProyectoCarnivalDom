function closeGame(){
    let closeGame = window.close();
    let cerrar = document.getElementsByClassName('fa-solid fa-xmark')
}

// music
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
        ctrlIcon.classList.remove('fa-volume-off')
        ctrlIcon.classList.add('fa-volume-high')
    }else{
        music.pause();
        ctrlIcon.classList.remove('fa-volume-high')
        ctrlIcon.classList.add('fa-volume-off')
    }
}
music.addEventListener('timeupdate', function(){
    progress.value = music.currentTime;
})    
progress.oninput = function(){
    music.currentTime = progress.value;
    if(music.paused){
        music.play();
        ctrlIcon.classList.remove('fa-volume-off')
        ctrlIcon.classList.add('fa-volume-high')
    }
}

const playAudio = document.getElementById('playAudio');


//exit
function exit (){
    confirm("¿Quieres salir?")
}

if (exit == true){
    closeGame()
} else{
    console.log("No se cierra el juego")
}

// let value = document.getElementById('searchInput').value;
// let nombre = document.getElementsByClassName('play')

function namePlayer(){
    var namePlayer= document.getElementById('searchInput').value;
    console.log(namePlayer)
}

