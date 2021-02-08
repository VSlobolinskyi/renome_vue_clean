<template>
	<h2 class="about__title">{{about.title}}</h2>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "aboutTitle",
		data() {
			return {
				about: json.about
			}
		}
	}
</script>

<style scoped>
	.about__title {
		margin: 0;
		padding: 0;
		font-size: 38px;
		letter-spacing: 8px;
		color: var(--darkBlue);
		font-family: "Axis", "Ariel", "Times New Roman", "Times";
		cursor: default;
	}
</style>