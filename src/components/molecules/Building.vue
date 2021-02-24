<template>
	<div>
		<img :src="require(`/src/assets/images/${images[0].src}`)" :alt="images[0].alt" class="building-image--top">
		<img :src="require(`/src/assets/images/${images[1].src}`)" :alt="images[1].alt" class="building-image--bottom">
	</div>	
</template>

<script>
	import json from "/data/structure.json"
	export default {
		name: "Building",
		data() { 
			return {
				images: json.building.images
			}
		}
	}
</script>

<style lang="scss">
	.building-image {
		width: 81%;
		
		&--top{
			padding: 0 0 0 16%;
		}
		
		&--bottom{
			position: relative;
			margin: -12% 0 0;
			padding: 0 0 0 3%;
		}
	}
</style>