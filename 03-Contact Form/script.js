document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario automáticamente

        let isValid = true;

        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const queryType = document.querySelector('input[name="query"]:checked');
        const message = document.getElementById("message");
        const checkbox = document.getElementById("checkbox");

        document.querySelectorAll(".error").forEach((error) => {
            error.style.display = "none";
            error.textContent = "";
        });

        if (!firstName.value.trim()) {
            document.getElementById("first-name-error").textContent =
                "First name is required.";
            document.getElementById("first-name-error").style.display = "block";
            isValid = false;
        }

        if (!lastName.value.trim()) {
            document.getElementById("last-name-error").textContent =
                "Last name is required.";
            document.getElementById("last-name-error").style.display = "block";
            isValid = false;
        }

        if (!email.value.trim()) {
            document.getElementById("email-error").textContent =
                "Email address is required.";
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            document.getElementById("email-error").textContent =
                "Please enter a valid email address.";
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        }

        if (!queryType) {
            document.getElementById("query-error").textContent =
                "Please select a query type.";
            document.getElementById("query-error").style.display = "block";
            isValid = false;
        }

        if (!message.value.trim()) {
            document.getElementById("message-error").textContent =
                "Message is required.";
            document.getElementById("message-error").style.display = "block";
            isValid = false;
        }

        if (!checkbox.checked) {
            document.getElementById("checkbox-error").textContent =
                "You must consent to be contacted.";
            document.getElementById("checkbox-error").style.display = "block";
            isValid = false;
        }

        if (isValid) {
            document.getElementById("success-message").textContent =
                "Form submitted successfully!";
            document.getElementById("success-message").style.display = "block";
            form.reset(); // Reinicia el formulario después de enviarlo con éxito
        }
    });

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});
