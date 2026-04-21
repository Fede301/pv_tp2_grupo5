let notas=[10, 1, 6, 7, 8, 9, 9, 10, 5, 3], aprobados=[], desaprobados=[], promedio, suma=0, aprobadosCantidad=0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        aprobados.push(notas[i]);
        aprobadosCantidad++;
    } else {
        desaprobados.push(notas[i]);
    }
    suma += notas[i];

    console.log(notas[i]);
}

promedio = suma / notas.length;

console.log(`Aprobados: ${aprobados}`);
console.log(`Desaprobados: ${desaprobados}`);
console.log(`Promedio de notas: ${promedio}`);
console.log(`Cantidad de aprobados: ${aprobadosCantidad}`);