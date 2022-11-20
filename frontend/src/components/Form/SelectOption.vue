<template>
  <b-colxx xxs="12" md="4">
    <b-form-group :label="name">
      <v-select v-model="value" :options="selectData" :dir="direction" />
    </b-form-group>
  </b-colxx>
</template>
<script>
import { getGuGun, getDong } from '@/apis/house.js';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { defaultDirection } from '@/constants/config';

export default {
  components: {
    'v-select': vSelect,
  },
  props: ['name', 'data'],
  data() {
    return {
      value: '',
      direction: defaultDirection,
      selectData: this.data,
    };
  },
  watch: {
    async value(value) {
      if (this.name === '시') {
        // Gu 데이터 가져오기
        await getGuGun(
          value,
          response => {
            // store의 GuGunList에 추가 하기
          },
          error => {
            console.log(error);
          }
        );
      } else if (this.name === '구') {
        // Dong 데이터 가져오기
      }
    },
  },
};
</script>
