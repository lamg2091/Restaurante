// Obtener referencias a los elementos del DOM
const form = document.querySelector('form');
const inputCategoria = form.querySelector('input[type="text"]');
const listaCategorias = document.querySelector('ul');

// Función para agregar una nueva categoría
function agregarCategoria(nombre) {
  const li = document.createElement('li');
  li.textContent = nombre;

  // Crear botón para eliminar
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.onclick = () => eliminarCategoria(li);

  // Agregar el botón al elemento de la categoría
  li.appendChild(botonEliminar);

  // Agregar la categoría a la lista
  listaCategorias.appendChild(li);
}

// Función para eliminar una categoría
function eliminarCategoria(categoria) {
  listaCategorias.removeChild(categoria);
}

// Función para manejar el submit del formulario
form.onsubmit = function (e) {
  e.preventDefault();
  const nombreCategoria = inputCategoria.value.trim();

  if (nombreCategoria) {
    agregarCategoria(nombreCategoria);
    inputCategoria.value = '';  // Limpiar el campo
  }
};
