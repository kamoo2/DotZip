<template>
  <div class="house_card" @click="onClickHouse">
    <div class="house_info">
      <h3 class="house_info_title">{{ item.aptName }}</h3>
      <div class="house_info_description">
        <span>거래 금액 : {{ item.dealAmount }}</span>
        <span>전용 면적 : {{ item.area }}</span>
        <span>거래일 : {{ item.dealYear }}.{{ item.dealMonth }}.{{ item.dealDay }}</span>
      </div>
    </div>
    <div class="house_favs_btn_wrapper">
      <i class="favs_btn simple-icon-like"></i>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  data() {
    return {
      curHouse: {
        aptName: "",
        area: "",
        buildYear: "",
        cityName: "",
        code: "",
        dealAmount: "",
        dealDay: "",
        dealMonth: "",
        dealYear: "",
        dong: "",
        floor: "",
        gugunName: "",
        houseNo: 0,
        jibun: "",
        lat: "",
        lng: "",
        no: 0,
      },
    };
  },
  props: ["item"],
  computed: {
    ...mapGetters(["house"]),
  },
  methods: {
    ...mapActions(["getHouse"]),
    onClickHouse() {
      // 1. 클릭시 해당 위치로 마커 이동
      // 1.1 현재 선택된 위치를 store에 저장하고 , 클릭시 해당 값을 변경
      // 2. 클릭시 상세 정보 데이터를 가져온다.
      // 2.1 그 안에 위도 경도 데이터가 담겨져 있기 때문에
      this.getHouse(this.item.no);
    },
  },
  watch: {
    house() {
      this.curHouse = this.house;
    },
  },
};
</script>

<style>
.house_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
}
.house_info_title {
  font-weight: 900;
}
.house_info_description {
  display: flex;
  flex-direction: column;
}
.house_info_description span {
  margin-bottom: 5px;
}
.house_info_description span:last-child {
  margin-bottom: 0;
}
.favs_btn {
  font-size: 25px;
  cursor: pointer;
  transition-duration: 500ms;
}

.favs_btn:hover {
  color: #0056b3;
}
</style>
