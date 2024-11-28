window.onload = () => {
    const botonBuscar = document.getElementById("botonBuscar");
    const cargar = document.getElementById("cargarMas");
    const cerrarModal = document.getElementById("cerrarModal");

    botonBuscar.addEventListener("click", peticionOMDb);
    cargar.addEventListener("click", peticionOMDb);
    cerrarModal.addEventListener("click", () => {
        document.getElementById("modal").classList.remove("mostrar");
    });
};

let pagina = 1;

function peticionOMDb() {
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

            datosRecibidos.Search.forEach((pelicula) => {
                const peliculaDiv = document.createElement("div");
                peliculaDiv.className = "pelicula";

                const poster = document.createElement("img");
                poster.setAttribute("src", pelicula.Poster);
                poster.setAttribute("id", pelicula.imdbID);

                poster.addEventListener("click", (e) => {
                    const id = e.target.id;
                    caracteristicas(id);
                });

                const titulo = document.createElement("p");
                titulo.textContent = pelicula.Title + "-" + pelicula.Year;

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
