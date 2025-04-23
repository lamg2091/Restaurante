// Configuración de colores y estilos
const chartColors = {
    primary: '#ff4757',
    secondary: '#2f3542',
    success: '#4CAF50',
    warning: '#ffa502',
    info: '#2196F3',
    danger: '#f44336'
};

// Gráfico de Ventas Mensuales
function initSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Ventas 2024',
                data: [1500000, 1800000, 1600000, 2100000, 1900000, 2500000, 2300000, 2700000, 2400000, 2800000, 3000000, 3200000],
                borderColor: chartColors.primary,
                backgroundColor: `${chartColors.primary}20`,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('es-CO', {
                                    style: 'currency',
                                    currency: 'COP'
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return new Intl.NumberFormat('es-CO', {
                                style: 'currency',
                                currency: 'COP',
                                maximumSignificantDigits: 3
                            }).format(value);
                        }
                    }
                }
            }
        }
    });
}

// Gráfico de Productos Más Vendidos
function initTopProductsChart() {
    const ctx = document.getElementById('topProductsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hamburguesa Clásica', 'Pizza Margherita', 'Hot Dog Especial', 'Papas Fritas', 'Hamburguesa Doble'],
            datasets: [{
                label: 'Unidades Vendidas',
                data: [120, 95, 85, 70, 65],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.secondary
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
}

// Gráfico de Distribución de Pedidos
function initOrdersStatusChart() {
    const ctx = document.getElementById('ordersStatusChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completados', 'En Proceso', 'Pendientes', 'Cancelados'],
            datasets: [{
                data: [65, 20, 10, 5],
                backgroundColor: [
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.danger
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Gráfico de Ventas por Categoría
function initCategorySalesChart() {
    const ctx = document.getElementById('categorySalesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Hamburguesas', 'Pizzas', 'Hot Dogs', 'Bebidas', 'Postres', 'Acompañamientos'],
            datasets: [{
                label: 'Ventas por Categoría',
                data: [80, 65, 45, 35, 30, 40],
                backgroundColor: `${chartColors.primary}40`,
                borderColor: chartColors.primary,
                pointBackgroundColor: chartColors.primary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
}

// Inicializar todos los gráficos
document.addEventListener('DOMContentLoaded', function() {
    initSalesChart();
    initTopProductsChart();
    initOrdersStatusChart();
    initCategorySalesChart();
});

// Función para actualizar datos en tiempo real (simulado)
function updateChartsData() {
    // Aquí iría la lógica para actualizar los datos de los gráficos
    // con información real de tu base de datos
}

// Actualizar datos cada 5 minutos
setInterval(updateChartsData, 300000);