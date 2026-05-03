import { cambiarTexto } from "./funciones19.js";

const boton = document.getElementById("cambioton");
const parrafo = document.getElementById("texto");
const texto = "Probando texto de Actividad 19 - TP 2, suerte.";

boton.addEventListener("click",() => {
    cambiarTexto(parrafo, texto);
});