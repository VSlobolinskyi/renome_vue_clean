<template>
	 <img v-bind:src="require(`../../assets/images/${img.src}`)" v-bind:alt="img.alt" class="gallery__img" >
</template>

<script>
	export default {
		name: "galleryImage",
		props: ["img"]
	}
</script>

<style lang="scss" scoped>
	.gallery__img {
		display: block;
		box-sizing: border-box;
		width: 50%;
		padding: 5px 5px;
	}
</style>