
let nombres = ["jose", "rosa", "paco"];

// Opcion A
function pintaNombres(n){
    console.log(n);
}

nombres.forEach(pintaNombres);

// Arrow : Equivalente a lo anterior sin crear funciones
nombres.forEach(n=>console.log(n));

// Opcion B

for(nom of nombres){
    console.log(nom);
}

// Ordenar los numeros

let numeros = [1,7,9,2];

console.log(numeros.sort((num1,num2)=> num1-num2));

