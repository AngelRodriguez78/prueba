
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('menu-open');
});

const slides = document.querySelectorAll('.slide');

setInterval(() => {
  const current = document.querySelector('.current');
  current.classList.remove('current
  const next = current.nextElementSibling;
  if (next) {
  current.classList.remove('current');
  next.classList.add('current');
  } else {
  current.classList.remove('current');
  slides[0].classList.add('current');
  }
  }, 5000);
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  // Aquí se puede agregar el código para enviar el correo electrónico con la información del formulario//
  
  // Se limpia el formulario después de enviar el correo//
  form.reset();
  });