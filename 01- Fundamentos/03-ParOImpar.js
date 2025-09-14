/*
=============================================================================
EJERCICIO 3 - PAR O IMPAR
=============================================================================

📖 ENUNCIADO:
Escribe un programa que reciba un número entero ingresado por el usuario e 
indique si dicho número es PAR o IMPAR.

=============================================================================
🔒 VALIDACIONES Y RESTRICCIONES:
=============================================================================
1. El programa debe aceptar SOLO números enteros (positivos, negativos o cero)
2. Si el usuario ingresa texto, decimales, vacío o cualquier otra cosa, 
   se debe mostrar un mensaje de error claro
3. El flujo debe ser robusto: no debe romperse frente a entradas inesperadas
4. (Opcional) Controlar números demasiado grandes que puedan afectar el rendimiento

=============================================================================
⚠️ CASOS DE ERROR (ENTRADAS INVÁLIDAS):
=============================================================================
1. Entrada: "hola"     → Salida: "Error: debes ingresar un número entero."
2. Entrada: 3.5        → Salida: "Error: el número debe ser un entero."
3. Entrada: ""         → Salida: "Error: no se ingresó ningún valor."
4. Entrada: muy grande → Salida: "Error: el número ingresado es demasiado grande."

=============================================================================
✅ CASOS DE PRUEBA CORRECTOS:
=============================================================================
1. Entrada: 4     → Salida esperada: "El número 4 es par."
2. Entrada: 7     → Salida esperada: "El número 7 es impar."
3. Entrada: 0     → Salida esperada: "El número 0 es par."
4. Entrada: -2    → Salida esperada: "El número -2 es par."
5. Entrada: -9    → Salida esperada: "El número -9 es impar."

=============================================================================
💻 IMPLEMENTACIÓN:
=============================================================================
*/

"use strict";

const parOImpar = (numero) => {
  try {
    // Validación de datos de entrada
    if (numero === "" || numero === null || numero === undefined)
      throw new Error("No se ingreso ningún dato");
    if (isNaN(numero))
      throw new Error("Solo se admiten números enteros");
    if (numero % 1 !== 0) 
      throw new Error("No se admiten decimales");
    if (numero > 1000 || numero < -1000)
      throw new Error("El número ingresado es demasiado grande.");

    // Determino si el numero ingresado es par o impar
    return numero % 2 === 0
      ? "El número ingresado es Par"
      : "El número ingresado es Impar";
  } catch (e) {
    console.log("❌", e.message);
    return null;
  }
};

parOImpar('Hola');
parOImpar(3.5);
parOImpar("");
parOImpar(500000);
parOImpar(-45000);
console.log(parOImpar(4));
console.log(parOImpar(7));
console.log(parOImpar(0));
console.log(parOImpar(-2));
console.log(parOImpar(-9));
