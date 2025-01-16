$(document).ready(function() {
    // Seleccionar párrafos que contengan "eu"
    const paragraphsWithEu = $("p:contains('eu')");
    
    // Resaltar los párrafos seleccionados (por ejemplo, cambiando el fondo)
    paragraphsWithEu.css("background-color", "yellow");
});