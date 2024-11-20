// Ejercicio 1

const sum = (num1,num2) => num1+num2;

// Ejercicio 2

const string = str => console.log(`the length of "${str}" is:`, str.length);

// Ejercicio 3

const stringLength = str => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly");

// Ejercicio 4

const stringNombre = (nombre) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

// Ejercicio 6

const presentacion = (name, age) => console.log("I am " + name + ", I am " + age + " years old");

presentacion("pablo",18);

// Ejercicio 7

const sumaArray = (array) => {
    let suma = 0;
    let num = 0;
    for (let i = 0; i <array.length;i++){
         num = array[i];
         suma +=num;
    }
    return suma;
}

let numbers = [1,3,6];

console.log(sumaArray(numbers));

// Ejercicio 8

let eye = "eye";

const fire =() => `bulls-`;

// Ejercicio 9

const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
