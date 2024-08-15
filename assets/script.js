const menuBotton = document.querySelector('.menuBotton');
const nav = document.querySelector('.nav');


menuBotton.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});