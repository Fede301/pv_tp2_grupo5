export const Actualizartxt = (txt, mostrar) => {
    const texto = txt.value;

    mostrar.textContent = texto;
    if (texto.length > 20) {
        mostrar.style.backgroundColor = "red";
    } else {
        mostrar.style.backgroundColor = "lightgray";
    }
};