<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-2">
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
              <b-button class="mb-1 mr-4 favs_area_btn" variant="light default">관심 지역 등록</b-button>
              <b-button @click="onClickSearchBtn" class="mb-1" variant="primary default">{{
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
      return (this.curHouseList = [...this.houseList]);
    },
  },
  methods: {
    ...mapActions(["getSidoList", "getGugunList", "getDongList", "getHouseList", "toggleList"]),
    ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST", "CLEAR_DONG_LIST", "CLEAR_HOUSE_LIST"]),

    onClickSidoSelect() {
      // gugunList 가져오기
      this.CLEAR_GUGUN_LIST();
      this.gugun = {value: null, label: "선택하세요"};
      this.dong = null;
      if (this.sido.value !== null) {
        this.getGugunList(this.sido.label);
      } else {
        this.gugun = null;
      }
    },
    onClickGugunSelect() {
      // dongList 가져오기
      this.CLEAR_DONG_LIST();
      this.dong = {value: null, label: "선택하세요"};
      if (this.gugun.value !== null) {
        this.getDongList(this.gugun.label);
      }
    },
    async onClickSearchBtn() {
      // 클릭시 현재 dong 이름으로 데이터 뽑아오기
      if (this.sido.value === null) {
        this.$notify("error", "Search Error", "시를 선택해주세요", {
          duration: 3000,
          permanent: false,
        });
      } else if (this.dong === null) {
        this.$notify("error", "Search Error", "구를 선택해주세요.", {
          duration: 3000,
          permanent: false,
        });
      } else if (this.dong.value === null) {
        this.$notify("error", "Search Error", "동을 선택해주세요", {
          duration: 3000,
          permanent: false,
        });
      } else {
        await this.getHouseList(this.dong.label);
        // 이미 검색 창이 열려있다면 토글 작동 할 필요 없다.
        // 닫혀 있는
        if (this.curHouseList.length === 0) {
          // 없는 경우에는
          this.$notify("error", "Search Error", "검색 결과가 존재하지 않습니다.", {
            duration: 3000,
            permanent: false,
          });
          document.querySelector(".house-list-wrapper").classList.add("close");
          this.toggleList(false);
        } else {
          document.querySelector(".house-list-wrapper").classList.remove("close");
          this.toggleList(true);
        }
      }
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

.favs_area_btn {
  background-color: #fdcb6e;
}
.favs_area_btn:hover {
  background-color: #ffa502;
}
</style>
