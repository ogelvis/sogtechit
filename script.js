(function() {
  emailjs.init("MWgOZqQdXeOe3tw0j"); // Replace YOUR_USER_ID after setting up EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      document.getElementById('form-status').innerHTML = "Message sent successfully!";
    }, function(error) {
      document.getElementById('form-status').innerHTML = "Failed to send message. Try again.";
    });

  this.reset();
});
