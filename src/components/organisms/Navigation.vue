<template>
	<div class="navigation">
		<NavigationLogo/>
		<NavigationIcons/>
	</div>	
</template>

<script>
	import NavigationLogo from "../atoms/NavigationLogo.vue"
	import NavigationIcons from "../molecules/NavigationIcons.vue"
	export default {
		name: "navigation",
		components: {
			NavigationLogo,
			NavigationIcons
		}
	}
</script>

<style scoped>
	.navigation {
		position: fixed;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 45px;
		top: 0;
		padding: 0 0 10px;
		background-color: var(--white);
		z-index: 2;
	}
</style>