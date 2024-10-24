// Ejercicio 1

var c = new Date();

document.write(c.getFullYear());
document.write("<br>");
document.write(c.getMonth());
document.write("<br>");
document.write(c.getDate());
document.write("<br>");
document.write(c.getHours());
document.write("<br>");
document.write(c.getMinutes());
document.write("<br>");
document.write(c.getSeconds());
document.write("<br>");

// Ejercicio 2
document.write("<br>");

var fechaHoy = new Date();
document.write(fechaHoy.toDateString());

document.write("<br>");


var fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate()+85);
document.write(fecha85.toDateString());

document.write("<br>");


var fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate()-187);
document.write(fecha187.toDateString());

document.write("<br>");


fecha85.setFullYear(fecha85.getFullYear()+2);
document.write(fecha85.toDateString());

document.write("<br>");


fecha187.setHours(fecha187.getHours()-24);
document.write(fecha187.toDateString());

document.write("<br>");


var fechaResto = new Date(fecha85-fecha187);
document.write(fechaResto.toDateString());

document.write("<br>");



// Ejercicio 3 y 4
document.write("<br>");


var segundo =  60;
function miFuncion(){
  document.open();
  document.write(segundo);
  document.close();
    segundo--;
    if (segundo <= 0) {
      clearInterval(intervalo);
      document.write("Tiempo terminado");
    }
    if(segundo == 0 ){
      window.open('http://www.google.es');
    }
}


var intervalo = setInterval(miFuncion, 1000);

// Ejercicio 5


function mostrarHora(){
  var reloj = new Date();
  var horas = reloj.getHours();
  var min = reloj.getMinutes();
  var segundo = reloj.getSeconds();

  // Asegurar que los minutos y segundos tengan dos dígitos
  if (min < 10) {
      min = "0" + min;
  }
  if (segundo < 10) {
      segundo = "0" + segundo;
  }

  document.open();
  document.write(horas + " : " + min + " : " + segundo);
  document.close();
}

setInterval(mostrarHora, 1000); 
