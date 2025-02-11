// Inicializar AOS (animaciones on scroll)
AOS.init();

// ScrollReveal Animations

ScrollReveal().reveal(".about", {
  duration: 2000,
  origin: "left",
  distance: "30px",
});

ScrollReveal().reveal(".portfolio-item", {
  duration: 1500,
  origin: "bottom",
  distance: "30px",
  interval: 200,
});

//menu hamburguesa
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".navbar ul").classList.toggle("active");
});
