<template>
	<h2 class="gallery__title">{{title.innerText}}</h2>
</template>

<script>
	export default {
		name: "galleryTilte",
		data() {
			return {
				title: {
					id: 1,
					innerText: "gallery"
				}
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