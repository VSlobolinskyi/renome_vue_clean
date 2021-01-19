<template>
	<div>
		<buildingImg1/>
		<buildingImg2/>
	</div>	
</template>

<script>
	import buildingImg1 from "../atoms/buildingImg1.vue"
	import buildingImg2 from "../atoms/buildingImg2.vue"
	export default {
		name: "img2",
		components: {
			buildingImg1,
			buildingImg2
		}
	}
</script>

<style scoped>

</style>