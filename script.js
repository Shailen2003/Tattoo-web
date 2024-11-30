const mobileMenu = document.getElementById('mobile-menu'); // Hamburger menu element
const navbar = document.querySelector('.navbar'); // Navbar element
const navLinks = document.querySelector('.nav-links'); // Links container
const logoimg = document.querySelector('.logo');


// Get references to the mobile-menu toggle and the homediv
const homeDiv = document.getElementById('homediv');

// Event listener to toggle classes on click
mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('expanded'); // Toggles the height of the navbar
    navLinks.classList.toggle('active'); // Toggles visibility of nav links
    if (logoimg.style.display === 'none' ) {
        logoimg.style.display = 'flex'; // Show logo
      } else {
        logoimg.style.display = 'none'; // Hide logo
      }
    // Toggle the padding-top style on homediv
  if (homeDiv.style.paddingTop === '276px') {
    homeDiv.style.paddingTop = ''; // Reset padding if already applied
  } else {
    homeDiv.style.paddingTop = '276px';
  }

  if (mobileMenu.style.paddingLeft === '250px' ) {
    mobileMenu.style.paddingLeft === '20';
  } else {
    mobileMenu.style.paddingLeft = '250px';
  }
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


