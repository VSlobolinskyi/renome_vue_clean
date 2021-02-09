<template>
	<div class="about">
		<AboutTitle/>
		<AboutSlogan/>
		<AboutText/>
	</div>
</template>

<script>
import AboutTitle from "../atoms/AboutTitle.vue"
import AboutSlogan from "../atoms/AboutSlogan.vue"
import AboutText from "../atoms/AboutText.vue"
export default {
	name: "about",
	components: {
		AboutTitle,
		AboutSlogan,
		AboutText
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