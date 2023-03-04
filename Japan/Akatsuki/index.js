const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentItem = 0;

function showItem() {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[currentItem].classList.add('active');
}

function nextItem() {
    currentItem++;
    if (currentItem >= carouselItems.length) {
        currentItem = 0;
    }
    showItem();
}

function prevItem() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = carouselItems.length - 1;
    }
    showItem();
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);