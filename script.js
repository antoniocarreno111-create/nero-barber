const WHATSAPP_NUMBER = "593999999999";

const bookingMessage =
  "Hola, quiero reservar una cita en NERO Barber Studio. ¿Qué horarios tienen disponibles?";

const waLink =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent(bookingMessage);


// BOTÓN DE RESERVA
const bookingBtn = document.getElementById("bookingBtn");

if (bookingBtn) {
  bookingBtn.href = waLink;
}


// BOTÓN FLOTANTE DE WHATSAPP
const waFloat = document.getElementById("waFloat");

if (waFloat) {
  waFloat.href = waLink;
}


// MENÚ PARA CELULAR
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

}


// CERRAR MENÚ AL TOCAR UN ENLACE
document.querySelectorAll("#navLinks a").forEach((link) => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("open");
    }

  });

});
