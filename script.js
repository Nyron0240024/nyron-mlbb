const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const total = images.length;

// ПЕРЕКЛЮЧЕНИЕ
function showSlide(i) {
    if (i >= total) index = 0;
    else if (i < 0) index = total - 1;
    else index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;
}

// КНОПКИ
next.addEventListener('click', () => {
    showSlide(index + 1);
});

prev.addEventListener('click', () => {
    showSlide(index - 1);
});

// АВТО (каждые 10 секунд)
setInterval(() => {
    showSlide(index + 1);
}, 10000);