//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function sumaElementosArray(array){
	var sumaArray=0;
	for(var i=0; i<array.length; i++){
		sumaArray=sumaArray+array[i];
		
	}
	document.write("La suma de los elementos del array es: "+sumaArray);
}
var vector=[5,5,5,5,5];
sumaElementosArray(vector);

document.write("</br>");

//Write a function called addOnlyNums that can take in any number of arguments
// (including numbers or strings), and returns the sum of only the numbers.

function addOnlyNums(array){
	var sumaArray=0;
	for(var i=0; i<array.length; i++){
		if(typeof array[i] != "string"){
			sumaArray=sumaArray+array[i];
		}
		
	}
	document.write("La suma de los elementos del array es: "+sumaArray);
}
var vector2=[4, 4, 4, 4, 'atun'];
addOnlyNums(vector2);
document.write("</br>");
//Write a function called combineTwoArrays that takes in two arrays as arguments, 
//and returns a single array that combines both (using the spread operator).

function combineTwoArrays(array1, array2){
	var arrayAux;
	arrayAux=[...array1, ...array2];
	document.write("El nuevo array, que combina los dos array es:"+arrayAux);
}

var array1 = [1, 1, 1];
var array2 = [2, 2, 2];
combineTwoArrays(array1, array2);

//Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

