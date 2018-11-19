// 7. Desarrolla una funcion que tomando como entrada una cadena de texto nos 
//devuelva si es o no un palindromo.
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
	if(iguales==true){
		alert(" La cadena introducida es un palíndromo.");
	}else{
		alert(" La cadena introducida no es un palíndromo");
	}

}
esPalindromo(cadena);
/*


// En primer lugar desarrollamos una funcion que pasada una cadena te la devuelve invertida:

function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

var palabra = prompt("Introduce una cadena para comprobar si es palindromo o no: ");
var palabraInvert = invertir(palabra);
*/