
//hamburguer//
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//carrosel//
const slider = document.querySelectorAll('.slider');
const slider2 = document.querySelectorAll('.slider-2')
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;
let currentSlide2 = 0;

//silder 1
function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider();
    if (currentSlide === slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() {
    hideSlider();
    if (currentSlide === 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
}

//slider 2
function hideSlider2() {
    slider2.forEach(item => item.classList.remove('on'));
}

function showSlider2() {
    slider2[currentSlide2].classList.add('on');
}

function nextSlider2() {
    hideSlider2();
    if (currentSlide2 === slider2.length - 1) {
        currentSlide2 = 0;
    } else {
        currentSlide2++;
    }
    showSlider2();
}

function prevSlider2() {
    hideSlider2();
    if (currentSlide2 === 0) {
        currentSlide2 = slider2.length - 1;
    } else {
        currentSlide2--;
    }
    showSlider2();
}

// Associando os botões às funções corretas
btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);
btnNext.addEventListener('click', nextSlider2);
btnPrev.addEventListener('click', prevSlider2);

// Exibindo o console para verificar sliders
console.log(slider);

//trocar icon do google 
        const icon = document.getElementById('icon-arrow-left');
        // Evento para mouse entrar no botão
        btnPrev.addEventListener('mouseenter', () => {
            icon.classList.remove('bi-caret-left');
            icon.classList.add('bi-caret-left-fill');
        });

        // Evento para mouse sair do botão
        btnPrev.addEventListener('mouseleave', () => {
            icon.classList.remove('bi-caret-left-fill');
            icon.classList.add('bi-caret-left');
        });

        const icon2 = document.getElementById('icon-arrow-right');
        // Evento para mouse entrar no botão
        btnNext.addEventListener('mouseenter', () => {
            icon2.classList.remove('bi-caret-right');
            icon2.classList.add('bi-caret-right-fill');
        });

        // Evento para mouse sair do botão
        btnNext.addEventListener('mouseleave', () => {
            icon2.classList.remove('bi-caret-right-fill');
            icon2.classList.add('bi-caret-right');
        });

//arcodion
