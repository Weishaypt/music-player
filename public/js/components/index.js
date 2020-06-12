import mainLayout from '../layouts/main-layout.js'
import MusicNavbar from './MusicNavbar.js'
import vlink from './vlink.js'
[
  mainLayout,
  MusicNavbar,
  vlink
]
.forEach(component => {
  Vue.component(component.name, component)
})
