<template>
  <div class="navigation">
    <Logo :logoText="navigation.logo"/>
    <NavigationIcons :icons="navigation.icons"/>
  </div>	
</template>

<script>
  import Logo from "../atoms/Logo.vue"
  import NavigationIcons from "../molecules/NavigationIcons.vue"
  export default {
    name: "Navigation",
    components: {
      Logo,
      NavigationIcons
    },
    props: {
      navigation: Object
    }
  }
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 25px;
    width: 100%;
    height: 45px;
    top: 0;
    padding: 0 5px 10px;
    background-color: $white;
    z-index: 2;
  }
</style>
