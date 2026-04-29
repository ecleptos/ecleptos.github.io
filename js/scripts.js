  // Función para consultar producto desde botones de galería
    // Simular redirección a WhatsApp (demo con alert o abrir enlace)
    // En entorno real sería: window.open(`https://wa.me/5493516782341?text=${encodeURIComponent(mensaje)}`, '_blank');
    // Muestra un mensaje temporal sin alert
const tempFeedback = document.getElementById('formFeedback');
if (tempFeedback) {
  tempFeedback.textContent = `💬 ¡Gracias! Para consultar sobre "${nombreProducto}", escríbenos por WhatsApp o completa el formulario.`;
  tempFeedback.style.color = 'var(--ocre-arcilla)';
  setTimeout(() => { tempFeedback.textContent = ''; }, 4000);
}

  // Manejo del formulario de contacto con feedback
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if(!nombre || !email || !mensaje) {
feedback.textContent = '❌ Por favor, completa todos los campos.';
      feedback.style.color = '#C96A4B';
      return;
    }
    if(!email.includes('@') || !email.includes('.')) {
feedback.textContent = '❌ Ingresa un correo electrónico válido.';
      feedback.style.color = '#C96A4B';
      return;
    }
    // Simulación de envío exitoso
feedback.textContent = '✨ ¡Mensaje enviado! En breve nuestro equipo te contactará. Gracias por apoyar el arte en barro.';
    feedback.style.color = '#8AAE92';
    form.reset();
    setTimeout(() => {
      feedback.innerHTML = '';
    }, 5000);
  });

  // Mejorar el enlace flotante de WhatsApp (simular contacto)
  const wspBtn = document.getElementById('whatsappBtn');
  wspBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const telefono = "523411008396"; // número de ejemplo
    const mensajeBase = "Hola, vi su página de cerámica y me encantaría recibir más información sobre sus piezas.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeBase)}`;
    window.open(url, '_blank');
  });

  // Smooth scroll para enlaces internos con offset para header sticky
  document.querySelectorAll('.nav-links a, .hero-buttons a, .about-text .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
          const offset = 70; // altura del header sticky
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    });
  });

  // Ajuste pequeño para que el primer enlace de "Inicio" vaya arriba del todo
  const inicioLink = document.querySelector('a[href="#inicio"]');
  if(inicioLink) {
    inicioLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
