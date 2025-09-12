/*
--------------------------------------------------------------------
Ejercicio: 
--------------------------------------------------------------------
Crea una función en JavaScript que reciba una temperatura en Celsius 
y la convierta a Fahrenheit usando la fórmula:

F=(C×1.8)+32

✅ Casos de Prueba Correctos:
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

// Valores físicamente imposibles
celsiusAFahrenheit(-300)     // → Error (menor que cero absoluto)
celsiusAFahrenheit(-273.16)  // → Error (menor que cero absoluto)

🎯 Requisitos Técnicos
Función debe llamarse celsiusAFahrenheit
Debe incluir validaciones de entrada
Debe manejar errores de forma elegante (throw Error o return con mensaje)
Incluir casos de prueba que demuestren que funciona correctamente

--------------------------------------------------------------------
*/

"use strict";


