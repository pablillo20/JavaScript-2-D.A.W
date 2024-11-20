

// Ejercicio 1

for(let i = 1; i < 11; i++){
    document.write(i + "<hr>");
}

// Ejercicio 2

let numero = parseInt(prompt("Indica un numero"));

for(let i = numero; i<101;i++){
    document.write(i + "<br>");
}

// Ejercicio 3

var num;

do{
    num = parseInt(prompt("Indica un numero"));  
}while(num != 0);

// Ejercicio 4

var frase = " ";

do{
    frase = prompt("Indica el texto");
    if(frase != "salir"){
        document.write(frase);
    }
}while(frase != "salir");

// Ejercicio 5

let sumaTotal = 0;

for(let i = 1; i < 11; i++){
    let nume = parseInt(prompt("Indica el numero " + i));
    sumaTotal += nume;
}

document.write("La suma da un resultado de " + sumaTotal );

// Ejercicio 6

var tabla = parseInt(prompt("Indica el numero que desea multimplicar"));

for (let i = 0; i < 11 ;i++){
    document.write("<br>" + tabla + " * " + i + " = " + tabla * i);
}

// Ejercicio 7

let adivina;
numero1 = parseInt(prompt("Indica el numero "));

do{
    adivina = parseInt(prompt("Adivina el numero"));
    if (numero1 > adivina){
        document.write("El numero que ha puesto es menor ")
    }else{
        document.write("El numero es mayor");
    }

}while(adivina != numero1);



