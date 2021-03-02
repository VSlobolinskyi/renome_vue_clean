<template>
	<img :alt="menuIcon.hamburgerButton.alt" :src="require(`/src/assets/icons/${menuIcon.hamburgerButton.src}`)" class="menu-icon">
</template>

<script>
	export default {
		name: "HamburgerButton",
		porps: ["menuIcon"],
		props: {
			menuIcon: Object
		}
	}
</script>

<style lang="scss" scoped>
	.menu-icon {
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