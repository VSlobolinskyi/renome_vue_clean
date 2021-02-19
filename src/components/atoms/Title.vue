<template>
  <div>
    <h2 :class="{'title--white': title.white}" class="title">{{title.innerText}}</h2>
  </div> 
</template>

<script>
	export default {
		name: "Title",
    props: ["title"]
	}
</script>

<style lang="scss">
  .title {
		margin: 0;
		padding: 0;
		font-size: 38px;
		letter-spacing: 8px;
		color: $darkBlue;
		font-family: "Axis", "Ariel", "Times New Roman", "Times";
		cursor: default;
		
		&--white {
			color: $white;
			margin: 0 0 5px;
			font-size: 28px;
			letter-spacing: 3px;
		}
	}
</style>