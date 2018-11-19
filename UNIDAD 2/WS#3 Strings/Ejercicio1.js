
// APARTADO A) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario:
document.write("<h1> Apartado a </h1>");


function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

var palabra = prompt("Introduce una cadena para devolvertela invertida: ");
var palabraInvert = invertir(palabra);
document.write(" La cadena invertida es: "+ palabraInvert);
document.write("</br>");
document.write("<h1> Apartado b </h1>");