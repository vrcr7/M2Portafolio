document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Verificar que el nombre solo contenga letras de la a a la z (mayúsculas y minúsculas)
    const nombreRegex = /^[a-zA-Z]+$/;

    if (!nombreRegex.test(nombre)) {
      alert('El nombre solo debe contener letras de la A a la Z');
      return;
    }

    // Verificar que el email tenga un formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido');
      return;
    }

    if (nombre && email && mensaje) {
      alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado`);
      form.reset(); // Limpiar formulario
    } else {
      alert('Debe completar todos los campos para enviar el mensaje');
    }
  });
});
