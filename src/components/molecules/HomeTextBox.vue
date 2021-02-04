<template>
	<div class="home__text-box">
		<HomeTextWhite v-bind:textWhite="text.whiteText"/>
		<HomeTextCrimson v-bind:textCrimson="text.crimsionText"/>
	</div>
</template>

<script>
	import HomeTextWhite from "../atoms/HomeTextWhite.vue"
	import HomeTextCrimson from "../atoms/HomeTextCrimson.vue"
	export default {
		name: "homeTextBox",
		props: ["text"],
		components: {
			HomeTextWhite,
			HomeTextCrimson
		}
	}
</script>

<style scoped>
	.home__text-box {
		position: absolute;
		width: 100%;
		left: 20px;
		bottom: 120px;
		cursor: default;
		z-index: 1;
	}
</style>