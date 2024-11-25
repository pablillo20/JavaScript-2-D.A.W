const crearNotaBtn = document.getElementById('crearNotaBtn');
const tituloInput = document.getElementById('titulo');
const textoInput = document.getElementById('texto');
const listaNotasDiv = document.getElementById('listaNotas');

// Cargar las notas desde LocalStorage
function cargarNotas() {
    return JSON.parse(localStorage.getItem('notas') || '[]');
}

// Guardar todas las notas en LocalStorage
function guardarNotas(notas) {
    localStorage.setItem('notas', JSON.stringify(notas));
}

// Mostrar una nota en pantalla
function agregarNotaEnPantalla(nota) {
    const divNota = document.createElement('div');
    divNota.classList.add('nota-card');
    divNota.id = `nota-${nota.id}`;
    divNota.style.position = 'absolute';
    divNota.innerHTML = `
        <h3>${nota.titulo}</h3>
        <p>${nota.texto}</p>
        <small>Creada: ${new Date(nota.horaCreacion).toLocaleString()}</small>
        <button class="eliminarBtn">Eliminar</button>
    `;
    listaNotasDiv.appendChild(divNota);

    // Función para eliminar la nota
    divNota.querySelector('.eliminarBtn').addEventListener('click', () => {
        eliminarNota(nota.id);
    });

    // Funcionalidad de mover la nota
    let isDragging = false;
    let offsetX, offsetY;

    divNota.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - divNota.getBoundingClientRect().left;
        offsetY = e.clientY - divNota.getBoundingClientRect().top;
        divNota.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            divNota.style.left = `${e.clientX - offsetX}px`;
            divNota.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        divNota.style.cursor = 'grab';
    });
}

// Crear una nueva nota
crearNotaBtn.addEventListener('click', () => {
    const titulo = tituloInput.value.trim();
    const texto = textoInput.value.trim();
    if (titulo && texto) {
        const nuevaNota = {
            id: Date.now(), // Generar un ID único basado en la hora actual
            titulo,
            texto,
            horaCreacion: new Date().toISOString()
        };
        agregarNotaEnPantalla(nuevaNota);
        guardarNotaEnLocalStorage(nuevaNota);
        tituloInput.value = '';
        textoInput.value = '';
    }
});

// Guardar una nota nueva en LocalStorage
function guardarNotaEnLocalStorage(nuevaNota) {
    const notas = cargarNotas();
    notas.push(nuevaNota);
    guardarNotas(notas);
}

// Eliminar una nota por su ID
function eliminarNota(id) {
    let notas = cargarNotas();
    notas = notas.filter(nota => nota.id !== id);
    guardarNotas(notas);

    const divNota = document.getElementById(`nota-${id}`);
    if (divNota) divNota.remove();
}

// Cargar las notas existentes al inicio
cargarNotas().forEach(agregarNotaEnPantalla);
