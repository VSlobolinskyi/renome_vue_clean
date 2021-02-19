<template>
	<div class="carousel">
		<CarouselElement v-bind:imageContainer="imageContainer" v-bind:key="imageContainer.id" v-for="imageContainer in imageContainers"/>
		<CarouselNavigation v-on:traverse="switchImage" v-bind:arrows="arrowContainer"/>
	</div>
</template>

<script>
	import CarouselNavigation from "../molecules/CarouselNavigation.vue"
	import CarouselElement from "../molecules/CarouselElement.vue"
	import json from "../../../data/structure.json"
	export default {
		name: "Carousel",
		components: {
			CarouselNavigation,
			CarouselElement
		},
		methods: {
			switchImage(direction) {
				const imagesInCarousel = this.imageContainers.length;
				let active = 0;
				for (; active < imagesInCarousel-1 ; active++) {
					if (!this.imageContainers[active].isHidden){
						break;
					}
				}
				if (direction == 'left'){
					this.imageContainers[active].isTop = 1;
					this.imageContainers[active].isHidden = 1;
					if(active == 0){
						active = imagesInCarousel-1;
					}
					else {
						active--;
					}
					this.imageContainers[active].isTop = 0;
					this.imageContainers[active].isHidden = 0;
				}
				if (direction == 'right') {
					this.imageContainers[active].isTop = 0;
					this.imageContainers[active].isHidden = 1;
					if(active == imagesInCarousel-1){
						active = 0;
					}
					else {
						active++;
					}
					this.imageContainers[active].isTop = 1;
					this.imageContainers[active].isHidden = 0;
				}
			}
		},
		data() {
			return {
					arrowContainer: json.carousel.arrowContainer,
					imageContainers: json.carousel.imageContainers
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
