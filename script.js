const textToType = "Type this text as fast as you can!";
const timeLimit = 30; // seconds

let score = 0;
let timer;
let timeLeft = timeLimit;

document.getElementById("text-to-type").textContent = textToType;

document.getElementById("user-input").addEventListener("input", function() {
    const userInput = this.value;
    if (userInput === textToType) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
        this.value = "";
        startNewRound();
    }
});

function startNewRound() {
    // Generate a new text (for simplicity, reusing the same text here)
    document.getElementById("text-to-type").textContent = textToType;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = `Time left: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert(`Game over! Your score is ${score}`);
    document.getElementById("user-input").disabled = true;
}

window.onload = function() {
    startTimer();
}
