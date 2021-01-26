<template>
	<div>
		<buildingImg1/>
		<buildingImg2/>
	</div>	
</template>

<script>
	import buildingImg1 from "../atoms/BuildingImg1.vue"
	import buildingImg2 from "../atoms/BuildingImg2.vue"
	export default {
		name: "img2",
		components: {
			buildingImg1,
			buildingImg2
		}
	}
</script>