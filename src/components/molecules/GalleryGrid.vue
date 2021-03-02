<template>
	<div class="grid">
		<img v-for="(img, index) in images" :key="index" :src="require(`../../assets/images/${img.path}`)" :alt="img.alt" class="grid__image"/>
	</div>
</template>

<script>
	export default {
		name: "GalleryGrid",
		props: ["images"],
		props: {
			images: Array
		}
	}
</script>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto auto auto; 
		padding: 0 5px;

		&__image {
			box-sizing: border-box;
			width: 100%;
			padding: 5px;
		}
	}
</style>