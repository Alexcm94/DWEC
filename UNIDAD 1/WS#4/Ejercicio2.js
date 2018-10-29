var lang;
function helloWorld(lang){
	switch(lang){
		case "es": 
			document.write("<p> Hola mundo </p>");
			break;
		case  "de":
			document.write("<p> Hallo Welt </p>");
			break;
		default:
			document.write("<p> Hi world </p>");
			break;
	} 
}
helloWorld();
helloWorld("cabron");
helloWorld("es");
helloWorld("de");
