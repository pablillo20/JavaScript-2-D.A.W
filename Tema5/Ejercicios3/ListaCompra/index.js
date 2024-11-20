const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const item = mensaje.value.trim();

    if (item) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = item;

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = function() {
            mensaje.value = item;
            nuevoItem.remove();
        };

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('delete');
        btnEliminar.onclick = function() {
            nuevoItem.remove();
        };

        nuevoItem.appendChild(btnEditar);
        nuevoItem.appendChild(btnEliminar);
        lista.appendChild(nuevoItem);

        mensaje.value = '';
    } else {
        mensaje.setAttribute('placeholder', 'Por favor, escribe un ítem.');
    }
});
