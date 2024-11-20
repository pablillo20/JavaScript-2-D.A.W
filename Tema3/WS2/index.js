
// Ejercicio 5

let ejemplo= [1,2,3,4,5,6,7,8,9,10];
let ejemplo0 = [1,2,3,4,5,6,7,8,9,10];


function paresImpares(){
    let array = [];
    let aleatorios;
    for (let i = 0 ; i < 100;i++){
        aleatorios = (Math.random() * 1000) + 1;
        aleatorios = Math.trunc(aleatorios);
        array[i] = aleatorios;
    }
    console.log(array);

    const resultado = [
        ...array.filter(num => num % 2 === 0),
        ...array.filter(num =>num % 2 !=0)
    ]
    return resultado;
}
console.log(paresImpares());

// Ejercicio 7

function Array0 (array){
    for(let i = 0; i < 10 ; i++){
        array[i] = 0;
    }
    return console.log(array);
}

Array0(ejemplo0);

function Array1 (array){
    for(let i = 0; i < array.length;i++){
        array[i] += 1;
    }
    return console.log(array);
}

Array1(ejemplo);

const espacios = array => array.join(" ");

console.log(espacios(ejemplo));

// Ejercicio 8 y 9

let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let numLanzamientos = 36000;

// Simular los lanzamientos
for (let i = 0; i < numLanzamientos; i++) {
    // Lanzar dos dados
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let suma = dado1 + dado2;

    // Contar la suma en el array
    counts[suma]++;
}

console.log("Resultados de los lanzamientos:");
for (let i = 2; i <= 12; i++) {
    console.log("Suma " + i + ": " + counts[i] + " veces");
}


