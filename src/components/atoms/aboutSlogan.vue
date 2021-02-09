<template>
	<p class="about__slogan">{{about.subTitle}}</p>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "aboutSlogan",
		data() {
			return {
				about: json.about
			}
		}
	}
</script>

<style scoped>
	.about__slogan {
		text-transform: uppercase;
		color: var(--crimson);
		padding: 10px 0 10px;
		margin: 0;
		font-size: 11px;
		letter-spacing: 1px;
		font-family: "Montserrat", "Ariel", "Times New Roman", "Times";
		cursor: default;
	}
</style>