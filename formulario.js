import { whatsappNumber } from "./env.js";

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que se recargue la página

  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const consulta = document.getElementById("message").value;

  const text =
    `Consulta desde el Formulario Web:%0A` +
    `Nombre: ${nombre}%0A` +
    `Email: ${email}%0A` +
    `Consulta: ${consulta}`;

  const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;

  window.open(url, "_blank");
});
