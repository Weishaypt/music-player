import mainLayout from '../layouts/main-layout.js'
import MusicNavbar from './MusicNavbar.js'
[
  mainLayout,
  MusicNavbar
]
.forEach(component => {
  Vue.component(component.name, component)
})
