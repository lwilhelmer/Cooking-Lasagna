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
    const step = steps.find(step => step.id === ingredientId);

    if (step) {
        currentImage.src = step.image;
        instructionDisplay.textContent = step.instruction;

        event.target.closest(".ingredient").style.display = "none";

        currentStep++;

        if (currentStep >= steps.length) {
            instructionDisplay.textContent = "The meat sauce is ready! Move on to the next step.";
        }
    }
}

document.querySelectorAll(".ingredient").forEach((ingredient) => {
    ingredient.addEventListener("click", (event) => {
        const ingredientName = event.target.textContent;
        console.log(`You clicked ${ingredientName}`);
        document.getElementById("current-instruction").textContent = `You added ${ingredientName}!`;
    });
});

