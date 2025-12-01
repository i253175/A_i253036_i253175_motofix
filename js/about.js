document.addEventListener('DOMContentLoaded', function() {
    console.log('About Us page loaded successfully');

    const accountLink = document.querySelector('.account-link');

    accountLink.addEventListener('click', function() {
        console.log('My Account link clicked');
        alert('My Account feature - redirecting to login page');
    });

    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent;
            console.log('Navigation link clicked:', linkText);
        });
    });
});
