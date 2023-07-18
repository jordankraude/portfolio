import '../css/index.css'
import Header from "../components/MainHeader.svelte"
import Footer from "../components/MainFooter.svelte"

const header = new Header({
  target: document.getElementById('header'),
})
const footer = new Footer({
  target:document.getElementById('footer')
})


export default header
