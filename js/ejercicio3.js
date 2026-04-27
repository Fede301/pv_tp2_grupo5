const calcularVolumenEsfera = (radio) => {
    const volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    console.log(`El volumen de una esfera con radio ${radio}m es: ${volumen.toFixed(2)} m³`);
};
calcularVolumenEsfera(4);