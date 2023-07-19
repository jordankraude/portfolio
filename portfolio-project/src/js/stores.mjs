import { writable } from "svelte/store";
import { getCartCount, getCartTotal } from "./utils.mjs";

export const favoriteGames = writable([]);
export const cartCount = writable(getCartCount());
