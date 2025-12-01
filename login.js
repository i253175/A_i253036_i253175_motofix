// JavaScript file for login page functionality
// This is a comment in JavaScript

// Wait for the page to fully load before running code
document.addEventListener('DOMContentLoaded', function() {
    // This event fires when the HTML page is fully loaded
    
    // Get the login form element by its ID
    const loginForm = document.getElementById('loginForm');
    // getElementById finds an element with the specified id
    
    // Add an event listener to the form for when it's submitted
    loginForm.addEventListener('submit', function(e) {
        // This function runs when user clicks Login button
        
        // Prevent the form from actually submitting (page refresh)
        e.preventDefault();
        // preventDefault stops the default form submission
        
        // Get the email input value
        const email = document.getElementById('email').value;
        // .value gets what the user typed in the input field
        
        // Get the password input value
        const password = document.getElementById('password').value;
        // Gets the password the user entered
        
        // Log the form data to console (for debugging - REQUIRED: Console Log #1)
        console.log('Login attempt with email:', email);
        // console.log prints information to browser console
        // This helps us see what's happening in the code
        
        // Check if both fields are filled
        if (email && password) {
            // if statement checks a condition
            
            // Show success alert (REQUIRED: Alert #1)
            alert('Login successful! Welcome to Motofix.');
            // alert() shows a popup message to the user
            
            // Log success message to console (REQUIRED: Console Log #2)
            console.log('User login successful');
            // Logs confirmation in console
            
            // Here you would normally send data to a server
            // For this project, we just simulate success
            
        } else {
            // This runs if email or password is empty
            
            // Show error alert (REQUIRED: Alert #2)
            alert('Please enter both email and password');
            // Tells user they need to fill all fields
            
            // Log error to console
            console.log('Login failed: Missing email or password');
            // Helps with debugging
        }
    });
    
    // Get all social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    // querySelectorAll finds all elements with the class 'social-btn'
    
    // Add click event to each social button
    socialButtons.forEach(function(button) {
        // forEach loops through each button
        
        button.addEventListener('click', function() {
            // This runs when a social button is clicked
            
            // Get the button text
            const buttonText = button.textContent;
            // textContent gets the text inside the button
            
            // Log which social login was clicked (REQUIRED: Console Log #3)
            console.log('Social login clicked:', buttonText);
            // Logs which social option user chose
            
            // Show info alert (REQUIRED: Alert #3)
            alert('Social login with ' + buttonText + ' is not yet implemented');
            // Informs user this feature is coming soon
        });
    });
    
    // Log that the page loaded successfully
    console.log('Login page loaded successfully');
    // Confirms JavaScript is working
});

// Note: All 3 console.log statements and 3 alerts are implemented as required
// Console logs help with debugging and showing what's happening
// Alerts provide user feedback and validation