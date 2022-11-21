<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4">
        <b-form>
          <b-row>
            <b-colxx xxs="12" md="4">
              <b-form-group label="시">
                <v-select @input="onClickSidoSelect" v-model="sido" :options="sidoList" :dir="direction" />
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="12" md="4">
              <b-form-group label="구">
                <v-select @input="onClickGugunSelect" v-model="gugun" :options="gugunList" :dir="direction" />
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="12" md="4">
              <b-form-group label="동">
                <v-select v-model="dong" :options="dongList" :dir="direction" />
              </b-form-group>
            </b-colxx>
          </b-row>
          <b-row class="button-wrap">
            <div class="checkbox-wrap">
              <b-button
                variant="outline-primary"
                class="mr-2 px-4"
                @click="checkButtonCheck(1)"
                :pressed="checkedCheckboxes.indexOf(1) !== -1"
                >{{ $t("button.hospital") }}</b-button
              >
              <b-button
                variant="outline-primary"
                class="mr-2"
                @click="checkButtonCheck(2)"
                :pressed="checkedCheckboxes.indexOf(2) !== -1"
                >{{ $t("button.convenience") }}</b-button
              >
              <b-button
                variant="outline-primary"
                class="mr-2 px-4"
                @click="checkButtonCheck(3)"
                :pressed="checkedCheckboxes.indexOf(3) !== -1"
                >{{ $t("button.bank") }}</b-button
              >
            </div>

            <div>
              <b-button @click="onClickSearchBtn" class="mb-1" variant="secondary default">{{
                $t("button.search")
              }}</b-button>
            </div>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import {defaultDirection} from "@/constants/config";

export default {
  data() {
    return {
      checkedCheckboxes: [],
      sido: {value: null, label: "선택하세요"},
      gugun: null,
      dong: null,
      direction: defaultDirection,
      curHouseList: [],
    };
  },
  components: {
    "v-select": vSelect,
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_DONG_LIST();
    this.CLEAR_HOUSE_LIST();
    this.getSidoList();
  },
  computed: {
    ...mapGetters(["sidoList", "gugunList", "dongList", "houseList", "house"]),
  },
  watch: {
    houseList() {
      return (this.curHouseList = {...this.houseList});
    },
  },
  methods: {
    ...mapActions(["getSidoList", "getGugunList", "getDongList", "getHouseList"]),
    ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST", "CLEAR_DONG_LIST", "CLEAR_HOUSE_LIST"]),

    onClickSidoSelect() {
      // gugunList 가져오기
      this.CLEAR_GUGUN_LIST();
      this.gugun = {value: null, label: "선택하세요"};
      this.dong = null;
      this.getGugunList(this.sido.label);
    },
    onClickGugunSelect() {
      // dongList 가져오기
      this.CLEAR_DONG_LIST();
      this.dong = {value: null, label: "선택하세요"};
      this.getDongList(this.gugun.label);
    },
    onClickSearchBtn() {
      // 클릭시 현재 dong 이름으로 데이터 뽑아오기
      this.getHouseList(this.dong.label);
    },
    checkButtonCheck(i) {
      const index = this.checkedCheckboxes.indexOf(i);
      if (index === -1) {
        this.checkedCheckboxes.push(i);
      } else {
        this.checkedCheckboxes.splice(index, 1);
      }
    },
  },
};
</script>

<style>
.select-form {
  display: flex;
}
.button-wrap {
  padding: 0 15px;
  justify-content: space-between;
}
.checkbox-wrap {
  display: flex;
}
</style>
