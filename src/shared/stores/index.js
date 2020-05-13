import Vue from "vue";
import Vuex from "vuex";
import conf from "@/shared/config";
import userService from "@/shared/auth/authStore";
import { configureExpecto } from "@/shared/lib/Expecto";
import spotifyStore from "@/shared/stores/spotify.store";

export const SET_APP_INITIALIZE = "SET_APP_INITIALIZE";
export const SET_APP_USER = "SET_APP_USER";

Vue.use(Vuex);

const Expecto = configureExpecto();

Vue.use(Expecto.VuePlugin);

const state = {
  user: userService.user,
  appIsInitialized: false
};

const getters = {};

const mutations = {
  [SET_APP_INITIALIZE](newState, payload) {
    newState.appIsInitialized = payload;
  },
  [SET_APP_USER](newState, payload) {
    userService.user = payload;
    newState.user = payload;
  }
};

const actions = {};

const modules = {
  spotify: {
    namespaced: true,
    ...spotifyStore
  }
};

// eslint-disable-next-line
const plugins = conf.enableVuexLogger ? [createLogger()] : []

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [...plugins, Expecto.VuexStore],
  strict: process.env.NODE_ENV === "development"
});

if (module.hot) {
  module.hot.accept(["@/shared/stores/spotify.store"], () => {
    const newModuleSpotify = require("@/shared/stores/spotify.store").default;
    // swap in the new modules
    store.hotUpdate({
      modules: {
        spotify: {
          namespaced: true,
          ...newModuleSpotify
        }
      }
    });
  });
}

export default store;
