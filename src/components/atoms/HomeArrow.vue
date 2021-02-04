<template>
	<div v-on:click="traverse(arrow, containers)" class="home__arrow-outline">
		<img v-bind:src="arrow.src" v-bind:alt="arrow.alt" class="home__arrow">
	</div>
</template>

<script>
	export default {
		name: "homeArrow",
		props: ["arrow", "containers"],
		methods: {
			traverse: function(arrow, containers) {
				console.log(containers);
				const length = containers.length;
				
				let active = 0;
				for (; active < length-1 ; active++) {
					if (!containers[active].isHidden){
						break;
					}
				}
				if (arrow.direction == 'left'){
					containers[active].isTop = 1;
					containers[active].isHidden = 1;
					if(active == 0){
						active = length-1;
					}
					else {
						active--;
					}
					containers[active].isTop = 0;
					containers[active].isHidden = 0;
				}
				if (arrow.direction == 'right') {
					containers[active].isTop = 0;
					containers[active].isHidden = 1;
					if(active == length-1){
						active = 0;
					}
					else {
						active++;
					}
					containers[active].isTop = 1;
					containers[active].isHidden = 0;
				}
			}
		}
	}
</script>

<style scoped>
	.home__arrow-outline {
		position: relative;
		display: flex;
		align-content: center;
		justify-content: space-around;
		border: 2px solid var(--white);
		width: 55px;
		height: 55px;
		color: var(--white);
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.home__arrow {
		width: 24px;
		height: 40px;
		align-self: center;
	}
</style>