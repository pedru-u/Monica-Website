// Add a scroll event listener to the document
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Get the current vertical scroll position
    const navbar = document.querySelector('.navbar'); // Select the navbar element
    if (scrollPosition > 0) {
        navbar.classList.add('scrolled'); // Add the 'scrolled' class if the user has scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class if the user is at the top
    };
});

let currentIndex = 0;
let currentIndex2 = 0; 

// Select all dots and cards, and the card container
const dots = document.querySelectorAll('.dot-container ol li'); // Select all dots in the dot container
const cards = document.querySelectorAll('.card-container > div'); // Select all cards inside the card container
const cardContainer = document.querySelector('.card-container');// Select the card container
const achievementDots = document.querySelectorAll('.achievement-section-dot-container ol li'); // Select all achievement dots
const achievementCards = document.querySelectorAll('.achievement-section-holder > div'); // Select all achievement cards inside the achievement card container
const achievementContainer = document.querySelector('.achievement-section-holder'); // Select the achievement card container

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
        // Add the 'active' class to the selected card and dot
        cards[index].classList.add('active');
    });
});

achievementDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const cardWidth = achievementCards[index].offsetWidth;
    achievementContainer.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
    });

    achievementCards.forEach(card => card.classList.remove('active'));

    achievementCards[index].classList.add('active');
    })})


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

achievementContainer.addEventListener('scroll', () => {
    const containerScrollLeft = achievementContainer.scrollLeft;
    const cardWidth = achievementCards[0].offsetWidth; // Get the width of a single card

    const currentIndex = Math.round(containerScrollLeft / cardWidth);

    achievementDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active'); // Highlight the dot corresponding to the visible card
            currentIndex2 = index
        } else {
            dot.classList.remove('active'); // Remove the highlight from other dots
        }
    });
});



// Initialize the current card index

// Function to scroll to the next card
function scrollToNextCard() {
    currentIndex = (currentIndex + 1) % cards.length; // Increment the index and loop back to the first card if necessary
    const cardWidth = cards[0].offsetWidth; // Get the width of a single card

    // Scroll to the next card
    cardContainer.scrollTo({
        left: currentIndex * cardWidth, // Calculate the position of the next card
        behavior: 'smooth', // Enable smooth scrolling
    });

    currentIndex2 = (currentIndex2 + 1) % achievementCards.length; // Increment the index for achievement cards
    const cardWidth2 = achievementCards[0].offsetWidth; // Get the width of a single achievement card
    achievementContainer.scrollTo({
        left: currentIndex2 * cardWidth2,
        behavior: 'smooth', // Enable smooth scrolling
    })
}

// Start a timer to automatically scroll to the next card every 5 seconds
setInterval(scrollToNextCard, 7000);

// Select the form and email input field
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!emailRegex.test(emailValue)) {
        event.preventDefault(); // Prevent form submission
        alert('Por favor, insira um email válido.'); // Show an error message
    } else {
        // Clear all input and textarea fields after successful submission
        form.reset();
    }
});
