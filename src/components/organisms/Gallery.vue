<template>
	<div class="gallery">
		<div class="gallery__title-formating">
			<Title :title="gallery.title"/>
			<SubTitle :subTitle="gallery.subTitle"/>
		</div>
		<GalleryRow v-bind:row="row" :key="row.rowId" v-for="row in gallery.galleryRows" />
	</div>
</template>

<script>
	import Title from "../atoms/Title.vue"
	import SubTitle from  "../atoms/SubTitle.vue"
	import GalleryRow from "../molecules/GalleryRow.vue"
	import json from "/data/structure.json"
	export default {
		name: "Gallery",
		components: {
			Title,
			SubTitle,
			GalleryRow
		},
		data() {
			return {
				gallery: json.gallery
			}
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
