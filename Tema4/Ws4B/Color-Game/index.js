window.onload = () => {
    let cuadrados = document.getElementsByClassName("cuadrado");
    let titulo = document.getElementById("h1");
    let nuevoColor = document.getElementById("cambioColor");
    let BotonEasy = document.getElementById("easy");
    let BotonHard = document.getElementById("hard");

    nuevoColor.addEventListener("click", () => {
        iniciarJuego();
        if (modo == 2){
            vidas = 3;
        }else if (modo == 1){
            vidas = Infinity;
        }
    });

    BotonHard.addEventListener("click", () => {
        console.log("Estas en el modo dificil");
        modo = 2;
        vidas = 3;
    });

    BotonEasy.addEventListener("click", () => {
        console.log("Estas en el modo facil");
        modo = 1;
        vidas = Infinity;
    });

    IniciaEventos();
};

let vidas = 0;
var modo = 1;


function iniciarJuego() {
    generaTitulo();
    pintarCuadrados();
}

function generarColorRandom() {
    return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
    ];
}

function generaTitulo() {
    const color = generarColorRandom();
    const colorRGB = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    titulo.innerHTML = "color " + colorRGB;
    titulo.setAttribute("data-color", colorRGB);
}

function pintarCuadrados() {
    let cuadrados = document.getElementsByClassName("cuadrado");
    const colorTitulo = titulo.getAttribute("data-color");
    const posicionAleatoria = Math.floor(Math.random() * cuadrados.length);

    Array.from(cuadrados).forEach((cuadrado, posicion) => {
        let colorRGB;

        if (posicion === posicionAleatoria) {
            colorRGB = colorTitulo;
        } else {
            const color = generarColorRandom();
            colorRGB = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        }
        cuadrado.style.backgroundColor = colorRGB;
        cuadrado.style.opacity = "1";
    });
}

function IniciaEventos(){
    let cuadrados = document.getElementsByClassName("cuadrado");

    Array.from(cuadrados).forEach((cuadrado, posicion) => {
        cuadrado.addEventListener("click", () => {
            const colorTitulo = titulo.getAttribute("data-color");
            if (modo == 1) {
                if (cuadrado.style.backgroundColor === colorTitulo) {
                    console.log("¡Correcto! Este es el color");
                    iniciarJuego();
                } else {
                    console.log("Incorrecto, intenta de nuevo.");
                    cuadrado.style.opacity = "0";
                }
            } else if (modo == 2) {
                if (vidas > 0) {
                    if (cuadrado.style.backgroundColor === colorTitulo) {
                        console.log("¡Correcto! Este es el color");
                        iniciarJuego();
                    } else {
                        console.log("Incorrecto, intenta de nuevo.");
                        vidas--;
                        cuadrado.style.opacity = "0";
                    }if (vidas === 0) {
                        console.log("Juego perdido, seleccione el modo y a jugar");
                    }
                }
            }
        });
    });
}