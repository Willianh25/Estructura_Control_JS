// Solicitamos la edad del usuario
let edad = prompt("Ingrese su edad");

//Se convierte la edad a número
edad = parseInt(edad);

//Se usa el condicional para cada edad
if (edad < 0) {
    console.log("Edad no válida");
} else if (edad >= 0 && edad <= 12) {
    console.log("Niño")
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolecente")
} else if (edad >= 18 && edad <= 59) {
    console.log("Adulto")
} else if (edad >= 60) {
    console.log("Adulto mayor")
}