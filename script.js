const images = document.querySelectorAll('.gallery .image img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox(img.src);
  });
});

function showLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Filter Functionality
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const category = btn.dataset.category;
    document.querySelectorAll('.gallery .image').forEach(image => {
      const imgCategory = image.dataset.category;
      if (category === 'all' || category === imgCategory) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});