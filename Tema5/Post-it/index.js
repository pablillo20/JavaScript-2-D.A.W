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
            const notaDiv = crearElementoNota(nota);
            listaNotasDiv.appendChild(notaDiv);
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

            // Agregar la nueva
            const notaDiv = crearElementoNota(nota);
            listaNotasDiv.appendChild(notaDiv);

            // Limpiar los campos de entrada
            titulo.value = "";
            texto.value = "";
        } else {
            titulo.style.borderColor = "red";
            texto.style.borderColor = "red";
        }
    });

    function crearElementoNota(nota) {
        const notaDiv = document.createElement("div");
        notaDiv.classList.add("nota");
        notaDiv.setAttribute("data-id", nota.id);

        notaDiv.innerHTML = `
            <h3 contenteditable="true">${nota.titulo}</h3>
            <p contenteditable="true">${nota.texto}</p>
            <small>Creada: ${new Date(nota.horaCreacion).toLocaleString()}</small>
            <button class="borrarNotaBtn">Borrar</button>
        `;

        // Mover nota
        mover(notaDiv);

        // Agregar el evento de borrar
        notaDiv.querySelector(".borrarNotaBtn").addEventListener("click", () => borrarNota(nota.id));

        // Agregar eventos para guardar cambios
        const tituloEditable = notaDiv.querySelector("h3");
        const textoEditable = notaDiv.querySelector("p");

        tituloEditable.addEventListener("input", () => actualizarNota(nota.id, "titulo", tituloEditable.innerText));
        textoEditable.addEventListener("input", () => actualizarNota(nota.id, "texto", textoEditable.innerText));

        return notaDiv;
    }

    function borrarNota(id) {
        notas = notas.filter(nota => nota.id !== id);
        localStorage.setItem("notas", JSON.stringify(notas));

        document.querySelector(`[data-id='${id}']`).remove();
    }

    function actualizarNota(id, campo, valor) {
        const nota = notas.find(nota => nota.id === id);
        if (nota) {
            nota[campo] = valor;
            localStorage.setItem("notas", JSON.stringify(notas));
        }
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
