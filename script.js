// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const images = document.querySelectorAll(".image");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");
      const category = button.dataset.category;

      images.forEach(image => {
        const imageCategory = image.dataset.category;
        if (category === "all" || imageCategory === category) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });

  // Lightbox functionality
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showLightbox(img.querySelector("img").src);
    });
  });

  function showLightbox(src) {
    lightbox.classList.add("active");
    lightboxImage.src = src;
  }

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  nextBtn.addEventListener("click", () => {
    do {
      currentIndex = (currentIndex + 1) % images.length;
    } while (images[currentIndex].style.display === "none");
    lightboxImage.src = images[currentIndex].querySelector("img").src;
  });

  prevBtn.addEventListener("click", () => {
    do {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } while (images[currentIndex].style.display === "none");
    lightboxImage.src = images[currentIndex].querySelector("img").src;
  });

  // Close on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.remove("active");
    }
  });
});