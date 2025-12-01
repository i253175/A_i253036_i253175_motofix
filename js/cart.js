// JavaScript for Shopping Cart page

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Runs when HTML is loaded
    
    // Log page load
    console.log('Shopping Cart page loaded successfully');
    // Confirms page is working
    
    // Set initial values
    let quantity = 1; // Starting quantity
    const basePrice = 2900; // Product base price
    const shippingCost = 199; // Shipping cost
    const taxRate = 0.02; // 2% tax rate
    
    // Get DOM elements
    const quantityDisplay = document.querySelector('.quantity');
    // Finds quantity display element
    const minusBtn = document.querySelector('.minus');
    // Finds minus button
    const plusBtn = document.querySelector('.plus');
    // Finds plus button
    const continueBtn = document.querySelector('.continue-btn');
    // Finds continue button
    
    // Get all amount display elements
    const subtotalAmounts = document.querySelectorAll('.subtotal-amount');
    // Finds all subtotal displays
    const totalItemsDisplay = document.querySelector('.total-items');
    // Finds total items display
    const taxDisplay = document.querySelector('.tax-amount');
    // Finds tax display
    const totalDisplay = document.querySelector('.total-amount');
    // Finds total display
    
    // Function to update all prices
    function updatePrices() {
        // This function recalculates everything
        
        // Calculate subtotal
        const subtotal = basePrice * quantity;
        // Multiply price by quantity
        
        // Calculate tax
        const tax = Math.round(subtotal * taxRate);
        // Calculate 2% tax
        
        // Calculate total
        const total = subtotal + shippingCost + tax;
        // Add everything together
        
        // Update all displays
        subtotalAmounts.forEach(function(element) {
            // Loop through all subtotal elements
            element.textContent = 'PKR ' + subtotal.toLocaleString();
            // Update with formatted number
        });
        
        // Update total items text
        totalItemsDisplay.textContent = quantity + ' Total item' + (quantity > 1 ? 's' : '');
        // Update with plural if needed
        
        // Update tax display
        taxDisplay.textContent = 'PKR ' + tax.toLocaleString();
        // Update tax amount
        
        // Update total display
        totalDisplay.textContent = 'PKR ' + total.toLocaleString();
        // Update final total
        
        // Log the updates
        console.log('Cart updated - Quantity:', quantity, 'Subtotal:', subtotal, 'Total:', total);
        // Logs cart status for debugging
    }
    
    // Add click event to minus button
    minusBtn.addEventListener('click', function() {
        // Runs when minus is clicked
        
        // Check if quantity is more than 1
        if (quantity > 1) {
            // Only decrease if more than 1
            
            quantity--; // Decrease quantity
            quantityDisplay.textContent = quantity; // Update display
            updatePrices(); // Recalculate prices
            
            // Log the change
            console.log('Quantity decreased to:', quantity);
            // Logs quantity change
        } else {
            // If quantity is 1
            
            // Show alert
            alert('Minimum quantity is 1');
            // Tells user can't go lower
        }
    });
    
    // Add click event to plus button
    plusBtn.addEventListener('click', function() {
        // Runs when plus is clicked
        
        quantity++; // Increase quantity
        quantityDisplay.textContent = quantity; // Update display
        updatePrices(); // Recalculate prices
        
        // Log the change
        console.log('Quantity increased to:', quantity);
        // Logs quantity change
    });
    
    // Add click event to continue button
    continueBtn.addEventListener('click', function() {
        // Runs when continue is clicked
        
        // Log the action
        console.log('Proceeding to checkout with', quantity, 'item(s)');
        // Logs checkout action
        
        // Show alert
        alert('Proceeding to address page - Total items: ' + quantity);
        // Informs user about next step
        
        // Here you would redirect to next page
        // window.location.href = 'address.html';
    });
    
    // Log initial cart state
    console.log('Initial cart state - Quantity:', quantity, 'Price per item:', basePrice);
    // Logs starting values
});

// This shopping cart demonstrates:
// - Dynamic price calculation
// - Quantity management
// - User feedback with alerts
// - Console logging for debugging