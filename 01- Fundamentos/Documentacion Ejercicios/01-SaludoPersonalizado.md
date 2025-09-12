# Ejercicio 1 – Saludo Personalizado

## 📝 Enunciado
Declara dos variables: `nombre` y `apellido`.
Muestra en consola un mensaje que diga:
```
Hola, [Tu Nombre Completo]
```
Agrega interacción para que el usuario ingrese su nombre y apellido.

---

## 💻 Solución Final (JavaScript)
```javascript
"use strict";
const prompt = require("prompt-sync")();

const saludoPersonalizado = (nombre='sin nombre', apellido='sin apellido')=>{
  return `Hola ${nombre} ${apellido}`
}

console.log(saludoPersonalizado(
  prompt('Ingresa tu Nombre: ').trim(), 
  prompt('Ingresa tu apellido: ').trim()));
```

---

## 📊 Feedback Final
- Código **limpio, moderno y legible**.
- Uso correcto de **arrow functions** y **template literals**.
- Interactividad añadida con `prompt-sync`.
- Manejo de **casos edge** mediante parámetros por defecto y `.trim()`.
- Complejidad temporal y espacial: **O(1)**.

✅ **Calificación final: 10/10** 🚀
