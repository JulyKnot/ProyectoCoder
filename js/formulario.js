
//FORMULARIO
let formularioContacto = $('#formulario');

formularioContacto.on("submit",validacionForm);

function validacionForm(e){
	e.preventDefault();	
	console.log("formularioenviado") }

sessionStorage.setItem('email' , 'info@email.com')
