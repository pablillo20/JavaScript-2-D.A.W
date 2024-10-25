let figura = document.getElementById('miImagen');
let isDragging = false; // Estado de arrastre
let shiftX, shiftY; // Desplazamiento

figura.onmousedown = function(event) {
    isDragging = true; // Iniciar arrastre
    shiftX = event.clientX - figura.getBoundingClientRect().left;
    shiftY = event.clientY - figura.getBoundingClientRect().top;

    figura.style.position = 'absolute';
    figura.style.zIndex = 1000; // Asegurar que la imagen esté encima de otros elementos

    // Mover la imagen mientras arrastras
    document.addEventListener('mousemove', moveAt);

    // Al soltar el botón del ratón
    document.addEventListener('mouseup', function onMouseUp() {
        isDragging = false; // Detener arrastre
        document.removeEventListener('mousemove', moveAt); // Eliminar el evento mousemove
        document.removeEventListener('mouseup', onMouseUp); // Limpiar el manejador
    });

    // Evitar el comportamiento predeterminado de arrastre
    figura.ondragstart = function() {
        return false; // Prevenir el comportamiento por defecto
    };
};

// Función para mover la imagen
function moveAt(event) {
    figura.style.left = event.pageX - shiftX + 'px';
    figura.style.top = event.pageY - shiftY + 'px';
}