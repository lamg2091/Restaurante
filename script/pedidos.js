// Obtener referencia a la tabla y a su cuerpo
const tableBody = document.querySelector('table tbody');
const formulario = document.querySelector('#formulario');
const idInput = document.querySelector('#id');
const clienteInput = document.querySelector('#cliente');
const productoInput = document.querySelector('#producto');
const totalInput = document.querySelector('#total');
const estadoInput = document.querySelector('#estado');

// Función para agregar un nuevo pedido
function agregarPedido(id, cliente, producto, total, estado) {
  // Crear una nueva fila
  const newRow = document.createElement('tr');
  
  // Crear las celdas de la fila
  const idCell = document.createElement('td');
  idCell.textContent = id;

  const clienteCell = document.createElement('td');
  clienteCell.textContent = cliente;

  const productoCell = document.createElement('td');
  productoCell.textContent = producto;

  const totalCell = document.createElement('td');
  totalCell.textContent = total;

  const estadoCell = document.createElement('td');
  estadoCell.textContent = estado;

  // Crear botones para editar y eliminar
  const accionesCell = document.createElement('td');
  
  const editarBtn = document.createElement('button');
  editarBtn.textContent = 'Editar';
  editarBtn.onclick = () => editarPedido(id, cliente, producto, total, estado);
  
  const eliminarBtn = document.createElement('button');
  eliminarBtn.textContent = 'Eliminar';
  eliminarBtn.onclick = () => eliminarPedido(newRow);

  // Agregar los botones a la celda
  accionesCell.appendChild(editarBtn);
  accionesCell.appendChild(eliminarBtn);

  // Agregar la celda de acciones a la fila
  newRow.appendChild(idCell);
  newRow.appendChild(clienteCell);
  newRow.appendChild(productoCell);
  newRow.appendChild(totalCell);
  newRow.appendChild(estadoCell);
  newRow.appendChild(accionesCell);

  // Agregar la fila al cuerpo de la tabla
  tableBody.appendChild(newRow);
}

// Función para eliminar un pedido
function eliminarPedido(row) {
  tableBody.removeChild(row);
}

// Función para editar un pedido
function editarPedido(id, cliente, producto, total, estado) {
  idInput.value = id;
  clienteInput.value = cliente;
  productoInput.value = producto;
  totalInput.value = total;
  estadoInput.value = estado;

  // Cambiar el texto del botón para guardar los cambios
  const botonGuardar = document.querySelector('#botonGuardar');
  botonGuardar.textContent = 'Actualizar Pedido';
  
  // Actualizar el pedido
  botonGuardar.onclick = function () {
    actualizarPedido(id, idInput.value, clienteInput.value, productoInput.value, totalInput.value, estadoInput.value);
  };
}

// Función para actualizar un pedido
function actualizarPedido(id, newId, newCliente, newProducto, newTotal, newEstado) {
  const rows = tableBody.querySelectorAll('tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells[0].textContent == id) {
      cells[0].textContent = newId;
      cells[1].textContent = newCliente;
      cells[2].textContent = newProducto;
      cells[3].textContent = newTotal;
      cells[4].textContent = newEstado;
    }
  });

  // Limpiar el formulario después de actualizar
  formulario.reset();

  // Cambiar el texto del botón a "Crear Pedido"
  const botonGuardar = document.querySelector('#botonGuardar');
  botonGuardar.textContent = 'Crear Pedido';
  
  // Restaurar la funcionalidad original de crear un pedido
  botonGuardar.onclick = function () {
    agregarPedido(newId, newCliente, newProducto, newTotal, newEstado);
  };
}

// Función para crear un nuevo pedido desde el formulario
document.querySelector('#botonGuardar').onclick = function () {
  const id = idInput.value;
  const cliente = clienteInput.value;
  const producto = productoInput.value;
  const total = totalInput.value;
  const estado = estadoInput.value;

  agregarPedido(id, cliente, producto, total, estado);

  // Limpiar el formulario después de agregar un pedido
  formulario.reset();
};
