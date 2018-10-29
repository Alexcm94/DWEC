

var ncol = prompt("Escribe el numero de columnas de la tabla ");
var altura = prompt("Escribe la altura de las columnas en pixeles ");
var ancho = prompt("Escribe la anchuras de las columnas en pixeles ");
function tabla(ncol, altura, ancho){
document.write("<table border = '0' cellspacin= '2' bgcolor='black'>");
document.write("<tr height='"+altura+"'>");
for(var i=1; i<=ncol; i++){
	if(i%2==0){
		document.write(" <td width='"+ancho+"' bgcolor='white' >&nbsp; </td>");
	}else{
		document.write("<td width='"+ancho+"' bgcolor='black' >&nbsp; </td>");
	}
	
}
document.write("</tr>");
document.write("</table>");
}

tabla(ncol, altura, ancho);