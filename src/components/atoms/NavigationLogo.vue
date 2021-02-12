<template>
	<p class="navigation__logo">{{text}}</p>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "navigationLogo",
		data() {
			return {
				text: json.navigation.logo
			}
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