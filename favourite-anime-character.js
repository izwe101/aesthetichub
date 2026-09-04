let currentSlideIndex = {};

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach((card, index) => {
        currentSlideIndex[index] = 0;
        showSlide(0, index);
        setInterval(() => autoSlide(index), 5000);
    });
});

function showSlide(n, cardIndex) {
    const card = document.querySelectorAll('.character-card')[cardIndex];
    const slides = card.querySelectorAll('.slide');
    const dots = card.querySelectorAll('.dot');

    if (n >= slides.length) {
        currentSlideIndex[cardIndex] = 0;
    }
    if (n < 0) {
        currentSlideIndex[cardIndex] = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('fade'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex[cardIndex]].classList.add('fade');
    dots[currentSlideIndex[cardIndex]].classList.add('active');
}

function currentSlide(n, cardIndex) {
    currentSlideIndex[cardIndex] = n;
    showSlide(n, cardIndex);
}

function autoSlide(cardIndex) {
    currentSlideIndex[cardIndex]++;
    showSlide(currentSlideIndex[cardIndex], cardIndex);
}
