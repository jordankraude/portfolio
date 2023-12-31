import '../css/index.css'
import Header from "../components/MainHeader.svelte"
import Footer from "../components/MainFooter.svelte"
import GamePage from "../components/GamePage.svelte"
import GameSideBar from "../components/GameSideBar.svelte"
import { getParam } from "../js/utils.mjs";


const param = getParam("category");


const header = new Header({
  target: document.getElementById('header')
})
const gamesidebar = new GameSideBar({
  target:document.getElementById('gameSideBar')
})
const gamedisplay = new GamePage({
  target: document.getElementById('gamedisplay'),
  props: {category: param}
})
const footer = new Footer({
  target:document.getElementById('footer')
})




export default header


