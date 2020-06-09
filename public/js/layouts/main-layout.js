export default {
  name: 'main-layout',
  template:
    `
<div>
	<music-navbar/>
	<div class="container py-4">
  	<slot></slot>    
	</div>
</div>
    `
}
