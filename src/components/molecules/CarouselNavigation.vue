<template>
	<div class="arrow-container">
		<CarouselArrow v-on:traverse="$emit('traverse', arrow.direction)" v-bind:arrow="arrow" v-bind:key="arrow.id" v-for="arrow in arrows"/>
	</div>
</template>

<script>
	import CarouselArrow from "../atoms/CarouselArrow.vue"
	import json from "../../../data/structure.json"
	export default {
		name: "CarouselNavigation",
		components: {
			CarouselArrow
		},
		data () {
			return {
				arrows: json.carousel.arrowContainer.arrows
			}				
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
