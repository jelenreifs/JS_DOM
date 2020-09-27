let nombre = window.prompt("Introduce tu nombre");
let edad = window.prompt("Introduce tu edad");

if (edad < 18) {
  document.getElementById(
    "container"
  ).innerHTML = `Hola ${nombre}, eres menor de edad.`;
} else {
  document.getElementById(
    "container"
  ).innerHTML = `Hola ${nombre}, eres mayor de edad.`;
}
