<template>
	<p class="home__text-white">{{textWhite}}</p>
</template>

<script>
	export default {
		name: "homeTextWhite",
		props: ["textWhite"]
	}
</script>

<style scoped>
	.home__text-white {
		color: var(--white);
		margin: 0 0 5px;
		font-size: 28px;
		letter-spacing: 3px;
		font-family: "Axis";
		cursor: default;
	}
</style>