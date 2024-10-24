// Ejercicio 1

function invierteCadena(cad_arg) {
    let cadenaInvertida = "";
    for (let i = cad_arg.length - 1; i >= 0; i--) {
        cadenaInvertida += cad_arg[i];
    }
    return cadenaInvertida;
}


document.write(invierteCadena("Jose"));

document.write("<br>");

function inviertePalabras(cad_arg){
    let palabraInvertida = "";
    let palabra = cad_arg.split(" ");
    for(let i = 0; i<palabra.length;i++){
        palabraInvertida += invierteCadena(palabra[i] + " ");
    }
    return palabraInvertida;
}

document.write(inviertePalabras("Hola Españoles"));

document.write("<br>");

function encuentraPalabraMasLarga(cad_arg){
    let palabras = cad_arg.split(" ");
    let larga = "";
    for(let i = 0; i<palabras.length;i++){
        if (palabras[i].length > larga.length) {
            larga = palabras[i];
        }
    }
    return larga;
}

document.write(encuentraPalabraMasLarga("El esternocleidomastoideo es de color azul"));

document.write("<br>");

function filtrPalabrasMasLargas(cad_arg,digitos){
    let p = cad_arg.split(" ");
    let filtro = 0;
    for(let i = 0; i <p.length;i++){
        if(p[i].length > digitos){
            filtro++;
        }
    }
    return filtro;
}

document.write(filtrPalabrasMasLargas("Palabrademasdediezdigitos y otra con menos de diez, otra palaba con dieciochomil digitos", 5));

document.write("<br>");

function cadenaBienFormada(cad_arg) {
    let a = cad_arg.split(" ");  
    for (let i = 0; i < a.length; i++) {  
        if (i === 0) {
            let primera = a[i].charAt(0);  // Obtiene la primera letra
            let resto = a[i].slice(1);      // Obtiene el resto de la palabra
            a[i] = primera.toUpperCase() + resto.toLowerCase(); 
        } else {
            a[i] = a[i].toLowerCase(); // Todas las demás palabras en minúsculas
        }
    }
    return a.join(" ");  // Reunir las palabras nuevamente en una cadena
}

// Ejemplo de uso:
console.log(cadenaBienFormada("hOLA mUNDo")); 

// Ejercicio 2

function detectarTamaño(cad) {
    if (cad === cad.toUpperCase()) {
        return "La cadena está en mayúsculas";
    } else if (cad === cad.toLowerCase()) {
        return "La cadena está en minúsculas";
    } else {
        return "La cadena contiene ambas mayúsculas y minúsculas";
    }
}

document.write(detectarTamaño("HOLA MUNDO")); 


// Ejercicio 7

document.write("<br>");

function esPalindromo(cadena) {
    let cadenaFormateada = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    let cadenaInvertida = cadenaFormateada.split('').reverse().join('');

    return cadenaFormateada === cadenaInvertida;
}

document.write(esPalindromo("ANA")); 

// Ejercicio 9





