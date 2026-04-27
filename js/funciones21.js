export const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "Ecuador": "Quito",
    "Peru": "Lima",
    "Uruguay": "Montevideo",
    "Venezuela": "Caracas",
    "Paraguay": "Asunción",
    "Bolivia": "La Paz",
    "Mexico": "Ciudad de México",
    "Costa Rica": "San José",
    "Panama": "Ciudad de Panamá",
    "Nicaragua": "Managua",
    "Guatemala": "Ciudad de Guatemala",
    "Honduras": "Tegucigalpa",
    "El Salvador": "San Salvador",
};
export function obtenerCapital(pais) {
    return paisesCapitales[pais];
}
export function logseleccion(pais,capital) {
    console.log(`La capital de ${pais} es ${capital}`);
}