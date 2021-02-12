<template>
	<img v-bind:src="cross.src" v-bind:alt="cross.alt" class="icons__cross icons--hidden">
</template>

<script>
	export default {
		name: "cross",
		data () {
			return {
				cross: {
					src: require("../../assets/icons/cross_icon.svg"),
					alt: "Corss icon"
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.icons__cross {
		display: inline-block;
		position: relative;
		height: 18px;
		padding: 0 0 0 3px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;

		&--hidden {
			display: none;
		}
	}
</style>