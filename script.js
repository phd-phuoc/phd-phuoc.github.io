// Background Music Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

// Set music volume to a comfortable level
backgroundMusic.volume = 0.3;

// Music toggle button functionality
musicToggle.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = '🔊 Music: ON';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = '🔇 Music: OFF';
    }
});

// Attempt to autoplay when page loads
document.addEventListener('DOMContentLoaded', function() {
    backgroundMusic.play().catch(function(error) {
        // Autoplay is blocked, user needs to click to start
        //console.log(error);
        //musicToggle.textContent = '🔇 Music: OFF (Click to play)';
        //backgroundMusic.pause();
    });
});

// Rain of hearts effect on mouse hover - reduced fall rate
let lastHeartTime = 0;
const heartInterval = 30; // Create a heart every 100ms instead of every mousemove
let musicflag=0;

document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastHeartTime > heartInterval) {
        createHeart(e.clientX, e.clientY);
        lastHeartTime = currentTime;
        if (musicflag==0){
            backgroundMusic.play();
            musicflag=1;
        }
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    
    // Random horizontal offset
    const offsetX = (Math.random() - 0.5) * 100;
    
    heart.style.left = (x + offsetX) + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    // Remove heart element after animation completes
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Console message
console.log('Dad love mom - Wishing lots of love and happiness!');
