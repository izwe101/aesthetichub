let currentSlideIndex = {};

// Initialize all slideshows
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.character-container');
    containers.forEach((container, index) => {
        currentSlideIndex[index] = 0;
        showSlide(0, index);
        // Auto-advance slides every 5 seconds
        setInterval(() => autoSlide(index), 5000);
    });
});

// Show slide for a specific container
function showSlide(n, containerIndex) {
    const container = document.querySelectorAll('.character-container')[containerIndex];
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');

    if (n >= slides.length) {
        currentSlideIndex[containerIndex] = 0;
    }
    if (n < 0) {
        currentSlideIndex[containerIndex] = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('fade'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex[containerIndex]].classList.add('fade');
    dots[currentSlideIndex[containerIndex]].classList.add('active');
}

// Manual slide selection via dots
function currentSlide(n, containerIndex) {
    currentSlideIndex[containerIndex] = n;
    showSlide(n, containerIndex);
}

// Auto-advance slides
function autoSlide(containerIndex) {
    currentSlideIndex[containerIndex]++;
    showSlide(currentSlideIndex[containerIndex], containerIndex);
}
