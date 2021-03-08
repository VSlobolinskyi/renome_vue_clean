<template>
  <div class="arrow-container">
    <CarouselArrow v-on:traverse="$emit('traverse', arrow.direction)" :arrow="arrow" :key="index" v-for="(arrow, index) in arrows"/>
  </div>
</template>

<script>
  import CarouselArrow from "../atoms/CarouselArrow.vue"
  export default {
    name: "CarouselNavigation",
    components: {
      CarouselArrow
    },
    props: {
      arrows: Array
    }
  }
</script>

<style lang="scss" scoped>
  .arrow-container {
    position: absolute;
    display: flex;
    padding: 0 0 0 20px;
    bottom: 70px;
    justify-content: space-between;
    width: 133px;
    z-index: 1;
  }
</style>
