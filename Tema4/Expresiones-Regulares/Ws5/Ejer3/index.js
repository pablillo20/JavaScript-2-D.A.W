
const u = document.getElementById("username");
const min = document.getElementById("minuscula");
const ma = document.getElementById("mayuscula");
const six = document.getElementById("seis");
const btn = document.getElementById("enviar");

const tieneMayuscula = /(?=.*[A-Z])/;
const tieneMinuscula = /(?=.*[a-z])/;
const tieneSeisCaracteres = /^.{6,}$/;

function validacion() {
    const usuario = u.value;

    if (tieneMinuscula.test(usuario)) {
        min.style.textDecoration = "line-through";
    } else {
        min.style.textDecoration = "none";
    }

    if (tieneMayuscula.test(usuario)) {
        ma.style.textDecoration = "line-through";
    } else {
        ma.style.textDecoration = "none";
    }

    if (tieneSeisCaracteres.test(usuario)) {
        six.style.textDecoration = "line-through";
    } else {
        six.style.textDecoration = "none";
    }


    if (tieneMayuscula.test(usuario) && tieneMinuscula.test(usuario) && tieneSeisCaracteres.test(usuario)) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

u.addEventListener("input", validacion);

