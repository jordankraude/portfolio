import '../css/index.css'
import Header from "../components/MainHeader.svelte"
import Store from "../components/Store.svelte"
import Footer from "../components/MainFooter.svelte"
import { getParam } from "../js/utils.mjs";


const param = getParam("category");

const header = new Header({
  target: document.getElementById('header'),
})
const store = new Store({
  target: document.getElementById('header'),
  props: {category: param}
})
const footer = new Footer({
  target:document.getElementById('footer')
})


export default header
