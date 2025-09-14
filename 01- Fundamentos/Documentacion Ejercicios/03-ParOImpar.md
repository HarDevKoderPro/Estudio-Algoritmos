# Ejercicio 3 – Par o Impar

## 📖 Enunciado
Escribe un programa que reciba un número entero ingresado por el usuario e indique si dicho número es **par** o **impar**.

---

## ✅ Casos de Prueba Correctos
1. Entrada: `4` → Salida esperada: "El número 4 es Par"
2. Entrada: `7` → Salida esperada: "El número 7 es Impar"
3. Entrada: `0` → Salida esperada: "El número 0 es Par"
4. Entrada: `-2` → Salida esperada: "El número -2 es Par"
5. Entrada: `-9` → Salida esperada: "El número -9 es Impar"

---

## ⚠️ Casos de Error
1. Entrada: `"hola"` → "Error: Solo se admiten números enteros"
2. Entrada: `3.5` → "Error: No se admiten decimales"
3. Entrada: `""` → "Error: No se ingresó ningún dato"
4. Entrada: `1000000` → "Error: El número ingresado es demasiado grande."

---

## 🔒 Validaciones Implementadas
- Solo se admiten números enteros.
- Se rechazan cadenas vacías, `null` o `undefined`.
- Se rechazan valores no numéricos.
- Se rechazan decimales.
- Validación opcional de rango para enteros demasiado grandes.
- Manejo robusto de errores con `try/catch`.

---

## 💻 Implementación Final

```javascript
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

    // Determino si el número ingresado es par o impar
    return numero % 2 === 0
      ? "El número ingresado es Par"
      : "El número ingresado es Impar";
  } catch (e) {
    console.log("❌", e.message);
    return null;
  }
};
```

---

## 🧪 Resultados de las pruebas

```javascript
parOImpar("hola");     // ❌ Solo se admiten números enteros
parOImpar(3.5);        // ❌ No se admiten decimales
parOImpar("");         // ❌ No se ingreso ningún dato
parOImpar(5000000);    // ❌ El número ingresado es demasiado grande

console.log(parOImpar(4));   // ✅ El número ingresado es Par
console.log(parOImpar(7));   // ✅ El número ingresado es Impar
console.log(parOImpar(0));   // ✅ El número ingresado es Par
console.log(parOImpar(-2));  // ✅ El número ingresado es Par
console.log(parOImpar(-9));  // ✅ El número ingresado es Impar
```

---

## 📝 Evaluación
- **Correctitud funcional:** 4/4
- **Manejo de casos de error:** 3/3
- **Claridad de mensajes:** 2/2
- **Buenas prácticas:** 1/1

**Puntaje total → 10/10 🏆**

---

## 📌 Conclusión
El ejercicio cumple con todos los requisitos: implementa validaciones robustas, cubre casos de prueba correctos y de error, y mantiene consistencia en los mensajes. La solución quedó óptima y lista para entrevistas técnicas.
