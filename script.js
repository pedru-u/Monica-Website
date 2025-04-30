// Add a scroll event listener to the document
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Get the current vertical scroll position
    const navbar = document.querySelector('.navbar'); // Select the navbar element
    if (scrollPosition > 0) {
        navbar.classList.add('scrolled'); // Add the 'scrolled' class if the user has scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class if the user is at the top
    }
});

// Select all dots and cards, and the card container
const dots = document.querySelectorAll('.dot-container ol li'); // Select all dots in the dot container
const cards = document.querySelectorAll('.card-container > div'); // Select all cards inside the card container
const cardContainer = document.querySelector('.card-container'); // Select the card container

// Add click event listeners to each dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const cardWidth = cards[index].offsetWidth; // Get the width of a single card
        cardContainer.scrollTo({
            left: index * cardWidth, // Scroll to the position of the selected card
            behavior: 'smooth', // Enable smooth scrolling
        });

        // Remove the 'active' class from all cards and dots
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // Add the 'active' class to the selected card and dot
        cards[index].classList.add('active');
        dot.classList.add('active');
    });
});

// Add a scroll event listener to the card container
cardContainer.addEventListener('scroll', () => {
    const containerScrollLeft = cardContainer.scrollLeft; // Get the horizontal scroll position of the card container
    const cardWidth = cards[0].offsetWidth; // Get the width of a single card

    // Determine the currently visible card based on the scroll position
    const currentIndex = Math.round(containerScrollLeft / cardWidth);

    // Update the 'active' class for dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active'); // Highlight the dot corresponding to the visible card
        } else {
            dot.classList.remove('active'); // Remove the highlight from other dots
        }
    });
});

// Initialize the current card index
let currentIndex = 0;

// Function to scroll to the next card
function scrollToNextCard() {
    currentIndex = (currentIndex + 1) % cards.length; // Increment the index and loop back to the first card if necessary
    const cardWidth = cards[0].offsetWidth; // Get the width of a single card

    // Scroll to the next card
    cardContainer.scrollTo({
        left: currentIndex * cardWidth, // Calculate the position of the next card
        behavior: 'smooth', // Enable smooth scrolling
    });

    // Update the 'active' class for dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active'); // Highlight the dot corresponding to the visible card
        } else {
            dot.classList.remove('active'); // Remove the highlight from other dots
        }
    });
}

// Start a timer to automatically scroll to the next card every 5 seconds
setInterval(scrollToNextCard, 7000);
