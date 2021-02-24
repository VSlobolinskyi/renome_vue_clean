<template>
	<img :alt="hamburgerButton.alt" :src="hamburgerButton.src" class="icons__hamburger-button">
</template>

<script>
	export default {
		name: "HamburgerButton",
		data () {
			return {
				hamburgerButton: {
					alt: "Hamburger button",
					src: require("../../assets/icons/hamburger_button.svg")
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.icons__hamburger-button {
		display: inline-block;
		position: relative;
		padding: 0 0 0 3px;
		width: 18px;
		height: 15px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;

		&--hidden {
			display: none
		}
	}
</style>