import{Actualizartxt} from "./funciones23.js"

const txt = document.getElementById('txtEsc');
const mostrar = document.getElementById('txtMost');

txt.addEventListener("input", () => {
    Actualizartxt(txt, mostrar);
});