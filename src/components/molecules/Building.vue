<template>
  <div class="building">
    <img :src="require(`/src/assets/images/${images[0].src}`)" :alt="images[0].alt" class="building__image1">
    <img :src="require(`/src/assets/images/${images[1].src}`)" :alt="images[1].alt" class="building__image2">
  </div>	
</template>

<script>
  export default {
    name: "Building",
    props: ["images"],
    props: {
      images: Array
    }
  }
</script>

<style lang="scss">
  .building {
    width: 100vw;
    height: 96vw;
    position: relative;
    display: flex;
    flex-direction: column;

    &__image1{
      width: 81%;
      padding: 0 0 0 16%;
    }
    
    &__image2{
      width: 81%;
      position: relative;
      margin: -12% 0 0;
      padding: 0 0 0 3%;
    }
  }
</style>