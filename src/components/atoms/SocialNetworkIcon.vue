<template>
	<a :href="icon.href">
		<img :src="require(`/src/assets/icons/${icon.src}`)" :alt="icon.alt" class="social-networks__icon">
	</a>
</template>

<script>
	export default {
		name: "SocilNetwrkIcon",
		props: ["icon"],
		props: {
			icon: Object
		}
	}
</script>

<style lang="scss" scoped>
	.social-networks__icon {
		width: 33px;
		height: 33px;
		padding: 0 5px;
	}
</style>