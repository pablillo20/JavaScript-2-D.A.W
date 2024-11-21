let jugador1 = document.getElementById('jugador1');
let jugador2 = document.getElementById('jugador2');
let pelota = document.getElementById('pelota');
let pantalla = document.getElementById('pantalla');
let marcador = document.getElementById('marcador');

// Posiciones iniciales
let posicionY1 = parseInt(jugador1.getAttribute("y"));
let posicionY2 = parseInt(jugador2.getAttribute("y"));
let pelotaX = parseInt(pelota.getAttribute("cx"));
let pelotaY = parseInt(pelota.getAttribute("cy"));
let r = parseInt(pelota.getAttribute("r"));

// Velocidad pelota
let velocidadX = 5;
let velocidadY = 5;

// Límites
const limiteYArriba = 0;
const limiteYAbajo = parseInt(pantalla.getAttribute("height"));
const limiteXIzquierda = parseInt(jugador1.getAttribute("x"));
const limiteXDerecha = parseInt(jugador2.getAttribute("x")) + parseInt(jugador2.getAttribute("width"));

// Velocidad jugadores
const velocidad = 10;

// Características de los jugadores
const alturaJugador = parseInt(jugador1.getAttribute("height"));
const margenColisionJugador1 = parseInt(jugador1.getAttribute("width"));
const margenColisionJugador2 = parseInt(jugador2.getAttribute("width"));

let juegoIniciado = false;
let golesJugador1 = 0;
let golesJugador2 = 0;

// Inicia el juego
document.getElementById('Iniciar').addEventListener('click', () => {
    document.getElementById('Iniciar').style.display = 'none';
    juegoIniciado = true;
    lanzarPelota();
});

// Movimiento de jugadores
document.addEventListener("keydown", (e) => {
    if (!juegoIniciado) return;

    // Movimiento del Jugador 2
    if (e.key === "ArrowDown") {
        if (posicionY2 + alturaJugador < limiteYAbajo) {
            posicionY2 += velocidad;
            jugador2.setAttribute("y", posicionY2);
        }
    }
    else if (e.key === "ArrowUp") {
        if (posicionY2 > limiteYArriba) {
            posicionY2 -= velocidad;
            jugador2.setAttribute("y", posicionY2);
        }
    }

    // Movimiento del Jugador 1
    if (e.key === "s" || e.key === "S") {
        if (posicionY1 + alturaJugador < limiteYAbajo) {
            posicionY1 += velocidad;
            jugador1.setAttribute("y", posicionY1);
        }
    }
    else if (e.key === "w" || e.key === "W") {
        if (posicionY1 > limiteYArriba) {
            posicionY1 -= velocidad;
            jugador1.setAttribute("y", posicionY1);
        }
    }
});

// Movimiento pelota
function lanzarPelota() {
    setInterval(() => {
        if (!juegoIniciado) return;

        // Actualizar la posición de la pelota
        pelotaX += velocidadX;
        pelotaY += velocidadY;

        // Rebote en las paredes
        if (pelotaY <= limiteYArriba + r || pelotaY >= limiteYAbajo - r) {
            velocidadY = -velocidadY;
        }

        // Colisión con el Jugador 1
        if (pelotaX <= limiteXIzquierda + r && pelotaY >= posicionY1 && pelotaY <= posicionY1 + alturaJugador) {
            velocidadX++;
            velocidadY++;
            velocidadX = -velocidadX;
        }

        // Colisión con el Jugador 2
        if (pelotaX >= limiteXDerecha - r && pelotaY >= posicionY2 && pelotaY <= posicionY2 + alturaJugador) {
            velocidadX++;
            velocidadY++;
            velocidadX = -velocidadX;
        }

        // Reinicio de la pelota y marcar goles
        if (pelotaX <= limiteXIzquierda - 55) {
            golesJugador2++;
            actualizarMarcador();
            resetPelota();
        }

        if (pelotaX >= limiteXDerecha + 48) {
            golesJugador1++;
            actualizarMarcador();
            resetPelota();
        }

        pelota.setAttribute('cx', pelotaX);
        pelota.setAttribute('cy', pelotaY);

    }, 1000 / 60);
}

// Función para actualizar el marcador en la pantalla
function actualizarMarcador() {
    marcador.textContent = `Jugador 1: ${golesJugador1} | Jugador 2: ${golesJugador2}`;
}

// Función para reiniciar la pelota
function resetPelota() {
    pelotaX = parseInt(pantalla.getAttribute("width")) / 2;
    pelotaY = parseInt(pantalla.getAttribute("height")) / 2;
    velocidadY = 5;
    velocidadX = 5;
    velocidadX = -velocidadX;
}
