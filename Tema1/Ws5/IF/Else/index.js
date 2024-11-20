
// IF / ELSE

// Ejercicio 1

let nombre = prompt("¿Cuál es tu nombre?");
let apellidos = prompt("¿Cuáles son tus apellidos?");

if (nombre === "Ricardo") {
    console.log(apellidos);
} else {
    document.write(apellidos);
}

// Ejercicio 2

let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 67) {
    document.write("Puedes jubilarte.");
} else {
    document.write("No puedes jubilarte todavía.");
}

// Ejercicio 3 

let edadEstudiante = parseInt(prompt("¿Cuál es tu edad?"));

if (edadEstudiante < 5) {
    document.write("Debes estar en el jardín de infancia.");
} else if (edadEstudiante >= 6 && edadEstudiante <= 11) {
    document.write("Debes estar en primaria.");
} else if (edadEstudiante >= 12 && edadEstudiante <= 16) {
    document.write("Debes estar en la ESO.");
} else if (edadEstudiante >= 17 && edadEstudiante <= 21) {
    document.write("Debes estar en Bachillerato o Ciclos.");
} else {
    document.write("Debes estar en la universidad.");
}

// Ejercicio 4

let numeroHermanos = parseInt(prompt("¿Cuántos hermanos tienes?"));
let cantidad = parseFloat(prompt("Introduce una cantidad:"));

let descuento;

if (numeroHermanos > 3) {
    descuento = 0.15; // 15% de descuento
} else if (numeroHermanos > 0) {
    descuento = 0.05; // 5% de descuento
} else {
    descuento = 0; // Sin descuento
}

let cantidadFinal = cantidad * (1 - descuento);
document.write("La cantidad final es: " + cantidadFinal.toFixed(2));

// Ejercicio 5 

let examen1 = parseFloat(prompt("Nota del primer examen:"));
let examen2 = parseFloat(prompt("Nota del segundo examen:"));
let trabajo1 = parseFloat(prompt("Nota del primer trabajo:"));
let trabajo2 = parseFloat(prompt("Nota del segundo trabajo:"));

let mediaExamenes = (examen1 + examen2) / 2;
let mediaTrabajos = (trabajo1 + trabajo2) / 2;

let mediaFinal = mediaExamenes * 0.75 + mediaTrabajos * 0.25;

if (mediaFinal > 5 && mediaExamenes >= 4.5 && mediaTrabajos >= 4.5) {
    document.write("Aprobaste la asignatura. Media: " + mediaFinal);
} else {
    document.write("No aprobaste la asignatura. Media: " + mediaFinal);
}
