// CLASE 5 - lunes 2 de mayo 2022
// Estructura de Control – Ciclos

// Ejercicio 5: Tablas de Multiplicación

/* • Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
 multiplicación, el usuario también deberá ingresar dicho valor. */

/* Ingrese el número: 9
Ingrese hasta qué número: 4
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36 */

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "¿La tabla de qué número desea?";
rotulo2.innerHTML = "¿Hasta qué número desea?";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("Enviar");

btnEnviar.addEventListener("click", () => {
  let numTabla: number = Number(dato1.value);
  let limiteTabla: number = Number(dato2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= limiteTabla; contador++) {
    resultado = numTabla * contador;
    console.log(numTabla + " x " + contador + " = " + resultado);
  }
});
