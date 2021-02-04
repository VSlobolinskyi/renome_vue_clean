<template>
	<div class="home__arrow-container">
		<homeArrow v-bind:containers="containers" v-bind:arrow="arrow" v-bind:counter="counter" v-bind:key="arrow.id" v-for="arrow in arrows"/>
	</div>
</template>

<script>
	import homeArrow from "../atoms/HomeArrow.vue"
	export default {
		name: "homeArrowContainer",
		props: ["containers"],
		components: {
			homeArrow
		},
		data () {
			return {
				arrows: [
					{
						id: 1,
						src: require("../../assets/icons/arrow_left_white.svg"),
						alt: "White arrow left",
						direction: 'left'
					},
					{
						id: 2,
						src: require("../../assets/icons/arrow_right_white.svg"),
						alt: "White arrow right",
						direction: 'right'
					}
				],
				counter: 0
			}
		}
	}
</script>

<style scoped>
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