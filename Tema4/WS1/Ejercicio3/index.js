// Iniciar la tabla con estilo en línea para los bordes
document.write('<table style="border-collapse: collapse;">');

// Bucle para generar las filas y celdas sin contenido, con bordes negros
for (let i = 0; i < 100; i++) {
    document.write('<tr>'); // Iniciar una fila
    for (let j = 0; j < 100; j++) {
        // Añadir una celda con bordes en línea y el evento 'onmouseover' para pintar
        document.write('<td style="border: 1px solid black; width: 10px; height: 10px;" onmouseover="pintarCelda(event)"></td>');
    }
    document.write('</tr>'); // Cerrar la fila
}

document.write('</table>');

// Crear variables para las teclas
let control = false;
let shift = false;

// Saber si estamos pulsando la tecla
document.addEventListener("keydown", function (event) {
    if (event.key === "Control") {
        control = true;
    }
    if (event.key === "Shift") {
        shift = true;
    }
});

// Saber si hemos soltado la tecla
document.addEventListener("keyup", function (event) {
    if (event.key === "Control") {
        control = false;
    }
    if (event.key === "Shift") {
        shift = false;
    }
});

// Pintar celdas
function pintarCelda(event) {
    const celda = event.target;
    if (control) {
        celda.style.backgroundColor = "red"; // Pintar de rojo si Ctrl está presionado
    } else if (shift) {
        celda.style.backgroundColor = "blue"; // Pintar de azul si Shift está presionado
    }
}
