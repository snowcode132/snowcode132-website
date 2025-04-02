function checkEnter(event) {
    const inputNumber = document.getElementById("numberInput").value;
    const targetNumber = "022424"; // Change this to the correct number

    const heartContainer = document.querySelector(".heart-container");
    const errorMessage = document.getElementById("errorMessage");
    const numberInput = document.getElementById("numberInput");
    const videoContainer = document.getElementById("videoContainer");

    // Trigger when Enter is pressed
    if (event.key === "Enter") {
        if (inputNumber === targetNumber) {
            heartContainer.style.display = "flex";  // Show heart & text
            errorMessage.style.display = "none";   // Hide error message
            numberInput.style.display = "none";    // Hide input field

            // After 3 seconds, hide heart and show video
            setTimeout(() => {
                heartContainer.style.display = "none";
                videoContainer.style.display = "block";
            }, 3000);
        } else {
            heartContainer.style.display = "none"; // Hide heart & text
            errorMessage.style.display = "block";  // Show error message
        }
    }
}