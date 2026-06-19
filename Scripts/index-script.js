// Menu móvil
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', openMenu);
}

if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}

const mobileLinks = document.querySelectorAll('.mobile-nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Carrusel
let currentSlide = 0;
const slides = [
    `<div class="carousel-slide">
        <img src="Images/ocasion-casual.jpeg" alt="Ocasión Casual" class="carousel-img">
    </div>`,
    `<div class="carousel-slide">
        <img src="Images/ocasion-escalar.jpeg" alt="Ocasión Escalar" class="carousel-img">
    </div>`,
    `<div class="carousel-slide">
        <img src="Images/ocasion-todo.jpeg" alt="Ocasión Todo" class="carousel-img">
    </div>`
];
const carouselContent = document.getElementById('carouselContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carouselContent.innerHTML = slides[currentSlide];
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.dataset.index);
        updateCarousel();
    });
});

// Auto-advance
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}, 5000);

updateCarousel();
