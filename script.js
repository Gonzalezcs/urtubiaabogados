document.documentElement.classList.add('js');

// Correo que recibe las consultas del formulario
const CORREO_ESTUDIO = 'josemiguelurtubia@gmail.com';

// Menú en pantallas angostas
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

navToggle.addEventListener('click', () => {
  setMenu(!nav.classList.contains('is-open'));
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

// Formulario: prepara un correo con los datos de la consulta
const form = document.querySelector('.contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const value = (name) => String(data.get(name)).trim();

  const subject = `Consulta web: ${value('materia')} - ${value('nombre')}`;
  const body = [
    `Nombre: ${value('nombre')}`,
    `Contacto: ${value('contacto')}`,
    `Materia: ${value('materia')}`,
    '',
    value('mensaje'),
  ].join('\n');

  window.location.href = `mailto:${CORREO_ESTUDIO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Se abrió su aplicación de correo con la consulta lista. Solo falta enviarla.';
});

// Año del pie de página
document.getElementById('year').textContent = new Date().getFullYear();
