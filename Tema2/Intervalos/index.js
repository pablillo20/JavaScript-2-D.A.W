function miFuncion(){
    console.log("llama a miFuncion");
}

setTimeout(miFuncion,1000);  // Una solo vez en 1 segundo

setInterval(miFuncion,5000); // Cada 5 segundos