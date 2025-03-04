
//hamburguer//
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


//rolagem dinamica
const header = document.querySelector('.header')

window.addEventListener("scroll", function() {
    if (window.scrollY > 60) {
    
        header.classList.remove('header-untranslatey')
        header.classList.add('header-translatey')
    } else {
       
        header.classList.remove('header-translatey')
        header.classList.add('header-untranslatey')
    }
});



