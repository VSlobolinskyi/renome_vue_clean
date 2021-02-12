<template>
	<img v-bind:src="require(`../../assets/images/${image.src}`)" v-bind:alt="image.alt" class="home__img"> 
</template>

<script>
	export default {
		name: "homeImage",
		props: ["image"]
	}
</script>

<style lang="scss" scoped>
	.home__img {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>