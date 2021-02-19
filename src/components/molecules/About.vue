<template>
	<div class="about">
		<Title :title="about.title"/>
		<SubTitle :subTitle="about.subTitle"/>
		<Article :text="about.text"/>
	</div>
</template>

<script>
import Title from "../atoms/Title.vue"
import SubTitle from "../atoms/SubTitle.vue"
import Article from "../atoms/Article.vue"
import json from "/data/structure.json"

export default {
	name: "about",
	components: {
		Title,
		SubTitle,
		Article
	},
	data() {
		return {
			about: json.about
		}
	}
}
</script>

<style lang="scss" scoped>
	.about {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		width: 100%;
		padding: 30px 10px 70px;
	}
</style>