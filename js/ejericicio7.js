let nombres=["Nati","Juan","Maria","Pedro","Ana","Luis"], longitud=0, nombreLargo;
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    if(longitud < nombres[i].length){
        longitud = nombres[i].length;
        nombreLargo = nombres[i];
    }
}

console.log(`El nombre más largo es: ${nombreLargo}`)
