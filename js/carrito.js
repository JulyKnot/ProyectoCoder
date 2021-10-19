
//PRODUCTOS /OBJETOS 

let product = [
    {
        nombre:'revelado1',
        tag:'Revelado y Digitalizado c-41',
        precio: 450,
        enCarrito: 0
    },
    {
        nombre:'revelado2',
        tag:'rev&digbyn',
        precio: 500,
        enCarrito: 0
    },
    {
        nombre:'revelado3',
        tag:'rev&digecn2',
        precio: 500,
        enCarrito: 0
    },
    {
        nombre:'revelado4',
        tag:'rev&digfs',
        precio: 500,
        enCarrito: 0
    },
    {
        nombre:'rollo1',
        tag:'rollomagia',
        precio: 1500,
        enCarrito: 0
    },
    {
        nombre:'rollo2',
        tag:'rollocetro',
        precio: 1500,
        enCarrito: 0
    },
    {
        nombre:'llavero',
        tag:'llaveros',
        precio: 500,
        enCarrito: 0
    },
    {
        nombre:'remera',
        tag:'remeras',
        precio: 1500,
        enCarrito: 0
    }

]

   
//EVENTO

let carritos = document.querySelectorAll('.buy-button');

for (let i=0 ; i < carritos.length; i++){
        carritos[i].addEventListener('click', () => {
        carrito(product[i]);
        costoTotal(product[i]);
    }) 
}

$(".product-list").prepend(`<div id="div1" style=display:none class="carrito">
<h4>Añadido a la sección Carrito!</h4>
</div>`)
$(".product-list").click(() => {
    $('#div1').slideDown(1500).delay(3000).fadeOut(1000);
})

//FUNCIONES PARA EL CARRITO / LOCAL STORAGE

function carrito(product) {
    let numProdu = localStorage.getItem('cantidadCarrito');
    numProdu = parseInt(numProdu);   
    if (numProdu){
        localStorage.setItem('cantidadCarrito' , numProdu + 1);
        document.querySelector('.cart').textContent = numProdu +1;
    } else{
        localStorage.setItem('cantidadCarrito' , 1);
        document.querySelector('.cart').textContent = 1;
    }

    setItem(product);
}
function setItem(product){
     let itemsCarro = localStorage.getItem('Producto en carrito');
        itemsCarro = JSON.parse(itemsCarro);
        if(itemsCarro != null) {
            if(itemsCarro[product.nombre] == undefined) {
                itemsCarro = {
                    ...itemsCarro,
                    [product.nombre]: product
                }
            }
            itemsCarro[product.nombre].enCarrito += 1;
        }else {
                product.enCarrito = 1
                itemsCarro = {
                [product.nombre]: product
            }
        }     
     localStorage.setItem('Producto en carrito', JSON.stringify(itemsCarro));
}
 
function costoTotal(product) {
    //console.log('el precio del producto es ' , product.precio);
   
    let costoCarrito = localStorage.getItem('Costo total ');
    console.log('el costo es ' , costoCarrito);
    if(costoCarrito != null) {
        costoCarrito= parseInt(costoCarrito);
        localStorage.setItem('Costo total ' , costoCarrito + product.precio);    
    }else{
        localStorage.setItem('Costo total ', product.precio);
    }

}

