<template>
	<img v-bind:alt="cart.alt" v-bind:src="cart.src" class="icons__cart">
</template>

<script>
	export default {
		name: "cart",
		data () {
			return {
				cart: {
					id: 1,
				
				}
			}
		}
	}
</script>

<style scoped>
	.icons__cart {
		display: inline-block;
		position: relative;
		padding: 0 3px;
		width: 15px;
		height: 12px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
</style>