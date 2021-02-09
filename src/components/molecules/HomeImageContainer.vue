<template>
	<div v-bind:class="{'hidden': imageContainer.isHidden}" class="home__img-container ">
		<homeImageShader/>
		<homeImage v-bind:image="imageContainer.image"/>
		
	</div>
</template>

<script>
	import homeImageShader from "../atoms/HomeImageShader.vue"
	import homeImage from "../atoms/HomeImage.vue"
	export default {
		name: "homeImageContainer",
		components: {
			homeImageShader,
			homeImage
		},
		props: ["imageContainer"]
	}
</script>

<style scoped>
	.home__img-container {
		position: absolute;
		visibility: visible;
		right: 0;
		left: 0;
		height: 140vw;
		width: 100vw;
		transition: left 0.4s;
	}	
	.hidden {
		left: 100vw;
	}
</style>