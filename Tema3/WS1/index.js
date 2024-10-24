
// Ejercicio 2

function lanzamiento(){
    cara = Math.random()*6+1;
    return Math.round(cara);
}
console.log(lanzamiento());

// Ejercicio 3

function lanzamientoMejorado(){
    uno = 0;
    dos = 0;
    tres = 0;
    cuatro = 0;
    cinco = 0;
    seis = 0;
    for(i = 0; i <=6000;i++){
        lanzamientos = Math.random()*6+1;
        lanzamientos = Math.trunc(lanzamientos);
        if (lanzamientos === 1){
            uno++;
        }else if (lanzamientos === 2){
            dos++;
        }else if(lanzamientos === 3){
            tres++;
        }else if (lanzamientos === 4){
            cuatro++;
        }else if (lanzamientos === 5){
            cinco++;
        }else{
            seis++;
        }
    }

    return "El numero 1 ha salido " + uno + " el numero 2 ha salido " + dos + " el numero 3 ha salido " + tres + " el 4 ha salido " + cuatro + " el 5 ha salido " + cinco + " el 6 ha salido " + seis;

}

console.log(lanzamientoMejorado());

// Ejercicio 6

function potencia(base, exponente) {

    if (exponente === 0) {
        return 1;
    }

    else {
        return base * potencia(base, exponente - 1);
    }
}


console.log(potencia(2, 3));

// Ejercicio 7

function factorial(n){
        if(n===1)
            return 1;
        else
            return n*factorial(n-1);
}

