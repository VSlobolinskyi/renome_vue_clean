<template>
	<p class="home__text-crimson">{{text}}</p>
</template>

<script>
	export default {
		name: "homeTextCrimson",
		props: ["text"]
	}
</script>

<style scoped>
	.home__text-crimson {
		color: var(--crimson);
		margin: 0 0 30px;
		font-size: 22px;
		letter-spacing: 2px;
		font-family: "Montserrat";
	}
</style>