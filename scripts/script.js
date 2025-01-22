
//hamburguer//
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//carrosel//
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

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

// Associando os botões às funções corretas
btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Exibindo o console para verificar sliders
console.log(slider);

//trocar icon
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