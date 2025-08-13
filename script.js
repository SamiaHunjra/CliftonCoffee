document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');

    const cardsPerPage = 3;
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    let currentPage = 0;
    const cardWidth = 350 + 20; // width + gap

    // Create one dot for each page
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('span');
    dots[0].classList.add('active');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentPage * cardWidth * cardsPerPage}px)`;
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentPage));
    }

    function goToPage(page) {
        currentPage = page;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => {
        currentPage = (currentPage > 0) ? currentPage - 1 : totalPages - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentPage = (currentPage < totalPages - 1) ? currentPage + 1 : 0;
        updateSlider();
    });

    // Optional auto-slide
    setInterval(() => {
        currentPage = (currentPage < totalPages - 1) ? currentPage + 1 : 0;
        updateSlider();
    }, 5000);
});
