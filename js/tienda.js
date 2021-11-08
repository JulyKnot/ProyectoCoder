const addToShoppingCartButtons = document.querySelectorAll(".buy-button");


addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', AddToCartClicked);
    });


    const comprarButton = document.querySelector('.comprarButton'
    );
    comprarButton.addEventListener('click' , comprarButtonClicked);


const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

    function AddToCartClicked(event) {
        const button = event.target;
        const item = button.closest('.card');
        const itemTitle = item.querySelector('.title').textContent;
        const itemPrice = item.querySelector('.text').textContent;
        const itemImage = item.querySelector('.image img').src;
        

        addItemToShoppingCart(itemTitle,itemPrice,itemImage);

    }

function addItemToShoppingCart(itemTitle,itemPrice,itemImage){
   
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        'shoppingCartItemTitle'
      );
      for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
          let elementQuantity = elementsTitle[
            i
          ].parentElement.parentElement.parentElement.querySelector(
            '.shoppingCartItemQuantity'
          );
          elementQuantity.value++;
          updateShoppingCartTotal();
          return;
        }
      }
    const shoppingCartRow =  document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`

shoppingCartRow.innerHTML = shoppingCartContent
shoppingCartItemsContainer.append(shoppingCartRow)

shoppingCartRow.querySelector('.buttonDelete').addEventListener('click' , removeShoppingCartItem);

shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change' , quantityChanger);

updateShoppingCartTotal();
}

function updateShoppingCartTotal(){
    let total = 0 ;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$','')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
    );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;  
    });
    shoppingCartTotal.innerHTML = `$${total},00`;
}

function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();

}

function quantityChanger(event){
   const input = event.target;
   if (input.value <= 0){
       input.value = 1;
   }
   updateShoppingCartTotal();
}

function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = "";
    updateShoppingCartTotal();
}