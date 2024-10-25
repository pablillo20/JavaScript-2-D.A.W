// Selecciona todas las imágenes
let imagenes = document.getElementsByTagName("img");

// Convierte la colección HTML a un array
Array.from(imagenes).forEach(function (imagen) {
    let movimiento = false;
    let desplazamientoX = 0;
    let desplazamientoY = 0;

    // Establece la posición de la imagen como absoluta
    imagen.style.position = "absolute";

    // Agrega el evento mousedown
    imagen.addEventListener("mousedown", (e) => {
        movimiento = true;
        desplazamientoX = e.clientX - imagen.offsetLeft;
        desplazamientoY = e.clientY - imagen.offsetTop;
    });

    // Agrega el evento mousemove a todo el documento
    document.addEventListener("mousemove", (e) => {
        if (movimiento) {
            imagen.style.left = (e.clientX - desplazamientoX) + 'px';
            imagen.style.top = (e.clientY - desplazamientoY) + 'px';
        }
    });

    // Agrega el evento mouseup
    imagen.addEventListener("mouseup", () => movimiento = false);

    // Previene el comportamiento de arrastre por defecto
    imagen.ondragstart = function () {
        return false;
    };
});
