let num1 = window.prompt("Introduce un número");
let num2 = window.prompt("Introduce otro número");

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

/* Añadiendo un Style en cada <p> */
document.getElementById(
  "container1"
).innerHTML = `<p style="background-color:red">${num1} + ${num2} =  ${num1 +
  num2}</p>
  <p style="background-color:blue">${num1} - ${num2} =  ${num1 - num2}</p>
  <p style="background-color:green">${num1} * ${num2} =  ${num1 * num2}</p>
  <p style="background-color:pink">${num1} / ${num2} =  ${num1 / num2}</p>`;

/* Creando un p dentro del div */
document.getElementById(
  "container2"
).innerHTML = `<p id="operacion1">${num1} + ${num2} =  ${num1 + num2}</p>
  <p id="operacion2">${num1} - ${num2} =  ${num1 - num2}</p>
  <p id="operacion3">${num1} * ${num2} =  ${num1 * num2}</p>
  <p id="operacion4">${num1} / ${num2} =  ${num1 / num2}</p>`;

document.getElementById("operacion1").style.backgroundColor = "SteelBlue";

document.getElementById("operacion2").style.backgroundColor = "MediumVioletRed";

document.getElementById("operacion3").style.backgroundColor = "Orange";

document.getElementById("operacion4").style.backgroundColor = "Chartreuse";
