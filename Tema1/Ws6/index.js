
// Ejercicio 4.10

for(let i = 1; i < 7; i++){
    document.write("<h" + i + ">" + "Cabecera h" + i);
}

// Ejercicio 4.11

let columnas = parseInt(prompt("Indica el numero de columnas"));
let altura = parseInt(prompt("Indica la latura de la tabla"));
let anchura = parseInt(prompt("Indica la anchura de sus celdas"));

document.write('<table border = "1" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height=" '+ altura +'">');

for(let i = 0; i < columnas;i++){
    document.write('<td width = "' + anchura + '" >&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');

// Ejercicio 4.12

let col = parseInt(prompt("Indica el numero de columnas"));
let alt = parseInt(prompt("Indica la latura de la tabla"));
let an = parseInt(prompt("Indica la anchura de sus celdas"));

document.write('<table border = "1" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr height=" '+ alt +'">');

for(let i = 1; i <= col;i++){
    if((i%2) == 0){
        document.write('<td width = "' + an + '" bgcolor= "white" >&nbsp;</td>');
    }else{
        document.write('<td width = "' + an + '" bgcolor= "black" >&nbsp;</td>');
    }
    }

document.write('</tr>');
document.write('</table>');

// Ejercicio 4.13

let vueltas= 0;
let colum = parseInt(prompt("Indica el numero de columnas"));
let altu = parseInt(prompt("Indica la latura de la tabla"));
let anchu = parseInt(prompt("Indica la anchura de sus celdas"));

document.write('<table border = "1" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height=" '+ altu +'">');
    
while(vueltas < colum){
    document.write('<td width = "' + anchu + '" >&nbsp;</td>');
    vueltas++;
}

document.write('</tr>');
document.write('</table>');

// Ejercicio 4.14

let contador= 1;
let columna = parseInt(prompt("Indica el numero de columnas"));
let alturas = parseInt(prompt("Indica la latura de la tabla"));
let anchuras = parseInt(prompt("Indica la anchura de sus celdas"));

document.write('<table border = "1" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr height=" '+ alturas +'">');
    
while(contador <= columna){
    if((contador%2) == 0){
        document.write('<td width = "' + anchuras + '" bgcolor= "white" >&nbsp;</td>');
    }else{
        document.write('<td width = "' + anchuras + '" bgcolor= "black" >&nbsp;</td>');
    }
    contador++;
}

document.write('</tr>');
document.write('</table>');

// Ejercicio 4.17

for(let i = 0; i<=10;i++){
    document.write("<br>Tabla del " + i);
    for(let n = 0; n <=10 ; n++){
        document.write("<br>" + i + " * " + n + " = " + i*n );
    }
}

// Ejercicio 4.18

let n_c = parseInt(prompt("Indica el número de columnas"));
let n_f = parseInt(prompt("Indica el número de filas"));
let n_a = parseInt(prompt("Indica el alto"));
let n_an = parseInt(prompt("Indica el ancho"));

document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
for (let i = 0; i < n_f; i++) {  
    document.write("<tr bgcolor='white' height='" + n_a + "'>");
    for (let j = 0; j < n_c; j++) {  
        document.write("<td width='" + n_an + "'>&nbsp;</td>");
    }
    document.write("</tr>");  
}
document.write("</table>");

// Ejercicio 4.19

let celdaAncho = parseInt(prompt("Ancho de las celdas"));


document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");

for (let i = 0; i < 9; i++) {  
    document.write("<tr bgcolor='white' height='" + celdaAncho + "'>");
    for (let j = 0; j < 9; j++) {  
        if(i%2 == 0){
            if(j%2 == 0){
                document.write("<td bgcolor='black' width='" + celdaAncho + "'>&nbsp;</td>");
            }else{
                document.write("<td bgcolor='white' width='" + celdaAncho + "'>&nbsp;</td>");
            }

        }else if(j%2 == 0){
            document.write("<td bgcolor='white' width='" + celdaAncho + "'>&nbsp;</td>");
        }else{
            document.write("<td bgcolor='black' width='" + celdaAncho + "'>&nbsp;</td>");

        }
    }
    document.write("</tr>");  
}
document.write("</table>");


