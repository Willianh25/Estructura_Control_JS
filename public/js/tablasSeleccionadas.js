//Pedir al usuario que elija que tabla desea ver
let tipo = prompt("¿Qué tablas quieres ver? Escribe 'pares' o 'impares':");

if (tipo === "pares" || tipo === "impares") {
    for (let numero = 1; numero <= 10; numero++) {
        if (tipo === "pares" && numero % 2 === 0) {
            console.log("Tabla del " + numero);
            for (let i = 1; i<= 10; i++) {
                console.log(numero + " x " + i + " = " + (numero * i));
            }
            console.log("---------------");
        }else if (tipo === "impares" && numero % 2 !== 0){
            console.log("Table del " + numero);
            for (let i = 1; i <= 10; i++) {
                console.log(numero + " x " + i + " = " + (numero * i));
            }
            console.log("---------------");
        }
    }
} else {
    console.log("Opcion no validad. Debes ecribir 'pares' o 'impares'.");
}