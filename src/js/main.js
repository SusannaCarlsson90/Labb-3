"use strict";


/*hamburgermeny*/


const hamburger = document.getElementById('hamburger');
const navMeny = document.getElementById('nav-meny');

hamburger.addEventListener('click', () => {
  navMeny.classList.toggle('active');
});
