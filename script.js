// Initialisation EmailJS
emailjs.init('o0W5KBTLiDALQ512c');

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = this.querySelector('button[type="submit"]');
  const responseElement = document.getElementById('formResponse');
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
  
  const formData = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    message: document.getElementById('message').value,
    to_email: 'dediccirnessa@gmail.com' // Correction de l'email
  };
  
  emailjs.send('service_lm0we9i', 'template_2jr5mle', formData)
    .then(() => {
      responseElement.innerHTML = '<i class="fas fa-check-circle"></i> Message envoyé!';
      responseElement.className = 'form-response success';
      document.getElementById('contactForm').reset();
    })
    .catch(error => {
      console.error('Erreur:', error);
      responseElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> Erreur: ${error.text}`;
      responseElement.className = 'form-response error';
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Envoyer la demande';
    });
});