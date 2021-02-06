const burger = document.querySelector('.burger');
const menu = document.querySelector('.wrapper');
const body = document.querySelector('body');



burger.addEventListener('click', () => {
  menu.classList.toggle('show');
  burger.classList.toggle('show');
  body.classList.toggle('stop-scroll');
})
