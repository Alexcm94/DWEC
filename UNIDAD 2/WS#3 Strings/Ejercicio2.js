/*2. Definir una funcion que muestre informacion sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la funcion
determina si esa cadena esta formada solo por mayusculas, solo por minusculas o
por una mezcla de ambas.*/

var cadena = prompt("Introduce una cadena: ");
function comprobarCadena(cadena){
	//Convertimos la cadena en un array
	var letrasEspacios = cadena.split("");
	//Eliminamos los espacios en blanco
	var cadenaSinEspacios="";
	for(let i=0; i<letrasEspacios.length; i++){
		if(letrasEspacios[i] != " "){
			cadenaSinEspacios += letrasEspacios[i];
		}
	}
	//Volvemos a pasar la cadena sin espacios a un Array;
	var letras = cadenaSinEspacios.split("");
	var contadorMinusculas = 0;
	var contadorMayusculas = 0;
	for(let j=0; j<letras.length; j++){
		if(letras[j]==letras[j].toUpperCase()){
			contadorMayusculas ++;
		}
		if(letras[j]==letras[j].toLowerCase()){
			contadorMinusculas ++;
		}
	}
	//Ahora comprobamos..
	if(contadorMinusculas==letras.length){
		alert(" La cadena que ha introducido tiene solamente minusculas");
	}else if(contadorMayusculas==letras.length){
		alert(" La cadena que ha introducido tiene solamente mayusculas");
	}else{
		alert(" La cadena que ha introducido tiene mayusculas y minusculas");
	}
}
comprobarCadena(cadena);




/*


var cadena = prompt("Introduce una cadena");
function esPalindromo(cadena){
	//En primer lugar pasamos a minusculas la cadena:
	var cadenaOriginal = cadena.toLowerCase();
	//Convertimos la cadena en un array
	var letrasEspacios = cadenaOriginal.split("");
	//Eliminamos los espacios en blanco
	var cadenaSinEspacios="";
	for(i in letrasEspacios){
		if(letrasEspacios[i] != " "){
			cadenaSinEspacios += letrasEspacios[i];
		}
	}
	var letras = cadenaSinEspacios.split("");
	var letrasReves = cadenaSinEspacios.split("").reverse();

	var iguales = true;
	for(i in letras){
		if(letras[i] == letrasReves[i]){
			iguales = true;
		}else{
			// Alguna letra es distinta, por lo que ya no es palíndromo
			iguales = false;
		}
	}
	*/