// Define @font-face rule for OpenDyslexic font
var fontFace = `
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('${chrome.runtime.getURL('fonts/compiled/OpenDyslexic-Regular.woff2')}') format('woff2'),
         url('${chrome.runtime.getURL('fonts/compiled/OpenDyslexic-Regular.woff')}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

// Create a <style> element and add @font-face rule to it
var styleElement = document.createElement('style');
styleElement.textContent = fontFace;

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);

// Function to apply OpenDyslexic font and styles to elements
function applyOpenDyslexicStyles(element) {
  element.style.fontFamily = '"OpenDyslexic", sans-serif';
  element.style.color = "black";
  element.style.backgroundColor = "rgba(255, 253, 231, 0.4)";
}

// Function to handle mutations and apply styles to new elements
function handleMutations(mutations) {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        // Consider removing the nodeType check if you need to style other nodes
        // if (node.nodeType === Node.ELEMENT_NODE) {
          applyOpenDyslexicStyles(node);
        // }
      });
    }
  });
}

// Observe changes to the DOM and apply styles to new elements
const observer = new MutationObserver(handleMutations);
observer.observe(document.body, { childList: true, subtree: true });

// Apply styles to existing elements
document.querySelectorAll('*').forEach(applyOpenDyslexicStyles);
