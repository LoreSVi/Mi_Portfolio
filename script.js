// Inicializacion AOS (animaciones on scroll)
AOS.init();

// ScrollReveal Animations
ScrollReveal().reveal(".about", {
  duration: 2000,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".card", {
  duration: 1500,
  origin: "bottom",
  distance: "50px",
  interval: 200,
});

// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar ul");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Inicializa EmailJS 
(function () {
  emailjs.init("Tservice_GmailSend"); // Reemplaza con tu ID real
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, rellena todos los campos.",
      });
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("TU_SERVICIO", "TU_TEMPLATE", templateParams).then(
      function () {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme. Te responderé pronto.",
        });
        form.reset();
      },
      function (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar el mensaje. Intenta más tarde.",
        });
        console.error("EmailJS error:", error);
      }
    );
  });
});
