<template>
	<div class="gallery">
		<div class="gallery__title-formating">
			<Title :title="gallery.title"/>
			<SubTitle :subTitle="gallery.subTitle"/>
		</div>
		<GalleryGrid :images="gallery.galleryImages"/>
	</div>
</template>

<script>
	import Title from "../atoms/Title.vue"
	import SubTitle from  "../atoms/SubTitle.vue"
	import GalleryGrid from "../molecules/GalleryGrid.vue"
	export default {
		name: "Gallery",
		components: {
			Title,
			SubTitle,
			GalleryGrid
		},
		props: ["gallery"],
		props: {
			gallery: Object
		}
	}
</script>

<style lang="scss" scoped>
	.gallery {
		display: flex;
		flex-direction: column;
		width: 100vw;
		background-color: $lightGray;
		padding: 70px 0;

		&__title-formating {
			text-align: center;
			padding: 0 0 15px 0;
		}
	}
</style>
