<template>
	<div class="gallery">
		<GalleryTitle/>
		<GallerySlogan/>
		<GalleryRow v-bind:row="row" v-bind:key="row.rowId" v-for="row in rows" />
	</div>
</template>

<script>
	import GalleryTitle from "../atoms/GalleryTitle.vue"
	import GallerySlogan from  "../atoms/GallerySlogan.vue"
	import GalleryRow from "../molecules/GalleryRow.vue"
	import json from "../../../data/structure.json"
	export default {
		name: "gallery",
		components: {
			GalleryTitle,
			GallerySlogan,
			GalleryRow
		},
		data() {
			return {
				rows: json.gallery.galleryRows
			}
		}
	}
</script>

<style scoped>
	.gallery {
		display: flex;
		flex-direction: column;
		width: 100vw;
		background-color: var(--lightGray);
		padding: 70px 0;
	}
</style>
