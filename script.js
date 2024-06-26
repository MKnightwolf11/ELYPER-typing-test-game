let startTime;
let typedCharacters = 0;
let timerRunning = false;

function updateWPM() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000 / 60; // in minutes
    const wordsTyped = typedCharacters / 5; // Average word length is 5 characters
    const wpm = wordsTyped / elapsedTime; // Words per minute
    document.getElementById("wpm-text").textContent = `Typing Speed: ${wpm.toFixed(2)} WPM`;

    // Move the runner based on typing progress
    const progress = typedCharacters / document.getElementById("text-input").value.length;
    moveRunner(progress);
}

function moveRunner(progress) {
    const runner = document.querySelector('.runner');
    const containerWidth = document.querySelector('.game-container').offsetWidth;
    const distance = containerWidth * progress;
    runner.style.left = `${distance}px`;
}

document.getElementById("text-input").addEventListener("input", (event) => {
    if (!timerRunning) {
        startTime = new Date().getTime();
        timerRunning = true;
    }
    typedCharacters = event.target.value.length;
    updateWPM();
});