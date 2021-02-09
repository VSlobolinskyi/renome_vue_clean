<template>
	<img v-bind:src="require(`../../assets/images/${img1.src}`)" v-bind:alt="img1.alt" class="building__img1">
</template>

<script>
export default {
	name: "img1",
	data(){ 
		return {
			img1: {
				id: 1,
				src: "about_img_2.png",
				alt: "Restorant full building view"
			}
		}
	}
}
</script>

<style scoped>
	.building__img1 {
		width: 81%;
		padding: 0 0 0 16%;
	}
</style>