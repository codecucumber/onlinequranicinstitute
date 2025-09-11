document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("studentForm");
    const guardianCheckbox = document.getElementById("isGuardian");
    const gBox = document.getElementById("G-Box");
    const guardianNameInput = document.getElementById("guardianName");
    const guardianNumInput = document.getElementById("guardianNum");

    // Set initial guardian box and required state
    function toggleGuardianFields() {
        const isChecked = guardianCheckbox.checked;
        gBox.style.display = isChecked ? "flex" : "none";
        guardianNameInput.required = isChecked;
        guardianNumInput.required = isChecked;
    }

    // Initialize on load
    toggleGuardianFields();

    // Toggle when checkbox is changed
    guardianCheckbox.addEventListener("change", toggleGuardianFields);

    // Extract form data
    function getFormData() {
        const name = document.getElementById("name").value.trim();
        const whatsapp = document.getElementById("contactNum").value.trim();
        const guardianCheck = guardianCheckbox.checked;
        const guardianName = guardianCheck ? guardianNameInput.value.trim() : "";
        const guardianNum = guardianCheck ? guardianNumInput.value.trim() : "";
        const country = document.getElementById("country").value.trim();
        const email = document.getElementById("email").value.trim();

        const course = document.getElementById("course").value;
const duration = document.getElementById("duration").value;
const time = document.getElementById("time").value;


        return {
            name,
            whatsapp,
            guardianCheck,
            guardianName,
            guardianNum,
            country,
            email,
            course,
            duration,
            time
        };
    }

    // WhatsApp submission
    document.getElementById("submitWhatsApp").addEventListener("click", function () {
        if (form.checkValidity()) {
            const data = getFormData();

            const message =
                `Student Name: ${data.name}\n` +
                `WhatsApp Number: ${data.whatsapp}\n` +
                `Guardian: ${data.guardianCheck ? 'Yes' : 'No'}\n` +
                (data.guardianCheck ? `Guardian Name: ${data.guardianName}\nGuardian Number: ${data.guardianNum}\n` : "") +
                `Country: ${data.country}\n` +
                `Email: ${data.email}\n` +
                `Course: ${data.course}\n` +
                `Duration: ${data.duration}\n` +
                `Class Time: ${data.time}`;

            const waNumber = "9203026203387"; // Change to your real number if needed
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');

            form.reset();
            toggleGuardianFields(); // Hide and disable guardian inputs
        } else {
            form.reportValidity();
        }
    });

    // Email submission
    document.getElementById("submitEmail").addEventListener("click", function () {
        if (form.checkValidity()) {
            const data = getFormData();

            const emailBody =
                `Student Name: ${data.name}\n` +
                `WhatsApp Number: ${data.whatsapp}\n` +
                `Guardian: ${data.guardianCheck ? 'Yes' : 'No'}\n` +
                (data.guardianCheck ? `Guardian Name: ${data.guardianName}\nGuardian Number: ${data.guardianNum}\n` : "") +
                `Country: ${data.country}\n` +
                `Email: ${data.email}\n` +
                `Course: ${data.course}\n` +
                `Duration: ${data.duration}\n` +
                `Class Time: ${data.time}`;

            const emailAddress = "jawadbashir0300@gmail.com";
            const subject = "New Student Registration";
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

            window.open(gmailUrl, '_blank');

            form.reset();
            toggleGuardianFields(); // Hide and disable guardian inputs
        } else {
            form.reportValidity();
        }
    });
});
