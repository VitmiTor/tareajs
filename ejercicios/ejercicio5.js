"use strict";


let hola="hola"

let aloha="aloha"

let computadora="computadora"


const concat=(a,b,c)=>{
    let concatenacion=a + " " + b + " " + c + " " + "fin";
    return concatenacion; 
}

const imprimirMensaje=(mensaje)=>{
    console.log(mensaje)
}

const message=concat(hola,aloha,computadora);
imprimirMensaje(message);