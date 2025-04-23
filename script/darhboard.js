// Obtener el contexto del canvas para el gráfico
const ctx = document.getElementById('ventasChart');

// Crear el gráfico de barras
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr'], // Etiquetas para cada barra
    datasets: [{
      label: 'Ventas Mensuales', // Etiqueta de la serie de datos
      data: [1200, 1900, 3000, 5000], // Datos de las ventas por mes
      backgroundColor: '#4CAF50' // Color de fondo de las barras
    }]
  },
  options: {
    responsive: true, // Hacer que el gráfico sea responsivo
    scales: {
      y: {
        beginAtZero: true // Iniciar el eje Y desde 0
      }
    }
  }
});
