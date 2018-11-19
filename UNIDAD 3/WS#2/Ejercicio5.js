// Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
// al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
// juntos los elementos pares y los impares. Después, volver a mostrar el array:

function paresImpares(){
	var arr = new Array();
	for(let i=0; i<100; i++){
		arr[i]= Math.round(Math.random()*1000 + 1);
		document.write(arr[i]+'</br>');
	}
}
paresImpares();