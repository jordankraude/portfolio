import { writable } from "svelte/store";
import { getCartCount, getCartTotal } from "./utils.mjs";

export const cartCount = writable(getCartCount());
export let cartTotal = writable(getCartTotal(cartCount));
