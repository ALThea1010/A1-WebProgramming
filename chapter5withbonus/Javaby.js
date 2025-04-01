// Wait for the window to load before running the script
window.addEventListener("load", () => {
    // Select all the sound elements and board divs
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll(".board div");

    // Loop through each board box
    board.forEach((box, index) => {
        // When a box is clicked, play the corresponding sound
        box.addEventListener("click", function() {
            sounds[index].currentTime = 0;  // Reset sound to start
            sounds[index].play();           // Play the sound
        });
    });
});

// Function to convert typed text to speech
function speakText() {
    // Get the text and language selected by the user
    let text = document.getElementById("text").value;
    let language = document.getElementById("language").value;

    // If the text box is empty, show an alert to ask the user to enter text
    if (text.trim() === "") {
        alert("Please enter the text first");
        return;
    }

    // Create a speech object with the typed text
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;  // Set the language for speech

    // Speak the text using the web speech API
    window.speechSynthesis.speak(speech);
}

// Function to stop any ongoing speech
function stopSpeech() {
    window.speechSynthesis.cancel();  // Stop the speech synthesis
}
