
//hamburguer//
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//slider
const slides = document.getElementById('slides');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let count = 0;
const maxSlides = 2 ;

function destranslateSlider() {
    if (count > 0){
        slides.classList.remove('translateX'+count);
        count = count - 1 ;
        slides.classList.add('translateX'+count);
    }
    else{
        slides.classList.remove('translateX'+count);
        count = count + maxSlides ;
        slides.classList.add('translateX'+count);
    }                                                  
}

function translateSlider() {
    if (count < maxSlides){
        slides.classList.remove('translateX'+count);
        count = count + 1 ;
        slides.classList.add('translateX'+count);
    }
    else{
        slides.classList.remove('translateX'+count);
        count = count - maxSlides ;
        slides.classList.add('translateX'+count);
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

//trocar icon 
        

