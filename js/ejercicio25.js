const cambiarColor = () => {
    const color1 = Math.floor(Math.random()*(255-1)+1);
    const color2 = Math.floor(Math.random()*(255-1)+1);
    const color3 = Math.floor(Math.random()*(255-1)+1);

    document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}

const boton=document.querySelector("#coloreante");
boton.addEventListener("click", cambiarColor);