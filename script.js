const mobileMenu = document.getElementById('mobile-menu'); // Hamburger menu element
const navbar = document.querySelector('.navbar'); // Navbar element
const navLinks = document.querySelector('.nav-links'); // Links container

// Event listener to toggle classes on click
mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('expanded'); // Toggles the height of the navbar
    navLinks.classList.toggle('active'); // Toggles visibility of nav links
});
