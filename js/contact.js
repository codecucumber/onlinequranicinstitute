document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('studentForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    const whatsappBtn = document.getElementById('submitWhatsApp');
    const emailBtn = document.getElementById('submitEmail');

    whatsappBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // ✅ Validate form using built-in HTML5 validation
        if (!form.checkValidity()) {
            form.reportValidity(); // Show default browser error messages
            return;
        }

        const name = encodeURIComponent(nameInput.value.trim());
        const message = encodeURIComponent(messageInput.value.trim());

        const fullMessage = `Hello, my name is ${decodeURIComponent(name)}. ${decodeURIComponent(message)}`;
        const whatsappLink = `https://wa.me/9203170772560?text=${encodeURIComponent(fullMessage)}`;

        window.open(whatsappLink, '_blank');
    });

    emailBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = encodeURIComponent(nameInput.value.trim());
        const message = encodeURIComponent(messageInput.value.trim());

        const subject = `Hello from ${decodeURIComponent(name)}`;
        const body = `My name is ${decodeURIComponent(name)}.\n\n${decodeURIComponent(message)}`;
        const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sirhafizjawad@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(emailLink, '_blank');
    });
});
