<template>
	<p class="icons__cart-status">{{cartStatus.innerText}}</p>
</template>

<script>
	export default {
		name: "cartStatus",
		data () {
			return {
				cartStatus: {
					id: 1,
					innerText: "5"
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
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