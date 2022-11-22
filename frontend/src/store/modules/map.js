export default {
  state: {
    latlng: [],
  },
  mutatation: {
    CLEAR_LAT_LNG(state) {
      state.latlng = [];
    },
    SET_LAT_LNG(state, payload) {
      state.latlng = {...payload};
    },
  },
  getters: {
    getLatLng: (state) => state.latlng,
  },
};
