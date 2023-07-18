<script>
    import { getLocalStorage } from "../js/utils.mjs";
    import { setLocalStorage } from "../js/utils.mjs";
    import { cartTotal } from "../js/stores.mjs";
    let cartItems = getLocalStorage("so-cart");
  
  
  
  
  
    // cartItems.forEach((element) => {
    //   cartTotal += element.FinalPrice;
    // });
  
  
    function removeProductFromCart(event) {
      let itemID = event.target.parentNode.getAttribute("specificItemId");
      console.log(itemID);
  
      cartItems.find((item) => {
        if ((item.Id == itemID)) {
          let itemToBeRemoved = cartItems.indexOf(item);
      
          if (itemToBeRemoved > -1) {
            // only splice array when item is found
            cartItems.splice(itemToBeRemoved, 1); // 2nd parameter means remove one item only
            cartItems = [...cartItems];
            setLocalStorage("cart", cartItems);
            return;
          }
  
          return
        }
        return
      });
      // cartTotal = cartTotal;
    }
  
    function removeItem(event) {
      let itemID = event.target.parentNode.getAttribute("specificItemId");
      console.log(itemID);
      cartItems.every((item) => {
        if ((item.Id = itemID)) {
          let itemToBeRemoved = cartItems.indexOf(item, 0);
          console.log(itemToBeRemoved);
          const filteredItems = cartItems.filter(item => item !== itemToBeRemoved)
  
          cartItems = [...filteredItems]
          setLocalStorage("cart", cartItems)
          return
        }
        return
      })
  
  
  }
  
  export function clickHandler(event) {
      removeProductFromCart(event);
      console.log("running");
    }
  
  
  </script>
  
  <ul>
    {#if cartItems}
      {#each cartItems as item}
        <li class="cart-card divider" id={item.Id}>
          <p class="cart-card__color">{item.Colors[0].ColorName}</p>
          <p class="cart-card__quantity">qty: 1</p>
          <p class="cart-card__price">${item.FinalPrice}</p>
          <button class="closeItem" type="button" on:click={clickHandler}
            >&#x274C;</button
          >
        </li>
      {/each}
    {/if}
  </ul>
  <h2>
    Cart total cost: ${cartTotal}
    <!-- .toFixed(2) -->
  </h2>
  <div class="cart-card divider" />
  <a class="button" href="/checkout/index.html">Check Out</a>
  