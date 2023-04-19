// Define the primary and secondary colors
const primaryColors = ['red', 'yellow', 'blue'];
const secondaryColors = ['purple', 'green', 'orange'];

// Get the color boxes from the HTML document
const colorBoxes = document.querySelectorAll('.color-box');

// Choose a random secondary color at the beginning of the game
const secondaryColor = secondaryColors[Math.floor(Math.random() * secondaryColors.length)];
document.getElementById('secondary-color').classList.add(secondaryColor);

// Keep track of the selected primary colors
let selectedColors = [];

// Add event listeners to the color boxes
colorBoxes.forEach(colorBox => {
  colorBox.addEventListener('click', () => {
    // Add the color to the selected colors list
    selectedColors.push(colorBox.classList[1]);
    colorBox.classList.add('selected');

    // If two primary colors have been selected, check if they make the secondary color
    if (selectedColors.length === 2) {
      if (selectedColors.includes('red') && selectedColors.includes('yellow') && secondaryColor === 'orange' ||
          selectedColors.includes('red') && selectedColors.includes('blue') && secondaryColor === 'purple' ||
          selectedColors.includes('yellow') && selectedColors.includes('blue') && secondaryColor === 'green') {
        document.getElementById('message').textContent = 'Congratulations! You made the secondary color.';
      } else {
        document.getElementById('message').textContent = 'Sorry, that combination does not make the secondary color.';
      }

      // Reset the selected colors list and color boxes
      selectedColors = [];
      colorBoxes.forEach(colorBox => colorBox.classList.remove('selected'));
    }
  });
});

// Add an event listener to the refresh button

let retart = document.getElementById('refresh-button');

retart.addEventListener('click' ,function(e){
  e.preventDefault()
  location.reload()
})