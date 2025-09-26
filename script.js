// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Fries Counter
let friesCount = 0;
const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("countDisplay");

countButton.addEventListener("click", () => {
  friesCount++;
  countDisplay.textContent = `Fries Count: ${friesCount}`;
});

// FAQ Toggle
const questions = document.querySelectorAll(".faq-question");
questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
const form = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    formMessage.textContent = "⚠️ Please fill in all fields!";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "⚠️ Please enter a valid email!";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "⚠️ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "✅ Order placed successfully!";
  formMessage.style.color = "green";
});

