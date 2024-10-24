function imprimeEnConsola(error){
    console.log(error);
}

function orden(letraA, letraB){
    //let resultado =0;
    if(letraA>letraB){
        return 1;
        //resultado =1;
    }else if(letraB> letraA){
        return -1;
        //resultado =-1;
    }else{
        return 0;
        //resultado =0;
    }

    //return resultado

}

var resultado = orden("jose" , "francisco");

//Recursivas

function recursiva(n){

    if(n>0){
        recursiva(n-1);
    }
    console.log("acaba la funcion");
}

recursiva(4);

function factorial(n){
    if(n===1)
        return 1;
    else
        return n*factorial(n-1);
}

