<template>
  <div id="app">
		<Navigation/>
		<Carousel/>
    <Building/>
		<About/>
		<Gallery/>
		<Footer/>
  </div>
</template>

<script>
	import Building from "./components/molecules/Building.vue"
	import About from "./components/molecules/About.vue"
	import Gallery from "./components/organisms/Gallery.vue"
	import Footer from "./components/organisms/Footer.vue"
	import Navigation from "./components/organisms/Navigation.vue"
	import Carousel from "./components/organisms/Carousel.vue"
	export default {
		name: "App",
		components: {
			Building,
			About,
			Gallery,
			Footer,
			Navigation,
			Carousel
		}
	}	
</script>

<style lang="scss">
	@import "./styles/globalStyles.scss";
</style>