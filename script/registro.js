// Elementos del DOM
const registerForm = document.getElementById('registerForm');
const togglePasswords = document.querySelectorAll('.toggle-password');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle para mostrar/ocultar contraseñas
togglePasswords.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});

// Validación de contraseñas en tiempo real
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function validatePasswords() {
    if (confirmPassword.value === '') {
        confirmPassword.style.borderColor = '#ddd';
        return;
    }
    
    if (password.value === confirmPassword.value) {
        confirmPassword.style.borderColor = '#4CAF50';
    } else {
        confirmPassword.style.borderColor = '#ff4757';
    }
}

password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

// Validación de email en tiempo real
document.getElementById('email').addEventListener('input', function(e) {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    this.style.borderColor = isValid ? '#4CAF50' : '#ff4757';
});

// Validación de teléfono en tiempo real
document.getElementById('telefono').addEventListener('input', function(e) {
    const telefono = e.target.value;
    const isValid = /^\d{10}$/.test(telefono.replace(/\D/g, ''));
    this.style.borderColor = isValid ? '#4CAF50' : '#ff4757';
});

// Manejo del formulario de registro
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        direccion: document.getElementById('direccion').value,
        terminos: document.getElementById('terminos').checked
    };

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (!formData.terminos) {
        alert('Debes aceptar los términos y condiciones');
        return;
    }

    // Aquí iría la lógica de registro
    console.log('Datos de registro:', formData);

    // Simulación de registro exitoso
    alert('¡Registro exitoso!');
    // Aquí podrías redirigir al usuario o realizar otras acciones
    // window.location.href = 'login.html';
});

// Menú móvil
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});