// Pin Screen Logic
const pinScreen = document.getElementById('pinScreen');
const mainContent = document.getElementById('mainContent');
const pinButton = document.getElementById('pinButton');

// Check if message has already been pinned (localStorage)
window.addEventListener('DOMContentLoaded', () => {
    const isPinned = localStorage.getItem('messagePinned');
    if (isPinned) {
        revealContent();
    }
});

// Pin Button Click Handler
pinButton.addEventListener('click', () => {
    // Mark as pinned in localStorage
    localStorage.setItem('messagePinned', 'true');
    
    // Animate pin button
    pinButton.style.animation = 'rotate 0.5s ease';
    
    // Delay before revealing content for better UX
    setTimeout(() => {
        revealContent();
    }, 400);
});

// Function to reveal main content
function revealContent() {
    pinScreen.classList.add('hidden');
    mainContent.style.display = 'flex';
}

// Envelope Interaction
const envelope = document.querySelector('.envelope-wrapper');

// Tap to open on Mobile devices
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// If adding music like the TikTok audio, your friend can append this:
// const audio = new Audio('romantic-song.mp3');
// envelope.addEventListener('click', () => { audio.play(); });
