// Array of image URLs
var imageUrls = [
  "./svg/dice 6.svg",
  "./svg/dice 5.svg",
  "./svg/dice 4.svg",
  "./svg/dice 3.svg",
  "./svg/dice 2.svg",
  "./svg/dice 1.svg",
];

// Function to get a random image URL from the array
function getRandomImageUrl() {
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}


// Function to display random dice images and update h1 text
function displayRandomDiceImages() {
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  var h1 = document.querySelector("h1");

  var randomImage1 = getRandomImageUrl();
  var randomImage2 = getRandomImageUrl();

  img1.setAttribute("src", randomImage1);
  img2.setAttribute("src", randomImage2);

  // Compare the two random images and update h1 text after both animations finish
  var animationCount = 0;
  diceElements.forEach(dice => {
    dice.addEventListener("animationend", () => {
      animationCount++;
      if (animationCount === diceElements.length) {
         // Add a custom animation class to the h1 element
         h1.classList.add("show-result");
        if (randomImage1 === randomImage2) {
          h1.textContent = "It's a Tie";
        } else if (randomImage1 > randomImage2) {
          h1.textContent = "Player 1 wins !";
        } else {
          h1.textContent = "Player 2 wins !";
        }
              // Reset the h1 text after a delay (adjust as needed)
              setTimeout(() => {
                h1.classList.remove("show-result");
                h1.textContent = "Do you have some Luck?";
              }, 2000);
            }
          }, { loop: true });
  });
}


// Function to run when the button is clicked
function onButtonClick() {
  displayRandomDiceImages();
}


// Add event listener to the button element

var button = document.querySelector("#rollDiceBtn");
button.addEventListener("click", onButtonClick);

rollDiceBtn.addEventListener('click', function() {
    const diceElements = diceContainer.querySelectorAll('.dice');
    
    diceElements.forEach(dice => {
        dice.classList.add('roll-animation');
        
        // Remove the roll-animation class after the animation ends
        dice.addEventListener('animationend', function() {
            dice.classList.remove('roll-animation');
        }, { once: true });
    });
});



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Return an integer
}

// Add event listener to the button element
var button = document.querySelector("#rollDiceBtn");
var diceElements = document.querySelectorAll(`.dice`); // Assuming diceContainer is defined

button.addEventListener("click", function () {
  diceElements.forEach(dice => {
    dice.classList.add(".roll-animation");
    
    // Generate a random duration between 1 and 3 seconds (inclusive)
    const seconds = getRandomNumber(1, 3);
    
    // Set the animation style directly
    dice.style.animation = `rollDice ${seconds}s forwards`;
    
    // Use a single animation end listener for each dice
    const handleAnimationEnd = function () {
      dice.style.animation = ''; // Reset animation
      dice.classList.remove(`roll-animation`); // Optionally remove the class
      dice.removeEventListener('animationend', handleAnimationEnd); // Clean up the listener
    };
    
    dice.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
});