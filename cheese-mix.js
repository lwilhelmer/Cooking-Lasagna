const steps = [
    { id: "mozzarella", instruction: "Great! You added the mozzarella to the bowl.", image: "images/MozarellaInBowl.jpg" },
    { id: "parmesan", instruction: "Great! You added the parmesan to the bowl.", image: "images/MozarellaAndParmesan.jpg" },
    { id: "ricotta", instruction: "Great! You added the ricotta to the bowl.", image: "images/3cheese.jpg" },
    { id: "parsley", instruction: "Great! You added parsley to the bowl.", image: "images/cheeseAndParsley.jpg" },
    { id: "egg", instruction: "Great! You added the egg to the bowl.", image: "images/eggInMix.jpg" },
];

let currentStep = 0;

const instructionDisplay = document.getElementById("current-instruction");
const currentImage = document.getElementById("current-image");

function handleIngredientClick(event) {
    const ingredientId = event.target.closest(".ingredient").id.replace("ingredient-", "");
    const step = steps[currentStep];

    if (step && step.id === ingredientId) {
        // Update the image and instruction
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;

        // Hide the ingredient after it's clicked
        event.target.closest(".ingredient").style.display = "none";

        currentStep++;

        if (currentStep >= steps.length) {
            instructionDisplay.textContent = "Cheese mixture is ready! Move on to the next step.";
            showNextStepButton();
        }
    } else {
        instructionDisplay.textContent = "Please add the ingredients in the correct order!";
    }
}

function showNextStepButton() {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Step";
    nextButton.id = "next-step-button";
    nextButton.onclick = () => window.location.href = "finishing-lasagna.html";

    document.getElementById("game-container").appendChild(nextButton);
}

document.querySelectorAll(".ingredient.clickable").forEach(ingredient => {
    ingredient.addEventListener("click", handleIngredientClick);
});
