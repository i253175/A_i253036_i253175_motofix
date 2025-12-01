// JavaScript for Homepage

// Wait for page to load completely
document.addEventListener('DOMContentLoaded', function() {
    // This runs when HTML is fully loaded
    
    // Log page load
    console.log('Homepage loaded successfully');
    // Confirms page is working
    
    // Get the search button
    const searchBtn = document.getElementById('searchBtn');
    // Finds search button by ID
    
    // Get the search input field
    const searchInput = document.getElementById('searchInput');
    // Finds search input by ID
    
    // Add click event to search button
    searchBtn.addEventListener('click', function() {
        // This runs when search button is clicked
        
        // Get the search query
        const query = searchInput.value;
        // Gets what user typed in search box
        
        // Log the search query (REQUIRED: Console Log #1)
        console.log('Search query entered:', query);
        // Logs search term for debugging
        
        // Check if search field is not empty
        if (query.trim() !== '') {
            // If user typed something
            
            // Show alert with search query (REQUIRED: Alert #1)
            alert('Searching for: ' + query);
            // Shows what user is searching for
            
            // Log successful search
            console.log('Search initiated for:', query);
            // Logs search action
            
            // Here you would normally redirect to search results
            // window.location.href = 'search.html?q=' + query;
            
        } else {
            // If search field is empty
            
            // Show error alert (REQUIRED: Alert #2)
            alert('Please enter a search term');
            // Tells user to type something
            
            // Log error
            console.log('Search failed: Empty search query');
            // Logs the error for debugging
        }
    });
    
    // Add Enter key functionality for search
    searchInput.addEventListener('keypress', function(e) {
        // This runs when user presses a key in search box
        
        // Check if Enter key was pressed
        if (e.key === 'Enter') {
            // If Enter key pressed
            
            // Trigger search button click
            searchBtn.click();
            // Simulates clicking the search button
        }
    });
    
    // Get account section
    const accountSection = document.querySelector('.account-section');
    // Finds account section element
    
    // Add click event to account section
    accountSection.addEventListener('click', function() {
        // This runs when account is clicked
        
        // Log the click (REQUIRED: Console Log #2)
        console.log('My Account clicked');
        // Logs user interaction
        
        // Show alert (REQUIRED: Alert #3)
        alert('Redirecting to My Account page');
        // Informs user about action
        
        // Redirect to login page
        // window.location.href = 'login.html';
    });
    
    // Get all category cards
    const categoryCards = document.querySelectorAll('.category-card');
    // Gets all category cards
    
    // Add click event to each category card
    categoryCards.forEach(function(card) {
        // Loop through each card
        
        card.addEventListener('click', function() {
            // This runs when a card is clicked
            
            // Get the category name
            const categoryName = card.querySelector('.category-name').textContent;
            // Gets the text of the category
            
            // Log which category was clicked (REQUIRED: Console Log #3)
            console.log('Category clicked:', categoryName);
            // Logs category selection
            
            // Here you would redirect to that category page
            // window.location.href = 'category.html?name=' + categoryName;
        });
    });
    
    // Get explore link
    const exploreLink = document.querySelector('.explore-link');
    // Finds explore more link
    
    // Add click event to explore link
    exploreLink.addEventListener('click', function(e) {
        // This runs when explore link is clicked
        
        // Prevent default link behavior
        e.preventDefault();
        // Stops navigation
        
        // Log the click
        console.log('Explore more parts clicked');
        // Logs user action
        
        // Here you would redirect to all parts page
        // window.location.href = 'all-parts.html';
    });
});

// This homepage demonstrates:
// - Search functionality with validation
// - User interaction tracking
// - Category navigation
// - All required alerts and console logs