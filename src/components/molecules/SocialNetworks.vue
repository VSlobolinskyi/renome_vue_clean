<template>
	<div class="social-networks">
		<socialNetworkIcon v-bind:icon="icon" v-bind:key="icon.id" v-for="icon in icons" />
	</div>
</template>

<script>
	import socialNetworkIcon from "../atoms/SocialNetworkIcon.vue"
	export default {
		name: "socialNetwokrs",
		components: {
			socialNetworkIcon
		},
		data() {
			return {
				icons: [
					{
						id: 1,
						src: require("../../assets/icons/facebook_icon.svg"),
						alt: "Facebook icon",
						href: "#"
					},
					{
						id: 2,
						src: require("../../assets/icons/twitter_icon.svg"),
						alt: "Twitter icon",
						href: "#"
					},
					{
						id: 3,
						src: require("../../assets/icons/google_plus_icon.svg"),
						alt: "Google plus icon",
						href: "#"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.social-networks {
		display: flex;
		align-self: center;
	}
</style>