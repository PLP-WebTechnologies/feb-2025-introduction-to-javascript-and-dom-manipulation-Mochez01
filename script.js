// Change the text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const introText = document.getElementById('intro-text');

changeTextButton.addEventListener('click', function() {
  introText.textContent = "The text has been changed with JavaScript!";
  introText.style.color = "blue"; // Modify CSS styles via JavaScript
  introText.style.fontSize = "20px";
});

// Add or Remove an element dynamically
const toggleBoxButton = document.getElementById('toggle-box-btn');
const boxContainer = document.getElementById('box-container');

toggleBoxButton.addEventListener('click', function() {
  const existingBox = document.getElementById('dynamic-box');

  if (existingBox) {
    boxContainer.removeChild(existingBox);
  } else {
    const newBox = document.createElement('div');
    newBox.id = 'dynamic-box';
    newBox.textContent = "I'm a new box!";
    newBox.style.width = "150px";
    newBox.style.height = "150px";
    newBox.style.backgroundColor = "lightgreen";
    newBox.style.display = "flex";
    newBox.style.alignItems = "center";
    newBox.style.justifyContent = "center";
    newBox.style.marginTop = "20px";

    boxContainer.appendChild(newBox);
  }
});