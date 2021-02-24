<template>
	<div :class="{'carousel-element--top': imageContainer.isTop, 'carousel-element--hidden': imageContainer.isHidden}" class="carousel-element">
		<div class="carousel-element__shader"></div>
		<img :src="require(`../../assets/images/${imageContainer.image.src}`)" :alt="imageContainer.image.alt" class="carousel-element__image"> 
		<TextBox :textBox="imageContainer.textBox"/>
	</div>
</template>

<script>
	import TextBox from "../molecules/TextBox.vue"
	import Title from "../atoms/Title.vue"
	import SubTitle from "../atoms/SubTitle.vue"
	export default {
		name: "CarouselElemet",
		components: {
			TextBox,
			Title,
			SubTitle
		},
		props: ["imageContainer"]
	}
</script>

<style lang="scss" scoped>
	.carousel-element {
		position: absolute;
		visibility: visible;
		right: 0;
		left: 0;
		height: 140vw;
		width: 100vw;
		transition: left 0.4s;

		&--hidden{
			left: 100vw;
		}
		
		&--top{
			z-index: 1;
		}

		&__shader {
			position: absolute;
			background-color: $darkBlue;
			width: 100%;
			height: 100%;
			opacity: 0.12;
			z-index: 1;
		}

		&__image {
			position: relative;
			width: 100%;
			height: 100%;
		}
	}	
</style>