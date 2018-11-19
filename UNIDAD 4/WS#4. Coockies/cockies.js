/*Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna 
cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. 
Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y 
mostrar el mensaje anterior directamente. Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos 
llamar 'Cerrar Sesión').*/
/*Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.*/
window.onload = function(){
    var cookieUsername = checkCookie("username");
    if(cookieUsername != ""){
        alert("Hi, "+cookieUsername);
    }else{
        let username = prompt("Please, enter a name");
        if(username != null && username != ""){
            setCookie("username", username, 5);
        }
    }
    var cookieColorFondo = checkCookie("colorFondo");
    if(cookieColorFondo != ""){
        cambiarColorFondo(cookieColorFondo);
    }

    var cookieFuente = checkCookie("fuente");
    if(cookieFuente != ""){
        cambiarFuente(cookieFuente);
    }

    var botonFondoRojo = document.getElementById("botonRojo");
    var botonFondoAzul = document.getElementById("botonAzul");
    var botonPequeno = document.getElementById("botonPequeño");
    var botonGrande = document.getElementById("botonGrande");
    var parrafo = document.getElementById("parrafo");

    botonFondoRojo = addEventListener("click", botonFondo);
    botonFondoAzul = addEventListener("click", botonFondo);

    botonPequeño = addEventListener("click", botonFuente);
    botonGrande = addEventListener("click", botonFuente);

}

function checkCookie(cname){
    let username = getCookie(cname);
    if(username != ""){
        return username;
    }else{
        return "";
    }
}

function setCookie(cname, cvalue, extime){
    var d = new Date();
    d.setTime(d.getTime() + (extime*1000*60));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue +";" + expires + ";path=/";
}

function getCookie(cname){
    var name = cname+"=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return ""; 
}

function botonFondo(event){
    if(event.target.id == "botonRojo"){
        cambiarColorFondo("red");
        setCookie("colorFondo", "red", 5);
    }
    if(event.target.id == "botonAzul"){
        cambiarColorFondo("blue");
        setCookie("colorFondo", "blue", 5);
    }
}

function botonFuente(event){
    if(event.target.id == "botonGrande"){
        cambiarFuente("x-large");
        setCookie("fuente", "x-large", 5);
    }
    if(event.target.id == "botonPequeño"){
        cambiarFuente("small");
        setCookie("fuente", "small", 5);
    } 
}

function cambiarColorFondo(color){
    document.body.style.background=color;
}

function cambiarFuente(tamaño){
    parrafo.style.fontSize=tamaño;
}