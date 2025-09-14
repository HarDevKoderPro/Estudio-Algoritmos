/*
--------------------------------------------------------------------
Ejercicio: 
--------------------------------------------------------------------
Crea una función en JavaScript que reciba una temperatura en Celsius 
y la convierta a Fahrenheit usando la fórmula:

F=(C×1.8)+32

🎯 Requisitos Técnicos
Función debe llamarse celsiusAFahrenheit
Debe incluir validaciones de entrada
Debe manejar errores de forma elegante (throw Error o return con mensaje)
Incluir casos de prueba que demuestren que funciona correctamente

⚠️ Restricciones y Validaciones
- Entrada debe ser un número (no string, null, undefined, objeto, etc.)
- No puede ser menor que -273.15°C (cero absoluto físico)
- Debe manejar números decimales correctamente
- Debe retornar un número, no string

🚨 Casos de Error a Manejar
// Tipos inválidos
celsiusAFahrenheit("25")     // → Error o NaN
celsiusAFahrenheit(null)     // → Error o NaN
celsiusAFahrenheit(undefined)// → Error o NaN
celsiusAFahrenheit({})       // → Error o NaN

✅ Casos de Prueba:
// Casos básicos
celsiusAFahrenheit(0)    // → 32
celsiusAFahrenheit(100)  // → 212
celsiusAFahrenheit(25)   // → 77

// Casos con decimales
celsiusAFahrenheit(36.5) // → 97.7
celsiusAFahrenheit(-10)  // → 14

// Casos extremos válidos
celsiusAFahrenheit(-273.15) // → -459.67 (cero absoluto)
celsiusAFahrenheit(1000)    // → 1832

// Valores físicamente imposibles
celsiusAFahrenheit(-300)     // → Error (menor que cero absoluto)
celsiusAFahrenheit(-273.16)  // → Error (menor que cero absoluto)
--------------------------------------------------------------------
*/

"use strict";

// Funcion que convierte grados Celsius a Fahrenheit
const celsiusAFahrenheit = (celsius) => {
  try {
    // Validaciones de entradas
    if (typeof celsius === "string")
      throw new Error("No se aceptan cadenas de texto");
    if (celsius === null)
      throw new Error("El dato de entrada no puede ser nulo");
    if (celsius === undefined)
      throw new Error("El dato de entrada no puede ser indefinido");
    if (typeof celsius === "object")
      throw new Error("El dato de entrada no puede ser un objeto");
    if (celsius < -273.15)
      throw new Error("Valor inferior al cero absoluto (-273.15°C)");

    // resultado de la conversión
    return celsius * 1.8 + 32;
    
  } catch (e) {
    console.log("❌", e.message);
    return null; // o return NaN; para indicar error
  }
};

// Casos de Prueba
// Tipos inválidos
celsiusAFahrenheit("25"); // → Error o NaN
celsiusAFahrenheit(null); // → Error o NaN
celsiusAFahrenheit(undefined); // → Error o NaN
celsiusAFahrenheit({}); // → Error o NaN

// Casos correctos
console.log(celsiusAFahrenheit(0)); // → 32
console.log(celsiusAFahrenheit(100)); // → 212
console.log(celsiusAFahrenheit(25)); // → 77

// Casos con decimales
console.log(celsiusAFahrenheit(36.5)); // → 97.7
console.log(celsiusAFahrenheit(-10)); // → 14

// Casos extremos válidos
console.log(celsiusAFahrenheit(-273.15)); // → -459.67 (cero absoluto)
console.log(celsiusAFahrenheit(1000)); // → 1832

// Valores físicamente imposibles
console.log(celsiusAFahrenheit(-300)); // → Error (menor que cero absoluto)
console.log(celsiusAFahrenheit(-273.16)); // → Error (menor que cero absoluto)
