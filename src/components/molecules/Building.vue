<template>
	<div>
		<img v-bind:src="require(`/src/assets/images/${images[0].src}`)" v-bind:alt="images[0].alt" class="building__img1">
		<img v-bind:src="require(`/src/assets/images/${images[1].src}`)" v-bind:alt="images[1].alt" class="building__img2">
	</div>	
</template>

<script>
	import json from "/data/structure.json"
	export default {
		name: "img2",
		data() { 
			return {
				images: json.building.images
			}
		}
	}
</script>

<style lang="scss">
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