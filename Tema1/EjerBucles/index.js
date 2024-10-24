
// Ejercicio 1

let n = parseInt(prompt("Indica los numeros a contar"));

for(let i = 1; i<= n;i++){
    document.write(i + " ");
}

// Ejercicio 2

let a = parseInt(prompt("Indica los numeros a contar"));
document.write("<br>");
for(let i = 1; i<= a;i= i+2){
    document.write(i + " ");
}

// Ejercicio 3

let b = parseInt(prompt("Indica los numeros a contar"));
document.write("<br>");
for(let i = b; i>=1;i--){
    document.write(i + " ");
}

// Ejercicio 4

for(let i = 0; i <=10;i++){
    console.log("Tabla del 9")
    console.log("9 * "+ i + "= " + 9*i);
}

// Ejercicio 5

let numeroIngresado = prompt("Por favor, ingresa un número:");

while (!/^\d+$/.test(numeroIngresado)) {
    numeroIngresado = prompt("Entrada inválida. Por favor, ingresa solo números:");
}

let suma = 0;
for (let i = 0; i < numeroIngresado.length; i++) {
    suma += parseInt(numeroIngresado[i]);
}

console.log(`La suma de los dígitos del número ${numeroIngresado} es: ${suma}`);

// Ejercicio 6

let x = parseInt(prompt("Indica el primer numero"));
let f = parseInt(prompt("Indica el segundo numero"));

let sumar = 0;

for(let i = x; i <=f;i++){
    if((i % 2) == 0){
        sumar += i;
    }
}

document.write ("La suma de los pares es : " + sumar);

// Ejercicio 7

let t = parseInt(prompt("Indica los N primeros numeros"));

let sumatoria = 0;

for(let i = 0; i<=t;i++){
    sumatoria +=i;
}
document.write("La sumatoria de los numeros es " + sumatoria);

// Ejercicio 8

