const welcomeButton = document.getElementById("welcome-btn");
const welcomeMessage = document.getElementById("welcome-message");

welcomeButton.addEventListener("click", function () {
  welcomeMessage.textContent =
    "Thank you for visiting my CodeSquad portfolio!";
});
