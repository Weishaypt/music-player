import { state, actions } from '../store.js'

export default {
  name: 'music-navbar',
  template: `
          <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
							  <v-link to="/">Music Player</v-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <template v-if="!state.auth">
													<li class="nav-item">
                            <v-link to="/login">Login</v-link>
													</li>
													<li class="nav-item">
														<a class="nav-link" href="register">Register</a>
													</li>
                        </template>
                        <template v-else>
													<li class="nav-item dropdown" v-if="state.user">
														<a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<span class="caret"> {{ state.user.name }}  </span>
														</a>
														<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
															<a class="dropdown-item" href="logout" @click="logout">
                                Logout
															</a>
														</div>
													</li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
  `,
  data () {
    return {
      state: state
    }
  },
  methods: {
    async logout (e) {
      e.preventDefault()
      await axios.post('/api/logout')
      this.redirectRoute('/login')
      state.token = null
      state.auth = false
      state.user = null
    }
  }
}
