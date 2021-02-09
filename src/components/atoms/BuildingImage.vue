<template>
	<img v-bind:src="require(`../../assets/images/${image.src}`)" v-bind:alt="image.alt" v-bind:class="{'building__img1': image.id==1, 'building__img2': image.id==2}">
</template>

<script>
export default {
	name: "img1",
	props: ["image"]
}
</script>

<style scoped>
	.building__img1 {
		width: 81%;
		padding: 0 0 0 16%;
	}
	.building__img2 {
		position: relative;
		width: 81%;
		margin: -12% 0 0;
		padding: 0 0 0 3%;
	}
</style>