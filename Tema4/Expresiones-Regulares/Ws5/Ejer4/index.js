const validacionNombre = /^[a-zA-Z\s]{2,30}$/;
const validacionTelefono = /^\d{3}-\d{3}-\d{3}$/;
const validacionCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validacionContrasena = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmar-contrasena");
const formulario = document.querySelector("form");

function validarNombre() {
    if (!validacionNombre.test(nombre.value)) {
        nombre.style.borderColor = "red";
        return false;
    } else {
        nombre.style.borderColor = "green";
        return true;
    }
}

function validarApellido() {
    if (!validacionNombre.test(apellido.value)) {
        apellido.style.borderColor = "red";
        return false;
    } else {
        apellido.style.borderColor = "green";
        return true;
    }
}

function validarTelefono() {
    if (!validacionTelefono.test(telefono.value)) {
        telefono.style.borderColor = "red";
        return false;
    } else {
        telefono.style.borderColor = "green";
        return true;
    }
}

function validarCorreo() {
    if (!validacionCorreo.test(correo.value)) {
        correo.style.borderColor = "red";
        return false;
    } else {
        correo.style.borderColor = "green";
        return true;
    }
}

function validarContrasena() {
    if (!validacionContrasena.test(contrasena.value)) {
        contrasena.style.borderColor = "red";
        return false;
    } else {
        contrasena.style.borderColor = "green";
        return true;
    }
}

function validarConfirmarContrasena() {
    if (contrasena.value !== confirmarContrasena.value || confirmarContrasena.value === "") {
        confirmarContrasena.style.borderColor = "red";
        return false;
    } else {
        confirmarContrasena.style.borderColor = "green";
        return true;
    }
}

function validarFormulario(event) {
    const esNombreValido = validarNombre();
    const esApellidoValido = validarApellido();
    const esTelefonoValido = validarTelefono();
    const esCorreoValido = validarCorreo();
    const esContrasenaValida = validarContrasena();
    const esConfirmacionContrasenaValida = validarConfirmarContrasena();

    if (!esNombreValido || !esApellidoValido || !esTelefonoValido || !esCorreoValido || !esContrasenaValida || !esConfirmacionContrasenaValida) {
        event.preventDefault();
    }
}


nombre.addEventListener("blur", validarNombre);
apellido.addEventListener("blur", validarApellido);
telefono.addEventListener("blur", validarTelefono);
correo.addEventListener("blur", validarCorreo);
contrasena.addEventListener("blur", validarContrasena);
confirmarContrasena.addEventListener("blur", validarConfirmarContrasena);

formulario.addEventListener("submit", validarFormulario);
