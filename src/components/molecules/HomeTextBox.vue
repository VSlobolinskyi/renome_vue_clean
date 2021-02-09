<template>
	<div class="home__text-box">
		<homeTextWHite v-bind:textWhite="text.textWhite"/>
		<homeTextWHite v-bind:textCrimson="text.textCrimson"/>
	</div>
</template>

<script>
	import homeTextWhite from "../../assets/HomeTextWhite.vue"
	import homeTextCrimson from "../../assets/HomeTextCrimson.vue"
	export default {
		name: "homeTextBox",
		props: ["text"],
		components: {
			homeTextWhite,
			homeTextCrimson
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