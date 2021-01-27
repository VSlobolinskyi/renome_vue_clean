<template>
  <div id="app">
		<navigation/>
    <building/>
		<about/>
		<gallery/>
		<tail/>
  </div>
</template>

<script>
	import building from "./components/molecules/Building.vue"
	import about from "./components/molecules/About.vue"
	import gallery from "./components/organisms/Gallery.vue"
	import tail from "./components/organisms/Tail.vue"
	import navigation from "./components/organisms/Navigation.vue"
	export default {
		name: "app",
		components: {
			building,
			about,
			gallery,
			tail,
			navigation
		}
	}
</script>