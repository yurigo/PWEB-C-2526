import { usuarios } from "./usuarios.js";

const textDiv = document.getElementById("text");
textDiv.innerHTML = usuarios
  .map((usuario) => `<p class="${usuario.name}">${usuario.email}</p>`)
  .join("");
