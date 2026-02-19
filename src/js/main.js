"use strict";

/* hamburgermeny */
const hamburger = document.getElementById('hamburger');
const navMeny = document.getElementById('nav-meny');

if (hamburger && navMeny) {
    hamburger.addEventListener('click', () => {
        navMeny.classList.toggle('active');
    });
}


//Konfettiknapp från youtube, har modifierat och förenklat koden till min nybörjarnivå: https://www.youtube.com/watch?v=H3CqghZkHm8  

document.addEventListener("DOMContentLoaded", function() {
  
  document.querySelectorAll(".btn-fun").forEach(button => {
      button.addEventListener("click", function() { 
          
          
          if (typeof confetti === "function") { //Aktiverar confetti genom att hämta instruktionerna från länken i html 
              confetti({
                  particleCount: 300, //Antal konfetti "bitar"
                  spread: 70, //hur brett ska konfettin spridas
                  origin: { y: 0.6 }, //Startpunkt = 60% från webbläsarfönstret
                  colors: ['#f093fb', '#f5576c', '#ffffff'] //Färgerna på konfettin
              });
          }

           }); 
    }); 
}); 