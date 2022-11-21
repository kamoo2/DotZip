import {getSido, getGuGun, getDong, getHouseByDong, getHouseByName} from "@/apis/house.js";

export default {
  state: {
    sidoList: [{value: null, label: "선택하세요"}],
    gugunList: [{value: null, label: "선택하세요"}],
    dongList: [{value: null, label: "선택하세요"}],
    houseList: [],
    house: null,
  },
  mutations: {
    SET_SIDOLIST(state, payload) {
      console.log(payload);
      payload.sidoList.forEach((sido) => {
        state.sidoList.push({value: sido.code, label: sido.name});
      });
    },
    SET_GUGUNLIST(state, payload) {
      console.log(payload);
      payload.gugunList.forEach((gugun) => {
        state.gugunList.push({value: gugun.code, label: gugun.name});
      });
    },
    SET_DONGLIST(state, payload) {
      payload.dongList.forEach((dong) => {
        state.dongList.push({value: dong.code, label: dong.name});
      });
    },
    SET_HOUSELIST(state, houseList) {
      state.houseList = {...houseList};
    },
    SET_HOUSE_DETAIL(state, house) {
      state.house = house;
    },
    CLEAR_SIDO_LIST(state) {
      state.sidoList = [{value: null, label: "선택하세요"}];
    },
    CLEAR_GUGUN_LIST(state) {
      state.gugunList = [{value: null, label: "선택하세요"}];
    },
    CLEAR_DONG_LIST(state) {
      state.dongList = [{value: null, label: "선택하세요"}];
    },
    CLEAR_HOUSE_LIST(state) {
      state.houseList = [];
      state.house = null;
    },
  },
  getters: {
    sidoList: (state) => state.sidoList,
    gugunList: (state) => state.gugunList,
    dongList: (state) => state.dongList,
    houseList: (state) => state.houseList,
    house: (state) => state.house,
  },
  actions: {
    getSidoList: ({commit}) => {
      getSido(
        ({data}) => {
          commit("SET_SIDOLIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugunList: ({commit}, sidoName) => {
      getGuGun(
        sidoName,
        ({data}) => {
          commit("SET_GUGUNLIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getDongList: ({commit}, gugunName) => {
      getDong(
        gugunName,
        ({data}) => {
          commit("SET_DONGLIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getHouseList: ({commit}, dongName) => {
      const params = {
        dong: dongName,
        limit: 10,
        offset: 0,
      };
      getHouseByDong(
        params,
        ({data}) => {
          console.log(data);
          commit("SET_HOUSELIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
