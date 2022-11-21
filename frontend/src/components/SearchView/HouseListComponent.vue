<template>
  <div style="width:100%;height:100%">
    <div class="house-list-wrapper open">
      <div class="result_list_wrapper">
        <house-item-component v-for="(item, index) in houseList" :key="index" :item="item"></house-item-component>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HouseItemComponent from "./HouseItemComponent.vue";

export default {
  components: {HouseItemComponent},

  computed: {
    ...mapGetters(["houseList", "house"]),
  },
};
</script>

<style>
.house-list-wrapper {
  width: 400px;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

.house-list-wrapper.close {
  left: -40%;
}

.house-list-wrapper.open {
  left: 0;
}

.result_list_wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
}

.result_list_wrapper::-webkit-scrollbar {
  display: none;
}
</style>
