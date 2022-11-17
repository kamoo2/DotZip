<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.second')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <profile-card :data="ksn"></profile-card>
        <profile-card :data="msh"></profile-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import ProfileCard from "@/components/custom/ProfileCard.vue";
export default {
  data() {
    return {
      ksn: {
        name: "강수나",
        info: "안녕하세요"
      },
      msh: {
        name: "문석환",
        info: "안녕하세요"
      }
    };
  },
  components: {
    ProfileCard
  }
};
</script>
