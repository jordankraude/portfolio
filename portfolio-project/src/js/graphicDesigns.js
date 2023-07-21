import '../css/index.css'
import Header from "../components/MainHeader.svelte"
import GraphicDesigns from "../components/GraphicDesigns.svelte"
import Footer from "../components/MainFooter.svelte"
import { getParam } from "../js/utils.mjs";


const param = getParam("category");

const header = new Header({
  target: document.getElementById('header'),
})

const graphicdesigns = new GraphicDesigns({
  target: document.getElementById('graphicDesignDisplay'),
  props: {category: param}
})

const footer = new Footer({
  target:document.getElementById('footer')
})


export default header
