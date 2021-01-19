<template>
  <div id="app">
    <building/>
		<about/>
  </div>
</template>

<script>
import building from "./components/molecules/building.vue"
import about from "./components/molecules/about.vue"
export default {
	name: "app",
	components: {
		building,
		about
	}
}
</script>

<style scoped>

</style>