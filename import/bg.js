const generateStars = (count) => {
    const starsOverlay = document.querySelector('.stars-overlay');
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Random positions within the viewport
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
  
      // Random blink animation duration
      star.style.animationDuration = `${Math.random() * 1 + 2}s`;
      
      starsOverlay.appendChild(star);
    }
  };
  
  // Generate stars when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const starsCount = 300; // Adjust the number of stars
    generateStars(starsCount);
  });
  
  const createOverlayStars = (starPositions) => {
    const starsOverlay = document.querySelector('.stars-overlay');
    
    starPositions.forEach(({ top, left }) => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${top}px`;
      star.style.left = `${left}px`;
      starsOverlay.appendChild(star);
    });
  };
  
  // Define positions of stars (match the positions in your background image)
  const starPositions = [
    { top: 50, left: 100 },
    { top: 200, left: 400 },
    { top: 300, left: 800 },
    // Add more positions...
  ];
  
  // Generate the overlay stars
  document.addEventListener('DOMContentLoaded', () => {
    createOverlayStars(starPositions);
  });

  // Array of image paths (replace these with your actual image paths)
const images = [
  '/import/star/star_1.png',
  '/import/star/star_2.png',
  '/import/star/star_3.png',
  '/import/star/star_4.png',
  '/import/star/star_5.png',
  '/import/star/star_6.png',
  '/import/star/star_7.png',
  '/import/star/star_8.png',
  '/import/star/star_9.png',
  '/import/star/star_10.png',
  '/import/star/star_11.png',
  '/import/star/star_12.png',
  '/import/star/star_13.png',
  '/import/star/star_14.png',
  '/import/star/star_15.png',
  '/import/star/star_16.png',
  '/import/star/star_17.png',
  '/import/star/star_18.png',
  '/import/star/star_19.png',
  '/import/star/star_20.png',
  '/import/star/star_21.png',
  '/import/star/star_22.png',
  '/import/star/star_23.png',
  '/import/star/star_24.png',
];

// Function to select a random image
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length); // Random index
  return images[randomIndex];
}

// Apply the random image to the background
const background = document.getElementById('background');
background.style.backgroundImage = `url('${getRandomImage()}')`;
