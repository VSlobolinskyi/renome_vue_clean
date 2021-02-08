<template>
	<div class="icons">
		<Cart/>
		<CartStatus/>
		<Stick/>
		<HamburgerButton/>
		<Corss/>
	</div>	
</template>

<script>
	import Cart from "../atoms/Cart.vue"
	import Stick from "../atoms/Stick.vue"
	import Corss from "../atoms/Cross.vue"
	import HamburgerButton from "../atoms/HamburgerButton.vue"
	import CartStatus from "../atoms/CartStatus.vue"
	export default {
		name: "navigationIcons",
		components: {
			Cart,
			CartStatus,
			Stick,
			HamburgerButton,
			Corss
		}
	}
</script>

<style scoped>
	.icons {
		position: relative;
		display: flex;
		align-items: center;
		padding: 5px 10px 0 0;
	}
</style>