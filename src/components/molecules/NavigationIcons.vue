<template>
	<div class="icons">
		<cart/>
		<cartStatus/>
		<stick/>
		<hamburgerButton/>
		<corss/>
	</div>	
</template>

<script>
	import cart from "../atoms/Cart.vue"
	import stick from "../atoms/Stick.vue"
	import corss from "../atoms/Cross.vue"
	import hamburgerButton from "../atoms/HamburgerButton.vue"
	import cartStatus from "../atoms/CartStatus.vue"
	export default {
		name: "navigationIcons",
		components: {
			cart,
			cartStatus,
			stick,
			hamburgerButton,
			corss
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