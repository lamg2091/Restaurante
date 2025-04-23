const ctx = document.getElementById('reporteChart').getContext('2d');
const reporteChart = new Chart(ctx, {
  type: 'line', // Tipo de gráfico
  data: {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], // Etiquetas para las semanas
    datasets: [{
      label: 'Ventas Semanales',
      data: [500, 1500, 3000, 2500], // Datos de ventas
      borderColor: '#007bff', // Color del borde
      borderWidth: 2, // Grosor del borde
      fill: false // No llenar debajo de la línea
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Inicia el eje Y en 0
        ticks: {
          stepSize: 500 // Escala del gráfico en pasos de 500
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' // Coloca la leyenda en la parte superior
      }
    }
  }
});

// Función para descargar como PNG
document.getElementById('downloadPng').addEventListener('click', () => {
  const url = reporteChart.toBase64Image();
  const a = document.createElement('a');
  a.href = url;
  a.download = 'reporte-ventas.png';
  a.click();
});

// Función para descargar como JPEG
document.getElementById('downloadJpeg').addEventListener('click', () => {
  const url = reporteChart.toBase64Image('image/jpeg');
  const a = document.createElement('a');
  a.href = url;
  a.download = 'reporte-ventas.jpg';
  a.click();
});

// Función para descargar como PDF
document.getElementById('downloadPdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Agregar texto al PDF
  doc.text("Reporte de Ventas Semanales", 10, 10);

  // Añadir el gráfico al PDF
  const imgData = reporteChart.toBase64Image();
  doc.addImage(imgData, 'PNG', 10, 20, 180, 100);

  // Guardar el PDF
  doc.save('reporte-ventas.pdf');
});
