function validarMayuscula(texto) {
    return /[A-Z]/.test(texto);
}


function validarCaracteresEspeciales(texto) {
    return /[!@#$%^&]/.test(texto);
}

function validarCorreo(correo) {
    return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(correo);
}


function validarTarjetaCredito(tarjeta) {
    return /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(tarjeta);
}


function validarLongitud(texto) {
    return texto.length >= 8;
}


function validarNumero(texto) {
    return /\d/.test(texto);
}


console.log(validarMayuscula("Hola"));
console.log(validarCaracteresEspeciales("Hola!"));
console.log(validarCorreo("correo@example.com"));
console.log(validarTarjetaCredito("1234-5678-9876-5432"));
console.log(validarLongitud("abcdefgh"));
console.log(validarNumero("abc123"));