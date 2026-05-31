// Rain of hearts effect on mouse hover - reduced fall rate
let lastHeartTime = 0;
const heartInterval = 30; // Create a heart every 100ms instead of every mousemove

document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastHeartTime > heartInterval) {
        createHeart(e.clientX, e.clientY);
        lastHeartTime = currentTime;
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
