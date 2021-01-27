<template>
	<img v-bind:alt="hamburgerButton.alt" v-bind:src="hamburgerButton.src" class="icons__hamburger-button">
</template>

<script>
	export default {
		name: "hamburgerButton",
		data () {
			return {
				hamburgerButton: {
					id: 1,
					alt: "Hamburger button",
					src: require("../../assets/icons/hamburger_button.svg")
				}
			}
		}
	}
</script>

<style scoped>
	.icons__hamburger-button {
		display: inline-block;
		position: relative;
		padding: 0 0 0 3px;
		width: 18px;
		height: 15px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.icons--hidden {
		display: none
	}
</style>