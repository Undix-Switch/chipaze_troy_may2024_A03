document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    // Check for missing values
    if (name === '' || email === '' || feedback === '') {
        // Display error message
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        // Hide error message
        document.getElementById('errorMessage').style.display = 'none';
        
        // Display thank you message
        document.getElementById('thankYouMessage').style.display = 'block';

        // Hide the form
        document.getElementById('feedbackForm').style.display = 'none';
    }
});
