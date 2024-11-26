window.onload = ()=>{
document.getElementById("btn").addEventListener("click", peticionAJAX);
titulo = document.getElementById("titulo");
}

function peticionAJAX(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // LLega la respespuesta y además ha encontrado lo que he pedido
        if (this.readyState == 4 && this.status == 200) {

            respuesta = JSON.parse(this.responseText);
            var list = document.createElement("div");
            titulo.innerText = "He recibido " + respuesta.employees.length + " usuarios";

            for (let i = 0; i < respuesta.employees.length;i++){

                var usuarios = document.createElement("li");
                usuarios.innerText = "Usuario : " + respuesta.employees[i].firstName;

                list.appendChild(usuarios);
            }
            document.body.appendChild(list);

        }
    };
    xhttp.open("GET", "txt.json", true);
    xhttp.send();
}