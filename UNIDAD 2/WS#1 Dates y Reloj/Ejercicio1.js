
document.write("<h1>Ejercicio 1</h1>");

	var fecha = new Date();
		document.write("Año: "+fecha.getFullYear()+"</br>");
		document.write("Mes: "+(fecha.getMonth()+1)+"</br>");
		document.write("Dia del mes: "+fecha.getUTCDate()+"</br>");
		document.write("Hora: "+fecha.getHours()+"</br>");
		document.write("Minutos: "+fecha.getMinutes()+"</br>");
		document.write("Segundos: "+fecha.getSeconds()+"</br>");

document.write("</br></br>");

document.write("<h1>Ejercicio 2</h1>");

document.write("<h2>Apartado a)</h2>");
	var fechaHoy= new Date();
	function mostrarFecha(fechaHoy){
		fechaHoy.getDate();
		return fechaHoy;
	}
	document.write(mostrarFecha(fechaHoy)); // No entiendo por que no da lo mismo si pones directamente fechaHoy.getDate() que da solo el dia .

document.write("<h2>Apartado b)</h2>");
	function sumarDias(fecha, dias){
  	fecha.setDate(fecha.getDate() + dias);
  	return fecha;
	}
	var fecha85 = new Date();
	document.write(sumarDias(fecha85, 85));

document.write("<h2>Apartado c)</h2>");
	var fecha187 = new Date();
	document.write(sumarDias(fecha187, -187));

document.write("<h2>Apartado d)</h2>");
	function sumarAños(fecha, año){
		fecha.setFullYear(fecha.getFullYear() + año);
		return fecha;
	}
	document.write(sumarAños(fecha85, 2));

document.write("<h2>Apartado e)</h2>");
	function sumarHoras(fecha, hora){
		fecha.setHours(fecha.getHours() + hora);
		return fecha;
	}
	document.write(sumarHoras(fecha187, -24));

document.write("<h2>Apartado f)</h2>");
	function restarFechas(fecha){
		fecha.setDate(fecha85.getDate()-fecha187.getDate());
		return fecha;
	}
	var fechaNueva	= new Date();
	document.write(restarFechas(fechaNueva));

document.write("</br></br>");

document.write("<h1>Ejercicio 3</h1>");

	var time=60;
	decrement();
	function decrement(){
		if(!(time<0)){
			console.log(time+'</br>');
			time--;
			setTimeout('decrement()', 1000);
		}
		
	}





