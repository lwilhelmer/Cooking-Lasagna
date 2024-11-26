// Define the steps and images for the cheese mixture
const steps = [
    { id: "mozzarella", instruction: "Great! You added the mozzarella to the bowl.", image: "images/MozarellaInBowl.jpg" },
    { id: "parmesan", instruction: "Great! You added the parmesan to the bowl.", image: "images/MozarellaAndParmesan.jpg" },
    { id: "ricotta", instruction: "Great! You added the ricotta to the bowl.", image: "images/3cheese.jpg" },
    { id: "parsley", instruction: "Great! You added parsley to the bowl.", image: "images/cheeseAndParsley.jpg" },
    { id: "egg", instruction: "Great! You added the egg to the bowl.", image: "images/eggInMix.jpg" },
];

let currentStep = 0;

const instructionDisplay = document.getElementById("instruction");
const currentImage = document.getElementById("current-image");

// Handle the ingredient click for the cheese mixture
function handleIngredientClick(event) {
    const ingredientId = event.target.closest(".ingredient").id.replace('ingredient-', '');

    const step = steps.find(step => step.id === ingredientId);

    if (step) {
        // Update the main image and instruction
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;

        // Hide the ingredient once it's clicked
        event.target.closest(".ingredient").style.display = "none";

        // Move to the next step
        currentStep++;

        // If all ingredients are added, show the next step button
        if (currentStep >= steps.length) {
            instructionDisplay.textContent = "Cheese mixture is ready! Now, let's assamble the Lasagna!";
            showNextStepButton();
        }
    }
}

// Show the "Next Step" button when the meat sauce is complete
function showNextStepButton() {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Step: Assamble Lasagna";
    nextButton.id = "next-step-button";
    nextButton.onclick = () => window.location.href = "finishing-lasagna.html"; // Navigation to the cheese mixture page

    document.getElementById("game-container").appendChild(nextButton);
}


// Add event listeners to ingredients
document.querySelectorAll(".ingredient").forEach(ingredient => {
    ingredient.addEventListener("click", handleIngredientClick);
});
