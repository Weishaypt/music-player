export default {
  props: {
    to: {
      type: String
    }
  },
  name: 'v-link',
  template: `<a class="nav-link" :href="to" @click="redirect"><slot></slot></a>`,
  methods: {
    redirect (e) {
      e.preventDefault()
      this.redirectRoute(this.to)
    }
  }
}
