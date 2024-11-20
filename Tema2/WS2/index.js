// Ejercicio 1, 5, 7, 8

// Ejercicio 1

document.write(Math.random()); // Entre 0 y 1
document.write("<br>");
document.write(Math.random()* (200-100)+ 100) // Entre 100 y 200
document.write("<br>");

let a = parseInt(prompt("Indica el primer numero"));
let b = parseInt(prompt("Indica el segundo numero"));

if(a>b){
    document.write(Math.random()* (a-b)+b);
}else{
    document.write(Math.random()* (b-a)+a);
}

// Ejercicio 5
document.write("<br>")
let a1 = parseInt(prompt("Indica la A"));
let b1 = parseInt(prompt("Indica la B"));
let c1 = parseInt(prompt("Indica la C"));
let solucion;
let solucion1;

solucion = (-b1 + Math.sqrt((b1*b1) -4*a1*c1))/2*a1;
solucion1 =(-b1 - Math.sqrt((b1*b1) -4*a1*c1))/2*a1;


document.write(solucion);
document.write("<br>")

document.write(solucion1);

//Ejercicio 7

let n = parseInt(prompt("Introduca un numero para verlo de forma ascendente y su respectivo seno"));

document.write("<table border= "+ 0 +" cellspacing ="+ 2 +" bgcolor= "+" black "+"width="+200+">");
for (let i=1; i<=n;i++){
    document.write("<tr bgcolor="+"white "+"height="+100+">");
    for(let k=1;k<=1;k++){
        document.write("<td width="+100+" height="+100+">"+i+" </td>"+"<td width="+100+" height="+100+">"+Math.sin(i)+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


// Ejercicio 8


let random = Math.trunc(Math.random()*2);

let img1 = document.write("<img src = 'coche.jpeg'></img>");

let img2 = document.write("<img src = 'coche2.png'></img>");

const imagenes = [];

imagenes.push(img1,img2);

document.write(imagenes[random]);
