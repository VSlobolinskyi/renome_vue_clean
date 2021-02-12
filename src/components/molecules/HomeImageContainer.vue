<template>
	<div v-bind:class="{'home__img-container--top': imageContainer.isTop, 'home__img-container--hidden': imageContainer.isHidden}" class="home__img-container">
		<HomeImageShader/>
		<HomeImage v-bind:image="imageContainer.img"/>
		<HomeTextBox v-bind:textBox="imageContainer.textBox"/>
	</div>
</template>

<script>
	import HomeImageShader from "../atoms/HomeImageShader.vue"
	import HomeImage from "../atoms/HomeImage.vue"
	import HomeTextBox from "./HomeTextBox.vue"
	export default {
		name: "homeImageContainer",
		components: {
			HomeImageShader,
			HomeImage,
			HomeTextBox
		},
		props: ["imageContainer"]
	}
</script>

<style lang="scss" scoped>
	.home__img-container {
		position: absolute;
		visibility: visible;
		right: 0;
		left: 0;
		height: 140vw;
		width: 100vw;
		transition: left 0.4s;

		&--hidden{
			left: 100vw;
		}
		
		&--top{
			z-index: 1;
		}
	}	
</style>