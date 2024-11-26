window.onload = () => {
    const crearNotaBtn = document.getElementById("crearNotaBtn");
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");
    const listaNotasDiv = document.getElementById("listaNotas");

    let notas = [];

    // Recuperar notas al cargar la página
    if (localStorage.getItem("notas")) {
        notas = JSON.parse(localStorage.getItem("notas"));
        notas.forEach((nota) => {
            const notaDiv = document.createElement("div");
            notaDiv.classList.add("nota");
            notaDiv.setAttribute("data-id", nota.id);

            notaDiv.innerHTML = `
                <h3>${nota.titulo}</h3>
                <p>${nota.texto}</p>
                <small>Creada: ${new Date(nota.horaCreacion).toLocaleString()}</small>
                <button class="borrarNotaBtn">Borrar</button>
            `;
            listaNotasDiv.appendChild(notaDiv);

            // Mover nota
            mover(notaDiv);

            // Agregar el evento de borrar
            notaDiv.querySelector(".borrarNotaBtn").addEventListener("click", () => borrarNota(nota.id));
        });
    }

    // Evento para crear la nota
    crearNotaBtn.addEventListener("click", () => {
        const title = titulo.value;
        const text = texto.value;

        if (title && text) {
            // Crear la nueva nota
            const nota = {
                id: Date.now(),
                titulo: title,
                texto: text,
                horaCreacion: new Date(),
            };

            // Agregar la nota al array
            notas.push(nota);
            localStorage.setItem("notas", JSON.stringify(notas));

            // Agregar la nueva nota
            const notaDiv = document.createElement("div");
            notaDiv.classList.add("nota");
            notaDiv.setAttribute("data-id", nota.id);

            notaDiv.innerHTML = `
                <h3>${nota.titulo}</h3>
                <p>${nota.texto}</p>
                <small>Creada: ${new Date(nota.horaCreacion).toLocaleString()}</small>
                <button class="borrarNotaBtn">Borrar</button>
            `;
            listaNotasDiv.appendChild(notaDiv);

            // Mover nota
            mover(notaDiv);

            // Agregar el evento de borrar
            notaDiv.querySelector(".borrarNotaBtn").addEventListener("click", () => borrarNota(nota.id));

            // Limpiar los campos de entrada
            titulo.value = "";
            texto.value = "";
        } else {
            titulo.style.borderColor = "red";
            texto.style.borderColor = "red";
        }
    });

    function borrarNota(id) {
        notas = notas.filter(nota => nota.id !== id);
        localStorage.setItem("notas", JSON.stringify(notas));

        // Eliminar
        document.querySelector(`[data-id='${id}']`).remove();
    }

    // Función para mover nota
    function mover(notaDiv) {
        let offsetX, offsetY;
        let movil = false;

        notaDiv.addEventListener("mousedown", (event) => {
            offsetX = event.clientX - notaDiv.getBoundingClientRect().left;
            offsetY = event.clientY - notaDiv.getBoundingClientRect().top;

            movil = true;

            //  mousemove para mover la nota
            document.addEventListener("mousemove", moverNota);

            // Detener el movimiento cuando se suelta el ratón
            document.addEventListener("mouseup", () => {
                movil = false;
                document.removeEventListener("mousemove", moverNota);
            });
        });

        // Función para mover la nota
        function moverNota(event) {
            if (movil) {
                notaDiv.style.position = 'absolute';
                notaDiv.style.left = (event.clientX - offsetX) + 'px';
                notaDiv.style.top = (event.clientY - offsetY) + 'px';
            }
        }
    }

}
