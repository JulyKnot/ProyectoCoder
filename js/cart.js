//FUNCIONES EN SECCION CARRO

function mostrarCarro(){
    let itemsCarro = localStorage.getItem('Producto en carrito');
    itemsCarro= JSON.parse(itemsCarro);
    let contenedorProductos = document.querySelector('.products');
    let costoCarrito = localStorage.getItem('Costo total ');
    if(itemsCarro && contenedorProductos){
        contenedorProductos.innerHTML = '';
        Object.values(itemsCarro).map(item => {
            contenedorProductos.innerHTML += `
            <div class='product'>
            <ion-icon name="close-circle-outline"></ion-icon> 
            <img src="../assets/images/${item.nombre}.jpg">
            <span>${item.tag}   <span>
            </div>
            <div class ="precio"
            >$${item.precio}  
            </div>
            <div class ="cantidad">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            <span>${item.enCarrito}  <span>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
            $${item.enCarrito * item.precio},00
            </div>
            `;
        });

        contenedorProductos.innerHTML += `
        <div class="contenedorTotal">
        <h4 class="conTitulo">
            Total
        </h4>
        <h4 class="cartTotal">
        $${costoCarrito},00
        </h4>
        `;
    }  
}

mostrarCarro();