import {
  addBookMarkHouse,
  deleteBookMarkHouse,
  getBookMarkHouseList,
  addBookMarkArea,
  deleteBookMarkArea,
  getBookMarkAreaList,
  getBookMarkArea
} from "@/apis/bookmark.js";
export default {
  state: {
    bookmarkAreaList: [],
    bookmarkHouseList: [],
    isBookmarkedArea: false
  },
  mutations: {
    SET_BOOKMARK_AREA_LIST(state, payload) {
      console.log(payload.arealist);
      state.bookmarkAreaList = [...payload.arealist];
    },
    SET_IS_BOOKMARK_AREA(state, payload) {
      state.isBookmarkedArea = payload;
    },
    SET_BOOKMARK_HOUSE_LIST(state, payload) {
      state.bookmarkHouseList = [...payload.houselist];
    }
  },
  getters: {
    bookmarkHouseList: state => state.bookmarkHouseList,
    bookmarkAreaList: state => state.bookmarkAreaList,
    isBookmarkedArea: state => state.isBookmarkedArea
  },
  actions: {
    addBookMarkHouseAction: ({ commit }, payload) => {
      addBookMarkHouse(
        payload,
        ({ data }) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },

    deleteBookMarkHouseAction: ({ commit, dispatch }, payload) => {
      console.log(payload);
      deleteBookMarkHouse(
        payload,
        ({ data }) => {
          console.log(data);
          dispatch("getBookMarkHouseListAction", payload.userSeq);
        },
        error => {
          console.log(error);
        }
      );
    },

    getBookMarkHouseListAction: ({ commit }, userSeq) => {
      getBookMarkHouseList(
        userSeq,
        ({ data }) => {
          console.log(data);
          commit("SET_BOOKMARK_HOUSE_LIST", data);
        },
        error => {
          console.log(error);
        }
      );
    },

    addBookMarkAreaAction: ({ commit }, payload) => {
      addBookMarkArea(
        payload,
        ({ data }) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },

    deleteBookMarkAreaAction: ({ commit, dispatch }, payload) => {
      console.log(payload);
      deleteBookMarkArea(
        payload,
        ({ data }) => {
          console.log(data);
          dispatch("getBookMarkAreaListAction", payload.userSeq);
        },
        error => {
          console.log(error);
        }
      );
    },
    getBookMarkAreaListAction: ({ commit }, userSeq) => {
      getBookMarkAreaList(
        userSeq,
        ({ data }) => {
          console.log(data);
          commit("SET_BOOKMARK_AREA_LIST", data);
        },
        error => {
          console.log(error);
        }
      );
    },
    getBookMarkAreaAction: ({ commit }, payload) => {
      console.log(`action : ${payload}`);
      getBookMarkArea(
        payload,
        ({ data }) => {
          console.log(data);
          commit("SET_IS_BOOKMARK_AREA", data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
