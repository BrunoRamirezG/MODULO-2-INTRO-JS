/**Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales */


var numero1 = Number(prompt("Ingresa un número"));
var numero2 = Number(prompt("Vuelve a ingresar otro número"));

alert(Math.min(numero1,numero2) + " es el numero más chico.");
