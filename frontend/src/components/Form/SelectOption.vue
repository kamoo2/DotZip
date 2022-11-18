<template>
  <b-colxx xxs="12" md="4">
    <b-form-group :label="name">
      <v-select
        v-model="vueSelectForm.single"
        :options="selectData"
        :dir="direction"
      />
    </b-form-group>
  </b-colxx>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { defaultDirection } from "@/constants/config";

export default {
  components: {
    "v-select": vSelect
  },
  props: ["name", "data"],
  data() {
    return {
      vueSelectOptions: [],
      vueSelectForm: {
        single: "",
        multiple: []
      },
      direction: defaultDirection,
      selectData: this.data
    };
  }
};
</script>
