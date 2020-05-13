const uniq = array => {
  return array.filter((el, index, arr) => index === arr.indexOf(el))
}

const mutationTypes = {
  START_LOADER: 'START_LOADER',
  STOP_LOADER: 'STOP_LOADER',
  TOGGLE_LOADER: 'TOGGLE_LOADER'
}

const createStore = function createStore (moduleName) {
  return function registerStore (store) {
    store.registerModule(moduleName, {
      namespaced: true,
      state: {
        loaders: []
      },
      getters: {
        isLoading: state => loaderId => state.loaders.indexOf(loaderId) > -1,
        anyLoading: state => state.loaders.length > 0
      },
      actions: {
        startLoading: ({ commit }, loaderId) => commit(mutationTypes.START_LOADER, loaderId),
        stopLoading: ({ commit }, loaderId) => commit(mutationTypes.STOP_LOADER, loaderId)
      },
      mutations: {
        [mutationTypes.START_LOADER] (state, loaderId) {
          state.loaders.push(loaderId)
          state.loaders = uniq(state.loaders)
        },
        [mutationTypes.STOP_LOADER] (state, loaderId) {
          state.loaders = uniq(state.loaders).filter(id => id !== loaderId)
        }
      }
    })
  }
}

export function createVuexActionHelpers ({ moduleName = 'loaders' } = {}) {
  const start = function start (dispatcher, loaderId) {
    dispatcher(`${moduleName}/startLoading`, loaderId, { root: true })
  }
  const stop = function stop (dispatcher, loaderId) {
    dispatcher(`${moduleName}/stopLoading`, loaderId, { root: true })
  }
  return {
    // start and stop helpers for async processes
    startLoading (dispatcher, loaderId, callback) {
      start(dispatcher, loaderId)
      if (!callback) return
      return new Promise((resolve, reject) => { // eslint-disable-line
        callback()
          .then(response => {
            resolve(response)
            stop(dispatcher, loaderId)
          })
          .catch(response => {
            reject(response)
            stop(dispatcher, loaderId)
          })
      })
    },
    stopLoading (dispatcher, loaderId) {
      stop(dispatcher, loaderId)
    }
  }
}

function createComponent ({ componentName, moduleName, className }) {
  return {
    name: componentName,
    render (h) {
      let children = null
      if (this.status) {
        children = this.$slots.spinner
      } else if (this.noData) {
        children = this.$slots.noData
      } else {
        children = this.$slots.default
      }
      if (!children || !children.length) return h()
      return children.length === 1 ? children[0] : h('div', { class: [className] }, children)
    },
    props: ['when', 'noData'],
    computed: {
      isLoading () {
        const store = this.$store
        if (!store) {
          throw new Error('Vuex not initialized.')
        }
        return store.getters[`${moduleName}/isLoading`] // returns a fn
      },
      anyLoading () {
        const store = this.$store
        if (!store) {
          throw new Error('Vuex not initialized.')
        }
        return store.getters[`${moduleName}/anyLoading`]
      },
      status () {
        if (typeof this.when === 'boolean') return this.when
        if (this.when) {
          return this.isLoading(this.when)
        }
        return this.anyLoading
      }
    }
  }
}

const createInstaller = function createInstaller ({ moduleName, componentName, className } = {}) {
  return Vue => {
    Vue.prototype.$startLoading = function $startLoading (loaderId) {
      this.$store.dispatch(`${moduleName}/startLoading`, loaderId, { root: true })
    }
    Vue.prototype.$stopLoading = function $stopLoading (loaderId) {
      this.$store.dispatch(`${moduleName}/stopLoading`, loaderId, { root: true })
    }
    Vue.prototype.$isLoading = function $isLoading (loaderId) {
      return this.$store.getters[`${moduleName}/isLoading`](loaderId)
    }
    Vue.prototype.$anyLoading = function $anyLoading () {
      return this.$store.getters[`${moduleName}/anyLoading`]
    }

    Vue.component(componentName, createComponent({ componentName, moduleName, className }))
  }
}

export function configureExpecto ({ moduleName = 'loaders', componentName = 'VWait', className = 'v-wait' } = {}) {
  return {
    VuePlugin: {
      install: createInstaller({ moduleName, componentName, className })
    },
    VuexStore: createStore(moduleName)
  }
}
