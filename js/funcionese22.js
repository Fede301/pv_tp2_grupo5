export const cambiartexto = () => {
    const textoinput = document.getElementById("texto");
    const parrafo = document.getElementById("p");

    parrafo.textContent = textoinput.value;
}
