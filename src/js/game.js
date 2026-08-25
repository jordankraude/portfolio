import '../css/index.css'
import Header from "../components/MainHeader.svelte"
import Footer from "../components/MainFooter.svelte"
import Game from "../components/Game.svelte"
import { getParam } from "../js/utils.mjs";


const param = getParam("specificGame");


const header = new Header({
  target: document.getElementById('header')
})
const game = new Game({
  target: document.getElementById('game'),
  props: {specificGame: param}
})
const footer = new Footer({
    target:document.getElementById('footer')
})


