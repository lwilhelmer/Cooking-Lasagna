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

    console.log("Current step:", currentStep, "Ingredient ID:", ingredientId);

    if (step.id === ingredientId) {
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;
        document.getElementById(`ingredient-${ingredientId}`).style.display = "none";
        currentStep++;
        layerCount++;

        console.log("Layer count:", layerCount); // Debugging layer count

        if (layerCount === 4) {
            console.log("All layers added. Showing the next button...");
            showNextStepButton(); // Show the button after all layers are added
        }
    } else {
        instructionDisplay.textContent = "Please follow the steps in order.";
    }
}

// Show the 'Next Step' button after all layers are added
function showNextStepButton() {
    console.log("Creating the 'Next Step' button...");

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Step";
    nextButton.id = "next-step-button";
    nextButton.onclick = () => window.location.href = "baking.html"; 

    // Appending the button to the game container
    document.getElementById("game-container").appendChild(nextButton);
}

// Add event listeners to ingredients
document.querySelectorAll(".ingredient.clickable").forEach(ingredient => {
    ingredient.addEventListener("click", handleIngredientClick);
});
