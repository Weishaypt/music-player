import { state } from '../store.js'

export default {
  template: `<main-layout>
	<div class="row">
		<div class="col-md-4">
			<div class="card">
				<div class="card-header">{{ state.user.name }}</div>
				<div class="card-img">
					<img class="w-100" src="https://via.placeholder.com/500x500" alt="аватар"/>
				</div>
			</div>
		</div>
	</div>
</main-layout>`,
  data () {
    return {
      state: state
    }
  }
}
