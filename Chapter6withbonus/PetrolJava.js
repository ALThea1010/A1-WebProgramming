// Function to calculate the total cost
function calculateTotal() {
    // Cache DOM elements
    const fuelPriceElement = document.getElementById("fuelPrice");
    const fuelAmountElement = document.getElementById("fuelAmount");
    const answerElement = document.getElementById("answer");

    // Get values from input fields
    const pricePerLiterValue = fuelPriceElement.value;
    const litersValue = fuelAmountElement.value;

    // Add input validation
    if (!isNaN(pricePerLiterValue) && !isNaN(litersValue)) {
        const pricePerLiter = parseFloat(pricePerLiterValue);
        const liters = parseFloat(litersValue);

        // Calculate total cost
        const totalCost = pricePerLiter * liters;

        // Display the total cost
        if (!Number.isNaN(totalCost)) {
            answerElement.innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
        } else {
            answerElement.innerHTML = "Please enter valid numbers.";
        }
    } else {
        answerElement.innerHTML = "Please enter valid numbers.";
    }
}
  