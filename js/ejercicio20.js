const mostrarDatos = () =>{
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;

    // console.log(`Nombre: ${nombre} | Apellido: ${apellido} | Libreta: ${libreta}`);
    alert(`Datos ingresados\n==================\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}\n==================`);
}

document.querySelector("#enviar").addEventListener('click', mostrarDatos);