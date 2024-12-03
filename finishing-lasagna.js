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

// Handle the oven step
document.getElementById("oven-submit").addEventListener("click", function () {
    const ovenInput = document.getElementById("oven-input").value.trim();

    if (ovenInput === "350") {
        currentImage.src = steps[currentStep].image;
        instructionDisplay.textContent = steps[currentStep].instruction;

        // Hide the oven input box and proceed to the next step
        document.getElementById("ingredient-oven").style.display = "none";
        currentStep++;
    } else {
        instructionDisplay.textContent = "Please type '350' to turn on the oven.";
    }
});

// Handle the ingredient click for other steps
function handleIngredientClick(event) {
    const ingredientId = event.target.closest(".ingredient").id.replace('ingredient-', '');
    const step = steps[currentStep];

    if (step.id === ingredientId) {
        // Update the main image and instruction
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;

        // Hide the ingredient once it's clicked
        document.getElementById(`ingredient-${ingredientId}`).style.display = "none";

        // Move to the next step
        currentStep++;
        layerCount++;

        console.log("Current layer count:", layerCount);

        // Check if layers are done or repeat
        if (layerCount % 3 === 0 && layerCount < 9) {
            instructionDisplay.textContent = "Repeat the layers: Sauce, Noodles, Cheese.";
        }

        if (layerCount === 3) {
            instructionDisplay.textContent = "Repeat the Layers: Sauce, Noodles, Cheese then cover it with foil and put it in the oven!";
            showNextStepButton();
        }
    } else {
        instructionDisplay.textContent = "Please follow the steps in order!";
    }
}

// Show the "Next Step" button after lasagna is assembled
function showNextStepButton() {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Bake Lasagna!";
    nextButton.id = "next-step-button";
    nextButton.onclick = () => window.location.href = "baking.html";

    document.getElementById("game-container").appendChild(nextButton);
}

// Add event listeners to ingredients
document.querySelectorAll(".ingredient.clickable").forEach(ingredient => {
    ingredient.addEventListener("click", handleIngredientClick);
});