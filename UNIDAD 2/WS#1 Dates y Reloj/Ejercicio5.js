// 5. Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y
// el método setTimeout() crea un reloj que se actualice cada segundo.

var fecha = new Date();
var segundos = fecha.getSeconds();
var minutos = fecha.getMinutes();
var horas = fecha.getHours();
actualizarReloj();
function actualizarReloj(){
	
	updateSeconds();
	setTimeout(actualizarReloj, 1000);
}

function updateSeconds(){
	if(segundos<60){
		segundos++;
	}else{
		segundos=0;
		updateMinutes();
	}
	document.getElementById("reloj").innerHTML = (horas+':'+minutos+':'+segundos+'</br>');
	//document.body.innerHTML=horas+':'+minutos+':'+segundos+'</br>'
	//document.write(horas+':'+minutos+':'+segundos+'</br>');
}
function updateMinutes(){
	if(minutos<60){
		minutos++;
	}else{
		minutos=0;
		updateHours();
	}
}
function updatehours(){
	if(horas<24){
		horas++;
	}else{
		horas=0;
		minutos=0;
		segundos=0;
	}
}

