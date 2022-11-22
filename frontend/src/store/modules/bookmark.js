import { addBookMarkHouse, deleteBookMarkHouse, getBookMarkHouseList } from '@/apis/bookmark.js';
export default {
  state: {},
  mutatation: {},
  getters: {},
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

    deleteBookMarkHouseAction: ({ commit }, payload) => {
      console.log(payload);
      deleteBookMarkHouse(
        payload,
        ({ data }) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },
  },
};
