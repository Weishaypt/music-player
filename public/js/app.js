import routes from './routes.js'
import './components/index.js'
import './store.js'
import './plugins/index.js'

new Vue({
  el: '#app',
  computed: {
    currentRoute()
    {
      return window.location.pathname
    }
  },
  render(h) {
    return h(routes[this.currentRoute])
  }
})
