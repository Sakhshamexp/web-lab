// Select the button and the hidden message element from the HTML
const button = document.getElementById('actionBtn');
const successMessage = document.getElementById('successMessage');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Remove the 'hidden' class to make the message visible
    successMessage.classList.remove('hidden');
    
    // Optionally alert the user as well for an extra interactive touch
    // alert("Hello! Project is running successfully \u2705");
});
