<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.contact')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('menu.contact')">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/an_0IDaPLw8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>
