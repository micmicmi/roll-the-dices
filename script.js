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

  // Compare the two random images and update h1 text accordingly
  if (randomImage1 === randomImage2) {
    h1.textContent = "It's a Tie";
  } else if (randomImage1 > randomImage2) {
    h1.textContent = "Player 1 wins !";
  } else {
    h1.textContent = "Player 2 wins !";
  }
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




