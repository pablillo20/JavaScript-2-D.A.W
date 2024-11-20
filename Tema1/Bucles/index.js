
// FOR

let nombre = prompt("Dime tu nombre");

   // Acceder a posicion del nombre

document.write(nombre[0]);

for(let i = 0; (i < nombre.length)  && (nombre!= "jesus") ;i++){
    document.write("<p>" + nombre[i] + "</p>");
}


// DO WHILE

do{
    document.write("Hola jose ")
}while(nombre== "jose");

// FOR OF (valores de la array)

const arr = [3,5,7];

for (let i of arr){
    document.write(i + "<br>");
}

// FOR IN (posiciones de array)

for ( let i in arr){
    document.write(i + " <br>");
}