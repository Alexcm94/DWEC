function adivinarNumero(num){
	var num_adivinar;
	do{
		num_adivinar=prompt("Jugador 2: Introduce un numero entre 1 y 100");
		if(num_adivinar==num){
			alert("Enhorabuena, has acertado el numero, eres un genius.");
		}else if(num<num_adivinar){
			alert("El numero es menor del que has introducido");
		}else{
			alert("El numero es mayor del que has introducido");
		}

	}while(num_adivinar != num)
}

var num;
num=1.0*prompt("Jugador 1: Introduce el numero que deseas que se adivine");
adivinarNumero(num);