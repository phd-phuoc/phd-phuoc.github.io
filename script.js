// Simple script to enhance the website
console.log('Chúc Gia Linh xinh đẹp ngày 1/6 thật vui vẻ - From bố with lots of love ❤️');

// Add a click event listener
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});