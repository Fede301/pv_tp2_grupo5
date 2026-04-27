import { obtenerCapital, logseleccion } from "./funciones21.js";

const selectPais    = document.getElementById("selectPais");
const selectCapital = document.getElementById("selectCapital");

selectPais.addEventListener("change", function() {
    const pais = this.value;
    const capital = obtenerCapital(pais);
    selectCapital.value = capital;
    logseleccion(pais, capital);
});