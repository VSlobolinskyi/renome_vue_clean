<template>
	<div v-on:click="$emit('traverse', arrow.direction)" class="home__arrow-outline">
		<img v-bind:src="require(`../../assets/icons/${arrow.src}`)" v-bind:alt="arrow.alt" class="home__arrow">
	</div>
</template>

<script>
	export default {
		name: "homeArrow",
		props: ['arrow']
	}
</script>

<style scoped>
	.home__arrow-outline {
		position: relative;
		display: flex;
		align-content: center;
		justify-content: space-around;
		border: 2px solid var(--white);
		width: 55px;
		height: 55px;
		color: var(--white);
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.home__arrow {
		width: 24px;
		height: 40px;
		align-self: center;
	}
</style>