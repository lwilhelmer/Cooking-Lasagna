const steps = [
    { id: "oven", instruction: "Great! You turned on the oven to 350 degrees.", image: "images/oven.jpg" },
    { id: "meat-sauce", instruction: "Great! You added the sauce to the lasagna.", image: "images/meatInPan.jpg" },
    { id: "noodles", instruction: "Great! You added the lasagna noodles.", image: "images/meatAndNoodles.jpg" },
    { id: "cheese-mixture", instruction: "Great! You added the cheese mixture.", image: "images/meatAndNoodlesAndCheese.jpg" },
];

let currentStep = 0;
let layerCount = 0;

const instructionDisplay = document.getElementById("instruction");
const currentImage = document.getElementById("current-image");

// Handle oven input
document.getElementById("oven-submit").addEventListener("click", function () {
    const ovenInput = document.getElementById("oven-input").value.trim();
    if (ovenInput === "350") {
        currentImage.src = steps[currentStep].image;
        instructionDisplay.textContent = steps[currentStep].instruction;
        document.getElementById("ingredient-oven").style.display = "none";
        currentStep++;
    } else {
        instructionDisplay.textContent = "Please type '350' to turn on the oven.";
    }
});

// Handle ingredient clicks
function handleIngredientClick(event) {
    const ingredientId = event.target.closest(".ingredient").id.replace('ingredient-', '');
    const step = steps[currentStep];

    if (step.id === ingredientId) {
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;
        document.getElementById(`ingredient-${ingredientId}`).style.display = "none";
        currentStep++;
        layerCount++;

        // Check layer count and show the baking button after all steps
        if (layerCount === 4) {
            showBakingButton();
        }
    } else {
        instructionDisplay.textContent = "Please follow the steps in order.";
    }
}

// Show the "Start Baking" button
function showBakingButton() {
    const bakingButton = document.createElement("button");
    bakingButton.textContent = "Start Baking";
    bakingButton.id = "bake-lasagna-button";
    bakingButton.onclick = startBaking;

    document.getElementById("baking-step").appendChild(bakingButton);
}

// Simulate baking process with timer
function startBaking() {
    instructionDisplay.textContent = "Cover with foil and bake for 45 minutes.";
    currentImage.src = "images/lasagnaCoveredWithFoil.jpg";
    
    // Timer for 45 minutes of baking
    startTimer(45, function () {
        instructionDisplay.textContent = "Remove foil, add cheese, and bake uncovered for 15 minutes.";
        currentImage.src = "images/lasagnaWithExtraCheese.jpg";
        
        // Timer for 15 minutes of uncovered baking
        startTimer(15, function () {
            instructionDisplay.textContent = "Broil for 2-3 minutes if desired.";
            currentImage.src = "images/lasagnaBakingUncovered.jpg";
            
            // Timer for broiling
            setTimeout(() => {
                instructionDisplay.textContent = "Rest for 15 minutes before cutting.";
                currentImage.src = "images/finishedLasagna.jpg";
                
                // Timer for resting
                startTimer(15, function () {
                    instructionDisplay.textContent = "Lasagna is ready! Enjoy your meal!";
                    currentImage.src = "images/finishedLasagna.jpg";
                });
            }, 2000); // Broil for 2-3 minutes
        });
    });
}

// Start the countdown timer and display remaining time
function startTimer(minutes, callback) {
    const timerDisplay = document.getElementById("timer-display");
    let timeRemaining = minutes * 60; // Convert minutes to seconds
    
    const interval = setInterval(function () {
        const minutesLeft = Math.floor(timeRemaining / 60);
        const secondsLeft = timeRemaining % 60;
        
        timerDisplay.textContent = `Time remaining: ${minutesLeft}m ${secondsLeft}s`;
        timeRemaining--;
        
        if (timeRemaining < 0) {
            clearInterval(interval);
            callback();
        }
    }, 1000); // Update every second
}

// Add event listeners to ingredients
document.querySelectorAll(".ingredient.clickable").forEach(ingredient => {
    ingredient.addEventListener("click", handleIngredientClick);
});
