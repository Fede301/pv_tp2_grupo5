import { mostrarSeleccion } from './funciones24.js';

const formulario = document.querySelector('#formLenguajes');
const visor = document.querySelector('#resultadoSeleccion');

formulario.addEventListener('change', (event) => {
    const valorSeleccionado = event.target.value;
    
    mostrarSeleccion(valorSeleccionado, visor);
});