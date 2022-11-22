<template>
  <div class="house_card">
    <div class="house_info">
      <h3 class="house_info_title">
        {{ item.aptName }} <i class="simple-icon-location-pin moveHouseLocation" @click="onClickMoveHouseLocation"></i>
      </h3>
      <div class="house_info_description">
        <span>거래 금액 : {{ item.dealAmount }}</span>
        <span>전용 면적 : {{ item.area }}</span>
        <span>거래일 : {{ item.dealYear }}.{{ item.dealMonth }}.{{ item.dealDay }}</span>
      </div>
      <b-button class="mb-1" @click="onClickDetailHouseBtn" variant="primary">상세 보기</b-button>
    </div>
    <div class="house_favs_btn_wrapper">
      <i class="favs_btn simple-icon-like"></i>
    </div>
    <house-detail-modal></house-detail-modal>
  </div>
</template>

<script>
import HouseDetailModal from "@/components/Modal/HouseDetailModal.vue";
import {mapActions, mapGetters} from "vuex";
export default {
  components: {
    HouseDetailModal,
  },
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
    onClickMoveHouseLocation() {
      // 1. 클릭시 해당 위치로 마커 이동
      // 1.1 현재 선택된 위치를 store에 저장하고 , 클릭시 해당 값을 변경
      // 2. 클릭시 상세 정보 데이터를 가져온다.
      // 2.1 그 안에 위도 경도 데이터가 담겨져 있기 때문에
      this.getHouse(this.item.no);
      console.log(this.house);
    },
    onClickDetailHouseBtn() {
      // 클릭시 Detail 정보 가져 오고 가공해서 화면에 보여주기
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
  padding: 20px 20px;
  border-bottom: 1px solid lightgray;
}
.house_info_title {
  display: flex;
  font-size: 24px;
  align-items: center;
  font-weight: 500;
}
.moveHouseLocation {
  font-size: 24px;
  margin-left: 6px;
  transition-duration: 500ms;
  cursor: pointer;
}

.moveHouseLocation:hover {
  font-size: 32px;
  color: #ffa502;
}

.house_info_description {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
  margin-bottom: 20px;
}

.favs_btn:hover {
  color: #0056b3;
}
</style>
