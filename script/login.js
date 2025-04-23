// Elementos del DOM
const loginForm = document.getElementById('loginForm');
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle para mostrar/ocultar contraseña
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Manejo del formulario de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.querySelector('input[name="remember"]').checked;

    // Aquí iría la lógica de autenticación
    console.log('Datos de login:', { email, password, remember });

    // Ejemplo de validación básica
    if (email && password) {
        // Simulación de login exitoso
        alert('Login exitoso!');
        // Aquí podrías redirigir al usuario o realizar otras acciones
        // window.location.href = 'index.html';
    } else {
        alert('Por favor, completa todos los campos');
    }
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

// Validación en tiempo real
document.getElementById('email').addEventListener('input', function(e) {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    this.style.borderColor = isValid ? '#ddd' : '#ff4757';
});

// Recordar usuario
window.addEventListener('load', () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.querySelector('input[name="remember"]').checked = true;
    }
});

loginForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const remember = document.querySelector('input[name="remember"]').checked;
    
    if (remember) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
});