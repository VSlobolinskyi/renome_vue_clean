<template>
	<div class="home__img-shader"></div>
</template>

<script>
	export default {
		name: "homeImageShader"
	}
</script>

<style scoped>
	.home__img-shader {
		position: absolute;
		background-color: var(--darkBlue);
		width: 100%;
		height: 100%;
		opacity: 0.12;
		z-index: 1;
	}
</style>