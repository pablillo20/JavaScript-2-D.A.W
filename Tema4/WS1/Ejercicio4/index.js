// Iniciar la tabla con estilo en línea para los bordes
document.write('<table style="border-collapse: collapse;">');

// Bucle para generar las filas y celdas sin contenido, con bordes negros
for (let i = 0; i < 100; i++) {
    document.write('<tr>'); // Iniciar una fila
    for (let j = 0; j < 100; j++) {
        // Añadir una celda con bordes en línea
        document.write('<td style="border: 1px solid black; width: 10px; height: 10px;></td>');
    }
    document.write('</tr>'); // Cerrar la fila
}

document.write('</table>');

let listaTD = document.getElementsByTagName("td");

for (let celda of listaTD){
   celda.addEventListener("mouseover",pintarCelda);
}

// Pintar celdas
function pintarCelda(event) {
    if (event.altKey) {
        event.preventDefault(); // Evitar el menú contextual
        event.stopPropagation();
        event.target.style.backgroundColor = "white"; // Borrar color de la celda con clic derecho
    } else if (event.ctrlKey) {
        event.target.style.backgroundColor = "red"; // Pintar de rojo si Ctrl está presionado
    } else if (event.shiftKey) {
        event.target.style.backgroundColor = "blue"; // Pintar de azul si Shift está presionado
    }
}
