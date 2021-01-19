<template>
	<p class="about__slogan">{{slogan.innerText}}</p>
</template>

<script>
	export default {
		name: "aboutSlogan",
		data() {
			return {
				slogan: {
					id: 1,
					innerText: "we create delecious memories"
				}
			}
		}
	}
</script>

<style scoped>
	@import "../../styles/variables.css";
	@import "../../styles/fonts.css";
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