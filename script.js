// Rain of hearts effect on mouse hover
document.addEventListener('mousemove', function(e) {
    createHeart(e.clientX, e.clientY);
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
    }, 3000);
}

// Console message
console.log('DAD <3 MOM - Wishing lots of love and happiness!');