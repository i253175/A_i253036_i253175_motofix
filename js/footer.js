document.addEventListener('DOMContentLoaded', function() {
    console.log('Footer component loaded successfully');

    const footerLinks = document.querySelectorAll('.footer-column a');

    footerLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent;
            console.log('Footer link clicked:', linkText);
        });
    });

    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(function(icon) {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const img = icon.querySelector('img');
            const socialName = img ? img.alt : 'Social Media';
            console.log('Social media icon clicked:', socialName);
            alert('Opening ' + socialName + ' - This link is not yet connected');
        });
    });

    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const contactText = item.textContent;
            console.log('Contact information clicked:', contactText);
        });
    });
});
