class AuthStore {
  constructor () {
    this.$token = ''
    this.$user = undefined
  }

  get token () {
    return this.$token || ''
  }

  set token (token) {
    this.$token = token || ''
  }

  get user () {
    return this.$user || null
  }

  set user (user) {
    if (user && (!('display_name' in user)) ) {
      user.displayName = (user.displayName || '')
    }
    this.$user = user || null
  }
}

export default new AuthStore()
