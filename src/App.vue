<template>
  <div id="app">
		<Navigation/>
		<Home/>
    <Building/>
		<About/>
		<Gallery/>
		<Tail/>
  </div>
</template>

<script>
	import Building from "./components/molecules/Building.vue"
	import About from "./components/molecules/About.vue"
	import Gallery from "./components/organisms/Gallery.vue"
	import Tail from "./components/organisms/Tail.vue"
	import Navigation from "./components/organisms/Navigation.vue"
	import Home from "./components/organisms/Home.vue"
	export default {
		name: "app",
		components: {
			Building,
			About,
			Gallery,
			Tail,
			Navigation,
			Home
		}
	}
</script>