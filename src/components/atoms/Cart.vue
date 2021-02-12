<template>
	<img v-bind:alt="cart.alt" v-bind:src="require(`../../assets/icons/${cart.src}`)" class="icons__cart">
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "cart",
		data() {
			return {
				cart: json.navigation.navigationIcons.cart
			}
		}
	}
</script>

<style lang="scss" scoped>
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