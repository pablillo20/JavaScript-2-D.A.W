const validacionColor = /^[a-zA-Z\s]+$/;
const validacionTamano = /^\d+(px|em|rem|%)$/;

const saludo = document.getElementById("saludo");
const cerrarSesion = document.getElementById("cerrarSesion");
const configurarEstilo = document.getElementById("configurarEstilo");
const estilos = document.getElementById("estilos");

const crearCookie = (nombre, valor, minutos) => {
    let expiracion = "";
    if (minutos) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (minutos * 60 * 1000));
        expiracion = "; expires=" + fecha.toUTCString();
    }
    document.cookie = `${nombre}=${valor}${expiracion}; path=/`;
}

const leerCookie = nombre => {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(nombreEQ)) {
            return cookie.substring(nombreEQ.length);
        }
    }
    return null;
}

const borrarCookie = nombre => crearCookie(nombre, "", -1);

const solicitarNombre = () => {
    const nombreUsuario = prompt("Por favor, introduce tu nombre:");
    if (nombreUsuario) {
        crearCookie("nombreUsuario", nombreUsuario, 5);
        mostrarSaludo(nombreUsuario);
    }
}

const mostrarSaludo = nombreUsuario => {
    saludo.textContent = `¡Hola, ${nombreUsuario}!`;
}

const configurarEstiloUsuario = () => {
    const colorFondo = prompt("Introduce el color de fondo:");
    const colorTexto = prompt("Introduce el color del texto:");
    const tamanoLetra = prompt("Introduce el tamaño de la letra (por ejemplo, '16px'):");

    if (validacionColor.test(colorFondo) && validacionColor.test(colorTexto) && validacionTamano.test(tamanoLetra)) {
        estilos.innerHTML = `body { background-color: ${colorFondo}; color: ${colorTexto}; font-size: ${tamanoLetra}; }`;

        crearCookie("colorFondo", colorFondo);
        crearCookie("colorTexto", colorTexto);
        crearCookie("tamanoLetra", tamanoLetra);
    } else {
        alert("Por favor, introduce valores válidos para color y tamaño de letra.");
    }
}

const aplicarEstiloGuardado = () => {
    const colorFondo = leerCookie("colorFondo");
    const colorTexto = leerCookie("colorTexto");
    const tamanoLetra = leerCookie("tamanoLetra");

    if (colorFondo && colorTexto && tamanoLetra) {
        estilos.innerHTML = `body { background-color: ${colorFondo}; color: ${colorTexto}; font-size: ${tamanoLetra}; }`;
    }
}

window.onload = () => {
    const nombreUsuario = leerCookie("nombreUsuario");
    if (nombreUsuario) {
        mostrarSaludo(nombreUsuario);
    } else {
        solicitarNombre();
    }
    aplicarEstiloGuardado();
};

cerrarSesion.addEventListener("click", () => {
    borrarCookie("nombreUsuario");
    location.reload();
});

configurarEstilo.addEventListener("click", configurarEstiloUsuario);
