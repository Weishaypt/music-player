let auth = false
let user = null

export const state = {
  user: null,
  auth:  false,
  token: ''
}


export const actions = {
  async getUser () {
    const data = await axios.get('/api/user')
    if(data.status === 200)
    {
      state.user = data.data
      state.auth = true
    }
    else {
      state.auth = false
      state.token = ""
      document.cookie = "token="
    }
  }
}
state.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
if(state.token !== "")
{
  actions.getUser()
}
