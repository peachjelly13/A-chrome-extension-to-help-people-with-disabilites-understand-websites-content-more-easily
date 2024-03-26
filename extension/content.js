// Define @font-face rule for OpenDyslexic font
var fontFace = `
    @font-face {
        font-family: 'OpenDyslexic';
        src: url('${chrome.runtime.getURL('fonts/OpenDyslexic-Regular.woff2')}') format('woff2'),
             url('${chrome.runtime.getURL('fonts/OpenDyslexic-Regular.woff')}') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

// Create a <style> element and add @font-face rule to it
var styleElement = document.createElement('style');
styleElement.textContent = fontFace;

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);

// Apply OpenDyslexic font to all elements
document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = '"OpenDyslexic",sans-serif';
    
    // Increase line spacing
    element.style.lineHeight = '1.8'; // Adjust this value as needed
    
    // Increase letter spacing
    element.style.letterSpacing = '0.1em'; // Adjust this value as needed
});
