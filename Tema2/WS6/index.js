// Ejercicio 2
// c
console.log(`Número de imágenes en la página: ${document.images.length}`);

// d
// Selecciona la primera imagen en la página
const primeraImagen = document.images[0];

// Verifica si la primera imagen tiene un ID y lo muestra en la consola
if (primeraImagen) {
    if (primeraImagen.id) {
        console.log(`El ID de la primera imagen es: ${primeraImagen.id}`);
    } else {
        console.log('La primera imagen no tiene ID.');
    }
} else {
    console.log('No se encontró ninguna imagen en la página.');
}

// e
// Contar el número de enlaces en la página
const numeroDeEnlaces = document.querySelectorAll('a').length;
console.log(`Número total de enlaces en la página: ${numeroDeEnlaces}`);

// f
// Cambiar el título del documento
document.title = "Pablo Rubio";


