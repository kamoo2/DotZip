<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4">
        <b-form>
          <b-row>
            <b-colxx xxs="12" md="4">
              <b-form-group label="시">
                <v-select @input="onClickSidoSelect" v-model="sidoName" :options="sidoList" :dir="direction" />
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="12" md="4">
              <b-form-group label="구">
                <v-select v-model="gugunName" :options="gugunList" :dir="direction" />
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="12" md="4">
              <b-form-group label="동">
                <v-select v-model="dongName" :options="dongList" :dir="direction" />
              </b-form-group>
            </b-colxx>
            <!-- <select-option v-bind:name="si" v-bind:data="siData"></select-option>
            <select-option v-bind:name="gu" v-bind:data="guData"></select-option>
            <select-option v-bind:name="dong" v-bind:data="dongData"></select-option> -->
          </b-row>
          <b-row class="button-wrap">
            <!-- <div class="checkbox-wrap">
              <b-button
                variant="outline-primary"
                class="mr-2 px-4"
                @click="checkButtonCheck(1)"
                :pressed="checkedCheckboxes.indexOf(1) !== -1"
                >{{ $t('button.hospital') }}</b-button
              >
              <b-button
                variant="outline-primary"
                class="mr-2"
                @click="checkButtonCheck(2)"
                :pressed="checkedCheckboxes.indexOf(2) !== -1"
                >{{ $t('button.convenience') }}</b-button
              >
              <b-button
                variant="outline-primary"
                class="mr-2 px-4"
                @click="checkButtonCheck(3)"
                :pressed="checkedCheckboxes.indexOf(3) !== -1"
                >{{ $t('button.bank') }}</b-button
              >
            </div> -->

            <div>
              <b-button class="mb-1" variant="secondary default">{{ $t('button.search') }}</b-button>
            </div>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { defaultDirection } from '@/constants/config';

export default {
  data() {
    return {
      sidoName: '선택하세요',
      gugunName: '',
      dongName: '',
      direction: defaultDirection,
    };
  },
  components: {
    'v-select': vSelect,
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_DONG_LIST();
    this.getSidoList();
  },
  computed: {
    ...mapGetters(['sidoList', 'gugunList', 'dongList']),
  },
  methods: {
    ...mapActions(['getSidoList', 'getGugunList', 'getDongList']),
    ...mapMutations(['CLEAR_SIDO_LIST', 'CLEAR_GUGUN_LIST', 'CLEAR_DONG_LIST']),

    onClickSidoSelect() {
      // gugunList 가져오기
      this.CLEAR_GUGUN_LIST();
      this.gugunName = '선택하세요';
      console.log(this.sidoList);
      console.log(this.sidoName.label);
      if (this.sidoName.label !== '선택하세요') {
        this.getGugunList(this.sidoName.label);
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
</style>
