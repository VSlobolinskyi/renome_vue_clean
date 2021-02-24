<template>
	<div class="gallery__row">
		<GalleryImage :img="img" :key="img.imgId" v-for="img in row.images"/>
	</div>
</template>

<script>
	import GalleryImage from "../atoms/GalleryImage.vue"
	export default {
		name: "GalleryRow",
		props: ["row"],
		components: {
			GalleryImage	
		}
	}
</script>

<style lang="scss" scoped>
	.gallery__row {
		display: block;
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 0 5px;
	}
</style>