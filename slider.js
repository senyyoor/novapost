let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none'); // Приховати всі слайди
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // Перехід на перший слайд, якщо поточний останній
  slides[slideIndex - 1].style.display = 'block'; // Показати поточний слайд
  setTimeout(showSlides, 2000); // Змінювати слайди кожні 2 секунди
}

showSlides(); // Запустити слайдер
