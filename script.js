function openGift() {
    const giftContainer = document.getElementById('giftContainer');
    const contentContainer = document.getElementById('contentContainer');

    // Add animation class to the gift container
    giftContainer.classList.add('gift-open-animation');

    // Wait for the animation to complete before showing content
    setTimeout(() => {
        giftContainer.style.display = 'none';
        contentContainer.style.display = 'block';
        contentContainer.classList.add('content-reveal');

        // Smooth scroll to the content
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1000); // This matches the animation duration
}


// Add any additional interactive features here
// Example: You can add hover effects for photos
document.querySelectorAll('.photo-frame').forEach(frame => {
    frame.addEventListener('mouseover', () => {
        frame.style.transform = 'scale(1.05)';
    });

    frame.addEventListener('mouseout', () => {
        frame.style.transform = 'scale(1)';
    });
});

/// Function to create floating decorations with emojis
function createFloatingDecorations() {
    const decorationsContainer = document.querySelector('.floating-decorations');
    const numDecorations = 143; // Number of decorations to create

    // Array of emojis to use
    const emojis = ['❤️', '🌸', '🌹', '💮', '🌺', '🌻', '🌼', '💐'];

    for (let i = 0; i < numDecorations; i++) {
        const decoration = document.createElement('span');
        // Randomly pick an emoji from the array
        decoration.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        decoration.style.left = `${Math.random() * 100}%`; // Random horizontal position
        decoration.style.top = `${Math.random() * 100}%`; // Random vertical position
        decoration.style.animationDuration = `${5 + Math.random() * 10}s`; // Random animation speed
        decoration.style.fontSize = `${20 + Math.random() * 90}px`; // Random size
        decorationsContainer.appendChild(decoration);
    }
}

// Call the function when the page loads
window.onload = createFloatingDecorations;