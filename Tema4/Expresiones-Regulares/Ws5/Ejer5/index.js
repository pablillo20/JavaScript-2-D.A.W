const validacionNumeroTarjeta = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
const validacionTitular = /^[a-zA-Z\s]{2,30}$/;
const validacionCVV = /^\d{3,4}$/;

const numeroTarjeta = document.getElementById("numero-tarjeta");
const titularTarjeta = document.getElementById("titular-tarjeta");
const mesVencimiento = document.getElementById("mes-vencimiento");
const añoVencimiento = document.getElementById("año-vencimiento");
const cvv = document.getElementById("cvv");
const formulario = document.getElementById("formulario");

const numero = document.getElementById("num");
const nombre = document.getElementById("nom");
const vencimiento = document.getElementById("ven");

function validarNumeroTarjeta() {
    if (!validacionNumeroTarjeta.test(numeroTarjeta.value)) {
        numeroTarjeta.style.borderColor = "red";
        numero.innerText = "#### #### #### ####";

        return false;
    } else {
        numeroTarjeta.style.borderColor = "green";
        numero.innerText = numeroTarjeta.value;
        return true;
    }
}

function validarTitular() {
    if (!validacionTitular.test(titularTarjeta.value)) {
        titularTarjeta.style.borderColor = "red";
        nombre.innerText = "Nombre Completo";
        return false;
    } else {
        titularTarjeta.style.borderColor = "green";
        nombre.innerText = titularTarjeta.value;
        return true;
    }
}

function validarVencimiento() {
    if (mesVencimiento.value === "" || añoVencimiento.value === "") {
        mesVencimiento.style.borderColor = "red";
        añoVencimiento.style.borderColor = "red";
        vencimiento.innerText = "MM";
        vencimiento.innerText += "/AA";
        return false;
    } else {
        mesVencimiento.style.borderColor = "green";
        añoVencimiento.style.borderColor = "green";
        vencimiento.innerText = mesVencimiento.value;
        vencimiento.innerText += "/" + añoVencimiento.value;

        return true;
    }
}

function validarCVV() {
    if (!validacionCVV.test(cvv.value)) {
        cvv.style.borderColor = "red";
        return false;
    } else {
        cvv.style.borderColor = "green";
        return true;
    }
}

function validarFormulario(event) {
    const esNumeroTarjetaValido = validarNumeroTarjeta();
    const esTitularValido = validarTitular();
    const esVencimientoValido = validarVencimiento();
    const esCVVValido = validarCVV();

    if (!esNumeroTarjetaValido || !esTitularValido || !esVencimientoValido || !esCVVValido) {
        event.preventDefault();
    }
}



numeroTarjeta.addEventListener("blur", validarNumeroTarjeta);
titularTarjeta.addEventListener("blur", validarTitular);
mesVencimiento.addEventListener("change", validarVencimiento);
añoVencimiento.addEventListener("change", validarVencimiento);
cvv.addEventListener("blur", validarCVV);

formulario.addEventListener("submit", validarFormulario);