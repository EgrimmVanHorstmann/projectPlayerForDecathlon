export default {
  auth: {
    serviceProviderBaseUrl: process.env.VUE_APP_ACCOUNTS_SPOTIFY_URl,
    clientId: process.env.VUE_APP_CLIENT_ID,
    clientSecret: process.env.VUE_APP_CLIENT_SECRET
  },
  apis: {
    users: {
      url: `${process.env.VUE_APP_API_SPOTIFY_URl}/me`
    },
    artists: {
      url: `${process.env.VUE_APP_API_SPOTIFY_URl}/artists`
    },
    albums: {
      url: `${process.env.VUE_APP_API_SPOTIFY_URl}/albums`
    }
  }
}
