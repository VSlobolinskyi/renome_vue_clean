<template>
  <div class="carousel">
    <CarouselElement :imageContainer="imageContainer" :key="index"  v-for="(imageContainer, index) in carousel.imageContainers"/>
    <div class="carousel__navigation">
      <div v-on:click="moveRight" class="arrow">
        <img :src="require(`/src/assets/icons/${carousel.arrowLeft.src}`)" :alt="carousel.arrowLeft.alt" class="arrow__icon">
      </div>
      <div v-on:click="moveRight" class="arrow">
        <img :src="require(`/src/assets/icons/${carousel.arrowRight.src}`)" :alt="carousel.arrowRight.alt" class="arrow__icon">
      </div>
    </div>
  </div>
</template>

<script>
  import CarouselElement from "../molecules/CarouselElement.vue"
  export default {
    name: "Carousel",
    components: {
      CarouselElement
    },
    props: {
      carousel: Object
    },
    methods: {
      moveLeft: function() {
        const imagesInCarousel = this.carousel.imageContainers.length;
        let imageContainers = this.carousel.imageContainers
        let active = 0;
        for (; active < imagesInCarousel-1 ; active++) {
          if (!imageContainers[active].isHidden){
            break;
          }
        }
        imageContainers[active].isTop = 1;
        imageContainers[active].isHidden = 1;
        if(active == 0){
          active = imagesInCarousel-1;
        }
        else {
          active--;
        }
        imageContainers[active].isTop = 0;
        imageContainers[active].isHidden = 0;
      },
      moveRight: function() {
        const imagesInCarousel = this.carousel.imageContainers.length;
        let imageContainers = this.carousel.imageContainers
        let active = 0;
        for (; active < imagesInCarousel-1 ; active++) {
          if (!imageContainers[active].isHidden){
            break;
          }
        }
        imageContainers[active].isTop = 0;
        imageContainers[active].isHidden = 1;
        if(active == imagesInCarousel-1){
          active = 0;
        }
        else {
          active++;
        }
        imageContainers[active].isTop = 1;
        imageContainers[active].isHidden = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    position: relative;
    margin: 60px 0 70px;
    height: 140vw;
    width: 100vw;
    overflow: hidden;

    &__navigation {
      position: absolute;
      display: flex;
      padding: 0 0 0 20px;
      bottom: 70px;
      justify-content: space-between;
      width: 133px;
      z-index: 1;
    }
  }
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
