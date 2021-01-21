<template>
  <div id="app">
    <building/>
		<about/>
		<gallery/>
  </div>
</template>

<script>
	import building from "./components/molecules/building.vue"
	import about from "./components/molecules/about.vue"
	import gallery from "./components/organisms/gallery.vue"
	export default {
		name: "app",
		components: {
			building,
			about,
			gallery
		}
	}
</script>