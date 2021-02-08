<template>
	<a v-bind:href="icon.href">
		<img v-bind:src="icon.src" v-bind:alt="icon.alt" class="social-networks__icon">
	</a>
</template>

<script>
	export default {
		name: "socilNetwrkIcon",
		props: ["icon"]
	}
</script>

<style scoped>
	.social-networks__icon {
		width: 33px;
		height: 33px;
		padding: 0 5px;
	}
</style>