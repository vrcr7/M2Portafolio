document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      if (nombre && email && mensaje) {
        alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado`);
        form.reset(); // Limpiar formulario
      } else {
        alert('Debe completar todos los campos para de enviar');
      }
    });
  });
  