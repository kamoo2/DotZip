import Vue from "vue";
import Vuex from "vuex";
import { createVuexPersistedState } from "vue-persistedstate";

import menu from "./modules/menu";
import user from "./modules/user";
import house from "./modules/house";
import bookmark from "./modules/bookmark";
import QnA from "./modules/QnA";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    user,
    house,
    bookmark,
    QnA
  },
  plugins: [
    createVuexPersistedState({
      key: "vuexStore",
      storage: sessionStorage
    })
  ]
});
