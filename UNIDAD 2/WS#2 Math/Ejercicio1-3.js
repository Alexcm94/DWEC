var num1 = Number.parseInt(prompt("Introduzca el valor del primer elemento"));
var num2 = Number.parseInt(prompt("Introduzca el valor del segundo elemento"));
document.write("El numero comprendido entre "+ num1 + " y "+ num2 + " es: "+ sacarNumeroAleatorio(num1, num2).toFixed(2));
function sacarNumeroAleatorio(n1, n2){
	if(n1<n2){
		 return (Math.random()*(n2 - n1) + n1); 
	}else{
		 return (Math.random()*(n1 - n2) + n2);
	}
	
}

