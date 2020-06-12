export const state = {
  user: null,
  auth:  false,
  token: ''
}


export const actions = {
  async getUser () {
    try {
      const data = await axios.get('/api/user')
      if(data.status === 200)
      {
        state.user = data.data
        state.auth = true
      }
    }
    catch (e) {
      console.log('unauth')
      state.auth = false
      state.token = ""
      document.cookie = "token="
    }
  },
  async init () {
    state.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    if(state.token !== "")
    {
      axios.default.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
      actions.getUser()
    }
  }
}

actions.init()
