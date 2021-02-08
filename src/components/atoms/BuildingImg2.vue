<template>
	<img v-bind:src="img2.src" v-bind:alt="img2.alt" class="building__img2">
</template>

<script>
export default {
	name: "img2",
	data(){ 
		return {
			img2: {
				id: 1,
				src: require("../../assets/images/about_img_1.png"),
				alt: "Restorant enterance door view"
			}
		}
	}
}
</script>

<style scoped>
	.building__img2 {
		position: relative;
		width: 81%;
		margin: -12% 0 0;
		padding: 0 0 0 3%;
	}
</style>