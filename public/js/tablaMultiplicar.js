// Pedir al usuario que ingrese un número
let numero = prompt("Escriba un número para ver su tabla de Multiplicar: ");

//Se convierte a número entero
numero = parseInt(numero);

//Se verifica si el numero es valido
if (!isNaN(numero)) {
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
} else {
    console.log("No es un número válido");
}