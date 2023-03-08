const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      const topOffset = document.querySelector('header').offsetHeight;
      const elementPosition = target.offsetTop - topOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  });

  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar campos
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    if (!nombre.value) {
      alert('Por favor, ingresa tu nombre.');
      nombre.focus();
      return;
    }

    if (!email.value) {
      alert('Por favor, ingresa tu correo electrónico.');
      email.focus();
      return;
    }

    if (!mensaje.value) {
      alert('Por favor, ingresa un mensaje.');
      mensaje.focus();
      return;
    }

    // Enviar formulario
    const datos = new FormData(formulario);
    fetch('tu-servidor-de-correo-o-api', {
      method: 'POST',
      body: datos
    }).then(() => {
      alert('Tu mensaje ha sido enviado con éxito.');
      formulario.reset();
    }).catch(() => {
      alert('Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    });
  }); 