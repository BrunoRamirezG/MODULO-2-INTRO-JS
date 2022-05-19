/** Solicitar al usuario un número. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensjae "Lo sentimos sigue participando" */

var numero = Number(prompt("Escribe un número"));

if(numero == 1000){
    console.log("¡Ganaste un premio!");
}else {
    console.log("Lo sentimos sigue participando");
}