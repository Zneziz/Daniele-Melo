//slider
const slides = document.getElementById('slides');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

//Numero de slides 
var maxSlides = 4;

maxSlides = maxSlides - 2;

function updateMaxSlides() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        maxSlides = 3; // Adiciona +1 slide para telas menores
    } else {
        maxSlides = 2; // Valor normal para telas grandes
    }
    console.log("maxSlides atualizado para:", maxSlides);
}

updateMaxSlides();

window.matchMedia("(max-width: 768px)").addEventListener("change", updateMaxSlides);


let count = 0;


function destranslateSlider() {
    if (count > 0){
        slides.classList.remove('retranslateX'+count);
        count = count - 1 ;
        slides.classList.add('retranslateX'+count);
    }
    else{
        slides.classList.remove('retranslateX'+count);
        count = count + maxSlides ;
        slides.classList.add('retranslateX'+count);
    }                                                  
}

function translateSlider() {
    if (count < maxSlides){
        slides.classList.remove('retranslateX'+count);
        count = count + 1 ;
        slides.classList.add('retranslateX'+count);
    }
    else{
        slides.classList.remove('retranslateX'+count);
        count = count - maxSlides ;
        slides.classList.add('retranslateX'+count);
    }
}

function nextSlider() {
    translateSlider();
}

function prevSlider() {
    destranslateSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

console.log(slides);
console.log(count);

// trocar botao
document.addEventListener("DOMContentLoaded", function () {
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');
    const icon = document.getElementById('icon-arrow-left');
    const icon2 = document.getElementById('icon-arrow-right');

    if (btnPrev && icon) {
        btnPrev.addEventListener('mouseenter', () => {
            icon.classList.remove('bi-caret-left');
            icon.classList.add('bi-caret-left-fill');
        });

        btnPrev.addEventListener('mouseleave', () => {
            icon.classList.remove('bi-caret-left-fill');
            icon.classList.add('bi-caret-left');
        });
    }

    if (btnNext && icon2) {
        btnNext.addEventListener('mouseenter', () => {
            icon2.classList.remove('bi-caret-right');
            icon2.classList.add('bi-caret-right-fill');
        });

        btnNext.addEventListener('mouseleave', () => {
            icon2.classList.remove('bi-caret-right-fill');
            icon2.classList.add('bi-caret-right');
        });
    }
});