
//FORMULARIO

let formularioContacto = document.getElementById("formulario");
formularioContacto.addEventListener("submit",validacionForm);

function validacionForm(e){
	e.preventDefault();	
	console.log("formularioenviado") }

