let edades=[25,30,22,28,24,27,34,60], suma=0, promedio;
for(let i=0; i<edades.length; i++){
    console.log(edades[i]);
    suma += edades[i];
}
promedio = (suma/edades.length);
console.log(`Promedio de las edades: ${promedio}`);