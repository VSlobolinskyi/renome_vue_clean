<template>
	<div class="navigation">
		<navigationLogo/>
		<navigationIcons/>
	</div>	
</template>

<script>
	import navigationLogo from "../atoms/NavigationLogo.vue"
	import navigationIcons from "../molecules/NavigationIcons.vue"
	export default {
		name: "navigation",
		components: {
			navigationLogo,
			navigationIcons
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