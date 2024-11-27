        window.onload = () => {
            const botonBuscar = document.getElementById("botonBuscar");
            const cargar = document.getElementById("cargarMas");
            const cerrarModal = document.getElementById("cerrarModal");

            botonBuscar.addEventListener("click", peticionModerna);
            cargar.addEventListener("click", peticionModerna);
            cerrarModal.addEventListener("click", () => {
            document.getElementById("modal").classList.remove("mostrar");
            });
        };

        let pagina = 1;

        function peticionModerna() {
            const resultados = document.getElementById("TotalResultados");
            const texto = document.getElementById("input").value;
            const link = "https://www.omdbapi.com/?i=tt3896198&apikey=14e6ae78&s=" + texto + "&page=" + pagina;
            pagina++;

            fetch(link, { method: "GET" })
                .then((res) => res.json())
                .then((datosRecibidos) => {

                    const lista = document.getElementById("listaPeliculas");
                    lista.innerText= "";
                    resultados.innerText = datosRecibidos.totalResults + " resultados";

                    datosRecibidos.Search.forEach((item) => {
                        const peliculaDiv = document.createElement("div");
                        peliculaDiv.className = "pelicula";

                        const poster = document.createElement("img");
                        poster.setAttribute("src", item.Poster);
                        poster.setAttribute("id", item.imdbID);

                        poster.addEventListener("click", (e) => {
                            const id = e.target.id;
                            caracteristicas(id);
                        });

                        const titulo = document.createElement("p");
                        titulo.textContent = `${item.Title} - ${item.Year}`;

                        peliculaDiv.appendChild(poster);
                        peliculaDiv.appendChild(titulo);
                        lista.appendChild(peliculaDiv);
                    });
                })
                .catch((err) => {
                    console.error("Error en la petición: ", err);
                });
        }

        function caracteristicas(imdbID) {
            const link = "https://www.omdbapi.com/?i=" + imdbID + "&apikey=14e6ae78";

            fetch(link, { method: "GET" })
                .then((res) => res.json())
                .then((pelicula) => {
                    document.getElementById("tituloPelicula").textContent = pelicula.Title;
                    document.getElementById("anioPelicula").textContent = pelicula.Year;
                    document.getElementById("directorPelicula").textContent = pelicula.Director;
                    document.getElementById("actoresPelicula").textContent = pelicula.Actors;
                    document.getElementById("sinopsisPelicula").textContent = pelicula.Plot;

                    document.getElementById("modal").classList.add("mostrar");
                })
                .catch((err) => {
                    console.error("Error al obtener características: ", err);
                });
        }

// Función para realizar peticiones con AJAX a un archivo JSON local
function peticionAJAX() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const respuesta = JSON.parse(this.responseText); 
            const list = document.createElement("div");

            const titulo = document.getElementById("titulo");
            titulo.innerText = "He recibido " + respuesta.employees.length + " usuarios";

            for (let i = 0; i < respuesta.employees.length; i++) {
                const usuarios = document.createElement("li");
                usuarios.innerText = "Usuario: " + respuesta.employees[i].firstName;

                list.appendChild(usuarios);
            }

            document.body.appendChild(list); // Agrega la lista al body del documento
        }
    };

    // Configura y envía la solicitud
    xhttp.open("GET", "txt.json", true);
    xhttp.send();
}
