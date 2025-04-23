// script/menu.js

document.addEventListener("DOMContentLoaded", () => {
  const carritoCantidad = document.querySelector('.carrito-cantidad');
  const botonesAgregar = document.querySelectorAll('.btn-add-cart');

  // Cargar carrito desde localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Actualiza visualmente el número del carrito
  function actualizarCarritoCantidad() {
      carritoCantidad.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
  }

  // Agregar producto al carrito
  function agregarAlCarrito(nombre, precio, imagen) {
      const productoExistente = carrito.find(p => p.nombre === nombre);

      if (productoExistente) {
          productoExistente.cantidad += 1;
      } else {
          carrito.push({ nombre, precio, imagen, cantidad: 1 });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarCarritoCantidad();
      mostrarNotificacion(`${nombre} agregado al carrito`);
  }

  // Mostrar notificación simple
  function mostrarNotificacion(mensaje) {
      const notificacion = document.createElement("div");
      notificacion.classList.add("notificacion");
      notificacion.textContent = mensaje;
      document.body.appendChild(notificacion);
      setTimeout(() => {
          notificacion.remove();
      }, 2000);
  }

  // Agregar evento a cada botón
  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", () => {
          const item = boton.closest('.menu-item');
          const nombre = item.querySelector('h3').textContent;
          const precio = item.querySelector('.price').textContent.replace('$', '').replace('.', '');
          const imagen = item.querySelector('img').src;
          agregarAlCarrito(nombre, parseInt(precio), imagen);
      });
  });

  // Inicializa la cantidad en el ícono
  actualizarCarritoCantidad();
});
