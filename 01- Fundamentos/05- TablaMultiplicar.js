/* ===========================================================
   Ejercicio 5 – Tabla de Multiplicar
   ===========================================================

   📝 Enunciado:
   Escribir un programa que reciba como entrada un número entero 
   e imprima su tabla de multiplicar del 1 al 10.

   🔒 Validaciones y Restricciones:
   - El número de entrada debe ser un entero válido (positivo, negativo o cero).
   - Si el usuario ingresa texto, número decimal, vacío u otro valor inválido, 
     se debe mostrar un mensaje de error claro.
   - El programa debe mostrar la tabla en un formato legible, por ejemplo:
       5 x 1 = 5
       5 x 2 = 10
       ...
       5 x 10 = 50
   - El flujo del programa no debe romperse frente a entradas incorrectas.

   ⚠️ Casos de Error (Entradas Inválidas):
   - Entrada: "hola" → Salida: "Error: Debes ingresar un número entero."
   - Entrada: 3.5    → Salida: "Error: El número debe ser un entero."
   - Entrada: ""     → Salida: "Error: No se ingresó ningún valor."

   ✅ Casos de Prueba Correctos:
   - Entrada: 5   → Salida esperada: tabla del 5 hasta 5 x 10 = 50.
   - Entrada: 0   → Salida esperada: tabla del 0 con todos los productos en 0.
   - Entrada: -3  → Salida esperada: tabla del -3 (valores negativos).
   - Entrada: 10  → Salida esperada: tabla del 10 hasta 10 x 10 = 100.

   =========================================================== */

"use strict";
const prompt = require("prompt-sync")();

const tablaDeMultiplicar = (numero) => {
  try {
    // validación de dato vacío
    if (numero === "") throw new Error("No se ingresó ningún valor.");

    // Validación de dato no numérico
    numero = Number(numero);
    if (isNaN(numero))
      throw new Error("El dato de entrada debe ser numérico...");

    // Validación de decimales
    if (numero % 1 !== 0) throw new Error("Solo se admiten números enteros...");

    // Generar Tabla si se pasan las validaciones
    let tabla = `
---------------------
TABLA DEL ${numero}
---------------------\n`;
    for (let i = 1; i <= 10; i++) tabla += `${numero} x ${i} = ${numero * i}\n`;

    return tabla;
    
  } catch (e) {
    console.error("❌", e.message);
    return null;
  }
};

const respuesta = tablaDeMultiplicar(
  prompt("Ingresa un número para generar su tabla de multiplicar: ")
);
if (respuesta !== null) console.log(respuesta);
