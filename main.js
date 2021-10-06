const productos = [
{ id: 1 , rollo :'Cetro', precio: 1200 , exposiciones: 36 , ISO:200 } ,
{ id: 2 , rollo :'Magia', precio: 1200 , exposiciones: 36 , ISO:200 } ,
{ id: 3 , servicio :'Revelado y digitalizado', precio: 450 , tipo: 'C-41' } ,
{ id: 4 , servicio :'Revelado y digitalizado', precio: 500 , tipo: 'Blanco y negro' } ,
{ id: 5 , servicio :'Revelado y digitalizado', precio: 500 , tipo: 'FilmSoup'} ,
{ id: 6 , servicio :'Revelado y digitalizado', precio: 500 , tipo: 'ECN-2'} ,
{ id: 7 , produ :'Llavero', precio: 150 } ,
{ id: 8 , produ :'Remera', precio: 2000} ] ;


/*alert("Hoy 10% de descuento revelando 2 rollos blanco y negro")
let saludo = "Hola! Bienvenido a la tienda , gracias por confiar en nosotros. "
let producto1 = Number(prompt("Ingrese el precio del primer servicio"))
let producto2 = Number(prompt("Ingrese el precio del segundo servicio"))
let mensaje = 'Con el 10% de hoy te estas ahorrando : '
const suma = (a,b) => a+b;
const desc =  (x) => x * 0.10;

let total = desc(suma(producto1,producto2));
alert(saludo + mensaje + '$'+total )*/

/*let cartas = document.getElementsByClassName("card")

console.log(cartas[2].innerHTML);*/

let boton = document.getElementById("boton");
let texto = document.createElement("h4");
let contador= 1;

boton.onclick = () => {
	texto.innerHTML += `<h4 class='carrito'>Añadidos al carrito : ${contador} </h4>`;
document.body.appendChild(texto);
contador++;
}