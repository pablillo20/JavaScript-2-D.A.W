$(document).ready(function () {
    $("td").filter(function () {
        return $(this).text().trim() === ""; // Filtrar las celdas vacías
    }).css("background-color", "yellow"); // Pintar el fondo de amarillo
});