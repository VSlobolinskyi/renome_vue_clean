<template>
	<div class="tail">
		<followUs/>
		<socialNetworks/>
		<tailLogo/>
		<copyright/>
	</div>
</template>

<script>
	import tailLogo from "../atoms/TailLogo.vue"
	import copyright from "../atoms/Copyright.vue"
	import followUs from "../atoms/FollowUs.vue"
	import socialNetworks from "../molecules/SocialNetworks.vue"
	export default {
		name: "tail",
		components: {
			tailLogo,
			copyright,
			followUs,
			socialNetworks
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