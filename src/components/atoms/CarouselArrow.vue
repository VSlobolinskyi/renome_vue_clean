<template>
  <div v-on:click="$emit('traverse', arrow.direction)" class="arrow">
    <img :src="require(`../../assets/icons/${arrow.src}`)" :alt="arrow.alt" class="arrow__icon">
  </div>
</template>

<script>
  export default {
    name: "CarouselArrow",
    props: {
      arrow: Object
    }
  }
</script>

<style lang="scss" scoped>
  .arrow {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: space-around;
    border: 2px solid $white;
    width: 55px;
    height: 55px;
    color: $white;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &__icon {
      width: 24px;
      height: 40px;
      align-self: center;
    }
  }
  
</style>