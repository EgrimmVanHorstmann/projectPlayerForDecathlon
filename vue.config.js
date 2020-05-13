const path = require('path')

module.exports = {
  outputDir: process.env.VUE_APP_BUILD_ENV === 'production' ? 'dist/prod' : 'dist/dev',
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'shared/locales',
      enableInSFC: true
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/shared/sass/main.scss')]
    }
  },

  lintOnSave: false
}
