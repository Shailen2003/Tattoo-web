const mobileMenu = document.getElementById('mobile-menu'); // Hamburger menu element
const navbar = document.querySelector('.navbar'); // Navbar element
const navLinks = document.querySelector('.nav-links'); // Links container

// Event listener to toggle classes on click
mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('expanded'); // Toggles the height of the navbar
    navLinks.classList.toggle('active'); // Toggles visibility of nav links
});
document.querySelector('.contact-btn').addEventListener('click', () => {
    alert('Thank you for reaching out! We will get back to you shortly.');
});
// Toggle Chat Box Visibility
const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");

chatBtn.addEventListener("click", () => {
    chatBox.classList.toggle("hidden");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
});


