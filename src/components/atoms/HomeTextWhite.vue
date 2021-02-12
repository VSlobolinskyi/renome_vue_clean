<template>
	<p class="home__text-white">{{text}}</p>
</template>

<script>
	export default {
		name: "homeTextWhite",
		props: ["text"]
	}
</script>

<style lang="scss" scoped>
	.home__text-white {
		color: $white;
		margin: 0 0 5px;
		font-size: 28px;
		letter-spacing: 3px;
		font-family: "Axis";
		cursor: default;
	}
</style>