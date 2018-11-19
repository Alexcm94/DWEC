// 1. Muestra, maquetada en una tabla HTML toda la informacion que puedas 
// extraer mediante JavaScript del navegador cliente.

document.write("<table border = '1' cellspacin= '2' bgcolor='white'>");
document.write("<tr>");
	document.write("<td>");
		document.write("Nombre del navegador: ");
	document.write("</td>");
	document.write("<td>");
		document.write(navigator.appCodeName);
	document.write("</td>");
document.write("</tr>");

document.write("<tr>");
	document.write("<td>");
		document.write("Navegador fuente: ");
	document.write("</td>");
	document.write("<td>");
		document.write(navigator.appName);
	document.write("</td>");
document.write("</tr>");

document.write("<tr>");
	document.write("<td>");
		document.write("Version: ");
	document.write("</td>");
	document.write("<td>");
		document.write(navigator.appVersion);
	document.write("</td>");
document.write("</tr>");

document.write("<tr>");
	document.write("<td>");
		document.write("Cookies activados: ");
	document.write("</td>");
	document.write("<td>");
		document.write(navigator.cookieEnabled);
	document.write("</td>");
document.write("</tr>");

document.write("<tr>");
	document.write("<td>");
		document.write("Lenguaje: ");
	document.write("</td>");
	document.write("<td>");
		document.write(navigator.language);
	document.write("</td>");
document.write("</tr>");

document.write("<tr>");
	document.write("<td>");
		document.write("Plataforma: ");
	document.write("</td>");
	document.write("<td>");
		document.write(navigator.platform);
	document.write("</td>");
document.write("</tr>");
document.write("</table>");












/*







language	Returns the language of the browser
onLine	Determines whether the browser is online
platform	Returns for which platform the browser is compiled
product	Returns the engine name of the browser
userAgent	Returns the user-agent header sent by the browser to the server
*/