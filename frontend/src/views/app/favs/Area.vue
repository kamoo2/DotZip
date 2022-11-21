<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.fArea')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('menu.fArea')"> </b-card>
        <b-table striped hover :items="items"></b-table>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {age: 40, first_name: "Dickerson", last_name: "Macdonald"},
        {age: 21, first_name: "Larsen", last_name: "Shaw"},
        {age: 89, first_name: "Geneva", last_name: "Wilson"},
        {age: 38, first_name: "Jami", last_name: "Carney"},
      ],
    };
  },
};
</script>
