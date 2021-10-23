
//FORMULARIO
let formularioContacto = $('#formulario');

formularioContacto.on("submit",validacionForm);

function validacionForm(e){
	e.preventDefault();	
	console.log("formularioenviado") }

sessionStorage.setItem('email' , 'info@email.com')


// AJAX API DESAFIO 


const URLGET = 'http://hp-api.herokuapp.com/api/characters/students';

$('.containerDos').append('<button class ="btnApi"> Mas Fotos </button>');
$('.btnApi').click( () => {
	$.get(URLGET,function(respuesta,estado){
		$('footer').prepend(`<img src="http://hp-api.herokuapp.com/images/harry.jpg"></img>`);
	});
});
