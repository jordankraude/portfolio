import '../css/index.css'
import Header from "../components/MainHeader.svelte"
import Footer from "../components/MainFooter.svelte"
import SchoolProject from "../components/SchoolProjects.svelte"

const header = new Header({
  target: document.getElementById('header'),
})
const schoolproject = new SchoolProject({
  target:document.getElementById('schoolProjectDisplay')
})
const footer = new Footer({
  target:document.getElementById('footer')
})


export default header
