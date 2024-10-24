// CONDICIONALES

// Ejercicio 1

var a = parseInt(prompt("Indica un numero"));

if(!(a % 2)){
    document.write("Es un numero par");
} else{
    document.write("Es un numero impar");
}

// Ejercicio 2

var edad = parseInt(prompt("Indica tu edad"));

if(edad< 18){
    document.write("Es menor de edad");
} else{
    document.write("Es mayor de edad")
}

// Ejercicio 3

var e = parseInt(prompt("Indica tu edad"));
var l = prompt("Indica tu locaclidad");

if(e === 25 && l =="Madrid"){
    document.write("Enhorabuena");
} else{
    document.write("")
}

// Ejercicio 4

var numero = parseInt(prompt("Indica un numero"));

if(numero > 100){
    numero = numero * 0.9;

} else{
    document.write("No se aplica descuento")
}

document.write("El precio se queda en " + numero);

// Ejercicio 5

let nombre = prompt("Por favor, introduce tu nombre:");

if (nombre === "Pablo" || nombre === "Eduardo") {
    document.write("¡Bienvenido!");
} else if (nombre === "Ana" || nombre === "Clara") {
    document.write("¡Bienvenida!");
} else {
    document.write("Lo siento, no reconozco ese nombre.");
}

// Ejercicio 6

let ciudad = prompt("¿Dónde vives?");
let años = parseInt(prompt("¿Cuál es tu edad?"));

if (ciudad === "Madrid" && años >= 18 && años <= 30) {
    document.write("Puedes acceder al carnet de empresarios emprendedores.");
} else {
    document.write("No cumples con los requisitos para acceder al carnet.");
}