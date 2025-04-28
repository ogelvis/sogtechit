// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let formMessage = document.getElementById('formMessage');
  
    if (name === "" || email === "" || message === "") {
      e.preventDefault(); // prevent sending if empty
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all fields.";
    }
  });
  