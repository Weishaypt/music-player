import './plugins/index.js'
import routes from './routes.js'
import './components/index.js'
import './store.js'

const app = window.vueApp = new Vue({
  el: '#app',
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },
  render(h) {
    return h(routes[this.currentRoute])
  }
})

Vue.prototype.redirectRoute = (to) => {
  history.pushState({}, 'Test', to)
  app._data.currentRoute = to
}
