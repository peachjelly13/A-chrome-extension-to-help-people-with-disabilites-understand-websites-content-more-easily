// Load OpenDyslexic font from Google Fonts
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap';
document.head.appendChild(link);

// Apply OpenDyslexic font to all elements
document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = '"OpenDyslexic", sans-serif';
});
