/*function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}
*/

function validarNombre(){
    let nombre = document.getElementById("nombre").value;
    let valido = document.getElementById('nombreOk');
    let novalido = document.getElementById('nombreError');
    let nombreRegex = /^[A-Za-zƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèé êëìíîïðñòóôõöøùúûüýþÿ]*$/;
    
    if (nombreRegex.test(nombre) && nombre != "") {
        valido.style.display = "inline";
        novalido.style.display = "none";
    } else {
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
    
}



function validarApellidos(){
    let apellidos = document.getElementById("apellidos").value;
    let valido = document.getElementById('apellidosOk');
    let novalido = document.getElementById('apellidosError');
    let apellidosRegex = /^[A-Za-zƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèé êëìíîïðñòóôõöøùúûüýþÿ]*$/;
    
    if (apellidosRegex.test(apellidos) && apellidos != "") {
        valido.style.display = "inline";
        novalido.style.display = "none";
    } else {
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
    
}



function validarTel(){
    let numero = document.getElementById("tel").value;
    let valido = document.getElementById('telOk');
    let novalido = document.getElementById('telError');
    
    //codigo validación
    let numeroRegex = /^([9,7,6]{1})+([0-9]{8})$/;
    
    //comprobamos el numero cuando pierde el foco
    if (numeroRegex.test(numero)) {
        valido.style.display = "inline";
        novalido.style.display = "none";
    } else {
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
}
 


function validarEmail() {
    let email= document.getElementById("email").value;
    let valido = document.getElementById('emailOk');
    let novalido = document.getElementById('emailError');
        
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(email)) {
        valido.style.display = "inline";
        novalido.style.display = "none";
    } else {
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
}



// PARA EL DNI //
function validarDNI(){   
    let dni= document.getElementById("dni").value;
    let valido = document.getElementById('dniOk');
    let novalido = document.getElementById('dniError');
    
	let lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	let valueDni=dni.substr(0,dni.length-1);
	let letra=dni.substr(dni.length-1,1).toUpperCase();
 
	if(lockup.charAt(valueDni % 23)==letra){
		valido.style.display = "inline";
        novalido.style.display = "none";
    } else {
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
}


function validarUsuario(){
    let usuario = document.getElementById("usuario").value;
    let valido = document.getElementById('usuarioOk');
    let novalido = document.getElementById('usuarioError');
    let usuarioRegex = /^[A-Za-z]?[A-Za-z0-9]/;
    
    if (usuarioRegex.test(usuario) && usuario != "") {
        valido.style.display = "inline";
        novalido.style.display = "none";
    } else {
        novalido.style.display = "inline";
        valido.style.display = "none";
    }
    
}