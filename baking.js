let bakingTime = 45 * 60; // 45 minutes in seconds
let additionalTime = 15 * 60; // 15 minutes in seconds
let broilTime = 2 * 60; // 2 minutes in seconds

let timerInterval;
let timeLeft = bakingTime;

function coverLasagnaWithFoil() {
    // Change the lasagna image to the covered one
    document.getElementById("lasagna-img").src = "images/lasagnacovered.jpg";
    document.getElementById("baking-instructions").textContent = "Lasagna is covered. Bake for 45 minutes.";
    
    // Show the timer and start button
    document.getElementById("timer").style.display = "block";
    document.getElementById("start-timer").style.display = "inline-block";
    
    // Hide the foil image and text
    document.getElementById("foil-img").style.display = "none";
    document.getElementById("lasagna-images").querySelector("p").style.display = "none";
}

function startTimer() {
    document.getElementById("start-timer").disabled = true;
    updateTimerDisplay();

    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            // Once the first 45 minutes are over, show the next steps
            document.getElementById("baking-instructions").textContent = "Remove the foil and sprinkle the top with cheese.";
            document.getElementById("additional-steps").style.display = "block";
            startAdditionalTimer(); // Start the 15 minute timer
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time-left").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startAdditionalTimer() {
    // Start the 15-minute baking time for uncovered lasagna
    timeLeft = additionalTime;
    setTimeout(function() {
        document.getElementById("baking-instructions").textContent = "Broil for 2-3 minutes if desired.";
        startBroilTimer();
    }, additionalTime * 1000);
}

function startBroilTimer() {
    // Broil for 2-3 minutes
    timeLeft = broilTime;
    setTimeout(function() {
        document.getElementById("baking-instructions").textContent = "Rest for at least 15 minutes before cutting.";
        alert("Baking process complete! Rest before serving.");
    }, broilTime * 1000);
}
