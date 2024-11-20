let jugador1 = document.getElementById('jugador1');
let jugador2 = document.getElementById('jugador2');
let pelota = document.getElementById('pelota');

// Posiciones iniciales
let posicionY1 = 250;
let posicionY2 = 482;
let pelotaX = 739;
let pelotaY = 344;

let velocidadX = 5;
let velocidadY = 5;

const limiteYAbajo = 500;
const limiteYArriba = 40;
const limiteXIzquierda = 40;
const limiteXDerecha = 1438;

const velocidad = 10;


const posicionX1 = 100;
const posicionX2 = 1378;

const alturaJugador = 232;

const margenColisionJugador1 = 20;
const margenColisionJugador2 = 20;

let juegoIniciado = false;

document.getElementById('Iniciar').addEventListener('click', () => {
    document.getElementById('Iniciar').style.display = 'none';
    juegoIniciado = true;
    lanzarPelota();
});

document.addEventListener("keydown", (e) => {
    if (!juegoIniciado) return;

    // Movimiento del Jugador 2
    if (e.key === "ArrowDown") {
        if (posicionY2 + 50 < limiteYAbajo) {
            posicionY2 += velocidad;
            jugador2.setAttribute("y1", posicionY2);
            jugador2.setAttribute("y2", posicionY2 + alturaJugador);
        }
    }
    else if (e.key === "ArrowUp") {
        if (posicionY2 - velocidad > limiteYArriba) {
            posicionY2 -= velocidad;
            jugador2.setAttribute("y1", posicionY2);
            jugador2.setAttribute("y2", posicionY2 + alturaJugador);
        }
    }

    // Movimiento del Jugador 1
    if (e.key === "s" || e.key === "S") {
        if (posicionY1 + 50 < limiteYAbajo) {
            posicionY1 += velocidad;
            jugador1.setAttribute("y1", posicionY1);
            jugador1.setAttribute("y2", posicionY1 + alturaJugador);
        }
    }
    else if (e.key === "w" || e.key === "W") {
        if (posicionY1 - velocidad > limiteYArriba) {
            posicionY1 -= velocidad;
            jugador1.setAttribute("y1", posicionY1);
            jugador1.setAttribute("y2", posicionY1 + alturaJugador);
        }
    }
});

function lanzarPelota() {
    setInterval(() => {
        if (!juegoIniciado) return;

        pelotaX += velocidadX;
        pelotaY += velocidadY;

        // Rebote en las paredes
        if (pelotaY <= limiteYArriba + 40 || pelotaY >= limiteYAbajo + 150) {
            velocidadY = -velocidadY;
        }

        // Colisión con el Jugador 1
        if (pelotaX <= posicionX1 + margenColisionJugador1 && pelotaX >= posicionX1 - margenColisionJugador1 &&
            pelotaY >= posicionY1 && pelotaY <= posicionY1 + alturaJugador) {
            velocidadX = -velocidadX;
        }

        // Colisión con el Jugador 2
        if (pelotaX >= posicionX2 - margenColisionJugador2 && pelotaX <= posicionX2 + margenColisionJugador2 &&
            pelotaY >= posicionY2 && pelotaY <= posicionY2 + alturaJugador) {
            velocidadX = -velocidadX;
        }

        if (pelotaX <= limiteXIzquierda || pelotaX >= limiteXDerecha) {
            pelotaX = 739;
            pelotaY = 344;
            velocidadX = -velocidadX;
        }

        pelota.setAttribute('cx', pelotaX);
        pelota.setAttribute('cy', pelotaY);

    }, 1000 / 60);
}
