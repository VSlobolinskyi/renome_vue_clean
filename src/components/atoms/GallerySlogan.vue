<template>
	<p class="gallery__slogan">{{text}}</p>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "gallerySlogan",
		data() {
			return {
				text: json.gallery.subtitle
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gallery__slogan {
		color: $crimson;
		text-align: center;
		text-transform: uppercase;
		margin: 0;
		padding: 15px 0 30px;
		font-size: 11px;
		letter-spacing: 1px;
		font-family: "Montserrat", "Ariel", "Times New Roman", "Times";
		cursor: default;
	}
</style>