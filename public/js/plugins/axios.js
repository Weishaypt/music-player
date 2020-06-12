import { state } from '../store.js'

console.log('axios loaded')

axios.interceptors.request.use(request => {
  let token = state.token
  if(token !== '')
  {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }
  return request
})

axios.interceptors.response.use(response => {
  if(response.status === 401) {
    vueApp.methods.redirectRoute('/login')
  }

  return response
})

export default axios
