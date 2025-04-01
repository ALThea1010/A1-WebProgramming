// Initialize game variables
let score = 0;
let lives = 3;

// Load sound effects
const correctSound = new Audio('pp9dohg1IqA.mp3');
const incorrectSound = new Audio('CQeezCdF4mk.mp3');

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to start a new round
function newRound() {
    const correctColor = getRandomColor();
    document.getElementById('rgb-value').textContent = correctColor.toUpperCase();

    const options = document.getElementById('options');
    options.innerHTML = ''; // Clear previous options

    // Generate color options
    const correctIndex = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) {
        const colorOption = document.createElement('div');
        colorOption.classList.add('color-option');
        colorOption.style.backgroundColor = i === correctIndex ? correctColor : getRandomColor();
        colorOption.addEventListener('click', () => checkAnswer(i === correctIndex, colorOption));
        options.appendChild(colorOption);
    }
}

// Function to check the user's answer
function checkAnswer(isCorrect, element) {
    const message = document.getElementById('message');
    if (isCorrect) {
        score++;
        message.textContent = 'Correct!';
        correctSound.play();
        createPopperEffect(element);
    } else {
        lives--;
        message.textContent = 'Incorrect!';
        incorrectSound.play();
    }
    updateScoreAndLives();
    if (lives > 0) {
        setTimeout(newRound, 1000);
    } else {
        message.textContent = `Game Over! Final Score: ${score}`;
        document.getElementById('reset').style.display = 'block';
    }
}

// Function to update score and lives display
function updateScoreAndLives() {
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('lives').textContent = `Lives: ${lives}`;
}

// Function to create a party popper effect
function createPopperEffect(element) {
    const popper = document.createElement('div');
    popper.classList.add('popper');
    element.appendChild(popper);
    setTimeout(() => element.removeChild(popper), 500);
}

// Event listener for the reset button
document.getElementById('reset').addEventListener('click', () => {
    score = 0;
    lives = 3;
    document.getElementById('reset').style.display = 'none';
    document.getElementById('message').textContent = '';
    updateScoreAndLives();
    newRound();
});

// Start the first round
newRound();