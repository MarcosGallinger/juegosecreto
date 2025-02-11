let numeroAleatorio = 0;
let Parrafo = document.querySelector('p');
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMax = 10;


Parrafo.innerHTML = 'Indique un número del 1 al 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if (numeroUsuario === numeroAleatorio) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acerto
        if (numeroUsuario > numeroAleatorio){
            asignarTextoElemento('p','ingrese un número menor');
        } else {
            if (numeroUsuario < numeroAleatorio){
                asignarTextoElemento('p','Ingrese un número mayor');
            }
        }
    }
    
    intentos++;
    limpiarCaja();
    return;
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Elegi un numero del 1 al 100');
    numeroAleatorio = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else
         if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    
}


condicionesIniciales();