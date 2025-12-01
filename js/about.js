// JavaScript for About Us page

// Wait for page to load completely
document.addEventListener('DOMContentLoaded', function() {
    // This runs when HTML is fully loaded
    
    // Log that page loaded successfully
    console.log('About Us page loaded successfully');
    // Shows in console that page is working
    
    // Get the account link element
    const accountLink = document.querySelector('.account-link');
    // querySelector finds first element with that class
    
    // Add click event to account link
    accountLink.addEventListener('click', function() {
        // This runs when user clicks on My Account
        
        // Log the click action
        console.log('My Account link clicked');
        // Logs user interaction for debugging
        
        // Show alert message
        alert('My Account feature - redirecting to login page');
        // Informs user about the action
        
        // You could redirect to login page here
        // window.location.href = 'login.html';
    });
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    // Gets all links in navigation menu
    
    // Add click event to each navigation link
    navLinks.forEach(function(link) {
        // Loop through each link
        
        link.addEventListener('click', function(e) {
            // This runs when a nav link is clicked
            
            // Get the link text
            const linkText = link.textContent;
            // Gets the text inside the link
            
            // Log which link was clicked
            console.log('Navigation link clicked:', linkText);
            // Helps track user navigation
        });
    });
});

// This page demonstrates basic JavaScript event handling
// All console logs help with debugging and monitoring user actions