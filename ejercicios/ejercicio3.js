"use strict";

const {generarDecimalAleatorio, generarEnteroAleatorio}=require("../utilities/randomUtilities");


const calcularPerimetro=(lado)=>{
    const perimetro=3*lado;
    return perimetro;
}

const calcularArea=(lado)=>{
    const area=Math.sqrt(3)/4 *  Math.pow(lado,2);
    return area;
}

const imprimirMensaje=(lado,perimetro,area)=>{
    console.log(`el area del triangulo con lado ${lado} es ${area.toFixed(4)}`)
    console.log(`el perimetro del triangulo con lado ${lado} es ${perimetro}`)
}

const min=1;
const max=100;

const lado=generarEnteroAleatorio(min,max);

const area=calcularArea(lado);
const perimetro=calcularPerimetro(lado);

imprimirMensaje(lado,perimetro,area);