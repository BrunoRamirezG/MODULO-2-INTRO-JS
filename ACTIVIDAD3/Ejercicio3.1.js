/** Solicitar al usuario un numero, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x num" */


var numero = prompt("escribe un número");
var numeroPar = 2;

if(numero % numeroPar == 0 ){
    console.log(numero+ " es divisible entre 2");
}else{
    console.log(numero+" no es divisble entre 2");
}
