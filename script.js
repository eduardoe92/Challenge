document.getElementById("currentYear").textContent =
    new Date().getFullYear();

const challenges = [
    {
        title: "QR Challenge",
        challengeNumber: "01",
        imgSrc: "img/QRImg.webp",
        imgAlt: "QR - Challenge 01",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/01-QR%20Challenge/qr-code-component-main",
        deployLink: "https://qrchallenge-frontendmentor.vercel.app/",
        description: "Este desafío consiste en crear un componente de código QR que pueda ser integrado en una página web. El enfoque está en la disposición y el estilo del diseño, usando un layout centrado que destaca el código QR y un texto breve. Es ideal para quienes buscan mejorar sus habilidades en diseño y maquetación con HTML y CSS.",
    },
    {
        title: "Age Calculator",
        challengeNumber: "02",
        imgSrc: "img/AgeCalculatorImg.webp",
        imgAlt: "Age Calculator - Challenge 02",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/02-Age%20Calculator/age-calculator-app-main",
        deployLink: "https://agecalculator-frontendmentor.vercel.app/",
        description: "Esta aplicación calcula la edad exacta de una persona en años, meses y días, basándose en la fecha de nacimiento ingresada. Es un proyecto excelente para practicar el manejo de fechas en JavaScript, así como la validación de entradas del usuario para asegurar que la información proporcionada sea precisa.",
    },
    {
        title: "Contact Form",
        challengeNumber: "03",
        imgSrc: "img/ContactFormImg.webp",
        imgAlt: "Contact Form - Challenge 03",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/03-Contact%20Form",
        deployLink: "https://contact-form-frontendmentor.vercel.app/",
        description: "Este formulario de contacto presenta un diseño limpio y profesional, ideal para ser integrado en cualquier sitio web corporativo o personal. Incluye validación de campos y un enfoque en la accesibilidad, asegurando que todos los usuarios puedan interactuar con el formulario sin problemas.",
    },
    {
        title: "Stats Preview Card Component",
        challengeNumber: "04",
        imgSrc: "img/StatsPreviewCard.webp",
        imgAlt: "Stats Preview Card Component - Challenge 04",
        repoLink: "https://github.com/eduardoe92/Challenge/blob/main/04-Stats%20Preview%20Card/stats-preview-card-component-main/index.html",
        deployLink: "04-Stats Preview Card/stats-preview-card-component-main/index.html",
        description: "En este reto, el objetivo es crear una tarjeta de estadísticas que muestre datos clave de manera atractiva y organizada. Es un ejercicio excelente para practicar el uso de CSS Grid y Flexbox para gestionar la disposición de elementos, así como para mejorar el diseño visual con colores y tipografía.",
    },
    {
        title: "Launch Countdown Timer",
        challengeNumber: "05",
        imgSrc: "img/LaunchCountdownTimer.webp",
        imgAlt: "Launch Countdown Timer - Challenge 05",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/05-Launch%20Countdown%20Timer",
        deployLink: "05-Launch Countdown Timer/index.html",
        description: "Este desafío implica la creación de un temporizador de cuenta regresiva para el lanzamiento de un producto o evento. El temporizador se actualiza en tiempo real, mostrando días, horas, minutos y segundos restantes. Es ideal para mejorar las habilidades en JavaScript y DOM manipulation.",
    },
    {
        title: "News Homepage",
        challengeNumber: "06",
        imgSrc: "img/NewsHomepage.webp",
        imgAlt: "NewsHomepage - Challenge 06",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/06-News%20Homepage",
        deployLink: "06-News Homepage/index.html",
        description: "Este proyecto consiste en desarrollar una página principal de noticias, presentando varios artículos destacados y noticias de última hora. El enfoque está en la disposición del contenido y la jerarquía visual, siendo una excelente práctica para trabajar con layouts complejos y responsive design.",
    },
    {
        title: "Social Links Profile",
        challengeNumber: "07",
        imgSrc: "img/SocialLinksProfile.webp",
        imgAlt: "Social Links Profile - Challenge 07",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/07-Social%20Links%20Profile",
        deployLink: "07-Social Links Profile/index.html",
        description: "En este desafío, se desarrolla una tarjeta de perfil social que incluye enlaces a las plataformas más populares. Es un proyecto ideal para mejorar la comprensión de la disposición de elementos en CSS y trabajar con íconos y tipografía para crear un diseño moderno y limpio.",
    },
    {
        title: "Blog Preview Card",
        challengeNumber: "08",
        imgSrc: "img/BlogPreviewCard.webp",
        imgAlt: "Blog Preview Card - Challenge 08",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/08-Blog%20Preview%20Card",
        deployLink: "08-Blog Preview Card/index.html",
        description: "Este reto consiste en crear una tarjeta de vista previa de un blog, que incluye un título, resumen del artículo y una imagen destacada. Es un excelente ejercicio para trabajar en la presentación de contenido en tarjetas, lo que es útil en una amplia variedad de proyectos web.",
    },
    {
        title: "Time Tracking Dashboard",
        challengeNumber: "09",
        imgSrc: "img/TimeTrackingDashboard.webp",
        imgAlt: "Time Tracking Dashboard - Challenge 09",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/09-Time%20Tracking%20Dashboard",
        deployLink: "09-Time Tracking Dashboard/index.html",
        description: "En este desafío, se crea un panel de control de seguimiento del tiempo, que muestra cómo se distribuye el tiempo en diferentes actividades. Es una excelente manera de practicar la creación de interfaces de usuario más complejas y el manejo de datos para su visualización.",

    },
    {
        title: "Article Preview Component",
        challengeNumber: "10",
        imgSrc: "img/ArticlePreviewComponent.webp",
        imgAlt: "Article Preview Component - Challenge 10",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/10-Article%20Preview%20Component",
        deployLink: "10-Article Preview Component/index.html",
        description: "Este componente de vista previa de artículo muestra el título, resumen y una opción para compartir el contenido en redes sociales. El enfoque está en crear una experiencia de usuario fluida, utilizando herramientas como JavaScript y CSS para manejar la interactividad y el diseño.",
    },
    {
        title: "Newsletter Sign-Up Form With Success Message",
        challengeNumber: "11",
        imgSrc: "img/NewsletterSign-UpFormWithSuccessMessage.webp",
        imgAlt: "Newsletter Sign-Up Form With Success Message - Challenge 11",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/11-Newsletter%20Sign-Up%20Form%20With%20Success%20Message",
        deployLink: "11-Newsletter Sign-Up Form With Success Message/index.html",
        description: "Este proyecto consiste en un formulario de suscripción a un boletín que muestra un mensaje de éxito tras la inscripción. Es ideal para mejorar las habilidades en validación de formularios y manejo de eventos, asegurando que el usuario reciba un feedback visual claro tras enviar el formulario.",
    },
    {
        title: "Product Preview Card",
        challengeNumber: "12",
        imgSrc: "img/ProductPreviewCard.webp",
        imgAlt: "Product Preview Card - Challenge 12",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/12-Product%20Preview%20Card",
        deployLink: "12-Product Preview Card/index.html",
        description: "En este desafío, se crea una tarjeta de vista previa de un producto que incluye una imagen, descripción y precio. Es un proyecto útil para practicar la presentación de productos de manera atractiva y funcional, utilizando HTML, CSS, y un toque de JavaScript para interactividad.",
    },
    {
        title: "Recipe Page",
        challengeNumber: "13",
        imgSrc: "img/RecipePage.webp",
        imgAlt: "Recipe Page - Challenge 13",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/13-Recipe%20Page",
        deployLink: "13-Recipe Page/index.html",
        description: "Este proyecto consiste en desarrollar una página de recetas que muestra ingredientes, pasos y una imagen del plato final. Es una excelente oportunidad para trabajar en la disposición de contenido extenso de manera organizada y visualmente atractiva, con un enfoque en el diseño responsive.",
    },
    {
        title: "Testimonials Grid Section",
        challengeNumber: "14",
        imgSrc: "img/TestimonialsGridSection.webp",
        imgAlt: "Testimonials Grid Section - Challenge 14",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/14-Testimonials%20Grid%20Section",
        deployLink: "14-Testimonials Grid Section/index.html",
        description: "En este desafío, se crea una sección de testimonios que presenta opiniones de clientes de forma estructurada en una cuadrícula. Es un proyecto ideal para mejorar las habilidades en CSS Grid y Flexbox, así como para practicar la presentación de contenido testimonial en un sitio web.",
    },
    {
        title: "Mortgage Repayment Calculator",
        challengeNumber: "15",
        imgSrc: "img/MortgageRepaymentCalculator.webp",
        imgAlt: "Mortgage Repayment Calculator - Challenge 15",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/15-Mortgage%20Repayment%20Calculator",
        deployLink: "15-Mortgage Repayment Calculator/index.html",
        description: "Este desafío implica la creación de una calculadora de pago de hipoteca, que permite a los usuarios calcular sus pagos mensuales basados en el monto del préstamo, la tasa de interés y el plazo. Es una excelente manera de practicar el manejo de datos en JavaScript y la creación de interfaces de usuario funcionales.",
    },
];

const cardsContainer = document.getElementById("cards-container");

challenges.forEach((challenge) => {
    const cardHTML = `
        <div class="col-lg-4 col-sm-6">
            <div class="popular-item">
            <div class="top-content text-center">
                <h3>${challenge.title}</h3>
            </div>
            <div class="top-content text-center">
                <h4>Challenge ${challenge.challengeNumber}</h4>
            </div>
            <div class="thumb">
                <img
                src="${challenge.imgSrc}"
                alt="${challenge.imgAlt}"
                class="img-fluid"
                />
                <a href="${challenge.repoLink}" class="repository" target="_blank">Repositorio</a>
                <a href="${challenge.deployLink}" class="deploy" target="_blank">Desplegar</a>
            </div>
            </div>
        </div>
        `;
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
});