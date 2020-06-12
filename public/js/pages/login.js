import { state } from '../store.js'
import { actions } from '../store.js'

export default {
  template: `<main-layout>
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">Login</div>

				<div class="card-body">
					<form method="POST" @submit="submit">
						<div class="form-group row">
							<label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

							<div class="col-md-6">
								<input v-model="email" id="email" type="email" class="form-control" name="email" value="" required autocomplete="email" autofocus>
							</div>
						</div>

						<div class="form-group row">
							<label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

							<div class="col-md-6">
								<input v-model="password" id="password" type="password" class="form-control " name="password" required autocomplete="current-password">
							</div>
						</div>
						<div class="form-group row mb-0">
							<div class="col-md-8 offset-md-4">
								<button type="submit" class="btn btn-primary">
									Login
								</button>
								
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</main-layout>`,
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit (e) {
      e.preventDefault()
      e.stopPropagation()
      const body = {
        email: this.email,
        password: this.password
      }

      const data = await axios.post('/api/signin', body)
      if(data.status === 200) {
        state.auth = true
        state.token = data.data.token
        document.cookie = "token=" + state.token
        await actions.getUser()
        this.redirectRoute('/user')
      }

    }
  }
}
