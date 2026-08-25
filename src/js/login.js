import { login } from "./auth.mjs";
import { getParam } from "./utils.mjs";
import MainHeader from "../components/MainHeader.svelte";
import MainFooter from "../components/MainFooter.svelte";


new MainHeader({
target: document.querySelector("#main-header"),
});

new MainFooter({ target: document.querySelector("#main-footer") });

const redirect = getParam("redirect");

document.querySelector("#loginButton").addEventListener("click", (e) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  login({ email, password }, redirect);
});