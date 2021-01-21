<template>
	<div class="gallery">
		<galleryTitle/>
		<gallerySlogan/>
		<galleryRow v-bind:row="row" v-bind:key="row.rowId" v-for="row in galleryContent" />
	</div>
</template>

<script>
	import galleryTitle from "../atoms/galleryTitle.vue"
	import gallerySlogan from  "../atoms/gallerySlogan.vue"
	import galleryRow from "../molecules/galleryRow.vue"
	export default {
		name: "gallery",
		components: {
			galleryTitle,
			gallerySlogan,
			galleryRow
		},
		data() {
			return {
				galleryContent: [
					{
						rowId: 1,
						images: [
							{
								imgId: 1,
								src: require("../../assets/images/gallery_img_1.png"),
								alt: "Restorant building view"
							},
							{
								imgId: 2,
								src: require("../../assets/images/gallery_img_2.png"),
								alt: "Small restorant building view"
							}
						]
					},
					{
						rowId: 2,
						images: [
							{
								imgId: 1,
								src: require("../../assets/images/gallery_img_3.png"),
								alt: "Inside retorant view"
							},
							{
								imgId: 2,
								src: require("../../assets/images/gallery_img_4.png"),
								alt: "Everyday specials banner"
							}
						]
					},
					{
						rowId: 3,
						images: [
							{
								imgId: 1,
								src: require("../../assets/images/gallery_img_5.png"),
								alt: "Salads"
							},
							{
								imgId: 2,
								src: require("../../assets/images/gallery_img_6.png"),
								alt: "Snaks"
							}
						]
					}
				]
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