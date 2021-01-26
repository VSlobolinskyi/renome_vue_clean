<template>
	<p class="about__text">{{text.innerText}}</p>
</template>

<script>
	export default {
		name: "aboutText",
		data() {
			return {
				text: {
					id: 1,
					innerText: "Renome it is renowned restaurant  delights the senses with elegant ambiance, gracious service and delectable menus in the heart Of Manhattan's. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant's grand modern architecture. Renome offers the room for private dining where guests enjoy creative foods and sumptuous late night desserts. Is one Of the few Manhattan restaurants to have a coveted 3—Star Michelin rating."
				}
			}
		}
	}
</script>

<style scoped>
	.about__text {
		margin: 0;
		padding: 0;
		font-size: 12px;
		letter-spacing: 2px;
		line-height: 30px;
		color: var(--darkBlue);
		font-family: "Montserrat", "Ariel", "Times New Roman", "Times";
		cursor: default;
	}
</style>