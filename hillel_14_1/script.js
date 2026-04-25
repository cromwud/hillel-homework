
const images = ['4.jpg', '5.jpg', '6.jpg'];
let currentIndex = 0;


const sliderImg = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');


function createDots() {
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        
        dotsContainer.appendChild(dot);
    });
}


function updateSlider() {
    sliderImg.src = images[currentIndex];
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === images.length - 1);
      const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});


createDots();
updateSlider();