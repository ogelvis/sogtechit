(function() {
  emailjs.init("MWgOZqQdXeOe3tw0j"); // Your Public Key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_v18igsw', 'template_qyc1wnj', this)
    .then(function() {
      document.getElementById('form-status').innerHTML = "Message sent successfully!";
    }, function(error) {
      document.getElementById('form-status').innerHTML = "Failed to send message. Try again.";
    });

  this.reset();
});
