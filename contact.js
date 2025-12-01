// JavaScript for Contact Us page

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Runs when HTML is loaded
    
    // Log page load
    console.log('Contact Us page loaded successfully');
    // Confirms page is working
    
    // Get the contact form
    const contactForm = document.getElementById('contactForm');
    // Finds form by its ID
    
    // Add submit event listener to form
    contactForm.addEventListener('submit', function(e) {
        // This runs when form is submitted
        
        // Prevent page reload
        e.preventDefault();
        // Stops default form behavior
        
        // Get form input values
        const fullName = document.getElementById('fullName').value;
        // Gets the name entered
        const email = document.getElementById('email').value;
        // Gets the email entered
        const message = document.getElementById('message').value;
        // Gets the message entered
        
        // Log form data to console
        console.log('Contact form submitted with:');
        console.log('Name:', fullName);
        console.log('Email:', email);
        console.log('Message:', message);
        // Shows all form data in console for debugging
        
        // Check if all fields are filled
        if (fullName && email && message) {
            // If all fields have values
            
            // Show success alert
            alert('Thank you for contacting us! We will get back to you soon.');
            // Confirms submission to user
            
            // Clear the form fields
            contactForm.reset();
            // Empties all input fields
            
            // Log success
            console.log('Form submitted successfully and cleared');
            // Confirms in console
            
        } else {
            // If any field is empty
            
            // Show error alert
            alert('Please fill in all fields before submitting');
            // Tells user to complete form
            
            // Log error
            console.log('Form submission failed: Missing fields');
            // Logs the error for debugging
        }
    });
    
    // Get account link
    const accountLink = document.querySelector('.account-link');
    // Finds account link element
    
    // Add click event to account link
    accountLink.addEventListener('click', function() {
        // Runs when account is clicked
        
        // Log the click
        console.log('My Account clicked from Contact page');
        // Tracks user interaction
        
        // Show alert
        alert('Redirecting to My Account page');
        // Informs user
    });
    
    // Get all contact items
    const contactItems = document.querySelectorAll('.contact-item');
    // Gets all contact information items
    
    // Add click event to each contact item
    contactItems.forEach(function(item, index) {
        // Loop through each contact item
        
        item.addEventListener('click', function() {
            // Runs when contact item is clicked
            
            // Get the text content
            const text = item.textContent;
            // Gets the contact info text
            
            // Log which contact was clicked
            console.log('Contact information clicked:', text);
            // Logs for tracking
        });
    });
});

// Note: All required alerts and console logs are implemented
// This helps with form validation and user feedback