// Switch

// Ejercicio 1

let mes = prompt("Introduce el nombre de un mes:");

switch (mes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        document.write("El mes de " + mes + " tiene 31 días.");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        document.write("El mes de " + mes + " tiene 30 días.");
        break;
    case "febrero":
        document.write("El mes de " + mes + " tiene 28 o 29 días.");
        break;
    default:
        document.write("Mes no válido.");
}

// Ejercicio 2

let numero = parseInt(prompt("Introduce un número:"));

let esPar = (numero % 2 === 0);
let esMultiploDeTres = (numero % 3 === 0);
let esMultiploDeCinco = (numero % 5 === 0);

document.write("El número " + numero + " es ");

switch (true) {
    case esPar:
        document.write("par. ");
        break;
    default:
        document.write("impar. ");
}

switch (true) {
    case esMultiploDeTres:
        document.write("Es múltiplo de 3. ");
        break;
    default:
        document.write("No es múltiplo de 3. ");
}

switch (true) {
    case esMultiploDeCinco:
        document.write("Es múltiplo de 5.");
        break;
    default:
        document.write("No es múltiplo de 5.");
}


// Ejercicio 3

let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación (+, -, *, /):");

let resultado;

switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            document.write("No se puede dividir entre cero.");
        }
        break;
    default:
        document.write("Operación no válida.");
}

if (resultado !== undefined) {
    document.write("El resultado es: " + resultado);
}
