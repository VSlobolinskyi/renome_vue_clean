<template>
  <div class="gallery-grid">
    <img v-for="(img, index) in images" :key="index" :src="require(`../../assets/images/${img.path}`)" :alt="img.alt" class="gallery-grid__image"/>
  </div>
</template>

<script>
  export default {
    name: "GalleryGrid",
    props: {
      images: Array
    }
  }
</script>

<style lang="scss" scoped>
  .gallery-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 0 5px;

    &__image {
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
    }
  }
</style>