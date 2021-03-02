<template>
	<div class="footer">
		<p class="footer__follow-us">{{footer.followUs}}</p>
		<SocialNetworks :icons="footer.icons"/>
		<TailLogo/>
		<p class="footer__copyright">{{footer.coppyright}}</p>
	</div>
</template>

<script>
	import TailLogo from "../atoms/TailLogo.vue"
	import SocialNetworks from "../molecules/SocialNetworks.vue"
	export default {
		name: "Footer",
		components: {
			TailLogo,
			SocialNetworks
		},
		props: ["footer"],
		props: {
			footer: Object
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		position: relative;
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		background-color: $gray;
		padding: 20px 10px;
		width: 100vw;
		cursor: default;
		font-size: 12px;
		color: $darkBlue;

		&__follow-us {
			align-self: center;
			padding: 15px 0;
			margin: 0;
			line-height: 25px;
			font-family: "Montserrat", "Ariel", "Times New Roman", "Times";
			text-align: right;
			text-transform: uppercase;
		}

		&__copyright {
			text-align: center;
			padding: 0 0 10px;
			margin: 0;
			letter-spacing: 1px;
			font-family: "Axis", "Ariel", "Times New Roman", "Times";
			text-transform: uppercase;
		}
	}
</style>