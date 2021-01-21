<template>
	<div class="gallery__row">
		<galleryImage v-bind:img="img" v-bind:key="img.imgId" v-for="img in row.images"/>

	</div>
</template>

<script>
	import galleryImage from "../atoms/galleryImage.vue"
	export default {
		name: "galleryRow",
		props: ["row"],
		components: {
			galleryImage	
		}
	}
</script>

<style scoped>
	.gallery__row {
		display: block;
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 0 5px;
	}
</style>