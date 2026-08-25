import MainHeader from "../components/MainHeader.svelte";
import MainFooter from "../components/MainFooter.svelte";
import Cart from "../components/cart.svelte";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

new Cart({ target: document.querySelector("#shopping-cart") });
new MainHeader({
  target: document.querySelector("#main-header"),

});
new MainFooter({ target: document.querySelector("#main-footer") });


// document.querySelector('.closeItem').addEventListener('click', removeProductFromCart())
const cartItems = getLocalStorage("cart");