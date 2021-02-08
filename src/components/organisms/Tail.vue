<template>
	<div class="tail">
		<FollowUs/>
		<SocialNetworks/>
		<TailLogo/>
		<Copyright/>
	</div>
</template>

<script>
	import TailLogo from "../atoms/TailLogo.vue"
	import Copyright from "../atoms/Copyright.vue"
	import FollowUs from "../atoms/FollowUs.vue"
	import SocialNetworks from "../molecules/SocialNetworks.vue"
	export default {
		name: "tail",
		components: {
			TailLogo,
			Copyright,
			FollowUs,
			SocialNetworks
		}
	}
</script>

<style scoped>
	.tail {
		position: relative;
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		background-color: var(--gray);
		padding: 20px 10px;
		width: 100vw;
	}
</style>