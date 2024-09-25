document.getElementById('contact-form').addEventListener('submit', function(e) {
    const honeypot = this.honeypot.value;
    if (honeypot) {
        e.preventDefault();
    } else {
        console.log('Form submitted successfully!');
    }
});