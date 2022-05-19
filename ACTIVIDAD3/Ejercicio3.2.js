/** Crear un programa que determine si un número introducido es un Prompt es par o no, la respuesta será mostrada en un Alert. */


var numero = prompt("escribe un número");
var numeroPar = 2;

if(numero % numeroPar == 0 ){
    alert(numero+ " es divisible entre 2");
}else{
    alert(numero+" no es divisble entre 2");
}