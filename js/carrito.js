
//PRODUCTOS

const productos = [
    { id: 1 , rollo :'Cetro', precio: 1200 , exposiciones: 36 , ISO:200 } ,
    { id: 2 , rollo :'Magia', precio: 1200 , exposiciones: 36 , ISO:200 } ,
    { id: 3 , servicio :'Revelado y digitalizado', precio: 450 , tipo: 'C-41' } ,
    { id: 4 , servicio :'Revelado y digitalizado', precio: 500 , tipo: 'Blanco y negro' } ,
    { id: 5 , servicio :'Revelado y digitalizado', precio: 500 , tipo: 'FilmSoup'} ,
    { id: 6 , servicio :'Revelado y digitalizado', precio: 500 , tipo: 'ECN-2'} ,
    { id: 7 , produ :'Llavero', precio: 150 } ,
    { id: 8 , produ :'Remera', precio: 2000} ] ;
    
//EVENTO

let contador= 1;

const agregarCarrito = () => {
    let textoCarrito = document.createElement('h4');
    textoCarrito.innerHTML = `<h4 class='carrito'>Añadidos al carrito : ${contador} </h4>`;
    document.getElementById('productos').appendChild(textoCarrito);
    contador++;
}

document.getElementById('boton').addEventListener('click',agregarCarrito);
document.getElementById('boton1').addEventListener('click',agregarCarrito);
document.getElementById('boton2').addEventListener('click',agregarCarrito);


//STORAGE

const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor) };

for (const producto of productos ){
guardarLocal(producto.id, JSON.stringify(producto)); }
