<template>
	<p class="about__text">{{about.text}}</p>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "aboutText",
		data() {
			return {
				about: json.about
			}
		}
	}
</script>

<style lang="scss" scoped>
	.about__text {
		margin: 0;
		padding: 0;
		font-size: 12px;
		letter-spacing: 2px;
		line-height: 30px;
		color: $darkBlue;
		font-family: "Montserrat", "Ariel", "Times New Roman", "Times";
		cursor: default;
	}
</style>