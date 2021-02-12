<template>
	<div class="home__arrow-container">
		<HomeArrow v-on:traverse="$emit('traverse', arrow.direction)" v-bind:arrow="arrow" v-bind:key="arrow.id" v-for="arrow in arrows"/>
	</div>
</template>

<script>
	import HomeArrow from "../atoms/HomeArrow.vue"
	import json from "../../../data/structure.json"
	export default {
		name: "homeArrowContainer",
		components: {
			HomeArrow
		},
		data () {
			return {
				arrows: json.carousel.arrowContainer.arrows
			}				
		}
	}
</script>

<style lang="scss" scoped>
	.home__arrow-container {
		position: absolute;
		display: flex;
		padding: 0 0 0 20px;
		bottom: 70px;
		justify-content: space-between;
		width: 133px;
		z-index: 1;
	}
</style>
