# Ejercicio 2 – Conversión Celsius a Fahrenheit

## 📝 Enunciado
Crea una función en **JavaScript** que reciba una temperatura en **Celsius** y la convierta a **Fahrenheit** usando la fórmula:

F = (C × 1.8) + 32

### ✅ Casos de prueba correctos
- celsiusAFahrenheit(0) → 32
- celsiusAFahrenheit(100) → 212
- celsiusAFahrenheit(25) → 77
- celsiusAFahrenheit(36.5) → 97.7
- celsiusAFahrenheit(-10) → 14
- celsiusAFahrenheit(-273.15) → -459.67 (cero absoluto)
- celsiusAFahrenheit(1000) → 1832

### ⚠️ Casos de error y validaciones
- Entrada es string: "25" → Error
- Entrada es null → Error
- Entrada es undefined → Error
- Entrada es objeto {} → Error
- Entrada < -273.15 → Error (menor al cero absoluto)

---

## 💻 Solución Final (JavaScript)
```javascript
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

    // Resultado de la conversión
    return celsius * 1.8 + 32;

  } catch (e) {
    console.log("❌", e.message);
    return null; // Retorno consistente en caso de error
  }
};

// Casos de Prueba
console.log(celsiusAFahrenheit("25"));       // ❌ Error
console.log(celsiusAFahrenheit(null));       // ❌ Error
console.log(celsiusAFahrenheit(undefined));  // ❌ Error
console.log(celsiusAFahrenheit({}));         // ❌ Error

console.log(celsiusAFahrenheit(0));          // 32
console.log(celsiusAFahrenheit(100));        // 212
console.log(celsiusAFahrenheit(25));         // 77
console.log(celsiusAFahrenheit(36.5));       // 97.7
console.log(celsiusAFahrenheit(-10));        // 14
console.log(celsiusAFahrenheit(-273.15));    // -459.67
console.log(celsiusAFahrenheit(1000));       // 1832

console.log(celsiusAFahrenheit(-300));       // ❌ Error
console.log(celsiusAFahrenheit(-273.16));    // ❌ Error
```

---

## 📊 Feedback Final
- ✅ Validaciones exhaustivas: tipos inválidos, `null`, `undefined`, objetos y rangos fuera de lo posible.
- ✅ Manejo de errores consistente: imprime mensaje y retorna `null`.
- ✅ Fórmula correcta.
- ✅ Casos de prueba diversos (básicos, extremos y de error).
- 🚀 Código limpio, documentado y seguro ante entradas inválidas.

**Complejidad Temporal:** O(1)  
**Complejidad Espacial:** O(1)

✅ **Calificación final: 10/10**
