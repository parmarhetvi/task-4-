// Simple script to add interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real site, this would navigate to the page
            alert('This would navigate to: ' + this.textContent);
        });
    });

    // Add a simple greeting based on time of day
    const header = document.querySelector('header h1');
    const hour = new Date().getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning! Have a wonderful day!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon! Hope you\'re having a great day!';
    } else {
        greeting = 'Good Evening! Hope you had an amazing day!';
    }

    // Create a new element for the greeting
    const greetingElement = document.createElement('div');
    greetingElement.style.cssText = 'font-size: 1.2rem; margin-top: 15px; font-weight: 300; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);';
    greetingElement.textContent = greeting;

    header.appendChild(greetingElement);

    // Add hover effect to boxes with a slight delay
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});