<template>
	<div class="about">
		<aboutTitle/>
		<aboutSlogan/>
		<aboutText/>
	</div>
</template>

<script>
import aboutTitle from "../atoms/AboutTitle.vue"
import aboutSlogan from "../atoms/AboutSlogan.vue"
import aboutText from "../atoms/AboutText.vue"
export default {
	name: "about",
	components: {
		aboutTitle,
		aboutSlogan,
		aboutText
	}
}
</script>

<style scoped>
	.about {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		width: 100%;
		padding: 30px 10px 70px;
	}
</style>