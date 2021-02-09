<template>
	<div>
		<BuildingImage v-bind:image="image" v-bind:key="image.id" v-for="image in images"/>
	</div>	
</template>

<script>
	import BuildingImage from "../atoms/BuildingImage.vue"
	import json from "../../../data/structure.json"
	export default {
		name: "img2",
		components: {
			BuildingImage
		},
		data() {
			return {
				images: json.building.images
			}
		}
	}
</script>