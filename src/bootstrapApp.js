import '@/shared/sass/main.scss'
import FineMq from 'fine-mq'

import App from '@/app/App'
import router from '@/router'
import i18n from '@/i18n'
import userService from '@/shared/auth/authStore'
import getCustomProperty from '@/shared/helpers/custom-properties.helper'
import store, {
  SET_APP_INITIALIZE,
  SET_APP_USER
} from '@/shared/stores'
import Vue from 'vue'

import {
  mapMutations
} from 'vuex'

Vue.config.productionTip = process.env.NODE_ENV === 'development'

const getBreakpoint = cssCustomPropertyName =>
  getCustomProperty(cssCustomPropertyName) * getCustomProperty('--browser-context')

const small = getBreakpoint('--breakpoint-small')
const medium = getBreakpoint('--breakpoint-medium')
const large = getBreakpoint('--breakpoint-large')

const aliases = {
  small,
  'medium-': {
    maxWidth: medium
  },
  medium: [small + 1, medium],
  'large-': {
    maxWidth: large
  },
  large: [medium + 1, large],
  xlarge: [large + 1]
}

Vue.use(FineMq, {
  aliases
})


export default function createVueApp () {
  return new Vue({
    el: '#app',
    router,
    store,
    i18n,
    //mixins: [commitMixin],
    created () {
      this.setUser(userService.user)
      this.setAppInitialize(true)
    },
    methods: {
      ...mapMutations({
        setAppInitialize: SET_APP_INITIALIZE,
        setUser: SET_APP_USER
      }),
    },
    render: h => h(App)
  })
}
