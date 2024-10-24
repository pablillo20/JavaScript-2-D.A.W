
// VARIABLE GLOBAL NORMAL

var variable = 0;
document.write(variable);

// VARIABLE CONSTANTE

const constante = 1;
document.write(constante);

// CASO CONCRETO PARA USAR VARIABLE LOCAL LET:  BULCES FOR

//ParseInt, ParseFloat para que no sea cadena de texto

let valor = parseInt("102");
valor = valor + 1;
document.write(valor);

//Pedir cosas al usuario 

let v = prompt("Dame un numero");
valor = v + 1;
document.write(v);

// Consola

console.log(valor);

// Combinar prompt con parseInt

let b = parseInt(prompt("Dame un numero"));
valor = b + 1;
document.write(b);