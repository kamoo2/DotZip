import { getSido, getGuGun, getDong } from '@/apis/house.js';

export default {
  state: {
    sidoList: [{ value: null, label: '선택하세요' }],
    gugunList: [{ value: null, label: '선택하세요' }],
    dongList: [{ value: null, label: '선택하세요' }],
  },
  mutations: {
    SET_SIDOLIST(state, payload) {
      console.log(payload);
      payload.sidoList.forEach(sido => {
        state.sidoList.push({ value: sido.code, label: sido.name });
      });
    },
    SET_GUGUNLIST(state, payload) {
      console.log(payload);
      payload.gugunList.forEach(gugun => {
        state.gugunList.push({ value: gugun.code, label: gugun.name });
      });
    },
    SET_DONGLIST(state, payload) {
      payload.dongList.forEach(dong => {
        state.dongList.push({ value: dong.code, label: dong.name });
      });
    },
    CLEAR_SIDO_LIST(state) {
      state.sidoList = [{ value: null, label: '선택하세요' }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.gugunList = [{ value: null, label: '선택하세요' }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongList = [{ value: null, label: '선택하세요' }];
    },
  },
  getters: {
    sidoList: state => state.sidoList,
    gugunList: state => state.gugunList,
    dongList: state => state.dongList,
  },
  actions: {
    getSidoList: ({ commit }) => {
      getSido(
        ({ data }) => {
          commit('SET_SIDOLIST', data);
        },
        error => {
          console.log(error);
        }
      );
    },
    getGugunList: ({ commit }, sidoName) => {
      getGuGun(
        { sidoName },
        ({ data }) => {
          commit('SET_GUGUNLIST', data);
        },
        error => {
          console.log(error);
        }
      );
    },
    getDongList: ({ commit }, gugunName) => {
      getDong(
        { gugunName },
        ({ data }) => {
          commit('SET_DONGLIST', data);
        },
        error => {
          console.log(error);
        }
      );
    },
  },
};
