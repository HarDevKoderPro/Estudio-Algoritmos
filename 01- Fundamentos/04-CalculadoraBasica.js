const PromptSync = require("prompt-sync");

/*
=============================================================================
EJERCICIO 4 - CALCULADORA BÁSICA
=============================================================================

📖 ENUNCIADO:
Escribe un programa que reciba dos números ingresados por el usuario y una 
operación matemática básica (+, -, *, /). El programa debe realizar la 
operación y mostrar el resultado correspondiente.

=============================================================================
🔒 VALIDACIONES Y RESTRICCIONES:
=============================================================================
1. El programa debe aceptar SOLO números válidos (enteros o decimales, positivos o negativos).
2. La operación debe ser exclusivamente uno de los siguientes símbolos: +, -, *, /.
3. Si el usuario ingresa texto, símbolos inválidos, vacío u otro caracter, 
   se debe mostrar un mensaje de error claro.
4. En el caso de división, se debe controlar el error de "división por cero".
5. El flujo debe ser robusto: no debe romperse frente a entradas inesperadas.
6. Los resultados numéricos deben mostrarse con claridad, con un máximo 
   de 2 decimales en operaciones con resultado decimal.

=============================================================================
⚠️ CASOS DE ERROR (ENTRADAS INVÁLIDAS):
=============================================================================
1. Entrada: num1="abc", num2=5, operación="+"     
   → Salida: "Error: 'abc' no es un número válido."

2. Entrada: num1=7, num2=2, operación="^"     
   → Salida: "Error: '^' no es una operación válida. Usa +, -, *, /."

3. Entrada: num1=10, num2=0, operación="/"     
   → Salida: "Error: no se puede dividir entre cero."

4. Entrada: num1="", num2=4, operación="*"     
   → Salida: "Error: Debes ingresar un número válido."

5. Entrada: num1=5, num2=3, operación=" + "    
   → Salida: "Error: ' + ' no es una operación válida. Usa +, -, *, /."

=============================================================================
✅ CASOS DE PRUEBA CORRECTOS:
=============================================================================
1. Entrada: num1=4, num2=2, operación="+"     
   → Salida esperada: "4 + 2 = 6"

2. Entrada: num1=15, num2=3, operación="/"    
   → Salida esperada: "15 / 3 = 5"

3. Entrada: num1=5.5, num2=2.2, operación="*"     
   → Salida esperada: "5.5 * 2.2 = 12.1"

4. Entrada: num1=2, num2=7, operación="-"     
   → Salida esperada: "2 - 7 = -5"

5. Entrada: num1=-8, num2=-2, operación="*"     
   → Salida esperada: "-8 * -2 = 16"

=============================================================================
💻 IMPLEMENTACIÓN:
=============================================================================
*/

"use strict";
const prompt = require("prompt-sync")();

const calcularOperacion = (num1, num2, operador) => {
  try {
    let resultado = 0;

    //validaciones de datos de entrada
    if (num1 === "" || num2 === "")
      throw new Error("No pueden haber datos vacíos...");

    // Convierto a numeros los digitos para seguir validando
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2))
      throw new Error("Solo se admiten valores numéricos...");

    if (!/^[+\-*/]$/.test(operador)) 
      throw new Error("Operador no válido ...");

    if(operador === '/' && num2 === 0)
      throw new Error('División por cero no definida!');

    // //Operaciones básicas
    resultado = (operador === '+')
      ? (num1 + num2).toFixed(2)
      : (operador === '-')
      ? (num1 - num2).toFixed(2)
      : (operador === '*') 
      ? (num1 * num2).toFixed(2)
      : (num1 / num2).toFixed(2)

    return `${num1} ${operador} ${num2} = ${resultado}`;

  } catch (e) {
    console.error("❌", e.message);
    return null;
  }
};

const resultado = calcularOperacion(
    prompt("Ingresa el primer numero: "),
    prompt("Ingresa el segundo numero: "),
    prompt("Ingresa la operación a realizar: ")
  );

if (resultado !== null) console.log(resultado);
