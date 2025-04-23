// script/productos.js

// Este archivo puede ser útil para futuras extensiones del sistema de productos,
// como filtros, búsqueda, o carga dinámica desde una base de datos/API.

document.addEventListener("DOMContentLoaded", () => {
  const productos = [];

  document.querySelectorAll(".menu-item").forEach(item => {
      const nombre = item.querySelector("h3").textContent;
      const descripcion = item.querySelector("p").textContent;
      const precio = item.querySelector(".price").textContent;
      const imagen = item.querySelector("img").src;

      productos.push({
          nombre,
          descripcion,
          precio,
          imagen
      });
  });

  // Guardar productos en localStorage (opcional, si quieres usarlos en otras páginas)
  localStorage.setItem("productos", JSON.stringify(productos));

  // Aquí podrías extender funcionalidades como filtros por categoría o búsqueda
  // Por ejemplo: mostrarProductos(productos), filtrarPorPrecio(), etc.
});
