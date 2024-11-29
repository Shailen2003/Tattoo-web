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