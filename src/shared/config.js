export default {
  auth: {
    serviceProviderBaseUrl: process.env.VUE_APP_ACCOUNTS_SPOTIFY_URl,
    clientId: process.env.VUE_APP_CLIENT_ID,
    clientSecret: process.env.VUE_APP_CLIENT_SECRET
  },
  apis: {
    baseAPI : process.env.VUE_APP_API_SPOTIFY_URl
  }
}
