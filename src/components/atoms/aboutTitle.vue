<template>
	<h2 class="about__title">{{title.innerText}}</h2>
</template>

<script>
	export default {
		name: "aboutTitle",
		data() {
			return {
				title: {
					id: 1,
					innerText: "about"
				}
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