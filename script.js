// JavaScript to enhance the interactivity of the website

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(0, -5); // Remove ".html" for ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle active class for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Social icons hover effect
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.color = '#ff5722'; // Change color on hover
    });
    icon.addEventListener('mouseout', function() {
        this.style.color = ''; // Revert to default color
    });
});

// Scroll to top button (optional feature)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
