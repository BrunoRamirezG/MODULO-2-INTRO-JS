/* Con ayuda de la función prompt pedir dos datos al usuario: Nombre, edad.

Para luego imprimir en pantalla el siguiente resultado:

-si el ususario tiene edad de 18 o mayor puede ingresar a la discoteca.
-Si el usuario es menor de 18 no puede ingresar a la discoteca.
-Si el usuario se llama Mario o Carlos pueden ingresara VIP
*/

var nombre = prompt("Cual es tu nombre?");
var edad = Number(prompt("Cuantos años tienes?"));

if( (nombre == "Carlos") && (edad >= 18)  ){
    console.log("Puedes entrar al vip");
}else if( (nombre == "Mario") &&  (edad >= 18)){
    console.log("Puedes entrar al VIP.");
}else if( !(nombre == "Carlos" || "Mario") &&  (edad >= 18 )){
    console.log("Puedes entrar a la disco.");
}else if ( !(nombre == "Carlos" || "Mario") && edad <= 17){
    console.log("No pueden entrar.");
}

