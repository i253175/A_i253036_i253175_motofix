// JavaScript for Footer component

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Runs when page is loaded
    
    // Log footer loaded
    console.log('Footer component loaded successfully');
    // Confirms footer is working
    
    // Get all footer links
    const footerLinks = document.querySelectorAll('.footer-column a');
    // Finds all links in footer columns
    
    // Add click event to each link
    footerLinks.forEach(function(link) {
        // Loop through each link
        
        link.addEventListener('click', function(e) {
            // Runs when link is clicked
            
            // Get link text
            const linkText = link.textContent;
            // Gets the text of the link
            
            // Log which link was clicked
            console.log('Footer link clicked:', linkText);
            // Tracks user navigation
        });
    });
    
    // Get all social media icons
    const socialIcons = document.querySelectorAll('.social-icon');
    // Finds all social media icons
    
    // Add click event to each social icon
    socialIcons.forEach(function(icon) {
        // Loop through each icon
        
        icon.addEventListener('click', function(e) {
            // Runs when icon is clicked
            
            // Prevent default link behavior
            e.preventDefault();
            // Stops navigation
            
            // Get the image alt text to identify social media
            const img = icon.querySelector('img');
            // Finds the image inside the link
            const socialName = img ? img.alt : 'Social Media';
            // Gets the alt text (Facebook, Instagram, etc.)
            
            // Log which social media was clicked
            console.log('Social media icon clicked:', socialName);
            // Tracks social media clicks
            
            // Show alert
            alert('Opening ' + socialName + ' - This link is not yet connected');
            // Informs user feature is coming soon
        });
    });
    
    // Get all contact items
    const contactItems = document.querySelectorAll('.contact-item');
    // Finds all contact information items
    
    // Add click event to contact items
    contactItems.forEach(function(item) {
        // Loop through each item
        
        item.addEventListener('click', function() {
            // Runs when contact item is clicked
            
            // Get the contact text
            const contactText = item.textContent;
            // Gets the contact information
            
            // Log the contact info clicked
            console.log('Contact information clicked:', contactText);
            // Tracks which contact info was clicked
        });
    });
});

// This footer component can be reused across all pages
// All console logs help track user interactions