function add(){

let numeros = parseInt(document.getElementById("contadorUsuario").innerHTML); 
numeros ++;
document.getElementById("contadorUsuario").innerHTML=numeros;

};

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
};

var user = 0;
var ordi = 0;
var contUser = parseInt(document.getElementById("contadorUsuario").innerHTML);
var contOrdi = parseInt(document.getElementById("contadorMaquina").innerHTML);
function juego(elemento)
{
       while (contUser < 3 && contOrdi < 3){
        user=0;
        ordi=0;      
     while(user===ordi){
            user=(elemento);
            ordi=aleatorio(0,2);
            if (user===0 && ordi===1){
             contOrdi++
            console.log("usuario" + contUser, "Ordi", contOrdi)}
             else if (user===0 && ordi===2){
             contUser++ 
             console.log("usuario" + contUser, "Ordi", contOrdi)}
                else if (user===1 && ordi===0){
                contUser++
                console.log("usuario" + contUser, "Ordi", contOrdi)}
                     else if (user===1 && ordi===2){
                     contOrdi++
                     console.log("usuario" + contUser, "Ordi", contOrdi)}
                        else if (user===2 && ordi===0){
                        contOrdi++
                        console.log("usuario" + contUser, "Ordi", contOrdi)}
                            else if(user===2 && ordi===1){contUser++
                                console.log("usuario" + contUser, "Ordi", contOrdi)}
            
        }document.getElementById("contadorUsuario").innerHTML = contUser;
        document.getElementById("contadorMaquina").innerHTML = contOrdi;
    }

};

var segundos = 5;
function temporizador() {
    document.getElementById("tiempo").innerHTML = segundos;
    if(segundos==0){
        alert("Has perdido un turno");
    }else{
        segundos--;
        //setTimeout("temporizador()",1000);
    }
};

export {add, juego, temporizador}