// ==============================
// NERO BARBER STUDIO
// Main JavaScript
// ==============================


// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ==============================
// HEADER SCROLL EFFECT
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 8, 8, 0.92)";
        header.style.backdropFilter = "blur(12px)";
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
    }

});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".service-card, .testimonial, .gallery-item, .about-content, .about-image, .stat"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ==============================
// CURRENT YEAR
// ==============================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright span");

if (copyright) {
    copyright.textContent =
        `© ${year} NERO Barber Studio`;
      }
