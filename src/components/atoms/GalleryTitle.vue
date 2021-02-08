<template>
	<h2 class="gallery__title">{{text}}</h2>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "galleryTilte",
		data() {
			return {
				text: json.gallery.title
			}
		}
	}
</script>

<style scoped>
	.gallery__title {
		text-align: center;
		margin: 0;
		padding: 0;
		font-size: 38px;
		letter-spacing: 8px;
		color: var(--darkBlue);
		font-family: "Axis", "Ariel", "Times New Roman", "Times";
		cursor: default;
	}
</style>