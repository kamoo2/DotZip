import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexPersistedState } from 'vue-persistedstate';

import menu from './modules/menu';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    user,
  },
  plugins: [
    createVuexPersistedState({
      key: 'vuexStore',
      storage: sessionStorage,
    }),
  ],
});
