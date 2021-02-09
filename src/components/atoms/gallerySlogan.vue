<template>
	<p class="gallery__slogan">{{slogan.innerText}}</p>
</template>

<script>
	export default {
		name: "gallerySlogan",
		data() {
			return {
				slogan: {
					id: 1,
					innerText: "more about us via photos"
				}
			}
		}
	}
</script>

<style scoped>
	.gallery__slogan {
		color: var(--crimson);
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