let jugador = "X";
const celdas = document.querySelectorAll("td");

celdas.forEach((celda) => {
    celda.addEventListener("click", jugar);
});

function jugar(evento) {
    const celda = evento.target;
    if (celda.textContent === "") {
        celda.textContent = jugador;
        if (verificarGanador()) {
            alert("¡" + jugador + " gana!");
            reiniciar();
        } else if (empate()) {
            alert("¡Es un empate!");
            reiniciar();
        } else {
            jugador = jugador === "X" ? "O" : "X";
        }
    }
}

function verificarGanador() {
    if (
        (celdas[0].textContent === jugador && celdas[1].textContent === jugador && celdas[2].textContent === jugador) ||
        (celdas[3].textContent === jugador && celdas[4].textContent === jugador && celdas[5].textContent === jugador) ||
        (celdas[6].textContent === jugador && celdas[7].textContent === jugador && celdas[8].textContent === jugador) ||
        (celdas[0].textContent === jugador && celdas[3].textContent === jugador && celdas[6].textContent === jugador) ||
        (celdas[1].textContent === jugador && celdas[4].textContent === jugador && celdas[7].textContent === jugador) ||
        (celdas[2].textContent === jugador && celdas[5].textContent === jugador && celdas[8].textContent === jugador) ||
        (celdas[0].textContent === jugador && celdas[4].textContent === jugador && celdas[8].textContent === jugador) ||
        (celdas[2].textContent === jugador && celdas[4].textContent === jugador && celdas[6].textContent === jugador)
    ) {
        return true;
    }
    return false;
}

function empate() {
    for (let i = 0; i < celdas.length; i++) {
        if (celdas[i].textContent === "") {
            return false;
        }
    }
    return true;
}


function reiniciar() {
    celdas.forEach((celda) => (celda.textContent = ""));
    jugador = "X";
}
