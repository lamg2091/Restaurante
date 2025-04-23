// carrito.js

// Elementos del DOM
const cartItemsContainer = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const ivaElement = document.getElementById('iva');
const totalElement = document.getElementById('total');
const emptyCartMessage = document.getElementById('emptyCart');
const cartCount = document.querySelector('.carrito-cantidad');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

// Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarCarrito() {
    cartItemsContainer.innerHTML = '';

    if (carrito.length === 0) {
        emptyCartMessage.style.display = 'flex';
        subtotalElement.textContent = '$0';
        ivaElement.textContent = '$0';
        totalElement.textContent = '$0';
        cartCount.textContent = '0';
        return;
    }

    emptyCartMessage.style.display = 'none';

    let subtotal = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="item-details">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            </div>
        `;
        cartItemsContainer.appendChild(item);

        subtotal += producto.precio * producto.cantidad;
    });

    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    ivaElement.textContent = `$${iva.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
    cartCount.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

    // Botones eliminar
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            eliminarProducto(index);
        });
    });
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Vaciar carrito
clearCartBtn.addEventListener('click', () => {
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
});

// Ir a pago (aquí puedes redirigir o conectar con Stripe o una página de checkout)
checkoutBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    alert('Redirigiendo al pago...');
    // window.location.href = 'checkout.html';
});

// Iniciar carrito
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});
