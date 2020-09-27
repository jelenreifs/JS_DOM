let operacion = window.prompt(`¿Qúe operación quieres realizar?:
Teclea S: Suma 
Teclea R: Resta
Teclea M: Multiplicación
Teclea D: División`);

/* let operacionMinus = operacion.toLowerCase(); */

let num1 = parseInt(window.prompt(`Introduce un número`));
let num2 = parseInt(window.prompt(`Introduce otro número`));

if (operacion.toLowerCase() == "s") {
  document.getElementById(
    "container"
  ).innerHTML = `<p>${num1} + ${num2} = ${num1 + num2}</p>`;
} else if (operacion.toLowerCase() == "r") {
  document.getElementById(
    "container"
  ).innerHTML = `<p>${num1} - ${num2} = ${num1 - num2}</p>`;
} else if (operacion.toLowerCase() == "m") {
  document.getElementById(
    "container"
  ).innerHTML = `<p>${num1} * ${num2} = ${num1 * num2}</p>`;
} else {
  document.getElementById(
    "container"
  ).innerHTML = `<p>${num1} / ${num2} = ${num1 / num2}</p>`;
}
