function checkEnter(event) {
    const inputNumber = document.getElementById("numberInput").value;
    const targetNumber = "1234"; // Set your trigger number here

    const heartContainer = document.querySelector(".heart-container");
    const errorMessage = document.getElementById("errorMessage");
    const numberInput = document.getElementById("numberInput");

    // Trigger when Enter is pressed
    if (event.key === "Enter") {
        // If number matches the target number, show the heart and loading text
        if (inputNumber === targetNumber) {
            heartContainer.style.display = "flex"; // Show heart & text container
            errorMessage.style.display = "none";  // Hide error message
            numberInput.style.display = "none";   // Hide input field
        } else {
            heartContainer.style.display = "none"; // Hide heart & text container
            errorMessage.style.display = "block";  // Show error message
        }
    }
}