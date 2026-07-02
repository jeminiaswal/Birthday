const envelope = document.querySelector('.envelope-wrapper');

// Tap to open on Mobile devices
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// If adding music like the TikTok audio, your friend can append this:
// const audio = new Audio('romantic-song.mp3');
// envelope.addEventListener('click', () => { audio.play(); });
