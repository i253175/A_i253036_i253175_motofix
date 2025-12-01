document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Login attempt with email:', email);
        if (email && password) {
            alert('Login successful! Welcome to Motofix.');
            console.log('User login successful');
        } else {
            alert('Please enter both email and password');
            console.log('Login failed: Missing email or password');
        }
    });
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;
            console.log('Social login clicked:', buttonText);
            alert('Social login with ' + buttonText + ' is not yet implemented');
        });
    });
    console.log('Login page loaded successfully');
});
