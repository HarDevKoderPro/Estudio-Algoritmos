/*
--------------------------------------------------------------------
Ejercicio: 
--------------------------------------------------------------------
Declara dos variables: nombre y apellido.
Muestra en consola un mensaje que diga:
Hola, [Tu Nombre Completo]
--------------------------------------------------------------------
*/

"use strict";
const prompt = require("prompt-sync")();

const saludoPersonalizado = (nombre='sin nombre', apellido='sin apellido')=>{
  return `Hola ${nombre} ${apellido}`
}

console.log(saludoPersonalizado(
  prompt('Ingresa tu Nombre: ').trim(), 
  prompt('Ingresa tu apellido: ').trim()));