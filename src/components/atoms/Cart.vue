<template>
	<div>
		<img v-bind:alt="cart.alt" v-bind:src="require(`../../assets/icons/${cart.src}`)" class="icons__cart">
		<p class="icons__cart-status">{{cartStatus.innerText}}</p>
	</div>
</template>

<script>
	import json from "../../../data/structure.json"
	export default {
		name: "cart",
		data() {
			return {
				cart: json.navigation.navigationIcons.cart,
				cartStatus: {
					id: 1,
					innerText: "5"
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.icons__cart {
		display: inline-block;
		position: relative;
		padding: 0 3px;
		margin:  0 0 -1.5px 0;
		width: 15px;
		height: 12px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.icons__cart-status {
		display: inline-block;
		position: relative;
		padding: 0 3px;
		font-size: 12px;
		letter-spacing: 2px;
		font-family: "Montserrat";
		cursor: default;
	}
</style>