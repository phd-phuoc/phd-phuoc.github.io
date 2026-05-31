// Simple script to enhance the website
console.log('Hello Babe! Welcome to the website.');

// Add a click event listener
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});