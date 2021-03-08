<template>
  <div class="carousel">
    <CarouselElement :imageContainer="imageContainer" :key="index"  v-for="(imageContainer, index) in carousel.imageContainers"/>
    <CarouselNavigation v-on:traverse="switchImage" :arrows="carousel.arrows"/>
  </div>
</template>

<script>
  import CarouselNavigation from "../molecules/CarouselNavigation.vue"
  import CarouselElement from "../molecules/CarouselElement.vue"
  export default {
    name: "Carousel",
    components: {
      CarouselNavigation,
      CarouselElement
    },
    props: {
      carousel: Object
    },
    methods: {
      switchImage(direction) {
        const imagesInCarousel = this.carousel.imageContainers.length;
        let imageContainers = this.carousel.imageContainers
        let active = 0;
        for (; active < imagesInCarousel-1 ; active++) {
          if (!imageContainers[active].isHidden){
            break;
          }
        }
        if (direction == 'left'){
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
        }
        if (direction == 'right') {
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
  }
</script>

<style lang="scss" scoped>
  .carousel {
    position: relative;
    margin: 60px 0 70px;
    height: 140vw;
    width: 100vw;
    overflow: hidden;
  }
</style>
