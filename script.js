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
        description: "Se creó un componente de código QR que pueda ser integrado en una página web. El enfoque está en la disposición y el estilo del diseño, usando un layout centrado que destaca el código QR y un texto breve.",
    },
    {
        title: "Age Calculator",
        challengeNumber: "02",
        imgSrc: "img/AgeCalculatorImg.webp",
        imgAlt: "Age Calculator - Challenge 02",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/02-Age%20Calculator/age-calculator-app-main",
        deployLink: "https://agecalculator-frontendmentor.vercel.app/",
        description: "Esta aplicación calcula la edad exacta de una persona en años, meses y días, basándose en la fecha de nacimiento ingresada. Es un proyecto excelente para practicar el manejo de fechas en JavaScript.",
    },
    {
        title: "Contact Form",
        challengeNumber: "03",
        imgSrc: "img/ContactFormImg.webp",
        imgAlt: "Contact Form - Challenge 03",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/03-Contact%20Form",
        deployLink: "https://contact-form-frontendmentor.vercel.app/",
        description: "Este formulario de contacto es ideal para ser integrado en cualquier sitio web. Incluye validación de campos y un enfoque en la accesibilidad, asegurando que todos los usuarios puedan interactuar con el sin problemas.",
    },
    {
        title: "Stats Preview Card",
        challengeNumber: "04",
        imgSrc: "img/StatsPreviewCard.webp",
        imgAlt: "Stats Preview Card Component - Challenge 04",
        repoLink: "https://github.com/eduardoe92/Challenge/blob/main/04-Stats%20Preview%20Card/stats-preview-card-component-main/index.html",
        deployLink: "04-Stats Preview Card/stats-preview-card-component-main/index.html",
        description: "Se creó una tarjeta de estadísticas que muestre datos clave de manera atractiva y organizada. Es un ejercicio excelente para practicar el uso de CSS Grid y Flexbox para gestionar la disposición de elementos.",
    },
    {
        title: "Launch Countdown Timer",
        challengeNumber: "05",
        imgSrc: "img/LaunchCountdownTimer.webp",
        imgAlt: "Launch Countdown Timer - Challenge 05",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/05-Launch%20Countdown%20Timer",
        deployLink: "05-Launch Countdown Timer/index.html",
        description: "Se creó de un temporizador de cuenta regresiva para el lanzamiento de un producto o evento. El temporizador se actualiza en tiempo real, mostrando días, horas, minutos y segundos restantes.",
    },
    {
        title: "News Homepage",
        challengeNumber: "06",
        imgSrc: "img/NewsHomepage.webp",
        imgAlt: "NewsHomepage - Challenge 06",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/06-News%20Homepage",
        deployLink: "06-News Homepage/index.html",
        description: "Se creó una página principal de noticias, presentando varios artículos destacados y noticias de última hora. El enfoque está en la disposición del contenido y la jerarquía visual.",
    },
    {
        title: "Social Links Profile",
        challengeNumber: "07",
        imgSrc: "img/SocialLinksProfile.webp",
        imgAlt: "Social Links Profile - Challenge 07",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/07-Social%20Links%20Profile",
        deployLink: "07-Social Links Profile/index.html",
        description: "Se creó una tarjeta de perfil social que incluye enlaces a las plataformas más populares. Es un proyecto ideal para mejorar la comprensión de la disposición de elementos en CSS y trabajar con íconos y tipografía.",
    },
    {
        title: "Blog Preview Card",
        challengeNumber: "08",
        imgSrc: "img/BlogPreviewCard.webp",
        imgAlt: "Blog Preview Card - Challenge 08",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/08-Blog%20Preview%20Card",
        deployLink: "08-Blog Preview Card/index.html",
        description: "Se creó una tarjeta de vista previa de un blog, que incluye un título, resumen del artículo y una imagen destacada.",
    },
    {
        title: "Time Tracking Dashboard",
        challengeNumber: "09",
        imgSrc: "img/TimeTrackingDashboard.webp",
        imgAlt: "Time Tracking Dashboard - Challenge 09",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/09-Time%20Tracking%20Dashboard",
        deployLink: "09-Time Tracking Dashboard/index.html",
        description: "Se creó un panel de control de seguimiento del tiempo, que muestra cómo se distribuye el tiempo en diferentes actividades. Creación de interfaces de usuario más complejas y el manejo de datos para su visualización.",

    },
    {
        title: "Article Preview",
        challengeNumber: "10",
        imgSrc: "img/ArticlePreviewComponent.webp",
        imgAlt: "Article Preview Component - Challenge 10",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/10-Article%20Preview%20Component",
        deployLink: "10-Article Preview Component/index.html",
        description: "Se creó un componente de vista previa de artículo muestra el título, resumen y una opción para compartir el contenido en redes sociales. El enfoque está en crear una experiencia de usuario fluida.",
    },
    {
        title: "Newsletter Sign-Up Form",
        challengeNumber: "11",
        imgSrc: "img/NewsletterSign-UpFormWithSuccessMessage.webp",
        imgAlt: "Newsletter Sign-Up Form With Success Message - Challenge 11",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/11-Newsletter%20Sign-Up%20Form%20With%20Success%20Message",
        deployLink: "11-Newsletter Sign-Up Form With Success Message/index.html",
        description: "Se creó un formulario de suscripción a un boletín que muestra un mensaje de éxito tras la inscripción. Asegurando que el usuario reciba un feedback visual claro tras enviar el formulario.",
    },
    {
        title: "Product Preview Card",
        challengeNumber: "12",
        imgSrc: "img/ProductPreviewCard.webp",
        imgAlt: "Product Preview Card - Challenge 12",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/12-Product%20Preview%20Card",
        deployLink: "12-Product Preview Card/index.html",
        description: "Se creó una tarjeta de vista previa de un producto que incluye una imagen, descripción y precio. Es un proyecto útil para practicar la presentación de productos de manera atractiva y funcional.",
    },
    {
        title: "Recipe Page",
        challengeNumber: "13",
        imgSrc: "img/RecipePage.webp",
        imgAlt: "Recipe Page - Challenge 13",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/13-Recipe%20Page",
        deployLink: "13-Recipe Page/index.html",
        description: "Se creó una página de recetas que muestra ingredientes, pasos y una imagen del plato final. Es una excelente oportunidad para trabajar en la disposición de contenido extenso de manera organizada.",
    },
    {
        title: "Testimonials Grid Section",
        challengeNumber: "14",
        imgSrc: "img/TestimonialsGridSection.webp",
        imgAlt: "Testimonials Grid Section - Challenge 14",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/14-Testimonials%20Grid%20Section",
        deployLink: "14-Testimonials Grid Section/index.html",
        description: "Se creó una sección de testimonios que presenta opiniones de clientes de forma estructurada en una cuadrícula. Es un proyecto ideal visualizar la presentación de contenido testimonial en un sitio web.",
    },
    {
        title: "Mortgage Repayment Calculator",
        challengeNumber: "15",
        imgSrc: "img/MortgageRepaymentCalculator.webp",
        imgAlt: "Mortgage Repayment Calculator - Challenge 15",
        repoLink: "https://github.com/eduardoe92/Challenge/tree/main/15-Mortgage%20Repayment%20Calculator",
        deployLink: "15-Mortgage Repayment Calculator/index.html",
        description: "Se creó una calculadora de pago de hipoteca, que permite a los usuarios calcular sus pagos mensuales basados en el monto del préstamo, la tasa de interés y el plazo.",
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
                <div class="description-overlay">
                    <p>${challenge.description}</p>
                </div>
            </div>
        </div>
    </div>
`;
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
});