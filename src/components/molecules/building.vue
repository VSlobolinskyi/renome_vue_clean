<template>
	<div>
		<BuildingImg1/>
		<BuildingImg2/>
	</div>	
</template>

<script>
	import BuildingImg1 from "../atoms/BuildingImg1.vue"
	import BuildingImg2 from "../atoms/BuildingImg2.vue"
	export default {
		name: "img2",
		components: {
			BuildingImg1,
			BuildingImg2
		}
	}
</script>