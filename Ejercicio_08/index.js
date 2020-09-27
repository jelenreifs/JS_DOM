let edad = parseInt(window.prompt(`Introduce tu edad`));
let precioDia = 25;

if (edad >= 18) {
  let nombre = window.prompt("Introduce tu nombre");
  let apellido = window.prompt("Introduce tu apellido");
  let ciudadRecogida = window.prompt(
    "Introduce la ciudad de recogida del vehículo"
  );
  let numDias = window.prompt("Introduce el número de días de alquiler");

  document.getElementById("container").innerHTML = `
  <p>Nombre: ${nombre}</p>
  <p>Apellido: ${apellido}</p>
  <p>Ciudad de recogida: ${ciudadRecogida}</p>
  <p>Días: ${numDias}</p>`;

  numDias === 7
    ? (document.getElementById("container").innerHTML = `<p>Total: 150 €</p>`)
    : (document.getElementById("container").innerHTML = `<p>Total: ${numDias *
        25}€</p>`);
} else {
  document.getElementById(
    "container"
  ).innerHTML = `<p>No puedes alquilar un vehículo</p>`;
}
