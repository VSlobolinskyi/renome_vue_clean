<template>
	<p class="navigation__logo">{{logo.innerText}}</p>
</template>

<script>
	export default {
		name: "navigationLogo",
		data() {
			return {
				logo: {
					id: 1,
					innerText: "Renome"
				}
			}
		}
	}
</script>

<style scoped>
	.navigation__logo {
		font-size: 25px;
		letter-spacing: 3px;
		padding: 0 0 0 10px;
		margin: 0;
		color: var(--black);
		font-family: "Pacifico";
		cursor: default;
	}
</style>