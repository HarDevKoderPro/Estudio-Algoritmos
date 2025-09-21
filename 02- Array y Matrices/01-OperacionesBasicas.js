/* ===========================================================
   Ejercicio 6 – Operaciones con Arrays (Suma y Promedio)
   ===========================================================

   📝 Enunciado:
   Escribir un programa que reciba un conjunto de números enteros
   almacenados en un array y calcule:
   - La suma de los elementos.
   - El promedio de los elementos.

   🔒 Validaciones y Restricciones:
   - Todos los elementos del array deben ser números enteros.
   - Si el array está vacío, mostrar un mensaje de error.
   - Si algún valor no es numérico o es decimal, mostrar un mensaje de error.
   - El promedio debe calcularse con dos decimales.

   ⚠️ Casos de Error:
   - Entrada: [] 
       → Salida: "Error: El array está vacío."
   - Entrada: [2, "hola", 5] 
       → Salida: "Error: Todos los elementos deben ser enteros."
   - Entrada: [4.5, 2, 3] 
       → Salida: "Error: No se permiten decimales."

   ✅ Casos de Prueba Correctos:
   - Entrada: [1, 2, 3, 4, 5]
       Salida:
         Suma: 15
         Promedio: 3.00

   - Entrada: [10, 20, 30]
       Salida:
         Suma: 60
         Promedio: 20.00

   - Entrada: [-5, 0, 5, 10]
       Salida:
         Suma: 10
         Promedio: 2.50

   =========================================================== */

"use strict";
const prompt = require("prompt-sync")();

// Función Principal
const sumarYPromediarArr = (arr) =>{
  try {
    // Verifico array vacío
    if(arr.length === 0) throw new Error("El array está vacío.");

    
    // Convierto valores del array a numeros para validarlos
    const arrNumerico = arr.map(valor => Number(valor));
    
    // Evito cadenas de texto
    if(arrNumerico.some(valor => isNaN(valor)))
      throw new Error("Todos los elementos deben ser enteros.")

    // Valido que no existan numeros decimales
    if(arrNumerico.some(valor => valor % 1 !== 0))
      throw new Error("No se permiten decimales.");

    // Realizo los calculos con valores validos
    let suma, promedio = 0;
    suma = arrNumerico.reduce((acum, valor) => acum + valor);
    promedio = (suma / arrNumerico.length).toFixed(2);

    return  [arrNumerico, suma , promedio];
    
  } catch (e) {
    console.error("❌", e.message);
    return null; 
  }
}

// Programa Principal
const arr = [];
const cantValores = Number(prompt('Cuantos valores vas a ingresar al Array?: '));

for(let i=0; i<cantValores; i++){
  arr.push(prompt(`Valor ${i+1}: `));
}

let resultado = sumarYPromediarArr(arr);
if(resultado !== null){
  const [arrNumerico, suma, promedio] = resultado;
  console.log(`
Array Ingresado: [${arrNumerico}]
Suma de sus Valores: ${suma}
Promedio de sus Valores: ${promedio}`)
}
