document.addEventListener('DOMContentLoaded', function() {
    console.log('Shopping Cart page loaded successfully');

    let quantity = 1;
    const basePrice = 2900;
    const shippingCost = 199;
    const taxRate = 0.02;

    const quantityDisplay = document.querySelector('.quantity');
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const continueBtn = document.querySelector('.continue-btn');

    const subtotalAmounts = document.querySelectorAll('.subtotal-amount');
    const totalItemsDisplay = document.querySelector('.total-items');
    const taxDisplay = document.querySelector('.tax-amount');
    const totalDisplay = document.querySelector('.total-amount');

    function updatePrices() {
        const subtotal = basePrice * quantity;
        const tax = Math.round(subtotal * taxRate);
        const total = subtotal + shippingCost + tax;

        subtotalAmounts.forEach(function(element) {
            element.textContent = 'PKR ' + subtotal.toLocaleString();
        });

        totalItemsDisplay.textContent = quantity + ' Total item' + (quantity > 1 ? 's' : '');
        taxDisplay.textContent = 'PKR ' + tax.toLocaleString();
        totalDisplay.textContent = 'PKR ' + total.toLocaleString();

        console.log('Cart updated - Quantity:', quantity, 'Subtotal:', subtotal, 'Total:', total);
    }

    minusBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
            updatePrices();
            console.log('Quantity decreased to:', quantity);
        } else {
            alert('Minimum quantity is 1');
        }
    });

    plusBtn.addEventListener('click', function() {
        quantity++;
        quantityDisplay.textContent = quantity;
        updatePrices();
        console.log('Quantity increased to:', quantity);
    });

    continueBtn.addEventListener('click', function() {
        console.log('Proceeding to checkout with', quantity, 'item(s)');
        alert('Proceeding to address page - Total items: ' + quantity);
    });

    console.log('Initial cart state - Quantity:', quantity, 'Price per item:', basePrice);
});
