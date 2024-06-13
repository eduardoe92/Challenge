// Variables globales
let age = {};
const submitButton = document.querySelector("#submit-btn");

// Función para verificar si los campos de fecha están vacíos
function checkEmpty(dobYear, dobMonth, dobDay) {
    let errorCount = 0;

    // Verificar el año
    if (isNaN(dobYear) || dobYear === "") {
        const errorLabel = document.querySelector(".year-label");
        const errorBorder = document.querySelector(".input-year");
        const errorMessage = document.querySelector(".error-year");

        // Aplicar estilos de error
        errorLabel.style.color = "var(--Light-red)";
        errorBorder.style.borderColor = "var(--Light-red)";
        errorMessage.style.display = "block";
        errorCount += 1;
    }

    // Verificar el mes
    if (isNaN(dobMonth) || dobMonth === "") {
        const errorLabel = document.querySelector(".month-label");
        const errorBorder = document.querySelector(".input-month");
        const errorMessage = document.querySelector(".error-month");

        // Aplicar estilos de error
        errorLabel.style.color = "var(--Light-red)";
        errorBorder.style.borderColor = "var(--Light-red)";
        errorMessage.style.display = "block";
        errorCount += 1;
    }

    // Verificar el día
    if (isNaN(dobDay) || dobDay === "") {
        const errorLabel = document.querySelector(".day-label");
        const errorBorder = document.querySelector(".input-day");
        const errorMessage = document.querySelector(".error-day");

        // Aplicar estilos de error
        errorLabel.style.color = "var(--Light-red)";
        errorBorder.style.borderColor = "var(--Light-red)";
        errorMessage.style.display = "block";
        errorCount += 1;
    }

    return errorCount;
}

// Función para verificar la validez de la fecha de nacimiento
function checkValidity(dobYear, dobMonth, dobDay) {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    let currentDay = now.getDate();
    let result = true;

    // Verificar si la fecha es futura
    if (dobYear > currentYear || (dobYear === currentYear && dobMonth > currentMonth) || (dobYear === currentYear && dobMonth === currentMonth && dobDay > currentDay)) {
        const errorLabels = document.querySelectorAll(".label");
        const errorBorders = document.querySelectorAll(".input-box");
        const errorMessages = document.querySelectorAll(".error-message");

        // Aplicar estilos de error y mostrar mensaje
        errorLabels.forEach(label => label.style.color = "var(--Light-red)");
        errorBorders.forEach(border => border.style.borderColor = "var(--Light-red)");
        errorMessages.forEach(message => {
            message.style.display = "block";
            message.innerText = "Must be in the past";
        });
        result = false;
    }

    // Verificar si el mes es válido
    if (dobMonth < 1 || dobMonth > 12) {
        const errorLabel = document.querySelector(".month-label");
        const errorBorder = document.querySelector(".input-month");
        const errorMessage = document.querySelector(".error-month");

        // Aplicar estilos de error y mostrar mensaje
        errorLabel.style.color = "var(--Light-red)";
        errorBorder.style.borderColor = "var(--Light-red)";
        errorMessage.style.display = "block";
        errorMessage.innerText = "Must be a valid month";
        result = false;
    }

    // Verificar si el día es válido
    if (dobDay < 1 || dobDay > 31 || ((dobMonth === 2 && (dobDay > 29 || (dobDay === 29 && !isLeapYear(dobYear)))) ||
        ((dobMonth === 4 || dobMonth === 6 || dobMonth === 9 || dobMonth === 11) && dobDay > 30))) {
        const errorLabel = document.querySelector(".day-label");
        const errorBorder = document.querySelector(".input-day");
        const errorMessage = document.querySelector(".error-day");

        // Aplicar estilos de error y mostrar mensaje
        errorLabel.style.color = "var(--Light-red)";
        errorBorder.style.borderColor = "var(--Light-red)";
        errorMessage.style.display = "block";
        errorMessage.innerText = "Must be a valid day";
        result = false;
    }

    // Verificar si el año es válido
    if (dobYear < 0) {
        const errorLabel = document.querySelector(".year-label");
        const errorBorder = document.querySelector(".input-year");
        const errorMessage = document.querySelector(".error-year");

        // Aplicar estilos de error y mostrar mensaje
        errorLabel.style.color = "var(--Light-red)";
        errorBorder.style.borderColor = "var(--Light-red)";
        errorMessage.style.display = "block";
        errorMessage.innerText = "Must be a valid year";
        result = false;
    }

    return result;
}

// Función para determinar si un año es bisiesto
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Función para restablecer los estilos de error
function resetErrorStyles() {
    const errorLabel = document.querySelectorAll(".label");
    const errorBorder = document.querySelectorAll(".input-box");
    const errorMessage = document.querySelectorAll(".error-message");

    // Restablecer estilos y ocultar mensajes de error
    errorLabel.forEach(label => label.style.color = "var(--Smokey-grey)");
    errorBorder.forEach(border => border.style.borderColor = "var(--Light-grey)");
    errorMessage.forEach(message => message.style.display = "none");
    errorMessage.forEach(message => message.innerText = "This field is required");
}

// Función para calcular la edad
function calculateAge() {
    const dobYear = parseInt(document.querySelector("#year").value);
    const dobMonth = parseInt(document.querySelector("#month").value);
    const dobDay = parseInt(document.querySelector("#day").value);

    const errorCount = checkEmpty(dobYear, dobMonth, dobDay);
    const isValid = checkValidity(dobYear, dobMonth, dobDay);

    if (errorCount === 0 && isValid) {
        resetErrorStyles();
        let now = new Date();
        let currentYear = now.getFullYear();
        let currentMonth = now.getMonth() + 1;
        let currentDay = now.getDate();

        if (currentDay < dobDay) {
            currentMonth -= 1;
            currentDay += daysInMonth(currentYear, currentMonth - 1);
        }

        if (currentMonth < dobMonth) {
            currentYear -= 1;
            currentMonth += 12;
        }

        age.year = currentYear - dobYear;
        age.month = currentMonth - dobMonth;
        age.day = currentDay - dobDay;

        return true;
    }
    return false;
}

// Función para obtener el número de días en un mes y año específicos
function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Función para mostrar los cambios de edad calculados
function displayChanges() {
    const isCalculationValid = calculateAge();
    if (isCalculationValid) {
        const year = document.querySelector(".year-calc");
        const month = document.querySelector(".month-calc");
        const day = document.querySelector(".day-calc");

        animateValue(year, 0, age.year, 500);
        animateValue(month, 0, age.month, 500);
        animateValue(day, 0, age.day, 500);
        return true;
    } else {
        document.querySelector(".year-calc").innerText = "--";
        document.querySelector(".month-calc").innerText = "--";
        document.querySelector(".day-calc").innerText = "--";
    }
    return false;
}

// Función para animar los valores de edad
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Evento al hacer clic en el botón de envío
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    resetErrorStyles();
    displayChanges();
});

// Evento al presionar Enter
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        resetErrorStyles();
        displayChanges();
    }
});

// Evento al presionar Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelector("#year").value = "";
        document.querySelector("#month").value = "";
        document.querySelector("#day").value = "";
        resetErrorStyles();
        document.querySelector(".year-calc").innerText = "--";
        document.querySelector(".month-calc").innerText = "--";
        document.querySelector(".day-calc").innerText = "--";
    }
});