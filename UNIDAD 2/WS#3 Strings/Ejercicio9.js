//EJERCICIO 9

var palabra = prompt("Introduce una palabra: ");

function tabla(palabra){
var palabraInvert=invertir(palabra);
document.write("<table>");
document.write("<tr>");
for(let i=0; i<palabra.length; i++){
	document.write('<td>'+palabra[i]+'</td>');
}
document.write('</tr>');
for (let j=1; j< palabra.length - 1; j++){
	document.write('<tr>');
	document.write('<td>' + palabra[j] + '</td>');

	for(let k=0; k < palabra.length -2; k++){
		document.write('<td></td>');
	}
	document.write('<td>' + palabraInvert[j] + '</td>');
	document.write('</tr>');
}
for(let z=0; z<palabraInvert.length; z++){
	document.write('<td>' + palabraInvert[z] + '</td>');
}
document.write('</tr>');
}

function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}
document.write(tabla(palabra));