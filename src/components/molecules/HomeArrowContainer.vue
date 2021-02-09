<template>
	<div class="home__arrow-container">
		<homeArrow v-bind:arrow="arrow" v-bind:key="arrow.id" v-for="arrow in arrows"/>
	</div>
</template>

<script>
	import homeArrow from "../atoms/HomeArrow.vue"
	export default {
		name: "homeArrowContainer",
		components: {
			homeArrow
		},
		data () {
			return {
				arrows: [
					{
						id: 1,
						src: require("../../assets/icons/arrow_left_white.svg"),
						alt: "White arrow left"
					},
					{
						id: 2,
						src: require("../../assets/icons/arrow_right_white.svg"),
						alt: "White arrow right"
					}
				]
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