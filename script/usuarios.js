// Array de usuarios para simular una base de datos
let usuarios = [
    { id: 1, nombre: 'Ana Torres', email: 'ana@example.com', rol: 'Admin' },
    { id: 2, nombre: 'Carlos Sánchez', email: 'carlos@example.com', rol: 'Usuario' },
  ];
  
  // Función para renderizar los usuarios en la tabla
  function renderizarUsuarios() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Limpiar la tabla
  
    usuarios.forEach(usuario => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.rol}</td>
        <td>
          <button class="btnEditar" data-id="${usuario.id}">Editar</button>
          <button class="btnEliminar" data-id="${usuario.id}">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Función para agregar un nuevo usuario
  function agregarUsuario(nombre, email, rol) {
    const id = usuarios.length + 1;
    usuarios.push({ id, nombre, email, rol });
    renderizarUsuarios();
  }
  
  // Función para editar un usuario existente
  function editarUsuario(id, nombre, email, rol) {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
      usuario.nombre = nombre;
      usuario.email = email;
      usuario.rol = rol;
      renderizarUsuarios();
    }
  }
  
  // Función para eliminar un usuario
  function eliminarUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
    renderizarUsuarios();
  }
  
  // Abrir el modal para agregar un usuario
  document.getElementById('btnAgregarUsuario').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
    document.getElementById('modalTitle').textContent = 'Agregar Usuario';
    document.getElementById('usuarioForm').reset();
    currentEditingUserId = null;
  });
  
  // Cerrar el modal sin guardar
  document.getElementById('btnCancelar').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
  });
  
  // Manejar la edición de un usuario
  let currentEditingUserId = null;
  document.querySelector('tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('btnEditar')) {
      currentEditingUserId = parseInt(e.target.dataset.id);
      const usuario = usuarios.find(u => u.id === currentEditingUserId);
      if (usuario) {
        document.querySelector('.modal').style.display = 'block';
        document.getElementById('modalTitle').textContent = 'Editar Usuario';
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('email').value = usuario.email;
        document.getElementById('rol').value = usuario.rol;
      }
    }
  
    if (e.target.classList.contains('btnEliminar')) {
      const id = parseInt(e.target.dataset.id);
      eliminarUsuario(id);
    }
  });
  
  // Manejar la creación o actualización de usuario
  document.getElementById('usuarioForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').value;
  
    if (currentEditingUserId) {
      editarUsuario(currentEditingUserId, nombre, email, rol);
    } else {
      agregarUsuario(nombre, email, rol);
    }
  
    document.querySelector('.modal').style.display = 'none';
  });
  
  // Inicializar la lista de usuarios
  renderizarUsuarios();
  