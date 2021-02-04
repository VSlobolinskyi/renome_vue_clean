<template>
	<div class="home">
		<homeImageContainer v-bind:imageContainer="imageContainer" v-bind:key="imageContainer.id" v-for="imageContainer in containers"/>
		<HomeArrowContainer v-bind:containers="containers"/>
	</div>
</template>

<script>
	import HomeArrowContainer from "../molecules/HomeArrowContainer.vue"
	import homeImageContainer from "../molecules/HomeImageContainer.vue"
	export default {
		name: "home",
		components: {
			HomeArrowContainer,
			homeImageContainer
		},
		data() {
			return {
				containers: [
					{
						id: 1,
						isHidden: 0,
						isTop: 1,
						img: {
							src: require("../../assets/images/carousel_img_1.png"),
							alt: "Delecious omlette"
						},
						textBox: {
							whiteText: "made with love 1",
							crimsonText: "for you 1"
						}
					},
					{
						id: 2,
						isHidden: 1,
						isTop: 1,
						img: {
							src: require("../../assets/images/carousel_img_2.png"),
							alt: "Captivating desert"
						},
						textBox: {
							whiteText: "made with love 2",
							crimsonText: "for you 2"
						}
					},
					{
						id: 3,
						isHidden: 1,
						isTop: 1,
						img: {
							src: require("../../assets/images/carousel_img_3.png"),
							alt: "Fragrant spices"
						},
						textBox: {
							whiteText: "made with love 3",
							crimsonText: "for you 3"
						}
					}
				]
			}
		}
	}
</script>

<style scoped>
	.home {
		position: relative;
		margin: 60px 0 70px;
		height: 140vw;
		width: 100vw;
		overflow: hidden;
	}
</style>