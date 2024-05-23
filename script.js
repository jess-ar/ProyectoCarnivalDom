function add(){

let numeros = parseInt(document.getElementById("contadorUsuario").innerHTML); 
numeros ++;
document.getElementById("contadorUsuario").innerHTML=numeros;

}
function juego()
{
    let user=0;
    let ordi=0;
    let contUser=0;
    let contOrdi=0;
    while(contUser <3 && contOrdi<3){
        user=0;
        ordi=0;
        while(user===ordi){
            user=parseInt(document.getElementById("number").innerHTML)
        }

    }

}
var segundos = 5;
function temporizador() {
    document.getElementById("tiempo").innerHTML = segundos;
    if(segundos==0){
        alert("Has perdido un turno");
    }else{
        segundos--;
        setTimeout("temporizador()",1000);
    }
}

export {add, juego, temporizador}