import *  as funciones from './funcionese22.js'
const textoinput = document.getElementById("texto");
const parrafo = document.getElementById("p");

textoinput.addEventListener("input", () => {
    funciones.cambiartexto();
});
