const steps = [
    { id: "beef", instruction: "Great! You added the beef to the pot.", image: "images/potGroundBeef.jpg" },
    { id: "onion", instruction: "Great! You added the onion to the pot.", image: "images/beefOnionPot.jpg" },
    { id: "garlic", instruction: "Great! You added the garlic to the pot.", image: "images/beefOnionGarlicPot.jpg" },
    { id: "tomato-sauce", instruction: "Great! You added the tomato sauce to the pot.", image: "images/sauceInPot.jpg" },
    { id: "seasoning", instruction: "Great! You added seasoning to the pot.", image: "images/meatSauceWithSeasoning.jpg" },
    { id: "salt", instruction: "Great! You added the salt to the pot.", image: "images/saltInSauce.jpg" },
];

let currentStep = 0;

const instructionDisplay = document.getElementById("current-instruction");
const currentImage = document.getElementById("current-image");

function handleIngredientClick(event) {
    const ingredientId = event.target.closest(".ingredient").id.replace("ingredient-", "");
    const step = steps[currentStep];

    if (step.id === ingredientId) {
        // Update the image and instruction
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;

        // Hide the ingredient after it's clicked
        event.target.closest(".ingredient").style.display = "none";

        currentStep++;

        if (currentStep >= steps.length) {
            instructionDisplay.textContent = "The meat sauce is ready! Move on to the next step.";
            showNextStepButton();
        }
    } else {
        instructionDisplay.textContent = "Please add ingredients in the correct order!";
    }
}

function showNextStepButton() {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Step";
    nextButton.id = "next-step-button";
    nextButton.onclick = () => window.location.href = "cheese-mix.html";

    document.getElementById("game-container").appendChild(nextButton);
}

document.querySelectorAll(".ingredient.clickable").forEach(ingredient => {
    ingredient.addEventListener("click", handleIngredientClick);
});
