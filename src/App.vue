<template>
  <div id="app">
		<Navigation :navigation="json.navigation"/>
		<Carousel :carousel="json.carousel"/>
    <Building :images="json.building.images"/>
		<About :about="json.about"/>
		<Gallery :gallery="json.gallery"/>
		<Footer :footer="json.footer"/>
  </div>
</template>

<script>
	import Building from "./components/molecules/Building.vue"
	import About from "./components/molecules/About.vue"
	import Gallery from "./components/organisms/Gallery.vue"
	import Footer from "./components/organisms/Footer.vue"
	import Navigation from "./components/organisms/Navigation.vue"
	import Carousel from "./components/organisms/Carousel.vue"
	import localJson from "/data/structure.json"
	export default {
		name: "App",
		components: {
			Building,
			About,
			Gallery,
			Footer,
			Navigation,
			Carousel
		},
		data() {
			return {
				json: {},
				isFetch: false
			}
		},
		created() {
			this.isFetch ? fetch("https://raw.githubusercontent.com/Hetachi/FrontEndTraining/master/structure.json").then(response => {
			this.json = response.json();
			console.log(json);
			}).catch(error => console.log(error)) : this.json = localJson;
		}
	}	
</script>

<style lang="scss">
	@import "./styles/globalStyles.scss";
</style>