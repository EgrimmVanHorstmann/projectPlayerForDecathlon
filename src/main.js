import authService from '@/shared/auth/authService'

authService.authenticate().then(isAuthenticated => {
  if (isAuthenticated) {
    import(/* webpackChunkName: "main" */ './bootstrapApp').then(createApp => {
      createApp.default()
    })
  }
})