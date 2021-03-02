<template>
	<p class="navigation__logo">{{logo}}</p>
</template>

<script>
	export default {
		name: "NavigationLogo",
		props: ["logo"],
		props: {
			logo: String
		}
	}
</script>

<style lang="scss" scoped>
	.navigation__logo {
		font-size: 25px;
		letter-spacing: 3px;
		padding: 0 0 0 10px;
		margin: 0;
		color: $black;
		font-family: "Pacifico";
		cursor: default;
	}
</style>