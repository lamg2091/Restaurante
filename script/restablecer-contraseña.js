// Elementos del DOM
const emailStep = document.getElementById('emailStep');
const codeStep = document.getElementById('codeStep');
const passwordStep = document.getElementById('passwordStep');
const emailForm = document.getElementById('emailForm');
const codeForm = document.getElementById('codeForm');
const passwordForm = document.getElementById('passwordForm');
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

// Manejo de inputs del código de verificación
const codeInputs = document.querySelectorAll('.code-input');
codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            codeInputs[index - 1].focus();
        }
    });
});

// Validación de contraseña en tiempo real
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const requirements = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special')
};

function validatePassword(password) {
    const conditions = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password)
    };

    for (const [key, element] of Object.entries(requirements)) {
        if (conditions[key]) {
            element.classList.add('valid');
        } else {
            element.classList.remove('valid');
        }
    }

    return Object.values(conditions).every(condition => condition);
}

newPassword.addEventListener('input', () => {
    validatePassword(newPassword.value);
});

// Manejo de formularios
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    // Aquí iría la lógica para enviar el código
    console.log('Enviando código a:', email);
    
    // Simulación de envío exitoso
    emailStep.style.display = 'none';
    codeStep.style.display = 'block';
});

codeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = Array.from(codeInputs).map(input => input.value).join('');
    
    // Aquí iría la validación del código
    console.log('Verificando código:', code);
    
    // Simulación de verificación exitosa
    codeStep.style.display = 'none';
    passwordStep.style.display = 'block';
});

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (newPassword.value !== confirmPassword.value) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (!validatePassword(newPassword.value)) {
        alert('La contraseña no cumple con todos los requisitos');
        return;
    }

    // Aquí iría la lógica para cambiar la contraseña
    console.log('Cambiando contraseña');
    
    // Simulación de cambio exitoso
    alert('¡Contraseña cambiada exitosamente!');
    window.location.href = 'login.html';
});

// Reenviar código
document.querySelector('.btn-resend').addEventListener('click', () => {
    // Aquí iría la lógica para reenviar el código
    alert('Código reenviado. Por favor, revisa tu correo.');
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