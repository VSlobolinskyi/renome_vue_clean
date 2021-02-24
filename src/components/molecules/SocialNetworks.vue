<template>
	<div class="social-networks">
		<SocialNetworkIcon :icon="icon" :key="icon.id" v-for="icon in icons" />
	</div>
</template>

<script>
	import SocialNetworkIcon from "../atoms/SocialNetworkIcon.vue"
	export default {
		name: "SocialNetwokrs",
		components: {
			SocialNetworkIcon
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

<style lang="scss" scoped>
	.social-networks {
		display: flex;
		align-self: center;
	}
</style>
