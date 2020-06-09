import { state } from '../store.js'

axios.interceptors.request.use(request => {
  let token = state.token
  if(token !== "")
  {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }
  return request
})
