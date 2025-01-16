window.onload = () => {
    crearTabla();
}

function crearTabla() {
    let tabla = $("<table>", { "border": 1, "id": "tabla" });
    for (let i = 1; i <= 8; i++) {
        let fila = $("<tr>").text("Fila " + i);
        tabla.append(fila);
    }
    $("body").append(tabla);

    $('tr:gt(2)').css("background-color", "red");
    $('tr:lt(2)').css("background-color", "blue");
}

