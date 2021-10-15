//FUNCIONES EN SECCION CARRO

function mostrarCarro(){
    let itemsCarro = localStorage.getItem('Producto en carrito');
    itemsCarro= JSON.parse(itemsCarro);
    let contenedorProductos = document.querySelector('.products');
    if(itemsCarro && contenedorProductos){
        contenedorProductos.innerHTML = '';
        Object.values(itemsCarro).map(item => {
            contenedorProductos.innerHTML += `
            <div class='product'>
            <ion-icon name="close-circle-outline"></ion-icon> 
            <img src="../assets/images/${item.nombre}.jpg">
            <span>${item.tag}<span>
            </div>
            <div class ="precio">${item.precio}</div>`
        });
    }  
}

mostrarCarro();