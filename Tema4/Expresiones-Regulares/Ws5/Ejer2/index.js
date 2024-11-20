const letras = /^[a-zA-Z]+$/;
const correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const dni = /^\d{8}[A-Za-z]$/;
const telefono = /^\d{9}$/;
const usuario =/\w{8,}[a-zA-Z]+\d+/ ;


const Enombre = document.getElementById("errorN");
const Eapellidos = document.getElementById("errorA");
const Edni = document.getElementById("errorD");
const Etelefono = document.getElementById("errorT");
const Ecorreo = document.getElementById("errorE");
const Eusuario = document.getElementById("errorU");


const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const dniInput = document.getElementById("dni");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const usuarioInput = document.getElementById("usuario");
const formulario = document.getElementById("formularioRegistro");


function validarNombre() {
    if (!letras.test(nombre.value)) {
        nombre.style.borderColor = "red";
        Enombre.innerText = "El nombre solo puede tener letras"
        return false;
    } else {
        nombre.style.borderColor = "green";
        Enombre.innerText = "";
        return true;
    }
}

function validarApellidos() {
    if (!letras.test(apellidos.value)) {
        apellidos.style.borderColor = "red";
        Eapellidos.innerText = "El apellido solo puede tener letras";
        return false;
    } else {
        apellidos.style.borderColor = "green";
        Eapellidos.innerText = "";
        return true;
    }
}

function validarDNI() {
    if (!dni.test(dniInput.value)) {
        dniInput.style.borderColor = "red";
        Edni.innerText = "Formato de DNI Invalido";
        return false;
    } else {
        dniInput.style.borderColor = "green";
        Edni.innerText = " ";
        return true;
    }
}

function validarTelefono() {
    if (!telefono.test(telefonoInput.value)) {
        telefonoInput.style.borderColor = "red";
        Etelefono.innerText = " Formato de Telefono invalido";
        return false;
    } else {
        telefonoInput.style.borderColor = "green";
        Etelefono.innerText = "";
        return true;
    }
}

function validarEmail() {
    if (!correo.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        Ecorreo.innerText = "Formato de correo no valido";
        return false;
    } else {
        emailInput.style.borderColor = "green";
        Ecorreo.innerText= "";
        return true;
    }
}

function validarUsuario() {
    if (!usuario.test(usuarioInput.value)) {
        usuarioInput.style.borderColor = "red";
        Eusuario.innerText = "Formato de usuario incorrecto"
        return false;
    } else {
        usuarioInput.style.borderColor = "green";
        Eusuario.innerText = "";
        return true;
    }
}

function validarFormulario(event) {
    const esNombreValido = validarNombre();
    const esApellidosValido = validarApellidos();
    const esDniValido = validarDNI();
    const esTelefonoValido = validarTelefono();
    const esEmailValido = validarEmail();
    const esUsuarioValido = validarUsuario();

    if (!esNombreValido || !esApellidosValido || !esDniValido || !esTelefonoValido || !esEmailValido || !esUsuarioValido) {
        event.preventDefault();
    }
}


nombre.addEventListener("blur", validarNombre);
apellidos.addEventListener("blur", validarApellidos);
dniInput.addEventListener("blur", validarDNI);
telefonoInput.addEventListener("blur", validarTelefono);
emailInput.addEventListener("blur", validarEmail);
usuarioInput.addEventListener("blur", validarUsuario);


formulario.addEventListener("submit", validarFormulario);