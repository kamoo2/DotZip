<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4">
        <b-form>
          <b-row>
            <select-option
              v-bind:name="si"
              v-bind:data="siData"
            ></select-option>
            <select-option
              v-bind:name="gu"
              v-bind:data="guData"
            ></select-option>
            <select-option
              v-bind:name="dong"
              v-bind:data="dongData"
            ></select-option>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import SelectOption from "@/components/Form/SelectOption.vue";
export default {
  data() {
    return {
      si: "시",
      gu: "구",
      dong: "동",
      siData: ["서울특별시"],
      dongData: [],
      guData: []
    };
  },
  components: {
    SelectOption
  }
};
</script>

<style>
.select-form {
  display: flex;
}
</style>
