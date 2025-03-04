
//hamburguer//
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


//rolagem dinamica
const navRedes = document.querySelector("#nav-redes");
const header = document.querySelector('.header')

window.addEventListener("scroll", function() {
    if (window.scrollY > 60) {
        navRedes.classList.remove('nav-redes');
        navRedes.classList.add('nav-redes-none');

        hamburger.classList.remove('hamburger');
        hamburger.classList.add('hamburger-roll');
    } else {
        navRedes.classList.remove('nav-redes-none');
        navRedes.classList.add('nav-redes');

        hamburger.classList.remove('hamburger-roll');
        hamburger.classList.add('hamburger');
    }
});

//window.addEventListener("scroll", function() {
//    if (window.scrollY = 20) {
//        header.classList.toggle('header-translatey')
//   }
//});

