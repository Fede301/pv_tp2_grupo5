export const mostrarSeleccion = (valor, contenedor) => {
    contenedor.innerHTML = `<p>Lenguaje elegido: <strong>${valor}</strong></p>`;  
    console.log(`Cambio detectado: El ususario eligio` + valor);
};
