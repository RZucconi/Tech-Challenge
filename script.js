let message="Thank you! Your message has been successfully transmitted, King Aetess and his court will reply to you as soon as possible.";

document.getElementById("contactForm")
        .addEventListener('submit', function(event) {
    event.preventDefault();
    alert(message);
    });