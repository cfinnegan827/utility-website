/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    let currentIndex = 0;
  
    function updateCarousel() {
      const angle = 360 / totalCards;
      cards.forEach((card, index) => {
        const rotation = angle * (index - currentIndex);
        card.style.transform = `rotateY(${rotation}deg) translateZ(300px)`;
      });
    }
  
    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCarousel();
    });
  
    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateCarousel();
    });
  
    updateCarousel();
  });
  