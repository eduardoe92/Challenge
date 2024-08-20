const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
let isNavbarOpen = false;

const toggleNavbar = () => {
    isNavbarOpen = !isNavbarOpen;

    navbar.classList.toggle("navbar--open", isNavbarOpen);
    document.documentElement.style.overflow = isNavbarOpen ? "hidden" : "";
    document.body.style.overflow = isNavbarOpen ? "hidden" : "";
};

navOpen.addEventListener("click", toggleNavbar);
navClose.addEventListener("click", toggleNavbar);
