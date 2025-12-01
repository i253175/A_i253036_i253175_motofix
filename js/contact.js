document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact Us page loaded successfully');

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Contact form submitted with:');
        console.log('Name:', fullName);
        console.log('Email:', email);
        console.log('Message:', message);

        if (fullName && email && message) {
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
            console.log('Form submitted successfully and cleared');
        } else {
            alert('Please fill in all fields before submitting');
            console.log('Form submission failed: Missing fields');
        }
    });

    const accountLink = document.querySelector('.account-link');

    accountLink.addEventListener('click', function() {
        console.log('My Account clicked from Contact page');
        alert('Redirecting to My Account page');
    });

    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            const text = item.textContent;
            console.log('Contact information clicked:', text);
        });
    });
});
