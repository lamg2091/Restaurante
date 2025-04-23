// admin.js

// ====== TOGGLE SIDEBAR ======
document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("hidden");
});

// ====== LOGOUT CONFIRMATION ======
document.getElementById("logout").addEventListener("click", () => {
  if (confirm("¿Estás seguro de que quieres salir?")) {
    window.location.href = "../paginas/login.html"; // Ajusta según tu estructura
  }
});

// ====== FUNCIÓN DE BÚSQUEDA ======
const searchInput = document.querySelector("header input[type='text']");

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    realizarBusqueda(e.target.value);
  }
});

function realizarBusqueda(termino) {
  termino = termino.toLowerCase().trim();
  
  if (termino === "") {
    alert("Por favor ingresa un término de búsqueda.");
    return;
  }

  // Simulación de búsqueda
  const resultados = [];

  const pedidos = ["#123 - Cliente A - $30", "#124 - Cliente B - $45"];
  const productos = ["Hamburguesa Doble", "Pizza Pepperoni"];

  pedidos.forEach((p) => {
    if (p.toLowerCase().includes(termino)) resultados.push("Pedido: " + p);
  });

  productos.forEach((p) => {
    if (p.toLowerCase().includes(termino)) resultados.push("Producto: " + p);
  });

  if (resultados.length > 0) {
    alert("Resultados encontrados:\n\n" + resultados.join("\n"));
  } else {
    alert("No se encontraron resultados para: " + termino);
  }
}

// ====== GRÁFICO DE VENTAS (Chart.js) ======
const ctx = document.getElementById("salesChart").getContext("2d");

const salesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    datasets: [{
      label: "Ventas ($)",
      data: [120, 190, 300, 500, 700, 800, 1000],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top"
      },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Días de la Semana"
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Monto ($)"
        }
      }
    }
  }
});
