//1. Crea una pagina en la que se muestre: 
//• Un numero aleatorio entre 0 y 1. 
//• Igual pero entre 100 y 200.
//• Pide dos valores al usuario y genera un n aleatorio entre esos dos º
//valores.
var num_aleatorio;
num_aleatorio = Math.random();
document.write("El numero aleatorio es: "+num_aleatorio.toFixed(3)+'</br>');

num_aleatorio2 = (Math.random()+1) * 100;
document.write("El numero aleatorio es: "+num_aleatorio2.toFixed(3)+'</br>');



