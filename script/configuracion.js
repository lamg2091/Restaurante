// script/configuracion.js

// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.config-form'); // Seleccionar el formulario
    const businessNameInput = document.getElementById('businessName');
    const contactEmailInput = document.getElementById('contactEmail');
    const timezoneSelect = document.getElementById('timezone');
  
    // Función para validar los datos del formulario
    function validateForm() {
      let isValid = true;
  
      // Validar el campo de Nombre del negocio
      if (!businessNameInput.value.trim()) {
        alert('Por favor ingrese el nombre del negocio.');
        isValid = false;
      }
  
      // Validar el campo de Email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(contactEmailInput.value)) {
        alert('Por favor ingrese un email válido.');
        isValid = false;
      }
  
      // Validar que la zona horaria esté seleccionada
      if (!timezoneSelect.value) {
        alert('Por favor seleccione una zona horaria.');
        isValid = false;
      }
  
      return isValid;
    }
  
    // Evento para cuando se envíe el formulario
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevenir el envío del formulario de forma predeterminada
  
      // Validar el formulario
      if (validateForm()) {
        // Si los datos son válidos, simula el guardado
        const formData = {
          businessName: businessNameInput.value,
          contactEmail: contactEmailInput.value,
          timezone: timezoneSelect.value
        };
  
        // Simulación de guardado de datos (puedes reemplazarlo con una llamada a una API)
        console.log('Configuración guardada:', formData);
  
        // Puedes agregar una notificación de éxito
        alert('Configuración guardada con éxito.');
      }
    });
  });
  