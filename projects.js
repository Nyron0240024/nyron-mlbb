const track = document.querySelector('.projects-track');
const cards = document.querySelectorAll('.project-card');

const prevButton = document.querySelector('.project-prev');
const nextButton = document.querySelector('.project-next');

const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.querySelector('.modal-close');

let currentPosition = 0;

function updateSlider() {
    track.style.transform = `translateX(${currentPosition}px)`;
}

nextButton.addEventListener('click', () => {
    const maxMove = -(track.scrollWidth - track.parentElement.clientWidth);

    currentPosition -= 330;

    if (currentPosition < maxMove) {
        currentPosition = maxMove;
    }

    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentPosition += 330;

    if (currentPosition > 0) {
        currentPosition = 0;
    }

    updateSlider();
});


/* ОТКРЫТИЕ ПРОЕКТА */

cards.forEach(card => {

    card.addEventListener('click', () => {

        const type = card.dataset.type;
        const src = card.dataset.src;

        modalContent.innerHTML = '';

        if (type === 'image') {

            const image = document.createElement('img');

            image.src = src;
            image.alt = 'Проект';

            modalContent.appendChild(image);

        } else if (type === 'video') {

            const video = document.createElement('video');

            video.src = src;
            video.controls = true;
            video.autoplay = true;

            modalContent.appendChild(video);
        }

        modal.classList.add('active');
    });

});


/* ЗАКРЫТИЕ */

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
    modalContent.innerHTML = '';
});


modal.addEventListener('click', (event) => {

    if (event.target === modal) {

        modal.classList.remove('active');
        modalContent.innerHTML = '';

    }

});
