window.onload = () => {
    let cero = document.getElementById("btn0");
    let uno = document.getElementById("btn1");
    let dos = document.getElementById("btn2");
    let tres = document.getElementById("btn3");
    let cuatro = document.getElementById("btn4");
    let cinco = document.getElementById("btn5");
    let seis = document.getElementById("btn6");
    let siete = document.getElementById("btn7");
    let ocho = document.getElementById("btn8");
    let nueve = document.getElementById("btn9");
    let sumar = document.getElementById("sumar");
    let restar = document.getElementById("restar");
    let multiplicar = document.getElementById("multiplicar");
    let dividir = document.getElementById("dividir");
    let igual = document.getElementById("igual");
    let resultado = document.getElementById("resultado");
    let c = document.getElementById("btnC");
    let previa = document.getElementById("previa");

    var num1 = 0;
    var num2 = 0;
    var result;
    var operacion;

    c.addEventListener("click", () => {
        resultado.innerText = ""; num1 = 0; num2 = 0;
        previa.innerText = "";
    });
    cero.addEventListener("click", () => {
        resultado.innerText += "0";
        previa.innerText +="0";
    });
    uno.addEventListener("click", () => { resultado.innerText += "1";
        previa.innerText +="1";
    });
    dos.addEventListener("click", () => { resultado.innerText += "2";
        previa.innerText +="2";
    });
    tres.addEventListener("click", () => { resultado.innerText += "3";
        previa.innerText +="3";
    });
    cuatro.addEventListener("click", () => { resultado.innerText += "4";
        previa.innerText +="4";
    });
    cinco.addEventListener("click", () => { resultado.innerText += "5";
        previa.innerText +="5";
    });
    seis.addEventListener("click", () => { resultado.innerText += "6";
        previa.innerText +="6";
    });
    siete.addEventListener("click", () => { resultado.innerText += "7";
        previa.innerText +="7";
    });
    ocho.addEventListener("click", () => { resultado.innerText += "8";
        previa.innerText +="8";
    });
    nueve.addEventListener("click", () => { resultado.innerText += "9";
        previa.innerText +="9";
    });

    sumar.addEventListener("click", () => {
        num1 = parseInt(resultado.innerText);
        resultado.innerText = "";
        previa.innerText +="+";
        operacion = "suma";
    });
    restar.addEventListener("click", () => {
        num1 = parseInt(resultado.innerText);
        previa.innerText +="-";
        resultado.innerText = "";
        operacion = "resta";
    });
    multiplicar.addEventListener("click", () => {
        num1 = parseInt(resultado.innerText);
        previa.innerText +="x";
        resultado.innerText = "";
        operacion = "multiplicacion";
    });
    dividir.addEventListener("click", () => {
        num1 = parseInt(resultado.innerText);
        previa.innerText +="/";
        resultado.innerText = "";
        operacion = "division";
    });

    igual.addEventListener("click", () => {
        num2 = parseInt(resultado.innerText);
        previa.innerText +="=";
        switch (operacion) {
            case 'suma':
                result = num1 + num2;
                break;
            case 'resta':
                result = num1 - num2;
                break;
            case 'multiplicacion':
                result = num1 * num2;
                break;
            case 'division':
                result = num1 / num2;
                break;
        }
        resultado.innerText = result;
        previa.innerText +=result;
    });
}
